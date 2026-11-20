import type { CityInfo } from '@/data/cities';

const phone = 'Call (206) 519-5463 or use the cash-offer form. Asking does not obligate a sale.';

export const expansionCities: CityInfo[] = [
  {
    name: 'Seattle',
    slug: 'seattle',
    description:
      'Sell a Seattle house as-is to KindKey, an Auburn principal buyer. Ballard, Beacon Hill, West Seattle, Rainier Valley, and Georgetown. King County. Not an agent.',
    intro:
      'Seattle is an incorporated city and the King County seat. Ballard, Queen Anne, Capitol Hill, Beacon Hill, the Rainier Valley, Columbia City, Georgetown, West Seattle, Delridge, and Greenwood are different neighborhoods, not one housing product. White Center and Skyway use nearby names and are often unincorporated King County, not Seattle. Shoreline, Burien, and Tukwila are separate cities. KindKey Home Buyers LLC buys Seattle houses directly from its office at 640 1st St SW in Auburn. KindKey is a principal buyer, not a real estate agent.',
    countyGroup: 'king',
    countyLabel: 'King County',
    neighborhoods: [
      'Ballard',
      'Queen Anne',
      'Capitol Hill',
      'Beacon Hill',
      'Rainier Valley',
      'Columbia City',
      'Georgetown',
      'West Seattle',
      'Delridge',
      'Greenwood',
    ],
    marketContext:
      'Deeds for Seattle houses record with the King County Recorder. The King County Assessor is the assessment office. Probate for a person who lived in Seattle is commonly a King County Superior Court matter, heard in Seattle or at the Maleng Regional Justice Center in Kent. KindKey will not choose the courthouse or file a petition. Most Washington foreclosures that use a deed of trust are nonjudicial trustee sales rather than court cases. Your notice controls the date. Talk with a Washington attorney. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute. Inside the city, building and code notices come from the Seattle Department of Construction and Inspections, not from a suburban city hall.',
    faq: [
      {
        question: 'Do you buy houses in Seattle?',
        answer: `Yes. KindKey buys houses in Seattle neighborhoods from Ballard and Queen Anne to Beacon Hill, the Rainier Valley, Georgetown, and West Seattle. You do not have to repair the house first. KindKey is the buyer, not a listing broker. ${phone}`,
      },
      {
        question: 'Is a Seattle mailing address always inside the city?',
        answer:
          'No. White Center, Skyway, and some addresses people still call Seattle can be unincorporated King County or a neighboring city. Shoreline, Burien, and Tukwila have their own city halls. The parcel and the letterhead decide. The closing agent confirms the parcel.',
      },
      {
        question: 'Which county records a Seattle deed?',
        answer:
          'King County. The recorder and the assessor are King County offices. A Seattle probate is commonly filed in King County Superior Court. Ask a Washington attorney before you file. KindKey will not file it.',
      },
    ],
    nearby: [
      {
        slug: 'shoreline',
        name: 'Shoreline',
        relation: 'the King County city on Seattle’s north line',
      },
      { slug: 'tukwila', name: 'Tukwila', relation: 'the city along the Duwamish to the south' },
      { slug: 'burien', name: 'Burien', relation: 'the city on the Sound to the southwest' },
    ],
  },
  {
    name: 'Bellevue',
    slug: 'bellevue',
    description:
      'Sell a Bellevue, WA house as-is. Crossroads, Lake Hills, Factoria, Newport, and Wilburton. King County records. KindKey is an Auburn principal buyer.',
    intro:
      'Bellevue is an incorporated King County city on the east side of Lake Washington. Downtown Bellevue, Crossroads, Lake Hills, Factoria, Eastgate, Newport, Somerset, Wilburton, West Bellevue, and Bridle Trails are not the same streets. Medina, Clyde Hill, Hunts Point, Yarrow Point, and Mercer Island are separate cities even when a commute runs through Bellevue. KindKey buys Bellevue houses directly from Auburn. KindKey is not a real estate agent and does not list the house.',
    countyGroup: 'king',
    countyLabel: 'King County',
    neighborhoods: [
      'Downtown Bellevue',
      'Crossroads',
      'Lake Hills',
      'Factoria',
      'Eastgate',
      'Newport',
      'Somerset',
      'Wilburton',
      'West Bellevue',
      'Bridle Trails',
    ],
    marketContext:
      'Bellevue City Hall is not where deeds are recorded. A Bellevue parcel records with the King County Recorder, and the King County Assessor is the assessment office. Probate for a Bellevue resident is commonly a King County Superior Court case. KindKey will not open it. Building and code notices inside the city come from the City of Bellevue. Most Washington residential foreclosures are nonjudicial. The notice, not a neighborhood average, sets the timeline. Ask a Washington attorney, including about RCW 61.34. KindKey does not interpret that law.',
    faq: [
      {
        question: 'Do you buy houses in Bellevue?',
        answer: `Yes. KindKey buys houses in downtown Bellevue, Crossroads, Lake Hills, Factoria, Newport, Wilburton, and the rest of the city. Condition does not have to be updated first. ${phone}`,
      },
      {
        question: 'Is Medina part of Bellevue?',
        answer:
          'No. Medina, Clyde Hill, Hunts Point, Yarrow Point, and Mercer Island are separate cities. Use the city on the tax bill. Bellevue itself is in King County.',
      },
      {
        question: 'Where does a Bellevue probate get filed?',
        answer:
          'If the person lived in Bellevue, the residence county is King County. The superior court is a King County court, not a Bellevue municipal court. Ask a Washington attorney before you file. KindKey does not file probate or give tax advice.',
      },
    ],
    nearby: [
      { slug: 'renton', name: 'Renton', relation: 'the King County city south along I-405' },
      { slug: 'seattle', name: 'Seattle', relation: 'the county seat across Lake Washington' },
      { slug: 'tukwila', name: 'Tukwila', relation: 'the city west of Renton, toward I-5' },
    ],
  },
  {
    name: 'Shoreline',
    slug: 'shoreline',
    description:
      'Sell a Shoreline, WA house as-is. Richmond Beach, Ridgecrest, Echo Lake, and North City. King County, north of Seattle. KindKey buys directly.',
    intro:
      'Shoreline is an incorporated King County city directly north of Seattle. It incorporated in 1995 from unincorporated King County. Richmond Beach, Ridgecrest, Echo Lake, Briarcrest, Highland Terrace, North City, Parkwood, and the Meridian corridor are the local map. Aurora Avenue North is State Route 99 through the city. Edmonds and Lake Forest Park are neighbors. Edmonds is in Snohomish County. Shoreline is not. KindKey buys Shoreline houses as a principal from Auburn and is not a real estate agent.',
    countyGroup: 'king',
    countyLabel: 'King County',
    neighborhoods: [
      'Richmond Beach',
      'Ridgecrest',
      'Echo Lake',
      'Briarcrest',
      'Highland Terrace',
      'North City',
      'Parkwood',
      'Meridian corridor',
    ],
    marketContext:
      'Shoreline parcels record with the King County Recorder. The King County Assessor handles assessment. The City of Shoreline handles municipal code inside the limits. A King County letter can mean the parcel is outside the city even if the mailing city says Shoreline. Probate for a Shoreline resident is commonly filed in King County Superior Court. KindKey will not choose the courthouse. Most deed-of-trust foreclosures in Washington are nonjudicial. Talk with a Washington attorney about the notice and about RCW 61.34. KindKey does not interpret that statute.',
    faq: [
      {
        question: 'Do you buy houses in Shoreline?',
        answer: `Yes. KindKey buys houses in Richmond Beach, Ridgecrest, Echo Lake, North City, and the rest of Shoreline. You do not have to clear a repair list before an offer. ${phone}`,
      },
      {
        question: 'Is Shoreline in Snohomish County?',
        answer:
          'No. Shoreline is in King County. Edmonds, the next city north, is in Snohomish County. Lynnwood is also in Snohomish County. Do not use an Edmonds or Snohomish County checklist for a Shoreline parcel.',
      },
      {
        question: 'Who enforces code in Shoreline?',
        answer:
          'The City of Shoreline, inside the city limits. A King County notice is a different file. Read the header. KindKey is not code enforcement and will not appear at a hearing for you.',
      },
    ],
    nearby: [
      {
        slug: 'seattle',
        name: 'Seattle',
        relation: 'the King County city on Shoreline’s south line',
      },
      {
        slug: 'lynnwood',
        name: 'Lynnwood',
        relation: 'the Snohomish County city north of Edmonds',
      },
      {
        slug: 'burien',
        name: 'Burien',
        relation: 'another King County city between Seattle and the Sound',
      },
    ],
  },
  {
    name: 'Maple Valley',
    slug: 'maple-valley',
    description:
      'Sell a Maple Valley, WA house as-is. Lake Wilderness, the downtown core, and the plateau toward Hobart. King County. KindKey is a principal buyer.',
    intro:
      'Maple Valley is an incorporated King County city on the plateau southeast of Kent, along State Route 169. It incorporated in 1997. Lake Wilderness, the downtown core near the highway, Summit, and Wilderness are local names. Four Corners, where Kent-Kangley Road meets the highway, is a commercial junction, and many nearby houses are unincorporated King County. Hobart is an unincorporated community, not a Maple Valley neighborhood. Black Diamond is its own city. KindKey buys Maple Valley houses directly and is not a real estate agent.',
    countyGroup: 'king',
    countyLabel: 'King County',
    neighborhoods: [
      'Lake Wilderness',
      'Downtown Maple Valley',
      'Summit',
      'Wilderness',
      'SR-169 corridor',
    ],
    marketContext:
      'City parcels record with the King County Recorder. The King County Assessor is the assessment office. The City of Maple Valley handles municipal permits inside the limits. Unincorporated Hobart and Four Corners-area parcels can be King County cases even with a Maple Valley mailing city. Some plateau lots are on public sewer and some use septic. KindKey does not certify a septic system. Probate for a Maple Valley resident is commonly a King County matter. Most Washington foreclosures are nonjudicial. Ask a Washington attorney, and ask about RCW 61.34 if money pressure and a sale are happening together. KindKey does not interpret that statute.',
    faq: [
      {
        question: 'Do you buy houses in Maple Valley?',
        answer: `Yes. KindKey buys houses near Lake Wilderness, along SR-169, and in the city’s neighborhoods. A shop, a slope, or a tired roof does not have to be fixed first. ${phone}`,
      },
      {
        question: 'Is Hobart inside Maple Valley?',
        answer:
          'No. Hobart is an unincorporated King County community. Black Diamond is a separate city. Four Corners includes unincorporated parcels. The tax bill and the title report, not the highway exit, decide.',
      },
      {
        question: 'Are Maple Valley deeds recorded in Pierce County?',
        answer:
          'No. Maple Valley is in King County. Enumclaw, farther south, is also in King County. Buckley, past Enumclaw, is in Pierce County. Do not record a Maple Valley deed with the Pierce County Auditor.',
      },
    ],
    nearby: [
      {
        slug: 'covington',
        name: 'Covington',
        relation: 'the King County city west along Kent-Kangley Road',
      },
      { slug: 'kent', name: 'Kent', relation: 'the valley city northwest on SR-169' },
      { slug: 'enumclaw', name: 'Enumclaw', relation: 'the King County plateau city to the south' },
    ],
  },
  {
    name: 'Covington',
    slug: 'covington',
    description:
      'Sell a Covington, WA house as-is. Jenkins Creek, Timberlane, and the downtown core. King County, between Kent and Maple Valley. KindKey buys directly.',
    intro:
      'Covington is an incorporated King County city between Kent and Maple Valley. It incorporated in 1997. Downtown Covington, Jenkins Creek, Timberlane, and Maple Hills are the residential names people use. The town center is commercial. Kent is west, Maple Valley is east, and Black Diamond is southeast. A Covington mailing address near those lines is not automatically inside the city. KindKey’s Auburn office is a short drive. KindKey buys the house as a principal and is not a real estate agent.',
    countyGroup: 'king',
    countyLabel: 'King County',
    neighborhoods: ['Downtown Covington', 'Jenkins Creek', 'Timberlane', 'Maple Hills'],
    marketContext:
      'Covington is in King County. Deeds record with the King County Recorder, not at city hall and not with Pierce County. The City of Covington writes municipal code notices inside the limits. King County writes county notices. Sewer and water in this part of the plateau are often utility-district questions, and some lots are still on septic. KindKey does not decide which from the city name. Probate for a resident is commonly a King County Superior Court matter. Most deed-of-trust foreclosures in Washington are nonjudicial. Talk with a Washington attorney. RCW 61.34 is a distressed-property statute KindKey does not interpret.',
    faq: [
      {
        question: 'Do you buy houses in Covington?',
        answer: `Yes. KindKey buys houses in Covington, including Jenkins Creek, Timberlane, Maple Hills, and the streets around downtown. Repairs are not a precondition. ${phone}`,
      },
      {
        question: 'Is Covington part of Kent?',
        answer:
          'No. Covington is its own city. Kent is the larger city to the west. Maple Valley is east. Use the city on the parcel, not the store you drive to.',
      },
      {
        question: 'Who handles a Covington code notice?',
        answer:
          'Read the header. The City of Covington handles city cases. A King County header means a different office. KindKey will not close the file or attend the hearing.',
      },
    ],
    nearby: [
      {
        slug: 'maple-valley',
        name: 'Maple Valley',
        relation: 'the plateau city east on Kent-Kangley Road',
      },
      { slug: 'kent', name: 'Kent', relation: 'the Green River valley city to the west' },
      { slug: 'auburn', name: 'Auburn', relation: 'KindKey’s office city, southwest of Covington' },
    ],
  },
  {
    name: 'Enumclaw',
    slug: 'enumclaw',
    description:
      'Sell an Enumclaw, WA house as-is. Downtown, the plateau, and the White River edge. King County, not Buckley. KindKey is an Auburn principal buyer.',
    intro:
      'Enumclaw is an incorporated city in southeast King County, on the plateau near the White River and Mount Rainier. Downtown Enumclaw, the Roosevelt area, Osceola, Newaukum, and the streets toward the White River are the local map. Buckley, the next town east, is in Pierce County and is not an Enumclaw neighborhood. Black Diamond and Maple Valley are north. Some rural “Enumclaw” mailing addresses are unincorporated King County. KindKey buys Enumclaw houses from Auburn as a principal. KindKey is not a real estate agent.',
    countyGroup: 'king',
    countyLabel: 'King County',
    neighborhoods: ['Downtown Enumclaw', 'Roosevelt', 'Osceola', 'Newaukum', 'White River edge'],
    marketContext:
      'The city of Enumclaw is in King County. Deeds record with the King County Recorder. The King County Assessor is the assessment office. Do not send an Enumclaw city deed to the Pierce County Auditor because Buckley is close. The City of Enumclaw handles municipal code inside the limits. A King County notice can mean unincorporated land. Larger lots may have shops, septic systems, or wells. KindKey does not certify a septic system or a well. Probate for a person who lived in Enumclaw is commonly a King County case. Most Washington foreclosures are nonjudicial. Ask a Washington attorney before you rely on a sale, and ask about RCW 61.34. KindKey does not interpret it.',
    faq: [
      {
        question: 'Do you buy houses in Enumclaw?',
        answer: `Yes. KindKey buys houses in downtown Enumclaw and on the plateau, including properties with shops or larger lots. You do not have to clear them out first. ${phone}`,
      },
      {
        question: 'Is Enumclaw in Pierce County?',
        answer:
          'The city of Enumclaw is in King County. Buckley, immediately east, is in Pierce County. A rural mailing address can also be unincorporated King County. The parcel decides which recorder applies.',
      },
      {
        question: 'Do I have to replace a septic system before you will look?',
        answer:
          'No. Tell us if the house is on septic, a private well, or public utilities. KindKey does not certify those systems and does not require a replacement before an offer.',
      },
    ],
    nearby: [
      {
        slug: 'auburn',
        name: 'Auburn',
        relation: 'KindKey’s office city, down the hill to the northwest',
      },
      {
        slug: 'maple-valley',
        name: 'Maple Valley',
        relation: 'the King County city north along the plateau',
      },
      { slug: 'covington', name: 'Covington', relation: 'the city between Maple Valley and Kent' },
    ],
  },
  {
    name: 'Gig Harbor',
    slug: 'gig-harbor',
    description:
      'Sell a Gig Harbor, WA house as-is. The harbor, Artondale, and Canterwood. Pierce County, not Kitsap. KindKey is an Auburn principal buyer.',
    intro:
      'Gig Harbor is an incorporated city in Pierce County, on the west side of the Tacoma Narrows. The harbor and downtown streets are the city core. Artondale, Canterwood, Rosedale, Swede Hill, and many “Gig Harbor” mailing addresses are wholly or partly unincorporated Pierce County. Fox Island is its own community and is not downtown Gig Harbor. Kitsap County is across the bridge. Port Orchard is not this city’s recorder. KindKey buys Gig Harbor houses directly from Auburn and is not a real estate agent.',
    countyGroup: 'pierce',
    countyLabel: 'Pierce County',
    neighborhoods: [
      'Downtown Gig Harbor',
      'Harborview',
      'Artondale',
      'Canterwood',
      'Rosedale',
      'Swede Hill',
    ],
    marketContext:
      'Gig Harbor is in Pierce County, even though the drive to Kitsap County is the Tacoma Narrows Bridge. Deeds record with the Pierce County Auditor in Tacoma. The Pierce County Assessor is the assessment office. The City of Gig Harbor handles municipal matters inside the city limits. Unincorporated Artondale, Rosedale, and similar parcels are Pierce County cases. On-site sewage questions go to the Tacoma-Pierce County Health Department, not to the Kitsap Public Health District. Probate for a person who lived here is commonly a Pierce County Superior Court matter in Tacoma. Most Washington foreclosures are nonjudicial. Talk with a Washington attorney. KindKey does not interpret RCW 61.34.',
    faq: [
      {
        question: 'Do you buy houses in Gig Harbor?',
        answer: `Yes. KindKey buys houses in the harbor city and in the Gig Harbor mailing area of Pierce County, including Artondale and Canterwood when that is the real location. ${phone}`,
      },
      {
        question: 'Is Gig Harbor in Kitsap County?',
        answer:
          'No. Gig Harbor is in Pierce County. Port Orchard and Bremerton are Kitsap County, across the Narrows. Do not record a Gig Harbor deed with the Kitsap County Auditor.',
      },
      {
        question: 'Why does the mailing city not match the permit office?',
        answer:
          'The incorporated city is smaller than the area people call Gig Harbor. A mailing address can be unincorporated Pierce County. Read the letterhead. The closing agent confirms the parcel.',
      },
    ],
    nearby: [
      {
        slug: 'university-place',
        name: 'University Place',
        relation: 'the Pierce County city east of the Narrows',
      },
      { slug: 'tacoma', name: 'Tacoma', relation: 'the Pierce County city across the bridge' },
      {
        slug: 'port-orchard',
        name: 'Port Orchard',
        relation: 'the Kitsap County seat across the Narrows',
      },
    ],
  },
  {
    name: 'University Place',
    slug: 'university-place',
    description:
      'Sell a University Place, WA house as-is. Day Island, Sunset, Chambers Creek, and Cirque. Pierce County. KindKey buys directly.',
    intro:
      'University Place is an incorporated city in Pierce County, between Tacoma and the Sound. It incorporated in 1995. Day Island, Sunset, Chambers Creek, Cirque, Bridgeport, and Grandview are local areas. Fircrest is a separate city tucked against University Place. Steilacoom is south. Tacoma is east. A University Place address is not a Tacoma neighborhood and not a Fircrest parcel. KindKey buys University Place houses as a principal from Auburn and does not list them.',
    countyGroup: 'pierce',
    countyLabel: 'Pierce County',
    neighborhoods: ['Day Island', 'Sunset', 'Chambers Creek', 'Cirque', 'Bridgeport', 'Grandview'],
    marketContext:
      'University Place is entirely in Pierce County. Deeds record with the Pierce County Auditor in Tacoma. The Pierce County Assessor is the assessment office. The City of University Place handles municipal code inside the limits. Fircrest has its own city hall. Probate for a University Place resident is commonly a Pierce County Superior Court case in Tacoma, not a King County case. Most Washington home foreclosures are nonjudicial trustee sales. The notice controls the dates. Ask a Washington attorney, including about RCW 61.34. KindKey does not interpret that statute and is not a real estate agent.',
    faq: [
      {
        question: 'Do you buy houses in University Place?',
        answer: `Yes. KindKey buys houses in Day Island, Sunset, Chambers Creek, Cirque, and the rest of University Place. You do not have to renovate before asking for an offer. ${phone}`,
      },
      {
        question: 'Is University Place part of Tacoma?',
        answer:
          'No. University Place is its own city. Fircrest is also its own city. Tacoma is the larger neighbor to the east. The parcel, not the school conversation, decides the city hall.',
      },
      {
        question: 'Which court handles a University Place probate?',
        answer:
          'If the decedent lived in University Place, Pierce County is the residence county. The superior court sits in Tacoma. Ask a Washington attorney before you file. KindKey will not file.',
      },
    ],
    nearby: [
      { slug: 'tacoma', name: 'Tacoma', relation: 'the Pierce County city on the east line' },
      { slug: 'lakewood', name: 'Lakewood', relation: 'the Pierce County city to the south' },
      {
        slug: 'gig-harbor',
        name: 'Gig Harbor',
        relation: 'the Pierce County city across the Narrows',
      },
    ],
  },
  {
    name: 'South Hill',
    slug: 'south-hill',
    description:
      'Sell a South Hill house as-is. Unincorporated Pierce County along Meridian and Shaw Road. Not the City of Puyallup. KindKey is a principal buyer.',
    intro:
      'South Hill is an unincorporated community in Pierce County, not an incorporated city. There is no City of South Hill. Meridian, which is State Route 161, Shaw Road, 122nd Street, 176th Street, Sunrise, Manorwood, Gem Heights, and Silver Creek are the names people use. Many houses have a Puyallup mailing city even when the parcel is outside the City of Puyallup. Downtown Puyallup is the valley city to the north. Frederickson and Graham are neighboring unincorporated communities. KindKey buys South Hill houses directly and is not a real estate agent.',
    countyGroup: 'pierce',
    countyLabel: 'Unincorporated Pierce County',
    neighborhoods: [
      'Meridian corridor',
      'Shaw Road',
      'Sunrise',
      'Manorwood',
      'Gem Heights',
      '122nd and 176th',
    ],
    marketContext:
      'Pierce County is the local government. Permits for unincorporated South Hill run through the county, not through Puyallup City Hall. Deeds record with the Pierce County Auditor in Tacoma. The Pierce County Assessor is the assessment office. Code letters on unincorporated parcels are Pierce County letters. A City of Puyallup letter means the parcel may actually be inside that city. Read the header. Some lots are on Pierce County sewer, some are on septic, and some use wells. Septic questions go to the Tacoma-Pierce County Health Department. KindKey does not certify a system. Probate for a person who lived here is commonly a Pierce County Superior Court matter. Most Washington foreclosures are nonjudicial. Talk with a Washington attorney about the notice and about RCW 61.34. KindKey does not interpret that law.',
    faq: [
      {
        question: 'Do you buy houses on South Hill?',
        answer: `Yes. KindKey buys houses along Meridian, Shaw Road, Sunrise, and the rest of the South Hill plateau. There is no city clean-out requirement before an offer. ${phone}`,
      },
      {
        question: 'Is South Hill the same as Puyallup?',
        answer:
          'No. South Hill is unincorporated Pierce County. Puyallup is an incorporated city in the valley. A Puyallup mailing address is common on the plateau and does not, by itself, put the house inside the city.',
      },
      {
        question: 'Who do I call about a South Hill code notice?',
        answer:
          'Read the header. Unincorporated South Hill notices come from Pierce County. A City of Puyallup notice is a city file. Septic letters are commonly from the Tacoma-Pierce County Health Department. KindKey is none of those offices.',
      },
    ],
    nearby: [
      {
        slug: 'puyallup',
        name: 'Puyallup',
        relation: 'the incorporated valley city north of the plateau',
      },
      {
        slug: 'spanaway',
        name: 'Spanaway',
        relation: 'the unincorporated community west along the plateau',
      },
      {
        slug: 'bonney-lake',
        name: 'Bonney Lake',
        relation: 'the incorporated plateau city to the east',
      },
    ],
  },
  {
    name: 'Everett',
    slug: 'everett',
    description:
      'Sell an Everett, WA house as-is. Bayside, Riverside, View Ridge, and Silver Lake. Snohomish County seat. KindKey is an Auburn principal buyer.',
    intro:
      'Everett is an incorporated city and the Snohomish County seat, on Port Gardner Bay. Downtown, Bayside, Riverside, Delta, View Ridge, and the streets toward Silver Lake are different parts of the city. The naval station and the Boeing plant shape the commute. They are not neighborhoods of houses. Mukilteo, Marysville, and Lynnwood are separate cities. Some Silver Lake and east-side addresses use an Everett mailing city and sit in unincorporated Snohomish County. KindKey buys Everett houses directly from Auburn. KindKey is not a real estate agent.',
    countyGroup: 'snohomish',
    countyLabel: 'Snohomish County',
    neighborhoods: [
      'Downtown Everett',
      'Bayside',
      'Riverside',
      'Delta',
      'View Ridge',
      'Silver Lake',
    ],
    marketContext:
      'Everett parcels that are inside the city, and unincorporated parcels in the same mailing area, record with the Snohomish County Auditor in Everett. The Snohomish County Assessor is the assessment office. Those offices are not King County offices and not the City of Everett’s permit counter. The City of Everett handles municipal code inside the limits. Snohomish County handles unincorporated land. On-site sewage questions in the county go to the Snohomish County Health Department. Probate for a person who lived in Everett is commonly a Snohomish County Superior Court matter in Everett. Do not open it in King County because the family drives to Seattle. Most Washington foreclosures are nonjudicial. Ask a Washington attorney. KindKey does not interpret RCW 61.34.',
    faq: [
      {
        question: 'Do you buy houses in Everett?',
        answer: `Yes. KindKey buys houses in downtown Everett, Bayside, Riverside, View Ridge, and the Silver Lake area. The drive from Auburn does not add a repair requirement. ${phone}`,
      },
      {
        question: 'Is Everett in King County?',
        answer:
          'No. Everett is the Snohomish County seat. Seattle and Shoreline are King County. Lynnwood is also Snohomish County. The deed records with the Snohomish County Auditor in Everett.',
      },
      {
        question: 'Which court handles an Everett probate?',
        answer:
          'If the decedent lived in Everett, Snohomish County is the residence county. The superior court sits in Everett. Ask a Washington attorney before you file. KindKey will not file or give tax advice.',
      },
    ],
    nearby: [
      { slug: 'lynnwood', name: 'Lynnwood', relation: 'the Snohomish County city south along I-5' },
      { slug: 'shoreline', name: 'Shoreline', relation: 'the King County city south of Edmonds' },
      { slug: 'seattle', name: 'Seattle', relation: 'the King County seat farther south' },
    ],
  },
  {
    name: 'Lynnwood',
    slug: 'lynnwood',
    description:
      'Sell a Lynnwood, WA house as-is. Alderwood, Perrinville, and Meadowdale. Snohomish County. KindKey is an Auburn principal buyer, not an agent.',
    intro:
      'Lynnwood is an incorporated city in southwest Snohomish County, along I-5 between Everett and Shoreline. Alderwood, Perrinville, and Meadowdale are local names. Alderwood Mall is a commercial center, not the house. Martha Lake is largely unincorporated Snohomish County even when the mailing city says Lynnwood or Bothell. Edmonds and Mountlake Terrace are neighboring cities. Edmonds is on the Sound. Shoreline, south of Mountlake Terrace, is in King County. KindKey buys Lynnwood houses as a principal and does not list them. KindKey is not a real estate agent.',
    countyGroup: 'snohomish',
    countyLabel: 'Snohomish County',
    neighborhoods: ['Alderwood', 'Perrinville', 'Meadowdale', 'Downtown Lynnwood'],
    marketContext:
      'Lynnwood does not have its own recording office. Deeds record with the Snohomish County Auditor in Everett. The Snohomish County Assessor is the assessment office. The City of Lynnwood handles municipal code inside the city limits. A Snohomish County letter can mean Martha Lake or another unincorporated parcel. Do not take a Lynnwood file to the King County Recorder because Shoreline is the next county south. Probate for a Lynnwood resident is commonly a Snohomish County Superior Court case in Everett. Most Washington foreclosures are nonjudicial. Talk with a Washington attorney about your notice and about RCW 61.34. KindKey does not interpret that statute.',
    faq: [
      {
        question: 'Do you buy houses in Lynnwood?',
        answer: `Yes. KindKey buys houses in Alderwood, Perrinville, Meadowdale, and the rest of Lynnwood, including houses that need work. ${phone}`,
      },
      {
        question: 'Is Martha Lake inside Lynnwood?',
        answer:
          'Often no. Much of Martha Lake is unincorporated Snohomish County. The mailing city can still say Lynnwood. Read the letterhead and let the closing agent confirm the parcel.',
      },
      {
        question: 'Where is a Lynnwood deed recorded?',
        answer:
          'With the Snohomish County Auditor in Everett. Lynnwood City Hall does not record deeds. King County is the wrong recorder even if you drive through Shoreline to reach Auburn.',
      },
    ],
    nearby: [
      { slug: 'everett', name: 'Everett', relation: 'the Snohomish County seat north on I-5' },
      {
        slug: 'shoreline',
        name: 'Shoreline',
        relation: 'the King County city south of Mountlake Terrace',
      },
      { slug: 'seattle', name: 'Seattle', relation: 'the King County city farther south' },
    ],
  },
  {
    name: 'Olympia',
    slug: 'olympia',
    description:
      'Sell a house in Olympia or Lacey, WA as-is. Thurston County seat and the city next door. KindKey is an Auburn principal buyer, not an agent.',
    intro:
      'Olympia and Lacey are separate incorporated cities in Thurston County. This page covers both. Olympia is the county seat and the state capital: downtown, the South Capitol neighborhood, the Eastside, West Olympia, the Northeast, and Carlyon are not the same streets. Lacey is east of Olympia. Hawks Prairie, Tanglewilde, the Meadows, Marvin Road, and Lacey’s own downtown are Lacey, not Olympia neighborhoods. Tumwater is a third city to the south. If the house is in Tumwater, say so. KindKey still looks at the address. KindKey buys as a principal from Auburn and is not a real estate agent.',
    countyGroup: 'thurston',
    countyLabel: 'Thurston County',
    neighborhoods: [
      'Downtown Olympia',
      'South Capitol',
      'Olympia Eastside',
      'West Olympia',
      'Lacey — Hawks Prairie',
      'Lacey — Tanglewilde',
      'Lacey — Marvin Road',
    ],
    marketContext:
      'Olympia and Lacey parcels record with the Thurston County Auditor in Olympia. The Thurston County Assessor is the assessment office. Those are not Pierce County offices and not King County offices. The City of Olympia and the City of Lacey have different permit counters. Tumwater has a third. Probate for a person who lived in Olympia or Lacey is commonly a Thurston County Superior Court matter in Olympia. Do not file it in Tacoma or Seattle because that is where other family members live. On-site sewage questions go to Thurston County Public Health and Social Services. KindKey does not certify a septic system. Most Washington foreclosures are nonjudicial. Ask a Washington attorney about the notice and about RCW 61.34. KindKey does not interpret that statute.',
    blogTerms: ['Olympia', 'Lacey'],
    faq: [
      {
        question: 'Do you buy houses in Olympia and Lacey?',
        answer: `Yes. KindKey buys houses in Olympia and in Lacey, including Hawks Prairie and the older neighborhoods in both cities. You do not have to repair the house first. ${phone}`,
      },
      {
        question: 'Are Olympia and Lacey the same city?',
        answer:
          'No. They are separate cities in Thurston County. Tumwater is a third city. A code notice follows the city or the county named on the letter. The deed for either city records with the Thurston County Auditor in Olympia.',
      },
      {
        question: 'Which court handles an Olympia or Lacey probate?',
        answer:
          'If the decedent lived in Olympia or Lacey, Thurston County is the residence county. The superior court sits in Olympia. Ask a Washington attorney before you file. KindKey will not file.',
      },
    ],
    nearby: [
      { slug: 'lakewood', name: 'Lakewood', relation: 'the Pierce County city north along I-5' },
      { slug: 'tacoma', name: 'Tacoma', relation: 'the Pierce County city farther north' },
      {
        slug: 'spanaway',
        name: 'Spanaway',
        relation: 'the unincorporated Pierce County community north of the county line',
      },
    ],
  },
];
