export type CountyGroup = 'king' | 'pierce' | 'kitsap' | 'split';

export interface CityInfo {
  name: string;
  slug: string;
  description: string;
  intro: string;
  countyGroup: CountyGroup;
  countyLabel: string;
  neighborhoods: string[];
  marketContext: string;
  faq: Array<{ question: string; answer: string }>;
}

export const cities: CityInfo[] = [
  {
    name: 'Kent',
    slug: 'kent',
    description:
      'Selling your house in Kent, WA? Get a fair cash offer from your local principal buyer. No repairs required before sale.',
    intro: `Kent is a vibrant community in South King County, known for its diverse neighborhoods and strong real estate market. Whether you're dealing with an inherited property, facing foreclosure, or simply need to sell quickly, we understand the local market dynamics and can provide a transparent cash offer for your Kent home.`,
    countyGroup: 'king',
    countyLabel: 'King County',
    neighborhoods: [
      'East Hill',
      'West Hill',
      'Downtown Kent',
      'Kent Station',
      'Panther Lake',
      'Lake Meridian',
    ],
    marketContext:
      'Kent is a large South King County city split by the Green River valley. East Hill, West Hill, and the valley floor are not the same housing. KindKey buys them directly as a principal buyer based in Auburn, not as a real estate agent.',
    faq: [
      {
        question: 'Do you buy houses in Kent?',
        answer:
          'Yes, we specialize in buying houses in Kent and throughout South King County. We understand the local market and can provide a fair cash offer for your property, regardless of its condition.',
      },
      {
        question: 'How quickly can you close in Kent?',
        answer:
          'We can close on your timeline. Typically, we can complete transactions in as little as 7-14 days, but we work with your schedule. No pressure, just flexibility.',
      },
      {
        question: 'What areas of Kent do you serve?',
        answer:
          'We serve all areas of Kent, including East Hill, West Hill, Kent Station, and surrounding neighborhoods. No Kent property is too far.',
      },
    ],
  },
  {
    name: 'Federal Way',
    slug: 'federal-way',
    description:
      'Selling your house in Federal Way, WA? Get a fast, fair cash offer from your local home buyer. No repairs needed.',
    intro: `Federal Way offers a unique blend of urban convenience and natural beauty, with strong neighborhoods and growing property values. If you need to sell your Federal Way home quickly—whether due to relocation, financial needs, or property condition—we're here to help with a straightforward cash offer process.`,
    countyGroup: 'king',
    countyLabel: 'King County',
    neighborhoods: [
      'Twin Lakes',
      'Steel Lake',
      'Dash Point',
      'Marine Hills',
      'Lakota',
      'Star Lake',
    ],
    marketContext:
      'Federal Way sits in King County between SeaTac and the Pierce County line. Lake-area ramblers, Dash Point houses, and west-side houses are different properties. KindKey buys them as-is from its Auburn office.',
    faq: [
      {
        question: 'Do you buy houses in Federal Way?',
        answer:
          'Absolutely. Federal Way is one of our primary areas where we buy houses. We regularly purchase properties throughout the city and can provide competitive cash offers.',
      },
      {
        question: 'What types of properties do you buy in Federal Way?',
        answer: `We buy all types of residential properties in Federal Way: single-family homes, condos, townhouses, and more. Condition doesn't matter - we buy as-is.`,
      },
      {
        question: 'How do you determine the offer for my Federal Way home?',
        answer:
          'We evaluate your property based on its location, condition, and current market value. After a quick walkthrough (virtual or in-person), we provide a transparent, no-obligation cash offer.',
      },
    ],
  },
  {
    name: 'Auburn',
    slug: 'auburn',
    description:
      'Selling your house in Auburn, WA? Get a fast, fair cash offer from your local home buyer. No repairs needed.',
    intro: `Auburn is a thriving community in South King County, known for its family-friendly neighborhoods and convenient location. As a family business based right here in Auburn, we understand the local market and can help you sell your property quickly and hassle-free. Whether you're facing a time-sensitive situation or simply want to avoid the traditional selling process, we're here to provide a transparent cash offer.`,
    countyGroup: 'king',
    countyLabel: 'King County, with some southern parcels in Pierce County',
    neighborhoods: ['Downtown Auburn', 'Lea Hill', 'Lakeland Hills', 'West Valley'],
    marketContext:
      'KindKey is based at 640 1st St SW in downtown Auburn. Most of the city is in King County. A southern portion is in Pierce County, so the parcel decides which county records apply. KindKey is the buyer, not a real estate agent.',
    faq: [
      {
        question: 'Do you buy houses in Auburn?',
        answer:
          'Yes! Auburn is our home base, and we specialize in buying houses throughout the city. We understand the local Auburn market and can provide fair cash offers for properties in any condition.',
      },
      {
        question: 'What neighborhoods in Auburn do you serve?',
        answer:
          'We serve all areas of Auburn, including Lakeland Hills, Lea Hill, and surrounding neighborhoods. No Auburn property is too far for us.',
      },
      {
        question: 'How quickly can you close in Auburn?',
        answer:
          "We can close on your timeline. Typically, we can complete transactions in as little as 7-14 days, but we work with your schedule. Since we're based in Auburn, we can often move even faster for local properties.",
      },
    ],
  },
  {
    name: 'Milton',
    slug: 'milton',
    description:
      'Selling your house in Milton, WA? Get a fast, fair cash offer from your local principal buyer. No repairs required before sale.',
    intro: `Milton sits in both Pierce County and King County. The county line runs through the city, so the parcel decides which records apply. Whether you're dealing with an inherited property, facing foreclosure, or need to relocate quickly, we understand the Milton market and can provide a transparent cash offer for your home.`,
    countyGroup: 'split',
    countyLabel: 'King County and Pierce County',
    neighborhoods: ['King County side of Milton', 'Pierce County side of Milton'],
    marketContext:
      'Milton is the incorporated city the county line runs through. Edgewood, next door, is entirely in Pierce County. Federal Way is King County. Do not borrow either neighbor’s checklist. The closing agent confirms the Milton parcel. KindKey buys as a principal.',
    faq: [
      {
        question: 'Do you buy houses in Milton?',
        answer:
          'Yes, we actively buy houses in Milton, in both the Pierce County and King County parts of the city. We understand the local market dynamics and can provide fair cash offers for properties in any condition.',
      },
      {
        question: 'What types of properties do you buy in Milton?',
        answer:
          "We buy all types of residential properties in Milton: single-family homes, condos, townhouses, and land. Condition doesn't matter - we buy as-is.",
      },
      {
        question: 'How quickly can you close in Milton?',
        answer:
          'We can close on your timeline. Typically, we can complete transactions in as little as 7-14 days, but we work with your schedule. No pressure, just flexibility.',
      },
    ],
  },
  {
    name: 'Tacoma',
    slug: 'tacoma',
    description:
      'Selling your house in Tacoma, WA? Get a fast, fair cash offer from your local principal buyer. No repairs required before sale.',
    intro: `Tacoma is a vibrant city in Pierce County, known for its diverse neighborhoods, waterfront properties, and strong real estate market. Whether you're dealing with an inherited property, facing foreclosure, going through a divorce, or simply need to relocate quickly, we understand the Tacoma market and can provide a transparent cash offer for your home.`,
    countyGroup: 'pierce',
    countyLabel: 'Pierce County',
    neighborhoods: ['North End', 'Stadium', 'Proctor', 'Hilltop', 'Eastside', 'South Tacoma'],
    marketContext:
      'Tacoma is Pierce County’s largest city. Older North End and Hilltop houses are not the same as South Tacoma or Eastside houses. University Place, Fircrest, and Ruston are separate cities. KindKey buys Tacoma houses directly and is not a real estate agent.',
    faq: [
      {
        question: 'Do you buy houses in Tacoma?',
        answer:
          'Absolutely. Tacoma is one of our primary service areas. We regularly purchase properties throughout the city and can provide competitive cash offers for homes in any condition.',
      },
      {
        question: 'What neighborhoods in Tacoma do you serve?',
        answer:
          'We serve all areas of Tacoma, including North End, South Tacoma, Eastside, Hilltop, and surrounding neighborhoods. No Tacoma property is too far.',
      },
      {
        question: 'How do you determine the offer for my Tacoma home?',
        answer:
          'We evaluate your property based on its location, condition, and current market value. After a quick walkthrough (virtual or in-person), we provide a transparent, no-obligation cash offer.',
      },
    ],
  },
  {
    name: 'Edgewood',
    slug: 'edgewood',
    description:
      'Sell a house in Edgewood, WA as-is to KindKey, a principal buyer in Auburn. Pierce County city. North Hill, Jovita, and the Meridian corridor. No repairs required before sale.',
    intro: `Edgewood is an incorporated city in Pierce County, between Milton, Fife, Puyallup, and Sumner. It incorporated on February 28, 1996. Most residents live on North Hill: single-family houses, longer driveways, and shops set back from the street. A smaller share of the city sits at the base of the hill in the Puyallup River valley. Meridian Avenue E, which is State Route 161, and Jovita Boulevard are the everyday corridors. Jovita is a local name, not a separate city. KindKey Home Buyers LLC buys Edgewood houses directly from its office at 640 1st St SW in Auburn. KindKey is a principal buyer, not a real estate agent.`,
    countyGroup: 'pierce',
    countyLabel: 'Pierce County',
    neighborhoods: ['North Hill', 'Jovita', 'Meridian corridor', 'Puyallup River valley'],
    marketContext:
      'Edgewood lots are often larger than Tacoma city lots. Many older North Hill and Jovita properties use a septic system, and some use a private well. Others are on public sewer and water. The parcel decides. Shops, barns, and outbuildings are part of a normal acreage sale. City building questions go to Edgewood City Hall at 10440 Dom Calata Way E. On-site sewage questions in Pierce County go to the Tacoma-Pierce County Health Department. Parts of the city lie inside the Puyallup Indian Reservation boundary, which is a title question KindKey does not interpret. Deeds record with the Pierce County Auditor.',
    faq: [
      {
        question: 'Do you buy houses in Edgewood?',
        answer:
          'Yes. KindKey buys houses throughout Edgewood, including North Hill, Jovita, the Meridian corridor, and the valley floor. Condition does not have to be fixed first. KindKey is the buyer, not a listing broker.',
      },
      {
        question: 'Is Edgewood in King County?',
        answer:
          'No. Edgewood is entirely in Pierce County. Milton, the city next door, can fall in King County or Pierce County. The closing agent confirms the Edgewood parcel.',
      },
      {
        question: 'Do you buy Edgewood houses with septic or well problems?',
        answer:
          'Yes. Tell us if the house is on septic, a private well, public sewer, or public water. KindKey does not certify a septic system or a well, and you do not have to replace a failing system before an offer.',
      },
      {
        question: 'How quickly can you close in Edgewood?',
        answer:
          'We can close on your timeline, including as little as 7 days when title allows it. A court date, a trustee sale, or a city deadline is a separate clock. Asking for an offer does not pause those.',
      },
    ],
  },
  {
    name: 'Puyallup',
    slug: 'puyallup',
    description:
      'Selling your house in Puyallup, WA? Get a fast, fair cash offer from your local principal buyer. No repairs required before sale.',
    intro: `Puyallup is a thriving community in Pierce County, known for its strong neighborhoods, excellent schools, and growing property values. Whether you're dealing with an inherited property, facing foreclosure, or need to relocate quickly, we understand the Puyallup market and can provide a transparent cash offer for your home.`,
    countyGroup: 'pierce',
    countyLabel: 'Pierce County',
    neighborhoods: ['Downtown Puyallup', 'South Hill', 'Shaw Road corridor'],
    marketContext:
      'Downtown Puyallup is a city grid in the valley. Many South Hill addresses use a Puyallup mailing city even when the parcel is unincorporated Pierce County. Sumner and Edgewood are neighboring cities. The title report, not the fairgrounds, says which jurisdiction applies.',
    faq: [
      {
        question: 'Do you buy houses in Puyallup?',
        answer:
          'Yes, we actively buy houses in Puyallup and throughout Pierce County. We understand the local market dynamics and can provide fair cash offers for properties in any condition.',
      },
      {
        question: 'What neighborhoods in Puyallup do you serve?',
        answer:
          'We serve all areas of Puyallup, including downtown, South Hill, and surrounding neighborhoods. No Puyallup property is too far.',
      },
      {
        question: 'How do you determine the offer for my Puyallup home?',
        answer:
          'We evaluate your property based on its location, condition, and current market value. After a quick walkthrough (virtual or in-person), we provide a transparent, no-obligation cash offer.',
      },
    ],
  },
  {
    name: 'Renton',
    slug: 'renton',
    description:
      'Sell a Renton, WA house as-is for cash. KindKey buys in downtown, the Highlands, Kennydale, and the hills. King County principal buyer based in Auburn.',
    intro:
      'Renton is an incorporated King County city at the south end of Lake Washington, north of Kent. Downtown, the Highlands, Kennydale, Talbot Hill, Benson Hill, Cascade, and Renton Hill are the local areas. Fairwood uses many Renton mailing addresses and is largely unincorporated King County. The Cedar River runs through the valley. KindKey buys Renton houses directly and is not a real estate agent.',
    countyGroup: 'king',
    countyLabel: 'King County',
    neighborhoods: [
      'Downtown Renton',
      'The Highlands',
      'Kennydale',
      'Talbot Hill',
      'Benson Hill',
      'Fairwood',
    ],
    marketContext:
      'A Kennydale house near the lake, a Highlands rambler, and a Fairwood address that is actually unincorporated King County are different files. Both city and county parcels record in King County, but they do not share one building counter. KindKey is based in Auburn, south of Renton, and buys the house as it sits.',
    faq: [
      {
        question: 'Do you buy houses in Renton?',
        answer:
          'Yes. KindKey buys houses in Renton and in nearby King County addresses people still call Renton, including Fairwood. Send the street address. The closing agent confirms the parcel.',
      },
      {
        question: 'Is Fairwood the same as the City of Renton?',
        answer:
          'Often no. Many Fairwood houses have a Renton mailing address and sit in unincorporated King County. The letterhead on a permit or code notice is the first place to look.',
      },
      {
        question: 'How fast can you close in Renton?',
        answer:
          'We can close in as little as 7 days when title allows it, or later if you need the time. Asking for an offer does not obligate you to sell.',
      },
    ],
  },
  {
    name: 'Burien',
    slug: 'burien',
    description:
      'Sell a Burien, WA house as-is. KindKey buys in downtown Burien, Seahurst, and Three Tree Point. King County principal buyer, not a real estate agent.',
    intro:
      'Burien is an incorporated King County city on Puget Sound, between Seattle and SeaTac. Downtown Burien, Seahurst, Three Tree Point, Lake Burien, Gregory Heights, and Shorewood are local areas. Boulevard Park sits on the north edge, where mailing names and city limits do not always match. KindKey buys Burien houses directly from its Auburn office.',
    countyGroup: 'king',
    countyLabel: 'King County',
    neighborhoods: [
      'Downtown Burien',
      'Seahurst',
      'Three Tree Point',
      'Lake Burien',
      'Gregory Heights',
      'Shorewood',
    ],
    marketContext:
      'Older Sound-side houses and inland ramblers are different repairs. Three Tree Point is part of Burien. Normandy Park is a separate city. Airport noise affects some streets and not others. It does not decide whether KindKey can make an offer.',
    faq: [
      {
        question: 'Do you buy houses in Burien?',
        answer:
          'Yes. KindKey buys houses throughout Burien, including Seahurst, Three Tree Point, and downtown. Condition does not have to be updated first.',
      },
      {
        question: 'Is Three Tree Point a separate city?',
        answer:
          'No. Three Tree Point is an area of Burien. Normandy Park, next door, is its own city. Use the address if you are not sure.',
      },
      {
        question: 'Are you a real estate agent in Burien?',
        answer:
          'No. KindKey Home Buyers LLC is a principal buyer based in Auburn. We buy the house. We do not list it.',
      },
    ],
  },
  {
    name: 'SeaTac',
    slug: 'seatac',
    description:
      'Sell a SeaTac, WA house as-is for a cash offer. Angle Lake, McMicken Heights, and Riverton. KindKey is an Auburn principal buyer.',
    intro:
      'SeaTac is an incorporated King County city. The city name is one word. The airport is the dominant neighbor, not a neighborhood you own. Angle Lake, McMicken Heights, Riverton, and Bow Lake are residential areas. Tukwila, Burien, and Des Moines are separate cities on the edges. KindKey buys SeaTac houses as-is.',
    countyGroup: 'king',
    countyLabel: 'King County',
    neighborhoods: ['Angle Lake', 'McMicken Heights', 'Riverton', 'Bow Lake'],
    marketContext:
      'The City of SeaTac and the Port of Seattle are not the same entity. Houses near International Boulevard and quieter residential streets should not be priced as if they were the terminal. Deeds record in King County. KindKey is the buyer, not a listing brokerage.',
    faq: [
      {
        question: 'Do you buy houses in SeaTac?',
        answer:
          'Yes. KindKey buys houses in SeaTac, including Angle Lake, McMicken Heights, Riverton, and Bow Lake. You do not have to repair the house first.',
      },
      {
        question: 'Is SeaTac the same as the airport?',
        answer:
          'No. Sea-Tac Airport sits in the city, and the Port of Seattle is not City Hall. A city code notice is not an airport document. Read the header.',
      },
      {
        question: 'My address might be Tukwila. Does that matter?',
        answer:
          'Yes. Tukwila, Burien, and Des Moines are different cities with different permit counters. Send the street address and the closing agent will confirm the parcel.',
      },
    ],
  },
  {
    name: 'Des Moines',
    slug: 'des-moines',
    description:
      'Sell a Des Moines, WA house as-is. Marina, Redondo, North Hill, and Zenith. KindKey is a King County principal buyer based in Auburn.',
    intro:
      'Des Moines is an incorporated King County city on Puget Sound, between SeaTac and Federal Way. This is Des Moines, Washington, not Iowa. The marina district, Redondo, Zenith, North Hill, Woodmont, and Pacific Ridge are the local areas. Saltwater State Park is on the water. KindKey buys these houses directly and is not a real estate agent.',
    countyGroup: 'king',
    countyLabel: 'King County',
    neighborhoods: [
      'Marina District',
      'Redondo',
      'Zenith',
      'North Hill',
      'Woodmont',
      'Pacific Ridge',
    ],
    marketContext:
      'A marina or Redondo house and an inland North Hill house are different properties. North Hill in Des Moines is not North Hill in Edgewood. Those are different counties. Federal Way is the city to the south. The mailing address is the start. Title confirms the parcel.',
    faq: [
      {
        question: 'Do you buy houses in Des Moines, Washington?',
        answer:
          'Yes. KindKey buys houses in Des Moines, WA, including Redondo, the marina area, Zenith, and North Hill. You do not need to repair the house before an offer.',
      },
      {
        question: 'Is Redondo part of Federal Way?',
        answer:
          'Redondo is in Des Moines. Federal Way is the neighboring city. If you are on the line, send the address rather than guessing from the beach you use.',
      },
      {
        question: 'How fast can a Des Moines sale close?',
        answer:
          'KindKey can close in as little as 7 days when title allows it, or on a later date you choose with the closing agent. There is no obligation to accept an offer.',
      },
    ],
  },
  {
    name: 'Tukwila',
    slug: 'tukwila',
    description:
      'Sell a Tukwila, WA house as-is. Foster, Allentown, and Riverton residential pockets. KindKey is an Auburn principal buyer, not a real estate agent.',
    intro:
      'Tukwila is an incorporated King County city where I-5, I-405, the Duwamish River, and the Green River meet. Foster, Allentown, Riverton, Thorndyke, and Cascade View are residential pockets. Southcenter is the commercial district, not a neighborhood of houses. KindKey buys the house itself, as-is.',
    countyGroup: 'king',
    countyLabel: 'King County',
    neighborhoods: ['Foster', 'Allentown', 'Riverton', 'Thorndyke', 'Cascade View'],
    marketContext:
      'Residential Tukwila is smaller than the mall map. Older valley houses and houses on the hills above the river are the properties owners actually sell. Some nearby mailing addresses are unincorporated King County or SeaTac. The parcel decides. KindKey does not list the house.',
    faq: [
      {
        question: 'Do you buy houses in Tukwila?',
        answer:
          'Yes. KindKey buys residential property in Tukwila, including Foster, Allentown, Riverton, and Thorndyke. Southcenter frontage is not required, and repairs are not required before an offer.',
      },
      {
        question: 'Is a Tukwila house a King County recording?',
        answer:
          'City of Tukwila parcels record in King County. A nearby address with a Tukwila mailing city can still be unincorporated King County or SeaTac. The closing agent confirms it.',
      },
      {
        question: 'Are you a brokerage that covers Southcenter?',
        answer:
          'No. KindKey is a principal buyer based in Auburn. We purchase houses directly. We are not a real estate agent or brokerage.',
      },
    ],
  },
  {
    name: 'Sumner',
    slug: 'sumner',
    description:
      'Sell a Sumner, WA house as-is for cash. Downtown and the valley, Pierce County. KindKey is an Auburn principal buyer.',
    intro:
      'Sumner is an incorporated Pierce County city in the White River and Puyallup River valley, between Auburn, Pacific, Puyallup, and the hill up to Bonney Lake. Downtown Sumner is a small historic grid. East Sumner and the valley edges mix houses with larger lots and shops. KindKey’s Auburn office is a short drive away. KindKey buys the house and does not list it.',
    countyGroup: 'pierce',
    countyLabel: 'Pierce County',
    neighborhoods: ['Downtown Sumner', 'East Sumner', 'Valley edge'],
    marketContext:
      'Sumner deeds record with the Pierce County Auditor. A Sumner probate is commonly a Pierce County matter, not a King County filing in Kent, even though Auburn is close. Bonney Lake is the plateau city up SR-410, not a Sumner neighborhood. Pacific and Edgewood are separate cities.',
    faq: [
      {
        question: 'Do you buy houses in Sumner?',
        answer:
          'Yes. KindKey buys downtown Sumner houses and houses on the valley edges, including properties with shops or deferred repairs. You do not have to clean the property out first.',
      },
      {
        question: 'Is Sumner in King County because it is next to Auburn?',
        answer:
          'No. Sumner is in Pierce County. Most of Auburn is in King County, and a southern slice of Auburn is in Pierce County. Your notice and the title report name the county for your parcel.',
      },
      {
        question: 'Can you close quickly in Sumner?',
        answer:
          'We can close in as little as 7 days when title and the payoff allow it. A trustee date or a probate step is a separate clock. An offer does not pause either one.',
      },
    ],
  },
  {
    name: 'Bonney Lake',
    slug: 'bonney-lake',
    description:
      'Sell a Bonney Lake, WA house as-is. Plateau, Falling Water, and Lake Tapps-area parcels. KindKey is a Pierce County principal buyer based in Auburn.',
    intro:
      'Bonney Lake is an incorporated Pierce County city on the plateau above Sumner, along SR-410. Downtown, Falling Water, Mountain Creek, and parts of Tehaleh are associated with the city. Much of the Lake Tapps shoreline, and parts of Tehaleh, are unincorporated Pierce County even when people say Bonney Lake. KindKey buys the house that matches the parcel.',
    countyGroup: 'pierce',
    countyLabel: 'Pierce County',
    neighborhoods: [
      'Downtown Bonney Lake',
      'Falling Water',
      'Mountain Creek',
      'Tehaleh',
      'Lake Tapps',
    ],
    marketContext:
      'Newer plateau subdivisions and older lots near the original town are different houses. Some older and outlying lots use septic or a well. On-site sewage questions in Pierce County go to the Tacoma-Pierce County Health Department, not automatically to Bonney Lake City Hall. KindKey does not certify a septic system. Deeds record with the Pierce County Auditor.',
    faq: [
      {
        question: 'Do you buy houses in Bonney Lake?',
        answer:
          'Yes. KindKey buys inside the City of Bonney Lake and looks at nearby plateau addresses people call Bonney Lake, including Lake Tapps and parts of Tehaleh. Tell us the street address.',
      },
      {
        question: 'Is Lake Tapps inside the city?',
        answer:
          'Not always. Lake Tapps is a lake and a community name. Many shoreline parcels are unincorporated Pierce County. The mailing city is not the city limit.',
      },
      {
        question: 'Do I need to fix a septic system before you visit?',
        answer:
          'No. Tell us if the house is on septic, a well, or public utilities. KindKey buys as-is and does not require a passed septic inspection first.',
      },
    ],
  },
  {
    name: 'Spanaway',
    slug: 'spanaway',
    description:
      'Sell a Spanaway, WA house as-is. Unincorporated Pierce County, near Parkland and Joint Base Lewis-McChord. KindKey is a principal buyer.',
    intro:
      'Spanaway is an unincorporated community in Pierce County, not an incorporated city. There is no City of Spanaway. Spanaway Lake, the Pacific Avenue corridor along SR-7, and the streets between Parkland and Joint Base Lewis-McChord are the local map. Lots are often larger than in Tacoma, with shops and outbuildings. KindKey buys these properties directly.',
    countyGroup: 'pierce',
    countyLabel: 'Unincorporated Pierce County',
    neighborhoods: ['Spanaway Lake', 'Pacific Avenue corridor', 'Parkland edge'],
    marketContext:
      'Pierce County is the local government. Permits run through the county, and deeds record with the Pierce County Auditor. Many properties use septic systems, and some use wells. Septic letters are commonly from the Tacoma-Pierce County Health Department. KindKey does not certify a system and does not invent a city hall Spanaway does not have.',
    faq: [
      {
        question: 'Do you buy houses in Spanaway?',
        answer:
          'Yes. Spanaway does not need to be an incorporated city for KindKey to buy the house. Send the address. Repairs, clean-out, and a septic replacement are not required before an offer.',
      },
      {
        question: 'Who handles permits in Spanaway?',
        answer:
          'Pierce County, because Spanaway is unincorporated. A city letter would mean the parcel is somewhere else. Read the header. KindKey is not the county.',
      },
      {
        question: 'Is Spanaway the same as Lakewood?',
        answer:
          'No. Lakewood is an incorporated city to the west. Parkland is the neighboring unincorporated community. Use the address on the tax bill.',
      },
    ],
  },
  {
    name: 'Lakewood',
    slug: 'lakewood',
    description:
      'Sell a Lakewood, WA house as-is. Tillicum, Lakeview, Oakbrook, and the lakes. Pierce County principal buyer based in Auburn.',
    intro:
      'Lakewood is an incorporated Pierce County city south of Tacoma, along I-5. Tillicum, Lakeview, Oakbrook, Springbrook, Lake City, and Bridgeport are neighborhoods. American Lake, Gravelly Lake, and Lake Steilacoom are part of the geography. Joint Base Lewis-McChord is next door. Steilacoom and University Place are separate cities. KindKey buys Lakewood houses as-is.',
    countyGroup: 'pierce',
    countyLabel: 'Pierce County',
    neighborhoods: [
      'Tillicum',
      'Lakeview',
      'Oakbrook',
      'Springbrook',
      'Lake City',
      'Gravelly Lake',
    ],
    marketContext:
      'Lakewood is more urban than Spanaway. A house on one of the lakes and a Tillicum house are not the same offer. The city handles municipal code inside the limits. A Pierce County notice may mean an unincorporated parcel with a Lakewood mailing address. Deeds record with the Pierce County Auditor. KindKey is not a real estate agent.',
    faq: [
      {
        question: 'Do you buy houses in Lakewood?',
        answer:
          'Yes. KindKey buys houses in Tillicum, Lakeview, Oakbrook, Springbrook, Lake City, and the rest of Lakewood. You do not have to repair the house or move tenants out first.',
      },
      {
        question: 'Is Joint Base Lewis-McChord the same as Lakewood?',
        answer:
          'No. The base is next door. KindKey buys private houses you have the right to sell. The base is not city hall, and a base address is not automatically a Lakewood parcel.',
      },
      {
        question: 'How quickly can you close in Lakewood?',
        answer:
          'We can close in as little as 7 days when title allows it, or later if you need time. An offer is not an obligation, and it does not stop a trustee or a court date.',
      },
    ],
  },
  {
    name: 'Fife',
    slug: 'fife',
    description:
      'Sell a Fife, WA house as-is. Pierce County valley city between Tacoma and Milton. KindKey is an Auburn principal buyer.',
    intro:
      'Fife is a small incorporated Pierce County city in the Puyallup River valley along I-5, between Tacoma and the Milton and Edgewood side of the valley. Much of the city is commercial. Residential streets are a smaller part of the map. The Port of Tacoma is adjacent, not the same city. KindKey buys Fife houses directly.',
    countyGroup: 'pierce',
    countyLabel: 'Pierce County',
    neighborhoods: ['Valley residential streets', 'I-5 corridor edge'],
    marketContext:
      'Fife houses are often older valley houses, not North Hill acreage in Edgewood. Parcels along this valley can sit near Tacoma, Milton, or Puyallup Tribe land. The title report confirms the jurisdiction. KindKey does not interpret tribal jurisdiction. Fife is Pierce County. Milton is the neighbor that can be either county.',
    faq: [
      {
        question: 'Do you buy houses in Fife?',
        answer:
          'Yes. KindKey buys residential property in Fife even though much of the city is commercial. Condition and access are part of the offer. Repairs are not required first.',
      },
      {
        question: 'Is Fife in King County?',
        answer:
          'No. Fife is in Pierce County. Milton, next door, can be King County or Pierce County. Still confirm the parcel, because the valley lines are tight.',
      },
      {
        question: 'Are you a real estate agent serving the Port of Tacoma?',
        answer:
          'No. KindKey is a principal home buyer based in Auburn. The Port is not our client, and we do not list houses.',
      },
    ],
  },
  {
    name: 'Port Orchard',
    slug: 'port-orchard',
    description:
      'Sell a Port Orchard, WA house as-is. Kitsap County seat. Downtown, Annapolis, Mile Hill, and McCormick Woods. KindKey buys directly.',
    intro:
      'Port Orchard is an incorporated city and the Kitsap County seat, on Sinclair Inlet. Downtown and Bay Street, Annapolis, Mile Hill, the Bethel and Sedgwick corridors, and McCormick Woods are the areas people name. Manchester and Southworth are nearby unincorporated communities, not city neighborhoods. KindKey is based in Auburn and buys Port Orchard houses directly. KindKey is not a real estate agent.',
    countyGroup: 'kitsap',
    countyLabel: 'Kitsap County',
    neighborhoods: ['Downtown', 'Annapolis', 'Mile Hill', 'Bethel', 'Sedgwick', 'McCormick Woods'],
    marketContext:
      'Deeds record with the Kitsap County Auditor in Port Orchard. Probate for a person who lived here is a Kitsap County matter, not a Pierce County case in Tacoma and not a King County case in Seattle, even if the owner used the ferry. The City of Port Orchard handles municipal code inside the limits. On-site sewage in Kitsap County is handled by the Kitsap Public Health District. Some edge lots use septic. KindKey does not certify a system.',
    faq: [
      {
        question: 'Do you buy houses in Port Orchard?',
        answer:
          'Yes. KindKey buys houses in downtown Port Orchard, Annapolis, Mile Hill, McCormick Woods, and the rest of the city. You do not have to repair the house before an offer.',
      },
      {
        question: 'Is a Port Orchard probate filed in Tacoma or Seattle?',
        answer:
          'If the decedent lived in Port Orchard, Kitsap County is the residence county. The superior court sits in Port Orchard. Ask a Washington attorney before you file. KindKey will not file for you.',
      },
      {
        question: 'Do you buy houses that are on septic?',
        answer:
          'Yes. Tell us if the house is on septic or public sewer. KindKey does not inspect or certify the system, and a failing system does not stop an offer.',
      },
    ],
  },
  {
    name: 'Bremerton',
    slug: 'bremerton',
    description:
      'Sell a Bremerton, WA house as-is. Downtown, Manette, Charleston, and Kitsap Lake. Kitsap County principal buyer based in Auburn.',
    intro:
      'Bremerton is an incorporated Kitsap County city on Sinclair Inlet. Downtown, Charleston, Manette, East Bremerton, West Bremerton, Kitsap Lake, and Rocky Point are local areas. The shipyard shapes the city. Navy Yard City and Gorst are unincorporated neighbors, not Bremerton neighborhoods. KindKey buys private houses you have the right to sell.',
    countyGroup: 'kitsap',
    countyLabel: 'Kitsap County',
    neighborhoods: [
      'Downtown Bremerton',
      'Manette',
      'Charleston',
      'East Bremerton',
      'West Bremerton',
      'Kitsap Lake',
    ],
    marketContext:
      'Recording is with the Kitsap County Auditor in Port Orchard, the county seat, not with Pierce County. A City of Bremerton code notice is not a Kitsap County notice and not a Port Orchard notice. Older houses on steep streets are a common reason owners want a direct sale instead of a listing. KindKey is a principal buyer based in Auburn.',
    faq: [
      {
        question: 'Do you buy houses in Bremerton?',
        answer:
          'Yes. KindKey buys houses in downtown Bremerton, Manette, Charleston, and both the east and west sides. Repairs are not required before an offer.',
      },
      {
        question: 'Is Manette part of Bremerton?',
        answer:
          'Yes. Manette is a Bremerton neighborhood across the Manette Bridge. Port Orchard is a different city across the inlet. Gorst and Navy Yard City are unincorporated.',
      },
      {
        question: 'Can heirs in King County sell a Bremerton house to you?',
        answer:
          'Yes, once the person with authority can sign. KindKey does not decide who that is. Ask a Washington attorney, especially if the sale is a probate or is under financial pressure.',
      },
    ],
  },
  {
    name: 'Silverdale',
    slug: 'silverdale',
    description:
      'Sell a Silverdale, WA house as-is. Unincorporated Kitsap County. Old Town, Ridgetop, and Clear Creek. KindKey is a principal buyer.',
    intro:
      'Silverdale is an unincorporated community in Central Kitsap, not an incorporated city. There is no City of Silverdale. Old Town, the Bucklin Hill and Kitsap Mall area, Ridgetop, and Clear Creek are local names. Dyes Inlet is the water. Kitsap County is the local government. KindKey buys Silverdale houses directly from Auburn.',
    countyGroup: 'kitsap',
    countyLabel: 'Unincorporated Kitsap County',
    neighborhoods: ['Old Town Silverdale', 'Bucklin Hill', 'Ridgetop', 'Clear Creek'],
    marketContext:
      'Building permits go through Kitsap County. Deeds record with the Kitsap County Auditor in Port Orchard. Some lots are on public sewer and some older or outlying lots use septic. Septic questions go to the Kitsap Public Health District, which is not a city building counter. Bremerton and Poulsbo are the incorporated cities on either side. KindKey is not a real estate agent.',
    faq: [
      {
        question: 'Do you buy houses in Silverdale?',
        answer:
          'Yes. Silverdale does not have a city hall, and KindKey still buys houses there. Send the address. You do not have to repair the house first.',
      },
      {
        question: 'Who writes code notices in Silverdale?',
        answer:
          'Kitsap County, because Silverdale is unincorporated. A septic letter is commonly from the Kitsap Public Health District. Read the header. KindKey is neither office.',
      },
      {
        question: 'Is Silverdale part of Bremerton?',
        answer:
          'No. Bremerton is a separate incorporated city to the south. Poulsbo is a separate city to the north. Silverdale is the unincorporated community between them.',
      },
    ],
  },
  {
    name: 'Poulsbo',
    slug: 'poulsbo',
    description:
      'Sell a Poulsbo, WA house as-is. North Kitsap, Liberty Bay, and the Viking Avenue corridor. KindKey is an Auburn principal buyer.',
    intro:
      'Poulsbo is an incorporated city in North Kitsap, on Liberty Bay. Downtown along Front Street, Viking Avenue, Noll Road, and the Olhava area are the local map. Kingston and the Kingston ferry are nearby and are not the city of Poulsbo. KindKey buys Poulsbo houses directly. The drive from Auburn is long. We still look at the house.',
    countyGroup: 'kitsap',
    countyLabel: 'Kitsap County',
    neighborhoods: ['Downtown Poulsbo', 'Front Street', 'Viking Avenue', 'Noll Road', 'Olhava'],
    marketContext:
      'The city handles municipal code inside the limits. Recording and superior court are Kitsap County functions based in Port Orchard, not in Poulsbo City Hall. Older bay houses and newer hill subdivisions are different properties. Some edge lots use septic. On-site sewage questions go to the Kitsap Public Health District. KindKey does not list the house and does not certify a septic system.',
    faq: [
      {
        question: 'Do you buy houses in Poulsbo?',
        answer:
          'Yes. KindKey buys houses in downtown Poulsbo and in the newer areas along Viking Avenue and Noll Road. Repairs and a clean-out are not required before an offer.',
      },
      {
        question: 'Is the Kingston ferry in Poulsbo?',
        answer:
          'No. Kingston is a nearby community. Poulsbo is on Liberty Bay. Bainbridge Island is a different city. Use the city on the parcel, not the ferry you drive to.',
      },
      {
        question: 'Which court handles a Poulsbo probate?',
        answer:
          'If the decedent lived in Poulsbo, Kitsap County is the residence county. The superior court sits in Port Orchard. Ask a Washington attorney before you file. KindKey will not file.',
      },
    ],
  },
];

const countyGroupLabels: Record<CountyGroup, string> = {
  king: 'King County',
  pierce: 'Pierce County',
  split: 'King and Pierce Counties',
  kitsap: 'Kitsap County',
};

export function citiesByCounty() {
  const order: CountyGroup[] = ['king', 'pierce', 'split', 'kitsap'];
  return order
    .map((group) => ({
      group,
      label: countyGroupLabels[group],
      cities: cities.filter((city) => city.countyGroup === group),
    }))
    .filter((group) => group.cities.length > 0);
}

export function getCityBySlug(slug: string): CityInfo | undefined {
  return cities.find((city) => city.slug === slug);
}
