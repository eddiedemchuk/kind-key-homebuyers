export {};

declare module 'next/script' {
  interface ScriptProps {
    'data-resources-url'?: string;
    'data-widget-id'?: string;
  }
}
