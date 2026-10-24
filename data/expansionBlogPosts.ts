import type { BlogPost } from '@/lib/content';

const home = { name: 'Home', path: '/' };
const blog = { name: 'Blog', path: '/blog' };
const publishedAt = '2026-10-23';

function post(
  slug: string,
  data: Omit<BlogPost, 'slug' | 'path' | 'publishedAt' | 'updatedAt' | 'breadcrumbs'> & {
    breadcrumbName: string;
    publishedAt?: string;
  }
): BlogPost {
  const path = `/blog/${slug}`;
  const { breadcrumbName, publishedAt: date = publishedAt, ...rest } = data;
  return {
    ...rest,
    slug,
    path,
    publishedAt: date,
    updatedAt: date,
    breadcrumbs: [home, blog, { name: breadcrumbName, path }],
  };
}

const office =
  'KindKey Home Buyers LLC buys as a principal from 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463 or use the cash-offer form. KindKey is not a real estate agent. This article is not legal, tax, or code advice.';

const closing =
  'KindKey does not charge an agent commission or a separate assignment fee. Closing-cost responsibility is stated in the purchase agreement and can vary. Payoffs, liens, and taxes can reduce proceeds. The settlement statement shows them before you close.';

export const expansionBlogPosts: BlogPost[] = [
  post('sell-fire-damaged-house-edgewood-wa', {
    breadcrumbName: 'Fire damage in Edgewood',
    title: 'Selling a Fire-Damaged House in Edgewood, WA',
    description:
      'How Edgewood owners sell a fire-damaged North Hill or valley house as-is. East Pierce Fire & Rescue, shops, and insurance. KindKey is the buyer. Not insurance advice.',
    h1: 'Selling a Fire-Damaged House in Edgewood, WA',
    intro: [
      `You can sell a fire-damaged house in Edgewood without rebuilding the kitchen, the shop, or the roof first. ${office}`,
      'Edgewood is entirely in Pierce County, between Milton, Fife, Puyallup, and Sumner. Most residents live on North Hill. A smaller share of the city sits in the Puyallup River valley. Meridian Avenue E is State Route 161. Jovita Boulevard is the other everyday road. Jovita is not a separate city.',
    ],
    sections: [
      {
        heading: 'Who shows up when an Edgewood house burns',
        paragraphs: [
          'East Pierce Fire & Rescue covers the city. Edgewood’s former Fire District 8 joined East Pierce in 2010. East Pierce’s 2022 standards of cover list Station 118 at 10105 24th Street E in Edgewood. KindKey is not the fire department and does not interpret a run report.',
          'A North Hill fire often involves a long driveway and a detached shop. A valley fire is a smaller lot with a drainage problem after the hoses leave. The City of Edgewood’s stormwater materials describe Jovita Creek, in the northeast, in a steep-sided canyon. That describes the basin. It is not a diagnosis of your lot.',
        ],
      },
      {
        heading: 'Shops, septic, and the insurance file',
        paragraphs: [
          'Acreage in Edgewood often includes a shop, a barn, or an RV cover. The fire may be in the outbuilding and not the house, or the reverse. Many older North Hill and Jovita lots use septic, and some use a well. Others are on public utilities. Tell us which. KindKey does not certify a septic system, and a fire does not make us the health department.',
          'Your insurer and your lender are your relationships. You can ask KindKey for an offer while a claim is open. We will not tell you whether to wait for the check or how to assign the proceeds. Talk with your insurer and, if the paperwork is unclear, a Washington attorney.',
        ],
      },
      {
        heading: 'Permits and the reservation boundary',
        paragraphs: [
          'You do not need a City of Edgewood reconstruction permit before the visit. Community Development is at 10440 Dom Calata Way E if you choose to rebuild. The city’s published permit line is (253) 952-3299. That counter is not a step KindKey requires.',
          'Parts of Edgewood lie inside the Puyallup Indian Reservation boundary. That can change a title report. KindKey does not interpret tribal jurisdiction. Tell the closing agent if you already know the parcel is inside the boundary.',
        ],
      },
      {
        heading: 'A direct sale versus a rebuild',
        paragraphs: [
          `Rebuilding can fit if you want to keep the house and you can fund it. A listing can fit after that. Hire a licensed broker for a listing. KindKey will not run one. ${closing}`,
          'If the fire is also sitting next to a foreclosure notice, read the Edgewood foreclosure page and talk with an attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret them. You can say no after you see the offer.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you buy fire-damaged houses on North Hill?',
        answer:
          'Yes. KindKey buys fire-damaged and smoke-damaged houses on North Hill, along Jovita, on the Meridian corridor, and in the valley. Call (206) 519-5463 or use the cash-offer form.',
      },
      {
        question: 'Does a shop fire count if the house is standing?',
        answer:
          'Yes. Tell us which structure burned. You do not have to demolish the shop before we look.',
      },
      {
        question: 'Will you advise me on the insurance claim?',
        answer:
          'No. KindKey does not give insurance advice. Ask your insurer, and an attorney if you are assigning claim rights.',
      },
      {
        question: 'Is Edgewood covered by a King County fire agency?',
        answer:
          'No. East Pierce Fire & Rescue covers Edgewood. Station 118 is at 10105 24th Street E. KindKey is not that agency.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood/sell-fire-damaged-house',
        label: 'Sell a fire-damaged house in Edgewood',
        description: 'The Edgewood fire page.',
      },
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'North Hill, Jovita, and the valley.',
      },
      {
        href: '/sell-fire-damaged-house',
        label: 'Sell a fire-damaged house',
        description: 'The county overview.',
      },
      {
        href: '/areas/edgewood/sell-house-before-foreclosure',
        label: 'Edgewood houses before foreclosure',
        description: 'When the fire and the mortgage are both a problem.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say what burned. You can say no.',
      },
    ],
    ctaTitle: 'Ask for an Edgewood offer on the fire-damaged house',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You do not have to finish the insurance repair first.',
  }),
  post('sell-house-with-code-violations-edgewood-wa', {
    breadcrumbName: 'Code violations in Edgewood',
    title: 'Selling a House with Code Violations or Unpermitted Work in Edgewood, WA',
    description:
      'How Edgewood owners sell a house with a city notice, a county notice, or an unpermitted shop. KindKey buys as-is. Not legal advice.',
    h1: 'Selling a House with Code Violations or Unpermitted Work in Edgewood, WA',
    intro: [
      `You can sell an Edgewood house with an open code case or unpermitted work without finishing the city’s list first. ${office}`,
      'Inside the city, building and code letters are a City of Edgewood matter. Community Development is at Edgewood City Hall, 10440 Dom Calata Way E, Edgewood, WA 98372. The permit line published by the city is (253) 952-3299. A Pierce County letter can mean the parcel is outside the city even when the mail says Edgewood.',
    ],
    sections: [
      {
        heading: 'Three different letters get mixed up on North Hill',
        paragraphs: [
          'A City of Edgewood notice, a Pierce County notice, and a septic letter are not the same file. On-site sewage in Pierce County is commonly handled by the Tacoma-Pierce County Health Department. KindKey will not tell you which hearing to attend. If the paper has a hearing, a fine, or an order to vacate, talk with a Washington attorney.',
          'Unpermitted work here is often a shop, a garage turned into a room, an RV cover, or an addition on a larger lot along Jovita Boulevard or Meridian. It can also be vehicles and debris that a neighbor can see from the road. You do not have to tear the shop out before KindKey looks.',
        ],
      },
      {
        heading: 'North Hill acreage and the valley floor',
        paragraphs: [
          'Most Edgewood residents live on North Hill, with longer driveways and outbuildings set back from the street. A smaller share of the houses sit in the Puyallup River valley, where drainage is the different problem. The offer is for the property you have. A citywide fine, invented before anyone reads your letter, is a guess.',
          'Parts of the city lie inside the Puyallup Indian Reservation boundary. That is a title question. KindKey does not interpret tribal jurisdiction. Milton, next door, can be King County or Pierce County. Edgewood is Pierce County. Still read the header on your own notice.',
        ],
      },
      {
        heading: 'What stays open after you call',
        paragraphs: [
          'Requesting an offer does not close the case and does not pause a deadline. Until the deed records, the notice is still yours. KindKey will not appear at the hearing, pull the permit, or promise that a fine disappears at closing.',
          `${closing} If the code case is also next to a foreclosure or a probate, ask your attorney about RCW 61.34 before you sign. KindKey does not interpret that statute.`,
        ],
      },
      {
        heading: 'Repairing, listing, or selling the problem as-is',
        paragraphs: [
          'Curing a small yard notice can be the right path if you want to keep the house and the work is actually small. It is a poor fit when the letter requires a new shop permit, removal of a living space, or a clean-out you cannot staff.',
          'A listing still means showings and buyers who may ask for the violation to be cured. Hire a licensed broker if you want that path. KindKey will not run the listing. You can compare it with a cash offer and say no.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell before the Edgewood code case is closed?',
        answer:
          'Yes. KindKey buys Edgewood houses with open, expired, or missing permits. The agency that wrote the notice still controls its file. Call (206) 519-5463 or use the cash-offer form.',
      },
      {
        question: 'Is an unpermitted shop the same as a septic failure?',
        answer:
          'No. Building notices and on-site sewage notices come from different offices. Read the letterhead. KindKey can still look at the property either way.',
      },
      {
        question: 'Do I have to go to City Hall before you will visit?',
        answer:
          'No. City Hall at 10440 Dom Calata Way E is for owners who choose to permit the work. KindKey does not require that visit.',
      },
      {
        question: 'Will the fine automatically be gone when I sell?',
        answer:
          'Do not assume that. Amounts that must be paid can reduce proceeds and show on the settlement statement. KindKey does not negotiate the citation.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'The Edgewood code page.',
      },
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'The city page.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The Washington overview.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-edgewood-wa',
        label: 'Septic or well issues in Edgewood',
        description: 'When the letter is about the private system, not the shop.',
      },
      {
        href: '/areas/edgewood/sell-hoarder-house',
        label: 'Hoarder and heavy-repair houses in Edgewood',
        description: 'Debris and shops often travel together.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say what the letter says. You can say no.',
      },
    ],
    ctaTitle: 'Ask for an Edgewood offer while the notice is open',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You do not have to finish the city’s list first.',
  }),
  post('sell-house-with-septic-or-well-issues-edgewood-wa', {
    breadcrumbName: 'Septic or well issues in Edgewood',
    title: 'Selling a House with Septic Failure or Well Issues in Edgewood, WA',
    description:
      'How Edgewood owners sell a house with a failing septic system or a private well without replacing it first. KindKey buys as-is. Not a health-department opinion.',
    h1: 'Selling a House with Septic Failure or Well Issues in Edgewood, WA',
    intro: [
      `You can sell an Edgewood house with a failing septic system or a troubled private well without replacing either one first. ${office} KindKey does not inspect, pump, or certify a septic system or a well.`,
      'Many North Hill and Jovita lots, especially older acreage with a shop set back from the road, still use on-site sewage. Some use a private well. Other Edgewood houses are on public sewer and public water. The city name does not tell you which. The parcel does.',
    ],
    sections: [
      {
        heading: 'Which office is actually writing about the system',
        paragraphs: [
          'In Pierce County, on-site sewage questions are handled by the Tacoma-Pierce County Health Department. That is not the City of Edgewood building counter at 10440 Dom Calata Way E, and it is not KindKey. A city letter about an unpermitted shop is a different file from a septic order. Read the header.',
          'A private well is a separate fact from the drain field. KindKey will not test the water or tell you the well is safe. You can ask the health department or a licensed well professional. You can also ask KindKey to price the house as it sits while you do that.',
        ],
      },
      {
        heading: 'Why these houses are hard to list',
        paragraphs: [
          'A retail buyer using a mortgage often wants a passed septic inspection, a known water source, and a shop that was permitted. A North Hill lot with a soft drain field, a well that has gone dry, or a system that has sat unused in a vacant house can stall that path. KindKey buys as a principal and is not waiting on that buyer’s loan.',
          'The valley portion of Edgewood is a smaller share of the city and a different drainage picture. Do not assume a valley house and a hill house share a septic layout. Tell us what you know, including if you do not know.',
        ],
      },
      {
        heading: 'Vacant houses and inherited shops',
        paragraphs: [
          'A septic system that has not been used because the house is empty is still something to disclose in plain words. You do not have to put it back in service, pump it, or replace the field before a walkthrough. The same is true of a well that has not been run.',
          'Inherited Edgewood houses often include a shop nobody has opened. The system in the yard and the contents in the shop can both stay. Take what the family wants. If a relative still lives there, do not force that person out. Occupancy is a question for your attorney.',
        ],
      },
      {
        heading: 'What the offer does not promise',
        paragraphs: [
          `${closing} KindKey does not promise that a health-department case closes when you sign.`,
          'If the sale is also a probate or a foreclosure, the septic is not the only clock. Ask a Washington attorney before you sign under that pressure. RCW 61.34 is their statute to explain, not ours. You can keep the house and repair the system if that is the better path. KindKey will not tell you it is a mistake.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I have to replace a failed septic system before KindKey will look?',
        answer:
          'No. Tell us the system is failing or has not been used. The offer reflects the property as it sits. Call (206) 519-5463 or use the cash-offer form.',
      },
      {
        question: 'Who regulates septic systems in Edgewood?',
        answer:
          'On-site sewage in Pierce County is handled by the Tacoma-Pierce County Health Department. City building permits are a different counter. Read the letter you received. KindKey is neither office.',
      },
      {
        question: 'What if I do not know whether the house is on a well?',
        answer:
          'Say that. KindKey does not require you to become the well expert before an offer. A later title or inspection file may still identify the water source.',
      },
      {
        question: 'Are you a septic contractor?',
        answer:
          'No. KindKey is a principal buyer. Any work after closing is for KindKey’s own account. It is not a service you hire, and it is not a listing.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'County, North Hill, and Jovita context.',
      },
      {
        href: '/areas/edgewood/sell-vacant-house',
        label: 'Vacant houses in Edgewood',
        description: 'Systems that have been sitting because nobody lives there.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'When the letter is about the shop or the yard, not the drain field.',
      },
      {
        href: '/areas/edgewood/sell-hoarder-house',
        label: 'Heavy-repair houses in Edgewood',
        description: 'Acreage, shops, and houses that need more than a septic pump.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say septic, well, sewer, or “I do not know.”',
      },
    ],
    ctaTitle: 'Ask for an Edgewood offer with the system as it is',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You do not have to pass a septic inspection first.',
  }),
  post('sell-hoarder-house-on-acreage-edgewood-wa', {
    breadcrumbName: 'Hoarder houses on Edgewood acreage',
    title: 'Selling a Hoarder or Heavy-Fixer House on Acreage in Edgewood, WA',
    description:
      'How Edgewood owners sell a full house, a packed shop, or a heavy fixer on acreage without a clean-out. KindKey buys as-is and does not publish the interior.',
    h1: 'Selling a Hoarder or Heavy-Fixer House on Acreage in Edgewood, WA',
    intro: [
      `You can sell an Edgewood house that is full of belongings, or a heavy fixer on acreage, without renting a dumpster or hiring a contractor first. ${office} You will not be asked to explain how the house or the shop got this way.`,
      'On North Hill the property is often a house plus a shop, vehicles, and tools set back from Meridian Avenue E or Jovita Boulevard. A valley house can be smaller and still be a heavy repair because of a soft floor, a roof, or a remodel that stopped. KindKey prices the property in front of us.',
    ],
    sections: [
      {
        heading: 'What can stay on the property',
        paragraphs: [
          'House contents, shop contents, and outbuildings can stay. Take papers, photos, and what the family wants. Leave the rest. If a floor or a shop roof is not safe to walk, say so before anyone arrives. You do not have to make a path through every room.',
          'Many of these lots use septic or a well. Tell us. You do not have to pump, replace, or certify the system to get an offer. The Tacoma-Pierce County Health Department, not KindKey, is the office for an on-site sewage question.',
        ],
      },
      {
        heading: 'Why a listing is a hard fit',
        paragraphs: [
          'A listed sale means photos online and strangers on a long driveway walking through personal belongings. A sale to KindKey is one walkthrough and a written offer. We do not publish interior photos of your sale as marketing.',
          'An unpermitted shop or a debris notice from the City of Edgewood does not have to be cured first. City Hall is at 10440 Dom Calata Way E if you want to permit the work. KindKey will not pull that permit for you, and we will not attend a hearing.',
        ],
      },
      {
        heading: 'Estates and houses someone still lives in',
        paragraphs: [
          'Inherited Edgewood houses are often the ones with a locked shop and a lifetime of tools. Heirs can live in Puyallup, Sumner, or another state. They still need the person with authority to sign. KindKey will not guess who that is. If the decedent lived in Edgewood, Pierce County is the residence county. Ask a probate attorney before you file.',
          'If someone still lives in the house, we work around that. Do not force a relative out so the house looks empty. That question belongs with your attorney.',
        ],
      },
      {
        heading: 'Price, pressure, and the other path',
        paragraphs: [
          `The offer is lower than a retail price for an empty, repaired house because the work is still ahead. ${closing}`,
          'Cleaning the property out and listing it can still be the right path if you have the time and the crew. Hire a licensed broker for that. If a foreclosure notice is also posted, talk with an attorney about RCW 61.34 before you sign. KindKey does not interpret it. You can say no.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I have to empty an Edgewood shop before you make an offer?',
        answer:
          'No. Keep what matters and leave the rest. Call (206) 519-5463 or use the cash-offer form and describe the house and the shop in plain words.',
      },
      {
        question: 'The lot is large and has several outbuildings. Will you still look?',
        answer:
          'Yes. Tell us about the acreage, the buildings, and anything that should stay. KindKey does not use a one-price guess for every Edgewood lot.',
      },
      {
        question: 'Will neighbors see photos of the inside?',
        answer:
          'KindKey does not need a public listing to buy the house. A walkthrough is for pricing, not for an audience.',
      },
      {
        question: 'Are you a junk-removal company?',
        answer:
          'No. KindKey is a principal buyer. Clean-out after a purchase, if we buy, is our work. It is not a service you hire before the sale.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood/sell-hoarder-house',
        label: 'Sell a hoarder house in Edgewood',
        description: 'The Edgewood heavy-repair page.',
      },
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'The city page.',
      },
      {
        href: '/sell-hoarder-house',
        label: 'Sell a hoarder or heavy-repair house',
        description: 'The Washington overview.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'When the city has already written about the debris or the shop.',
      },
      {
        href: '/blog/sell-house-needing-repairs-edgewood-wa',
        label: 'Major repairs in Edgewood',
        description: 'Roofs, stopped remodels, and the city permit counter.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'You do not have to clean the property out first.',
      },
    ],
    ctaTitle: 'Get an Edgewood offer without cleaning the acreage out',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You can say no after you see the number.',
  }),
  post('sell-house-as-is-kitsap-county', {
    breadcrumbName: 'Sell as-is in Kitsap County',
    title: 'Selling a House As-Is in Kitsap County, WA',
    description:
      'How owners in Port Orchard, Bremerton, Silverdale, and Poulsbo sell a house as-is to an Auburn principal buyer. KindKey is not a Kitsap listing brokerage.',
    h1: 'Selling a House As-Is in Kitsap County, WA',
    intro: [
      `You sell a Kitsap County house as-is by pricing it in its current condition and closing through a title company, instead of repairing it for showings. ${office}`,
      'Kitsap County is across Puget Sound from King County. Port Orchard is the county seat. Bremerton and Poulsbo are incorporated cities. Silverdale is an unincorporated community, not a city. Deeds record with the Kitsap County Auditor in Port Orchard. KindKey’s office is in Auburn. The ferry and SR-16 are how people travel. Neither stops an offer.',
    ],
    sections: [
      {
        heading: 'Four places people lump together',
        paragraphs: [
          'Port Orchard includes downtown and Bay Street, Annapolis, Mile Hill, and McCormick Woods. Manchester and Southworth are nearby and unincorporated. Bremerton includes downtown, Manette, Charleston, and the east and west sides. Navy Yard City and Gorst are not Bremerton neighborhoods. Silverdale is the central commercial area around Bucklin Hill, Old Town, Ridgetop, and Clear Creek, and it has no city hall. Poulsbo is on Liberty Bay. Kingston is not Poulsbo.',
          'A newer McCormick Woods house, an older Manette house, a Silverdale lot on septic, and a downtown Poulsbo house are different properties. KindKey does not use one Kitsap discount.',
        ],
      },
      {
        heading: 'County lines people get wrong because of the commute',
        paragraphs: [
          'A person who lives in Bremerton and works in Seattle still lives in Kitsap County. A probate, a code letter, and a deed do not move to King County because of the ferry. They also do not move to Pierce County because the drive uses the Tacoma Narrows. Gig Harbor is in Pierce County. Port Orchard is not.',
          'Silverdale building permits go through Kitsap County. Port Orchard, Bremerton, and Poulsbo have their own city counters inside their limits. On-site sewage questions in Kitsap County go to the Kitsap Public Health District. Read the letterhead. KindKey is not any of those offices.',
        ],
      },
      {
        heading: 'What as-is means on this side of the water',
        paragraphs: [
          'You do not need a new roof, a clean-out, a passed septic inspection, or vacant possession before KindKey looks. Tenants can stay. Tell us if someone lives there, and follow the notice rules that apply before anyone enters. KindKey will not coach an eviction.',
          `${closing} Cash, here, means KindKey is not waiting on a retail buyer’s mortgage. It does not mean a suitcase of money, and it does not erase a lien.`,
        ],
      },
      {
        heading: 'When a local listing is the other path',
        paragraphs: [
          'A listing can fit an updated house if you can host showings or hire someone who can. Hire a licensed broker in Kitsap County for that. KindKey will not list the house and will not pretend to be a local brokerage.',
          'A direct sale fits estates, heavy repairs, code notices, and houses the owner cannot watch from King or Pierce County. If the sale is under foreclosure pressure or the signer is a personal representative, talk with a Washington attorney. RCW 61.34 is not something KindKey interprets. You can say no.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you buy houses in Port Orchard, Bremerton, Silverdale, and Poulsbo?',
        answer:
          'Yes. Each of those has a city page. Silverdale is unincorporated Kitsap County. Call (206) 519-5463 or use the cash-offer form with the street address.',
      },
      {
        question: 'Do I have to repair the house because it is far from Auburn?',
        answer:
          'No. Distance does not add a repair requirement. KindKey buys the house as it sits.',
      },
      {
        question: 'Is Silverdale part of the City of Bremerton?',
        answer:
          'No. Silverdale is unincorporated Kitsap County. Bremerton is a separate city. Permits and code letters follow that difference.',
      },
      {
        question: 'Are you a real estate agent on the peninsula?',
        answer:
          'No. KindKey is a principal buyer based in Auburn. If you want a listing, hire a licensed broker.',
      },
    ],
    related: [
      {
        href: '/areas/port-orchard',
        label: 'Sell a house in Port Orchard',
        description: 'Kitsap County seat.',
      },
      {
        href: '/areas/bremerton',
        label: 'Sell a house in Bremerton',
        description: 'Downtown, Manette, and the yards.',
      },
      {
        href: '/areas/silverdale',
        label: 'Sell a house in Silverdale',
        description: 'Unincorporated Central Kitsap.',
      },
      {
        href: '/areas/poulsbo',
        label: 'Sell a house in Poulsbo',
        description: 'North Kitsap and Liberty Bay.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'The Washington as-is page.',
      },
      {
        href: '/areas',
        label: 'All areas we buy',
        description: 'King, Pierce, and Kitsap County.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'The same form used across the site.',
      },
    ],
    ctaTitle: 'Ask for a Kitsap County offer on the house as it sits',
    ctaSubtitle: 'Call (206) 519-5463 or use the cash-offer form. Name the city, then the address.',
  }),
  post('sell-house-with-code-violations-port-orchard', {
    breadcrumbName: 'Code violations in Port Orchard',
    title: 'Selling a House with Code Violations in Port Orchard, WA',
    description:
      'How Port Orchard and nearby Kitsap owners sell a house with an open code case. City, county, and health-district letters are different. Not legal advice.',
    h1: 'Selling a House with Code Violations in Port Orchard, WA',
    intro: [
      `You can sell a Port Orchard house with an open code case without finishing the city’s list first. ${office}`,
      'Port Orchard is an incorporated city and the Kitsap County seat, on Sinclair Inlet. Downtown, Annapolis, Mile Hill, and McCormick Woods are not the same housing. Manchester and Southworth are nearby unincorporated communities. A letter for one of those is not automatically a City of Port Orchard letter.',
    ],
    sections: [
      {
        heading: 'Read the header before you assume it is the city',
        paragraphs: [
          'Inside Port Orchard, municipal building and code letters come from the city. Unincorporated south Kitsap is Kitsap County. On-site sewage in Kitsap County is handled by the Kitsap Public Health District, which is a different agency from both the city and the county building counter. KindKey will not tell you which hearing to attend.',
          'If the notice has a hearing, a fine, or an order to vacate, talk with a Washington attorney before you rely on a sale to solve it. KindKey will not appear for you, and this article is not legal advice.',
        ],
      },
      {
        heading: 'What the houses look like',
        paragraphs: [
          'Older houses near downtown and Annapolis, newer houses in McCormick Woods, and larger edge lots that may be on septic show up as different code files. An unpermitted room, a failing outbuilding, tall vegetation, and an unsafe structure after a fire are not one punch list.',
          'Bremerton is across the inlet and has its own city code. Do not use a Port Orchard explanation for a Bremerton header, or the reverse. Gorst is an unincorporated junction, not downtown Port Orchard.',
        ],
      },
      {
        heading: 'Kitsap recording, and what an offer does not close',
        paragraphs: [
          'Deeds record with the Kitsap County Auditor in Port Orchard. That is true for a city house and for a nearby unincorporated house. The recording office does not close a code case. Until the deed transfers, deadlines on the notice are still yours.',
          `${closing} KindKey does not promise that a fine disappears when you sign. If the code case is also a foreclosure or a probate, ask your attorney about RCW 61.34. KindKey does not interpret it.`,
        ],
      },
      {
        heading: 'Selling as-is instead of curing the notice',
        paragraphs: [
          'Curing the notice can be the right path when the fix is small and you want to keep the house. It is a poor fit when the letter requires a tear-out or a repair you cannot fund, and you live in King or Pierce County and cannot manage contractors from the other side of the water.',
          'You do not need a contractor bid before KindKey looks. Photos of the notice and of the condition are enough to start. If the structure is not safe to enter, say so. You can also list the house with a licensed broker. KindKey will not run that listing.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell a Port Orchard house before the code case is closed?',
        answer:
          'Yes. KindKey buys houses with open violations and does not require the repairs to be finished first. The agency that wrote the notice still controls the case. Call (206) 519-5463 or use the cash-offer form.',
      },
      {
        question: 'Is a Kitsap County letter the same as a City of Port Orchard letter?',
        answer:
          'No. The city and the county are different. Silverdale and other unincorporated areas are county cases. Manchester and Southworth are not automatically Port Orchard. Read the header.',
      },
      {
        question: 'Who handles a septic notice?',
        answer:
          'On-site sewage in Kitsap County is handled by the Kitsap Public Health District. KindKey does not certify a septic system and does not require you to replace it before an offer.',
      },
      {
        question: 'Are you the code enforcement office?',
        answer:
          'No. KindKey is a principal buyer based in Auburn. We do not negotiate the citation.',
      },
    ],
    related: [
      {
        href: '/areas/port-orchard/sell-house-with-code-violations',
        label: 'Code violations in Port Orchard',
        description: 'The Port Orchard code page.',
      },
      {
        href: '/areas/port-orchard',
        label: 'Sell a house in Port Orchard',
        description: 'The city page.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The Washington overview.',
      },
      {
        href: '/blog/sell-house-as-is-kitsap-county',
        label: 'Sell as-is in Kitsap County',
        description: 'Port Orchard, Bremerton, Silverdale, and Poulsbo.',
      },
      {
        href: '/areas/bremerton/sell-house-with-code-violations',
        label: 'Code violations in Bremerton',
        description: 'A different city across the inlet.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Send the address and what the letter says.',
      },
    ],
    ctaTitle: 'Ask for a Port Orchard offer while the notice is open',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You can say no after you see the number.',
  }),
  post('selling-an-inherited-or-probate-house-bremerton', {
    breadcrumbName: 'Probate houses in Bremerton',
    title: 'Selling an Inherited or Probate House in Bremerton and Kitsap County',
    description:
      'How Bremerton families sell an inherited house in a Kitsap County probate. The court sits in Port Orchard. Confirm who can sign with an attorney. Not legal advice.',
    h1: 'Selling an Inherited or Probate House in Bremerton and Kitsap County',
    intro: [
      `You sell an inherited Bremerton house by confirming who has authority to sign, then transferring the house as it sits. ${office} KindKey is not a probate attorney or a tax advisor.`,
      'Bremerton is in Kitsap County. If the decedent lived in Bremerton, Port Orchard, Poulsbo, or Silverdale, the residence county is Kitsap County, not King County and not Pierce County. The superior court sits in Port Orchard, the county seat. Do not open the estate at the Tacoma or Kent courthouse because the family takes the ferry to Seattle. Ask a Washington attorney before you file. KindKey will not file.',
    ],
    sections: [
      {
        heading: 'Bremerton is not one house',
        paragraphs: [
          'Downtown, Charleston, Manette, East Bremerton, West Bremerton, and Kitsap Lake are different streets. Navy Yard City and Gorst are unincorporated neighbors, not Bremerton neighborhoods. An older house on a steep street near the yards is a common estate. A newer house is a different repair list. KindKey does not price them as one Kitsap average.',
          'Heirs often live in King County or Pierce County and cannot keep walking the house. You do not have to empty it, repair it, or move back. Take what the family wants. Leave the rest. If a relative still lives there, do not force that person out so the house looks vacant.',
        ],
      },
      {
        heading: 'Authority is not a family vote',
        paragraphs: [
          'The closing agent will ask for letters, or for the trust or transfer-on-death paperwork that shows who can sign. Agreement among siblings is not a substitute. People can live out of state and still be part of the estate. KindKey will not guess which person deeds the house.',
          'Recording is with the Kitsap County Auditor in Port Orchard. The City of Bremerton does not appoint a personal representative. A code letter from the city does not open a probate. Those are different files.',
        ],
      },
      {
        heading: 'The house, the shipyard, and the loan',
        paragraphs: [
          'Some estate houses are tired: an original roof, a basement, a shop, or a tenant who was already there. Tenants do not have to leave for KindKey to look. Do not end a tenancy to make the sale easier. Ask an attorney before you do that.',
          'If the estate is also behind on the mortgage, there are two clocks: the court file and the lender’s notice. Ask your attorney about RCW 61.34 before you sign under that pressure. KindKey does not interpret the statute and will not tell you it does not apply because the seller is an estate.',
        ],
      },
      {
        heading: 'Tax questions and the direct sale',
        paragraphs: [
          'KindKey does not give tax advice about basis, gains, or an estate. Take those questions to a tax professional. The purchase offer is only an offer to buy the house.',
          `${closing} You can request the offer while the attorney finishes authority. Do not sign a deed before that authority exists. A listing is the other path if a broker and your attorney think buyers will wait. Hire a licensed broker for it. KindKey will not list the house.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'Where is a Bremerton probate filed?',
        answer:
          'If the decedent lived in Bremerton, Kitsap County is the residence county. The superior court sits in Port Orchard. Ask an attorney before you file. KindKey will not choose the courthouse. Call (206) 519-5463 when you want the house priced.',
      },
      {
        question: 'Can the house be sold before probate is finished?',
        answer:
          'Sometimes, if the person with authority can sign and any required court step is done. KindKey does not decide that.',
      },
      {
        question: 'Do heirs in Seattle have to clean out a Manette house first?',
        answer:
          'No. Belongings can stay. A relative who still lives there should not be pushed out so the house looks empty.',
      },
      {
        question: 'Is a Silverdale estate the same court?',
        answer:
          'If the decedent lived in Silverdale, that is still Kitsap County. Silverdale is unincorporated, and Bremerton is a city, but the superior court for both is the Kitsap County court in Port Orchard. Confirm the residence with your attorney.',
      },
    ],
    related: [
      {
        href: '/areas/bremerton/sell-inherited-probate-house',
        label: 'Inherited houses in Bremerton',
        description: 'The Bremerton probate sale page.',
      },
      {
        href: '/areas/bremerton',
        label: 'Sell a house in Bremerton',
        description: 'The city page.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'The Washington overview.',
      },
      {
        href: '/areas/port-orchard',
        label: 'Sell a house in Port Orchard',
        description: 'The county seat, where the superior court sits.',
      },
      {
        href: '/blog/sell-house-as-is-kitsap-county',
        label: 'Sell as-is in Kitsap County',
        description: 'Port Orchard, Silverdale, Poulsbo, and Bremerton.',
      },
      {
        href: '/blog/selling-a-house-in-probate-washington',
        label: 'Probate sales in Washington',
        description: 'Authority to sign, before the city detail.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Your attorney confirms who can sign. You can say no.',
      },
    ],
    ctaTitle: 'Ask for a Bremerton offer once you know who can sign',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. KindKey will price the house as it is.',
  }),
  post('sell-house-with-tenants-edgewood-wa', {
    breadcrumbName: 'Tenants in Edgewood',
    title: 'Selling a House with Tenants in Edgewood, WA',
    description:
      'How Edgewood owners sell a North Hill or valley rental with tenants in place, including a shop, septic, or an inherited house. KindKey buys as a principal. Not legal advice.',
    h1: 'Selling a House with Tenants in Edgewood, WA',
    publishedAt: '2026-10-24',
    intro: [
      `You can sell an Edgewood house with tenants still living there. You do not have to evict them, empty the shop, or replace a septic system first. ${office} KindKey is not a property manager and not a landlord-tenant lawyer.`,
      'Edgewood is entirely in Pierce County, between Milton, Fife, Puyallup, and Sumner. Most residents live on North Hill. A smaller share of the city sits in the Puyallup River valley. Meridian Avenue E is State Route 161. Jovita Boulevard is the other everyday road. Jovita is not a separate city. A rental on a long driveway, with a shop set back from the street, is a normal Edgewood house. It is not a reason the occupants have to leave before anyone will look.',
    ],
    callout:
      'You do not have to deliver the house vacant. Reach out, and KindKey will help you through the whole process from start to finish. The tenant can stay. You can say no after you see the offer.',
    sections: [
      {
        heading: 'Who is actually living on the property',
        paragraphs: [
          'Say who is there before anyone schedules a visit. It may be one household in the house, a separate person in a garage or a room over the shop, or a tenant in the house while the shop is still full of your tools. Some agreements are written. Some are month-to-month. Some were never written down. KindKey prices the property you describe. A single Edgewood rent, guessed before anyone hears the facts, is not an offer.',
          'North Hill lots are often larger than a Tacoma city lot. The walkthrough has to cover the house and the outbuildings, and it has to respect the people living there. A valley rental is usually a smaller lot, and the drainage problem is different from a hill lot. Tell us which one you have. Milton, next door, can fall in King County or Pierce County. Edgewood does not. Do not treat an Edgewood rental as a Milton rental because the tenant crosses the city line for work or school.',
        ],
      },
      {
        heading: 'Septic, an unpermitted room, and a city letter',
        paragraphs: [
          'Many older North Hill and Jovita houses use septic, and some use a private well. Others are on public sewer and public water. The city name does not decide it, and the tenant living there does not decide it. You do not have to pump, replace, or certify the system, and the occupants do not have to move out so a contractor can stage a repair, before KindKey looks. On-site sewage questions in Pierce County go to the Tacoma-Pierce County Health Department. KindKey does not inspect or certify a septic system or a well.',
          'An unpermitted garage apartment, a room over a shop, or a remodel that stopped can sit next to the tenancy. A City of Edgewood letter about that work, or about vehicles and debris a neighbor can see, does not have to be cured first. Community Development is at Edgewood City Hall, 10440 Dom Calata Way E, Edgewood, WA 98372. The permit line published by the city is (253) 952-3299. KindKey will not pull the permit, appear at a hearing, or promise that a fine disappears when you sign. Until the deed records, deadlines on the notice are still yours. If the paper has a hearing, a fine, or an order to vacate, talk with a Washington attorney. This article is not legal advice.',
        ],
      },
      {
        heading: 'A sale does not end the tenancy',
        paragraphs: [
          'Chapter 59.18 RCW is Washington’s Residential Landlord-Tenant Act. Selling the house does not, by itself, cancel a lease or a month-to-month tenancy. KindKey will not tell you that it does. The tenant can still be in the house on the day the deed records. The offer can assume the tenant stays. You do not have to stage the rooms or promise vacant possession at closing.',
          'Do not serve a move-out notice to empty an Edgewood house for a cash sale. KindKey does not list houses, and KindKey will not write, serve, or approve a notice. A Washington landlord-tenant attorney should read the lease and the statute together. The Milton rental guide covers one subsection owners sometimes try to use as a shortcut. Do not copy a notice from that article, or from a neighbor, onto an Edgewood lease. If you want the tenant to stay through closing, say that when you ask for the offer. That is the path KindKey can price.',
          'A walkthrough is one visit, not a string of showings. Arrange it with whatever notice your attorney says the lease and chapter 59.18 require. KindKey will not tell you to enter without that notice. If access will take time, photos and a plain description can start the conversation. Bring the lease if you have it, the rent, whether rent is current, and the deposit amount. Unpaid rent, a deposit you still hold, and prepaid rent can show on the settlement statement. KindKey does not calculate what the tenant is owed and does not hold the deposit for you before closing.',
        ],
      },
      {
        heading: 'Inherited rentals, a loan notice, and the direct sale',
        paragraphs: [
          'An inherited Edgewood rental often means heirs in Puyallup, Sumner, or another state, a tenant who was already there, and a shop nobody has opened. The person with authority to sign is a probate question. Ask a Washington attorney before anyone deeds the house. KindKey will not guess which relative can sign, and KindKey will not file the probate. You can ask for an offer while the attorney finishes that question. Do not sign a deed before the authority exists. Do not force the tenant, or a relative who still lives there, to leave so the house looks vacant.',
          'If rent has stopped, or someone is living in the shop with no written agreement, tell us. KindKey may still look. KindKey will not coach an eviction, a lockout, or a utility shutoff. If a foreclosure notice is also in the file, you have two clocks. Talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute. Parts of Edgewood lie inside the Puyallup Indian Reservation boundary. That can change a title report. KindKey does not interpret tribal jurisdiction. Tell the closing agent if you already know the parcel is inside the boundary.',
          `The Edgewood deed records with the Pierce County Auditor. ${closing} Cash means KindKey is not waiting on a retail buyer’s mortgage. It does not mean a suitcase of money, and it does not erase a mortgage, a tax bill, a deposit, or a city fine. You can keep the rental, or hire a licensed broker to list it, if the occupants will allow the access a listing needs. KindKey will not run that listing. Reach out, and KindKey will help you through the whole process from start to finish, from the first description of who lives there through the walkthrough, the written offer, and closing. KindKey does not promise a specific number of days. You can say no.`,
        ],
      },
    ],
    faqs: [
      {
        question: 'Do Edgewood tenants have to move out before KindKey buys the house?',
        answer:
          'No. KindKey buys Edgewood houses with tenants in place. A sale does not, by itself, end the tenancy. Call (206) 519-5463 or use the cash-offer form and say who lives there. You can decline the offer.',
      },
      {
        question: 'Someone is living in the shop or an unpermitted room. Will you still look?',
        answer:
          'Yes. Tell us which building they occupy and whether any agreement is written. You do not have to tear the room out, and you do not have to make them leave, before an offer.',
      },
      {
        question: 'The rental is on septic. Do I have to replace it first?',
        answer:
          'No. Tell us the house is on septic, a well, public sewer, public water, or that you do not know. KindKey does not certify the system. The occupants do not have to move out for a repair you are not doing.',
      },
      {
        question: 'Will KindKey evict a tenant who stopped paying?',
        answer:
          'No. KindKey is the buyer, not your lawyer and not your property manager. Tell us the rent status. Talk with a Washington attorney before you serve any notice or change the locks.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood/sell-house-with-tenants',
        label: 'Sell a house with tenants in Edgewood',
        description: 'The Edgewood rental page.',
      },
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'North Hill, Jovita, and the valley.',
      },
      {
        href: '/sell-house-with-tenants',
        label: 'Sell a house with tenants',
        description: 'The Washington overview for occupied houses.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'Condition does not have to be repaired first.',
      },
      {
        href: '/areas/edgewood/sell-inherited-probate-house',
        label: 'Inherited houses in Edgewood',
        description: 'When the rental came from an estate.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Authority to sign, before the city detail.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'Open notices that can travel with a rental.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'City letters about a shop, a yard, or an unpermitted room.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-edgewood-wa',
        label: 'Septic or well issues in Edgewood',
        description: 'When the private system is the other problem.',
      },
      {
        href: '/blog/sell-rental-property-with-tenants-milton-wa',
        label: 'Rentals with tenants in Milton',
        description: 'The next city west, and a notice owners should not copy.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say who lives there. You do not have to deliver it vacant.',
      },
    ],
    ctaTitle: 'Ask for an Edgewood offer with the tenants still there',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. Reach out, and KindKey will help you through the whole process from start to finish. You do not have to empty the house. You can say no.',
  }),
];
