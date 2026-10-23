import type { CitySituationPage } from '@/data/cityFirePages';

const home = { name: 'Home', path: '/' };
const cityCrumb = { name: 'Edgewood', path: '/areas/edgewood' };

const notAgent =
  'KindKey Home Buyers LLC is a principal buyer at 640 1st St SW in Auburn. KindKey is not a real estate agent, a contractor, or code enforcement, and KindKey does not list the house.';

const closingSentence =
  'KindKey does not charge an agent commission or a separate assignment fee. Closing-cost responsibility is stated in the written purchase agreement and can vary. Mortgage payoffs, liens, taxes, and other obligations can reduce proceeds. The closing agent provides a settlement statement before you close.';

const place =
  'Edgewood is an incorporated Pierce County city between Milton, Fife, Puyallup, and Sumner. It incorporated on February 28, 1996. Most residents live on North Hill: single-family houses, longer driveways, and shops or sheds set back from the street. A smaller share of the city sits at the base of the hill in the Puyallup River valley. Day-to-day travel runs on Meridian Avenue E, which is State Route 161, and on Jovita Boulevard. Jovita is an older local name, not a separate city.';

const septic =
  'Many North Hill and Jovita lots, especially older acreage, still use a septic system, and some use a private well. Other Edgewood houses are on public sewer and public water. The city name does not tell you which. In Pierce County, on-site sewage questions are handled by the Tacoma-Pierce County Health Department, not by the city building counter. KindKey does not inspect, pump, or certify a septic system or a well. Tell us what serves the house. A failing system does not stop an offer.';

const permits =
  'Inside the city limits, building permits and city code letters are a City of Edgewood matter. Community Development is at Edgewood City Hall, 10440 Dom Calata Way E, Edgewood, WA 98372. The permit line published by the city is (253) 952-3299. A Pierce County letter can mean the parcel is outside the city even when the mailing address says Edgewood. Read the header.';

const reservation =
  'Parts of Edgewood lie inside the Puyallup Indian Reservation boundary. That can change what a title report has to explain. KindKey does not interpret tribal jurisdiction. Tell the closing agent if you already know the parcel is inside that boundary.';

const attorneyPressure =
  'If a foreclosure notice, a delinquent mortgage, or another kind of financial pressure is part of the sale, talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret those rules or tell you they do not apply.';

function edgewoodPage(
  page: Omit<CitySituationPage, 'citySlug'> & { citySlug?: string }
): CitySituationPage {
  return { citySlug: 'edgewood', ...page };
}

export const edgewoodFirePage: CitySituationPage = edgewoodPage({
  kind: 'fire',
  path: '/areas/edgewood/sell-fire-damaged-house',
  title: 'Sell a Fire-Damaged House in Edgewood, WA',
  description:
    'Sell a fire-damaged Edgewood house as-is, including North Hill shops and valley houses. KindKey is an Auburn principal buyer. East Pierce Fire & Rescue covers the city.',
  h1: 'Sell a Fire-Damaged House in Edgewood, WA',
  intro: [
    `You can sell a fire-damaged house in Edgewood without rebuilding it, replacing a shop roof, or finishing an insurance project first. ${notAgent} KindKey does not give insurance advice.`,
    place,
    'East Pierce Fire & Rescue covers Edgewood. The city’s former Fire District 8 joined East Pierce in 2010, and East Pierce’s 2022 standards of cover list Station 118 at 10105 24th Street E. A kitchen fire in a North Hill rambler, a shop fire set back from Meridian, and a valley house with water in the crawlspace are different jobs. Bring the address. We price the house you have.',
  ],
  sections: [
    {
      heading: 'North Hill fires and valley fires are not the same',
      paragraphs: [
        'On North Hill, the practical problem is often a long driveway, a detached shop, and a house the owner no longer lives in. Firefighting water and a wet Western Washington winter can sit in an attic or a shop that was already full. In the valley, at the base of the hill, drainage and access are the different problem. The City of Edgewood’s stormwater materials describe Jovita Creek, in the northeast of the city, flowing through a steep-sided canyon. That is a description of the basin, not a diagnosis of your lot.',
        'You do not need a City of Edgewood reconstruction permit, a finished insurance scope, or a cleared shop before the visit. Photos of the origin, the roof, and any posting are enough to start. If the structure is not safe to enter, say so.',
      ],
    },
    {
      heading: 'Outbuildings, septic, and the claim',
      paragraphs: [
        `Acreage sales in Edgewood often include a shop, a barn, an RV cover, or a second structure that burned while the house did not, or the reverse. ${septic} A fire does not turn KindKey into a septic inspector.`,
        'Your insurer and your mortgage company are your relationships, not ours. Talk with them, and with a Washington attorney if you do not understand an assignment of claim proceeds. You can ask for an offer while a claim is open. We will not tell you whether to wait for the check.',
        reservation,
      ],
    },
    {
      heading: 'What the offer does not do',
      paragraphs: [
        'KindKey will not tell you East Pierce has closed a file, or that the City of Edgewood has lifted a posting, because you requested an offer. Keep meeting any deadline that is still yours until the deed transfers.',
        `${closingSentence} ${attorneyPressure}`,
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you buy fire-damaged houses on North Hill and in the Edgewood valley?',
      answer:
        'Yes. KindKey buys fire-damaged and smoke-damaged houses as-is on North Hill, along Jovita Boulevard, on the Meridian corridor, and in the valley portion of the city.',
    },
    {
      question: 'Does a shop or outbuilding fire count?',
      answer:
        'Yes. Tell us whether the fire was in the house, a detached shop, or both. You do not have to demolish the outbuilding before we look.',
    },
    {
      question: 'Do I need an Edgewood permit before you will make an offer?',
      answer:
        'No. You do not need a reconstruction permit or a finished insurance repair. The city’s permit counter is for owners who choose to rebuild. KindKey buys the house as it sits.',
    },
    {
      question: 'Can I sell if the insurance check has not arrived?',
      answer:
        'Yes. KindKey does not advise you on the claim. Ask your insurer and, if needed, an attorney before you sign away claim rights.',
    },
  ],
  related: [
    {
      href: '/areas/edgewood',
      label: 'Sell a house in Edgewood',
      description: 'North Hill, Jovita, Meridian, and the valley.',
    },
    {
      href: '/sell-fire-damaged-house',
      label: 'Sell a fire-damaged house',
      description: 'The King, Pierce, and Kitsap overview.',
    },
    {
      href: '/cash-offer',
      label: 'Request a cash offer',
      description: 'Share the address and what the fire affected.',
    },
    {
      href: '/areas/edgewood/sell-house-before-foreclosure',
      label: 'Edgewood houses before foreclosure',
      description: 'If the fire and a missed mortgage payment are happening together.',
    },
    {
      href: '/blog/sell-fire-damaged-house-edgewood-wa',
      label: 'Selling a fire-damaged house in Edgewood',
      description: 'Station 118, North Hill shops, and the insurance file.',
    },
  ],
  breadcrumbs: [
    home,
    cityCrumb,
    { name: 'Fire-damaged houses', path: '/areas/edgewood/sell-fire-damaged-house' },
  ],
  ctaTitle: 'Get an Edgewood cash offer on a fire-damaged house',
  ctaSubtitle: 'North Hill or the valley, you can sell before the repairs are done.',
});

export const edgewoodForeclosurePage: CitySituationPage = edgewoodPage({
  kind: 'foreclosure',
  path: '/areas/edgewood/sell-house-before-foreclosure',
  title: 'Sell a House Before Foreclosure in Edgewood, WA',
  description:
    'Sell an Edgewood house before foreclosure to KindKey, an Auburn principal buyer. Edgewood is entirely in Pierce County. Talk with an attorney about RCW 61.34. Not legal advice.',
  h1: 'Sell a House Before Foreclosure in Edgewood, WA',
  intro: [
    'If your Edgewood house is heading toward foreclosure, you may be able to sell it before the trustee sale and pay the lender from closing proceeds. KindKey buys the house directly. We are not a real estate agent, a loan modifier, or a foreclosure-rescue company. This page is not legal advice.',
    'Edgewood is entirely in Pierce County. A notice of sale for an Edgewood deed of trust is recorded with the Pierce County Auditor. Milton, next door, can fall in King County or Pierce County. Edgewood does not work that way. The caption on your notice still controls. Do not guess from Meridian Avenue or from a neighbor’s paperwork.',
    attorneyPressure,
  ],
  sections: [
    {
      heading: 'What KindKey can and cannot do in Edgewood',
      paragraphs: [
        `${place} We can look at a North Hill house with a shop full of equipment, or a valley house that is already vacant, without you catching up the loan or repairing the roof first.`,
        'We cannot stop a trustee sale, reinstate your loan, or promise that a closing will beat the date on your notice. If you accept an offer, the closing agent orders a payoff and a title report. The closing date has to be one your attorney believes still works.',
      ],
    },
    {
      heading: 'Acreage, septic, and the payoff',
      paragraphs: [
        `${septic} A failed drain field does not pause a trustee. It does change what a retail buyer’s lender may refuse to finance. KindKey buys as-is, so you do not have to replace the system before the visit.`,
        `${reservation} ${closingSentence}`,
      ],
    },
    {
      heading: 'Pierce County is the file',
      paragraphs: [
        'A lawsuit to restrain a sale is a superior court matter. For an Edgewood parcel, families are pointed to Pierce County, not to the King County courthouse in Kent. KindKey will not prepare that case or tell you the deadline. Ask a Washington attorney or a HUD-approved housing counselor.',
        'Condition, tenants, code letters, and belongings left in a shop do not have to be cleaned up first. Do not deed the house away outside escrow.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is an Edgewood foreclosure recorded in Pierce County?',
      answer:
        'Yes. Edgewood is entirely in Pierce County, so the notice of sale is recorded with the Pierce County Auditor. Milton is the neighbor that can fall in either county. Check the notice anyway.',
    },
    {
      question: 'Will KindKey stop the foreclosure?',
      answer:
        'No. KindKey is a buyer, not a foreclosure consultant. A completed sale may pay the lender from closing proceeds. Only the lender, the trustee, and your attorney can speak to the status of the foreclosure.',
    },
    {
      question: 'Do I have to repair the house or the septic first?',
      answer:
        'No. KindKey can make an as-is offer on a North Hill house, a valley house, or a house with a failed septic or a shop full of belongings. The offer reflects the condition.',
    },
    {
      question: 'What is RCW 61.34 doing on this page?',
      answer:
        'Washington’s distressed-property rules can matter when a sale happens under financial pressure. KindKey does not interpret RCW 61.34. Your attorney can tell you whether it affects your sale.',
    },
  ],
  related: [
    {
      href: '/areas/edgewood',
      label: 'Sell a house in Edgewood',
      description: 'The Edgewood city page.',
    },
    {
      href: '/sell-house-before-foreclosure',
      label: 'Sell a house before foreclosure',
      description: 'The Washington overview. Not a substitute for your notice.',
    },
    {
      href: '/cash-offer',
      label: 'Request a cash offer',
      description: 'An offer does not postpone the trustee.',
    },
    {
      href: '/areas/edgewood/sell-inherited-probate-house',
      label: 'Inherited Edgewood houses',
      description: 'When the loan in default is also an estate problem.',
    },
    {
      href: '/blog/avoiding-foreclosure-in-edgewood-wa',
      label: 'Avoiding foreclosure in Edgewood',
      description: 'Pierce County recording and the state timeline.',
    },
  ],
  breadcrumbs: [
    home,
    cityCrumb,
    { name: 'Before foreclosure', path: '/areas/edgewood/sell-house-before-foreclosure' },
  ],
  ctaTitle: 'Ask for an Edgewood offer before the sale date',
  ctaSubtitle: 'Bring the notice. KindKey will not interpret it. You can say no.',
});

export const edgewoodDistressedPages: CitySituationPage[] = [
  edgewoodPage({
    kind: 'inherited',
    path: '/areas/edgewood/sell-inherited-probate-house',
    title: 'Sell an Inherited or Probate House in Edgewood, WA',
    description:
      'Sell an inherited Edgewood house as-is, including North Hill shops and valley houses. Confirm who can sign with a Pierce County probate attorney. KindKey is the buyer.',
    h1: 'Sell an Inherited or Probate House in Edgewood, WA',
    intro: [
      `You can sell an inherited or probate house in Edgewood without emptying the shop, repairing the roof, or listing it. ${notAgent} KindKey is not a probate attorney or a tax advisor.`,
      'If the decedent lived in Edgewood, Pierce County is the residence county families discuss under the transfer rule in RCW 11.96A.050. Pierce County probate is opened with the Clerk of the Superior Court at 930 Tacoma Ave S in Tacoma. King County Superior Court in Kent is the wrong residence county for an Edgewood resident. KindKey will not choose the courthouse or file the petition.',
      `${place} A parent’s house on North Hill, a valley house, and a parcel inside the Puyallup Indian Reservation boundary can share an Edgewood mailing address and still be different title files.`,
    ],
    sections: [
      {
        heading: 'The North Hill house is often the hard part',
        paragraphs: [
          'Inherited houses in Edgewood are often full of a lifetime of belongings, with a shop the family has not opened in years. You do not have to empty them, paint them, or replace a roof before KindKey looks. Take what the family wants. Leave the rest. If a relative still lives there, do not force that person out so the house looks vacant.',
          septic,
          reservation,
        ],
      },
      {
        heading: 'Authority, the loan, and the county line next door',
        paragraphs: [
          'Letters testamentary or letters of administration, and any order on nonintervention powers, are what the closing agent will ask about. A trust or a transfer-on-death deed is a different path. Agreement among siblings is not a substitute for the signature title requires. Heirs can live in Sumner, Puyallup, Fife, Milton, or out of state.',
          `${attorneyPressure} Milton is the neighbor that can be King County or Pierce County. Do not use Milton’s checklist for an Edgewood parcel.`,
          closingSentence,
        ],
      },
    ],
    faqs: [
      {
        question: 'Can an Edgewood house be sold before probate is finished?',
        answer:
          'Sometimes, if the person with authority can sign and any required court step is done. KindKey does not make that call. Ask a probate attorney, then request an offer if a sale is allowed.',
      },
      {
        question: 'Do I open an Edgewood probate in Kent?',
        answer:
          'If the decedent lived in Edgewood, Pierce County is the residence county under the transfer rule in RCW 11.96A.050. The Pierce County Clerk is at 930 Tacoma Ave S in Tacoma. Ask an attorney before you file.',
      },
      {
        question: 'Does the family have to clean out the shop?',
        answer:
          'No. Belongings, tools, and shop contents can stay. Remove what the family wants to keep before the closing date you agree to.',
      },
      {
        question: 'The inherited house has a septic problem. Can you still buy it?',
        answer:
          'Yes. Tell us. KindKey does not certify the system. You do not have to replace a drain field before we look. The offer reflects the property as it sits.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'Pierce County city page.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'The Washington overview for estate sales.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Your attorney confirms who can sign. You can say no.',
      },
      {
        href: '/areas/edgewood/sell-vacant-house',
        label: 'Vacant Edgewood houses',
        description: 'Many inherited hill houses are already empty.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Inherited houses in Edgewood',
        description: 'Letters, North Hill, and the Tacoma clerk.',
      },
    ],
    breadcrumbs: [
      home,
      cityCrumb,
      { name: 'Inherited or probate', path: '/areas/edgewood/sell-inherited-probate-house' },
    ],
    ctaTitle: 'Ask for an offer on an inherited Edgewood house',
    ctaSubtitle: 'Confirm who can sign with an attorney. KindKey will price the house as it is.',
  }),
  edgewoodPage({
    kind: 'code',
    path: '/areas/edgewood/sell-house-with-code-violations',
    title: 'Sell a House with Code Violations in Edgewood, WA',
    description:
      'Sell an Edgewood house with an open code case or unpermitted shop as-is. City Hall and Pierce County are different offices. KindKey is not code enforcement.',
    h1: 'Sell a House with Code Violations in Edgewood, WA',
    intro: [
      `You can sell an Edgewood house with an open code case, an unpermitted shop, or a stopped addition without finishing the city’s list first. ${notAgent} This page is not legal advice.`,
      permits,
      `${place} Unpermitted work on an Edgewood lot is often a shop, a garage converted to living space, an RV cover, or a room added on a larger North Hill parcel. It can also be debris and vehicles that are visible from Meridian or from a neighbor’s driveway.`,
    ],
    sections: [
      {
        heading: 'City letters, county letters, and septic letters',
        paragraphs: [
          'Those are three different files. A City of Edgewood notice is not a Pierce County notice, and neither one is automatically a septic order. Septic enforcement in Pierce County is commonly a Tacoma-Pierce County Health Department matter. KindKey will not tell you which hearing to attend. If the paper has a hearing, a fine, or an order to vacate, talk with a Washington attorney.',
          septic,
          'You do not have to pull the permit, pass the inspection, or tear out the shop before we visit. Photos of the notice and of the structure are enough to start. Until recording, the deadline on the letter is still yours.',
        ],
      },
      {
        heading: 'What an offer does not close',
        paragraphs: [
          reservation,
          `KindKey does not negotiate the citation or promise that a fine disappears when you sign. Amounts that must be paid show on the settlement statement. ${closingSentence}`,
          attorneyPressure,
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell an Edgewood house before the code case is closed?',
        answer:
          'Yes. KindKey buys Edgewood houses with open, expired, or missing permits. The city or county that wrote the notice still controls its case.',
      },
      {
        question: 'Where is the Edgewood permit counter?',
        answer:
          'Community Development is at Edgewood City Hall, 10440 Dom Calata Way E, Edgewood, WA 98372. The city’s published permit line is (253) 952-3299. That counter is for owners who choose to permit the work. KindKey does not require you to go there first.',
      },
      {
        question: 'Is an unpermitted shop the same as a septic failure?',
        answer:
          'No. A building notice and an on-site sewage notice come from different offices. Read the letterhead. KindKey can still look at the property either way.',
      },
      {
        question: 'Will you appear at the hearing for me?',
        answer:
          'No. KindKey is the buyer, not your code attorney and not the city. Talk with a Washington attorney if the notice has a hearing or a fine you do not understand.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'The city page, with North Hill and Jovita context.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The Washington overview.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Send the address and say what the letter says.',
      },
      {
        href: '/areas/edgewood/sell-hoarder-house',
        label: 'Hoarder and heavy-repair houses in Edgewood',
        description: 'Shops, acreage, and houses that are full.',
      },
      {
        href: '/blog/sell-house-with-code-violations-edgewood-wa',
        label: 'Code violations in Edgewood',
        description: 'Unpermitted work, City Hall, and the health department.',
      },
    ],
    breadcrumbs: [
      home,
      cityCrumb,
      { name: 'Code violations', path: '/areas/edgewood/sell-house-with-code-violations' },
    ],
    ctaTitle: 'Get an Edgewood offer while the notice is open',
    ctaSubtitle: 'You do not have to finish the city’s list first. You can say no.',
  }),
  edgewoodPage({
    kind: 'tenants',
    path: '/areas/edgewood/sell-house-with-tenants',
    title: 'Sell a House with Tenants in Edgewood, WA',
    description:
      'Sell an Edgewood rental with tenants in place, including houses on acreage. KindKey is an Auburn principal buyer. Landlord-tenant questions belong with an attorney.',
    h1: 'Sell a House with Tenants in Edgewood, WA',
    intro: [
      `You can sell an Edgewood house with tenants in place. KindKey does not require a vacant North Hill house or an empty shop before the purchase. ${notAgent} KindKey is not your landlord-tenant lawyer.`,
      'Washington has rules about notice, entry, deposits, and ending a tenancy. KindKey will not ask you to remove occupants so the house is easier to see, and KindKey will not coach an eviction. If you are unsure whether you can enter, talk with a Washington attorney before you do it.',
      place,
    ],
    sections: [
      {
        heading: 'Rentals on acreage are a different walkthrough',
        paragraphs: [
          'An Edgewood rental may be a house on a larger lot with a shop, an ADU, or a room over a garage. Someone may be living in the house while the shop is full of the owner’s tools, or the reverse. Tell us who is there and whether any agreement is written, month-to-month, or unclear.',
          `${septic} Tenants do not have to move out so a septic company can stage a repair before we look. Do not promise the occupants a rent change or a move-out date on KindKey’s behalf.`,
        ],
      },
      {
        heading: 'Pierce County title, deposits, and pressure',
        paragraphs: [
          `Edgewood deeds record with the Pierce County Auditor. ${reservation}`,
          `Security deposits the seller holds may need to be accounted for at closing. ${closingSentence}`,
          attorneyPressure,
        ],
      },
    ],
    faqs: [
      {
        question: 'Do Edgewood tenants have to leave before KindKey buys the house?',
        answer:
          'No. KindKey can buy with tenants in place. Do not force occupants out to make the sale easier. Landlord-tenant questions belong with a Washington attorney.',
      },
      {
        question: 'The rental is on a septic system. Is that a problem?',
        answer:
          'Tell us. KindKey does not certify the system and does not require you to replace it, or to deliver the house empty, before an offer.',
      },
      {
        question: 'I inherited an Edgewood rental. Who signs?',
        answer:
          'The person with authority to sign. That is a probate question for your attorney if the owner has died. KindKey will not guess which relative can deed the house.',
      },
      {
        question: 'Are you going to manage the tenants for me?',
        answer:
          'No. KindKey is the buyer. We do not list the house or manage it for you before closing.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'The Edgewood city page.',
      },
      {
        href: '/sell-house-with-tenants',
        label: 'Sell a house with tenants',
        description: 'The Washington overview.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say who lives there. You do not have to deliver it vacant.',
      },
      {
        href: '/areas/edgewood/sell-inherited-probate-house',
        label: 'Inherited Edgewood houses',
        description: 'Inherited rentals need a signer with authority.',
      },
      {
        href: '/areas/milton',
        label: 'Sell a house in Milton',
        description: 'The next city west. Milton can fall in either county.',
      },
    ],
    breadcrumbs: [
      home,
      cityCrumb,
      { name: 'Houses with tenants', path: '/areas/edgewood/sell-house-with-tenants' },
    ],
    ctaTitle: 'Request a cash offer on an Edgewood rental',
    ctaSubtitle:
      'You do not have to deliver the house vacant. Ask an attorney before you end a tenancy.',
  }),
  edgewoodPage({
    kind: 'hoarder',
    path: '/areas/edgewood/sell-hoarder-house',
    title: 'Sell a Hoarder or Heavy-Repair House in Edgewood, WA',
    description:
      'Sell an Edgewood hoarder house or heavy-fixer on acreage as-is, including shops and outbuildings. No clean-out required. KindKey is an Auburn principal buyer.',
    h1: 'Sell a Hoarder or Heavy-Repair House in Edgewood, WA',
    intro: [
      `You can sell an Edgewood house that is full of belongings, or a heavy-fixer on acreage, without renting a dumpster or hiring a contractor first. ${notAgent} You will not be asked to explain how the house or the shop got this way.`,
      place,
      'On North Hill, the difficult part is often not a small city lot. It is a house plus a shop, a barn, vehicles, and years of tools set back from Meridian or Jovita Boulevard. A valley house can be smaller and still be a heavy repair because of drainage, a soft floor, or a stopped remodel.',
    ],
    sections: [
      {
        heading: 'Acreage, shops, and what can stay',
        paragraphs: [
          'KindKey buys the property as it sits, including outbuildings. You do not have to empty the shop, move the RV, or bag the contents of every room. Take papers, photos, and what the family wants. Leave the rest. If a floor or a shop roof is not safe to walk, say that before we arrive.',
          septic,
          'A listed sale of a house in this condition means photos on the internet and strangers on a long driveway. A sale to KindKey is a private walkthrough and a written offer. We do not publish interior photos of your sale as marketing.',
        ],
      },
      {
        heading: 'Permits, the health department, and price',
        paragraphs: [
          `${permits} An unpermitted shop or a debris case does not have to be cured first. KindKey will not pull the permit for you.`,
          `The offer is lower than a retail price for an empty, repaired house because the work is still ahead. That tradeoff is the point when you cannot fund the clean-out. ${closingSentence} ${attorneyPressure}`,
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I have to clean out an Edgewood shop before you make an offer?',
        answer:
          'No. House contents and shop contents can stay. Keep what matters to you. You do not need a junk-removal crew first.',
      },
      {
        question: 'The property is more than a standard lot. Will you still look?',
        answer:
          'Yes. Tell us about the acreage, the outbuildings, and anything that should stay or go. KindKey prices the property in front of us, not a citywide average.',
      },
      {
        question: 'What if the septic has failed and the house is also full?',
        answer:
          'Tell us both facts. You do not have to pump, replace, or certify the system, and you do not have to clean the house out, before an offer.',
      },
      {
        question: 'Will neighbors see photos of the inside?',
        answer:
          'KindKey does not need a public listing to buy the house. A walkthrough is for pricing, not for an audience.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'The Edgewood city page.',
      },
      {
        href: '/sell-hoarder-house',
        label: 'Sell a hoarder or heavy-repair house',
        description: 'The Washington overview.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Describe the house and the shop in plain words.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Edgewood code violations',
        description: 'When the city has already sent a notice about the debris or the shop.',
      },
      {
        href: '/blog/sell-hoarder-house-on-acreage-edgewood-wa',
        label: 'Hoarder houses on Edgewood acreage',
        description: 'Shops, outbuildings, and a private sale.',
      },
    ],
    breadcrumbs: [
      home,
      cityCrumb,
      { name: 'Hoarder or heavy repair', path: '/areas/edgewood/sell-hoarder-house' },
    ],
    ctaTitle: 'Get an Edgewood offer without cleaning the property out',
    ctaSubtitle: 'House, shop, and acreage. You can say no after you see the number.',
  }),
  edgewoodPage({
    kind: 'vacant',
    path: '/areas/edgewood/sell-vacant-house',
    title: 'Sell a Vacant House in Edgewood, WA',
    description:
      'Sell a vacant Edgewood house as-is, including North Hill houses that are hard to watch and valley houses with deferred upkeep. KindKey is an Auburn principal buyer.',
    h1: 'Sell a Vacant House in Edgewood, WA',
    intro: [
      `You can sell a vacant Edgewood house without staging it, keeping the power on for showings, or asking a relative in Puyallup to check the shop every week. ${notAgent}`,
      place,
      'A North Hill house set back from the road is easy to ignore and hard to watch. Mail piles up. A yard notice arrives. A shop door does not latch. In the valley, the empty house is a smaller lot with a different drainage problem. Either way, the carrying costs run until the deed transfers.',
    ],
    sections: [
      {
        heading: 'Empty acreage is not a simple vacant house',
        paragraphs: [
          'Tell us whether anyone has a key, whether the driveway is gated, and what is in the outbuildings. Vehicles, fuel tanks, and a shop full of chemicals are facts the offer and the closing paperwork should match. You can leave furniture and tools you do not want.',
          septic,
          'If the house is vacant because of a death, a foreclosure notice, or a tenant who left, say so. Those facts have their own legal steps. KindKey does not interpret them.',
        ],
      },
      {
        heading: 'Utilities, insurance, and Pierce County notices',
        paragraphs: [
          'You do not have to turn every utility on before we look. Until closing, insurance is still yours. KindKey does not advise you on a vacant-house policy. Ask your insurer what the policy requires while the house is empty.',
          `${permits} Vacant Edgewood houses collect grass, debris, and vehicle notices. You do not have to cure them first. ${closingSentence}`,
          attorneyPressure,
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need to clean out a vacant Edgewood house first?',
        answer:
          'No. Leave what you do not want, including shop contents you are done with. Remove what you want to keep before the closing date you agree to.',
      },
      {
        question:
          'The house has been empty and the septic has not been used. Can you still buy it?',
        answer:
          'Yes. Tell us the system has been sitting. KindKey does not certify it, and you do not have to put it back in service before an offer.',
      },
      {
        question: 'I live in another state. Do I have to come back for showings?',
        answer:
          'No. Access can be a lockbox or a local relative for one visit, not a showing schedule. KindKey buys the house and does not list it.',
      },
      {
        question: 'Is Edgewood in King County because it borders Milton?',
        answer:
          'No. Edgewood is entirely in Pierce County. Milton is the city that can fall in either county. The closing agent confirms the Edgewood parcel.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'The Edgewood city page.',
      },
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'The Washington overview.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say the house is empty and who has a key.',
      },
      {
        href: '/areas/edgewood/sell-inherited-probate-house',
        label: 'Inherited Edgewood houses',
        description: 'Many vacant hill houses are tied to an estate.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-edgewood-wa',
        label: 'Septic or well issues in Edgewood',
        description: 'What to tell a buyer when the private system has been sitting.',
      },
    ],
    breadcrumbs: [
      home,
      cityCrumb,
      { name: 'Vacant houses', path: '/areas/edgewood/sell-vacant-house' },
    ],
    ctaTitle: 'Get a cash offer on a vacant Edgewood house',
    ctaSubtitle: 'You do not have to watch the shop from another city until a listing sells.',
  }),
];
