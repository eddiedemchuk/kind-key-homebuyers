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
  post('selling-a-vacant-house-edgewood-wa', {
    breadcrumbName: 'Vacant houses in Edgewood',
    title: 'Selling a Vacant House in Edgewood, WA',
    description:
      'How Edgewood owners sell a vacant North Hill or valley house as-is, including a shop, a sitting septic system, a stalled remodel, or a yard notice. KindKey buys as a principal. Not legal advice.',
    h1: 'Selling a Vacant House in Edgewood, WA',
    publishedAt: '2026-10-25',
    intro: [
      `You can sell a vacant house in Edgewood without mowing it to a listing standard, finishing a stalled remodel, replacing a septic system that has been sitting, or flying back for showings. ${office} KindKey is not code enforcement, a property manager, or a vacant-house insurer.`,
      'Vacant means nobody lives there. Edgewood is entirely in Pierce County, between Milton, Fife, Puyallup, and Sumner. It incorporated on February 28, 1996. Most residents live on North Hill: longer driveways, and shops or sheds set back from the street. A smaller share of the city sits in the Puyallup River valley. Meridian Avenue E is State Route 161. Jovita Boulevard is the other everyday road. Jovita is not a separate city. A North Hill house that has sat empty is a normal Edgewood sale. It is not a reason you have to make it look occupied before anyone will look.',
    ],
    callout:
      'You do not have to clean the house out, keep the utilities on, or cure a yard notice before KindKey looks. Reach out, and KindKey will help you through the whole process from start to finish. You can say no after you see the offer.',
    sections: [
      {
        heading: 'An empty North Hill house is hard to watch',
        paragraphs: [
          'Tell us who has a key, whether the driveway is gated, and what is in the shop before anyone schedules a visit. A relative in Puyallup, Sumner, Milton, or another state can open the door once. KindKey does not need a string of showings. Furniture, tools, and vehicles you do not want can stay. Take papers, photos, and what you want to keep before the closing date you agree to, not during the signing. If a floor or a shop roof is not safe to walk, say so. An exterior look can start the conversation.',
          'The valley portion of Edgewood is a smaller lot and a different drainage problem from a hill lot with a long driveway. Do not describe them as the same house. Milton, next door, can fall in King County or Pierce County. Edgewood does not. A mailing address that says Edgewood is not always inside the city. If the letterhead is Pierce County, the parcel may be outside the city limits. Read the header. The closing agent confirms the parcel. The Edgewood deed records with the Pierce County Auditor.',
          'East Pierce Fire & Rescue covers the city. Edgewood’s former Fire District 8 joined East Pierce in 2010. East Pierce’s 2022 standards of cover list Station 118 at 10105 24th Street E. KindKey is not the fire department. A neighbor’s report does not pause because you asked for an offer. A house that is empty because of a fire is still this sale if nobody lives there. The insurance claim stays with your insurer. KindKey does not give insurance advice. Until the deed records, the vacant-house policy is still yours. KindKey will not tell you that coverage continues. Ask your insurer what the policy requires while the house is empty.',
        ],
      },
      {
        heading: 'What an Edgewood notice on an empty house is doing',
        paragraphs: [
          'Chapter 15.80 of the Edgewood Municipal Code adopts the 2021 International Property Maintenance Code, with the amendments in that chapter. EMC 15.80.010 says Chapter 15.10 EMC is used in place of IPMC Chapter 1, and that IPMC Appendix A, the Boarding Standard, is adopted. EMC 15.80.301.4 adds a security rule: vacant buildings must be secured against outside entry, doors and windows must remain locked, there must be at least one operable door into every building and housing unit, and exterior walls and roofs must remain intact without holes. EMC 15.80.302.1 says exterior property is to be kept clean, safe, and sanitary, and free from an accumulation of rubbish, garbage, or fire hazards. KindKey will not decide whether your house meets those sentences. KindKey will not board a window for you or tell you how to board it.',
          'EMC 15.80.302.4 amends the vegetation section. The adopted text lists, among other conditions, grasses in the yards of occupied residential properties that are not kept at six inches or less, and grasses, ground cover, or vines on vacant lots that are within or adjacent to developed areas, are not used for agriculture, and are not part of a critical area under Title 14 EMC, that are not kept at twelve inches or less. The City of Edgewood’s code-compliance FAQ still cites EMC 15.80.230 for those height figures. Read the notice you were served. KindKey will not tell you which citation the city will use, whether your lot is a critical area, or whether a field counts as agriculture. Chapter 8.15 EMC is a different chapter, on vegetation or debris that obstructs a street or sidewalk or is a hazard, and it cites RCW 35.21.310. A lawn letter and a sidewalk letter are not the same paper.',
          'Shops and other outbuildings are in the same maintenance chapter. EMC 15.80.302.7 says accessory structures, including detached garages, storage buildings, carports, fences, and retaining walls, are to be maintained structurally sound and in good repair. EMC 15.80.302.8 addresses inoperative or unlicensed motor vehicles kept outside, with exceptions the section states for work inside a permanent structure. EMC 15.80.302.10 prohibits storing semi-tractors, semi-trailers, storage containers, or shipping containers where the primary use is residential, and it states an exception for moving trucks or containers placed for 72 hours or less for short-term loading. KindKey will not tell you whether a container, an RV, or a truck on your lot is inside an exception. You do not have to haul them off before an offer.',
          'Do not treat Auburn’s vacant-property rule as an Edgewood rule. Auburn City Code 15.20.100 is an Auburn ordinance. KindKey’s office is in Auburn. The house is not. Code compliance for a city letter is the City of Edgewood. Community Development and the code desk share City Hall at 10440 Dom Calata Way E, Edgewood, WA 98372. The line the city publishes is (253) 952-3299. The city also points people to SeeClickFix to report concerns. KindKey will not answer the notice, appear at a hearing, pull a permit, or promise that a fine disappears when you sign. Amounts that must be paid can reduce proceeds the same way a mortgage payoff can. The settlement statement, prepared by the closing agent, is where you see them. Until recording, deadlines on the notice are still yours. If the paper has a hearing, a fine, or an order to vacate, talk with a Washington attorney. This article is not legal advice.',
        ],
      },
      {
        heading: 'A sitting septic, a stalled remodel, and an inherited shop',
        paragraphs: [
          'Many older North Hill and Jovita houses use septic, and some use a private well. Others are on public sewer and public water. The city name does not decide it, and a house that has been empty does not decide it. A system that has not been used because nobody lives there is still something to say in plain words. You do not have to pump it, replace the drainfield, or put it back in service so a walkthrough can happen. On-site sewage questions in Pierce County go to the Tacoma-Pierce County Health Department, not to the city building counter, and not to KindKey. KindKey does not inspect or certify a septic system or a well.',
          'A remodel that stopped is a common reason an Edgewood house is empty. Open walls, a kitchen that was demolished, a garage that was becoming a room, or a shop apartment that never had a final inspection can all sit there. You do not need a City of Edgewood permit closed, a contractor bid, or the finishes put back before KindKey looks. If the work left holes in a wall or a roof, the security rule above is a city duty that stays with the owner until the deed records. KindKey will not tell you that requesting an offer satisfies it. The city’s adopted boarding standard is Appendix A of the property-maintenance code. KindKey will not interpret that appendix or perform the boarding as your contractor.',
          'An inherited vacant house on acreage often means heirs in Puyallup, Sumner, King County, or another state, a shop nobody has opened, and a yard the neighbors can see. The person with authority to sign is a probate question. Ask a Washington attorney before anyone deeds the house. KindKey will not guess which relative can sign, and KindKey will not file the probate. You can ask for an offer while the attorney finishes that question. Do not sign a deed before the authority exists. If a relative still lives in the house, or a tenant is still there, this is not a vacant delivery. Do not force that person out so the house looks empty. Say who is there. Parts of Edgewood lie inside the Puyallup Indian Reservation boundary. That can change a title report. KindKey does not interpret tribal jurisdiction. Tell the closing agent if you already know the parcel is inside the boundary.',
          'A Pierce County property-tax delinquency is a different account from a city vegetation penalty. The treasurer’s process is not the city’s code desk. You can ask for an offer while those papers are open. KindKey will not calculate the tax, and KindKey will not tell you a sale stops a treasurer’s date. If a foreclosure notice is also in the file, you have more than one clock. Talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute.',
        ],
      },
      {
        heading: 'One visit, a written offer, and what cash does not erase',
        paragraphs: [
          'The sequence is a call or the cash-offer form, one walkthrough, a written offer, and a closing date you help choose with the closing agent. Access can be a lockbox or a local person. Utilities can stay off. Photos of the house, the shop, the yard, and any posting are enough to start if a visit has to wait. KindKey is based in downtown Auburn, so a look at an Edgewood house does not depend on a listing calendar. KindKey does not promise a specific number of days. Owners who already live somewhere else often want a shorter window. Owners who still need to collect boxes can ask for longer.',
          `Cash means KindKey is not waiting on a retail buyer’s mortgage. It does not mean a suitcase of money, and it does not erase a mortgage, a tax bill, a city fine, or a utility balance. ${closing} The offer reflects the house as it sits, including contents you leave and work that remains, so it can be less than a retail price for a cleaned, financed house. You can say no.`,
          'A listing can fit a vacant Edgewood house that is safe to show, easy to finance, and watched by someone local. Hire a licensed broker if you want that path. KindKey will not run the listing and will not tell you a listed sale is a mistake. A vacant house in Port Orchard, Bremerton, Silverdale, or Poulsbo is a Kitsap County file, with a different recorder and a different set of local rules. Bainbridge Island, Kingston, Olalla, and Seabeck are Kitsap places KindKey also buys in. Do not use this Edgewood page as the code guide for a Kitsap letter, or for a Milton letter. Milton can be King County or Pierce County. Edgewood, inside the city, is Pierce County. Reach out, and KindKey will help you through the whole process from start to finish, from the first description of the empty house through the walkthrough, the written offer, and closing. You can say no.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I have to clean out or mow a vacant Edgewood house before KindKey will look?',
        answer:
          'No. Furniture, shop contents, and vehicles you do not want can stay. A yard notice does not have to be cured first. Call (206) 519-5463 or use the cash-offer form. The city still controls its own case until it says otherwise.',
      },
      {
        question: 'Does Auburn’s vacant-property registration apply because KindKey is in Auburn?',
        answer:
          'No. Auburn City Code 15.20.100 is an Auburn ordinance. An Edgewood letter names the City of Edgewood or Pierce County. Read the header. KindKey will not register the house for you.',
      },
      {
        question:
          'The septic has been sitting and a remodel stopped. Will you still make an offer?',
        answer:
          'Yes. Tell us the system has not been used and what the remodel left unfinished, including any unpermitted work. You do not have to replace the drainfield or close a permit first. KindKey does not certify a septic system.',
      },
      {
        question: 'I inherited the vacant house and I live out of state. Who signs?',
        answer:
          'A Washington attorney confirms who has authority. KindKey will not guess and will not file the probate. You can request an offer before that answer is finished. Do not sign a deed before the authority exists. Access can be a lockbox or a relative for one visit.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood/sell-vacant-house',
        label: 'Sell a vacant house in Edgewood',
        description: 'The Edgewood vacant-house page.',
      },
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'North Hill, Jovita, and the valley.',
      },
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'The Washington overview for empty houses.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'Condition does not have to be repaired first.',
      },
      {
        href: '/areas/edgewood/sell-house-as-is',
        label: 'Sell as-is in Edgewood',
        description: 'The Edgewood as-is page.',
      },
      {
        href: '/areas/edgewood/sell-inherited-probate-house',
        label: 'Inherited houses in Edgewood',
        description: 'When the vacant house came from an estate.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Authority to sign, before the city detail.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'Open city letters about a yard, a shop, or unpermitted work.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The King and Pierce County overview.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-edgewood-wa',
        label: 'Septic or well issues in Edgewood',
        description: 'A system that has been sitting because the house is empty.',
      },
      {
        href: '/blog/sell-house-needing-repairs-edgewood-wa',
        label: 'Major repairs in Edgewood',
        description: 'A remodel that stopped, a roof, or a foundation.',
      },
      {
        href: '/blog/sell-fire-damaged-house-edgewood-wa',
        label: 'Fire damage in Edgewood',
        description: 'When the house is empty because of a fire.',
      },
      {
        href: '/blog/behind-on-property-taxes-edgewood-wa',
        label: 'Property taxes in Edgewood',
        description: 'A Pierce County tax bill is a different clock from a city letter.',
      },
      {
        href: '/areas/edgewood/sell-house-before-foreclosure',
        label: 'Foreclosure in Edgewood',
        description: 'When a trustee’s notice arrived while the house sat empty.',
      },
      {
        href: '/blog/selling-a-vacant-house-milton-wa',
        label: 'Vacant houses in Milton',
        description: 'The next city west, and a county line Edgewood does not have.',
      },
      {
        href: '/blog/sell-house-as-is-kitsap-county',
        label: 'Sell as-is in Kitsap County',
        description: 'Port Orchard, Bremerton, Silverdale, and Poulsbo.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say the house is empty and who has a key.',
      },
    ],
    ctaTitle: 'Ask for an offer on the vacant Edgewood house',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You do not have to mow it, empty it, or finish the remodel first. You can say no.',
  }),
  post('sell-inherited-acreage-with-outbuildings-edgewood-wa', {
    breadcrumbName: 'Inherited acreage in Edgewood',
    title: 'Selling Inherited Acreage with Outbuildings in Edgewood, WA',
    description:
      'How heirs sell inherited Edgewood acreage with a shop, barn, or other outbuildings as-is, including a drainfield or an unpermitted structure. KindKey is the buyer. Not legal advice.',
    h1: 'Selling Inherited Acreage with Outbuildings in Edgewood, WA',
    publishedAt: '2026-10-26',
    intro: [
      `You can sell inherited acreage in Edgewood, including the house and the shop, barn, shed, or other outbuilding that came with it, without subdividing the land, permitting those buildings, replacing a drainfield, or emptying the yard first. ${office} KindKey is not a probate attorney, a surveyor, or code enforcement.`,
      'Edgewood is entirely in Pierce County, between Milton, Fife, Puyallup, and Sumner. It incorporated on February 28, 1996. The city’s budget describes most residents as living on North Hill, with the rest at the base of the hill in the Puyallup River valley. Meridian Avenue E is State Route 161. Jovita Boulevard is the other everyday road. Jovita is not a separate city. An inherited place on North Hill is often a house plus buildings set back from the street. Those buildings can stay. They are not a project you have to finish before anyone will look.',
    ],
    callout:
      'You do not have to prove the shop was permitted, split the acreage, or clean it out before KindKey looks. Reach out, and KindKey will help you through the whole process from start to finish. You can say no after you see the offer.',
    sections: [
      {
        heading: 'The inheritance is often more than the house',
        paragraphs: [
          'Say what is on the ground before anyone schedules a visit. It may be a house and a detached shop, a barn, an RV cover, a row of sheds, a manufactured home, or a room over a garage that someone used as a place to live. A valley parcel at the base of the hill is usually smaller, and the drainage problem is different from a hill lot with a long driveway. Do not describe them as the same property. Bring every parcel number you have. Acreage can be one tax parcel, or the house and an outbuilding can sit on separate parcels that share a driveway. KindKey will not assume the shop is included because it looks connected. The Pierce County Assessor-Treasurer’s map is the record. The closing agent orders the title report. KindKey will not redraw a line or file a boundary adjustment.',
          'EMC 18.90.100(C) is the city’s flag-lot section. It says a flag lot has setbacks of 20 feet from all property lines for both principal and accessory structures. In the residential zones named in that subsection, it also states a minimum frontage of 20 feet on a public road, or an easement at least 20 feet wide when that frontage does not exist. A long driveway on North Hill is a fact to mention. KindKey will not survey it and will not tell you the lot is a flag lot. You do not need a survey before an offer.',
          'Milton, next door, can fall in King County or Pierce County. Edgewood does not. The Edgewood deed records with the Pierce County Auditor. A mailing address that says Edgewood is not always inside the city. If a letterhead says Pierce County, the parcel may be outside the city limits. Read the header. Parts of Edgewood lie inside the Puyallup Indian Reservation boundary. That can change a title report. KindKey does not interpret tribal jurisdiction. Tell the closing agent if you already know the parcel is inside the boundary.',
        ],
      },
      {
        heading: 'Shops that predate the city, and shops that never had a permit',
        paragraphs: [
          'EMC 18.90.110 is the nonconformities section. EMC 18.90.110(I) says the burden of demonstrating that a nonconformity existed on or before February 28, 1996, or is otherwise lawful under that title, rests with the property or business owner. It says the exact date need not be proven, only that the nonconformity existed on or before that date, and it also states other conditions, including that the nonconformity must not have been criminal at the time or under current law. It lists examples of evidence, including tax assessment records, permit records, testamentary documents, and photographs whose date can be ascertained. EMC 18.90.110(L) says the transfer of ownership of a nonconforming lot, use, or structure will not alter its legal nonconforming status. That sentence is about a status the city recognizes. It does not mean an unpermitted building becomes lawful because a parent died. KindKey will not gather that file, and KindKey will not tell you a shop is legal nonconforming. If you need a ruling, talk with the City of Edgewood or a Washington attorney. You do not need that ruling before you ask for an offer.',
          'EMC 15.20.030(C)(2)(a) exempts some accessory detached structures from a building permit when they are used as tool and storage sheds, playhouses, and similar uses accessory to one- and two-family dwellings, and when they meet the limits in that subsection. Those limits include a floor area that does not exceed 200 square feet, except 120 square feet on lots under one-half acre, and a maximum height of 10 feet, plus the setbacks in chapter 18.90 EMC and the other conditions written there. EMC 15.20.030(A) says an exemption from a permit does not authorize work that violates other rules. EMC 15.20.030(B) says the exemptions do not apply when the work is in a critical area the subsection lists, including wetlands, flood hazard areas, landslide hazard areas, and erosion hazard areas. The city’s building FAQ publishes a chart that lists 200 square feet and 14 feet for lots of one-half acre and larger, and it cites EMC 18.90.020. EMC 18.90.020 is a size and setback section for accessory buildings, including buildings larger than that permit exemption. KindKey will not tell you which page controls your shop, and KindKey will not call a pole barn, a powered shop, or a living space exempt.',
          'EMC 18.90.190 is the accessory-dwelling section. It says a landowner seeking an accessory dwelling unit applies for a building permit. It says a preexisting unit established without city approval may seek legal status through that same path, and that after approval the landowner must provide a title notification that the unit was legally constructed. It also says an accessory dwelling unit must be served by an approved potable water system and an approved sewer or on-site septic system. KindKey will not legalize a room over a shop or a second roof in the yard. If a relative or anyone else is living there, say so. Do not make that person leave so the acreage looks empty. Community Development is at Edgewood City Hall, 10440 Dom Calata Way E, Edgewood, WA 98372. The permit line published by the city is (253) 952-3299. KindKey will not pull the permit, appear at a hearing, or promise that a fine disappears when you sign. Until the deed records, deadlines on a city notice are still yours. If the paper has a hearing, a fine, or an order to vacate, talk with a Washington attorney. This article is not legal advice.',
        ],
      },
      {
        heading: 'A drainfield, a well, and a shop nobody has opened',
        paragraphs: [
          'Many older North Hill and Jovita lots use a septic system, and some use a private well. Others are on public sewer and public water. The city name does not decide it, and the fact that a parent handled the bill does not tell the heir which one it is. A failing drainfield, a system that has sat because the house is empty, or a field nobody can find on a large lot can all be described in plain words. You do not have to pump it, locate it, replace it, or put it back in service before a walkthrough. On-site sewage questions in Pierce County go to the Tacoma-Pierce County Health Department, not to the city building counter, and not to KindKey. KindKey does not inspect, pump, or certify a septic system or a well.',
          'A City of Edgewood letter about the shop and a health-department letter about the system are different files. Read the header. The City of Edgewood’s stormwater materials describe Jovita Creek, in the northeast of the city, in a steep-sided canyon. That describes the basin. It is not a map of your drainfield and it is not a finding that your lot is a critical area. If a floor or a shop roof is not safe to walk, say so. Photos of the house, the outbuildings, the yard, and any posting are enough to start. Take papers, photos, and what the family wants. Tools, vehicles, and the contents of the shop can stay. You do not have to rent a dumpster first.',
        ],
      },
      {
        heading: 'Who can sign, and what the sale does not erase',
        paragraphs: [
          'The person with authority to sign is a probate question. If the decedent lived in Edgewood, the Edgewood probate guide explains why Pierce County is the residence county under the transfer rule in RCW 11.96A.050. KindKey will not choose the courthouse. Ask a Washington attorney before anyone deeds the acreage. KindKey will not guess which relative can sign, will not file the probate, and will not prepare the deed. You can ask for an offer while the attorney finishes that question. Do not sign before the authority exists. Heirs can live in Puyallup, Sumner, King County, or another state and still need to be part of the decision. Agreement among siblings is not the signature the title company needs. A relative who still lives in the house should not be pushed out so the property looks vacant.',
          'A Pierce County property-tax bill is a different account from a city penalty on a shop. You can ask for an offer while the taxes are unpaid. KindKey will not calculate the tax and will not tell you a sale stops a treasurer’s date. If a foreclosure notice is also in the file, you have more than one clock. Talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute. A fire in the shop or the house is a different problem from the inheritance. The insurance claim stays with the insurer. KindKey does not give insurance advice.',
          `The sequence is a call or the cash-offer form, one walkthrough, a written offer, and a closing date you help choose with the closing agent. Access can be a lockbox or a local person. KindKey is based in downtown Auburn, so a look at an Edgewood property does not depend on a listing calendar. KindKey does not promise a specific number of days. ${closing} Cash means KindKey is not waiting on a retail buyer’s mortgage. It does not mean a suitcase of money, and it does not erase a mortgage, a tax bill, a city fine, or a utility balance. The offer reflects the acreage as it sits, including outbuildings and work that remains, so it can be less than a retail price for a cleared, permitted property. You can say no.`,
          'Splitting the land, permitting the shop, and listing the house can fit if the family wants that path and can fund it. Hire a licensed broker for a listing. KindKey will not run the listing, will not file a short plat, and will not tell you a listed sale is a mistake. Acreage in Olalla, Seabeck, Kingston, or on Bainbridge Island is a Kitsap County file, with a different recorder. Port Orchard, Bremerton, Silverdale, and Poulsbo each have their own pages. Do not use this Edgewood article as the code guide for a Kitsap letter, or for a Milton letter. Reach out, and KindKey will help you through the whole process from start to finish, from the first description of the buildings through the walkthrough, the written offer, and closing. You can say no.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I have to remove the shop or split the acreage before KindKey will look?',
        answer:
          'No. KindKey buys the Edgewood property as it sits, including shops, barns, and other outbuildings. You do not have to subdivide, demolish a building, or empty the yard first. Call (206) 519-5463 or use the cash-offer form. You can decline the offer.',
      },
      {
        question: 'The shop was built before Edgewood became a city. Is it automatically legal?',
        answer:
          'The city decides that. EMC 18.90.110(I) places the burden of showing a lawful nonconformity on the owner, tied to February 28, 1996, or to some other lawful status under that title. KindKey will not decide. You can still request an offer. A ruling is a question for the city or a Washington attorney.',
      },
      {
        question:
          'The drainfield is failing and nobody knows where it is. Do I have to replace it?',
        answer:
          'No. Tell us what you know, including if you do not know whether the property is on septic, a well, public sewer, or public water. KindKey does not locate or certify the system. On-site sewage questions in Pierce County go to the Tacoma-Pierce County Health Department.',
      },
      {
        question: 'I inherited the acreage and I am not the only heir. Who signs the deed?',
        answer:
          'A Washington attorney confirms who has authority. KindKey will not guess and will not file the probate. You can request an offer before that answer is finished. Do not sign before the authority exists. If a foreclosure notice is also in the file, ask that attorney about RCW 61.34. KindKey does not interpret that statute.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'North Hill, Jovita, Meridian, and the valley.',
      },
      {
        href: '/areas/edgewood/sell-inherited-probate-house',
        label: 'Sell an inherited house in Edgewood',
        description: 'The Edgewood probate page.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Authority to sign, before the acreage detail.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Probate houses in Edgewood',
        description: 'Pierce County letters, and who can sign.',
      },
      {
        href: '/areas/edgewood/sell-house-as-is',
        label: 'Sell as-is in Edgewood',
        description: 'The buildings and the land can transfer as they sit.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'The Washington as-is page.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'A city letter about a shop or an unpermitted room.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The King and Pierce County overview.',
      },
      {
        href: '/blog/sell-house-with-code-violations-edgewood-wa',
        label: 'Unpermitted work in Edgewood',
        description: 'When the notice is about the shop, not the probate.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-edgewood-wa',
        label: 'Septic or well issues in Edgewood',
        description: 'A drainfield or a well the family cannot document.',
      },
      {
        href: '/areas/edgewood/sell-hoarder-house',
        label: 'Hoarder and heavy-repair houses in Edgewood',
        description: 'Shops and yards that are full.',
      },
      {
        href: '/sell-hoarder-house',
        label: 'Sell a hoarder or heavy-repair house',
        description: 'The Washington overview for heavy contents.',
      },
      {
        href: '/blog/sell-hoarder-house-on-acreage-edgewood-wa',
        label: 'Hoarder houses on Edgewood acreage',
        description: 'When the shop and the house are both full.',
      },
      {
        href: '/areas/edgewood/sell-vacant-house',
        label: 'Vacant houses in Edgewood',
        description: 'When nobody has lived on the acreage.',
      },
      {
        href: '/blog/behind-on-property-taxes-edgewood-wa',
        label: 'Property taxes in Edgewood',
        description: 'A Pierce County tax bill is a different clock from a city letter.',
      },
      {
        href: '/areas/edgewood/sell-house-before-foreclosure',
        label: 'Foreclosure in Edgewood',
        description: 'When a trustee’s notice arrived with the inheritance.',
      },
      {
        href: '/blog/sell-fire-damaged-house-edgewood-wa',
        label: 'Fire damage in Edgewood',
        description: 'When the inherited shop or house has burned.',
      },
      {
        href: '/blog/sell-house-needing-repairs-edgewood-wa',
        label: 'Major repairs in Edgewood',
        description: 'A stalled remodel or a roof on the same property.',
      },
      {
        href: '/areas/edgewood/sell-house-with-tenants',
        label: 'Tenants in Edgewood',
        description: 'When someone still lives in the house or the shop.',
      },
      {
        href: '/blog/sell-house-as-is-kitsap-county',
        label: 'Sell as-is in Kitsap County',
        description: 'Port Orchard, Bremerton, Silverdale, and Poulsbo.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Name the buildings and the parcel numbers you have.',
      },
    ],
    ctaTitle: 'Ask for an offer on the inherited Edgewood acreage',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You do not have to permit the shop, find the drainfield, or split the land first. You can say no.',
  }),
  post('sell-water-damaged-house-edgewood-wa', {
    breadcrumbName: 'Water damage in Edgewood',
    title: 'Selling a Water-Damaged House in Edgewood, WA',
    description:
      'How Edgewood owners sell a North Hill or valley house with a roof leak, a burst pipe, or a wet crawlspace as-is. KindKey buys as a principal. Not insurance advice.',
    h1: 'Selling a Water-Damaged House in Edgewood, WA',
    publishedAt: '2026-10-27',
    intro: [
      `You can sell a water-damaged house in Edgewood without drying the walls, replacing the roof, or finishing an insurance repair first. ${office} KindKey is not a restoration contractor, an insurer, or a mold inspector. This article is not insurance advice.`,
      'Edgewood is entirely in Pierce County, between Milton, Fife, Puyallup, and Sumner. It incorporated on February 28, 1996. Most residents live on North Hill: longer driveways, and shops or sheds set back from the street. A smaller share of the city sits in the Puyallup River valley. Meridian Avenue E is State Route 161. Jovita Boulevard is the other everyday road. Jovita is not a separate city. A leak in a North Hill rambler, water in a detached shop, and a valley house with a wet crawlspace are different properties. Bring the address.',
    ],
    callout:
      'You do not have to dry the house out, pull the wet drywall, or get a contractor bid before KindKey looks. Reach out, and KindKey will help you through the whole process from start to finish. You can say no after you see the offer.',
    sections: [
      {
        heading: 'A roof leak, a burst pipe, and a wet shop are not the same job',
        paragraphs: [
          'Say where the water is before anyone schedules a visit. It may be a roof that leaked through a Western Washington winter, a pipe or fixture that failed while the house sat empty, a ceiling stain in one room, or a shop roof that let rain into tools and vehicles. Some of those houses are still lived in. Some are not. KindKey prices the property you describe. A single Edgewood discount, guessed before anyone sees the wet room, is not an offer.',
          'You do not have to tarp the roof to a listing standard, run fans, pull soaked drywall, or replace the shop roof before a walkthrough. Photos of the stain, the roof, the crawlspace access, and the shop are enough to start. If a floor or a ceiling is not safe to walk, say so. An exterior look can begin the conversation. Do not walk a house that is not safe just to satisfy a buyer. Furniture and shop contents you do not want can stay. Take papers, photos, and what you want to keep before the closing date you agree to.',
          'North Hill lots are often larger than a Tacoma city lot. The walkthrough has to cover the house and the outbuildings. A shop set back from Meridian or Jovita can be the wet structure while the house is dry, or the reverse. Tell us which. A valley house at the base of the hill is usually a smaller lot, and standing water after rain is a different problem from a pipe that broke inside a wall. Do not describe them as the same house. Milton, next door, can fall in King County or Pierce County. Edgewood does not. A mailing address that says Edgewood is not always inside the city. Read the header on any letter. The closing agent confirms the parcel. The Edgewood deed records with the Pierce County Auditor.',
        ],
      },
      {
        heading: 'Jovita Creek describes a basin, not your floor',
        paragraphs: [
          'The City of Edgewood’s stormwater materials describe Jovita Creek, in the northeast of the city, flowing in a steep-sided canyon. They say the adjacent hill slopes in that canyon are subject to frequent slides from runoff off the plateau, tree falls, unstable slopes, and high flows in the creek. That describes the basin. It is not a finding that your crawlspace flooded, that your shop roof failed, or that your lot is a critical area. If your house is along Jovita Boulevard, say what you have seen in the house and in the yard. KindKey prices the property in front of us.',
          'A wet yard can be a septic problem, not a roof problem. Many older North Hill and Jovita lots use a septic system, and some use a private well. Others are on public sewer and public water. The city name does not decide it, and a stain on the ceiling does not decide it. You do not have to pump the tank, find the drainfield, or replace it before KindKey looks. On-site sewage questions in Pierce County go to the Tacoma-Pierce County Health Department, not to the city building counter, and not to KindKey. KindKey does not inspect, pump, or certify a septic system or a well. The Edgewood septic guide is the page for a failing system. This page is for water that entered a building.',
          'Water from a fire is a different file. East Pierce Fire & Rescue covers Edgewood. The city’s former Fire District 8 joined East Pierce in 2010. East Pierce’s 2022 standards of cover list Station 118 at 10105 24th Street E. KindKey is not the fire department and does not interpret a run report. A kitchen fire that also soaked the floor belongs on the Edgewood fire page, including the insurance claim, which stays with your insurer. Use this page when the water did not start as a fire.',
        ],
      },
      {
        heading: 'A hole in the roof is still the city’s file until you deed it',
        paragraphs: [
          'Chapter 15.80 of the Edgewood Municipal Code adopts the 2021 International Property Maintenance Code, with the amendments in that chapter. EMC 15.80.301.4 adds a security rule. It says vacant buildings must be secured against outside entry, doors and windows must remain locked, there must be at least one operable door into every building and housing unit, and exterior walls and roofs must remain intact without holes. KindKey will not decide whether your roof meets that sentence. A leak that has opened a hole does not have to be patched before KindKey looks. Until the deed records, that duty stays with the owner. Requesting an offer does not board a window or close a roof. KindKey will not perform that work as your contractor.',
          'A more serious letter can use the unfit-building process. Chapter 7.50 EMC is the city’s unfit-dwellings chapter, and it states that it is pursuant to chapter 35.80 RCW. EMC 7.50.040 says the code official may consider damage from fire, earthquake, wind, flood, or any other cause, and inadequate drainage, among other conditions. KindKey will not decide whether your house meets them, and KindKey will not tell you whether the city will order a repair or a demolition. EMC 7.50.080 says a hearing shall be scheduled for not less than 10 days nor more than 30 days after the serving of the order. Read the date on the paper you were served. KindKey will not count the days, appear at the hearing, or file the appeal under EMC 7.50.090. A petition to Pierce County Superior Court is a lawyer’s work. If the notice has a hearing, a fine, or an order to vacate, talk with a Washington attorney. Do not skip a hearing because a buyer is looking. This article is not legal advice.',
          'Community Development is at Edgewood City Hall, 10440 Dom Calata Way E, Edgewood, WA 98372. The permit line published by the city is (253) 952-3299. You do not need a reconstruction permit, a dry-out contract, or a trip to that counter before the visit. KindKey will not pull the permit or promise that a fine disappears when you sign. EMC 7.50.130 says repair or demolition costs the city incurs can be assessed against the property, and it cites RCW 35.80.030 for a lien. KindKey will not calculate that amount. Amounts that must be paid can reduce proceeds the same way a mortgage payoff can. The settlement statement, prepared by the closing agent, is where you see them.',
        ],
      },
      {
        heading: 'The insurance file, a loan notice, and selling the wet house as-is',
        paragraphs: [
          'Your insurer and your lender are your relationships. You can ask KindKey for an offer while a claim is open, after a claim was denied, or when you never opened one. KindKey will not tell you whether to wait for a check, how to assign the proceeds, or whether a stain is mold. KindKey does not test air, write a mold report, or certify that a house is dry. Talk with your insurer and, if the paperwork is unclear, a Washington attorney.',
          'A retail buyer using a mortgage often cannot close while walls are open, a roof is still leaking, or an appraiser will not treat the house as livable. Cash, in this sale, means KindKey is not waiting on that buyer’s loan. It does not mean a suitcase of money, and it does not erase a mortgage, a Pierce County tax bill, a city cost, or a contractor’s bill for a dry-out you already started. Those amounts can reduce proceeds. You see them on the settlement statement before you close.',
          `If a foreclosure notice or a probate is sitting next to the water damage, talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute. Your attorney confirms who can sign. KindKey will not file a probate and will not guess which relative has authority. Parts of Edgewood lie inside the Puyallup Indian Reservation boundary. That can change a title report. KindKey does not interpret tribal jurisdiction. Tell the closing agent if you already know the parcel is inside the boundary. ${closing}`,
          'Drying the house and repairing it can fit if you want to keep it and you can fund the work. A listing can fit after that. Hire a licensed broker if you want a listing. KindKey will not run one and will not tell you a listed sale is a mistake. A direct sale fits when the dry-out bid is larger than the cash you have, when you already live in Puyallup, Sumner, or another state, or when you cannot watch a leak from somewhere else. A water-damaged house in Port Orchard, Bremerton, Silverdale, Poulsbo, Bainbridge Island, Kingston, Olalla, or Seabeck is a Kitsap County file. Do not use this Edgewood page as the code guide for a Kitsap letter, or for a Milton letter. The sequence here is a call or the cash-offer form, one walkthrough, a written offer, and a closing date you help choose with the closing agent. KindKey does not promise a specific number of days. Reach out, and KindKey will help you through the whole process from start to finish, from the first description of the leak through the walkthrough, the written offer, and closing. You can say no.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I have to dry out an Edgewood house before KindKey will look?',
        answer:
          'No. KindKey buys water-damaged houses on North Hill, along Jovita Boulevard, on the Meridian corridor, and in the valley as they sit. You do not need a restoration bid, a mold report, or a finished roof. Call (206) 519-5463 or use the cash-offer form. You can decline the offer.',
      },
      {
        question: 'The leak is in the shop and the house is dry. Will you still look?',
        answer:
          'Yes. Tell us which structure is wet. You do not have to demolish the shop or replace its roof before an offer. If a floor or a shop roof is not safe to walk, say so.',
      },
      {
        question: 'Will KindKey advise me on the insurance claim or tell me a stain is mold?',
        answer:
          'No. KindKey does not give insurance advice and does not inspect for mold. Ask your insurer, and a Washington attorney if you are assigning claim rights. You can still request an offer while a claim is open.',
      },
      {
        question:
          'Is a wet crawlspace the same as a failed septic system, a fire, or a foreclosure?',
        answer:
          'No. A drainfield question goes to the Tacoma-Pierce County Health Department. Water from a fire is the Edgewood fire page. A trustee’s notice is a different deadline. If a foreclosure notice or a probate is also in the file, talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34 that KindKey will not interpret. KindKey can still look at the house.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'North Hill, Jovita, Meridian, and the valley.',
      },
      {
        href: '/areas/edgewood/sell-house-as-is',
        label: 'Sell a house as-is in Edgewood',
        description: 'The Edgewood as-is page.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'Condition does not have to be repaired first.',
      },
      {
        href: '/areas/edgewood/sell-vacant-house',
        label: 'Vacant houses in Edgewood',
        description: 'When the leak started after nobody was living there.',
      },
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'The Washington overview for empty houses.',
      },
      {
        href: '/areas/edgewood/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Edgewood',
        description: 'When the water started as a fire.',
      },
      {
        href: '/sell-fire-damaged-house',
        label: 'Sell a fire-damaged house',
        description: 'The King, Pierce, and Kitsap overview.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'A city letter about a roof, a shop, or an unsafe structure.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The King and Pierce County overview.',
      },
      {
        href: '/areas/edgewood/sell-hoarder-house',
        label: 'Heavy-repair houses in Edgewood',
        description: 'When the water damage is one part of a larger repair.',
      },
      {
        href: '/sell-hoarder-house',
        label: 'Sell a hoarder or heavy-repair house',
        description: 'Roof, moisture, and contents can stay.',
      },
      {
        href: '/blog/sell-house-needing-repairs-edgewood-wa',
        label: 'Major repairs in Edgewood',
        description: 'A stopped remodel, a roof, or a foundation on the same house.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-edgewood-wa',
        label: 'Septic or well issues in Edgewood',
        description: 'When the wet spot is the private system, not the ceiling.',
      },
      {
        href: '/blog/selling-a-vacant-house-edgewood-wa',
        label: 'Vacant houses in Edgewood',
        description: 'The city rule for a roof that is no longer intact.',
      },
      {
        href: '/blog/sell-fire-damaged-house-edgewood-wa',
        label: 'Fire damage in Edgewood',
        description: 'Station 118, North Hill shops, and the insurance file.',
      },
      {
        href: '/areas/edgewood/sell-inherited-probate-house',
        label: 'Inherited houses in Edgewood',
        description: 'When the wet house came from an estate.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Authority to sign, before the city detail.',
      },
      {
        href: '/areas/edgewood/sell-house-before-foreclosure',
        label: 'Foreclosure in Edgewood',
        description: 'When a trustee’s notice arrived with the leak.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say where the water is. You do not have to dry the house first.',
      },
    ],
    ctaTitle: 'Ask for an Edgewood offer on the water-damaged house',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. Reach out, and KindKey will help you through the whole process from start to finish. You do not have to dry the house out first. You can say no.',
  }),
  post('sell-house-with-stalled-remodel-edgewood-wa', {
    breadcrumbName: 'Stalled remodel in Edgewood',
    title: 'Selling a House with a Stalled or Unfinished Remodel in Edgewood, WA',
    description:
      'How Edgewood owners sell a North Hill or valley house with an open permit, an expired permit, or a remodel that stopped. KindKey buys as a principal. Not legal advice.',
    h1: 'Selling a House with a Stalled or Unfinished Remodel in Edgewood, WA',
    publishedAt: '2026-10-28',
    intro: [
      `You can sell a house with a stalled or unfinished remodel in Edgewood without closing the walls, calling for a final inspection, or hiring a new contractor first. ${office} KindKey is not a contractor, a permit expediter, or the city’s building official.`,
      'Edgewood is entirely in Pierce County, between Milton, Fife, Puyallup, and Sumner. It incorporated on February 28, 1996. Most residents live on North Hill: longer driveways, and shops set back from the street. A smaller share of the city sits in the Puyallup River valley. Meridian Avenue E is State Route 161. Jovita Boulevard is the other everyday road. Jovita is not a separate city. A gutted kitchen on North Hill, a framed addition along Jovita, and a valley bathroom that was opened and never closed are different projects. Bring the address.',
    ],
    callout:
      'You do not have to finish the remodel, pass a final inspection, or collect a contractor bid before KindKey looks. Reach out, and KindKey will help you through the whole process from start to finish. You can say no after you see the offer.',
    sections: [
      {
        heading: 'A gutted kitchen, a framed addition, and a permit that was never finaled',
        paragraphs: [
          'A stalled remodel is work that started and stopped. On a North Hill lot that can be a kitchen down to the studs, a garage that was going to become a room, a shop with new wiring and no cover plates, or an addition framed in the side yard and still wrapped in house wrap. In the valley it is often a smaller house: one bathroom opened for a leak, a floor that was pulled up, or a room addition that never dried in. Some of these houses are still lived in. Some are not. Some still have a permit card in the window. Some have a card that the owner believes expired. Some never had a permit at all. Say which one you have. KindKey prices the property you describe. A single Edgewood number, guessed before anyone sees the open walls, is not an offer.',
          'You do not have to hang drywall, put the cabinets back, pull a new permit, or schedule the inspection the last contractor missed. Photos of the open room, the addition, the shop, and any permit card are enough to start. If a floor, a stair, or a temporary opening is not safe to walk, say so. An exterior look can begin the conversation. Do not walk a house that is not safe just to satisfy a buyer. Tools, leftover materials, and furniture you do not want can stay. Take papers, photos, and what you want to keep before the closing date you agree to.',
          'A worn-out roof, a foundation crack, or a shop that needs wiring, with no remodel in progress, is a different article. The Edgewood major-repairs guide covers that house. A shop or a room that was built years ago and never permitted, with no project underway now, is the Edgewood code-and-unpermitted guide. Use this page when the project itself is what stopped: open studs, a permit in the file, a contractor who left, or an addition that never reached a final inspection. North Hill lots are often larger than a Tacoma city lot, so the walkthrough has to include the house and the outbuildings. Tell us which structure is unfinished. Milton, next door, can fall in King County or Pierce County. Edgewood does not. A mailing address that says Edgewood is not always inside the city. The closing agent confirms the parcel. The deed records with the Pierce County Auditor.',
        ],
      },
      {
        heading: 'What the Edgewood permit counter actually publishes',
        paragraphs: [
          'Community Development is at Edgewood City Hall, 10440 Dom Calata Way E, Edgewood, WA 98372. The permit line published by the city is (253) 952-3299. City Hall’s posted hours are Monday through Thursday, 8:30 a.m. to 5:00 p.m. The building division publishes cityhall@cityofedgewood.org. The online permit center publishes permit@edgewoodwa.gov for status questions. That counter is for owners who choose to keep permitting. KindKey does not require the visit, and KindKey will not email the permit desk, pull the permit, or appear for an inspection.',
          'The city publishes more than one description of review time, and both are targets rather than a promise about your file. The online permit center says plumbing, mechanical, and residential re-roof applications are generally issued within one week, and that the city tries to review other new applications within eight weeks and resubmittals within six weeks, depending on complexity. The building and fire prevention page gives examples by project type: a very small interior-only project with no engineering might complete review in one week, smaller residential alterations and additions might complete a first review in two weeks, a new detached residence is described as typically about five weeks for a first review, and more complex projects may take up to ten weeks, with further time when corrections come back. If you have waited longer than the target posted for your application, the permit center says to email permit@edgewoodwa.gov. KindKey will not send that email and will not tell you the city is late. Your application status is the clock that matters. None of those weeks is a step KindKey requires before an offer.',
          'Inspections, if you are still pursuing the permit yourself, are scheduled on that same portal. The city says a request must be in no later than 4:00 p.m. one business day before the desired date, and that a scheduled inspection can be canceled up to 6:00 a.m. the day of the inspection. KindKey will not book it. The portal also lets an account holder opt into an email 30 days before a permit is set to expire. That notice is a reminder of a date the city already has. It is not a statewide expiration rule, and it is not a calculation KindKey will make. Chapter 15.10 EMC is the administration chapter the city uses in place of Chapter 1 of the 2021 International Building Code and in place of Chapter 1 of the 2021 International Residential Code, under EMC 15.20.010 and EMC 15.30.010. Read the date on your own permit. KindKey will not decide that the permit has expired, and KindKey will not tell you whether to renew it.',
          'The city’s building and fire prevention page posts construction hours and attributes them to EMC 18.90.140(G), unless a permit decision modifies them: Monday through Friday, 7:00 a.m. to 7:00 p.m., Saturday 9:00 a.m. to 6:00 p.m., and no construction on Sunday or on city-observed holidays. A contractor who is still on site is working on the city’s clock. KindKey’s purchase does not depend on that schedule. You can ask for an offer while a permit is open, expired, suspended, or never pulled. Bring the paperwork if you have it. If you do not, say so.',
        ],
      },
      {
        heading: 'Finish work, a cut wall, and a land-use approval are different papers',
        paragraphs: [
          'EMC 15.20.030(A) says an exemption from the building-permit requirement is not authorization to violate other rules, and that an exemption under one technical code does not exempt the work from another. EMC 15.20.030(C)(1) says application or notice is not required for ordinary repairs, and then says those repairs shall not include work affecting public health or general safety. The list includes cutting away any wall or partition, removing or cutting a structural beam or load-bearing support, changing a required means of egress, and adding, altering, replacing, or relocating water, sewer, gas, or similar piping, electric wiring, or mechanical work. EMC 15.20.030(C)(2)(d) lists finish work such as painting, papering, tiling, carpeting, cabinets, counter tops, and similar work as permit-exempt when the rest of that section is met. A kitchen that only needed new cabinet boxes can fall in a different sentence from a kitchen that moved a wall or the plumbing. KindKey will not decide which sentence describes your house. The city does. You do not have to get that ruling before KindKey looks.',
          'EMC 15.20.030(B) says those exemptions do not apply when the work is in a critical area the subsection lists, including wetlands, flood hazard areas, landslide hazard areas, and erosion hazard areas. The city’s stormwater materials describe Jovita Creek, in the northeast of the city, in a steep-sided canyon, and say the adjacent hill slopes are subject to slides. That describes the basin. It is not a finding that your addition sits in a landslide hazard area. If the remodel is on a slope along Jovita Boulevard, say what you have seen. KindKey will not map the lot and will not tell you the exemption applies.',
          'A building permit card and a land-use decision are different documents. EMC 18.40.020 says the building code official shall not issue a building permit for construction, reconstruction, or alteration of a structure for which a zoning decision is required but has not been issued. EMC 18.40.090(K) is the expiration rule for a Process II approval, which that chapter titles a major administrative action. It says the applicant must begin construction or submit a complete building permit application within one year after the final decision is issued, or the decision becomes void, and must substantially complete construction and the applicable conditions within five years after the final decision of the city, or the decision becomes void. EMC 18.40.090(L) allows a written request to community development for a one-time extension of up to one year. The request has to show substantial progress and circumstances beyond the applicant’s control, and it has to include the fee in the city fee schedule. The section says the community development director’s decision on that extension is final and not appealable. EMC 18.40.100(K) points Process III, the hearing-examiner process, back to the same expiration subsection. Do not copy the one-year and five-year sentences onto a building permit card unless the decision in your hand is the approval those sentences govern. KindKey will not classify the file, count the year, write the extension letter, or pay the fee.',
          'If the city has already issued a decision you can appeal under the building title, EMC 15.90.010 lists what may go to the hearing examiner. The list includes a decision on a permit application under EMC 15.10.230 and revocation or suspension of an issued building permit under EMC 15.10.320, along with certain interpretations, modifications, alternative-materials decisions, and completeness determinations. The section says no other determinations, orders, or approvals of the code official under that title may be appealed. EMC 15.90.020 says the applicant or permittee may file a written request for appeal with the city clerk within seven business days of the date of the applicable decision. EMC 15.90.030 says the hearing examiner schedules the hearing no sooner than 10 days nor later than 30 days after the appeal is filed, unless the parties agree otherwise. Read the date on your paper. KindKey will not count the days, file the appeal, or tell you whether your email from the city is on that list. If the paper has a hearing, a fine, or an order to vacate, talk with a Washington attorney. Do not skip a hearing because a buyer is looking. This article is not legal advice.',
        ],
      },
      {
        heading: 'The contractor left, and the unfinished house can still be sold as-is',
        paragraphs: [
          'An unpaid contractor bill can show up when the closing agent runs title. KindKey does not interpret Washington lien law, does not tell you whether a claim was recorded correctly, and does not negotiate the invoice. If a claim is in the file and you do not understand it, talk with a Washington attorney. Amounts that must be paid can reduce proceeds the same way a mortgage payoff can. You see them on the settlement statement, prepared by the closing agent, before you close. KindKey does not promise that a contractor’s bill disappears when you sign.',
          'A retail buyer using a mortgage often cannot close while walls are open, an inspection was never finaled, or a permit is sitting unfinished in the city file. Cash, in this sale, means KindKey is not waiting on that buyer’s loan. It does not mean a suitcase of money, and it does not erase a mortgage, a Pierce County tax bill, a city cost, or the contractor’s bill. The offer reflects the remaining work, so it can be less than a retail price for a finished house. You can say no.',
          `If a foreclosure notice, a probate, or a divorce is sitting next to the remodel, talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute. Your attorney confirms who can sign. KindKey will not file a probate, will not guess which relative has authority, and will not tell divorcing owners which signature the deed needs. A Pierce County property-tax delinquency is a different clock from a permit. Parts of Edgewood lie inside the Puyallup Indian Reservation boundary. That can change a title report. KindKey does not interpret tribal jurisdiction. Tell the closing agent if you already know the parcel is inside the boundary. ${closing}`,
          'A remodel that added a bathroom or a second living space can also be a septic question. Many older North Hill and Jovita lots use a septic system, and some use a private well. Others are on public sewer and public water. The city name does not decide it. On-site sewage questions in Pierce County go to the Tacoma-Pierce County Health Department, not to KindKey. EMC 18.90.190 says a landowner seeking an accessory dwelling unit applies for a building permit, and that the unit must be served by an approved potable water system and an approved sewer or on-site septic system. KindKey will not legalize a room over a shop or a garage apartment. If someone is living in the unfinished space, say so. Do not make that person leave so the house looks vacant. You do not have to replace a drainfield before an offer.',
          'An open roof or an open exterior wall can also draw a maintenance letter. Until the deed records, that file stays with the owner. Requesting an offer does not close the walls or close the city’s case. The Edgewood vacant-house guide and the water-damage guide cover a roof that is no longer intact, including EMC 15.80.301.4 and the unfit-building chapter. Use those pages when the problem is the leak or the empty house. Use this page when the problem is the remodel that stopped. If the project stopped because of a fire, the Edgewood fire guide is the one that covers the insurance claim. KindKey does not advise you on a claim.',
          'Finishing the remodel can fit if you have the money, the time, and a house you want to show. A listing can fit after that, or before it, if a broker will take the condition and you can host access. Hire a licensed broker if you want a listing. KindKey will not run one and will not tell you a listed sale is a mistake. A direct sale fits when the bid to finish is larger than the cash you have, when you already live in Puyallup, Sumner, Tacoma, or another state, or when a deadline is closer than the city’s review examples. A stalled remodel in Port Orchard, Bremerton, Silverdale, Poulsbo, Bainbridge Island, Kingston, Olalla, or Seabeck is a Kitsap County file. Do not use this Edgewood page as the permit guide for a Kitsap city, or for a Milton letter. The sequence here is a call or the cash-offer form, one walkthrough, a written offer, and a closing date you help choose with the closing agent. KindKey does not promise a specific number of days. Reach out, and KindKey will help you through the whole process from start to finish, from the first description of the open room through the walkthrough, the written offer, and closing. You can say no.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I have to finish an Edgewood remodel before KindKey will look?',
        answer:
          'No. KindKey buys houses on North Hill, along Jovita Boulevard, on the Meridian corridor, and in the valley with the remodel unfinished. You do not need drywall, a final inspection, or a new contractor bid. Call (206) 519-5463 or use the cash-offer form. You can decline the offer.',
      },
      {
        question:
          'The permit is open, expired, or I never pulled one. Can you still make an offer?',
        answer:
          'Yes. Bring the permit card if you have it. If you do not, say so. KindKey will not decide whether a permit has expired, will not renew it, and will not pull one for you. The city’s permit counter at 10440 Dom Calata Way E is for owners who choose to keep permitting.',
      },
      {
        question:
          'The contractor left and there may be an unpaid bill. Will KindKey handle the claim?',
        answer:
          'No. KindKey does not interpret lien law and does not negotiate a contractor’s invoice. If a claim is recorded and you do not understand it, talk with a Washington attorney. Amounts that must be paid can reduce proceeds and show on the settlement statement. You can still request an offer.',
      },
      {
        question:
          'Is a stalled remodel the same as a code case, a failed septic system, or a foreclosure?',
        answer:
          'No. A city notice about unpermitted work is the Edgewood code page. A drainfield question goes to the Tacoma-Pierce County Health Department. A trustee’s notice is a different deadline. If a foreclosure notice, a probate, or a divorce is also in the file, talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34 that KindKey will not interpret. KindKey can still look at the house.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'North Hill, Jovita, Meridian, and the valley.',
      },
      {
        href: '/areas/edgewood/sell-house-as-is',
        label: 'Sell a house as-is in Edgewood',
        description: 'The Edgewood as-is page.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'Condition does not have to be repaired first.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'When the open work has already drawn a city letter.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The King and Pierce County overview.',
      },
      {
        href: '/blog/sell-house-with-code-violations-edgewood-wa',
        label: 'Unpermitted work in Edgewood',
        description: 'A shop or a room that was never permitted, with no project underway.',
      },
      {
        href: '/blog/sell-house-needing-repairs-edgewood-wa',
        label: 'Major repairs in Edgewood',
        description: 'A roof, a foundation, or other work that is not a remodel in progress.',
      },
      {
        href: '/areas/edgewood/sell-hoarder-house',
        label: 'Heavy-repair houses in Edgewood',
        description: 'When the unfinished room is one part of a larger repair.',
      },
      {
        href: '/sell-hoarder-house',
        label: 'Sell a hoarder or heavy-repair house',
        description: 'Contents and major repairs can stay.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-edgewood-wa',
        label: 'Septic or well issues in Edgewood',
        description: 'When the remodel added a bathroom on a private system.',
      },
      {
        href: '/areas/edgewood/sell-inherited-probate-house',
        label: 'Inherited houses in Edgewood',
        description: 'When the stopped remodel came with the estate.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Authority to sign, before the permit detail.',
      },
      {
        href: '/blog/selling-a-house-during-divorce-edgewood-wa',
        label: 'Divorce sales in Edgewood',
        description: 'When the remodel stopped because the household split.',
      },
      {
        href: '/areas/edgewood/sell-house-before-foreclosure',
        label: 'Foreclosure in Edgewood',
        description: 'When a trustee’s notice arrived with the open permit.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'The statewide guide. Your notice still controls.',
      },
      {
        href: '/areas/edgewood/sell-vacant-house',
        label: 'Vacant houses in Edgewood',
        description: 'When nobody is living in the unfinished house.',
      },
      {
        href: '/blog/selling-a-vacant-house-edgewood-wa',
        label: 'Selling a vacant Edgewood house',
        description: 'The city rule for a roof or a wall that is no longer intact.',
      },
      {
        href: '/areas/edgewood/sell-house-with-tenants',
        label: 'Houses with tenants in Edgewood',
        description: 'When someone still lives in the unfinished space.',
      },
      {
        href: '/blog/sell-water-damaged-house-edgewood-wa',
        label: 'Water damage in Edgewood',
        description: 'When the open walls started as a leak.',
      },
      {
        href: '/blog/sell-inherited-acreage-with-outbuildings-edgewood-wa',
        label: 'Inherited acreage in Edgewood',
        description: 'Shops, ADUs, and the building-permit path for a second unit.',
      },
      {
        href: '/blog/behind-on-property-taxes-edgewood-wa',
        label: 'Property taxes in Edgewood',
        description: 'A Pierce County bill is a different clock from a permit.',
      },
      {
        href: '/blog/sell-house-as-is-kitsap-county',
        label: 'Selling as-is in Kitsap County',
        description: 'Port Orchard, Bremerton, Silverdale, and Poulsbo.',
      },
      {
        href: '/areas/milton',
        label: 'Sell a house in Milton',
        description: 'The next city west. Milton can be King County or Pierce County.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say what stopped. You do not have to finish the remodel first.',
      },
    ],
    ctaTitle: 'Ask for an Edgewood offer on the unfinished remodel',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. Reach out, and KindKey will help you through the whole process from start to finish. You do not have to finish the remodel first. You can say no.',
  }),
  post('sell-house-with-power-of-attorney-edgewood-wa', {
    breadcrumbName: 'Power of attorney in Edgewood',
    title: 'Selling an Edgewood House with a Power of Attorney While the Owner Is in Care',
    description:
      'How families sell a living owner’s Edgewood house while that owner is in care, if a power of attorney or a court order allows the signature. KindKey is the buyer. Not legal advice.',
    h1: 'Selling an Edgewood House with a Power of Attorney While the Owner Is in Care',
    publishedAt: '2026-10-29',
    intro: [
      `You can ask for a cash offer on an Edgewood house while the owner is alive and living in care, without waiting for a death and a probate, if the person who signs is someone the title company will accept. ${office} KindKey does not act under the power of attorney, and KindKey is not a conservator or a guardian.`,
      'The owner may be in assisted living, a nursing facility, memory care, or an adult family home in Puyallup, Sumner, Tacoma, Milton, or across the county line in Federal Way or Kent. The house does not move with them. Edgewood is entirely in Pierce County, between Milton, Fife, Puyallup, and Sumner. It incorporated on February 28, 1996. Most residents live on North Hill: longer driveways, and shops set back from the street. A smaller share of the city sits in the Puyallup River valley. Meridian Avenue E is State Route 161. Jovita Boulevard is the other everyday road. Jovita is not a separate city. A North Hill house a parent left behind, and a smaller valley house, are different properties. Bring the address.',
    ],
    callout:
      'You do not have to empty the house, repair it, or open a probate that has not started. The signer still has to be someone an attorney and the title company will accept. Reach out, and KindKey will help you through the whole process from start to finish. You can say no after you see the offer.',
    sections: [
      {
        heading: 'A living owner is not an Edgewood probate',
        paragraphs: [
          'This page is for a house whose owner is still alive. RCW 11.125.100(1)(a) says a power of attorney terminates when the principal dies. In that sentence, the principal is the person who signed the power of attorney, usually the parent. After that death, the power of attorney cannot be used to deed the house. Read the Edgewood probate guide and ask a Washington attorney who can sign. Do not hand the closing agent a power of attorney for someone who has already died. KindKey will not file the probate and will not guess which relative has authority.',
          'A financial power of attorney and a medical power of attorney are different papers. RCW 11.125.240(1)(l) lists health-care decisions as authority the document must expressly grant. A hospital form, a health-care directive, or a medical power of attorney does not, by itself, sell the house. Bring the financial document if you have it. If you do not, say so. KindKey will not treat a care-facility packet as a deed.',
          'Some Edgewood houses are already titled in a living trust, or had a transfer-on-death deed recorded under chapter 64.80 RCW. Those paths are not a power of attorney, and they are not a probate while the owner is alive. A Washington attorney, and then the title company, reads the document that is actually on title. Adult children in Puyallup, Sumner, Fife, Milton, King County, or another state can help gather papers. They cannot sign on a family vote. If the owner still has capacity and wants to sign the deed personally, a power of attorney is not a requirement KindKey imposes. An attorney is the person who speaks to capacity. KindKey will not.',
        ],
      },
      {
        heading: 'What chapter 11.125 RCW says about selling the house',
        paragraphs: [
          'Chapter 11.125 RCW is Washington’s Uniform Power of Attorney Act, including rules that differ from the uniform text. RCW 11.125.040 says the authority conferred under a power of attorney created before January 1, 2017, and also under a power of attorney created on or after that date, terminates upon the incapacity of the principal unless the writing contains the words "This power of attorney shall not be affected by disability of the principal," or "This power of attorney shall become effective upon the disability of the principal," or similar words showing the intent of the principal that the authority conferred shall be exercisable notwithstanding the principal’s incapacity. A parent who could discuss a sale last year, and cannot now, may be holding a document that already stopped. KindKey will not read that sentence for you and will not tell you the document is durable. Take it to a Washington attorney. The closing agent will ask to see it.',
          'RCW 11.125.090(1) says a power of attorney is effective when executed unless the principal provides that it becomes effective at a future date or upon a future event or contingency. Some documents do not start until someone determines incapacity in writing. If the document names that person, KindKey will not decide that the event has occurred. If it becomes effective upon incapacity and the principal did not authorize anyone to make that determination, or that person cannot or will not, RCW 11.125.090(3) describes a written determination by a physician or a licensed psychologist, unrelated to the principal or the agent by blood or marriage, who has personally examined the principal, or by a judge or an appropriate governmental official. KindKey is none of those people. KindKey will not write that determination.',
          'RCW 11.125.050 says a power of attorney must be signed and dated by the principal, and that the signature must be acknowledged before a notary or other person authorized to take acknowledgments, or attested by two or more competent witnesses. Those witnesses cannot be home care providers for the principal, cannot be care providers at an adult family home or long-term care facility in which the principal resides, and must be unrelated to the principal or the agent by blood, marriage, or state registered domestic partnership. A form signed at the facility by the facility’s own staff can fail that witness rule. KindKey will not tell you a signature is valid. RCW 11.125.270 says that, unless the power of attorney otherwise provides, language granting general authority with respect to real property authorizes the agent to sell, exchange, and convey an interest in the real property, among the other acts that section lists. RCW 11.125.250 describes when that general authority is created, including a grant to do all acts the principal could do, subject to RCW 11.125.240. A document that only lets someone pay a bill, or that never grants real-property authority, is a different paper. KindKey will not decide that a sentence in a kitchen drawer is general authority.',
          'The agent acts for the owner. RCW 11.125.140(1) says an agent who has accepted appointment shall act in accordance with the principal’s reasonable expectations to the extent actually known by the agent and, otherwise, in the principal’s best interest, shall act in good faith, and shall act only within the authority granted. RCW 11.125.140(2) says that, except as otherwise provided in the power of attorney, the agent shall act loyally for the principal’s benefit and keep a record of all receipts, disbursements, and transactions made on behalf of the principal. Sale proceeds are the owner’s. They are not a gift to the child because a buyer made an offer. KindKey does not divide the money, does not pay the care facility, and does not monitor the agent’s accounting. Where the funds go is the agent’s duty and the attorney’s question. Do not deed the Edgewood house to yourself, or to a sibling, to make the file easier. KindKey will not participate in a transfer meant to move the house out of the owner’s name for a purpose the document does not support. A gift, or a transfer meant to qualify the owner for medical assistance, is a different act from a sale to KindKey. Chapter 74.09 RCW is the medical-assistance chapter. KindKey will not tell you whether a transfer is allowed and will not take title for that purpose. Ask an elder-law attorney before anyone signs a deed to a relative.',
        ],
      },
      {
        heading: 'A conservator, a spouse, and the agent are not the same signer',
        paragraphs: [
          'A conservator is a person a court appoints. That file is chapter 11.130 RCW, not a power of attorney the family printed. RCW 11.130.435(1) says that, except as otherwise ordered by the court, a conservator must give notice to persons entitled to notice under RCW 11.130.370(4) and receive specific authorization by the court before the conservator may sell or encumber the primary dwelling of the individual, and before the conservator may sell or encumber any other real estate. RCW 11.130.435(1)(k) says that in all transactions involving the sale of real property, the conservator shall receive additional authority from the court as to the disposition of the proceedings from the sale of the real property. That subsection uses the word "proceedings." KindKey will not paraphrase it, and KindKey will not draft the petition, give that notice, or tell you the order in the folder is the order the statute describes. Bring the order to your attorney and to the closing agent. Do not sign a deed before that authority exists. You can ask KindKey for a number while the attorney prepares the request. An offer is not court approval.',
          'Appointing a conservator does not, by itself, tear up a financial power of attorney the owner already signed. RCW 11.125.080(2) says that if a court later appoints a conservator of the estate or another fiduciary charged with management of some or all of the property, the power of attorney is not terminated and the agent’s authority continues, subject to RCW 11.130.335(1) and RCW 11.130.435(4), unless the court limits, suspends, or terminates it, and that the agent is accountable to the fiduciary as well as to the principal. RCW 11.130.435(4) says a conservator may not revoke or amend a power of attorney for finances executed by the individual, and that if a power of attorney for finances is in effect, a decision of the agent within the scope of the agent’s authority takes precedence over that of the conservator, unless the court orders otherwise. The same subsection says the court has authority to revoke or amend any power of attorney executed by the adult. Two people can both believe they are in charge of the Edgewood house. KindKey will not pick between them, and KindKey will not apply RCW 11.130.335(1) to your file.',
          'Ask a Washington attorney which superior court is the right one before anyone files. KindKey will not file the case and will not tell you that the Edgewood house address picks the courthouse. A parent who now lives in a facility in Federal Way or Kent may be in a different county from the house. If a Pierce County case is already open, the Clerk of the Superior Court is at the County-City Building, 930 Tacoma Ave S, Room 110, Tacoma, WA 98402, phone (253) 798-7455. That is the same counter the Edgewood probate guide uses. A conservatorship and a probate are not the same case. The clerk does not record the deed. An Edgewood deed records with the Pierce County Auditor.',
          'A spouse who still lives on North Hill, while the other spouse is in care, is a title question before it is a sale. RCW 26.16.030 says neither spouse shall sell, convey, or encumber community real property unless the other spouse joins in the deed or other instrument, and both acknowledge it. One spouse remaining in the house does not, by itself, change that sentence. A power of attorney may be the paper title uses for the missing signature. KindKey cannot waive it. If a dissolution is already filed, read the Edgewood divorce guide and every temporary order before you sign. If nobody has filed, this is not that article. KindKey will not choose which spouse is the seller.',
        ],
      },
      {
        heading: 'The house on North Hill can transfer as it sits',
        paragraphs: [
          'The house is often still full. A shop on a long driveway, tools, a vehicle that does not run, furniture, and a yard the neighbors can see are ordinary on North Hill. A valley lot at the base of the hill is usually smaller, and the drainage problem is different. You do not have to empty the shop, mow the lot to a listing standard, or move the owner back in so the house looks lived in. Say who has a key. A relative in Puyallup or Sumner can open the door once. Photos are enough to start if the person with the papers is already out of state. If a floor or a shop roof is not safe to walk, say so. An exterior look can begin the conversation. Take papers, photos, and what the family wants to keep before the closing date you agree to. Leave the rest.',
          'Many older North Hill and Jovita lots use a septic system, and some use a private well. Others are on public sewer and public water. The city name does not decide it, and the fact that a parent used to pay the bill does not tell you which one it is. You do not have to pump the tank, find the drainfield, or replace it before KindKey looks. On-site sewage questions in Pierce County go to the Tacoma-Pierce County Health Department, not to KindKey. If someone still lives in the house, say so. Do not force that person out so the house looks vacant. A tenant’s rights come from the rental agreement and from Washington law, including chapter 59.18 RCW. KindKey will not serve a notice and will not tell you to end a tenancy. The Edgewood tenants guide is the page for occupants. The Edgewood vacant-house guide is the page for a city maintenance letter after the owner has left, including the security and vegetation rules in chapter 15.80 EMC. This page is about who can sign. Use those pages for the condition. A mailing address that says Edgewood is not always inside the city. Milton, next door, can fall in King County or Pierce County. Edgewood does not. The closing agent confirms the parcel.',
          'A mortgage that fell behind while the owner was in care, and a Pierce County property-tax bill, are different clocks from the power of attorney. If a foreclosure notice is in the file, talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute. The Edgewood foreclosure guide and the Edgewood property-tax guide cover those papers. Requesting an offer does not pause a trustee’s date or a treasurer’s date. Parts of Edgewood lie inside the Puyallup Indian Reservation boundary. That can change a title report. KindKey does not interpret tribal jurisdiction. Tell the closing agent if you already know the parcel is inside the boundary.',
          `The sequence is a call or the cash-offer form, one walkthrough, a written offer, and a closing date you help choose with the closing agent. KindKey is based in downtown Auburn. KindKey does not promise a specific number of days. ${closing} Cash means KindKey is not waiting on a retail buyer’s mortgage. It does not mean a suitcase of money, and it does not erase a mortgage, a tax bill, a care-facility bill, or a lien. The offer reflects the house as it sits, so it can be less than a retail price for a repaired house. You can say no. Accept it only when your attorney says the signer is clear.`,
          'A listing can fit a house that is safe to show and that someone local can host while the owner is in care. Hire a licensed broker if you want that path. KindKey will not run the listing and will not tell you a listed sale is a mistake. Do not sign two conflicting contracts. A parent’s house in Port Orchard, Bremerton, Silverdale, Poulsbo, Bainbridge Island, Kingston, Olalla, or Seabeck is a Kitsap County file. The superior court for those cities sits in Port Orchard, not at the Pierce County clerk’s counter in Tacoma. Do not use this Edgewood page as the courthouse guide for a Kitsap house, or for a Milton house that may be in King County. Reach out, and KindKey will help you through the whole process from start to finish, from the first description of who can sign through the walkthrough, the written offer, and closing. You can say no.',
        ],
      },
    ],
    faqs: [
      {
        question:
          'Can I sell my parent’s Edgewood house with a power of attorney while they are in care?',
        answer:
          'Sometimes. It depends on the document, on whether the owner is still alive, and on whether the authority survived incapacity under RCW 11.125.040. KindKey does not decide that. Ask a Washington attorney, then call (206) 519-5463 or use the cash-offer form if a sale is allowed. You can decline the offer.',
      },
      {
        question: 'Does the power of attorney still work after my parent dies?',
        answer:
          'No. RCW 11.125.100(1)(a) says a power of attorney terminates when the principal dies. After that, use the Edgewood probate guide and ask an attorney who can sign. Do not use the power of attorney on the deed.',
      },
      {
        question: 'A court appointed a conservator. Can we close without an order?',
        answer:
          'KindKey will not close on a conservator’s deed unless the closing agent has the authority the file requires. RCW 11.130.435 says that, except as otherwise ordered by the court, a conservator must give notice and receive specific court authorization before selling the primary dwelling or other real estate. KindKey will not prepare that request. You can ask for an offer while your attorney does.',
      },
      {
        question: 'Do we have to empty the house or move my parent back before KindKey looks?',
        answer:
          'No. Belongings can stay. Say who has a key and who still lives in the house. Do not force an occupant out so the house looks empty. Call (206) 519-5463 or use the cash-offer form. You can decline the offer.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'North Hill, Jovita, Meridian, and the valley.',
      },
      {
        href: '/areas/edgewood/sell-inherited-probate-house',
        label: 'Inherited houses in Edgewood',
        description: 'Use this after the owner has died. A power of attorney has ended.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Authority to sign once the sale is an estate.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Probate houses in Edgewood',
        description: 'Pierce County letters, after the death.',
      },
      {
        href: '/areas/edgewood/sell-vacant-house',
        label: 'Vacant houses in Edgewood',
        description: 'When the owner has left and nobody lives there.',
      },
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'The Washington overview for empty houses.',
      },
      {
        href: '/blog/selling-a-vacant-house-edgewood-wa',
        label: 'Selling a vacant Edgewood house',
        description: 'City maintenance rules after the owner moves to care.',
      },
      {
        href: '/areas/edgewood/sell-house-as-is',
        label: 'Sell a house as-is in Edgewood',
        description: 'Condition does not have to be repaired first.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'The service page for houses sold in their current condition.',
      },
      {
        href: '/areas/edgewood/sell-my-house-fast',
        label: 'Sell my house fast in Edgewood',
        description: 'The Edgewood fast-sale page.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-edgewood',
        label: 'Sell fast for cash in Edgewood',
        description: 'A direct sale once the signer is clear.',
      },
      {
        href: '/areas/edgewood/sell-house-with-tenants',
        label: 'Houses with tenants in Edgewood',
        description: 'When someone still lives in the house.',
      },
      {
        href: '/sell-house-with-tenants',
        label: 'Sell a house with tenants',
        description: 'A sale does not end a tenancy by itself.',
      },
      {
        href: '/blog/sell-house-with-tenants-edgewood-wa',
        label: 'Tenants in Edgewood',
        description: 'Occupants, septic, and a city letter on the same lot.',
      },
      {
        href: '/areas/edgewood/sell-hoarder-house',
        label: 'Heavy-repair houses in Edgewood',
        description: 'A shop and a lifetime of belongings can stay.',
      },
      {
        href: '/sell-hoarder-house',
        label: 'Sell a hoarder or heavy-repair house',
        description: 'Contents do not have to be hauled away first.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-edgewood-wa',
        label: 'Septic or well issues in Edgewood',
        description: 'A drainfield the family has not serviced since the move.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'A city letter about the yard or an unpermitted shop.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The King and Pierce County overview.',
      },
      {
        href: '/areas/edgewood/sell-house-before-foreclosure',
        label: 'Foreclosure in Edgewood',
        description: 'When a trustee’s notice arrived while the owner was in care.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'The statewide guide. Your notice still controls.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'A loan deadline is separate from the power of attorney.',
      },
      {
        href: '/blog/behind-on-property-taxes-edgewood-wa',
        label: 'Property taxes in Edgewood',
        description: 'A Pierce County bill is a different clock.',
      },
      {
        href: '/blog/selling-a-house-during-divorce-edgewood-wa',
        label: 'Divorce sales in Edgewood',
        description: 'When a dissolution is already filed.',
      },
      {
        href: '/blog/sell-house-as-is-kitsap-county',
        label: 'Selling as-is in Kitsap County',
        description: 'Port Orchard, Bremerton, Silverdale, and Poulsbo.',
      },
      {
        href: '/areas/port-orchard',
        label: 'Sell a house in Port Orchard',
        description: 'Kitsap County seat. A different courthouse from Tacoma.',
      },
      {
        href: '/areas/bremerton',
        label: 'Sell a house in Bremerton',
        description: 'Kitsap County, across the inlet.',
      },
      {
        href: '/areas/silverdale',
        label: 'Sell a house in Silverdale',
        description: 'Unincorporated Kitsap County.',
      },
      {
        href: '/areas/poulsbo',
        label: 'Sell a house in Poulsbo',
        description: 'North Kitsap. Not an Edgewood probate or conservatorship.',
      },
      {
        href: '/areas/milton',
        label: 'Sell a house in Milton',
        description: 'The next city west. Milton can be King County or Pierce County.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say who can sign. Asking does not obligate a sale.',
      },
    ],
    ctaTitle: 'Ask for an Edgewood number once an attorney confirms who can sign',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. KindKey will not decide that a power of attorney is enough. You can say no.',
  }),
  post('sell-house-in-a-living-trust-edgewood-wa', {
    breadcrumbName: 'Living trust sales in Edgewood',
    title: 'Selling an Edgewood House That Is Titled in a Living Trust',
    description:
      'How a trustee sells an Edgewood house already titled in a living trust, as-is, once an attorney confirms who can sign. KindKey is the buyer. Not legal advice.',
    h1: 'Selling an Edgewood House That Is Titled in a Living Trust',
    publishedAt: '2026-10-30',
    intro: [
      `You can ask KindKey to buy an Edgewood house that is already titled in a living trust, without listing it and without repairing it, once a Washington attorney and the title company confirm the trustee who can sign. A house that was actually deeded into the trust may be handled by the trustee rather than through a probate of that house. KindKey will not decide whether this house was deeded into the trust, and KindKey will not tell you to skip a probate. ${office} KindKey is not the trustee, a probate attorney, or a broker.`,
      'Edgewood is entirely in Pierce County, between Milton, Fife, Puyallup, and Sumner. It incorporated on February 28, 1996. Most residents live on North Hill: longer driveways, and shops set back from the street. A smaller share of the city sits in the Puyallup River valley. Meridian Avenue E is State Route 161. Jovita Boulevard is the other everyday road. Jovita is not a separate city. A North Hill acreage parcel a parent put in a trust, and a smaller valley house, are different properties. Bring the address.',
    ],
    callout:
      'You do not have to empty the house, replace a drainfield, permit a shop, or finish a remodel before you ask. The signer still has to be the trustee an attorney and the title company will accept. Reach out, and KindKey will help you through the whole process from start to finish. You can say no after you see the offer.',
    sections: [
      {
        heading: 'A trust binder is not the deed to the Edgewood house',
        paragraphs: [
          'This page is for a house the recorded deed already holds in a trust. If the Pierce County deed is still in a parent’s individual name, the trust document in a drawer on North Hill does not replace that deed. Other property may still need a probate even when this house is in the trust. Read the Edgewood probate guide and ask a Washington attorney which file you are in. KindKey will not open a probate, and KindKey will not guess that a binder, a pour-over will, or a family meeting put the house into the trust.',
          'RCW 11.98.008 says a trust may be created by a transfer of property to another person as trustee during the trustor’s lifetime, or by a will or other disposition taking effect upon the trustor’s death; by a declaration that the owner holds identifiable property as trustee; or by exercise of a power of appointment in favor of a trustee. RCW 64.04.010 says every conveyance of real estate, or any interest in it, shall be by deed, and then states provisos about leases and about certificates when the terms of a trust are already of record. KindKey will not decide which sentence in RCW 11.98.008 describes your file, and KindKey will not apply those provisos to a living-trust binder. The closing agent starts from the recorded deed. An Edgewood deed records with the Pierce County Auditor. A mailing address that says Edgewood is not always inside the city. Milton, next door, can fall in King County or Pierce County. Edgewood does not.',
          'A transfer-on-death deed recorded under chapter 64.80 RCW is not a living trust. A financial power of attorney is not a living trust. If the owner is alive and the signer is an agent, use the Edgewood power-of-attorney guide. RCW 11.125.100(1)(a) says a power of attorney terminates when the principal dies. After that death, do not hand the closing agent a power of attorney and call it a trustee’s deed. KindKey will not accept it as one.',
        ],
      },
      {
        heading: 'Who signs when the parent who was trustee has died',
        paragraphs: [
          'RCW 11.98.039(1) says that where a vacancy occurs in the office of the trustee and there is a successor trustee who is willing to serve as trustee and is named in the governing instrument as successor trustee, or has been selected under the procedure the instrument sets for that selection, the outgoing trustee, or any other interested party, must give notice of the vacancy, whether it arises because of resignation or for any other reason, and of the successor trustee’s agreement to serve, to each permissible distributee. The successor named in the instrument, or selected under that procedure, is entitled to act as trustee except for good cause or disqualification. The successor is deemed to have accepted the trusteeship as of the effective date of the discharge of the predecessor trustee as provided in RCW 11.98.041. KindKey will not give that notice, will not decide who a permissible distributee is, and will not decide that good cause or a disqualification exists.',
          'RCW 11.98.041 says that where a vacancy occurs under RCW 11.98.039(1) or (2), the outgoing trustee is discharged upon the agreement of all parties entitled to notice or upon the expiration of thirty days after notice is given, whichever occurs first, or, if no notice is required under RCW 11.98.039(1), upon the date the vacancy occurs, unless before that effective date a petition is filed under RCW 11.98.039(4). KindKey will not count those thirty days, will not tell you that no notice was required, and will not tell you a death certificate in the kitchen starts the clock. Read the paper with a Washington attorney. Do not skip a notice because a buyer is ready to look at the house.',
          'If no successor is named and willing to serve, RCW 11.98.039(2) says all parties with an interest in the trust may agree to a nonjudicial change of the trustee under RCW 11.96A.220. Unless subsection (1), (2), or (3) of RCW 11.98.039 applies, RCW 11.98.039(4) says any beneficiary, the trustor if alive, or the trustee may petition the superior court having jurisdiction for the appointment or change of a trustee. KindKey will not draft that agreement, will not file that petition, and will not tell you the Edgewood house address picks the court. If your attorney opens a Pierce County case, the Clerk of the Superior Court is at the County-City Building, 930 Tacoma Ave S, Room 110, Tacoma, WA 98402, phone (253) 798-7455. The clerk does not record the deed. RCW 11.98.060 says a successor trustee shall succeed to all the powers, duties, and discretionary authority of the original trustee. KindKey will not read that sentence as permission to skip the notice, the trust instrument, or an attorney.',
          'RCW 11.98.075 says that instead of furnishing a copy of the trust instrument to a person other than a beneficiary, the trustee may furnish a certification of trust. The certification contains that the trust exists and the date the instrument was executed, the identity of the trustor, the identity and address of the currently acting trustee, the relevant powers of the trustee, the revocability or irrevocability of the trust and the identity of any person holding a power to revoke it, the authority of cotrustees to sign and whether all or less than all are required, and the name of the trust or the titling of the trust property. It must state that the trust has not been revoked, modified, or amended in any manner that would cause those representations to be incorrect. Any trustee, or an attorney for the trust, may sign it. KindKey will not prepare the certification. The closing agent says what the file needs. You can ask for an offer before that paper is ready. Accept the offer only when your attorney says the signer is clear.',
        ],
      },
      {
        heading: 'Co-trustees, a living parent, and a spouse are different signers',
        paragraphs: [
          'RCW 11.98.016(1) says any power vested in three or more trustees jointly may be exercised by a majority of such trustees. That sentence is about three or more. KindKey will not extend it to two siblings, and KindKey will not count a text message as a joinder. RCW 11.98.016(2) says that where two or more trustees are appointed and one or more of them does not accept the appointment or, having accepted, ceases to be a trustee, the survivor or survivors shall execute the trust. A sibling who disagrees, and who is still a trustee, has not ceased because the sale would be easier. KindKey will not decide that someone ceased. RCW 11.98.075 is where a certification states whether all or less than all cotrustees are required to sign. Title reads that. One child on North Hill cannot sign for a co-trustee in Puyallup, Sumner, King County, or another state because the family would like one signature.',
          'While the parent is alive, this is not a sale that waits on a death. RCW 11.103.040 says that while the trustor of a revocable trust is living, the rights of the beneficiaries are subject to the control of, and the duties of the trustee are owed exclusively to, the trustor. If a revocable trust has more than one trustor, the duties of the trustee are owed to all of the living trustors having the right to revoke the trust. RCW 11.103.020 says the capacity required to create, amend, revoke, or add property to a revocable trust, or to direct the actions of the trustee of a revocable trust, is the same as that required to make a will. KindKey will not judge that capacity. A child who expects to become successor trustee after a death is not, by that expectation, the signer today. If the parent is in care, the Edgewood power-of-attorney guide is the other paper. RCW 11.103.030(5) says a trustor’s powers with respect to the revocation or amendment of a trust, or distribution of the property of a trust, may be exercised by the trustor’s agent under a power of attorney only to the extent specified in the power of attorney document, as provided in RCW 11.125.240, and to the extent consistent with or expressly authorized by the trust agreement. KindKey will not decide that a power of attorney amends the trust or directs the trustee.',
          'RCW 11.103.030(1) says that unless the terms of a trust expressly provide that the trust is revocable, the trustor may not revoke or amend the trust. KindKey will not tell you a document is revocable because the cover says “living trust.” RCW 11.103.030(2)(c) says that if a revocable trust is created or funded by more than one trustor, and unless the trust agreement provides otherwise, the character of community property or separate property is unaffected by its transfer to and from a revocable trust. KindKey will not decide whether the Edgewood house was community property. RCW 26.16.030 says neither spouse shall sell, convey, or encumber community real property unless the other spouse joins in the deed or other instrument, and both acknowledge it. A trust on the deed does not, by itself, answer a spouse’s signature. Your attorney and the title company do. Do not deed the house from the trust to yourself, or to a sibling, to make the file easier. KindKey will not participate in a transfer meant to move the house out of the trust for a purpose the instrument does not support. Sale proceeds are the trust’s. KindKey does not divide them among children and does not pay a care facility.',
        ],
      },
      {
        heading: 'The North Hill house can transfer as it sits',
        paragraphs: [
          'The house in the trust is often still full. A shop on a long driveway, a barn, an RV cover, tools, a vehicle that does not run, and a yard the neighbors can see are ordinary on North Hill acreage. A valley lot at the base of the hill is usually smaller, and the drainage problem is different. You do not have to empty the shop, subdivide the land, mow to a listing standard, or move anyone back in so the house looks occupied. Say who has a key. A co-trustee in another state can send photos. If a floor or a shop roof is not safe to walk, say so. An exterior look can begin the conversation. Take papers, photos, and what the family wants before the closing date you agree to. Leave the rest.',
          'RCW 11.98.070 says a trustee, or the trustees jointly, in addition to the authority otherwise given by law, have discretionary power to sell, convey, and manage the trust property, among other acts, in accordance with the standards provided by law. RCW 11.98.070(10) includes power to subdivide, adjust boundaries, and partition real property. RCW 11.98.070(19) includes ordinary or extraordinary repairs, demolition, and improvements. You do not have to use those powers before KindKey looks, and KindKey will not tell you to split the acreage or rebuild the shop. The instrument can say something different from the statute. KindKey will not compare them and will not tell you the statute overrides the document. Your attorney does that.',
          'RCW 11.100.140(1) says a trustee shall not enter into a significant nonroutine transaction in the absence of a compelling circumstance without providing the written notice that section describes and, if the transaction is the real-estate type in RCW 11.100.140(2)(a), obtaining an independent appraisal or selling in an open-market transaction. RCW 11.100.140(2)(a) describes any sale, option, lease, or other agreement, binding for a period of ten years or more, dealing with any interest in real estate other than real estate purchased by the trustee or a vendor’s interest in a real estate contract, the value of which constitutes twenty-five percent or more of the net fair market value of trust principal at the time of the transaction. RCW 11.100.140(4) describes written notice by certified mail, or personal service, at least twenty days before the trustee enters into a binding agreement. The section also describes a written waiver and a written statement a person dealing with a trustee may rely on. KindKey will not tell you whether your agreement is binding for ten years or more, whether the Edgewood house meets that percentage, whether a compelling circumstance exists, whether a direct sale is an open-market transaction, whether anyone has waived the section, or whether the requirements have been met. KindKey will not send the notice, count the days, write that statement, or prepare an appraisal. Ask a Washington attorney before you sign. If that attorney says an open-market sale is what the statute requires in your file, hire a licensed broker. KindKey will not run the listing. You can still ask for a written number while you get that advice. Asking does not obligate a sale.',
          'Many older North Hill and Jovita lots use a septic system, and some use a private well. Others are on public sewer and public water. The city name does not decide it, and the fact that a parent handled the bill does not tell the trustee which one it is. A failing drainfield, a system that has sat because the house is empty, or a field nobody can find on a large lot can all be described in plain words. You do not have to pump the tank, locate the field, or replace it before a walkthrough. On-site sewage questions in Pierce County go to the Tacoma-Pierce County Health Department, not to KindKey. KindKey does not inspect, pump, or certify a septic system or a well. The Edgewood septic guide is that page. An unpermitted shop, a garage turned into a room, or a city notice about the yard is a different file. Inside the city, Community Development is at Edgewood City Hall, 10440 Dom Calata Way E, Edgewood, WA 98372. The permit line published by the city is (253) 952-3299. You do not have to close that case, pull a permit, or tear the shop down before KindKey looks. A Pierce County letter can mean the parcel is outside the city even when the mail says Edgewood. Read the header. The Edgewood code-and-unpermitted guide is that page.',
          'If someone still lives in the house, say so. Do not force that person out so the house looks vacant. A tenant’s rights come from the rental agreement and from Washington law, including chapter 59.18 RCW. KindKey will not serve a notice and will not tell you to end a tenancy. The Edgewood tenants guide is the page for occupants. The Edgewood vacant-house guide is the page for a city maintenance letter after everyone has left. A stopped remodel, a fire in the house or the shop, and a heavy clean-out are separate guides. Use them for the condition. This page is about who can sign. A mortgage in the trust’s name, or a Pierce County property-tax bill, is a different clock. If a foreclosure notice is in the file, talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute. Requesting an offer does not pause a foreclosure sale date or a treasurer’s date. Parts of Edgewood lie inside the Puyallup Indian Reservation boundary. That can change a title report. KindKey does not interpret tribal jurisdiction. Tell the closing agent if you already know the parcel is inside the boundary.',
          `The sequence is a call or the cash-offer form, one walkthrough, a written offer, and a closing date you help choose with the closing agent. KindKey is based in downtown Auburn. KindKey does not promise a specific number of days. ${closing} Cash means KindKey is not waiting on a retail buyer’s mortgage. It does not mean a suitcase of money, and it does not erase a mortgage, a tax bill, a code fine, or a lien. The offer reflects the house as it sits, so it can be less than a retail price for a repaired house. You can say no. A parent’s house in Port Orchard, Bremerton, Silverdale, Poulsbo, Bainbridge Island, Kingston, Olalla, or Seabeck is a Kitsap County file. The superior court for those cities sits in Port Orchard, not at the Pierce County clerk’s counter in Tacoma. Do not use this Edgewood page as the courthouse guide for a Kitsap house, or for a Milton house that may be in King County. Reach out, and KindKey will help you through the whole process from start to finish, from the first description of who can sign through the walkthrough, the written offer, and closing. You can say no.`,
        ],
      },
    ],
    faqs: [
      {
        question:
          'Can a successor trustee sell an Edgewood house in a living trust without probate?',
        answer:
          'Sometimes, if the recorded deed is already in the trust and the signer is the trustee the title company will accept. KindKey will not decide that, and KindKey will not tell you to skip a probate of other property. Ask a Washington attorney, then call (206) 519-5463 or use the cash-offer form if a sale is allowed. You can decline the offer.',
      },
      {
        question:
          'The trust names the house, but the deed is still in my parent’s name. Is that enough?',
        answer:
          'Not by itself. KindKey starts from the recorded deed, not from a binder that mentions the address. If the deed is still in an individual’s name, use the Edgewood probate guide and ask an attorney who can sign. KindKey will not treat the trust document as a deed.',
      },
      {
        question: 'Do all of the co-trustees have to sign the Edgewood deed?',
        answer:
          'KindKey will not decide that. RCW 11.98.016(1) is about a power vested in three or more trustees. A certification of trust under RCW 11.98.075 states whether all or less than all cotrustees are required to sign. Your attorney and the title company read the instrument. One sibling’s approval is not a substitute.',
      },
      {
        question: 'Do we have to fix the septic, the shop, or a code case before you look?',
        answer:
          'No. Tell us about a failing drainfield, an unpermitted shop, a vacant house, a tenant, or a city letter. You do not have to pump the system, close the permit, or empty the yard first. Call (206) 519-5463 or use the cash-offer form. You can decline the offer.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'North Hill, Jovita, Meridian, and the valley.',
      },
      {
        href: '/areas/edgewood/sell-inherited-probate-house',
        label: 'Inherited houses in Edgewood',
        description: 'Use this when the deed is still in the parent’s name.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Authority to sign once the sale is an estate.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Probate houses in Edgewood',
        description: 'Pierce County letters, when the house was not deeded into the trust.',
      },
      {
        href: '/blog/sell-house-with-power-of-attorney-edgewood-wa',
        label: 'Power of attorney in Edgewood',
        description: 'When the owner is alive and in care. A trust is a different paper.',
      },
      {
        href: '/blog/sell-inherited-acreage-with-outbuildings-edgewood-wa',
        label: 'Inherited acreage in Edgewood',
        description: 'A shop, a barn, or another outbuilding on the trust’s land.',
      },
      {
        href: '/areas/edgewood/sell-house-as-is',
        label: 'Sell a house as-is in Edgewood',
        description: 'Condition does not have to be repaired first.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'The service page for houses sold in their current condition.',
      },
      {
        href: '/areas/edgewood/sell-my-house-fast',
        label: 'Sell my house fast in Edgewood',
        description: 'The Edgewood fast-sale page.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-edgewood-wa',
        label: 'Septic or well issues in Edgewood',
        description: 'A drainfield the trustee has not found.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'A city letter about the yard or an unpermitted shop.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The King and Pierce County overview.',
      },
      {
        href: '/blog/sell-house-with-code-violations-edgewood-wa',
        label: 'Unpermitted work in Edgewood',
        description: 'A shop or a room that was never permitted.',
      },
      {
        href: '/areas/edgewood/sell-vacant-house',
        label: 'Vacant houses in Edgewood',
        description: 'When nobody lives in the trust’s house.',
      },
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'The Washington overview for empty houses.',
      },
      {
        href: '/blog/selling-a-vacant-house-edgewood-wa',
        label: 'Selling a vacant Edgewood house',
        description: 'City maintenance rules after the owner has left.',
      },
      {
        href: '/areas/edgewood/sell-house-with-tenants',
        label: 'Houses with tenants in Edgewood',
        description: 'When someone still lives in the house.',
      },
      {
        href: '/sell-house-with-tenants',
        label: 'Sell a house with tenants',
        description: 'A sale does not end a tenancy by itself.',
      },
      {
        href: '/blog/sell-house-with-tenants-edgewood-wa',
        label: 'Tenants in Edgewood',
        description: 'Occupants on a lot the trust still owns.',
      },
      {
        href: '/areas/edgewood/sell-hoarder-house',
        label: 'Heavy-repair houses in Edgewood',
        description: 'A shop and a lifetime of belongings can stay.',
      },
      {
        href: '/sell-hoarder-house',
        label: 'Sell a hoarder or heavy-repair house',
        description: 'Contents do not have to be hauled away first.',
      },
      {
        href: '/blog/sell-hoarder-house-on-acreage-edgewood-wa',
        label: 'Hoarder houses on Edgewood acreage',
        description: 'When the trust’s lot is full.',
      },
      {
        href: '/blog/sell-house-with-stalled-remodel-edgewood-wa',
        label: 'Stalled remodels in Edgewood',
        description: 'An addition that never reached a final inspection.',
      },
      {
        href: '/areas/edgewood/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Edgewood',
        description: 'A house or a shop fire on trust property.',
      },
      {
        href: '/sell-fire-damaged-house',
        label: 'Sell a fire-damaged house',
        description: 'The county overview. Not insurance advice.',
      },
      {
        href: '/blog/sell-fire-damaged-house-edgewood-wa',
        label: 'Fire damage in Edgewood',
        description: 'East Pierce Fire & Rescue, shops, and a sale as-is.',
      },
      {
        href: '/areas/edgewood/sell-house-before-foreclosure',
        label: 'Foreclosure in Edgewood',
        description: 'When a foreclosure notice arrived on the loan.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'The statewide guide. Your notice still controls.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'A loan deadline is separate from the trust signature.',
      },
      {
        href: '/blog/behind-on-property-taxes-edgewood-wa',
        label: 'Property taxes in Edgewood',
        description: 'A Pierce County bill is a different clock.',
      },
      {
        href: '/blog/sell-house-as-is-kitsap-county',
        label: 'Selling as-is in Kitsap County',
        description: 'Port Orchard, Bremerton, Silverdale, and Poulsbo.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-bremerton',
        label: 'Inherited houses in Bremerton',
        description: 'A Kitsap estate. Not this Edgewood trust file.',
      },
      {
        href: '/areas/port-orchard',
        label: 'Sell a house in Port Orchard',
        description: 'Kitsap County seat. A different courthouse from Tacoma.',
      },
      {
        href: '/areas/bremerton',
        label: 'Sell a house in Bremerton',
        description: 'Kitsap County, across the inlet.',
      },
      {
        href: '/areas/silverdale',
        label: 'Sell a house in Silverdale',
        description: 'Unincorporated Kitsap County.',
      },
      {
        href: '/areas/poulsbo',
        label: 'Sell a house in Poulsbo',
        description: 'North Kitsap. Not an Edgewood trust sale.',
      },
      {
        href: '/areas/milton',
        label: 'Sell a house in Milton',
        description: 'The next city west. Milton can be King County or Pierce County.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say who the trustee is. Asking does not obligate a sale.',
      },
    ],
    ctaTitle: 'Ask for an Edgewood offer once an attorney confirms the trustee',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. KindKey will not decide that a living trust is enough. You can say no.',
  }),
  post('sell-house-before-foreclosure-kitsap-county', {
    breadcrumbName: 'Foreclosure in Kitsap County',
    title: 'Selling a House Before Foreclosure in Kitsap County, WA',
    description:
      'How owners in Port Orchard, Bremerton, Silverdale, and Poulsbo sell before a trustee sale. KindKey buys as a principal. Not legal advice.',
    h1: 'Selling a House Before Foreclosure in Kitsap County, WA',
    publishedAt: '2026-10-31',
    intro: [
      `You can ask KindKey for a cash offer on a Kitsap County house that is heading toward a trustee’s sale without repairing it, catching the loan up, or listing it, if there is still time to transfer title and the numbers can pay what has to be paid at closing. Asking does not stop the sale. ${office} KindKey is not a trustee, a housing counselor, a foreclosure consultant, or a broker. This article is not legal advice.`,
      'Kitsap County is across Puget Sound from King County. Port Orchard is the county seat. Bremerton and Poulsbo are incorporated cities. Silverdale is an unincorporated community, not a city. Kingston, Olalla, Seabeck, Manchester, Southworth, Navy Yard City, and Gorst are unincorporated places people name. Bainbridge Island is its own city. Gig Harbor is in Pierce County, not Kitsap. A ferry commute to Seattle, or a drive across the Tacoma Narrows, does not move the deed, the notice, or the courthouse. KindKey’s office is in downtown Auburn. The distance does not add a repair requirement.',
    ],
    callout:
      'You do not have to catch up the mortgage, repair the house, or empty it before you ask. A request does not postpone the trustee. Reach out, and KindKey will help you through the whole process from start to finish. Talk with a Washington attorney or a HUD-approved housing counselor about the notice before you sign. You can say no after you see the offer.',
    sections: [
      {
        heading: 'A Kitsap notice is recorded in Port Orchard',
        paragraphs: [
          'RCW 61.24.040(1) says that at least 90 days before the sale, or at least 120 days before the sale if a letter under RCW 61.24.031 is required, the trustee records a notice of sale in the office of the auditor in each county in which the deed of trust is recorded. For a Kitsap County deed, that office is the Kitsap County Auditor in Port Orchard. The auditor’s mailing address is 614 Division St., MS-31, Port Orchard, WA 98366. The physical address the auditor publishes is 619 Division St., Port Orchard, WA 98366. Recording’s published phone is (360) 337-4935. The auditor’s published hours are Monday through Friday, 8:00 a.m. to 4:30 p.m. KindKey is not the auditor and will not record the notice, pull the file, or tell you the recording date from a street address.',
          'Do not search the Pierce County Auditor in Tacoma, or the King County Recorder, because you take the ferry or because KindKey’s office is in Auburn. Edgewood, Tacoma, Puyallup, and Gig Harbor are Pierce County. Kent, Federal Way, and most of Auburn are King County. Milton can be either. The caption on your notice is the fact. If the deed of trust was recorded in more than one county, the same statute follows each of those counties. KindKey will not decide that from the city on the mailbox.',
          'Port Orchard, Bremerton, Silverdale, and Poulsbo are not the same house. Downtown Port Orchard, Annapolis, Mile Hill, and McCormick Woods sit in the county seat. Manchester and Southworth are nearby and unincorporated. Bremerton includes downtown, Manette, Charleston, and the east and west sides. Navy Yard City and Gorst are not Bremerton neighborhoods. Silverdale has no city hall: Old Town, Bucklin Hill, Ridgetop, and Clear Creek are local names, and building permits there go through Kitsap County. Poulsbo is on Liberty Bay. Kingston is not Poulsbo. A notice for one of those places can still be a Kitsap County recording. A City of Bremerton letter, a City of Port Orchard letter, a City of Poulsbo letter, and a Kitsap County letter are not the trustee’s notice. Read the header.',
        ],
      },
      {
        heading: 'The date on the notice is the clock',
        paragraphs: [
          'Unless you were served with a summons, a deed-of-trust foreclosure in Washington is nonjudicial, under chapter 61.24 RCW, not a lawsuit under chapter 61.12 RCW. The earlier papers, including a notice of default, are explained in the Washington notice-of-default guide and the notice-of-trustee-sale guide. Your paper shows the stage you are in. KindKey will not tell you that step is finished, and KindKey will not count days forward from a missed payment and call the result your sale date.',
          'RCW 61.24.040(12) says the sale shall not take place less than 190 days from the date of default in any of the obligations secured. That sentence is a floor in the statute. It is not a date you should invent by counting 190 days from the month you first fell behind. RCW 61.24.040(9) says the place of sale is any designated public place within the county where the property is located, and that the sale shall be on Friday, or if Friday is a legal holiday on the following Monday, during the hours set by statute for execution sales. The notice states the time and place. KindKey will not substitute a courthouse door for the place printed on your notice. RCW 61.24.040(10) says the trustee has no obligation to continue the sale, but may continue it for a period or periods not exceeding a total of 120 days, on the terms that subsection states. A postponement is the trustee’s choice. KindKey cannot order it.',
          'Reinstatement is a payment to the trustee, not to a buyer. RCW 61.24.090(1) says that at any time prior to the eleventh day before the date set by the trustee for the sale in the recorded notice of sale, or if the trustee continues the sale, at any time prior to the eleventh day before the actual sale, the borrower and the other persons that subsection lists are entitled to discontinue the sale by curing the default. For a payment default, that cure is the amount then due other than principal that would not yet be due, plus the trustee’s expenses and fees the subsection describes. You pay the trustee. KindKey does not calculate the cure, collect it, or tell you the eleventh day has not passed. After that day, ask a Washington attorney what remains.',
          'If you want to keep the house, talk with a HUD-approved housing counselor or a Washington attorney about Foreclosure Fairness Act mediation under RCW 61.24.163. Subsection (1) says the program applies only to borrowers who have been referred by a housing counselor or an attorney. You do not refer yourself. Subsection (2) says the referral may be made any time after a notice of default has been issued but no later than 90 days prior to the date of sale listed in the notice of trustee’s sale. The same subsection states a different window if an amended notice of trustee’s sale is recorded after the sale has been stayed. KindKey will not decide that you are inside either window, will not send the referral, and will not attend the session. RCW 61.24.163(8) says the mediator convenes the session in the county where the property is located, unless the parties agree on another location. For a Kitsap house, that county is Kitsap, not King County because of the ferry and not Pierce County because of the Narrows. RCW 61.24.163(20) says that unless the fee is waived, the parties agree otherwise, or the department otherwise authorizes, a foreclosure mediator’s fee may not exceed $400 for preparing, scheduling, and conducting a session lasting between one hour and three hours. A longer session may be a different fee the department authorizes. Payment of the mediator’s fee is divided equally between the beneficiary and the borrower. KindKey does not collect it. A referral can affect whether the sale goes forward. It does not guarantee you keep the house. The Washington Department of Commerce publishes a free counseling line at 1-877-894-HOME (4663). Use that line, or the hotline printed on your notice if it differs.',
        ],
      },
      {
        heading: 'The Port Orchard courthouse is not the Auburn office',
        paragraphs: [
          'The notice form in RCW 61.24.040 says you may contest the default by initiating court action in the Superior Court of the county in which the sale is to be held. For a Kitsap sale, that court is in Port Orchard, at 614 Division Street. The Kitsap County Clerk publishes the clerk’s office at 614 Division Street, Room 202, Port Orchard, WA 98366, phone (360) 337-7164, with mailing address 614 Division Street, MS-34, Port Orchard, WA 98366. The clerk’s published hours are Monday through Friday, 8:00 a.m. to 12:15 p.m. and 1:15 p.m. to 4:30 p.m. The office is closed for lunch from 12:15 to 1:15. The clerk does not record the deed. An Edgewood or Tacoma foreclosure uses the Pierce County clerk in Tacoma. Do not open a Kitsap file there because a relative lives in Puyallup. A case to restrain the sale under RCW 61.24.130 is a lawyer’s filing. KindKey will not draft it, count a deadline, or appear for you. If the paper has a sale date, talk with a Washington attorney before you sign anything meant to move the house.',
          'Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute. Do not deed the house to a relative, or to anyone, outside a closing, to get ahead of the trustee. KindKey will not take a deed outside escrow, will not ask you to sign the house over so someone else can list it, and will not tell you those rules do not apply because the buyer is local. Take the written offer to your attorney. You can say no.',
          'A county treasurer’s tax foreclosure is a different notice from a trustee’s sale on a mortgage. KindKey will not tell you a loan sale date is also a tax sale date. The statewide guide on tax-delinquent houses is the place for that distinction. Your own paper controls. A city or county letter about an unpermitted shop, a yard, or a vacant house is a third file. Inside Port Orchard, Bremerton, or Poulsbo, a municipal letter is the city’s. In Silverdale and other unincorporated places, a building or code letter is Kitsap County’s. On-site sewage questions in Kitsap County go to the Kitsap Public Health District. KindKey is none of those offices. You do not have to close a code case before you ask for an offer. KindKey will not pull a permit or attend a hearing.',
        ],
      },
      {
        heading: 'The house can transfer as it sits, if the date still allows a closing',
        paragraphs: [
          'You do not have to replace a roof, close a permit, pump a septic tank, mow to a listing standard, or move back from King County or Pierce County before KindKey looks. Photos of the house and a copy of the notice are enough to start. If a floor is not safe to walk, say so. An exterior look can begin the conversation. Take papers, photos, and what you want to keep before the closing date you agree to. Leave the rest. Say who has a key. A relative in Bremerton, Port Orchard, Silverdale, Poulsbo, or across the water can open the door once. KindKey does not need a string of showings.',
          'If someone still lives in the house, say so. Do not force that person out so the house looks vacant. A tenant’s rights come from the rental agreement and from Washington law, including chapter 59.18 RCW. KindKey will not serve a notice and will not tell you to end a tenancy. Many Kitsap houses use a septic system, and some use a private well. Others are on public sewer and public water. The city name does not decide it. You do not have to pass a septic inspection before an offer. KindKey does not inspect, pump, or certify a system. If the house is also in a probate, or titled in a trust, the person who signs is a separate question. The Bremerton probate guide covers a Kitsap estate. The superior court for a decedent who lived in Bremerton, Port Orchard, Poulsbo, or Silverdale sits in Port Orchard, not in Tacoma. KindKey will not guess who can sign and will not file the probate. Do not sign a deed before your attorney says the authority exists.',
          `A direct sale can pay the mortgage and other required liens if the price covers them and title can still transfer before the sale. If the payoff is higher than the price, the lender has to agree to different numbers, and there may be nothing left over. KindKey will not negotiate with the servicer as your representative. ${closing} Cash means KindKey is not waiting on a retail buyer’s mortgage. It does not mean a suitcase of money, and it does not erase the loan, a tax bill, a code fine, or a lien. The offer reflects the house as it sits, so it can be less than a retail price for a repaired house. You see the payoffs on the settlement statement, prepared by the closing agent, before you close. An offer does not postpone the trustee. KindKey does not promise a specific number of days. The sequence is a call or the cash-offer form, one walkthrough, a written offer, and a closing date you help choose with the closing agent, if the trustee’s date still leaves room. Reach out, and KindKey will help you through the whole process from start to finish. You can say no.`,
          'Keeping the house can fit if you can cure, or if a counselor or your attorney says mediation is still open. A listing can fit a house that is safe to show and that someone local can host, if a broker will take the timeline. Hire a licensed broker in Kitsap County for a listing. KindKey will not run one and will not tell you a listed sale is a mistake. Do not sign two conflicting contracts. An Edgewood foreclosure is a Pierce County file. Use the Edgewood foreclosure guide for that house, not this page. A King County notice belongs in the King County foreclosure guide. Do not use this Kitsap page as the auditor guide for a Pierce County or King County deed. You can say no.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell my Kitsap County house before the trustee’s sale?',
        answer:
          'Sometimes, if title can still transfer in time and the numbers pay what has to be paid at closing. KindKey can make a cash offer on a house in Port Orchard, Bremerton, Silverdale, Poulsbo, and the rest of Kitsap County. Only your attorney, the lender, and the trustee can speak to whether the foreclosure is still stoppable. Call (206) 519-5463 or use the cash-offer form. You can decline the offer.',
      },
      {
        question: 'Does asking KindKey for an offer stop the foreclosure?',
        answer:
          'No. A finished sale might pay what title requires if the numbers and the date work. The request itself does not postpone the trustee. RCW 61.24.090 puts reinstatement on a payment to the trustee before the eleventh day before the sale, or before the eleventh day before a continued sale. KindKey does not collect that payment.',
      },
      {
        question: 'Where is a Kitsap County notice of sale recorded?',
        answer:
          'With the Kitsap County Auditor in Port Orchard, when the deed of trust is a Kitsap deed. The auditor’s mailing address is 614 Division St., MS-31, Port Orchard, WA 98366. Recording’s published phone is (360) 337-4935. Gig Harbor is Pierce County. Edgewood is Pierce County. KindKey will not tell you which county your deed is in. Read the notice.',
      },
      {
        question: 'Do I have to repair the house or move a tenant out first?',
        answer:
          'No. Tell us about the roof, a septic system, a tenant, or a vacant house. Do not force an occupant out so the house looks empty. KindKey does not serve notices and does not certify a septic system. You can still request an offer. You can say no.',
      },
    ],
    related: [
      {
        href: '/areas/port-orchard',
        label: 'Sell a house in Port Orchard',
        description: 'Kitsap County seat. The auditor and the superior court sit here.',
      },
      {
        href: '/areas/bremerton',
        label: 'Sell a house in Bremerton',
        description: 'Downtown, Manette, Charleston, and both sides of the city.',
      },
      {
        href: '/areas/silverdale',
        label: 'Sell a house in Silverdale',
        description: 'Unincorporated Central Kitsap. No city hall.',
      },
      {
        href: '/areas/poulsbo',
        label: 'Sell a house in Poulsbo',
        description: 'North Kitsap and Liberty Bay. Kingston is a different place.',
      },
      {
        href: '/areas/port-orchard/sell-house-as-is',
        label: 'Sell a house as-is in Port Orchard',
        description: 'Condition does not have to be repaired first.',
      },
      {
        href: '/areas/bremerton/sell-house-as-is',
        label: 'Sell a house as-is in Bremerton',
        description: 'The Bremerton as-is page.',
      },
      {
        href: '/areas/silverdale/sell-house-as-is',
        label: 'Sell a house as-is in Silverdale',
        description: 'The Silverdale as-is page.',
      },
      {
        href: '/areas/poulsbo/sell-house-as-is',
        label: 'Sell a house as-is in Poulsbo',
        description: 'The Poulsbo as-is page.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'The Washington overview.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'The statewide guide. Your notice still controls.',
      },
      {
        href: '/blog/sell-house-before-foreclosure-washington',
        label: 'Can I sell before foreclosure in Washington?',
        description: 'What a direct sale can pay at closing.',
      },
      {
        href: '/blog/notice-of-default-washington',
        label: 'Notice of default in Washington',
        description: 'The paper that often comes before the sale notice.',
      },
      {
        href: '/blog/notice-of-trustee-sale-washington',
        label: 'Notice of trustee sale in Washington',
        description: 'The sale date and reinstatement.',
      },
      {
        href: '/blog/washington-foreclosure-mediation-vs-selling',
        label: 'Mediation or a sale',
        description: 'When a counselor refers you, and when a sale is the other path.',
      },
      {
        href: '/blog/behind-on-mortgage-payments-washington',
        label: 'Behind on mortgage payments',
        description: 'Options before a sale date is on the calendar.',
      },
      {
        href: '/blog/foreclosure-in-pierce-county-washington',
        label: 'Foreclosure in Pierce County',
        description: 'Tacoma, Puyallup, and Edgewood. Not this Kitsap file.',
      },
      {
        href: '/blog/foreclosure-in-king-county-washington',
        label: 'Foreclosure in King County',
        description: 'Kent, Federal Way, and most of Auburn.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'Edgewood is Pierce County. A different auditor.',
      },
      {
        href: '/areas/edgewood/sell-house-before-foreclosure',
        label: 'Edgewood houses before foreclosure',
        description: 'The Pierce County city page. Do not use it for a Kitsap notice.',
      },
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'Pierce County, between Milton and Puyallup.',
      },
      {
        href: '/areas/bremerton/sell-inherited-probate-house',
        label: 'Inherited houses in Bremerton',
        description: 'When a probate and a loan notice are both open.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Authority to sign, before the sale date.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-bremerton',
        label: 'Probate houses in Bremerton',
        description: 'The court sits in Port Orchard.',
      },
      {
        href: '/areas/bremerton/sell-house-with-tenants',
        label: 'Houses with tenants in Bremerton',
        description: 'A sale does not end a tenancy by itself.',
      },
      {
        href: '/sell-house-with-tenants',
        label: 'Sell a house with tenants',
        description: 'The Washington overview.',
      },
      {
        href: '/areas/bremerton/sell-vacant-house',
        label: 'Vacant houses in Bremerton',
        description: 'When nobody is living in the house.',
      },
      {
        href: '/areas/silverdale/sell-vacant-house',
        label: 'Vacant houses in Silverdale',
        description: 'An empty house in unincorporated Kitsap County.',
      },
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'The Washington overview for empty houses.',
      },
      {
        href: '/areas/port-orchard/sell-house-with-code-violations',
        label: 'Code violations in Port Orchard',
        description: 'A city letter is not the trustee’s notice.',
      },
      {
        href: '/areas/silverdale/sell-house-with-code-violations',
        label: 'Code violations in Silverdale',
        description: 'A Kitsap County letter, because Silverdale is unincorporated.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'Open notices are a different file from the loan.',
      },
      {
        href: '/blog/sell-house-with-code-violations-port-orchard',
        label: 'Code cases in Port Orchard',
        description: 'City, county, and health-district letters.',
      },
      {
        href: '/blog/sell-house-as-is-kitsap-county',
        label: 'Selling as-is in Kitsap County',
        description: 'Port Orchard, Bremerton, Silverdale, and Poulsbo.',
      },
      {
        href: '/blog/sell-tax-delinquent-house-washington',
        label: 'Tax-delinquent houses in Washington',
        description: 'A treasurer’s sale is not a trustee’s sale.',
      },
      {
        href: '/areas/tacoma/sell-house-before-foreclosure',
        label: 'Sell before foreclosure in Tacoma',
        description: 'Pierce County. Across the Narrows, not Kitsap.',
      },
      {
        href: '/areas/bremerton/sell-my-house-fast',
        label: 'Sell a house fast in Bremerton',
        description: 'The Bremerton fast-sale page.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say what the notice shows. Asking does not postpone the sale.',
      },
    ],
    ctaTitle: 'Ask for a Kitsap County offer you can review with an attorney',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. A request does not postpone the trustee. You do not have to catch up the loan first. You can say no.',
  }),
  post('sell-house-with-septic-or-well-issues-kitsap-county', {
    breadcrumbName: 'Septic or well issues in Kitsap County',
    title: 'Selling a House with Septic Failure or Well Issues in Kitsap County, WA',
    description:
      'How owners in Port Orchard, Bremerton, Silverdale, Poulsbo, and unincorporated Kitsap sell with a failed septic system or a private-well problem. KindKey buys as-is. Not health advice.',
    h1: 'Selling a House with Septic Failure or Well Issues in Kitsap County, WA',
    publishedAt: '2026-11-01',
    intro: [
      `You can ask KindKey for a cash offer on a Kitsap County house with a failing septic system, a drainfield that stays wet, or a private well that is a problem, without replacing the system, pumping the tank, or passing an inspection first. Asking does not close a health-district file, and it does not waive a rule the district enforces. ${office} KindKey does not inspect, pump, design, or certify a septic system or a well. This article is not legal, health, or code advice.`,
      'Kitsap County is across Puget Sound from King County. Port Orchard is the county seat. Bremerton, Poulsbo, and Bainbridge Island are incorporated cities. Silverdale is an unincorporated community, not a city. Kingston, Olalla, Seabeck, Manchester, Southworth, Navy Yard City, and Gorst are unincorporated places people name. A city name does not tell you whether the house is on a public sewer, an on-site system, a public water system, or a private well. The parcel does. Gig Harbor is in Pierce County. An Edgewood drainfield is a Pierce County file, not this one.',
    ],
    callout:
      'You do not have to replace the drainfield, drill a new well, or finish a health-district report before you ask. The district still controls its rules. Reach out, and KindKey will help you through the whole process from start to finish. You can say no after you see the offer.',
    sections: [
      {
        heading: 'The letter is from the health district, not from a city hall',
        paragraphs: [
          'On-site sewage in Kitsap County is handled by the Kitsap Public Health District. The district publishes its office at 345 6th Street, Suite 300, Bremerton, WA 98337. The published phone is (360) 728-2235. The published office hours are Monday through Friday, 9 a.m. to 4 p.m. That office is not Bremerton City Hall, not Port Orchard City Hall, not Poulsbo City Hall, not Bainbridge Island City Hall, and not the Kitsap County building counter. KindKey is none of those offices. A municipal letter about an unpermitted shop, a yard, or a vacant house is a different file from a septic letter. Read the header.',
          'The regulations document the district publishes is Kitsap Public Health Board Ordinance 2025-01, Onsite Sewage System and General Sewage Sanitation Regulations, effective March 17, 2025. Section 4.A.1 says these regulations apply to all territory contained within the boundaries, and under the supervision, of the Kitsap Public Health Board. KindKey will not decide whether a particular parcel is inside that territory. The district’s page on selling property served by a septic system cites “Kitsap Public Health Board Ordinance 2025A-01, Section 13.D” in the same conversation. KindKey will not tell you those labels are the same paper or two papers. Use the citation printed on the letter you received, and ask the district if the labels do not match.',
          'Inside Port Orchard, Bremerton, Poulsbo, or Bainbridge Island, a building permit is a city matter. In Silverdale, Kingston, Olalla, Seabeck, Manchester, Southworth, Navy Yard City, and Gorst, a building permit is a Kitsap County matter, because those places are unincorporated. The health district is still the sewage office in both cases when the house uses an on-site system. Deeds for a Kitsap house record with the Kitsap County Auditor in Port Orchard. The auditor’s mailing address is 614 Division St., MS-31, Port Orchard, WA 98366. The physical address the auditor publishes is 619 Division St., Port Orchard, WA 98366. Recording’s published phone is (360) 337-4935. The auditor’s published hours are Monday through Friday, 8:00 a.m. to 4:30 p.m. The auditor does not inspect a drainfield. Do not search the Pierce County Auditor in Tacoma, or the King County Recorder, because you take the ferry or because KindKey’s office is in Auburn.',
          'An Edgewood house is entirely in Pierce County. On-site sewage questions there go to the Tacoma-Pierce County Health Department, not to the Bremerton health district. North Hill and Jovita are the Edgewood map. Use the Edgewood septic guide for that house. Do not bring a Pierce County health letter to this page, and do not use this page as the recorder guide for an Edgewood deed.',
        ],
      },
      {
        heading: 'What the ordinance calls a failure, and what a transfer asks for',
        paragraphs: [
          'Ordinance 2025-01 defines “Failure or Failing” as a condition, or malfunction, of an on-site sewage system, or a connection to a public sewer, that threatens human or public health or safety, as determined by the Health Officer, by inadequately treating, conveying, and/or dispersing sewage, or by creating a potential for direct or indirect contact between sewage and humans. The examples in that definition include sewage on the surface of the ground, sewage discharged directly to surface water or upon the surface of the ground unless the discharge is under a permit from the Washington State Department of Ecology, sewage backing up into a structure, sewage leaking from a septic tank, pump chamber, holding tank, or collection system, and other conditions the definition lists. KindKey will not decide that the wet spot in a Seabeck yard, or a smell in a Kingston crawlspace, meets that definition. The Health Officer does. WAC 246-272A-0270(1)(a) says the owner shall request assistance from the local health officer when a failure or a suspected failure occurs. KindKey is not that officer and will not make the report for you.',
          'Section 13.D is the part titled responsibilities and requirements for owners conveying property. It says owners that intend to convey ownership of property that uses an on-site sewage system shall submit an application to the Health Officer at least 30 days before the property transfer, to request an inspection and a written evaluation of the system’s functionality, maintenance needs, and compliance status. KindKey will not count those 30 days, will not file the application, and will not tell you a cash buyer is outside the sentence. For a system with no sewage permit on file, Section 13.D.3 says the owner or authorized agent shall develop or obtain a record drawing, obtain a tank inspection report completed within the past three years by a certified pumper or monitoring and maintenance specialist, submit the conveyance application with those papers, allow the inspection, and provide the Health Officer’s written evaluation to the buyer before the transfer. The district’s selling page says the district needs a record drawing to perform a property conveyance inspection, and that if the property does not have one, you will need to create one. Section 13.D.4 says that after a completed application, the Health Officer shall, within seven business days of receipt, search the records, conduct a field inspection, and issue a written summary. KindKey will not tell you that clock has started.',
          'Section 13.D.5 says that if the records review or the site evaluation identifies certain items, the Health Officer shall notify the owner and require correction under Section 19. Those items include a failing, broken, or malfunctioning system or component that poses a threat to public health or to the continued functionality of the system; a previously designated and approved primary or reserve area that has been eliminated, destroyed, or otherwise made unusable; use or operation of the system in violation of its approved use or design capacity; and missing or inaccessible service access on an alternative system, as that subsection describes. Section 13.D.6 says other items of non-compliance, the ones that do not pose an immediate threat and do not fall under 13.D.5, shall be noted on the evaluation report, and that the intent of the regulations is that those other items be addressed in good faith by the current owner, the prospective owner, or both, through the conveyance process. KindKey will not sort your file into those two piles, and KindKey will not tell you a signature erases either one.',
          'Section 13.D.9 says a property conveyance inspection is not required for systems connected to structures or buildings which have never been occupied, have a Health Officer approved sewage installation permit, and have a valid certificate of occupancy from the building official. KindKey will not apply that exception to a house someone has lived in. Section 13.C.24 says that at or before the transfer, the owner provides the buyer the permit and maintenance records when available, a scaled record drawing when no official sewage permit records are available, the written evaluation under Section 13.D, and a completed seller disclosure statement in accordance with chapter 64.06 RCW. KindKey will not prepare that disclosure. Ask a Washington attorney or the closing agent what the form requires. WAC 246-272A-0270(1)(k)(i) also says that at the time of property transfer the owner provides the buyer all available maintenance and repair records in addition to the completed seller disclosure statement under chapter 64.06 RCW for residential real property transfers. WAC 246-272A-0270(1)(k)(ii) says that beginning February 1, 2027 the owner obtains an inspection, as required in WAC 246-272A-0260(5), by a third-party inspector the local health officer authorizes. Subsection (1)(k)(iv) says the local health officer may require a compliance schedule for repair of a failure discovered during the property transfer inspection. KindKey will not tell you whether Ordinance 2025-01 or that state rule controls a particular closing day.',
        ],
      },
      {
        heading: 'The lots this shows up on, from Seabeck to Mile Hill',
        paragraphs: [
          'Kingston, Olalla, and Seabeck are unincorporated. The house is often a rambler or an older place on acreage, with a shop, a barn, or an RV cover set back from the road. The drainfield may be a patch of grass nobody in the family has marked. A building, a driveway, or a pasture over the primary area or the reserve area is a fact to say out loud. Ordinance 2025-01 defines “expansion” to include a change that reduces the treatment or dispersal capability of the existing system or the reserve area, and the examples include a building placed over a reserve area and a driveway or animal pasture over a primary area. KindKey will not decide that your shop is that expansion. You do not have to tear the shop down, locate every line, or draw the record before a walkthrough. If the ground is soft, or a tank lid is not safe to walk, say so. An exterior look can begin the conversation. Building permits in those places go through Kitsap County. The sewage question still goes to the health district.',
          'WAC 246-272A-0280(1)(f) says that when an on-site sewage failure occurs, the local health officer shall report failures within 200 feet of shellfish growing areas to the department. A Seabeck or Hood Canal lot, an Olalla shoreline lot, and a house near Liberty Bay or Sinclair Inlet can raise that question. KindKey will not measure the 200 feet, will not sample the water, and will not file that report. Bainbridge Island is its own city. A house near the ferry and a house on a larger island lot are not the same property. The island name does not tell you whether the parcel is on a public sewer or an on-site system. Send the Bainbridge Island address. KindKey still looks at the house. Poulsbo is on Liberty Bay. Downtown along Front Street, Viking Avenue, Noll Road, and Olhava are the local map. Kingston is not Poulsbo. Some edge lots use septic. Some in-town houses do not.',
          'Silverdale has no city hall. Old Town, Bucklin Hill, Ridgetop, and Clear Creek are local names. Dyes Inlet is the water. Some lots are on public sewer. Some older or outlying lots use septic. Clear Creek is the name of an area. It is not a diagnosis of your drainfield. Port Orchard includes downtown and Bay Street, Annapolis, Mile Hill, the Bethel and Sedgwick corridors, and McCormick Woods. Manchester and Southworth are nearby and unincorporated. A newer subdivision and a larger edge lot are different systems. Bremerton includes downtown, Manette, Charleston, the east and west sides, Kitsap Lake, and Rocky Point. Navy Yard City and Gorst are not Bremerton neighborhoods. Some in-town Bremerton houses are on a city sewer. An edge lot, or a house someone added a bathroom to, can still be on septic. KindKey will not guess from the neighborhood.',
          'A house on a public sewer is a different system from an on-site tank and drainfield. Section 4.A.3 of Ordinance 2025-01 says that in the specific event of public exposure to sewage, a sewage discharge to the ground surface, surface water, or ground water, or a backup of sewage into a structure, the regulations also apply to an owner connected to a public sewer or a large or community system. KindKey will not decide that event happened. Say what you know, including if you do not know. A private well is a separate fact from the drainfield. The district’s page on selling property served by a septic system and by water says that, effective March 4, 2019, properties served by a private or Group B water system are required to have a Water Status Report from the district before they are sold, and that those applications should be submitted 30 days before the transfer. KindKey will not tell you whether your well is a one-party well, a two-party well, Group A, or Group B. KindKey does not test the water and does not certify the well. A dry well, a well that has not been run because the house is empty, and a shared well you do not want to explain can all be described in plain words.',
        ],
      },
      {
        heading: 'A direct sale does not replace the health district',
        paragraphs: [
          'You do not have to pump the tank, replace the field, drill a well, mow to a listing standard, or create a record drawing before KindKey looks. Photos of the house and of any letter are enough to start. Take papers, photos, and what you want to keep before the closing date you agree to. Leave the rest. If the house is full, or a shop on acreage is full, you do not have to empty it. The Kitsap as-is guide is the condition page. The hoarder pages for Port Orchard, Bremerton, Silverdale, and Poulsbo are the heavy-repair pages. An inherited acreage sale in Edgewood, with the shop and the outbuildings, is the Pierce County version of the same problem. Use that guide when the parcel is in Edgewood.',
          'If the house is vacant because a parent died, or because everyone moved, say so. You do not have to put the system back in service so the house looks lived in. If the decedent lived in Port Orchard, Bremerton, Poulsbo, Silverdale, or another Kitsap place, the residence county for the probate question families take to a lawyer is Kitsap County. The superior court sits in Port Orchard, at 614 Division Street. The Kitsap County Clerk publishes the clerk’s office at 614 Division Street, Room 202, Port Orchard, WA 98366, phone (360) 337-7164. KindKey will not file the probate and will not guess who can sign. The Bremerton probate guide is that signature question. Accept an offer only when your attorney says the signer is clear. If someone still lives in the house, including a tenant, say so. Do not force that person out so the yard looks empty. A tenant’s rights come from the rental agreement and from Washington law, including chapter 59.18 RCW. KindKey will not serve a notice and will not tell you to end a tenancy.',
          'An unpermitted room, a garage turned into a bathroom, or a shop with plumbing the district did not review is often the same property as the drainfield problem. You do not have to close the permit, tear the plumbing out, or attend a hearing before you ask for an offer. KindKey will not pull the permit and will not appear for you. A City of Port Orchard letter, a City of Bremerton letter, a City of Poulsbo letter, a Bainbridge Island letter, and a Kitsap County letter are not the health district’s letter. The Port Orchard code guide is the city-letter page. The Silverdale code page is the unincorporated page, because Silverdale has no city hall. If a foreclosure notice is also in the file, talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute. A request for an offer does not postpone a trustee. The Kitsap foreclosure guide is that clock. A county treasurer’s tax sale is a different notice. The statewide tax-delinquent guide is that distinction. Your own paper controls.',
          `The sequence is a call or the cash-offer form, one walkthrough, a written offer, and a closing date you help choose with the closing agent. KindKey is based in downtown Auburn. The ferry and the Tacoma Narrows do not add a repair requirement. KindKey does not promise a specific number of days. ${closing} Cash means KindKey is not waiting on a retail buyer’s mortgage, which is often the path that stops when a septic inspection fails. It does not mean a suitcase of money. It does not erase a mortgage, a tax bill, a code fine, a lien, or a health-district order. The offer reflects the house as it sits, so it can be less than a retail price for a house with a passed system and a passed well report. You see payoffs on the settlement statement, prepared by the closing agent, before you close. Until the deed records, deadlines on a health letter are still yours. After a purchase, repairs KindKey chooses to make are KindKey’s work as the new owner. KindKey does not clear the district’s file as your representative, and KindKey does not promise what the Health Officer will accept.`,
          'Replacing the system and keeping the house can be the right path if you want to stay and you can fund the work. A listing can fit a house that is safe to show and that a broker will take with the system as it is, or after a repair. Hire a licensed broker in Kitsap County for a listing. KindKey will not run the listing and will not tell you a listed sale is a mistake. Do not sign two conflicting contracts. You can say no after you see the number. Reach out, and KindKey will help you through the whole process from start to finish, from the first description of the tank, the field, or the well through the walkthrough, the written offer, and closing.',
        ],
      },
    ],
    faqs: [
      {
        question:
          'Do I have to replace a failed septic system before KindKey will look at a Kitsap house?',
        answer:
          'No. Tell us the system is failing, unused, or unknown. You do not have to pump the tank, locate the drainfield, or pass an inspection before an offer. The health district still controls its file. Call (206) 519-5463 or use the cash-offer form. You can say no.',
      },
      {
        question: 'Who regulates septic systems and private wells in Kitsap County?',
        answer:
          'The Kitsap Public Health District, at 345 6th Street, Suite 300, Bremerton, WA 98337, phone (360) 728-2235. That is not a city building counter and not KindKey. The on-site sewage regulations the district publishes are Ordinance 2025-01, effective March 17, 2025. A Pierce County letter, including an Edgewood letter, is a different health department.',
      },
      {
        question: 'Does a sale to KindKey skip the property conveyance inspection?',
        answer:
          'KindKey does not require you to pass one before an offer. Section 13.D of Ordinance 2025-01 says owners who intend to convey property that uses an on-site sewage system shall submit an application to the Health Officer at least 30 days before the transfer. KindKey will not tell you that sentence does not apply. Ask the district. You can still request a written offer while you do.',
      },
      {
        question:
          'What if I do not know where the drainfield is, or whether the house is on a well?',
        answer:
          'Say that. KindKey does not require you to become the septic or well expert before an offer. A later record, a record drawing, or the district’s own file may still identify the system. KindKey does not certify either one.',
      },
    ],
    related: [
      {
        href: '/areas/port-orchard',
        label: 'Sell a house in Port Orchard',
        description: 'Kitsap County seat. The auditor and the superior court sit here.',
      },
      {
        href: '/areas/bremerton',
        label: 'Sell a house in Bremerton',
        description: 'Downtown, Manette, Charleston, and both sides of the city.',
      },
      {
        href: '/areas/silverdale',
        label: 'Sell a house in Silverdale',
        description: 'Unincorporated Central Kitsap. No city hall.',
      },
      {
        href: '/areas/poulsbo',
        label: 'Sell a house in Poulsbo',
        description: 'North Kitsap and Liberty Bay. Kingston is a different place.',
      },
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'Pierce County. A different health department from Kitsap.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-edgewood-wa',
        label: 'Septic or well issues in Edgewood',
        description: 'North Hill and Jovita. Tacoma-Pierce County Health Department.',
      },
      {
        href: '/areas/port-orchard/sell-house-as-is',
        label: 'Sell a house as-is in Port Orchard',
        description: 'The system does not have to be replaced first.',
      },
      {
        href: '/areas/bremerton/sell-house-as-is',
        label: 'Sell a house as-is in Bremerton',
        description: 'The Bremerton as-is page.',
      },
      {
        href: '/areas/silverdale/sell-house-as-is',
        label: 'Sell a house as-is in Silverdale',
        description: 'The Silverdale as-is page.',
      },
      {
        href: '/areas/poulsbo/sell-house-as-is',
        label: 'Sell a house as-is in Poulsbo',
        description: 'The Poulsbo as-is page.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'The Washington overview.',
      },
      {
        href: '/blog/sell-house-as-is-kitsap-county',
        label: 'Selling as-is in Kitsap County',
        description: 'Port Orchard, Bremerton, Silverdale, and Poulsbo.',
      },
      {
        href: '/areas/port-orchard/sell-vacant-house',
        label: 'Vacant houses in Port Orchard',
        description: 'A system that has been sitting because nobody lives there.',
      },
      {
        href: '/areas/bremerton/sell-vacant-house',
        label: 'Vacant houses in Bremerton',
        description: 'When the house has been empty.',
      },
      {
        href: '/areas/silverdale/sell-vacant-house',
        label: 'Vacant houses in Silverdale',
        description: 'An empty house in unincorporated Kitsap County.',
      },
      {
        href: '/areas/poulsbo/sell-vacant-house',
        label: 'Vacant houses in Poulsbo',
        description: 'An empty house on the north end.',
      },
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'The Washington overview for empty houses.',
      },
      {
        href: '/areas/bremerton/sell-inherited-probate-house',
        label: 'Inherited houses in Bremerton',
        description: 'When the septic problem is also a probate.',
      },
      {
        href: '/areas/port-orchard/sell-inherited-probate-house',
        label: 'Inherited houses in Port Orchard',
        description: 'The court sits in Port Orchard.',
      },
      {
        href: '/areas/silverdale/sell-inherited-probate-house',
        label: 'Inherited houses in Silverdale',
        description: 'Heirs can live across the water.',
      },
      {
        href: '/areas/poulsbo/sell-inherited-probate-house',
        label: 'Inherited houses in Poulsbo',
        description: 'A north-end house and a signer question.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Who can sign, before the system is replaced.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-bremerton',
        label: 'Probate houses in Bremerton',
        description: 'The court sits in Port Orchard, not in Tacoma.',
      },
      {
        href: '/areas/port-orchard/sell-house-with-code-violations',
        label: 'Code violations in Port Orchard',
        description: 'A city letter is not a septic letter.',
      },
      {
        href: '/areas/bremerton/sell-house-with-code-violations',
        label: 'Code violations in Bremerton',
        description: 'A Bremerton header is not the health district.',
      },
      {
        href: '/areas/silverdale/sell-house-with-code-violations',
        label: 'Code violations in Silverdale',
        description: 'A Kitsap County letter, because Silverdale is unincorporated.',
      },
      {
        href: '/areas/poulsbo/sell-house-with-code-violations',
        label: 'Code violations in Poulsbo',
        description: 'A city letter on the north end.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'Open notices are a different file from the drainfield.',
      },
      {
        href: '/blog/sell-house-with-code-violations-port-orchard',
        label: 'Code cases in Port Orchard',
        description: 'City, county, and health-district letters.',
      },
      {
        href: '/areas/bremerton/sell-house-with-tenants',
        label: 'Houses with tenants in Bremerton',
        description: 'A sale does not end a tenancy by itself.',
      },
      {
        href: '/areas/port-orchard/sell-house-with-tenants',
        label: 'Houses with tenants in Port Orchard',
        description: 'Do not force an occupant out so the house looks empty.',
      },
      {
        href: '/sell-house-with-tenants',
        label: 'Sell a house with tenants',
        description: 'The Washington overview.',
      },
      {
        href: '/areas/port-orchard/sell-hoarder-house',
        label: 'Heavy-repair houses in Port Orchard',
        description: 'A full house and a septic problem can be the same sale.',
      },
      {
        href: '/areas/silverdale/sell-hoarder-house',
        label: 'Heavy-repair houses in Silverdale',
        description: 'Contents can stay. The system can stay as it is.',
      },
      {
        href: '/sell-hoarder-house',
        label: 'Sell a hoarder or heavy-repair house',
        description: 'The Washington overview.',
      },
      {
        href: '/blog/sell-inherited-acreage-with-outbuildings-edgewood-wa',
        label: 'Inherited acreage in Edgewood',
        description: 'Shops and outbuildings on a Pierce County lot.',
      },
      {
        href: '/areas/edgewood/sell-vacant-house',
        label: 'Vacant houses in Edgewood',
        description: 'Pierce County. Do not use it for a Kitsap health letter.',
      },
      {
        href: '/blog/sell-house-before-foreclosure-kitsap-county',
        label: 'Foreclosure in Kitsap County',
        description: 'A trustee’s date is a different clock from a septic letter.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'The statewide guide. Your notice still controls.',
      },
      {
        href: '/blog/sell-tax-delinquent-house-washington',
        label: 'Tax-delinquent houses in Washington',
        description: 'A treasurer’s sale is not a health-district inspection.',
      },
      {
        href: '/areas/edgewood/sell-house-as-is',
        label: 'Sell a house as-is in Edgewood',
        description: 'The Pierce County city next to Milton and Puyallup.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say septic, well, sewer, or “I do not know.”',
      },
    ],
    ctaTitle: 'Ask for a Kitsap offer with the system as it is',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You do not have to pass a septic inspection or replace a drainfield first. You can say no.',
  }),
  post('selling-a-vacant-house-kitsap-county', {
    breadcrumbName: 'Vacant houses in Kitsap County',
    title: 'Selling a Vacant House in Kitsap County, WA',
    description:
      'How owners in Port Orchard, Bremerton, Silverdale, and Poulsbo sell a vacant house as-is. City, county, and Edgewood rules differ. KindKey buys as a principal. Not legal advice.',
    h1: 'Selling a Vacant House in Kitsap County, WA',
    publishedAt: '2026-11-02',
    intro: [
      `You can ask KindKey for a cash offer on a vacant house in Kitsap County without cleaning it out, mowing it, boarding it to a city’s standard, or coming back across the water for showings. Asking does not close a code case, and it does not keep a vacant-house insurance policy in force. ${office} KindKey is not code enforcement, a property manager, a fire department, or a vacant-house insurer.`,
      'Vacant means nobody lives there. Kitsap County is across Puget Sound from King County. Port Orchard is the county seat. Bremerton, Poulsbo, and Bainbridge Island are incorporated cities. Silverdale is an unincorporated community, not a city. Kingston, Olalla, Seabeck, Manchester, Southworth, Navy Yard City, and Gorst are unincorporated places people name. A ferry commute, or a drive across the Tacoma Narrows, does not move the deed or the code letter. Gig Harbor is in Pierce County. An empty house in Edgewood is a Pierce County file, with a different recorder and a different municipal code. Do not use this page for that house.',
    ],
    callout:
      'You do not have to empty the house, keep the utilities on, or cure a yard notice before KindKey looks. A request does not close the city’s file or the county’s file. Reach out, and KindKey will help you through the whole process from start to finish. You can say no after you see the offer.',
    sections: [
      {
        heading: 'An empty house is not one Kitsap file',
        paragraphs: [
          'Read the header before you decide which counter wrote the letter. Inside Port Orchard, Bremerton, Poulsbo, or Bainbridge Island, a building or nuisance letter is that city’s. In Silverdale, Kingston, Olalla, Seabeck, Manchester, Southworth, Navy Yard City, and Gorst, a building or nuisance letter is Kitsap County’s, because those places are unincorporated. A mailing city is not the enforcing city. Navy Yard City and Gorst are not Bremerton neighborhoods. Kingston is not Poulsbo. Manchester and Southworth are not Port Orchard. The county’s code-compliance page says the county has authority only over unincorporated Kitsap County, and it tells people to use the parcel search when they are not sure. KindKey will not run that search for the county, and KindKey will not tell you the city from a street name.',
          'Port Orchard’s code-enforcement page says an investigation begins only after a written complaint. The contact that page publishes is 216 Prospect Street, Port Orchard, WA 98366, phone (360) 876-4407, with hours of 8 a.m. to 4:30 p.m., Monday through Friday. The same city’s community development and permit center publishes a physical address of 720 Prospect Street and a mailing address of 216 Prospect Street, phone (360) 874-5533, with the same weekday hours. Those are two counters. A permit question and a complaint are not the same visit. The code-enforcement page says it does not handle landlord-tenant conflicts, foreclosure, trespass, or a septic or well question. It points septic, well, sanitation, and rodent questions to the Kitsap Public Health District at (360) 728-2235, and electrical permits to the Washington Department of Labor and Industries at (360) 902-5800. KindKey is none of those offices.',
          'Deeds for a Kitsap house record with the Kitsap County Auditor in Port Orchard. The auditor’s mailing address is 614 Division St., MS-31, Port Orchard, WA 98366. The physical address the auditor publishes is 619 Division St., Port Orchard, WA 98366. Recording’s published phone is (360) 337-4935. The auditor’s published hours are Monday through Friday, 8:00 a.m. to 4:30 p.m. The auditor does not mow the yard and does not decide a nuisance. Do not record a Kitsap deed at the Pierce County Auditor in Tacoma, or at the King County Recorder, because you take the ferry or because KindKey’s office is in Auburn. An Edgewood deed records in Pierce County. The closing agent confirms the parcel.',
        ],
      },
      {
        heading: 'Port Orchard’s unfit-building chapter is not every empty house',
        paragraphs: [
          'Chapter 20.212 of the Port Orchard Municipal Code is the dangerous and unfit dwellings chapter. POMC 20.212.020 defines “abandoned” or “apparently abandoned” as any dwelling, building, structure, or premises that is so neglected, or that has other characteristics, as to support a reasonable conclusion that it is vacant, except as may be temporarily occupied by vagrants, and not cared for by any owner, tenant, or other party. A house you locked and left, with the taxes paid and a neighbor checking it, is not a conclusion KindKey will draw for you. The director decides whether the chapter applies. KindKey will not.',
          'POMC 20.212.040 lists conditions the director may use, including a building damaged by fire, wind, earthquake, flood, or another cause, or a building that is dilapidated or abandoned so as to be an attractive nuisance. POMC 20.212.050 says that if a preliminary investigation finds the place dangerous or unfit, the director issues a complaint, and that the complaint contains notice of a hearing before the director not less than 10 days nor more than 30 days after service. POMC 20.212.060 says that if no appeal is filed, the order is final and a copy is filed with the Kitsap County auditor. POMC 20.212.080 says that, in accordance with RCW 35.80.030(1)(g), an owner or other party in interest may file a notice of appeal with the city clerk within 30 days from service and posting of the findings and order, for a hearing before the hearing officer. The same section says that, in accordance with RCW 35.80.030(2), a person affected by the hearing officer’s decision may petition the superior court within 30 days after posting and service of that decision. KindKey will not count any of those days, file the appeal, or appear at the hearing. If the paper has a hearing, a fine, or an order to vacate, talk with a Washington attorney before you rely on a sale to solve it. This article is not legal advice.',
          'The chapter says the cost of repairs, alterations, vacating and closing the building, removal, demolition, or other correction the director causes is assessed against the property unless it is paid, and it cites RCW 35.80.030(1)(h) for a lien of equal rank with state, county, and municipal taxes. It also says that, upon the director’s certification, the county treasurer enters the amount on the tax rolls. KindKey does not promise that a Port Orchard cost disappears when you sign. Amounts that must be paid can reduce proceeds the same way a mortgage payoff can. The settlement statement, prepared by the closing agent, is where you see them. Until the deed records, deadlines on the notice are still yours. You do not have to board the windows, finish a permit, or haul the contents away before KindKey looks. Downtown and Bay Street, Annapolis, Mile Hill, the Bethel and Sedgwick corridors, and McCormick Woods are different houses. Send the address you have.',
        ],
      },
      {
        heading: 'Bremerton, Poulsbo, and the county do not share one vacant rule',
        paragraphs: [
          'Bremerton Municipal Code chapter 6.10 is an abandoned-property registration and maintenance chapter. BMC 6.10.020 defines “vacant” as a property that is not legally occupied. It defines “abandoned” as a property that is vacant and also meets one of four conditions: it is under a current notice of default or notice of trustee’s sale, it is the subject of a pending tax assessor’s lien sale, it has been the subject of a foreclosure sale where the beneficiary of the deed of trust kept title, or it was transferred under a deed in lieu of foreclosure. Vacant, by itself, is not that definition. The property also has to meet one of those four conditions. A current mortgage does not answer the tax-lien sentence, and KindKey will not decide which sentence fits your file. BMC 6.10.060(a) puts an inspection and registration duty on a lender who holds a security interest: an initial inspection upon default, before foreclosure proceedings such as a notice of default, performed within 14 days of default, and, if the property is vacant or shows evidence of vacancy, registration with the Director of Community Development within 14 days from the inspection. That is a lender’s sentence. KindKey will not register the house, and KindKey will not tell you that you owe the lender’s duty.',
          'BMC 6.10.040 says abandoned properties are maintained and secured by the owners, lenders, and other responsible persons the chapter defines, and that lenders register under BMC 6.10.060. BMC 6.10.080 lists conditions those responsible persons keep off properties the chapter covers, including weeds, trash, junk vehicles, piled newspapers, and graffiti, and it says ponds, pools, and hot tubs are secured. BMC 6.10.100 is the different case: a vacant property that is not “abandoned” as defined, but that has been boarded or otherwise secured because of a city code-enforcement action, has to meet the local-manager and posting rules in BMC 6.10.050(b) and BMC 6.10.090. “Out of area,” in that chapter, means outside Kitsap County. KindKey will not tell an owner who moved to Edgewood, Tacoma, or Seattle that a manager is required. Read the notice. The Department of Community Development publishes its office at 345 6th Street, Suite 600, Bremerton, WA 98337, a mailing address of 345 6th Street, Suite 100, and the phone (360) 473-5275. The department describes counter hours of 9 a.m. to noon and phone hours of 8 a.m. to 5 p.m., Monday through Friday. The Kitsap Public Health District publishes its office at 345 6th Street, Suite 300. That is a different suite and a different file. Bremerton’s code-enforcement page says trespassing is a police matter, and it publishes a non-emergency police number of (360) 473-5220. KindKey will not remove an occupant. If someone is living in the house without your agreement, talk with a Washington attorney. Do not force that person out so the house looks empty.',
          'Poulsbo’s nuisance chapter is PMC 9.50. PMC 9.50.050(M) lists buildings or structures that are abandoned, partially destroyed, or left in partial construction or partial demolition so as to be an attractive nuisance. PMC 9.50.050(N) lists the failure to close and secure doorways, windows, and other openings into a vacant structure, including broken windows. PMC 9.50.070(A) says a violation is a civil infraction for which a monetary penalty of two hundred fifty dollars may be assessed, and that each day the violation exists is a separate offense. KindKey will not decide that your house meets either letter, and KindKey will not board it for you. The city’s code-enforcement page says complaints other than neighborhood items such as a pothole or litter go to Public Works, by email or by mail to 200 NE Moe Street, Poulsbo, WA 98370. City Hall is at that address. Public Works publishes (360) 779-4078. The building department, on the second floor of the same City Hall, publishes (360) 394-9882. A permit and a nuisance letter are not the same desk.',
          'Unincorporated Kitsap County uses chapter 9.56 of the Kitsap County Code, public nuisances. The examples include visible accumulations of trash and junk, and dangerous structures, which the chapter describes as including a dangerous, decaying, unkempt, falling, or damaged dwelling. A junk motor vehicle, under KCC 9.56.020, is a vehicle that meets at least three of four tests: it is three years old or older, it is extensively damaged, it is apparently inoperable, or its value is about the scrap in it. A vehicle stored entirely inside a building, where it is not visible from the street or from other property, is outside that definition. The chapter also describes a path for up to six junk vehicles stored outside a building, if they are completely screened or more than 250 feet from all property lines, and if the owner has an environmental mitigation agreement with the department. It says a tarp is not an acceptable visual barrier. KindKey will not measure the 250 feet, will not decide that a shop counts as the building, and will not sign that agreement for you. KCC 9.56.040(5) states a monetary penalty of $250 per day, or portion of a day, for each violation. KCC 9.56.040(6) says paying the penalty does not relieve the duty to correct. KCC 9.56.050 lets the violations hearing examiner assess less than that amount using the factors in that section, or double the schedule for a repeat violation. KindKey will not predict the number. KCC 9.56.060(6) describes a county lien for the penalty and the abatement costs, on a parity with state and county taxes and superior to other liens except previously existing special-assessment liens. KindKey does not promise that lien is gone at signing.',
          'Kitsap County’s Department of Community Development publishes its office at 619 Division Street, 2nd Floor, Port Orchard, WA 98366, and its general line as (360) 337-5777. The contact page lists lobby hours of Monday through Friday, 9 a.m. to noon, and it says Friday is limited service, without reviewers. The same contact page lists a mailing address of 619 Division Street, MS-36. A planning page lists 614 Division Street, MS-36. KindKey will not tell you which envelope the county prefers. Use the address printed on the letter you received. Code compliance on that contact page is described as walk-in only, Tuesday through Thursday. KindKey will not appear for you. This county chapter is the Silverdale, Kingston, Olalla, and Seabeck file. It is not the City of Bremerton’s chapter 6.10, and it is not Port Orchard’s chapter 20.212. Old Town, Bucklin Hill, Ridgetop, and Clear Creek are Silverdale names. Silverdale has no city hall.',
        ],
      },
      {
        heading: 'Edgewood is the Pierce County version of this problem',
        paragraphs: [
          'Do not use a Kitsap ordinance on an Edgewood house, and do not use Edgewood’s ordinance on a Kitsap house. Edgewood is entirely in Pierce County, between Milton, Fife, Puyallup, and Sumner. It incorporated on February 28, 1996. Most residents live on North Hill. A smaller share of the city sits in the Puyallup River valley. Meridian Avenue E is State Route 161. Jovita Boulevard is the other everyday road. Jovita is not a separate city. The Edgewood vacant-house guide is the page for that letter. It walks through chapter 15.80 of the Edgewood Municipal Code, which adopts the 2021 International Property Maintenance Code, including the security rule for vacant buildings. Do not copy an Edgewood grass height, a shop rule, or a boarding sentence onto a Mile Hill house, a Manette house, or a Silverdale lot. KindKey will not tell you the two codes match.',
          'Auburn City Code 15.20.100 is an Auburn ordinance. KindKey’s office is at 640 1st St SW in Auburn. The house, if it is in Kitsap County or in Edgewood, is not. An Auburn registration does not attach because the buyer is based there. Milton, next to Edgewood, can fall in King County or Pierce County. Edgewood, inside the city, does not. A person who moved from a North Hill house to a house in Silverdale can own two different files. Say which address you want to sell.',
          'The fire department is local, and KindKey is not it. South Kitsap Fire and Rescue publishes its administrative office at Station 8, 1974 Fircrest Drive SE, Port Orchard, WA 98366, phone (360) 871-2411. The Bremerton Fire Department is a city department. It publishes headquarters at Station 1, 911 Park Avenue, Bremerton, with administrative hours of Monday through Friday, 8 a.m. to 5 p.m. A Bremerton mailing address outside the city is not automatically that department. Central Kitsap Fire and Rescue publishes its administration building at 5300 NW Newberry Hill Road, Suite 101, Silverdale, WA 98383, phone (360) 447-3550, and it points fire-code questions to the Kitsap County fire marshal. Poulsbo Fire Department publishes headquarters at Station 71, 911 NE Liberty Road, Poulsbo, WA 98370, phone (360) 779-3997. Kingston is not that city. Edgewood is covered by East Pierce Fire and Rescue, not by any of those Kitsap agencies. East Pierce’s 2022 standards of cover list Station 118 at 10105 24th Street E in Edgewood. KindKey will not draw a district boundary from a mailing address and will not interpret a run report.',
          'A sitting septic system is common on a vacant lot in Kingston, Olalla, Seabeck, and on older edges of Silverdale, and it is also common on North Hill and along Jovita in Edgewood. The health department changes at the county line. On-site sewage in Kitsap County goes to the Kitsap Public Health District, at 345 6th Street, Suite 300, Bremerton, WA 98337, phone (360) 728-2235. On-site sewage in Edgewood goes to the Tacoma-Pierce County Health Department. You do not have to pump the tank, replace the drainfield, or put a sitting system back in service before an offer. KindKey does not inspect or certify a septic system or a well. The Kitsap septic guide and the Edgewood septic guide are the two pages. A city name does not tell you whether the parcel is on a public sewer.',
          'The other clocks travel with the house, and they are not the grass letter. A Pierce County property-tax bill on an Edgewood house is paid to the Pierce County treasurer, not to a Kitsap office. A Kitsap tax bill is not paid at the Pierce County counter in Tacoma. The statewide tax-delinquent guide is the distinction, and the Edgewood tax guide is the Pierce County version. KindKey will not calculate either bill. If a trustee’s notice is also in the file, you have more than one date. Talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute. The Kitsap foreclosure guide is the Port Orchard auditor’s clock. The Edgewood foreclosure guide is the Pierce County clock. A request for an offer does not postpone a trustee. An unpermitted room, a stalled remodel, a shop on acreage, or a tenant who is still there can sit next to the vacant-house letter. You do not have to close the permit, finish the kitchen, tear the shop down, or end a tenancy before you ask. If someone still lives there, the house is not a vacant delivery. A tenant’s rights come from the rental agreement and from Washington law, including chapter 59.18 RCW. KindKey will not serve a notice and will not tell you to end a tenancy.',
        ],
      },
      {
        heading: 'One visit, a written offer, and what cash does not erase',
        paragraphs: [
          'Tell us who has a key, whether the driveway is gated, and whether a shop, a barn, or an RV cover is part of the sale. A relative in Port Orchard, Bremerton, Silverdale, Poulsbo, or across the water in Edgewood, Tacoma, or King County can open the door once. KindKey does not need a string of showings. Furniture, tools, and vehicles you do not want can stay. Take papers, photos, and what you want to keep before the closing date you agree to. If a floor, a shop roof, or a fire-damaged room is not safe to walk, say so. An exterior look can start the conversation. Photos of the house, the yard, and any posting are enough to start if a visit has to wait. Utilities can stay off. Until the deed records, insurance on the empty house is still yours. KindKey does not give insurance advice. Ask your insurer what the policy requires while nobody lives there.',
          'If the house is empty because a parent died, the person who can sign is a probate question. A decedent who lived in Port Orchard, Bremerton, Poulsbo, Silverdale, or another Kitsap place is a Kitsap residence question for your lawyer. The superior court sits in Port Orchard, at 614 Division Street. The Kitsap County Clerk publishes the clerk’s office at 614 Division Street, Room 202, Port Orchard, WA 98366, phone (360) 337-7164. That court is not in Tacoma. An Edgewood estate is a Pierce County probate. KindKey will not file either one, and KindKey will not guess which relative can sign. You can ask for an offer while the attorney finishes that question. Do not sign a deed before the authority exists. The Bremerton probate guide and the Edgewood probate guide are the two signature pages. Heirs who also inherited a shop, a drainfield, and a long driveway on North Hill should use the Edgewood acreage guide for that parcel.',
          `The sequence is a call or the cash-offer form, one walkthrough, a written offer, and a closing date you help choose with the closing agent. KindKey is based in downtown Auburn. The ferry and the Tacoma Narrows do not add a repair requirement. KindKey does not promise a specific number of days. Owners who already live somewhere else often want a shorter window. Owners who still need to collect boxes can ask for longer. ${closing} Cash means KindKey is not waiting on a retail buyer’s mortgage. It does not mean a suitcase of money, and it does not erase a mortgage, a tax bill, a code fine, a utility balance, or a health-district order. The offer reflects the house as it sits, including contents you leave and work that remains, so it can be less than a retail price for a cleaned, financed house. You see payoffs on the settlement statement before you close. You can say no.`,
          'A listing can fit a vacant house that is safe to show, easy to finance, and watched by someone local. Hire a licensed broker in Kitsap County for a Kitsap listing, or a licensed broker for an Edgewood listing. KindKey will not run the listing and will not tell you a listed sale is a mistake. Do not sign two conflicting contracts. If the empty house is also a fire, use the fire-damaged-house page, and use the Edgewood fire guide when the parcel is in Edgewood. There is no separate Kitsap city fire page to substitute for the notice in your hand. Reach out, and KindKey will help you through the whole process from start to finish, from the first description of the empty house through the walkthrough, the written offer, and closing.',
        ],
      },
    ],
    faqs: [
      {
        question:
          'Do I have to clean out or mow a vacant Kitsap County house before KindKey will look?',
        answer:
          'No. Furniture, shop contents, and vehicles you do not want can stay. A yard notice does not have to be cured first. The city or the county still controls its own case. Call (206) 519-5463 or use the cash-offer form. You can say no.',
      },
      {
        question: 'Does Bremerton require every vacant house to be registered?',
        answer:
          'No. BMC 6.10.020 defines “abandoned” as vacant plus a foreclosure-related condition or a tax-lien sale. BMC 6.10.060 puts the registration duty on the lender in the cases that section names. A vacant house that is not inside that definition is a different file. KindKey will not decide which one you have, and KindKey will not register the house.',
      },
      {
        question:
          'My vacant house is in Silverdale. Is that a Bremerton or a Port Orchard code case?',
        answer:
          'Silverdale is unincorporated Kitsap County. A nuisance or building letter there is a Kitsap County Department of Community Development matter, at 619 Division Street in Port Orchard, phone (360) 337-5777. It is not Bremerton chapter 6.10 and it is not Port Orchard chapter 20.212. Kingston, Olalla, and Seabeck are unincorporated too. Read the header.',
      },
      {
        question: 'The empty house is in Edgewood, not in Kitsap County. Is this the right page?',
        answer:
          'No. Edgewood is entirely in Pierce County. Use the Edgewood vacant-house guide and the Edgewood city page. Edgewood Municipal Code 15.80 is not a Kitsap rule, and a Kitsap ordinance is not an Edgewood rule. KindKey still buys Edgewood houses. Call (206) 519-5463 or use the cash-offer form with that address.',
      },
    ],
    related: [
      {
        href: '/areas/port-orchard/sell-vacant-house',
        label: 'Sell a vacant house in Port Orchard',
        description: 'The Port Orchard vacant-house page.',
      },
      {
        href: '/areas/bremerton/sell-vacant-house',
        label: 'Sell a vacant house in Bremerton',
        description: 'Downtown, Manette, Charleston, and both sides of the city.',
      },
      {
        href: '/areas/silverdale/sell-vacant-house',
        label: 'Sell a vacant house in Silverdale',
        description: 'Unincorporated Central Kitsap. No city hall.',
      },
      {
        href: '/areas/poulsbo/sell-vacant-house',
        label: 'Sell a vacant house in Poulsbo',
        description: 'North Kitsap and Liberty Bay. Kingston is a different place.',
      },
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'The Washington overview for empty houses.',
      },
      {
        href: '/areas/edgewood/sell-vacant-house',
        label: 'Sell a vacant house in Edgewood',
        description: 'Pierce County. North Hill, Jovita, and the valley.',
      },
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'The Edgewood city page. A different county from Kitsap.',
      },
      {
        href: '/blog/selling-a-vacant-house-edgewood-wa',
        label: 'Vacant houses in Edgewood',
        description: 'EMC 15.80, shops, and a sitting septic system.',
      },
      {
        href: '/areas/port-orchard',
        label: 'Sell a house in Port Orchard',
        description: 'Kitsap County seat. The auditor and the superior court sit here.',
      },
      {
        href: '/areas/bremerton',
        label: 'Sell a house in Bremerton',
        description: 'The Bremerton city page.',
      },
      {
        href: '/areas/silverdale',
        label: 'Sell a house in Silverdale',
        description: 'Central Kitsap, without a city code of its own.',
      },
      {
        href: '/areas/poulsbo',
        label: 'Sell a house in Poulsbo',
        description: 'The Poulsbo city page.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'Condition does not have to be repaired first.',
      },
      {
        href: '/areas/port-orchard/sell-house-as-is',
        label: 'Sell a house as-is in Port Orchard',
        description: 'The Port Orchard as-is page.',
      },
      {
        href: '/areas/bremerton/sell-house-as-is',
        label: 'Sell a house as-is in Bremerton',
        description: 'The Bremerton as-is page.',
      },
      {
        href: '/areas/silverdale/sell-house-as-is',
        label: 'Sell a house as-is in Silverdale',
        description: 'The Silverdale as-is page.',
      },
      {
        href: '/areas/poulsbo/sell-house-as-is',
        label: 'Sell a house as-is in Poulsbo',
        description: 'The Poulsbo as-is page.',
      },
      {
        href: '/areas/edgewood/sell-house-as-is',
        label: 'Sell a house as-is in Edgewood',
        description: 'The Edgewood as-is page.',
      },
      {
        href: '/blog/sell-house-as-is-kitsap-county',
        label: 'Selling as-is in Kitsap County',
        description: 'Port Orchard, Bremerton, Silverdale, and Poulsbo.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'An open notice can travel with a vacant house.',
      },
      {
        href: '/areas/port-orchard/sell-house-with-code-violations',
        label: 'Code violations in Port Orchard',
        description: 'A city letter is not the same as a county letter.',
      },
      {
        href: '/areas/bremerton/sell-house-with-code-violations',
        label: 'Code violations in Bremerton',
        description: 'A Bremerton header is not the health district.',
      },
      {
        href: '/areas/silverdale/sell-house-with-code-violations',
        label: 'Code violations in Silverdale',
        description: 'A Kitsap County letter, because Silverdale is unincorporated.',
      },
      {
        href: '/areas/poulsbo/sell-house-with-code-violations',
        label: 'Code violations in Poulsbo',
        description: 'A city letter on the north end.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'Pierce County. Do not use it for a Kitsap letter.',
      },
      {
        href: '/blog/sell-house-with-code-violations-port-orchard',
        label: 'Code cases in Port Orchard',
        description: 'City, county, and health-district letters.',
      },
      {
        href: '/blog/sell-house-with-code-violations-edgewood-wa',
        label: 'Code violations in Edgewood',
        description: 'Unpermitted work and city letters on North Hill.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Who can sign, before the house is emptied.',
      },
      {
        href: '/areas/port-orchard/sell-inherited-probate-house',
        label: 'Inherited houses in Port Orchard',
        description: 'The court sits in Port Orchard.',
      },
      {
        href: '/areas/bremerton/sell-inherited-probate-house',
        label: 'Inherited houses in Bremerton',
        description: 'When the vacant house came from an estate.',
      },
      {
        href: '/areas/silverdale/sell-inherited-probate-house',
        label: 'Inherited houses in Silverdale',
        description: 'Heirs can live across the water.',
      },
      {
        href: '/areas/poulsbo/sell-inherited-probate-house',
        label: 'Inherited houses in Poulsbo',
        description: 'A north-end house and a signer question.',
      },
      {
        href: '/areas/edgewood/sell-inherited-probate-house',
        label: 'Inherited houses in Edgewood',
        description: 'A Pierce County estate, not a Kitsap probate.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-bremerton',
        label: 'Probate houses in Bremerton',
        description: 'The court sits in Port Orchard, not in Tacoma.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Probate houses in Edgewood',
        description: 'The Pierce County version of the same signature question.',
      },
      {
        href: '/blog/sell-inherited-acreage-with-outbuildings-edgewood-wa',
        label: 'Inherited acreage in Edgewood',
        description: 'Shops and outbuildings on a North Hill lot.',
      },
      {
        href: '/sell-house-with-tenants',
        label: 'Sell a house with tenants',
        description: 'If someone still lives there, the house is not vacant.',
      },
      {
        href: '/areas/port-orchard/sell-house-with-tenants',
        label: 'Houses with tenants in Port Orchard',
        description: 'Do not force an occupant out so the house looks empty.',
      },
      {
        href: '/areas/bremerton/sell-house-with-tenants',
        label: 'Houses with tenants in Bremerton',
        description: 'A sale does not end a tenancy by itself.',
      },
      {
        href: '/areas/edgewood/sell-house-with-tenants',
        label: 'Houses with tenants in Edgewood',
        description: 'The Pierce County tenant page.',
      },
      {
        href: '/blog/sell-house-with-tenants-edgewood-wa',
        label: 'Tenants in Edgewood',
        description: 'A rented North Hill house is a different delivery.',
      },
      {
        href: '/sell-hoarder-house',
        label: 'Sell a hoarder or heavy-repair house',
        description: 'Contents can stay.',
      },
      {
        href: '/areas/port-orchard/sell-hoarder-house',
        label: 'Heavy-repair houses in Port Orchard',
        description: 'A full house can still be a vacant sale.',
      },
      {
        href: '/areas/silverdale/sell-hoarder-house',
        label: 'Heavy-repair houses in Silverdale',
        description: 'You do not have to empty the shop first.',
      },
      {
        href: '/areas/edgewood/sell-hoarder-house',
        label: 'Heavy-repair houses in Edgewood',
        description: 'Acreage, a shop, and belongings left behind.',
      },
      {
        href: '/blog/sell-hoarder-house-on-acreage-edgewood-wa',
        label: 'Hoarder houses on Edgewood acreage',
        description: 'The Pierce County heavy-repair guide.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-kitsap-county',
        label: 'Septic or well issues in Kitsap County',
        description: 'A system that has been sitting because nobody lives there.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-edgewood-wa',
        label: 'Septic or well issues in Edgewood',
        description: 'Tacoma-Pierce County Health Department, not the Bremerton district.',
      },
      {
        href: '/sell-fire-damaged-house',
        label: 'Sell a fire-damaged house',
        description: 'When the house is empty because of a fire.',
      },
      {
        href: '/areas/edgewood/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Edgewood',
        description: 'East Pierce Fire and Rescue. Not a Kitsap agency.',
      },
      {
        href: '/blog/sell-fire-damaged-house-edgewood-wa',
        label: 'Fire damage in Edgewood',
        description: 'The Pierce County fire guide for a vacant house after a fire.',
      },
      {
        href: '/blog/sell-fire-damaged-house-king-pierce-county',
        label: 'Fire damage in King and Pierce County',
        description: 'The two-county guide. Kitsap is a different fire map.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'A trustee’s date is a different clock from a vacant-house letter.',
      },
      {
        href: '/blog/sell-house-before-foreclosure-kitsap-county',
        label: 'Foreclosure in Kitsap County',
        description: 'The notice records with the Kitsap County Auditor.',
      },
      {
        href: '/areas/edgewood/sell-house-before-foreclosure',
        label: 'Edgewood houses before foreclosure',
        description: 'Pierce County. Do not use it for a Kitsap notice.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'A trustee’s notice on an empty North Hill house.',
      },
      {
        href: '/blog/sell-tax-delinquent-house-washington',
        label: 'Tax-delinquent houses in Washington',
        description: 'A treasurer’s sale is not a code case.',
      },
      {
        href: '/blog/behind-on-property-taxes-edgewood-wa',
        label: 'Property taxes in Edgewood',
        description: 'Pierce County’s treasurer. Not the Kitsap bill.',
      },
      {
        href: '/blog/sell-house-with-stalled-remodel-edgewood-wa',
        label: 'Stalled remodels in Edgewood',
        description: 'Open walls on a house nobody finished.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-edgewood',
        label: 'Sell fast for cash in Edgewood',
        description: 'The direct-sale steps for that Pierce County city.',
      },
      {
        href: '/blog/selling-a-vacant-house-milton-wa',
        label: 'Vacant houses in Milton',
        description: 'Next to Edgewood, and a county line Kitsap does not have.',
      },
      {
        href: '/areas/port-orchard/sell-my-house-fast',
        label: 'Sell a house fast in Port Orchard',
        description: 'The Port Orchard fast-sale page.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say the house is empty, and who has a key.',
      },
    ],
    ctaTitle: 'Ask for an offer on the vacant Kitsap County house',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You do not have to empty it, mow it, or board it first. You can say no.',
  }),
  post('sell-house-with-unpermitted-work-edgewood-wa', {
    breadcrumbName: 'Unpermitted work in Edgewood',
    title: 'Selling a House with Unpermitted Work in Edgewood, WA',
    description:
      'How Edgewood owners sell a house with an unpermitted garage conversion, addition, or shop without permitting it first. KindKey buys as-is. Not legal advice.',
    h1: 'Selling a House with Unpermitted Work in Edgewood, WA',
    publishedAt: '2026-11-03',
    intro: [
      'You can sell a house with unpermitted work in Edgewood without getting the work permitted, inspected, or torn out first. KindKey Home Buyers LLC buys that kind of house as-is, as the buyer. ' +
        office,
      'Unpermitted work in Edgewood usually means a garage converted into a bedroom, a basement finished without inspections, a shop or barn wired by a past owner, an addition the Pierce County Assessor-Treasurer record does not show, or a deck or second kitchen nobody pulled a permit for. You may not even know who did the work. KindKey does not need a permit history before making an offer. The City of Edgewood still decides what is legal on the parcel, and nothing here changes that.',
    ],
    callout:
      'You do not have to permit, legalize, or remove the work before you sell. KindKey buys the house as-is and walks you through the sale from start to finish.',
    sections: [
      {
        heading: 'The short answer for Edgewood sellers',
        paragraphs: [
          'A retail buyer with a mortgage often stalls on unpermitted work. The appraiser may not count the converted garage as living space, the lender may ask questions, and the buyer’s inspector may write up the wiring in the shop. Each one can turn into a repair request, a price cut, or a buyer who walks. A direct sale skips that loop. KindKey looks at the house the way it actually is, prices the work as it stands, and does not need a lender to approve it.',
          'That does not make the work legal, and it does not hide it. Tell KindKey what you know: what was built, roughly when, and whether the city ever sent a letter about it. If you do not know, say so. KindKey will walk the house and ask.',
        ],
      },
      {
        heading: 'Check what the city and county already have on file',
        paragraphs: [
          'Edgewood is its own city in Pierce County, between Milton, Fife, Puyallup, and Sumner. A house with an Edgewood mailing address can still sit in a neighboring city or in unincorporated Pierce County, so read the parcel record before you assume the City of Edgewood is the permit office. The Pierce County Assessor-Treasurer parcel page shows the recorded building square footage and outbuildings. Comparing that page to what is actually on the lot is a quick way to see what the record is missing.',
          'Permits for an Edgewood parcel go through the City of Edgewood, not KindKey. You can ask the city what permit records exist for your address. If the city has already opened a code case about the work, that is a different problem. Read the Edgewood code-violation guide, and talk with a Washington attorney if the notice has a hearing, a deadline, or a penalty you do not understand.',
        ],
      },
      {
        heading: 'Disclose what you know',
        paragraphs: [
          'Washington’s seller disclosure law is chapter 64.06 RCW. The disclosure statement asks about things like additions, conversions, and remodeling and whether permits were obtained. KindKey will not tell you how to answer it or whether an exemption applies to your sale. Ask a Washington real estate attorney if you are unsure. Answer honestly with what you actually know. A cash buyer is not a reason to leave something off the form.',
          'If the house came to you through an estate or a trust, you may not know who built what. Saying you do not know is different from saying there is nothing. The Edgewood probate and living-trust guides cover who can sign when the owner has died.',
        ],
      },
      {
        heading: 'Permit it, tear it out, or sell it as it is',
        paragraphs: [
          'Permitting after the fact can mean drawings, opening walls for inspection, and bringing work up to current code. On acreage with outbuildings, a well, or a septic system, the questions can stack up. Removing the work costs money too and can leave the house smaller. Some owners have the time and cash for either. If you do, a licensed contractor and a listing with a licensed broker may get you more. KindKey will not run that listing.',
          'If you do not have the time or the cash, or the house also needs a roof, has a stalled remodel, or has tenants in the converted space, selling as-is is the simpler path. KindKey buys as a principal. ' +
            closing,
        ],
      },
      {
        heading: 'When unpermitted work is not the only problem',
        paragraphs: [
          'If the loan is behind, foreclosure timing matters more than the permit question. Read the Edgewood foreclosure guide and talk with a Washington attorney. Washington’s foreclosure-rescue law is chapter 61.34 RCW. KindKey does not interpret it, and you should ask your attorney about it before you sign anything with any buyer.',
          'If a tenant lives in the garage conversion or the ADU, do not try to clear them out yourself. The Edgewood tenant guide explains how KindKey looks at an occupied house. Kitsap County owners in Port Orchard, Bremerton, Silverdale, and Poulsbo have the same question with a different permit office. The Kitsap County as-is guide is the place to start there.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell my Edgewood house if the garage conversion was never permitted?',
        answer:
          'Yes. KindKey buys houses with unpermitted work as-is. You do not have to permit or remove it first. Tell KindKey what you know about it, call (206) 519-5463 or use the cash-offer form, and you can say no to the offer.',
      },
      {
        question: 'Do I have to tell the buyer about unpermitted work?',
        answer:
          'Washington’s seller disclosure law is chapter 64.06 RCW, and the form asks about permits for additions and remodeling. KindKey cannot tell you how to fill it out. Ask a Washington real estate attorney, and answer with what you actually know.',
      },
      {
        question: 'Will KindKey report the unpermitted work to the City of Edgewood?',
        answer:
          'KindKey is a buyer, not code enforcement or a permit office. After closing, the house is KindKey’s, and KindKey deals with the city on its own house.',
      },
      {
        question: 'What if the city already sent a code notice about the work?',
        answer:
          'KindKey can still make an offer. The city still controls the case, so read the notice, keep any hearing dates, and talk with a Washington attorney if there is a deadline or penalty you do not understand.',
      },
      {
        question: 'Is KindKey a real estate agent?',
        answer:
          'No. KindKey Home Buyers LLC buys houses directly as a principal. It does not list houses or represent sellers.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'The Edgewood city page.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'How an as-is sale works with KindKey.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'When the city has already opened a case.',
      },
      {
        href: '/blog/sell-house-with-code-violations-edgewood-wa',
        label: 'Code violations in Edgewood',
        description: 'The Edgewood code-case guide.',
      },
      {
        href: '/blog/sell-house-with-stalled-remodel-edgewood-wa',
        label: 'Stalled remodels in Edgewood',
        description: 'Open walls on a project nobody finished.',
      },
      {
        href: '/blog/sell-inherited-acreage-with-outbuildings-edgewood-wa',
        label: 'Acreage and outbuildings in Edgewood',
        description: 'Shops, barns, and extra structures on the lot.',
      },
      {
        href: '/blog/sell-house-with-tenants-edgewood-wa',
        label: 'Tenants in Edgewood',
        description: 'If someone lives in the converted space.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'If the loan is behind too.',
      },
      {
        href: '/blog/sell-house-as-is-kitsap-county',
        label: 'Sell as-is in Kitsap County',
        description: 'Port Orchard, Bremerton, Silverdale, and Poulsbo.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'No permit history required.',
      },
    ],
    ctaTitle: 'Ask for an Edgewood offer without permitting the work first',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. Tell KindKey what was built and what you know. You can say no.',
  }),
  post('sell-fire-damaged-house-silverdale-wa', {
    breadcrumbName: 'Fire damage in Silverdale',
    title: 'Selling a Fire-Damaged House in Silverdale, WA',
    description:
      'How Silverdale owners sell a fire-damaged or smoke-damaged house as-is. Central Kitsap Fire and Rescue responds. Kitsap County issues permits. KindKey buys as a principal. Not insurance advice.',
    h1: 'Selling a Fire-Damaged House in Silverdale, WA',
    publishedAt: '2026-11-04',
    intro: [
      `You can sell a fire-damaged house in Silverdale without rebuilding the kitchen, replacing smoke-stained drywall, boarding the windows, or waiting for an insurance check. ${office}`,
      'Silverdale is an unincorporated community in Central Kitsap. There is no City of Silverdale and no city hall. Old Town, the Bucklin Hill and Kitsap Mall area, Ridgetop, and Clear Creek are local names. Dyes Inlet is the water. Kitsap County is the permit office. If the burned house is in Edgewood, this is the wrong page. Edgewood is a city in Pierce County. Use the Edgewood fire guide and the Edgewood city page for that parcel.',
    ],
    callout:
      'You do not have to rebuild, pull a permit, or wait for the insurance check before you ask. KindKey is not the fire department and does not give insurance advice. Reach out, and KindKey will help you through the whole process from start to finish. You can say no after you see the offer.',
    sections: [
      {
        heading: 'The short answer for a Silverdale fire',
        paragraphs: [
          'A retail buyer with a mortgage often cannot close on a house with open fire damage, a tarp on the roof, or smoke in the ducts. The lender, the appraiser, and the inspector each get a turn, and any one of them can stall the file. A direct sale skips that loop. KindKey looks at the house the way the fire left it, prices that condition, and does not need a lender to approve the damage.',
          'That does not hide the fire, and it does not settle the insurance claim. Tell KindKey what burned, whether anyone can safely go inside, and whether a county letter or a trustee’s notice is sitting with the photos. If you do not know who has authority to sign, say that too. KindKey will not guess.',
        ],
      },
      {
        heading: 'Central Kitsap Fire and Rescue is the department on a Silverdale call',
        paragraphs: [
          'Central Kitsap Fire and Rescue publishes the Silverdale stations. Its stations page lists Station 51 at 10955 Silverdale Way NW, Silverdale, WA 98383, and Station 52, labeled Olympic View, at 5328 NW Anderson Hill Rd NW, Silverdale, WA 98383. The administration building is at 5300 NW Newberry Hill Road, Suite 101, Silverdale, WA 98383. The contact page publishes the main line (360) 447-3550 and lobby hours of 8:00 a.m. to 3:30 p.m. That page says questions about fire codes go to the Kitsap County Fire Marshal’s office. KindKey is not Central Kitsap Fire and Rescue and does not interpret a run report.',
          'There is no city limit to confuse with the mailing city, because Silverdale is not a city. A Bremerton mailing address is a different problem. Central Kitsap Fire and Rescue’s stations page lists stations that use a Bremerton or Seabeck mailing address, including Station 53 at 15543 Seabeck Hwy NW, Seabeck, WA 98380, and a Chico station it marks under construction at 4065 Chico Way, Bremerton, WA 98312. The Bremerton Fire Department is a city department. The Kitsap vacant-house guide notes that department’s published headquarters at Station 1, 911 Park Avenue. KindKey will not draw a fire-district line from the city printed on the mailbox. Read who responded, and read the header on any letter that followed.',
          'Port Orchard, Poulsbo, and Bainbridge Island are other cities with their own maps. Kingston, Olalla, and Seabeck are unincorporated, and they are not Silverdale. Gig Harbor is in Pierce County. Edgewood is covered by East Pierce Fire & Rescue, not by Central Kitsap Fire and Rescue. East Pierce’s 2022 standards of cover list Station 118 at 10105 24th Street E in Edgewood. Do not use this page for an Edgewood fire. The King and Pierce County fire guide is the page for a house on that side of the water, including Auburn, where KindKey’s office is.',
        ],
      },
      {
        heading: 'The house can transfer in the condition the fire left',
        paragraphs: [
          'An older house near Old Town or Clear Creek, a house on the ridge in Ridgetop, and a house nearer Bucklin Hill are different buildings. A kitchen fire, a garage fire, smoke pulled through the ducts, a boarded window, and a fire that stayed in a shop are all conditions KindKey will look at. You do not need a contractor’s bid, a cleared certificate of occupancy, or a clean-out before you ask. Furniture and belongings you do not want can stay. Take papers, photos, and what you want to keep before the closing date you agree to.',
          'Some older and outlying Silverdale lots use a septic system. Some are on public sewer. The name Silverdale does not decide which, and water from putting the fire out does not make KindKey the health department. On-site sewage questions in Kitsap County go to the Kitsap Public Health District at 345 6th Street, Suite 300, Bremerton, WA 98337, phone (360) 728-2235. You do not have to pump, repair, or certify a system before an offer. KindKey does not inspect or certify a septic system or a well. The Kitsap septic guide is the longer page for that question.',
          'If a floor or a roof is not safe to walk, say so. Photos of the room where the fire started, the roof, and any posting are enough to start. An exterior look can begin the conversation. Do not go inside a structure that is not safe just so a buyer can see it. KindKey will not ask you to.',
        ],
      },
      {
        heading: 'Permits and a county letter are a different clock from the sale',
        paragraphs: [
          'A rebuild permit for a Silverdale house goes through the Kitsap County Department of Community Development, at 619 Division Street, 2nd Floor, Port Orchard, WA 98366. The department publishes (360) 337-5777 and help@kitsap1.com. Its contact page lists lobby hours of Monday through Friday, 9 a.m. to noon, and says Friday is limited service, without reviewers. The mailing address that page lists is 619 Division Street, MS-36. The Kitsap County Fire Marshal’s office publishes the same street address and the same phone. There is no Silverdale permit counter. KindKey will not pull the permit, meet a reviewer, or attend for you. You do not need a reconstruction permit before KindKey looks. If you want to rebuild and keep the house, that counter is the county’s, not ours.',
          'A fire can also produce a nuisance or dangerous-structure letter. The Kitsap vacant-house guide walks through chapter 9.56 of the Kitsap County Code, which describes dangerous structures as including a dangerous, decaying, unkempt, falling, or damaged dwelling. KindKey will not decide whether that chapter applies, will not count a deadline, and will not appear at a hearing. If the paper has a hearing, a fine, or an order, talk with a Washington attorney before you rely on a sale to solve it. This article is not legal advice. You do not have to board the house or finish the county’s list before you ask for an offer. The county still controls its case until it says otherwise. The Silverdale code-violations page is the local page for an open case. Deeds for a Kitsap house record with the Kitsap County Auditor in Port Orchard, not with the Pierce County Auditor and not at KindKey’s office in Auburn. The closing agent confirms the parcel.',
        ],
      },
      {
        heading: 'Insurance, a foreclosure date, or a death in the family',
        paragraphs: [
          'Your insurer is your relationship. You can ask KindKey for an offer while a claim is open, paused, or already settled. KindKey will not tell you whether to wait for the check, how to assign the proceeds, or what the policy requires while the house sits empty. Talk with your insurer. If the paperwork is unclear, talk with a Washington attorney.',
          'If a trustee’s notice arrived with the fire, you have two clocks. Asking for an offer does not postpone the trustee. Read the Kitsap foreclosure guide, and talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute. KindKey will not take a deed outside escrow.',
          'If the owner died, the person who can sign is a probate question, whether the fire came before the death or after it. KindKey will not file the probate and will not guess which relative can sign. A decedent who lived in Silverdale lived in Kitsap County. The superior court sits in Port Orchard. Ask a Washington attorney before anyone signs a deed. The Bremerton and Kitsap probate guide is the signature page for that county, and the Silverdale inherited-house page is the local one. If the estate is also under financial pressure, ask that attorney about RCW 61.34. KindKey does not interpret it. You can request an offer while the attorney finishes the authority question. Do not sign before that authority exists.',
          'If someone still lives in the house, say so. Do not force that person out so the house looks empty. A tenant’s rights come from the rental agreement and from Washington law, including chapter 59.18 RCW. KindKey will not serve a notice and will not tell you that a sale cancels a lease. The Silverdale tenants page is the local page.',
        ],
      },
      {
        heading: 'A direct sale, a rebuild, or a listing',
        paragraphs: [
          `Rebuilding can fit if you want to keep the house and you can fund the work. A listing can fit after the house is safe to show. Hire a licensed broker in Kitsap County for that listing. KindKey will not run it and will not tell you a listed sale is a mistake. Do not sign two conflicting contracts. ${closing}`,
          'The sequence is a call or the cash-offer form, one walkthrough when the house is safe to enter, a written offer, and a closing date you help choose with the closing agent. KindKey’s office is at 640 1st St SW in Auburn. The ferry and the Tacoma Narrows do not add a repair requirement. KindKey does not promise a specific number of days. Cash means KindKey is not waiting on a retail buyer’s mortgage. It does not mean a suitcase of money, and it does not erase a mortgage, a tax bill, a code fine, or a lien. The offer reflects the house as it sits, so it can be less than a retail price for a repaired house. You see the payoffs on the settlement statement, prepared by the closing agent, before you close. You can say no.',
          'An Edgewood fire is a different county, a different fire district, and a different permit counter. Edgewood City Hall is at 10440 Dom Calata Way E. The city’s published permit line is (253) 952-3299. Do not take a Kitsap County permit question there, and do not take an Edgewood letter to the Port Orchard counter. KindKey buys houses in both places. Say which address you want to sell.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell my Silverdale house before the insurance claim is paid?',
        answer:
          'Yes. You can ask KindKey for a cash offer while a claim is open, paused, or already settled. KindKey does not advise you on the claim. Talk with your insurer, and with a Washington attorney if you are assigning claim rights. Call (206) 519-5463 or use the cash-offer form. You can say no.',
      },
      {
        question: 'Do I need a Kitsap County rebuild permit before KindKey will look?',
        answer:
          'No. You do not have to pull a reconstruction permit, finish repairs, or clear a certificate of occupancy first. If you choose to rebuild, permits go through the Kitsap County Department of Community Development at 619 Division Street in Port Orchard, phone (360) 337-5777. KindKey will not pull that permit for you.',
      },
      {
        question: 'Is a Silverdale fire a Bremerton Fire Department call?',
        answer:
          'Silverdale is unincorporated. Central Kitsap Fire and Rescue publishes Station 51 at 10955 Silverdale Way NW and Station 52 at 5328 NW Anderson Hill Rd NW, both in Silverdale. A Bremerton mailing address is not automatically the city fire department. KindKey will not draw the boundary. Read who responded.',
      },
      {
        question: 'The burned house is in Edgewood. Is this the right page?',
        answer:
          'No. Edgewood is entirely in Pierce County, and East Pierce Fire & Rescue covers that city. Use the Edgewood fire guide and the Edgewood city page. KindKey still buys Edgewood houses. Call (206) 519-5463 or use the cash-offer form with that address.',
      },
      {
        question: 'What if the house is also in foreclosure, or the owner has died?',
        answer:
          'Talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute, will not file a probate, and will not stop a trustee. You can still request a cash offer while you get that advice. You can say no.',
      },
      {
        question: 'Is KindKey a real estate agent?',
        answer:
          'No. KindKey Home Buyers LLC buys houses directly as a principal. It does not list houses or represent sellers.',
      },
    ],
    related: [
      {
        href: '/areas/silverdale',
        label: 'Sell a house in Silverdale',
        description: 'Unincorporated Central Kitsap. Old Town, Ridgetop, and Clear Creek.',
      },
      {
        href: '/areas/silverdale/sell-house-as-is',
        label: 'Sell a Silverdale house as-is',
        description: 'The direct-sale page for this community.',
      },
      {
        href: '/areas/silverdale/sell-vacant-house',
        label: 'Sell a vacant house in Silverdale',
        description: 'Many fire-damaged houses are empty.',
      },
      {
        href: '/areas/silverdale/sell-house-with-code-violations',
        label: 'Code violations in Silverdale',
        description: 'When Kitsap County has already opened a case.',
      },
      {
        href: '/areas/silverdale/sell-inherited-probate-house',
        label: 'Inherited houses in Silverdale',
        description: 'When the person who can sign is a probate question.',
      },
      {
        href: '/areas/silverdale/sell-house-with-tenants',
        label: 'Tenants in Silverdale',
        description: 'If someone still lives in the house.',
      },
      {
        href: '/sell-fire-damaged-house',
        label: 'Sell a fire-damaged house',
        description: 'The Washington overview.',
      },
      {
        href: '/blog/selling-a-vacant-house-kitsap-county',
        label: 'Vacant houses in Kitsap County',
        description: 'The county nuisance rules, including damaged dwellings.',
      },
      {
        href: '/blog/sell-house-before-foreclosure-kitsap-county',
        label: 'Foreclosure in Kitsap County',
        description: 'When a trustee’s date is in the file too.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-bremerton',
        label: 'Probate in Bremerton and Kitsap County',
        description: 'The court sits in Port Orchard. Ask an attorney who can sign.',
      },
      {
        href: '/areas/edgewood/sell-fire-damaged-house',
        label: 'Sell a fire-damaged house in Edgewood',
        description: 'Pierce County. A different fire district.',
      },
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'North Hill, Jovita, and the valley. Not Silverdale.',
      },
      {
        href: '/blog/sell-fire-damaged-house-edgewood-wa',
        label: 'Fire damage in Edgewood',
        description: 'East Pierce Fire & Rescue, not Central Kitsap.',
      },
      {
        href: '/blog/sell-fire-damaged-house-king-pierce-county',
        label: 'Fire damage in King or Pierce County',
        description: 'The guide for the other side of the water.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say what burned. You can say no.',
      },
    ],
    ctaTitle: 'Ask for a Silverdale offer on the fire-damaged house',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You do not have to finish the insurance repair first. You can say no.',
  }),
  post('sell-house-with-code-violations-poulsbo-wa', {
    breadcrumbName: 'Code violations in Poulsbo',
    title: 'Selling a House with Code Violations in Poulsbo, WA',
    description:
      'How Poulsbo owners sell a house with an open city notice, unpermitted work, or a junk-vehicle letter without finishing the list first. KindKey buys as-is. Not legal advice.',
    h1: 'Selling a House with Code Violations in Poulsbo, WA',
    publishedAt: '2026-11-05',
    intro: [
      'You can sell a house with open code violations in Poulsbo without finishing the city’s list, permitting the work, or hauling the yard away first. KindKey Home Buyers LLC buys that house as a principal. ' +
        office,
      'Poulsbo is an incorporated city in North Kitsap, on Liberty Bay. Downtown along Front Street, the Viking Avenue corridor, Noll Road, and Olhava are not the same house. A 98370 mailing address is not proof the parcel is inside the city. Kingston, Keyport, and Port Gamble are not Poulsbo. If the house is in Edgewood, this is the wrong page. Edgewood is a city in Pierce County. Use the Edgewood code guide and the Edgewood city page for that parcel.',
    ],
    callout:
      'You do not have to fix the violations, pull a permit, or clear the yard before you ask. KindKey is not code enforcement and will not appear at a hearing. Reach out, and KindKey will help you through the whole process from start to finish. You can say no after you see the offer.',
    sections: [
      {
        heading: 'The short answer for a Poulsbo notice',
        paragraphs: [
          'A retail buyer with a mortgage often stalls when a permit is open, a structure is posted, or a fine is still accruing. The lender, the appraiser, and the inspector each get a turn, and any one of them can ask for the work to be cured before closing. A direct sale skips that loop. KindKey looks at the house the way it sits, prices the open file with the condition, and does not need a lender to approve the work.',
          'That does not close the city’s case, and it does not hide the work. Tell KindKey what the letter says, which desk wrote it, and whether anyone can safely go inside. If you do not know, say so. Photos of the notice and of the yard, the addition, or the vehicles are enough to start. If a floor or a shop roof is not safe to walk, say that too. An exterior look can begin the conversation.',
        ],
      },
      {
        heading: 'A 98370 address is not always a City of Poulsbo letter',
        paragraphs: [
          'The city’s planning page says the 98370 zip code extends beyond the city limits, and it tells you to confirm the parcel before you assume you are inside the city. If the parcel is outside the limits, that page points you to the Kitsap County Department of Community Development, not to Poulsbo City Hall. KindKey will not run the parcel search and will not tell you the city from a street name. Read the header on the letter you actually received.',
          'Inside the city, a building or nuisance letter is the City of Poulsbo’s. City Hall is at 200 NE Moe Street, Poulsbo, WA 98370. The city’s code-enforcement page says that work sits in both the Planning and Economic Development Department and the Police Department, and that cases start from complaints. The complaints that page lists include public nuisances, junk vehicles, sign violations, illegal clearing or dumping, critical area destruction, work without a permit, and unapproved businesses. Neighborhood items such as a pothole, graffiti, a sidewalk, or litter are a different form. That page points those to SeeClickFix. Other complaints go to Public Works, by email at publicworks@cityofpoulsbo.com or by mail to 200 NE Moe Street. The contact page publishes the Public Works shop at 22097 Viking Ave NW, Poulsbo, WA 98370, phone (360) 779-4078. The police department publishes (360) 779-3113 at the Moe Street address. The same code-enforcement page says life-threatening emergencies and after-hours noise complaints go to 911. KindKey is none of those offices.',
          'Kingston and the Kingston ferry are nearby and are not the city. A letter for Kingston, Olalla, Seabeck, or another unincorporated place is a Kitsap County letter. Silverdale is unincorporated and has no city hall. Bainbridge Island is its own city. Bremerton and Port Orchard each have their own code. Do not use a Poulsbo explanation for one of those headers, or the reverse. The Port Orchard code guide covers that city’s letter. The Kitsap vacant-house guide is the page that separates Port Orchard, Bremerton, Poulsbo, and the county.',
        ],
      },
      {
        heading: 'What Poulsbo’s nuisance chapter is listing',
        paragraphs: [
          'PMC 9.50 is the city’s nuisance chapter. PMC 9.50.040 says it is a violation to permit, create, maintain, or allow, on any premises, anything PMC 9.50.050 declares a public nuisance. The opening of PMC 9.50.050 says each listed condition, unless otherwise permitted by law, is a public nuisance, and that when the enforcement officer determines one exists, the officer may provide for abatement and monetary penalties may be assessed under PMC 9.50.070. KindKey will not decide that your house meets any letter in that section.',
          'The papers owners usually have are practical. PMC 9.50.050(A) covers accumulations that can be seen or smelled from outside the property, including building materials, mattresses, and other items that subsection lists when they are not properly stored or neatly piled. PMC 9.50.050(C) covers wrecked or disassembled trailers, house trailers, boats, tractors, or other vehicles, appliances, or machinery, or major parts of them. PMC 9.50.010 defines nuisance vegetation to include plants that overhang a sidewalk below eight feet or a street below sixteen feet. The same definition includes grass and weeds exceeding twelve inches, except in areas maintained for domestic livestock, and it includes blackberry vines and dead, decayed, diseased, or hazardous trees. PMC 9.50.050(I) lists that vegetation as a nuisance. PMC 9.50.050(M) lists buildings or structures that are abandoned, partially destroyed, or left in partial construction or partial demolition so as to be an attractive nuisance. PMC 9.50.050(N) lists the failure to close and secure doorways, windows, and other openings into a vacant structure, including broken windows. PMC 9.50.050(P) lists unprotected or hazardous foundations and excavations. A stalled addition, an open house, and a pile of roofing are different facts. KindKey will not pick the subsection for you.',
          'PMC 9.50.010 also says that each owner is always a responsible party for that chapter, even if someone else agreed to maintain the property. A tenant, a relative, or a property manager on the letter does not, by itself, take the owner off the chapter. KindKey will not tell you who the city can cite. PMC 9.50.070(A) says a violation is a civil infraction for which a monetary penalty of two hundred fifty dollars may be assessed, in accordance with chapter 1.16 PMC, and that abatement may be required. It also says each day the violation exists is a separate offense. KindKey will not multiply that figure, predict what the municipal court will assess, or tell you the count stopped because you requested an offer. PMC 9.50.080 says costs the city incurs abating the nuisance are a debt owed by the responsible party and are enforceable as a lien against the property, in addition to other remedies for debts. KindKey does not promise that a Poulsbo fine or abatement cost disappears when you sign. Amounts that must be paid can reduce proceeds the same way a mortgage payoff can. The settlement statement, prepared by the closing agent, is where you see them.',
        ],
      },
      {
        heading: 'A junk vehicle and a missing permit are different desks',
        paragraphs: [
          'Junk vehicles have their own chapter. PMC 10.18.030 says storing or keeping an unauthorized junk motor vehicle, as defined in RCW 46.55.010(5), on private property is prohibited and is a public nuisance subject to removal and impoundment. KindKey will not decide whether a car, a boat trailer, or a pile of parts meets that definition. The same section says the enforcement officer, using the definition in PMC 9.50.010, may investigate a complaint and may issue a written notice of violation to the last registered owner of record and to the property owner of record. It says that notice includes a statement that a hearing may be requested before the municipal court of the City of Poulsbo, and that if no hearing is requested within ten days, the vehicle will be removed and any assessed penalties will be final. KindKey will not count those ten days, request the hearing, or tell you to skip it. The city’s contact page publishes the municipal court at (360) 779-9846. If the paper has a hearing, a tow date, or a penalty you do not understand, talk with a Washington attorney before you rely on a sale to solve it. This article is not legal advice. You do not have to move the vehicles before KindKey looks.',
          'Work without a permit is on the city’s complaint list, and the permit counter is the building department, on the second floor of City Hall at 200 NE Moe Street, Poulsbo, WA 98370-7437. That department publishes (360) 394-9882. Its page says scheduled inspections run Monday, Tuesday, Wednesday, and Friday, and that Thursdays are reserved for plan review until further notice. The same page says the 2021 Washington State Building Codes went into effect on March 15, 2024, and that electronic building permit submittals started January 1, 2026. Planning and Economic Development publishes (360) 394-9748 in the same building. You do not need a permit, a final inspection, or a visit to that counter before KindKey will look. If you choose to legalize an addition, a garage conversion, or a deck and keep the house, that counter is the city’s. KindKey will not pull the permit or meet the inspector for you.',
          'A septic or well letter is a third file. On-site sewage in Kitsap County goes to the Kitsap Public Health District at 345 6th Street, Suite 300, Bremerton, WA 98337, phone (360) 728-2235. Some edge lots use septic or a well. Houses closer to downtown are often on city utilities. The name Poulsbo does not decide which. The city’s contact page lists garbage, sewer, and water questions at (360) 779-4078. That number is not the health district. You do not have to pump, repair, or certify a system before an offer. KindKey does not inspect or certify a septic system or a well. The Kitsap septic guide is the longer page for that letter.',
        ],
      },
      {
        heading: 'The notice stays yours until the deed records',
        paragraphs: [
          'Requesting an offer does not close the case, pause a penalty, or vacate an order. Until the deed records, deadlines on the notice are still yours. Do not skip a hearing because a buyer is walking the house. KindKey will not appear, will not negotiate the citation, and will not clear it as your representative. After recording, the house is KindKey’s to deal with, including repairs and any permits KindKey chooses to pull on its own property. That is not a promise about what an enforcement officer, the municipal court, or an inspector will do.',
          'Deeds for a Poulsbo house record with the Kitsap County Auditor in Port Orchard, not at Poulsbo City Hall and not at KindKey’s office in Auburn. The auditor’s mailing address is 614 Division St., MS-31, Port Orchard, WA 98366. The physical address the auditor publishes is 619 Division St., Port Orchard, WA 98366. Recording’s published phone is (360) 337-4935. The auditor does not close a code case. An Edgewood deed records in Pierce County. Do not take a Poulsbo letter to the Pierce County Auditor in Tacoma because the buyer is based in Auburn. The closing agent confirms the parcel.',
          'If a trustee’s notice is in the same stack as the city letter, you have two clocks. Asking for an offer does not postpone the trustee. Talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute and will not take a deed outside escrow. The Kitsap foreclosure guide is the page for a notice recorded in Port Orchard. An Edgewood foreclosure is a Pierce County file. Use the Edgewood foreclosure guide for that house, not this page.',
          'If the owner has died, the person who can sign is a probate question, separate from the code letter. A person who lived in Poulsbo lived in Kitsap County. The superior court sits in Port Orchard, not in Poulsbo City Hall and not in Tacoma. KindKey will not file the probate and will not guess which relative can sign. The Bremerton and Kitsap probate guide is the signature page, and the Poulsbo inherited-house page is the local one. You can ask for an offer while the attorney finishes that question. Do not sign a deed before the authority exists. If someone still lives in the house, say so. A tenant’s rights come from the rental agreement and from Washington law, including chapter 59.18 RCW. KindKey will not serve a notice and will not tell you that a sale cancels a lease. Do not force an occupant out so the yard looks empty. The Poulsbo tenants page is the local page.',
        ],
      },
      {
        heading: 'Cure the notice, list the house, or sell it as it is',
        paragraphs: [
          'Curing a small yard notice can be the right choice if you want to keep the house and the work is actually small. It is a poor fit when the letter requires a tear-out, a permit for a conversion, or a clean-out you cannot staff from King County or Pierce County. A listing still means showings and buyers who may ask for the violation to be cured before they close. Washington’s seller disclosure law is chapter 64.06 RCW. The form asks about work and permits. KindKey will not tell you how to answer it or whether an exemption applies. Ask a Washington real estate attorney if you are unsure. Hire a licensed broker in Kitsap County if you want the listing. KindKey will not run it and will not tell you a listed sale is a mistake. Do not sign two conflicting contracts.',
          `The sequence is a call or the cash-offer form, one walkthrough when the house is safe to enter, a written offer, and a closing date you help choose with the closing agent. KindKey’s office is at 640 1st St SW in Auburn. The ferry and the drive up the peninsula do not add a repair requirement. KindKey does not promise a specific number of days. ${closing} Cash means KindKey is not waiting on a retail buyer’s mortgage. It does not mean a suitcase of money, and it does not erase a mortgage, a tax bill, a code fine, or a lien. The offer reflects the house as it sits, so it can be less than a retail price for a violation-free house. You see the payoffs on the settlement statement before you close. You can say no.`,
          'Edgewood is a different county and a different code. Do not use PMC 9.50 on a North Hill house, and do not use Edgewood’s code on a Liberty Bay house. Edgewood City Hall is at 10440 Dom Calata Way E. The city’s published permit line is (253) 952-3299. Most Edgewood residents live on North Hill, with Jovita Boulevard and Meridian Avenue E as the everyday roads. East Pierce Fire & Rescue covers that city. Poulsbo Fire Department publishes its address at 911 NE Liberty Rd., Poulsbo, WA 98370, phone (360) 779-3997, and its site says it provides fire suppression to Poulsbo, Keyport, Port Gamble, and surrounding unincorporated communities. KindKey is not that department and does not interpret a run report. A fire can produce the nuisance letter. The fire-damaged-house page is the overview. If the burned house is in Edgewood, use the Edgewood fire guide. KindKey buys houses in both places. Say which address you want to sell.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell my Poulsbo house before the code case is closed?',
        answer:
          'Yes. KindKey buys Poulsbo houses with an open notice and does not require you to finish the city’s list first. The city still controls the case until it says otherwise. Call (206) 519-5463 or use the cash-offer form. You can say no.',
      },
      {
        question: 'Is every 98370 address a City of Poulsbo code case?',
        answer:
          'No. The city’s planning page says the 98370 zip code extends beyond the city limits. Kingston is not Poulsbo. If the parcel is outside the city, the letter is not automatically a Poulsbo letter. Read the header. KindKey will not decide the boundary for you.',
      },
      {
        question: 'Do I have to move junk vehicles or permit the work before KindKey will look?',
        answer:
          'No. You do not have to tow vehicles, pull a building permit, or clear the yard first. Tell KindKey what the notice says. If the notice gives a hearing date, talk with a Washington attorney. KindKey will not appear at the hearing.',
      },
      {
        question: 'Does the two-hundred-fifty-dollar penalty disappear when I sell?',
        answer:
          'Do not assume that. PMC 9.50.070(A) says a penalty of two hundred fifty dollars may be assessed and that each day can be a separate offense. PMC 9.50.080 says abatement costs can be a lien. Amounts that must be paid show on the settlement statement. KindKey does not negotiate the citation.',
      },
      {
        question:
          'What if a foreclosure notice arrived with the city letter, or the owner has died?',
        answer:
          'Talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute, will not stop a trustee, and will not file a probate. You can still request a cash offer while you get that advice. You can say no.',
      },
      {
        question: 'Is KindKey a real estate agent?',
        answer:
          'No. KindKey Home Buyers LLC buys houses directly as a principal. It does not list houses or represent sellers.',
      },
    ],
    related: [
      {
        href: '/areas/poulsbo/sell-house-with-code-violations',
        label: 'Code violations in Poulsbo',
        description: 'The Poulsbo code page.',
      },
      {
        href: '/areas/poulsbo',
        label: 'Sell a house in Poulsbo',
        description: 'Liberty Bay, Front Street, Viking Avenue, and Noll Road.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The Washington overview.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'Condition does not have to be repaired first.',
      },
      {
        href: '/areas/poulsbo/sell-house-as-is',
        label: 'Sell a Poulsbo house as-is',
        description: 'The direct-sale page for this city.',
      },
      {
        href: '/areas/poulsbo/sell-vacant-house',
        label: 'Sell a vacant house in Poulsbo',
        description: 'When the notice is about an empty house.',
      },
      {
        href: '/areas/poulsbo/sell-house-with-tenants',
        label: 'Tenants in Poulsbo',
        description: 'If someone still lives in the house.',
      },
      {
        href: '/areas/poulsbo/sell-inherited-probate-house',
        label: 'Inherited houses in Poulsbo',
        description: 'When the person who can sign is a probate question.',
      },
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'Pierce County. North Hill, Jovita, and the valley. Not Poulsbo.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'A different city and a different code.',
      },
      {
        href: '/blog/sell-house-with-code-violations-edgewood-wa',
        label: 'Edgewood code-violation guide',
        description: 'The Edgewood guide, including unpermitted shops.',
      },
      {
        href: '/blog/sell-house-with-code-violations-port-orchard',
        label: 'Code violations in Port Orchard',
        description: 'Kitsap County seat. A different city’s letter.',
      },
      {
        href: '/blog/selling-a-vacant-house-kitsap-county',
        label: 'Vacant houses in Kitsap County',
        description: 'How Poulsbo, Bremerton, Port Orchard, and the county differ.',
      },
      {
        href: '/blog/sell-house-before-foreclosure-kitsap-county',
        label: 'Foreclosure in Kitsap County',
        description: 'When a trustee’s date is in the file too.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-kitsap-county',
        label: 'Septic or well issues in Kitsap County',
        description: 'When the letter is from the health district.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'Pierce County. A different recorder.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say what the letter says. You can say no.',
      },
    ],
    ctaTitle: 'Ask for a Poulsbo offer while the notice is open',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You do not have to finish the city’s list first. You can say no.',
  }),
  post('sell-house-after-expired-listing-edgewood-wa', {
    breadcrumbName: 'Expired listing in Edgewood',
    title: 'Selling a House After an Expired Listing in Edgewood, WA',
    description:
      'How Edgewood owners sell after an MLS listing expired, was withdrawn, or sat with few or no offers. KindKey buys as-is as a principal. Not legal advice.',
    h1: 'Selling a House After an Expired Listing in Edgewood, WA',
    publishedAt: '2026-11-06',
    intro: [
      'You can sell an Edgewood house after the listing expired, was withdrawn, or sat with few or no offers, without relisting it, staging it, or hosting another round of showings. ' +
        office +
        ' KindKey will not list the house and will not take over a broker’s file.',
      'Edgewood is entirely in Pierce County, between Milton, Fife, Puyallup, and Sumner. It incorporated on February 28, 1996. Most residents live on North Hill: longer driveways, and shops set back from the street. A smaller share of the city sits in the Puyallup River valley. Meridian Avenue E is State Route 161. Jovita Boulevard is the other everyday road. Jovita is not a separate city. A North Hill listing that expired after an inspection on the shop, a valley house that sat vacant, and a listing withdrawn because the occupants would not allow showings are different files. Bring the address.',
    ],
    callout:
      'You do not have to relist, stage, cut the price again, or schedule more showings before you ask. KindKey is the buyer. Reach out, and KindKey will help you through the whole process from start to finish. You can say no after you see the offer.',
    sections: [
      {
        heading: 'Expired, withdrawn, and still sitting are not the same status',
        paragraphs: [
          'An expired listing is one whose marketing period ended. A withdrawn listing is one taken off the market before that period ended. A listing that is still up, after price cuts and few or no offers, is still an active file. KindKey will not look up the status, will not tell you which of those three you have, and will not cancel, extend, or rewrite the listing. The written listing agreement and the licensed broker who holds it are the source. If you are not sure whether that agreement still limits a sale, including after the public listing has ended, read it with that broker or with a Washington attorney before you sign a purchase contract. This article is not legal advice. Do not sign two conflicting contracts.',
          'Requesting a cash offer does not, by itself, end a listing agreement. KindKey is not a broker and does not provide listing services. Pricing advice for a new public listing, open-house scheduling, and representation in a listed sale belong to a licensed broker you hire. If you want to try the market again, hire one. KindKey will not run that listing and will not tell you a second listing is a mistake. You can ask for a written number while you decide. Asking does not obligate a sale.',
        ],
      },
      {
        heading: 'Why an Edgewood listing stalls',
        paragraphs: [
          'A retail buyer with a mortgage often stalls on the same facts that made the first listing hard. On North Hill the inspector may write up a roof, shop wiring, a garage that was turned into a room, or a septic system the buyer’s lender will not finance. The appraiser may not count an unpermitted shop or a converted garage as living space, and the buyer may then ask for a price cut or walk. In the valley the issue is often a smaller house: a soft floor, standing water, or a repair the inspection report turned into a request. A price cut on the listing, and then another, is not a number KindKey will match. KindKey will not quote a percentage off the last list price. Anyone who does that without seeing the house is guessing. A direct sale skips the relisting loop. KindKey looks at the house the way it sits, prices the condition with the offer, and does not need a retail lender’s appraisal to close.',
          'A vacant house is a common reason the showings dried up. Nobody local is home to reset the lights, the yard is visible from Meridian or Jovita, and the owner may already live in Puyallup, Sumner, Tacoma, or another state. You do not have to move back in, stage the rooms, or mow to a listing standard before KindKey looks. If a floor or a shop roof is not safe to walk, say so. An exterior look can begin the conversation. Take papers, photos, and what you want to keep. Leave the rest. The Edgewood vacant-house guide covers a city maintenance letter after everyone has left.',
          'Tenants are a different stall. Showings depend on access the occupants will allow. A tenant’s rights come from the rental agreement and from Washington law, including chapter 59.18 RCW. KindKey will not serve a notice, will not schedule showings through the tenant, and will not tell you that a sale cancels a lease. Do not force an occupant out so the house looks empty for a second listing. Say who lives there. The Edgewood tenants guide is that page.',
          'Many older North Hill and Jovita lots use a septic system, and some use a private well. Others are on public sewer and public water. The city name does not decide it, and a listing description that said “septic” is not an inspection. A buyer’s request for a pump, a certification, or a new drainfield is a reason some offers die. You do not have to pump the tank, locate the field, or replace it before a walkthrough. On-site sewage questions in Pierce County go to the Tacoma-Pierce County Health Department, not to KindKey. KindKey does not inspect, pump, or certify a septic system or a well. The Edgewood septic guide is that page.',
        ],
      },
      {
        heading: 'The shop, the permit file, and the county record',
        paragraphs: [
          'Acreage in Edgewood often includes a shop, a barn, or an RV cover set back from the street. A listing photo of the house does not describe the outbuilding. Tell KindKey which structure the inspector wrote up, and whether anyone can safely go inside. An unpermitted shop, a garage conversion, or an addition that never reached a final inspection is a reason a lender stalls. It is not a repair KindKey requires before an offer. If the project itself stopped with open walls, use the Edgewood stalled-remodel guide. If the shop was built years ago and never permitted, and nothing is underway now, use the Edgewood unpermitted-work guide. Inside the city, Community Development is at Edgewood City Hall, 10440 Dom Calata Way E, Edgewood, WA 98372. The permit line published by the city is (253) 952-3299. City Hall’s posted hours are Monday through Thursday, 8:30 a.m. to 5:00 p.m. That counter is for owners who choose to permit the work and try another listing. KindKey does not require the visit, will not pull the permit, and will not appear for an inspection.',
          'The Pierce County Assessor-Treasurer parcel page shows the recorded building square footage and outbuildings. Comparing that page to what is actually on the lot is one way a listing’s square footage and an appraisal come apart. KindKey will not reconcile those two numbers for you and will not tell you the assessor is wrong. The Assessor-Treasurer’s office is at 2401 S 35th St, Room 142, Tacoma, WA 98409. The main phone number published for that office is (253) 798-6111. KindKey is not that office. A mailing address that says Edgewood is not always inside the city. Milton, next door, can fall in King County or Pierce County. Edgewood does not. If the letterhead is Pierce County, the parcel may be outside the city limits even when the listing said Edgewood. Read the header. The closing agent confirms the parcel. An Edgewood deed records with the Pierce County Auditor.',
          'Washington’s seller disclosure law is chapter 64.06 RCW. The form asks about work, permits, and systems. A prior listing does not answer the form for a later sale. KindKey will not tell you how to fill it out, whether an exemption applies, or what you should have told the first buyers. Ask a Washington real estate attorney if you are unsure. Answer with what you actually know. If you do not know who built the shop, say that. Selling to a cash buyer is not a reason to leave a known problem off the form.',
        ],
      },
      {
        heading: 'Relist the house, or sell it as it sits',
        paragraphs: [
          'A second listing can fit if the house is safe to show, a broker will take the condition, and you can host the access. Price cuts, inspection repairs, and another appraisal are part of that path when the buyer is using a loan. Commission is negotiated in the listing agreement with that broker and is not set by KindKey. Hire a licensed broker in Pierce County if you want the listing. KindKey will not run it.',
          'The direct-sale sequence is a call or the cash-offer form, one walkthrough when the house is safe to enter, a written offer, and a closing date you help choose with the closing agent. KindKey’s office is at 640 1st St SW in Auburn. The drive from Edgewood does not add a repair requirement. KindKey does not promise a specific number of days. ' +
            closing +
            ' Cash means KindKey is not waiting on a retail buyer’s mortgage. It does not mean a suitcase of money, and it does not erase a mortgage, a tax bill, a code fine, or a lien. The offer reflects the house as it sits, so it can be less than a retail price for a repaired house that a second listing might bring. You see the payoffs on the settlement statement before you close. You can say no.',
          'If a foreclosure notice arrived while the house was listed, you have a clock the listing status does not pause. Asking for an offer does not postpone a trustee. Talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute and will not take a deed outside escrow. The Edgewood foreclosure guide is that page. If the owner has died, who can sign is a probate or trust question, separate from the expired listing. KindKey will not file the probate and will not guess which relative can sign. Use the Edgewood probate guide or the living-trust guide, and do not sign before the authority exists. Parts of Edgewood lie inside the Puyallup Indian Reservation boundary. That can change a title report. KindKey does not interpret tribal jurisdiction. Tell the closing agent if you already know the parcel is inside the boundary.',
          'A house that did not sell in Port Orchard, Bremerton, Silverdale, Poulsbo, Bainbridge Island, Kingston, Olalla, or Seabeck is a Kitsap County file. Do not use this Edgewood page as the guide for a Kitsap city, or for a Milton house that may be in King County. Reach out, and KindKey will help you through the whole process from start to finish, from the first description of why the listing ended through the walkthrough, the written offer, and closing. You can say no.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell my Edgewood house after the listing expired without relisting it?',
        answer:
          'Yes. KindKey buys the house as a principal. You do not have to relist, stage, or host more showings first. If a listing agreement might still limit a sale, read it with the broker or a Washington attorney before you sign. Call (206) 519-5463 or use the cash-offer form. You can say no.',
      },
      {
        question: 'What if the listing was withdrawn, or it is still active and has no offers?',
        answer:
          'Tell KindKey which one it is. KindKey will not look up the status or cancel the listing. Do not sign a purchase contract that conflicts with a listing agreement that is still in effect. You can still ask for a written offer and decline it.',
      },
      {
        question: 'Do I have to finish the inspection repairs, the septic work, or the shop first?',
        answer:
          'No. You do not have to complete a buyer’s repair list, pump a septic system, or permit a shop before KindKey looks. The offer reflects the house as it sits. The city’s permit counter at 10440 Dom Calata Way E is for owners who choose to repair and try another listing.',
      },
      {
        question: 'What if a foreclosure notice arrived while the house was on the market?',
        answer:
          'Talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute, will not stop a trustee, and will not file a probate. You can still request a cash offer while you get that advice. You can say no.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'North Hill, Jovita, Meridian, and the valley.',
      },
      {
        href: '/areas/edgewood/sell-house-as-is',
        label: 'Sell a house as-is in Edgewood',
        description: 'Condition does not have to be repaired before a direct sale.',
      },
      {
        href: '/areas/edgewood/sell-my-house-fast',
        label: 'Sell my house fast in Edgewood',
        description: 'The Edgewood fast-sale page, without another listing period.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'The service page for houses sold in their current condition.',
      },
      {
        href: '/blog/cash-buyer-vs-listing-with-an-agent',
        label: 'Cash buyer compared with a listing',
        description: 'KindKey buys. A licensed broker lists. Those are different jobs.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-edgewood',
        label: 'Sell fast for cash in Edgewood',
        description: 'When another round of showings is not the plan.',
      },
      {
        href: '/blog/selling-a-vacant-house-edgewood-wa',
        label: 'Selling a vacant Edgewood house',
        description: 'When the listing sat because nobody was living there.',
      },
      {
        href: '/areas/edgewood/sell-vacant-house',
        label: 'Vacant houses in Edgewood',
        description: 'The Edgewood page for an empty house.',
      },
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'The overview for empty houses.',
      },
      {
        href: '/blog/sell-house-needing-repairs-edgewood-wa',
        label: 'Major repairs in Edgewood',
        description: 'When the inspection list was a roof, a floor, or other deferred work.',
      },
      {
        href: '/blog/sell-house-with-stalled-remodel-edgewood-wa',
        label: 'Stalled remodels in Edgewood',
        description: 'Open walls that kept financed buyers from closing.',
      },
      {
        href: '/blog/sell-house-with-unpermitted-work-edgewood-wa',
        label: 'Unpermitted work in Edgewood',
        description: 'A shop or a garage conversion an appraiser may not count.',
      },
      {
        href: '/blog/sell-house-with-code-violations-edgewood-wa',
        label: 'Code violations in Edgewood',
        description: 'When the listing also drew a city letter.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'The Edgewood code page.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The King and Pierce County overview.',
      },
      {
        href: '/blog/sell-house-with-septic-or-well-issues-edgewood-wa',
        label: 'Septic or well issues in Edgewood',
        description: 'When a buyer’s septic request ended the offer.',
      },
      {
        href: '/blog/sell-house-with-tenants-edgewood-wa',
        label: 'Tenants in Edgewood',
        description: 'When showings depended on occupants who still live there.',
      },
      {
        href: '/areas/edgewood/sell-house-with-tenants',
        label: 'Houses with tenants in Edgewood',
        description: 'A sale does not end a tenancy by itself.',
      },
      {
        href: '/sell-house-with-tenants',
        label: 'Sell a house with tenants',
        description: 'The overview for occupied rentals.',
      },
      {
        href: '/areas/edgewood/sell-house-before-foreclosure',
        label: 'Foreclosure in Edgewood',
        description: 'When a trustee’s notice arrived during the listing.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'A loan deadline is separate from the listing status.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'The statewide guide. Your notice still controls.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Probate houses in Edgewood',
        description: 'When the listing ended and the signer is still an estate question.',
      },
      {
        href: '/blog/sell-house-in-a-living-trust-edgewood-wa',
        label: 'Living trusts in Edgewood',
        description: 'When the house is already titled in a trust.',
      },
      {
        href: '/areas/milton',
        label: 'Sell a house in Milton',
        description: 'The next city west. Milton can be King County or Pierce County.',
      },
      {
        href: '/blog/sell-house-as-is-kitsap-county',
        label: 'Selling as-is in Kitsap County',
        description: 'Port Orchard, Bremerton, Silverdale, and Poulsbo. A different county.',
      },
      {
        href: '/how-it-works',
        label: 'How a KindKey sale works',
        description: 'One walkthrough, a written offer, and a closing date you help choose.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say why the listing ended. You can say no.',
      },
    ],
    ctaTitle: 'Ask for an Edgewood offer after the listing ends',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You do not have to relist or stage the house. You can say no.',
  }),
  post('sell-house-with-foundation-problems-edgewood-wa', {
    breadcrumbName: 'Foundation problems in Edgewood',
    title: 'Selling a House with Foundation Problems in Edgewood, WA',
    description:
      'How Edgewood owners sell a house with a cracked foundation, settling, soft floors, or crawlspace problems as-is. KindKey buys as a principal. Not engineering advice.',
    h1: 'Selling a House with Foundation Problems in Edgewood, WA',
    publishedAt: '2026-11-07',
    intro: [
      'You can sell an Edgewood house with foundation problems without jacking the house, pouring a new foundation, replacing piers or posts, or finishing the repairs an inspector wrote up. A cracked foundation, settling, a soft floor, water under the house, a crawlspace that is hard to enter, or a retaining wall that leans can all stay as they are while you ask for an offer. ' +
        office +
        ' KindKey is not a structural engineer, a foundation contractor, or a building official. This article is not engineering advice.',
      'Edgewood is entirely in Pierce County, between Milton, Fife, Puyallup, and Sumner. It incorporated on February 28, 1996. Most residents live on North Hill: longer driveways, and shops set back from the street. A smaller share of the city sits in the Puyallup River valley. Meridian Avenue E is State Route 161. Jovita Boulevard is the other everyday road. Jovita is not a separate city. A North Hill rambler with a crack in the foundation, a valley house with a soft floor, and a house where an inspection ended a financed sale are different properties. Bring the address.',
    ],
    callout:
      'You do not have to hire an engineer, lift the house, or complete an inspection repair list before you ask. KindKey is the buyer. Reach out, and KindKey will help you through the whole process from start to finish. You can say no after you see the offer.',
    sections: [
      {
        heading: 'A crack, settling, and a failed inspection are different facts',
        paragraphs: [
          'Tell KindKey what you have seen, in plain words, before anyone schedules a visit. It may be a visible crack, a floor that slopes, doors that stick, a soft spot when you walk, posts or piers in a crawlspace that look out of place, water standing under the house, or a wall along the driveway that has moved. Some of those houses are still lived in. Some are not. KindKey does not diagnose the cause, and KindKey will not tell you the crack is cosmetic or that the house is unsafe. A single Edgewood number, guessed before anyone sees the foundation, is not an offer.',
          'A retail inspection is a common reason this sale starts. The buyer’s inspector wrote up the foundation, the crawlspace, or settlement. The buyer asked for a repair or a price cut, or the lender would not close, and the sale died. You do not have to complete that repair list, hire the contractor the report named, or relist the house before KindKey looks. KindKey will not quote a percentage off the price in that failed contract. Anyone who does that without seeing the house is guessing. Cash, in this sale, means KindKey is not waiting on that buyer’s mortgage. It does not mean a suitcase of money. The Edgewood major-repairs guide covers a roof, a stopped remodel, or other deferred work on the same property. This page is the foundation and the structure.',
          'North Hill lots are often larger than a Tacoma city lot, with a shop or a shed set back from Meridian or Jovita. The walkthrough has to include the house and the outbuildings. Tell us which structure has the crack, the soft floor, or the wall that moved. A valley house at the base of the hill is usually a smaller lot, and standing water after rain is a different problem from a pier under a hill house. Do not describe them as the same house. The City of Edgewood’s stormwater materials describe Jovita Creek, in the northeast of the city, flowing in a steep-sided canyon. They say the adjacent hill slopes in that canyon are subject to frequent slides from runoff off the plateau, tree falls, unstable slopes, and high flows in the creek. That describes the basin. It is not a finding that your foundation cracked, that a pier has failed, or that your lot is a landslide hazard area. If your house is along Jovita Boulevard, say what you have seen. KindKey prices the property in front of us. Milton, next door, can fall in King County or Pierce County. Edgewood does not. A mailing address that says Edgewood is not always inside the city. The closing agent confirms the parcel. An Edgewood deed records with the Pierce County Auditor.',
        ],
      },
      {
        heading: 'Crawlspaces, piers, posts, and water under the house',
        paragraphs: [
          'You do not have to jack a corner, sister a joist, replace a post, pour a footing, or dry the crawlspace before a walkthrough. Photos of the crack, the floor, the crawlspace opening, the shop, and any pages from the inspection that killed the last deal are enough to start. If a floor is not safe to walk, or the crawlspace is not safe to enter, say so. An exterior look can begin the conversation. Do not walk a house that is not safe just to satisfy a buyer. Furniture and shop contents you do not want can stay. Take papers, photos, and what you want to keep before the closing date you agree to.',
          'Water under the house is not one problem. It may be standing water in a crawlspace, a slow leak you have watched for years, or a floor that feels soft because something underneath has been wet. A roof leak or a burst pipe that soaked the walls is the Edgewood water-damage guide. Use this page when the problem is the foundation, the floor structure, the piers or posts, or water that sits under the house. KindKey does not test air, write a mold report, or certify that a crawlspace is dry. A wet yard can also be a septic problem. Many older North Hill and Jovita lots use a septic system, and some use a private well. Others are on public sewer and public water. The city name does not decide it, and water under the house does not decide it. You do not have to pump the tank, locate the drainfield, or replace it before KindKey looks. On-site sewage questions in Pierce County go to the Tacoma-Pierce County Health Department, not to KindKey. KindKey does not inspect, pump, or certify a septic system or a well.',
          'A shop set back from the street can have its own slab, its own posts, or its own wall, while the house is a separate structure. Tell us which one the inspector wrote up, and whether anyone can go inside. You do not have to demolish the shop, or level it, before an offer. If someone still lives in the house, say so. Do not force an occupant out so the floor can be opened up. A tenant’s rights come from the rental agreement and from Washington law, including chapter 59.18 RCW. KindKey will not serve a notice and will not tell you that a sale cancels a lease. The Edgewood tenants page is that file.',
        ],
      },
      {
        heading: 'A retaining wall, a permit, and the disclosure form',
        paragraphs: [
          'A retaining wall along a North Hill driveway, or at the edge of a shop pad, is not the same structure as the house foundation. EMC 15.80.302.7 says accessory structures, including detached garages, storage buildings, carports, fences, and retaining walls, are to be maintained structurally sound and in good repair. KindKey will not decide whether your wall meets that sentence, and KindKey will not apply that sentence to the house foundation. You do not have to rebuild the wall, the fence, or the shop before an offer. If the house is empty and the letter is about the yard or an open building, the Edgewood vacant-house page covers the rest of that maintenance chapter. KindKey will not answer the notice, appear at a hearing, or promise that a fine disappears when you sign.',
          'EMC 15.20.030(C)(1) says application or notice is not required for ordinary repairs, and then says those repairs shall not include work affecting public health or general safety. The list includes cutting away any wall or partition and removing or cutting a structural beam or load-bearing support. KindKey will not decide whether your crack, your pier, your post, or your wall is that kind of work, and KindKey will not tell you a City of Edgewood permit is or is not required. If you choose to repair and then try a listing, Community Development is at Edgewood City Hall, 10440 Dom Calata Way E, Edgewood, WA 98372. The permit line published by the city is (253) 952-3299. That counter is for owners who choose the repair. KindKey does not require the visit, will not pull the permit, and will not appear for an inspection.',
          'Washington’s seller disclosure law is chapter 64.06 RCW. The form asks about work, permits, and systems. A prior inspection report does not answer the form for a later sale. KindKey will not tell you how to fill it out, whether an exemption applies, or what you should have told the first buyers. Ask a Washington real estate attorney if you are unsure. Answer with what you actually know. If you do not know who poured the foundation, or whether a past owner patched a crack, say that. Selling to a cash buyer is not a reason to leave a known problem off the form.',
        ],
      },
      {
        heading: 'Repair it and relist, or sell the house as it sits',
        paragraphs: [
          'Repairing the foundation can fit if you want to keep the house and you can fund the engineer and the contractor. A listing can fit after that, if a broker will take the condition and you can host the access. A financed buyer may still stall on the same floor, the same crawlspace, or the same wall. Commission is negotiated in the listing agreement with that broker and is not set by KindKey. Hire a licensed broker in Pierce County if you want the listing. KindKey will not run it, will not choose your engineer, and will not tell you a listed sale is a mistake.',
          'The direct-sale sequence is a call or the cash-offer form, one walkthrough when the house is safe to enter, a written offer, and a closing date you help choose with the closing agent. KindKey’s office is at 640 1st St SW in Auburn. The drive from Edgewood does not add a repair requirement. KindKey does not promise a specific number of days. ' +
            closing +
            ' The offer reflects the house as it sits, so it can be less than a retail price for a repaired house. You see the payoffs on the settlement statement before you close. You can say no. The Edgewood as-is page is that direct sale for the house in its current condition.',
          'If a foreclosure notice is in the file with the inspection report, you have a clock the foundation does not pause. Asking for an offer does not postpone a trustee. Talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute and will not take a deed outside escrow. The Edgewood foreclosure page is that file. If the owner has died, who can sign is a probate or trust question, separate from the crack in the foundation. KindKey will not file the probate and will not guess which relative can sign. Use the Edgewood probate page, and do not sign before the authority exists. Parts of Edgewood lie inside the Puyallup Indian Reservation boundary. That can change a title report. KindKey does not interpret tribal jurisdiction. Tell the closing agent if you already know the parcel is inside the boundary.',
          'A house with foundation problems in Port Orchard, Bremerton, Silverdale, Poulsbo, Bainbridge Island, Kingston, Olalla, or Seabeck is a Kitsap County file. Do not use this Edgewood page as the guide for a Kitsap city, or for a Milton house that may be in King County. Reach out, and KindKey will help you through the whole process from start to finish, from the first description of the foundation through the walkthrough, the written offer, and closing. You can say no.',
        ],
      },
    ],
    faqs: [
      {
        question:
          'Do I have to repair the foundation, the piers, or a soft floor before KindKey will look?',
        answer:
          'No. KindKey buys Edgewood houses with cracked foundations, settling, soft floors, crawlspace problems, and leaning retaining walls as they sit. You do not have to jack the house or finish an inspection repair list first. Call (206) 519-5463 or use the cash-offer form. You can say no.',
      },
      {
        question: 'An inspection ended the last sale. Do I need a new engineer’s report?',
        answer:
          'No. Bring the report if you have it, and say what the inspector wrote up. KindKey will not require a new engineering letter before an offer, and KindKey will not tell you the old report is right or wrong. The offer reflects the house as it sits.',
      },
      {
        question: 'Water is under the house. Is that a roof leak or a failed septic system?',
        answer:
          'Not necessarily. A roof leak or a burst pipe is the Edgewood water-damage guide. A drainfield question goes to the Tacoma-Pierce County Health Department. Tell KindKey what you have seen under the house. KindKey does not certify a crawlspace, a septic system, or a well, and you do not have to dry it out first.',
      },
      {
        question: 'What if a foreclosure notice arrived after the foundation inspection?',
        answer:
          'Talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute, will not stop a trustee, and will not file a probate. You can still request a cash offer while you get that advice. You can say no.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'North Hill, Jovita, Meridian, and the valley.',
      },
      {
        href: '/areas/edgewood/sell-house-as-is',
        label: 'Sell a house as-is in Edgewood',
        description: 'Condition does not have to be repaired before a direct sale.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'The service page for houses sold in their current condition.',
      },
      {
        href: '/areas/edgewood/sell-my-house-fast',
        label: 'Sell my house fast in Edgewood',
        description: 'The Edgewood fast-sale page, without a foundation repair first.',
      },
      {
        href: '/areas/edgewood/sell-hoarder-house',
        label: 'Heavy-repair houses in Edgewood',
        description: 'When the foundation is one part of a larger repair.',
      },
      {
        href: '/sell-hoarder-house',
        label: 'Sell a hoarder or heavy-repair house',
        description: 'Roof, foundation, and contents can stay.',
      },
      {
        href: '/blog/sell-house-needing-repairs-edgewood-wa',
        label: 'Major repairs in Edgewood',
        description: 'A roof, a stopped remodel, or a foundation on the same house.',
      },
      {
        href: '/blog/sell-water-damaged-house-edgewood-wa',
        label: 'Water damage in Edgewood',
        description: 'A roof leak or a burst pipe, rather than the foundation itself.',
      },
      {
        href: '/areas/edgewood/sell-vacant-house',
        label: 'Vacant houses in Edgewood',
        description: 'When the foundation letter arrived after everyone left.',
      },
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'The overview for empty houses.',
      },
      {
        href: '/areas/edgewood/sell-house-with-code-violations',
        label: 'Code violations in Edgewood',
        description: 'A city letter about a wall, a shop, or an unsafe structure.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The King and Pierce County overview.',
      },
      {
        href: '/areas/edgewood/sell-house-with-tenants',
        label: 'Houses with tenants in Edgewood',
        description: 'When someone still lives over the soft floor.',
      },
      {
        href: '/sell-house-with-tenants',
        label: 'Sell a house with tenants',
        description: 'A sale does not end a tenancy by itself.',
      },
      {
        href: '/areas/edgewood/sell-house-before-foreclosure',
        label: 'Foreclosure in Edgewood',
        description: 'When a trustee’s notice is in the file with the inspection.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'The statewide guide. Your notice still controls.',
      },
      {
        href: '/areas/edgewood/sell-inherited-probate-house',
        label: 'Inherited houses in Edgewood',
        description: 'When the foundation and the signer are both open questions.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Authority to sign, separate from the condition.',
      },
      {
        href: '/areas/milton',
        label: 'Sell a house in Milton',
        description: 'The next city west. Milton can be King County or Pierce County.',
      },
      {
        href: '/blog/sell-house-as-is-kitsap-county',
        label: 'Selling as-is in Kitsap County',
        description: 'Port Orchard, Bremerton, Silverdale, and Poulsbo. A different county.',
      },
      {
        href: '/how-it-works',
        label: 'How a KindKey sale works',
        description: 'One walkthrough, a written offer, and a closing date you help choose.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say what the foundation is doing. You can say no.',
      },
    ],
    ctaTitle: 'Ask for an Edgewood offer on the foundation as it sits',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You do not have to repair the foundation first. You can say no.',
  }),
];
