import { APPROVED_TRANSACTION_DISCLOSURE } from '@/data/disclosures';
import type { FaqItem } from '@/lib/content';

export interface IntentLink {
  href: string;
  label: string;
}

export interface CityIntentBlock {
  title: string;
  description: string;
  paragraphs: string[];
  faqs: FaqItem[];
  links: IntentLink[];
}

export interface CityIntentLocal {
  sellFast: CityIntentBlock;
  cashOffer: CityIntentBlock;
  asIs: CityIntentBlock;
}

const feeFaq: FaqItem = {
  question: 'Does KindKey charge a commission?',
  answer: APPROVED_TRANSACTION_DISCLOSURE,
};

export const expansionCityIntent: Record<string, CityIntentLocal> = {
  seattle: {
    sellFast: {
      title: 'Why Seattle sellers ask to close on a date, not a season',
      description:
        'Sell a Seattle house on your date. Ballard, Beacon Hill, Rainier Valley, and West Seattle. KindKey is an Auburn principal buyer. Call (206) 519-5463.',
      paragraphs: [
        'A Seattle sale gets slow when the house is on a slope in West Seattle, full of a parent’s belongings on Beacon Hill, or rented in the Rainier Valley and you live somewhere else. KindKey buys the house directly. You pick a closing date the title company can actually meet. Seven days is possible on some files. Fourteen is common. A later date is fine if you still need the house.',
        'Seattle is in King County. The deed records with the King County Recorder. That paperwork does not move faster because the house is in Ballard or Georgetown. What moves is the repair list: there is not one. KindKey is a principal buyer at 640 1st St SW in Auburn, not a real estate agent, and does not list the house.',
        'If a trustee sale, a probate, or a city notice is also on the calendar, the offer does not pause it. Most Washington foreclosures are nonjudicial. Talk with a Washington attorney. KindKey does not interpret RCW 61.34. Call (206) 519-5463 or request a cash offer.',
      ],
      faqs: [
        {
          question: 'Can you close a Seattle house while I am already out of state?',
          answer:
            'Yes, if someone can give access and the closing agent can get signatures. You do not have to fly back to host showings. KindKey buys the house and does not list it.',
        },
        {
          question: 'Do steep West Seattle streets or a Beacon Hill basement change the timeline?',
          answer:
            'They change the house, not your right to pick a date. Tell us about access, a daylight basement, or a shared driveway. The closing date is the one you and the closing agent agree to.',
        },
        {
          question: 'Will a Seattle code case or a probate filing close itself if I sell quickly?',
          answer:
            'No. The Seattle Department of Construction and Inspections still controls a city case. A King County probate still needs the person who has authority to sign. Speed is not a substitute for that signature. Ask an attorney.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/seattle/sell-vacant-house', label: 'Vacant houses in Seattle' },
        {
          href: '/areas/seattle/sell-inherited-probate-house',
          label: 'Inherited houses in Seattle',
        },
        { href: '/areas/shoreline/sell-my-house-fast', label: 'Sell fast in Shoreline' },
      ],
    },
    cashOffer: {
      title: 'How a Seattle cash offer is built from the neighborhood, not a city average',
      description:
        'Cash offer on a Seattle house from KindKey, a principal buyer in Auburn. King County. No listing. Call (206) 519-5463.',
      paragraphs: [
        'KindKey does not price Queen Anne, Georgetown, Columbia City, and Delridge as one Seattle number. The offer starts with the address, the condition, and what a direct buyer will do with that specific house after closing. A walkthrough can be in person or from photos and video when the house is hard to enter.',
        'You can compare the written offer with any other option, including hiring a licensed broker to list it. KindKey will not run that listing. There is no obligation to accept. Closing-cost responsibility is written in the purchase agreement and can vary. Mortgage payoffs, liens, and taxes can reduce proceeds. The closing agent shows them on the settlement statement.',
        'Call (206) 519-5463 or use the cash-offer form. Say the neighborhood. White Center and Skyway are often not in the city, and that fact belongs in the first conversation.',
      ],
      faqs: [
        {
          question: 'How fast is a Seattle offer?',
          answer:
            'KindKey aims to send a written offer within 24 hours of a usable walkthrough or a clear set of photos. The house, not a call-center script, sets the number.',
        },
        {
          question: 'Does a Rainier Valley rental get the same offer as a Ballard house?',
          answer:
            'No. Tenants, condition, lot, and location are part of the price. Tell us who lives there. Do not remove occupants to make the house look empty.',
        },
        {
          question: 'Are you a Seattle brokerage?',
          answer:
            'No. KindKey Home Buyers LLC is a principal buyer based in Auburn. We buy the house. We do not represent you as an agent.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/seattle/sell-house-with-tenants', label: 'Seattle houses with tenants' },
        { href: '/areas/seattle', label: 'Seattle city hub' },
        { href: '/areas/tukwila/cash-offer', label: 'Cash offer in Tukwila' },
      ],
    },
    asIs: {
      title: 'Seattle houses KindKey buys without a remodel',
      description:
        'Sell a Seattle house as-is. Older plaster, slopes, rentals, and deferred repairs. KindKey buys directly. Call (206) 519-5463.',
      paragraphs: [
        'Seattle houses that come to KindKey often have older wiring, a kitchen that last changed decades ago, moisture in a daylight basement, or a conversion that never got a final inspection. You do not have to open the walls, pull a Seattle Department of Construction and Inspections permit, or repaint before we look.',
        'Georgetown and the Duwamish edge, a Capitol Hill house with stairs, and a Greenwood rambler can all be sold as they sit. Leave belongings you do not want. Take the papers and the items the family cares about. If someone still lives there, say so.',
        'KindKey is not a contractor and not an agent. Call (206) 519-5463 or request a cash offer and describe the condition in plain words.',
      ],
      faqs: [
        {
          question: 'Do I need a contractor bid before you will make a Seattle offer?',
          answer:
            'No. A bid is useful if you already have one. It is not required. Photos of the roof, the basement, the kitchen, and any posted notice are enough to start.',
        },
        {
          question: 'What if the house has an unpermitted basement apartment?',
          answer:
            'Tell us. KindKey buys houses with unpermitted work and does not require you to legalize it first. The city still controls its own case.',
        },
        {
          question: 'Can you buy a Seattle house with a failed sewer line or an old panel?',
          answer:
            'Yes. Those are condition facts, not reasons to wait. You do not have to repair them so the house will finance for someone else.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/seattle/sell-hoarder-house', label: 'Heavy-repair houses in Seattle' },
        {
          href: '/areas/seattle/sell-house-with-code-violations',
          label: 'Seattle code violations',
        },
        { href: '/areas/burien/sell-house-as-is', label: 'Sell as-is in Burien' },
      ],
    },
  },
  bellevue: {
    sellFast: {
      title: 'A Bellevue closing that does not wait on a remodel',
      description:
        'Sell a Bellevue house on your timeline. Crossroads, Lake Hills, Factoria, and Newport. King County. Call (206) 519-5463.',
      paragraphs: [
        'Bellevue owners call when a job has already moved, a parent’s Lake Hills house is empty, or a Factoria rental has become a second commute from Auburn or Seattle. KindKey buys the house. You choose the closing date. The house does not have to be updated to the standard of the newest building downtown.',
        'Bellevue is in King County. Deeds record with the King County Recorder, not at Bellevue City Hall. Medina, Clyde Hill, and Mercer Island are different cities. If your notice or your keys say Bellevue, stay on this page. If they do not, say the real city.',
        'A fast sale does not stop a foreclosure or close a probate. Most Washington foreclosures are nonjudicial. Ask a Washington attorney about the date on your paper and about RCW 61.34. KindKey does not interpret that statute. Call (206) 519-5463 or use the cash-offer form.',
      ],
      faqs: [
        {
          question: 'Can I sell a Bellevue house before I finish moving?',
          answer:
            'Yes. Pick a closing date that leaves you time to move, or a shorter date if you have already left. KindKey does not require the house to be vacant on the day you ask.',
        },
        {
          question: 'Does downtown Bellevue construction nearby delay my closing?',
          answer:
            'No. Nearby cranes are not your permit. Your closing depends on title, payoff, and the date you choose, not on a project down the street.',
        },
        {
          question:
            'I inherited a Crossroads house and the heirs disagree on timing. Can you still look?',
          answer:
            'We can look. Only the person with authority to sign can sell. Agreement among relatives is not that signature. Ask a Washington attorney. KindKey will not decide who signs.',
        },
        feeFaq,
      ],
      links: [
        {
          href: '/areas/bellevue/sell-inherited-probate-house',
          label: 'Inherited houses in Bellevue',
        },
        { href: '/areas/bellevue/sell-vacant-house', label: 'Vacant houses in Bellevue' },
        { href: '/areas/renton/sell-my-house-fast', label: 'Sell fast in Renton' },
      ],
    },
    cashOffer: {
      title: 'A Bellevue number based on the house, not the skyline',
      description:
        'Get a cash offer on a Bellevue house. KindKey buys as a principal. King County records. Call (206) 519-5463.',
      paragraphs: [
        'A Wilburton house, a Bridle Trails lot, and a rambler in Lake Hills do not support one slogan price. KindKey walks the property, or reviews photos when a walk has to wait, and sends a written offer. You can say no.',
        'The offer is not a promise about Bellevue’s reputation and not a loan. If a mortgage, a lien, or a tax bill is larger than the price, the sale may depend on that creditor. You see the figures on the settlement statement before you are done.',
        'Call (206) 519-5463. KindKey’s office is in Auburn. We are the buyer, not a Bellevue listing brokerage.',
      ],
      faqs: [
        {
          question: 'Will you lowball a Bellevue house because it needs a kitchen?',
          answer:
            'The offer reflects the condition and the location. A tired kitchen is a fact in the number. You can compare it with a listed sale if you want that path. KindKey will not list the house.',
        },
        {
          question: 'Do I pay KindKey a fee to receive the offer?',
          answer:
            'No. Asking for the offer does not create a fee. KindKey does not charge an agent commission or a separate assignment fee to the seller.',
        },
        {
          question: 'Is Eastgate the same offer as Newport?',
          answer:
            'No. Tell us the neighborhood and the condition. Those two parts of Bellevue are not the same house.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/bellevue', label: 'Bellevue city hub' },
        { href: '/areas/seattle/cash-offer', label: 'Cash offer in Seattle' },
        { href: '/areas/bellevue/sell-house-with-tenants', label: 'Bellevue houses with tenants' },
      ],
    },
    asIs: {
      title: 'Bellevue repairs you can skip',
      description:
        'Sell a Bellevue house as-is. Roof, systems, and dated interiors included. KindKey is not an agent. Call (206) 519-5463.',
      paragraphs: [
        'Bellevue houses from the decades around Crossroads and Lake Hills often need a roof, a panel, or a bathroom that a retail buyer will ask to escrow. You do not have to do that work for KindKey. Factoria and Eastgate houses with deferred maintenance are in the same category: sell them as they sit.',
        'An unpermitted addition, a damp crawlspace, or a yard the owner stopped maintaining does not have to be cured before the visit. If the City of Bellevue has a notice open, keep it. The offer does not close the city’s file.',
        'Call (206) 519-5463 or request a cash offer. Describe what failed. You do not need a designer’s scope.',
      ],
      faqs: [
        {
          question: 'Do Bellevue houses have to be updated to sell to you?',
          answer:
            'No. KindKey buys original kitchens, old roofs, and houses with systems problems. Updates are your choice if you keep the house. They are not a requirement to ask for an offer.',
        },
        {
          question: 'What about a Bellevue house with water under the house?',
          answer:
            'Tell us. We buy houses with moisture, drainage issues, and crawlspace problems without a remediation contract signed first.',
        },
        {
          question: 'Can the house be full of furniture?',
          answer: 'Yes. Leave what you do not want. A walkthrough does not require a staged room.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/bellevue/sell-hoarder-house', label: 'Heavy-repair houses in Bellevue' },
        {
          href: '/areas/bellevue/sell-house-with-code-violations',
          label: 'Bellevue code violations',
        },
        { href: '/areas/renton/sell-house-as-is', label: 'Sell as-is in Renton' },
      ],
    },
  },
  shoreline: {
    sellFast: {
      title: 'Selling a Shoreline house without a Seattle listing calendar',
      description:
        'Sell a Shoreline house fast. Richmond Beach, Echo Lake, and North City. King County, not Snohomish. Call (206) 519-5463.',
      paragraphs: [
        'Shoreline sits on Seattle’s north line, and owners sometimes wait because they think the house has to be marketed like a Seattle listing. It does not. KindKey buys it directly. You set the closing date around a move, a job, or an estate, not around weekend open houses on Aurora.',
        'Shoreline incorporated in 1995 and is in King County. Edmonds, the next city north, is in Snohomish County. Do not borrow Edmonds’ offices because that is where you shop. The King County Recorder is the recording office for a Shoreline deed.',
        'If you are also behind on the mortgage, a fast request is not a foreclosure rescue. Most Washington foreclosures are nonjudicial. Talk with a Washington attorney, including about RCW 61.34. Call (206) 519-5463 or use the cash-offer form.',
      ],
      faqs: [
        {
          question: 'Can you close before I move to another county?',
          answer:
            'Yes. People leaving Shoreline for Snohomish County or farther away still sell the house as it is. Pick the date that matches the move.',
        },
        {
          question: 'Does traffic on Aurora change whether you can buy?',
          answer:
            'No. A house on a busy stretch and a house in Richmond Beach are different properties. Both can be bought. The street does not create a repair rule.',
        },
        {
          question: 'Is a Shoreline probate filed in Everett?',
          answer:
            'Not because the city is near Snohomish County. If the person lived in Shoreline, King County is the residence county. Ask an attorney before you file. KindKey will not file.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/shoreline/sell-vacant-house', label: 'Vacant houses in Shoreline' },
        { href: '/areas/seattle/sell-my-house-fast', label: 'Sell fast in Seattle' },
        { href: '/areas/lynnwood/sell-my-house-fast', label: 'Sell fast in Lynnwood' },
      ],
    },
    cashOffer: {
      title: 'A Shoreline cash offer from a buyer, not a north-end listing pitch',
      description:
        'Cash offer for a Shoreline, WA house. Richmond Beach to Ridgecrest. KindKey buys as a principal. Call (206) 519-5463.',
      paragraphs: [
        'KindKey prices the house you have: a Richmond Beach slope, an Echo Lake rambler, a North City house, or a lot in Highland Terrace. The written offer is for that property. You can reject it.',
        'There is no separate Shoreline fee schedule. KindKey does not charge an agent commission or a separate assignment fee. Closing costs are allocated in the contract and can vary. The settlement statement is where you see payoffs and proceeds.',
        'Call (206) 519-5463. The office is in Auburn. The drive does not turn KindKey into your broker.',
      ],
      faqs: [
        {
          question: 'Do you buy east of Aurora and west of it?',
          answer:
            'Yes. Both sides of Shoreline are in the area we buy. Tell us which side, because the lots are different.',
        },
        {
          question: 'How do I start?',
          answer:
            'Use the cash-offer form or call (206) 519-5463. The address, the condition, and whether anyone lives there are the facts that matter first.',
        },
        {
          question: 'Will you tell me what a listed Shoreline house would bring?',
          answer:
            'No. KindKey makes a purchase offer. A licensed broker is who you hire if you want a listing opinion. We will not pretend to be that broker.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/shoreline', label: 'Shoreline city hub' },
        {
          href: '/areas/shoreline/sell-house-with-tenants',
          label: 'Shoreline houses with tenants',
        },
        { href: '/areas/seattle/cash-offer', label: 'Cash offer in Seattle' },
      ],
    },
    asIs: {
      title: 'Mid-century Shoreline houses, sold without the punch list',
      description:
        'Sell a Shoreline house as-is. Roofs, panels, and original kitchens. King County. Call (206) 519-5463.',
      paragraphs: [
        'A lot of Shoreline housing is mid-century. Roofs, galvanized lines, original bathrooms, and additions toward the back yard are ordinary sale facts here. You do not have to modernize them for KindKey.',
        'Richmond Beach houses can have slopes and older foundations. Ridgecrest and Parkwood houses can be plain ramblers with deferred maintenance. Both are as-is sales. If the City of Shoreline posted the property, bring the notice. We still look.',
        'Call (206) 519-5463 or request a cash offer. You do not need a clean garage.',
      ],
      faqs: [
        {
          question: 'Do I have to replace a Shoreline roof first?',
          answer:
            'No. KindKey buys houses with worn or leaking roofs. Tell us what you know. You do not need a roofer’s contract before the offer.',
        },
        {
          question: 'What if the lower level was finished without a permit?',
          answer:
            'Say so. KindKey buys that condition. The city can still have its own case. We do not clear it for you.',
        },
        {
          question: 'Can the yard be overgrown?',
          answer: 'Yes. Vegetation and debris do not have to be hauled away before we visit.',
        },
        feeFaq,
      ],
      links: [
        {
          href: '/areas/shoreline/sell-house-with-code-violations',
          label: 'Shoreline code violations',
        },
        { href: '/areas/shoreline/sell-hoarder-house', label: 'Heavy-repair houses in Shoreline' },
        { href: '/areas/burien/sell-house-as-is', label: 'Sell as-is in Burien' },
      ],
    },
  },
  'maple-valley': {
    sellFast: {
      title: 'Leaving the Maple Valley plateau on a date you pick',
      description:
        'Sell a Maple Valley house on your schedule. Lake Wilderness and SR-169. King County. Call (206) 519-5463.',
      paragraphs: [
        'Maple Valley sales get stuck when the owner has already started a commute somewhere else, or when a house near Lake Wilderness still has a shop full of tools nobody wants to inventory. KindKey buys the property as it sits. You pick the closing date. You do not have to stage a cul-de-sac for a weekend crowd.',
        'The city incorporated in 1997 and is in King County. Hobart and parts of Four Corners are unincorporated King County even when the mailing city says Maple Valley. Tell us the truth about the address so the closing agent starts in the right place.',
        'A job-transfer date and a trustee-sale date are different clocks. Most Washington foreclosures are nonjudicial. Ask an attorney before you count on a closing to solve a notice. KindKey does not interpret RCW 61.34. Call (206) 519-5463 or use the cash-offer form.',
      ],
      faqs: [
        {
          question: 'Can you close around a school-year move?',
          answer:
            'Yes. The date is yours. Some families want to be out before a new school year. Others want extra weeks. Both are ordinary requests.',
        },
        {
          question: 'Do I need to empty the shop first?',
          answer:
            'No. Tools, equipment, and outbuilding contents can stay if you do not want them. Say what is there so the offer includes it.',
        },
        {
          question: 'Is Four Corners automatically inside the city?',
          answer:
            'No. Many parcels around that junction are unincorporated King County. The parcel controls the permit office. KindKey can still look.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/maple-valley/sell-vacant-house', label: 'Vacant houses in Maple Valley' },
        { href: '/areas/covington/sell-my-house-fast', label: 'Sell fast in Covington' },
        { href: '/areas/kent/sell-my-house-fast', label: 'Sell fast in Kent' },
      ],
    },
    cashOffer: {
      title: 'Pricing a Maple Valley house with the lot included',
      description:
        'Cash offer on a Maple Valley house, including larger lots and shops. KindKey is an Auburn principal buyer. Call (206) 519-5463.',
      paragraphs: [
        'KindKey’s offer includes the house and what is on the parcel: a shop, a slope, a septic system, a well, or none of those. We do not certify the system. We do price the property as it is, not as a renovated listing.',
        'Lake Wilderness houses and houses along SR-169 are different. Say which one you have. The written offer is the thing you can compare. There is no fee to ask for it.',
        'Call (206) 519-5463. KindKey is based in Auburn and buys as a principal.',
      ],
      faqs: [
        {
          question: 'Does a septic system get its own discount you invented?',
          answer:
            'No invented schedule. Tell us the system is there, failing, or unknown. The offer reflects the property. You do not have to pump or replace it first.',
        },
        {
          question: 'Can several heirs receive one Maple Valley offer?',
          answer:
            'We can address the offer to the estate or to the people title requires. We will not decide who has authority. Ask an attorney, then request the number.',
        },
        {
          question: 'How soon do I see the figure?',
          answer:
            'Usually within 24 hours of a walkthrough or of photos that show the house and the outbuildings. You can say no.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/maple-valley', label: 'Maple Valley city hub' },
        { href: '/areas/enumclaw/cash-offer', label: 'Cash offer in Enumclaw' },
        {
          href: '/areas/maple-valley/sell-inherited-probate-house',
          label: 'Inherited houses in Maple Valley',
        },
      ],
    },
    asIs: {
      title: 'Plateau houses KindKey buys with the shop still standing',
      description:
        'Sell a Maple Valley house as-is. Septic, shops, and deferred repairs included. King County. Call (206) 519-5463.',
      paragraphs: [
        'Maple Valley properties often include a shop, a slope, or a septic system a retail buyer wants replaced before they will write. You can sell to KindKey without that project. Newer subdivision houses with a single failed system are the same idea: sell the failure, do not fund it first.',
        'Hobart-area mailing addresses that are actually unincorporated King County can still be bought. The county, not the City of Maple Valley, may be the permit office. Bring the letter you have.',
        'Call (206) 519-5463 or request a cash offer. Photos of the house and the outbuildings are enough to start.',
      ],
      faqs: [
        {
          question: 'Do I have to demolish a shop or pull a permit on it?',
          answer:
            'No. KindKey buys properties with shops and outbuildings. You do not have to remove them to get an offer.',
        },
        {
          question: 'What if the well or septic has not been used in years?',
          answer:
            'Say that. We do not require a test or a replacement before we look. We also do not certify that the system works.',
        },
        {
          question: 'Can the house need a roof and still sell?',
          answer: 'Yes. A roof, a deck, or a stopped remodel can stay unfinished.',
        },
        feeFaq,
      ],
      links: [
        {
          href: '/areas/maple-valley/sell-hoarder-house',
          label: 'Heavy-repair houses in Maple Valley',
        },
        { href: '/areas/covington/sell-house-as-is', label: 'Sell as-is in Covington' },
        {
          href: '/areas/maple-valley/sell-house-with-code-violations',
          label: 'Maple Valley code violations',
        },
      ],
    },
  },
  covington: {
    sellFast: {
      title: 'A Covington sale that does not wait on Kent’s market',
      description:
        'Sell a Covington house on your date. Jenkins Creek, Timberlane, Maple Hills. King County. Call (206) 519-5463.',
      paragraphs: [
        'Covington is its own city between Kent and Maple Valley, incorporated in 1997. Owners still describe the house as “by Kent” and then wait on a listing timeline they do not want. KindKey buys the Covington house directly. You pick the closing date.',
        'Deeds record in King County. The City of Covington is the municipal office inside the limits. If you need to be in another state for work, the house does not have to be shown every evening until then.',
        'Call (206) 519-5463 or use the cash-offer form. If a foreclosure notice is in the stack, most Washington cases of this kind are nonjudicial, and your attorney should read it. KindKey does not interpret RCW 61.34.',
      ],
      faqs: [
        {
          question: 'Can you close a Covington house in a couple of weeks?',
          answer:
            'Often, yes. Many direct purchases close in 7 to 14 days. The date is still yours if you need longer to move.',
        },
        {
          question: 'Do I have to list it in Kent because that is the bigger city?',
          answer:
            'No. Covington is not a Kent neighborhood. KindKey buys it here. A listing, if you want one, is a licensed broker’s work, not ours.',
        },
        {
          question: 'What if I already moved and the house is locked?',
          answer:
            'A key, a code, or a neighbor can provide access. You do not have to be on site for a string of showings.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/covington/sell-vacant-house', label: 'Vacant houses in Covington' },
        { href: '/areas/kent/sell-my-house-fast', label: 'Sell fast in Kent' },
        { href: '/areas/maple-valley/sell-my-house-fast', label: 'Sell fast in Maple Valley' },
      ],
    },
    cashOffer: {
      title: 'What goes into a Covington cash offer',
      description:
        'Cash offer for a Covington, WA house from an Auburn principal buyer. No listing. Call (206) 519-5463.',
      paragraphs: [
        'Jenkins Creek, Timberlane, Maple Hills, and the streets around downtown are not the same age of house. KindKey looks at the one you own. The offer is written. You can take it to a family member or an attorney and still say no.',
        'Utility-district sewer, a septic system, or a roof at the end of its life belongs in the description you send. We do not need a utility letter before we can price the house. We also will not pretend to be the district.',
        'Call (206) 519-5463. The Auburn office is a short drive. KindKey is the buyer.',
      ],
      faqs: [
        {
          question: 'Is the offer the same as a retail price?',
          answer:
            'No. A direct purchase reflects condition and the work KindKey takes on. It is not a listed-market estimate. You compare it with whatever else you are considering.',
        },
        {
          question: 'Do tenants change the number?',
          answer:
            'Occupancy is part of the house. Tell us whether people are there and whether they pay. Do not force them out to chase a different price.',
        },
        {
          question: 'Who pays the mortgage off?',
          answer:
            'Payoffs are handled at closing and can reduce proceeds. The closing agent’s settlement statement shows them. KindKey does not promise equity.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/covington', label: 'Covington city hub' },
        { href: '/areas/auburn/cash-offer', label: 'Cash offer in Auburn' },
        {
          href: '/areas/covington/sell-house-with-tenants',
          label: 'Covington houses with tenants',
        },
      ],
    },
    asIs: {
      title: 'Covington houses that do not need a new kitchen first',
      description:
        'Sell a Covington house as-is. Roofs, systems, and original finishes. King County. Call (206) 519-5463.',
      paragraphs: [
        'Covington’s subdivision houses can look ordinary from the street and still have a roof, a crawlspace, or an interior the owner stopped updating. Older houses nearer the original center can need more. KindKey buys both without a contractor on site.',
        'A City of Covington notice about debris, a vehicle, or unpermitted work does not have to be closed first. King County notices on nearby unincorporated parcels are a different header. Bring whichever letter you received.',
        'Call (206) 519-5463 or request a cash offer. Plain photos are enough.',
      ],
      faqs: [
        {
          question: 'Do you buy Covington houses with pet damage or smoked-in rooms?',
          answer:
            'Yes. Interior condition is part of an as-is sale. You do not have to repaint or replace carpet first.',
        },
        {
          question: 'What if the remodel stopped at the drywall?',
          answer: 'We buy stopped remodels. You do not need a final inspection before the offer.',
        },
        {
          question: 'Is a failing septic a reason you will refuse?',
          answer:
            'No. Tell us. You do not have to connect to sewer or replace a drainfield before we look. KindKey does not certify the system.',
        },
        feeFaq,
      ],
      links: [
        {
          href: '/areas/covington/sell-house-with-code-violations',
          label: 'Covington code violations',
        },
        { href: '/areas/maple-valley/sell-house-as-is', label: 'Sell as-is in Maple Valley' },
        { href: '/areas/covington/sell-hoarder-house', label: 'Heavy-repair houses in Covington' },
      ],
    },
  },
  enumclaw: {
    sellFast: {
      title: 'Enumclaw closings for people who already live down the hill',
      description:
        'Sell an Enumclaw house on your timeline. King County plateau, not Buckley. Call (206) 519-5463.',
      paragraphs: [
        'Enumclaw owners are often in Auburn, Kent, or farther away, trying to manage a plateau house from a distance. KindKey is based in Auburn and buys the house. You do not have to drive up for showings. You pick the closing date.',
        'The city is in King County. Buckley, a few minutes east, is in Pierce County. A fast sale still has to record in the correct county. Tell us if you are unsure. The closing agent confirms the parcel. KindKey will not guess from the mountain view.',
        'Call (206) 519-5463 or use the cash-offer form. If the house is also in foreclosure, most Washington deed-of-trust cases are nonjudicial. Ask an attorney. KindKey does not interpret RCW 61.34.',
      ],
      faqs: [
        {
          question: 'Can heirs in Auburn sell an Enumclaw house without moving back?',
          answer:
            'They can request an offer from wherever they live. Authority to sign is a legal question for an attorney and the title company. KindKey will not decide it.',
        },
        {
          question: 'Do I have to wait for better weather on the plateau?',
          answer:
            'No. Rain and a long driveway do not postpone your right to ask for a date. If the house is hard to reach, say so.',
        },
        {
          question: 'Will you list it with an Enumclaw broker if I change my mind?',
          answer:
            'No. KindKey is the buyer. If you want a listing, hire a licensed broker. You can compare that plan with the offer.',
        },
        feeFaq,
      ],
      links: [
        {
          href: '/areas/enumclaw/sell-inherited-probate-house',
          label: 'Inherited houses in Enumclaw',
        },
        { href: '/areas/auburn/sell-my-house-fast', label: 'Sell fast in Auburn' },
        { href: '/areas/maple-valley/sell-my-house-fast', label: 'Sell fast in Maple Valley' },
      ],
    },
    cashOffer: {
      title: 'An Enumclaw offer that includes the outbuildings',
      description:
        'Cash offer on an Enumclaw house, shop, or larger lot. King County. KindKey buys from Auburn. Call (206) 519-5463.',
      paragraphs: [
        'Downtown Enumclaw houses and larger plateau parcels do not get one number. A shop, a barn, a septic system, or a well is part of the property KindKey prices. We do not certify the system and we do not ignore it.',
        'The offer is written and can be declined. Closing costs are in the purchase agreement and can vary. Liens and the mortgage payoff can reduce what you receive. You see that on the settlement statement.',
        'Call (206) 519-5463. KindKey is a principal buyer, not an Enumclaw real estate agent.',
      ],
      faqs: [
        {
          question: 'Do acreage and a small in-town house use the same offer formula?',
          answer:
            'No. Send the address and say whether there is a shop, a well, or extra land. The offer is for that parcel.',
        },
        {
          question: 'What if I do not know whether the parcel is in the city?',
          answer:
            'Say so. Rural Enumclaw mailing addresses can be unincorporated King County. We can still make an offer. Title confirms the line.',
        },
        {
          question: 'Is Buckley included in this offer?',
          answer:
            'This page is for Enumclaw in King County. If the house is in Buckley, it is Pierce County. Call with that address and we will tell you if we can buy it.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/enumclaw', label: 'Enumclaw city hub' },
        { href: '/areas/enumclaw/sell-vacant-house', label: 'Vacant houses in Enumclaw' },
        { href: '/areas/covington/cash-offer', label: 'Cash offer in Covington' },
      ],
    },
    asIs: {
      title: 'Enumclaw condition KindKey will take as it is',
      description:
        'Sell an Enumclaw house as-is, including septic, shops, and heavy contents. King County. Call (206) 519-5463.',
      paragraphs: [
        'Plateau houses collect roofs, wells, drainfields, and shops that a retail buyer wants solved before a showing. You can leave those problems in place. Downtown houses with old systems are the same kind of sale, on a smaller lot.',
        'Contents can stay. A barn does not have to be emptied. If the City of Enumclaw or King County posted a debris or building notice, keep the paper. KindKey is not the city.',
        'Call (206) 519-5463 or request a cash offer. You do not need a farm cleanup crew first.',
      ],
      faqs: [
        {
          question: 'Do I have to pass a septic inspection?',
          answer:
            'No. Tell us the condition you know. KindKey does not require a passed inspection or a new drainfield before an offer.',
        },
        {
          question: 'Can you buy if the house has been used as storage?',
          answer:
            'Yes. Houses full of belongings, including outbuildings, are part of what we buy. Keep what you want and leave the rest.',
        },
        {
          question: 'What about a roof that should have been replaced years ago?',
          answer: 'We buy that roof. You do not have to replace it so the house looks financed.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/enumclaw/sell-hoarder-house', label: 'Heavy-repair houses in Enumclaw' },
        {
          href: '/areas/enumclaw/sell-house-with-code-violations',
          label: 'Enumclaw code violations',
        },
        { href: '/areas/auburn/sell-house-as-is', label: 'Sell as-is in Auburn' },
      ],
    },
  },
  'gig-harbor': {
    sellFast: {
      title: 'Getting a Gig Harbor house closed from the other side of the bridge',
      description:
        'Sell a Gig Harbor house on your date. Pierce County, not Kitsap. Harbor, Artondale, Canterwood. Call (206) 519-5463.',
      paragraphs: [
        'Gig Harbor owners often live in Tacoma, King County, or out of state and do not want to cross the Narrows for showings. KindKey buys the house. You pick the closing date. The bridge is a drive, not a repair requirement.',
        'The city and the wider mailing area are in Pierce County. Deeds record with the Pierce County Auditor in Tacoma, not with the Kitsap County Auditor in Port Orchard. Artondale, Rosedale, and Canterwood may be unincorporated even when the mail says Gig Harbor. Say what you know. Title confirms it.',
        'Call (206) 519-5463 or use the cash-offer form. A foreclosure notice is still your attorney’s document. Most Washington foreclosures are nonjudicial. KindKey does not interpret RCW 61.34.',
      ],
      faqs: [
        {
          question: 'Can you close if I cannot meet you at the house?',
          answer:
            'Yes. Access can be a lockbox, a relative, or a neighbor. Signing is handled with the closing agent. You do not have to host buyers.',
        },
        {
          question: 'Does the ferry or the bridge delay the file?',
          answer:
            'No. Those are how people travel. They do not change the county or add days by rule. The date is the one you choose and title can meet.',
        },
        {
          question: 'Is a Gig Harbor probate opened in Port Orchard?',
          answer:
            'No. Port Orchard is the Kitsap County seat. Gig Harbor is Pierce County. The superior court for a resident is commonly in Tacoma. Ask an attorney. KindKey will not file.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/gig-harbor/sell-vacant-house', label: 'Vacant houses in Gig Harbor' },
        {
          href: '/areas/university-place/sell-my-house-fast',
          label: 'Sell fast in University Place',
        },
        { href: '/areas/tacoma/sell-my-house-fast', label: 'Sell fast in Tacoma' },
      ],
    },
    cashOffer: {
      title: 'A Gig Harbor offer that does not pretend the peninsula is one neighborhood',
      description:
        'Cash offer on a Gig Harbor house. Pierce County records in Tacoma. KindKey is a principal buyer. Call (206) 519-5463.',
      paragraphs: [
        'A harbor house, an Artondale lot, and a Canterwood house are different offers. View, septic, slope, and condition all belong in the description. KindKey sends a written number for the property you actually have.',
        'You owe no commission to KindKey for asking. Closing-cost responsibility is in the purchase agreement and can vary. Do not expect the offer to match a waterfront listing headline. It is a direct purchase.',
        'Call (206) 519-5463. KindKey’s office is in Auburn. We are not a Gig Harbor brokerage.',
      ],
      faqs: [
        {
          question: 'Do you buy only inside the city limits?',
          answer:
            'We buy Gig Harbor city houses and Gig Harbor mailing addresses in unincorporated Pierce County. Tell us which you think you have. The parcel controls the permit office.',
        },
        {
          question: 'Will you price Fox Island as downtown Gig Harbor?',
          answer:
            'No. Fox Island is its own community. If that is the address, say so. We will not relabel it to force it onto this page.',
        },
        {
          question: 'How do payoffs work if I still have a mortgage?',
          answer:
            'The closing agent orders the payoff. It can reduce proceeds. If the price does not cover what must be paid, the sale may depend on the lender. KindKey does not negotiate your loan.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/gig-harbor', label: 'Gig Harbor city hub' },
        { href: '/areas/port-orchard/cash-offer', label: 'Cash offer in Port Orchard' },
        {
          href: '/areas/gig-harbor/sell-inherited-probate-house',
          label: 'Inherited houses in Gig Harbor',
        },
      ],
    },
    asIs: {
      title: 'Gig Harbor houses with septic, slopes, or old systems',
      description:
        'Sell a Gig Harbor house as-is. Septic, slopes, and unfinished repairs. Pierce County. Call (206) 519-5463.',
      paragraphs: [
        'Many Gig Harbor-area lots are on septic. Some have wells. Some sit on slopes toward the harbor. KindKey buys them without a new drainfield, a geotechnical report, or a rebuilt deck. We do not certify the system or the slope.',
        'On-site sewage questions belong with the Tacoma-Pierce County Health Department, not with a Kitsap agency across the bridge. A city notice and a county notice are different. You can still ask for an offer while those files are open.',
        'Call (206) 519-5463 or request a cash offer. You do not have to make the house show-ready for a ferry-commute buyer.',
      ],
      faqs: [
        {
          question: 'Do I have to connect to sewer before you buy?',
          answer:
            'No. If the house is on septic, it can stay on septic for the offer. Replacement and connection are not preconditions.',
        },
        {
          question: 'What if a deck or a bulkhead is failing?',
          answer:
            'Tell us. KindKey buys houses with failed decks and marine-edge repairs unfinished. You do not have to rebuild them first.',
        },
        {
          question: 'Can the house be packed with a lifetime of belongings?',
          answer:
            'Yes. Leave them. Take what the family wants to keep before the closing date you agree to.',
        },
        feeFaq,
      ],
      links: [
        {
          href: '/areas/gig-harbor/sell-hoarder-house',
          label: 'Heavy-repair houses in Gig Harbor',
        },
        {
          href: '/areas/gig-harbor/sell-house-with-code-violations',
          label: 'Gig Harbor code violations',
        },
        {
          href: '/areas/university-place/sell-house-as-is',
          label: 'Sell as-is in University Place',
        },
      ],
    },
  },
  'university-place': {
    sellFast: {
      title: 'University Place closings that are not Tacoma listings',
      description:
        'Sell a University Place house on your date. Day Island, Sunset, Chambers Creek. Pierce County. Call (206) 519-5463.',
      paragraphs: [
        'University Place is its own city, incorporated in 1995, and sellers sometimes lose weeks treating the house as a Tacoma listing. KindKey buys it in University Place. You choose the closing date. Fircrest, next door, is a different city. Say so if that is the address.',
        'The deed records with the Pierce County Auditor in Tacoma. Recording in Tacoma does not make the house a Tacoma code case. The City of University Place is the municipal office inside the limits.',
        'Call (206) 519-5463 or use the cash-offer form. If you are racing a trustee sale, most Washington foreclosures are nonjudicial and your attorney should read the notice. KindKey does not interpret RCW 61.34.',
      ],
      faqs: [
        {
          question: 'Can I sell before I find the next house?',
          answer:
            'Yes. You can pick a later closing date so the move has somewhere to land, or a shorter date if you are already out. The house does not need showings in the meantime.',
        },
        {
          question: 'Do Day Island and Chambers Creek take longer?',
          answer:
            'They are different lots, including slopes near the water. That changes the house. It does not create a longer required timeline.',
        },
        {
          question: 'Will a probate in Tacoma’s courthouse slow the sale by itself?',
          answer:
            'The courthouse is in Tacoma because that is Pierce County Superior Court. The sale still needs the right signer. KindKey will not tell you the case is finished. Ask an attorney.',
        },
        feeFaq,
      ],
      links: [
        {
          href: '/areas/university-place/sell-inherited-probate-house',
          label: 'Inherited houses in University Place',
        },
        { href: '/areas/tacoma/sell-my-house-fast', label: 'Sell fast in Tacoma' },
        { href: '/areas/lakewood/sell-my-house-fast', label: 'Sell fast in Lakewood' },
      ],
    },
    cashOffer: {
      title: 'What KindKey looks at in a University Place offer',
      description:
        'Cash offer for a University Place house. Pierce County. KindKey buys directly from Auburn. Call (206) 519-5463.',
      paragraphs: [
        'Sunset, Day Island, Cirque, Bridgeport, Grandview, and Chambers Creek are the kinds of distinctions that belong in the offer. KindKey does not use a single “west of Tacoma” price.',
        'The figure is a purchase offer from a principal. You can decline it. Payoffs, taxes, and the closing costs written in the contract show up on the settlement statement. KindKey does not charge you an agent commission.',
        'Call (206) 519-5463. Describe who lives there and what condition the house is in.',
      ],
      faqs: [
        {
          question: 'Do you buy houses that back up to Chambers Creek?',
          answer:
            'Yes. Slopes and greenbelt edges are facts about the lot. They do not disqualify the house. Tell us about access and any slide or drainage history you know.',
        },
        {
          question: 'Is the offer free to request?',
          answer:
            'Yes. Calling or using the form does not obligate you to sell and does not create a fee.',
        },
        {
          question: 'Are you going to assign me a University Place agent?',
          answer:
            'No. KindKey is the buyer. We do not assign you a listing agent. If you want representation, hire your own.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/university-place', label: 'University Place city hub' },
        { href: '/areas/gig-harbor/cash-offer', label: 'Cash offer in Gig Harbor' },
        {
          href: '/areas/university-place/sell-house-with-tenants',
          label: 'University Place rentals',
        },
      ],
    },
    asIs: {
      title: 'University Place repairs you can leave undone',
      description:
        'Sell a University Place house as-is. Systems, slopes, and dated interiors. Pierce County. Call (206) 519-5463.',
      paragraphs: [
        'Houses in University Place that owners cannot quite list often have an aging roof, a bathroom from another decade, or a drainage issue on a slope. KindKey buys those without a punch list. Day Island and Sunset houses with older construction are included.',
        'A city notice from University Place stays with that city until the city says otherwise. Selling does not erase it on the day you call. You still do not have to finish the city’s work before we visit.',
        'Call (206) 519-5463 or request a cash offer. Photos of the problem areas help. A contractor bid does not have to come first.',
      ],
      faqs: [
        {
          question: 'Do I need to update the kitchen or bathrooms?',
          answer: 'No. KindKey buys original interiors. Updates are not a condition of the offer.',
        },
        {
          question: 'What if there is moss, a soft deck, or a leaking window wall?',
          answer:
            'Those are as-is conditions. Tell us. You do not have to rebuild the deck or replace the windows first.',
        },
        {
          question: 'Can I sell if Fircrest is the city and I opened this page by mistake?',
          answer:
            'Call anyway and give the address. Fircrest is a different city. KindKey will not pretend it is University Place. We can still say whether we can buy it.',
        },
        feeFaq,
      ],
      links: [
        {
          href: '/areas/university-place/sell-house-with-code-violations',
          label: 'University Place code violations',
        },
        {
          href: '/areas/university-place/sell-hoarder-house',
          label: 'Heavy-repair houses in University Place',
        },
        { href: '/areas/tacoma/sell-house-as-is', label: 'Sell as-is in Tacoma' },
      ],
    },
  },
  'south-hill': {
    sellFast: {
      title: 'South Hill sales without a Puyallup city calendar',
      description:
        'Sell a South Hill house on your date. Unincorporated Pierce County. Meridian and Shaw Road. Call (206) 519-5463.',
      paragraphs: [
        'South Hill is not a city, and it is not downtown Puyallup. Owners lose time when they wait on a valley listing or a fairgrounds week that has nothing to do with the plateau. KindKey buys the house. You pick the closing date. Meridian and Shaw Road are how you describe the location, not a reason to delay.',
        'Pierce County is the government if the parcel is unincorporated. A Puyallup mailing address is common and does not change that. The deed still records with the Pierce County Auditor in Tacoma.',
        'Call (206) 519-5463 or use the cash-offer form. If a trustee sale is also pending, most Washington foreclosures are nonjudicial. Ask an attorney. KindKey does not interpret RCW 61.34.',
      ],
      faqs: [
        {
          question: 'Can I sell a South Hill house that uses a Puyallup mailing address?',
          answer:
            'Yes. Tell us it is South Hill and send the street address. The mailing city and the jurisdiction are not always the same. KindKey can still make an offer.',
        },
        {
          question: 'Do I have to be out before I ask?',
          answer:
            'No. You can close and move on the same timeline, or stay until a later date you choose. Vacant is not a requirement.',
        },
        {
          question: 'Will Pierce County code enforcement pause because a buyer is interested?',
          answer:
            'Do not assume that. Deadlines on a county notice stay yours until the deed transfers and the county says otherwise. KindKey will not appear as your representative.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/south-hill/sell-vacant-house', label: 'Vacant houses on South Hill' },
        { href: '/areas/puyallup/sell-my-house-fast', label: 'Sell fast in Puyallup' },
        { href: '/areas/spanaway/sell-my-house-fast', label: 'Sell fast in Spanaway' },
      ],
    },
    cashOffer: {
      title: 'Pricing South Hill separately from downtown Puyallup',
      description:
        'Cash offer on a South Hill house. Unincorporated Pierce County. KindKey is a principal buyer. Call (206) 519-5463.',
      paragraphs: [
        'A Sunrise or Manorwood house, a lot on 176th, and a house with a shop off Shaw Road are not downtown Puyallup houses. KindKey’s offer uses the plateau property: sewer or septic, the shop, the condition, and the lot. We do not borrow a valley price and rename it.',
        'The offer is written. You can say no. There is no agent commission charged by KindKey. Proceeds can be reduced by payoffs and by the closing costs the contract assigns. The settlement statement shows the math.',
        'Call (206) 519-5463. Say South Hill even if the envelope says Puyallup.',
      ],
      faqs: [
        {
          question: 'Does a septic system on South Hill change the offer?',
          answer:
            'It is part of the property. Tell us if you are on septic, Pierce County sewer, or a well. You do not have to replace a drainfield first. KindKey does not certify the system.',
        },
        {
          question: 'Are Gem Heights and the Meridian corridor the same number?',
          answer: 'No. Send the address. Those are different parts of the plateau.',
        },
        {
          question: 'Do I need a Puyallup agent to request this?',
          answer:
            'No. KindKey is the buyer. You can call directly. Hire a broker only if you want a listing instead.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/south-hill', label: 'South Hill hub' },
        { href: '/areas/bonney-lake/cash-offer', label: 'Cash offer in Bonney Lake' },
        {
          href: '/areas/south-hill/sell-inherited-probate-house',
          label: 'Inherited houses on South Hill',
        },
      ],
    },
    asIs: {
      title: 'South Hill houses with shops, septic, or county notices',
      description:
        'Sell a South Hill house as-is. Septic, shops, and county code notices. Not a City of Puyallup punch list. Call (206) 519-5463.',
      paragraphs: [
        'Plateau houses often have a shop, a larger yard, a septic system, or a roof the owner planned to replace and did not. KindKey buys that condition. You do not have to mow to a listing standard or pump a tank before we look.',
        'If the notice is from Pierce County, it is not automatically a City of Puyallup case. If it is from the city, the parcel may be inside Puyallup. Either way, you can ask for an as-is offer while the file is open. Septic letters are commonly from the Tacoma-Pierce County Health Department.',
        'Call (206) 519-5463 or request a cash offer. Leave the outbuilding contents if you do not want them.',
      ],
      faqs: [
        {
          question: 'Do I have to clear a Pierce County weed or debris case first?',
          answer:
            'No. KindKey buys houses with open county notices. The county still controls the case. Amounts that must be paid can show on the settlement statement.',
        },
        {
          question: 'Can a manufactured home on owned land be sold as-is?',
          answer:
            'Sometimes, if you own what you are selling and title can transfer it. Tell us what is on the parcel. KindKey will not guess that a park lease is a deed.',
        },
        {
          question: 'What if the house needs a roof and the shop needs a door?',
          answer:
            'Both can wait. We buy the property in that condition. You do not need bids first.',
        },
        feeFaq,
      ],
      links: [
        {
          href: '/areas/south-hill/sell-house-with-code-violations',
          label: 'South Hill code violations',
        },
        { href: '/areas/puyallup/sell-house-as-is', label: 'Sell as-is in Puyallup' },
        {
          href: '/areas/south-hill/sell-hoarder-house',
          label: 'Heavy-repair houses on South Hill',
        },
      ],
    },
  },
  everett: {
    sellFast: {
      title: 'Everett closings for a county seat, not a Seattle detour',
      description:
        'Sell an Everett house on your date. Bayside, Riverside, View Ridge, Silver Lake. Snohomish County. Call (206) 519-5463.',
      paragraphs: [
        'Everett sellers sometimes think they have to wait on a King County buyer or a weekend of showings near the bay. KindKey buys the house from Auburn. You pick the date. Downtown, Bayside, Riverside, Delta, View Ridge, and Silver Lake are all Everett conversations, and they are not the same house.',
        'Everett is the Snohomish County seat. The deed records with the Snohomish County Auditor in Everett. Do not send the file to King County because that is where a relative works. Some Silver Lake addresses are unincorporated. Say if you are not sure.',
        'Call (206) 519-5463 or use the cash-offer form. A notice of trustee sale is not paused by a phone call. Most Washington foreclosures are nonjudicial. Ask a Washington attorney, including about RCW 61.34. KindKey does not interpret that law.',
      ],
      faqs: [
        {
          question: 'Can you close while I am on a work rotation or at sea?',
          answer:
            'Yes, if access and signatures can be arranged with the closing agent. You do not have to be in the house for showings. Tell us the constraint and the date you need.',
        },
        {
          question: 'Is seven days realistic in Everett?',
          answer:
            'It is possible when title and payoff cooperate. Many sales close in 7 to 14 days. You can also choose more time. KindKey does not promise a specific day before seeing the file.',
        },
        {
          question: 'Do Mukilteo or Marysville use this page?',
          answer:
            'No. Those are separate cities. Call with that address. This page is Everett and the Everett mailing area that is still the house you mean.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/everett/sell-vacant-house', label: 'Vacant houses in Everett' },
        { href: '/areas/lynnwood/sell-my-house-fast', label: 'Sell fast in Lynnwood' },
        {
          href: '/areas/everett/sell-inherited-probate-house',
          label: 'Inherited houses in Everett',
        },
      ],
    },
    cashOffer: {
      title: 'An Everett offer written from Snohomish County facts',
      description:
        'Cash offer on an Everett house. Snohomish County Auditor records the deed. KindKey buys as a principal. Call (206) 519-5463.',
      paragraphs: [
        'KindKey does not price a Bayside house, a Riverside rental, and a Silver Lake house as one waterfront number. The offer uses the address and the condition. The naval station and the plant explain why people own here. They do not set the price.',
        'You can decline. KindKey does not charge an agent commission or a separate assignment fee. The purchase agreement states closing-cost responsibility, and it can vary. The closing agent’s statement shows payoffs.',
        'Call (206) 519-5463. We are based in Auburn and we buy in Everett directly.',
      ],
      faqs: [
        {
          question: 'Do you buy houses near the port that need work?',
          answer:
            'Yes, when they are houses you can sell. Industrial neighbors are a location fact. Condition is still what we need described. We do not buy a property you cannot deed.',
        },
        {
          question: 'How quickly will I see the number?',
          answer:
            'KindKey aims for a written offer within 24 hours of a walkthrough or of usable photos. Everett’s distance from Auburn does not add a fee.',
        },
        {
          question: 'Are you a Snohomish County brokerage?',
          answer:
            'No. KindKey is a principal buyer. The county auditor records the deed. We do not represent you as an agent.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/everett', label: 'Everett city hub' },
        { href: '/areas/shoreline/cash-offer', label: 'Cash offer in Shoreline' },
        { href: '/areas/everett/sell-house-with-tenants', label: 'Everett houses with tenants' },
      ],
    },
    asIs: {
      title: 'Older Everett houses, sold without a rehab',
      description:
        'Sell an Everett house as-is. Older systems, rentals, and hillside lots. Snohomish County. Call (206) 519-5463.',
      paragraphs: [
        'Everett’s older grid has plaster, small lots, tired electrical, and houses that have been rentals longer than the current owner wanted. View Ridge and the hills add driveways and stairs. KindKey buys that condition. You do not need a City of Everett building permit pulled before the visit.',
        'A city notice and a Snohomish County notice are different, especially toward Silver Lake where mailing cities get loose. Bring the header you have. On-site sewage questions in the county go to the Snohomish County Health Department. KindKey is not that department.',
        'Call (206) 519-5463 or request a cash offer. Leave unwanted furniture.',
      ],
      faqs: [
        {
          question: 'Do I have to update knob-and-tube or an old panel?',
          answer:
            'No. Tell us if you know the wiring is old. You do not have to rewire before an offer. KindKey does not inspect as the city.',
        },
        {
          question: 'What if the rental has damage from the last tenant?',
          answer:
            'That is an as-is sale. You do not have to repaint or replace flooring first. Landlord-tenant questions about deposits and notice still belong with an attorney.',
        },
        {
          question: 'Can the basement be wet?',
          answer:
            'Yes. Moisture, a poor drain, or a partial finish in a basement does not stop an offer.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/everett/sell-hoarder-house', label: 'Heavy-repair houses in Everett' },
        {
          href: '/areas/everett/sell-house-with-code-violations',
          label: 'Everett code violations',
        },
        { href: '/areas/lynnwood/sell-house-as-is', label: 'Sell as-is in Lynnwood' },
      ],
    },
  },
  lynnwood: {
    sellFast: {
      title: 'Lynnwood moves that do not need a month of showings',
      description:
        'Sell a Lynnwood house fast. Alderwood, Perrinville, Meadowdale. Snohomish County. Call (206) 519-5463.',
      paragraphs: [
        'Lynnwood owners sell when a job is already in another city, or when a house near Alderwood has been a rental they drive past and do not want to manage. KindKey buys it. You pick the closing date. The mall is not the house and it is not a reason to wait for a retail season.',
        'Deeds record with the Snohomish County Auditor in Everett. Lynnwood City Hall does not record them. Martha Lake is often unincorporated. If that is your parcel, the county is still Snohomish, and the mailing city may still say Lynnwood.',
        'Call (206) 519-5463 or use the cash-offer form. Foreclosure papers are for your attorney. Most Washington foreclosures are nonjudicial. KindKey does not interpret RCW 61.34.',
      ],
      faqs: [
        {
          question: 'Can I close and start work in another state the same month?',
          answer:
            'Yes. Choose a date that fits the move. KindKey does not need weekend open houses before that date.',
        },
        {
          question: 'Does living south in King County make the sale a King County file?',
          answer:
            'No. If the house is in Lynnwood, Snohomish County is where the deed records, even if you now live in Shoreline or Seattle.',
        },
        {
          question: 'What if the house is vacant and I am afraid of a break-in while it sits?',
          answer:
            'Tell us. A shorter closing is a practical option. Insurance while it is empty is still your question for your insurer. KindKey does not insure it before closing.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/lynnwood/sell-vacant-house', label: 'Vacant houses in Lynnwood' },
        { href: '/areas/everett/sell-my-house-fast', label: 'Sell fast in Everett' },
        { href: '/areas/shoreline/sell-my-house-fast', label: 'Sell fast in Shoreline' },
      ],
    },
    cashOffer: {
      title: 'A Lynnwood cash offer without a King County label',
      description:
        'Cash offer on a Lynnwood house. Snohomish County records in Everett. KindKey buys from Auburn. Call (206) 519-5463.',
      paragraphs: [
        'Perrinville, Meadowdale, Alderwood, and the streets people call downtown Lynnwood are different offers. KindKey writes the number for the house, not for the mall traffic. You can compare it with a listing and still refuse it.',
        'There is no charge to request the offer. KindKey does not charge an agent commission or a separate assignment fee. Closing costs are contractual and can vary. Payoffs reduce proceeds and appear on the settlement statement.',
        'Call (206) 519-5463. KindKey is a principal buyer in Auburn, not a Lynnwood agent.',
      ],
      faqs: [
        {
          question: 'Do you buy houses that hear I-5?',
          answer:
            'Yes. Proximity to the freeway is a location fact. It does not decide whether we can make an offer. Condition and title do.',
        },
        {
          question: 'Is Martha Lake priced as Lynnwood?',
          answer:
            'Only if that is actually the house. Much of Martha Lake is unincorporated Snohomish County. Send the address. We will not relabel the jurisdiction to make the form easier.',
        },
        {
          question: 'When do I get the offer?',
          answer:
            'Typically within 24 hours after KindKey has a walkthrough or clear photos. You are not obligated to take it.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/lynnwood', label: 'Lynnwood city hub' },
        { href: '/areas/everett/cash-offer', label: 'Cash offer in Everett' },
        { href: '/areas/lynnwood/sell-house-with-tenants', label: 'Lynnwood houses with tenants' },
      ],
    },
    asIs: {
      title: 'Lynnwood condition KindKey does not ask you to fix',
      description:
        'Sell a Lynnwood house as-is. Roofs, rentals, and original interiors. Snohomish County. Call (206) 519-5463.',
      paragraphs: [
        'Lynnwood ramblers sell as-is when the roof is tired, the kitchen is original, or a tenant left damage. KindKey buys that. You do not have to hire the crew a retail buyer’s inspector would demand.',
        'City of Lynnwood notices and Snohomish County notices near Martha Lake are different letters. Neither one has to be cured before an offer. KindKey will not attend the hearing.',
        'Call (206) 519-5463 or request a cash offer. A short description of the roof, the systems, and who has a key is enough to start.',
      ],
      faqs: [
        {
          question: 'Do I need new carpet or paint?',
          answer:
            'No. Cosmetic work is optional if you are keeping the house. It is not required to sell to KindKey.',
        },
        {
          question: 'What if the bathroom or kitchen has water damage?',
          answer:
            'Tell us. We buy houses with leaks and old baths without a restoration company under contract.',
        },
        {
          question: 'Can an overgrown yard or a full garage stay?',
          answer: 'Yes. You do not have to haul it away before the visit.',
        },
        feeFaq,
      ],
      links: [
        {
          href: '/areas/lynnwood/sell-house-with-code-violations',
          label: 'Lynnwood code violations',
        },
        { href: '/areas/lynnwood/sell-hoarder-house', label: 'Heavy-repair houses in Lynnwood' },
        { href: '/areas/everett/sell-house-as-is', label: 'Sell as-is in Everett' },
      ],
    },
  },
  olympia: {
    sellFast: {
      title: 'Olympia and Lacey closings without a drive back for showings',
      description:
        'Sell an Olympia or Lacey house on your date. Thurston County. KindKey buys from Auburn. Call (206) 519-5463.',
      paragraphs: [
        'This page covers two cities. Olympia is the Thurston County seat and the capital. Lacey is the separate city to the east, including Hawks Prairie, Tanglewilde, and Marvin Road. Owners in both places call when they already live in Pierce or King County and cannot keep driving south to open a house. KindKey buys it. You pick the closing date.',
        'Both cities record with the Thurston County Auditor in Olympia. Tumwater is a third city. If that is the house, say Tumwater. Do not file a Lacey deed in Tacoma because that is the drive you know.',
        'Call (206) 519-5463 or use the cash-offer form. A foreclosure timeline is still your attorney’s work. Most Washington foreclosures are nonjudicial. KindKey does not interpret RCW 61.34.',
      ],
      faqs: [
        {
          question: 'Do Olympia and Lacey use the same closing process with you?',
          answer:
            'The purchase is the same kind of direct sale. The city hall is not the same. Tell us which city so the closing agent and any notice start in the right place.',
        },
        {
          question: 'Can heirs in Auburn sell an Olympia house without moving there?',
          answer:
            'They can request the offer and close from elsewhere if the right person can sign. KindKey will not decide who has authority. Ask a Washington attorney.',
        },
        {
          question: 'Is the capital calendar a reason to wait?',
          answer:
            'No. Legislative sessions and state-office schedules are not your closing date. You choose the date title can meet.',
        },
        feeFaq,
      ],
      links: [
        {
          href: '/areas/olympia/sell-inherited-probate-house',
          label: 'Inherited houses in Olympia and Lacey',
        },
        { href: '/areas/olympia/sell-vacant-house', label: 'Vacant houses in Olympia and Lacey' },
        { href: '/areas/lakewood/sell-my-house-fast', label: 'Sell fast in Lakewood' },
      ],
    },
    cashOffer: {
      title: 'Separate offers for Olympia houses and Lacey houses',
      description:
        'Cash offer on a house in Olympia or Lacey. Thurston County Auditor in Olympia. Call (206) 519-5463.',
      paragraphs: [
        'A South Capitol bungalow, a West Olympia house, and a Hawks Prairie house in Lacey are not one Thurston County average. KindKey writes the offer for the address. Downtown Olympia and Marvin Road do not share a price.',
        'Asking is free. KindKey does not charge an agent commission or a separate assignment fee. Closing costs are stated in the contract and can vary. The settlement statement shows what you actually receive after payoffs.',
        'Call (206) 519-5463. KindKey is in Auburn. The distance is not a brokerage relationship.',
      ],
      faqs: [
        {
          question: 'Does Lacey get an Olympia price?',
          answer:
            'No. Say Lacey if it is Lacey, and name Hawks Prairie, Tanglewilde, or Marvin Road if that is the area. The offer follows the house.',
        },
        {
          question: 'What if the house might be in Tumwater?',
          answer:
            'Say that. Tumwater is a different city with its own counter. Call with the address. KindKey will not force it onto the Olympia label.',
        },
        {
          question: 'When is the offer ready?',
          answer:
            'Usually within 24 hours of a walkthrough or of photos that show the condition. You can say no after you read it.',
        },
        feeFaq,
      ],
      links: [
        { href: '/areas/olympia', label: 'Olympia and Lacey hub' },
        { href: '/areas/tacoma/cash-offer', label: 'Cash offer in Tacoma' },
        { href: '/areas/olympia/sell-house-with-tenants', label: 'Olympia and Lacey rentals' },
      ],
    },
    asIs: {
      title: 'Olympia and Lacey houses that need work and can still sell',
      description:
        'Sell an Olympia or Lacey house as-is. Older capital houses and Lacey repairs. Thurston County. Call (206) 519-5463.',
      paragraphs: [
        'Older houses near downtown Olympia and the South Capitol neighborhood often have systems and interiors a retail buyer will want replaced. Lacey houses in Hawks Prairie or Tanglewilde can have a different list: a roof, a stopped upgrade, or a septic system on an edge lot. KindKey buys both without the project.',
        'The City of Olympia and the City of Lacey do not share one correction letter. Thurston County Public Health and Social Services is the office for on-site sewage questions. KindKey does not certify a septic system and does not require you to replace it first.',
        'Call (206) 519-5463 or request a cash offer. You do not have to empty the house.',
      ],
      faqs: [
        {
          question: 'Do I have to repair a Lacey roof before you look?',
          answer:
            'No. Roofs in Lacey and older roofs in Olympia can be sold as they are. A bid is optional.',
        },
        {
          question: 'What if Olympia posted the house for a code issue?',
          answer:
            'Keep the notice and tell us. KindKey buys houses with open city cases and does not finish the city’s list for you before the offer.',
        },
        {
          question: 'Can a house on septic in the Lacey area sell as-is?',
          answer:
            'Yes. Say that it is on septic or that you are not sure. You do not have to pass an inspection first.',
        },
        feeFaq,
      ],
      links: [
        {
          href: '/areas/olympia/sell-house-with-code-violations',
          label: 'Code violations in Olympia and Lacey',
        },
        {
          href: '/areas/olympia/sell-hoarder-house',
          label: 'Heavy-repair houses in Olympia and Lacey',
        },
        { href: '/areas/lakewood/sell-house-as-is', label: 'Sell as-is in Lakewood' },
      ],
    },
  },
};

export function getExpansionIntent(
  slug: string,
  intent: 'sell-fast' | 'cash-offer' | 'as-is'
): CityIntentBlock | undefined {
  const local = expansionCityIntent[slug];
  if (!local) return undefined;
  if (intent === 'sell-fast') return local.sellFast;
  if (intent === 'cash-offer') return local.cashOffer;
  return local.asIs;
}
