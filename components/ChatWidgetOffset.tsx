'use client';

import { useEffect } from 'react';

const DOCK_SELECTOR = '[data-bottom-dock]';
// Ignore percentage anchors such as middle-of-screen (bottom: 50%).
const MAX_BOTTOM_ANCHORED_PX = 160;

type OffsetStyle = CSSStyleSheet | HTMLStyleElement;

function inlineBottomPx(el: HTMLElement | null): number | null {
  if (!el) return null;
  const raw = el.style.bottom.trim().toLowerCase();
  if (!raw.endsWith('px')) return null;
  const value = Number.parseFloat(raw);
  if (!Number.isFinite(value) || value < 0 || value > MAX_BOTTOM_ANCHORED_PX) return null;
  return value;
}

function launcherCoversForm(): boolean {
  const form = document.querySelector<HTMLElement>('[data-offer-form]');
  if (!form) return false;
  const rect = form.getBoundingClientRect();
  const dock = bottomDockHeight();
  const zoneTop = window.innerHeight - dock - 88;
  const zoneLeft = window.innerWidth - 88;
  return rect.right > zoneLeft && rect.bottom > zoneTop && rect.top < window.innerHeight - dock;
}

function bottomDockHeight(): number {
  let height = 0;
  document.querySelectorAll<HTMLElement>(DOCK_SELECTOR).forEach((el) => {
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.position !== 'fixed') {
      return;
    }
    const bottom = Number.parseFloat(style.bottom);
    if (!Number.isFinite(bottom) || bottom > 1) return;
    height = Math.max(height, el.offsetHeight);
  });
  return height;
}

function raisedBottom(basePx: number | null, dockHeight: number): number | null {
  if (basePx == null || dockHeight <= 0) return null;
  return Math.ceil(dockHeight + basePx);
}

const NARROW_QUERY = '(max-width: 767px)';

function offsetCss(
  widgetBottom: number | null,
  bubbleBottom: number | null,
  suppressGreeting: boolean
): string {
  const rules: string[] = [
    // Phones were not painting the closed launcher. Keep it displayed on narrow
    // screens without changing the desktop rules. `.lc_text-widget--bubble` is
    // the round launcher button, not the greeting.
    '@media (max-width:767px){#lc_text-widget:not(.lc_text-widget--active):not(.lc_text-widget--inline):not(.lc_text-widget--embedded-live-chat){display:block !important;visibility:visible !important;opacity:1 !important;}#lc_text-widget:not(.lc_text-widget--active) .lc_text-widget--bubble:not(.inline){display:block !important;visibility:visible !important;opacity:1 !important;pointer-events:auto !important;}}',
  ];
  if (suppressGreeting) {
    // The greeting (`.lc_text-widget--prompt`) sits over the offer form on a
    // phone. Hide that pop-up and leave the launcher button.
    rules.push(
      '@media (max-width:767px){#lc_text-widget:not(.lc_text-widget--active) .lc_text-widget--prompt{display:none !important;visibility:hidden !important;opacity:0 !important;pointer-events:none !important;height:0 !important;overflow:hidden !important;}}'
    );
  }
  if (widgetBottom != null) {
    rules.push(
      `#lc_text-widget:not(.lc_text-widget--active):not(.lc_text-widget--inline):not(.lc_text-widget--embedded-live-chat){bottom:${widgetBottom}px !important;}`
    );
  }
  if (bubbleBottom != null) {
    rules.push(
      `#lc_text-widget:not(.lc_text-widget--active):not(.lc_text-widget--inline):not(.lc_text-widget--embedded-live-chat) .lc_text-widget--bubble:not(.inline){bottom:${bubbleBottom}px !important;}`
    );
  }
  return rules.join('');
}

function isClosedStickyWidget(widget: HTMLElement | null): widget is HTMLElement {
  return (
    widget != null &&
    !widget.classList.contains('lc_text-widget--active') &&
    !widget.classList.contains('lc_text-widget--inline') &&
    !widget.classList.contains('lc_text-widget--embedded-live-chat')
  );
}

function clearHostInline(host: HTMLElement) {
  host.style.position = '';
  host.style.top = '';
  host.style.right = '';
  host.style.bottom = '';
  host.style.left = '';
  host.style.zIndex = '';
  host.style.width = '';
  host.style.height = '';
  host.style.overflow = '';
  host.style.margin = '';
  host.style.display = '';
}

/** Put the custom element in the viewport so iOS paints its fixed shadow tree. */
function placeHost(host: HTMLElement, open: boolean, mobileOnly: boolean) {
  const narrow = window.matchMedia(NARROW_QUERY).matches;
  if (!narrow) {
    clearHostInline(host);
    if (mobileOnly) host.style.display = 'none';
    return;
  }
  host.style.display = '';
  host.style.margin = '0';
  host.style.overflow = 'visible';
  host.style.position = 'fixed';
  host.style.right = '0px';
  host.style.bottom = '0px';
  if (open) {
    host.style.top = '0px';
    host.style.left = '0px';
    host.style.width = 'auto';
    host.style.height = 'auto';
    host.style.zIndex = '120';
    return;
  }
  host.style.top = 'auto';
  host.style.left = 'auto';
  host.style.width = '0px';
  host.style.height = '0px';
  // Under the sticky call/offer bar (z-50) so a mis-placed launcher cannot cover it.
  host.style.zIndex = '45';
}

function hideGreetingPrompt(root: ShadowRoot) {
  root.querySelectorAll<HTMLElement>('.lc_text-widget--prompt').forEach((prompt) => {
    prompt.style.setProperty('display', 'none', 'important');
    prompt.style.setProperty('visibility', 'hidden', 'important');
    prompt.style.setProperty('pointer-events', 'none', 'important');
    prompt.setAttribute('hidden', '');
    prompt.setAttribute('aria-hidden', 'true');
  });
}

/**
 * The LeadConnector launcher is position:fixed inside an open shadow root, so page
 * CSS cannot move it. While a bottom dock is visible, inject an override that keeps
 * the closed launcher the same distance above that dock as the widget's own offset.
 */
export default function ChatWidgetOffset({
  mobileOnly = false,
  suppressGreeting = false,
}: {
  mobileOnly?: boolean;
  /** Offer pages: keep the launcher, hide the auto greeting so it cannot cover the form. */
  suppressGreeting?: boolean;
}) {
  useEffect(() => {
    const sheets = new WeakMap<ShadowRoot, OffsetStyle>();
    const appliedCss = new WeakMap<ShadowRoot, string>();
    const watchedRoots = new WeakSet<ShadowRoot>();
    let frame = 0;

    const setCss = (root: ShadowRoot, css: string) => {
      let target = sheets.get(root);

      if (!css && !target) return;

      if (target instanceof CSSStyleSheet) {
        if (!root.adoptedStyleSheets.includes(target)) {
          root.adoptedStyleSheets = [...root.adoptedStyleSheets, target];
        }
      } else if (target && !root.contains(target)) {
        root.appendChild(target);
      }

      if (appliedCss.get(root) === css) return;
      appliedCss.set(root, css);

      if (target instanceof CSSStyleSheet) {
        target.replaceSync(css);
        return;
      }

      if (!target) {
        try {
          const sheet = new CSSStyleSheet();
          sheet.replaceSync(css);
          root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
          sheets.set(root, sheet);
          return;
        } catch {
          const style = document.createElement('style');
          style.dataset.ghlChatOffset = 'true';
          root.appendChild(style);
          target = style;
          sheets.set(root, style);
        }
      }

      if (target instanceof HTMLStyleElement) {
        target.textContent = css;
      }
    };

    const applyOffset = () => {
      const dockHeight = bottomDockHeight();
      document.querySelectorAll('chat-widget').forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        const root = node.shadowRoot;
        const widget = root?.querySelector<HTMLElement>('#lc_text-widget') ?? null;
        const open = widget?.classList.contains('lc_text-widget--active') ?? false;
        placeHost(node, open, mobileOnly);
        if (!open && suppressGreeting && launcherCoversForm()) {
          node.style.visibility = 'hidden';
          node.style.pointerEvents = 'none';
        } else if (!open) {
          node.style.visibility = '';
          node.style.pointerEvents = '';
        }
        if (!root) return;
        watchShadow(root);

        if (!isClosedStickyWidget(widget)) {
          if (sheets.has(root)) setCss(root, '');
          return;
        }

        const bubble = root.querySelector<HTMLElement>('.lc_text-widget--bubble');
        if (suppressGreeting) hideGreetingPrompt(root);
        setCss(
          root,
          offsetCss(
            raisedBottom(inlineBottomPx(widget), dockHeight),
            raisedBottom(inlineBottomPx(bubble), dockHeight),
            suppressGreeting
          )
        );
      });
    };

    const shadowObserver = new MutationObserver(schedule);
    function watchShadow(root: ShadowRoot) {
      if (watchedRoots.has(root)) return;
      watchedRoots.add(root);
      shadowObserver.observe(root, {
        attributes: true,
        attributeFilter: ['class', 'style'],
        childList: true,
        subtree: true,
      });
    }

    function schedule() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const widget = document.querySelector('chat-widget');
        if (widget && !widget.shadowRoot) {
          void customElements.whenDefined('chat-widget').then(() => {
            requestAnimationFrame(applyOffset);
          });
        }
        applyOffset();
      });
    }

    const resizeObserver = new ResizeObserver(schedule);
    const observeDocks = () => {
      document.querySelectorAll<HTMLElement>(DOCK_SELECTOR).forEach((el) => {
        resizeObserver.observe(el);
      });
    };

    const bodyObserver = new MutationObserver(() => {
      observeDocks();
      schedule();
    });
    bodyObserver.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('LC_chatWidgetLoaded', schedule);

    observeDocks();
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      bodyObserver.disconnect();
      shadowObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('resize', schedule);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('LC_chatWidgetLoaded', schedule);
      document.querySelectorAll('chat-widget').forEach((node) => {
        if (node instanceof HTMLElement) {
          clearHostInline(node);
          if (mobileOnly) node.style.display = 'none';
        }
        const root = node.shadowRoot;
        const target = root && sheets.get(root);
        if (!root || !target) return;
        if (target instanceof CSSStyleSheet) {
          root.adoptedStyleSheets = root.adoptedStyleSheets.filter((sheet) => sheet !== target);
          return;
        }
        target.remove();
      });
    };
  }, [mobileOnly, suppressGreeting]);

  return null;
}
