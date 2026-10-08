import type { LongformContent } from '@/lib/content';

const home = { name: 'Home', path: '/' };

export interface CitySituationPage extends LongformContent {
  citySlug: string;
  kind: 'fire' | 'foreclosure';
}

export const cityFirePages: CitySituationPage[] = [
  {
    citySlug: 'auburn',
    kind: 'fire',
    path: '/areas/auburn/sell-fire-damaged-house',
    title: 'Sell a Fire-Damaged House in Auburn, WA',
    description:
      'Sell a fire-damaged Auburn house as-is to KindKey Home Buyers LLC, a principal buyer based at 640 1st St SW. King County and Pierce County parcels are both possible in Auburn.',
    h1: 'Sell a Fire-Damaged House in Auburn, WA',
    intro: [
      'You can sell a fire-damaged house in Auburn without rebuilding it first. KindKey Home Buyers LLC is based at 640 1st St SW in downtown Auburn, so a walkthrough here does not depend on a drive from another county. We buy the house directly. We are not a real estate agent, and we do not list fire-damaged Auburn homes on the open market.',
      'Auburn is not one housing stock. Downtown and the valley floor along the Green River have older houses where a kitchen or electrical fire can run through plaster, a crawlspace, and an aging panel. Lea Hill and Lakeland Hills sit up the hill, with later ramblers and two-story houses where the fire may be smaller but smoke and firefighting water still make a retail listing unrealistic. West Valley has its own mix of older homes. The offer follows the house you have, not a citywide average.',
      'Most of Auburn is in King County. A southern portion of the city is in Pierce County, so the parcel — not the “Auburn, WA” mailing address — decides which county’s records, fire district details, and permit history apply. Tell us the address. The closing agent confirms the county. KindKey does not give insurance or legal advice about the claim or any posted order.',
    ],
    sections: [
      {
        heading: 'What an Auburn fire sale looks like',
        paragraphs: [
          'Bring the address, photos if you have them, and whether the house can be entered. Houses near the downtown grid are close to our office. Hill houses on Lea Hill and Lakeland Hills are still a short trip. We do not ask you to tarp the roof, pull a City of Auburn reconstruction permit, or finish an insurance contractor’s scope before the visit.',
          'Rain in the valley is the practical problem after a fire. A temporary cover that held in summer often fails once storms sit on the Green River valley. You do not have to solve that to request an offer. If you accept, the closing date can be short because the house is local to us, or later if you are still removing belongings or talking with your insurer.',
        ],
      },
      {
        heading: 'Auburn houses we buy after a fire',
        paragraphs: [
          'We buy standing houses with a burned kitchen or garage, smoke through the attic, boarded windows, and partial remodels that stopped. Vacant valley houses and inherited houses on the hill are both common. Nearby Algona and Pacific are separate cities; if your house is inside Auburn’s limits, this is the right page, and if you are just over the line, say so and we will still look.',
          'Red tags and stop-work notices do not automatically end a purchase. Any fine or lien that must be paid shows up on the settlement statement. KindKey does not charge an agent commission or a separate assignment fee.',
        ],
        bullets: [
          'Older downtown and valley houses with fire in the kitchen, panel, or attic',
          'Lea Hill and Lakeland Hills houses with smoke and water damage',
          'West Valley houses that are vacant after a fire',
          'Auburn addresses in either King County or Pierce County',
          'Houses with an open insurance claim, if you want to sell before repairs',
        ],
      },
      {
        heading: 'Insurance and the city notice',
        paragraphs: [
          'Your insurer, your mortgage company, and sometimes a contractor who started work are your relationships, not ours. Talk with them, and with a Washington attorney if you do not understand an assignment of claim proceeds. You can ask KindKey for an offer either before or after a claim is settled. We will not tell you which is better for your policy.',
          'If the City of Auburn or the county posted the house, keep the notice and keep meeting any deadline that is still yours until the deed transfers. Selling does not, by itself, close a code case on the day you call us.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you actually buy fire-damaged houses inside Auburn?',
        answer:
          'Yes. Auburn is where KindKey is based. We buy fire-damaged and smoke-damaged houses as-is in downtown Auburn, the valley, Lea Hill, Lakeland Hills, West Valley, and the rest of the city.',
      },
      {
        question: 'My Auburn house might be in Pierce County. Does that matter?',
        answer:
          'It can. Southern Auburn includes Pierce County parcels. The title company confirms which county applies. You do not have to figure that out before requesting an offer.',
      },
      {
        question: 'Do I need a City of Auburn permit before you will make an offer?',
        answer:
          'No. You do not need reconstruction permits, a finished insurance repair, or a cleared inspection before KindKey looks at the house.',
      },
      {
        question: 'Can I sell if the insurance check has not arrived?',
        answer:
          'Yes. KindKey does not advise you on the claim. You can request a cash offer while the claim is open. Ask your insurer and, if needed, an attorney before you sign away claim rights.',
      },
    ],
    related: [
      {
        href: '/sell-fire-damaged-house',
        label: 'Sell a fire-damaged house',
        description: 'The King and Pierce County overview.',
      },
      {
        href: '/areas/auburn',
        label: 'Sell a house in Auburn',
        description: 'All of the ways KindKey buys in Auburn.',
      },
      {
        href: '/areas/auburn/sell-house-before-foreclosure',
        label: 'Auburn houses facing foreclosure',
        description: 'If the fire and a missed mortgage payment are happening together.',
      },
      {
        href: '/areas/kent/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Kent',
        description: 'The next city north, still in King County.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Auburn', path: '/areas/auburn' },
      { name: 'Fire-damaged houses', path: '/areas/auburn/sell-fire-damaged-house' },
    ],
    ctaTitle: 'Get an Auburn cash offer on a fire-damaged house',
    ctaSubtitle:
      'Our office is in downtown Auburn. Requesting an offer does not obligate you to sell.',
  },
  {
    citySlug: 'kent',
    kind: 'fire',
    path: '/areas/kent/sell-fire-damaged-house',
    title: 'Sell a Fire-Damaged House in Kent, WA',
    description:
      'Sell a fire-damaged Kent, WA house as-is. KindKey buys directly on East Hill, West Hill, and in the valley. Principal buyer based in Auburn, not a real estate agent.',
    h1: 'Sell a Fire-Damaged House in Kent, WA',
    intro: [
      'You can sell a fire-damaged house in Kent, Washington, as-is. KindKey Home Buyers LLC buys houses directly from owners. We are based in Auburn, a short trip from Kent on the valley floor, and we are not a real estate agent. You do not need to rebuild, repaint smoke stains, or wait for a retail buyer who is comfortable with fire damage.',
      'Kent is a large King County city split by the Green River valley. East Hill and West Hill are the residential ridges. Downtown Kent and the Kent Station area sit in the valley, closer to rail and industrial land. A hillside rambler and a valley house do not burn, drain, or insure the same way, and we do not price them as if they did. Panther Lake and the Lake Meridian area on the east side are residential neighborhoods we also look at, not separate cities.',
      'King County records apply to Kent houses. That is different from Tacoma or Puyallup, and it is not identical to every Auburn parcel, because Auburn crosses the county line. If your fire notice, permit, or insurance file mentions the City of Kent, keep that paperwork. KindKey does not interpret it for you.',
    ],
    sections: [
      {
        heading: 'How we look at a Kent house after a fire',
        paragraphs: [
          'East Hill streets climb quickly. Access for a tarp, a dumpster, or a later repair crew is part of what a buyer has to understand, especially where the driveway is steep. West Hill has its own older housing and a different drive from our Auburn office, often through the valley rather than over the ridge. Downtown and Kent Station-area houses can sit nearer commercial property, which matters for odor complaints and for how a boarded house is seen from the street.',
          'Tell us which part of Kent the house is in and whether anyone can go inside. Photos of the origin room, the roof, and any city posting are enough to start. We will not ask you to complete a City of Kent repair permit before the offer.',
        ],
      },
      {
        heading: 'What we buy in Kent',
        paragraphs: [
          'We buy smoke damage that never became a total loss, garage fires, kitchen fires, and houses where the fire department’s water did as much harm as the flame. Vacant houses on either hill are a frequent call because the owner already moved and cannot watch a leaking tarp. Inherited houses with old wiring are another. We also buy when the claim is still open.',
          'Neighbors in Renton, Covington, and SeaTac are not Kent. If the address is inside Kent, use this page. If you are just outside the city and still in South King County, contact us anyway and we will say whether we can buy it. KindKey does not charge a listing commission because we are not listing the house.',
        ],
        bullets: [
          'East Hill houses, including the Panther Lake and Lake Meridian areas',
          'West Hill houses with older systems and steep approaches',
          'Valley and downtown houses near Kent Station',
          'Partial fires and smoke-only damage',
          'Houses that are vacant while an insurance project sits unfinished',
        ],
      },
      {
        heading: 'What KindKey will not do',
        paragraphs: [
          'We will not advise you to inflate a claim, hide smoke damage, or assign insurance proceeds without understanding the paper. Talk with your insurer and a Washington attorney about the claim. We will not tell you the City of Kent has closed a case merely because you requested an offer.',
          'The cash offer reflects repair cost, the lot, and the location in Kent. Closing costs are written in the purchase agreement. Payoffs and liens reduce proceeds and appear on the settlement statement before you close.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you buy fire-damaged houses on both East Hill and West Hill?',
        answer:
          'Yes. KindKey buys fire-damaged and smoke-damaged houses across Kent, including East Hill, West Hill, downtown, and the valley. The neighborhood changes the house, and the offer is for the specific property.',
      },
      {
        question: 'Is Kent in King County for permits and title?',
        answer:
          'Yes. Kent houses are in King County and in the City of Kent when they are inside city limits. Your notice and the title report confirm jurisdiction. KindKey does not provide legal advice about either one.',
      },
      {
        question: 'Can I sell before the smoke damage is remediated?',
        answer:
          'Yes. You do not have to hire a smoke-remediation company or a general contractor before asking for a cash offer.',
      },
      {
        question: 'We are in Covington, not Kent. Is this the wrong page?',
        answer:
          'This page is for Kent addresses. Covington is a different city. Call or use the cash-offer form with the real address and we will tell you if we can buy it.',
      },
    ],
    related: [
      {
        href: '/sell-fire-damaged-house',
        label: 'Fire-damaged houses in King and Pierce County',
        description: 'The wider service area, including Kent.',
      },
      {
        href: '/areas/kent',
        label: 'Sell a house in Kent',
        description: 'Cash offers for Kent beyond fire damage.',
      },
      {
        href: '/areas/kent/sell-house-before-foreclosure',
        label: 'Kent houses before foreclosure',
        description: 'When a fire and a loan default overlap.',
      },
      {
        href: '/areas/auburn/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Auburn',
        description: 'KindKey’s office city, just south of Kent.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Kent', path: '/areas/kent' },
      { name: 'Fire-damaged houses', path: '/areas/kent/sell-fire-damaged-house' },
    ],
    ctaTitle: 'Request a cash offer on a Kent house with fire damage',
    ctaSubtitle: 'East Hill, West Hill, or the valley — start with the address.',
  },
  {
    citySlug: 'federal-way',
    kind: 'fire',
    path: '/areas/federal-way/sell-fire-damaged-house',
    title: 'Sell a Fire-Damaged House in Federal Way, WA',
    description:
      'Sell a fire-damaged Federal Way house as-is. KindKey buys in Twin Lakes, Dash Point, Marine Hills, and Steel Lake. Auburn-based principal buyer, not an agent.',
    h1: 'Sell a Fire-Damaged House in Federal Way, WA',
    intro: [
      'You can sell a fire-damaged house in Federal Way without repairing the slope, the roof, or the smoke damage first. KindKey Home Buyers LLC is a principal buyer based in Auburn. Federal Way is the King County city between us and Tacoma, along I-5 and SR-18. We buy the house directly. We are not a real estate agent.',
      'Federal Way’s houses are spread across hills and lakes, not a single downtown grid. Twin Lakes, Steel Lake, Marine Hills, and Dash Point are different settings. A fire in a rambler near Steel Lake is not the same job as a fire in a house above Dash Point, where the lot may fall toward Puget Sound and roof access is awkward. Redondo is the waterfront neighborhood along the sound; we treat it as Federal Way, not as a separate town.',
      'The Commons area is what many people mean by downtown Federal Way. Houses near that commercial core, and houses farther out on SR-99, still use City of Federal Way and King County records when they are inside the city. Do not assume a Tacoma or Pierce County process applies just because Tacoma is the next exit north of some neighborhoods. The address controls.',
    ],
    sections: [
      {
        heading: 'Why Federal Way fire damage is often a hill problem',
        paragraphs: [
          'A contained kitchen fire can still soak lower floors when the house is built over a daylight basement, which is common on Federal Way’s slopes. Smoke pulls up the stairwell. Decks and walkways that were the only comfortable access can be the part that burned. You do not have to rebuild the deck before we visit.',
          'From Auburn, Federal Way is a direct drive. We can look at a vacant house while you are at work or out of state. If the house is not safe to enter, say so. An exterior review and your photos can start the offer.',
        ],
      },
      {
        heading: 'Federal Way houses we will make an offer on',
        paragraphs: [
          'We buy partial burns, garage fires, smoke damage, and houses with a tarp after a roof fire. We buy when the insurance repair stalled. We buy vacant houses that owners cannot watch from Milton, Edgewood, or farther away. Milton and Edgewood are the next cities to the south and are in Pierce County; if your mailbox says Federal Way, stay on this page.',
          'KindKey does not advise you on the claim, on a City of Federal Way posting, or on whether to finish a public adjuster’s scope. Ask your insurer and a Washington attorney about those papers. The cash offer is for the real estate in its current condition.',
        ],
        bullets: [
          'Twin Lakes and Steel Lake houses with smoke or water damage',
          'Marine Hills and other hillside houses with difficult roof access',
          'Dash Point and Redondo houses, including lots toward the sound',
          'Houses near The Commons that were boarded after a fire',
          'Unfinished insurance repairs anywhere in the city',
        ],
      },
      {
        heading: 'The offer',
        paragraphs: [
          'The number reflects what it will take to deal with the damage on that specific Federal Way lot, not a slogan about speed. KindKey may repair and resell or hold the house after closing. You are not charged an agent commission or a separate assignment fee.',
          'Closing costs are allocated in the purchase agreement. Liens, the mortgage payoff, and taxes can reduce proceeds. The closing agent shows those figures before you are done.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which Federal Way neighborhoods do you buy fire-damaged houses in?',
        answer:
          'We buy throughout Federal Way, including Twin Lakes, Steel Lake, Marine Hills, Dash Point, and Redondo. The neighborhood helps us understand the lot. It does not decide whether we will look.',
      },
      {
        question: 'Is Federal Way in King County or Pierce County?',
        answer:
          'Federal Way is in King County. Nearby Milton and Edgewood are in Pierce County. Use the city on the address, and let the title report confirm the parcel.',
      },
      {
        question: 'Do I have to repair hillside or deck damage first?',
        answer:
          'No. KindKey buys the house as it is, including damaged decks, wet daylight basements, and smoke on upper floors.',
      },
      {
        question: 'Can I sell while the insurance repair is half done?',
        answer:
          'Yes. Tell us what was finished and what stopped. KindKey will not advise you on the claim itself.',
      },
    ],
    related: [
      {
        href: '/sell-fire-damaged-house',
        label: 'Sell a fire-damaged house',
        description: 'County-wide page for King and Pierce.',
      },
      {
        href: '/areas/federal-way',
        label: 'Sell a house in Federal Way',
        description: 'Other ways to sell in Federal Way.',
      },
      {
        href: '/areas/federal-way/sell-house-before-foreclosure',
        label: 'Federal Way foreclosure sales',
        description: 'If the mortgage is in trouble as well.',
      },
      {
        href: '/areas/tacoma/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Tacoma',
        description: 'Pierce County, just north of Federal Way.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Federal Way', path: '/areas/federal-way' },
      { name: 'Fire-damaged houses', path: '/areas/federal-way/sell-fire-damaged-house' },
    ],
    ctaTitle: 'Get a Federal Way offer on a fire-damaged house',
    ctaSubtitle: 'Hillside lot or lake neighborhood, you can sell as-is.',
  },
  {
    citySlug: 'tacoma',
    kind: 'fire',
    path: '/areas/tacoma/sell-fire-damaged-house',
    title: 'Sell a Fire-Damaged House in Tacoma, WA',
    description:
      'Sell a fire-damaged Tacoma house as-is in Pierce County. KindKey buys in the North End, Proctor, Hilltop, Eastside, and South Tacoma. Not a real estate agent.',
    h1: 'Sell a Fire-Damaged House in Tacoma, WA',
    intro: [
      'You can sell a fire-damaged house in Tacoma as-is, without rebuilding plaster walls or waiting on a listed buyer. KindKey Home Buyers LLC is a principal buyer based in Auburn. Tacoma is in Pierce County, and it is one of the cities we buy in regularly. We are not a real estate agent and we do not list the house.',
      'Tacoma’s older housing is the reason fire sales here look different from a newer subdivision in Federal Way or on South Hill. The North End, the Proctor district, and the Stadium District have early houses where a small fire can move through plaster, balloon-style framing, and original chimneys. Hilltop has its own older stock and a tight street grid. South Tacoma and the Eastside include more mid-century houses, where a kitchen or garage fire is often the whole story and the rest of the structure is intact. Those are not the same repair, and we do not pretend they are.',
      'University Place and Fircrest are separate cities that border Tacoma. This page is for Tacoma addresses. Point Defiance is a park in the North End, not a city. If your house is near the park, you are still in Tacoma and this page fits.',
    ],
    sections: [
      {
        heading: 'Pierce County paperwork, not King County',
        paragraphs: [
          'A Tacoma house uses City of Tacoma permits and Pierce County title records. Do not send us a King County assumption because our office is in Auburn. The closing agent orders Tacoma and Pierce County information for the parcel you actually own. Fire postings, stop-work orders, and code cases stay with the city that issued them until that city says otherwise.',
          'Marine air matters after firefighting water. Wet lath and plaster in a North End house can stay damp in a way a newer house on a sunny Kent hillside might not. You do not have to dry the building out before we look. Tell us if floors are soft or if the power is off.',
        ],
      },
      {
        heading: 'What we buy in Tacoma',
        paragraphs: [
          'We buy partial fires, smoke damage, boarded houses, and houses where an insurance repair was abandoned. We buy vacant houses that are hard to watch from across the Narrows or from another state. We buy inherited houses full of belongings and soot. SR-16 and I-5 are useful only as directions; they do not change the offer.',
          'KindKey will not advise you on a Tacoma fire claim or on whether to finish a contractor’s work. Talk with your insurer and a Washington attorney before you assign proceeds. You can still ask for a cash offer while that conversation is open. We do not charge an agent commission or a separate assignment fee.',
        ],
        bullets: [
          'North End, Proctor, and Stadium District houses with older construction',
          'Hilltop houses with fire, smoke, or a posted unsafe condition',
          'South Tacoma and Eastside houses with a contained kitchen or garage fire',
          'Vacant Tacoma houses where the tarp and the mortgage are both ongoing costs',
          'Inherited houses the family does not want to rebuild',
        ],
      },
      {
        heading: 'Closing on a Tacoma timeline',
        paragraphs: [
          'If you accept an offer, the closing agent coordinates payoff and title in Pierce County. Owners who have already moved often want a shorter closing because the house is vacant and at risk. Owners who are still sorting an estate or an insurance file can ask for more time. We do not set that date by guessing at a trustee sale or a court calendar. If those are involved, your attorney should set the boundaries.',
          'The purchase agreement states closing-cost responsibility. Liens and the mortgage payoff can reduce what you receive. You see that on the settlement statement before closing.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you buy fire-damaged houses in Tacoma’s older neighborhoods?',
        answer:
          'Yes. We buy in the North End, Proctor, the Stadium District, Hilltop, the Eastside, and South Tacoma, as well as the rest of the city. Older plaster houses and later ranch houses are both eligible.',
      },
      {
        question: 'Is this a King County sale because KindKey is in Auburn?',
        answer:
          'No. A Tacoma house is in Pierce County. Our Auburn office does not move your parcel into King County. Title is opened on the property’s own county.',
      },
      {
        question: 'Do I need to repair plaster or pass a City of Tacoma inspection first?',
        answer:
          'No. KindKey buys the house in its current condition. Inspections the city requires for a future repair are not a precondition for an offer.',
      },
      {
        question: 'What if the house is in University Place?',
        answer:
          'University Place is its own city. This page is for Tacoma. Submit the University Place address through the cash-offer form and we will tell you if we can buy it.',
      },
    ],
    related: [
      {
        href: '/sell-fire-damaged-house',
        label: 'Fire-damaged houses, King and Pierce County',
        description: 'How KindKey buys after a fire across both counties.',
      },
      {
        href: '/areas/tacoma',
        label: 'Sell a house in Tacoma',
        description: 'The main Tacoma page.',
      },
      {
        href: '/areas/tacoma/sell-house-before-foreclosure',
        label: 'Sell a Tacoma house before foreclosure',
        description: 'Pierce County deadlines belong with your attorney.',
      },
      {
        href: '/areas/puyallup/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Puyallup',
        description: 'Another Pierce County city we buy in.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Tacoma', path: '/areas/tacoma' },
      { name: 'Fire-damaged houses', path: '/areas/tacoma/sell-fire-damaged-house' },
    ],
    ctaTitle: 'Request a cash offer on a fire-damaged Tacoma house',
    ctaSubtitle: 'Pierce County houses can be sold as-is. You do not have to rebuild first.',
  },
  {
    citySlug: 'puyallup',
    kind: 'fire',
    path: '/areas/puyallup/sell-fire-damaged-house',
    title: 'Sell a Fire-Damaged House in Puyallup, WA',
    description:
      'Sell a fire-damaged Puyallup house as-is. KindKey buys downtown Puyallup and looks at South Hill addresses. Pierce County principal purchase, not a listing.',
    h1: 'Sell a Fire-Damaged House in Puyallup, WA',
    intro: [
      'You can sell a fire-damaged house in Puyallup without restoring it for the Washington State Fair crowds or for a retail listing. KindKey Home Buyers LLC is a principal buyer based in Auburn. We buy Puyallup houses directly. We are not a real estate agent.',
      'Puyallup has two different landscapes that people lump together. Downtown Puyallup is a city grid of older houses near Pioneer Park and the fairgrounds, where a chimney, kitchen, or electrical fire can damage plaster and a wood-frame house that has been standing for decades. South Hill is the plateau south of the valley. Many people use a Puyallup mailing address there even when the house is in unincorporated Pierce County rather than inside Puyallup city limits. KindKey looks at both. The title report, not the way neighbors talk about the hill, says which jurisdiction applies.',
      'Sumner and Edgewood are neighboring cities, not Puyallup neighborhoods. If the house is in one of those cities, say so on the form. If it is downtown Puyallup or on the South Hill plateau, this page is the right starting point.',
    ],
    sections: [
      {
        heading: 'Valley houses and plateau houses are different fires',
        paragraphs: [
          'Downtown and the valley floor see the same wet Western Washington winters as Auburn, with older roofs and tighter lots. A tarp failure there is a slow leak into original ceilings. On South Hill, houses are often newer, set back on larger lots along the Meridian and Shaw Road corridors, and a fire may be limited to one wing, a garage, or an outbuilding. Smoke in a newer HVAC system is still a real cost. We price the house in front of us.',
          'You do not need a Pierce County or City of Puyallup rebuild permit before the visit. You do not need the fairgrounds schedule to be over, or the house to be empty of smoke odor. Tell us whether the structure is safe to enter.',
        ],
      },
      {
        heading: 'What we buy',
        paragraphs: [
          'We buy partial fire damage, smoke damage, garage fires, and houses where the insurance repair stopped after demolition. We buy vacant downtown houses that are difficult for an out-of-area owner to check. We buy South Hill houses that owners expected to remodel and then could not after the fire. SR-512 is the usual drive from our Auburn office; it is not a boundary of where we buy.',
          'KindKey does not give insurance advice and does not interpret a city or county unsafe-structure notice. Keep meeting your own deadlines until closing. Talk with your insurer and a Washington attorney about the claim. We do not charge an agent commission or a separate assignment fee to buy the house.',
        ],
        bullets: [
          'Older downtown Puyallup houses near the fairgrounds and Pioneer Park',
          'South Hill houses with a Puyallup address, including unincorporated Pierce County parcels',
          'Garage and kitchen fires with the rest of the house standing',
          'Smoke damage in newer plateau houses',
          'Vacant houses waiting on an insurance decision',
        ],
      },
      {
        heading: 'Closing',
        paragraphs: [
          'Pierce County title work applies. If you accept an offer, the closing agent prepares the settlement statement, including any payoff and any lien. Closing-cost responsibility is whatever the purchase agreement says, and it can vary.',
          'Owners who live on the hill and own a damaged house downtown, or the reverse, often want the damaged house sold so they are not maintaining two places. That is a practical reason. It is not a legal conclusion about your claim or your loan.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do you buy fire-damaged houses in downtown Puyallup and on South Hill?',
        answer:
          'Yes. We buy inside the City of Puyallup and we also look at South Hill addresses that people call Puyallup even when the parcel is unincorporated Pierce County. Tell us the street address.',
      },
      {
        question: 'Is South Hill the same as the City of Puyallup?',
        answer:
          'Not always. South Hill is a plateau with a mix of city and unincorporated Pierce County parcels, many with Puyallup mailing addresses. The title company confirms which one you own.',
      },
      {
        question: 'Do I need to finish fire repairs before you visit?',
        answer:
          'No. KindKey buys the house as-is, including tarped roofs, smoke odor, and demolished rooms from an unfinished insurance project.',
      },
      {
        question: 'We are in Sumner. Should we use this page?',
        answer:
          'Sumner is a different city. Use the cash-offer form with the Sumner address. This page is for Puyallup and for South Hill addresses tied to Puyallup.',
      },
    ],
    related: [
      {
        href: '/sell-fire-damaged-house',
        label: 'Sell a fire-damaged house',
        description: 'King and Pierce County overview.',
      },
      {
        href: '/areas/puyallup',
        label: 'Sell a house in Puyallup',
        description: 'The main Puyallup page.',
      },
      {
        href: '/areas/puyallup/sell-house-before-foreclosure',
        label: 'Puyallup houses before foreclosure',
        description: 'If a loan deadline is part of the story.',
      },
      {
        href: '/areas/edgewood',
        label: 'Edgewood',
        description: 'A nearby Pierce County city. Edgewood does not have a separate fire page.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Puyallup', path: '/areas/puyallup' },
      { name: 'Fire-damaged houses', path: '/areas/puyallup/sell-fire-damaged-house' },
    ],
    ctaTitle: 'Get a cash offer on a fire-damaged Puyallup house',
    ctaSubtitle: 'Downtown or South Hill, you can sell before the repairs are done.',
  },
];
