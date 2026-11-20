import type { DistressedCityProfile } from '@/data/cityDistressedPages';

export const expansionCityProfiles: DistressedCityProfile[] = [
  {
    slug: 'seattle',
    name: 'Seattle',
    where:
      'Seattle is an incorporated city and the King County seat. Ballard, Queen Anne, Capitol Hill, Beacon Hill, the Rainier Valley, Columbia City, Georgetown, West Seattle, Delridge, and Greenwood do not share one lot size or one era of construction. White Center and Skyway are often unincorporated King County. Shoreline, Burien, and Tukwila are separate cities.',
    housing:
      'A Ballard bungalow, a Beacon Hill house with a daylight basement, a Rainier Valley rental, and a West Seattle house on a slope are different properties. Older plaster, converted attics, and steep shared driveways show up often. KindKey does not price them as if they were downtown towers or suburban cul-de-sacs.',
    jurisdiction:
      'Seattle parcels record with the King County Recorder. The King County Assessor is the assessment office. Probate for a person who lived in Seattle is commonly a King County Superior Court matter, in Seattle or at the Maleng Regional Justice Center in Kent. KindKey will not choose the courthouse or file the petition. Most Washington foreclosures that use a deed of trust are nonjudicial. Ask a Washington attorney, including about RCW 61.34. KindKey does not interpret that statute.',
    codeOffice:
      'Inside the city, code and building notices come from the Seattle Department of Construction and Inspections. A King County letter means the parcel may not be in the city. Read the header before you treat a White Center or Skyway problem as a Seattle city case. KindKey is not the city and will not appear at a hearing for you.',
    market:
      'Owners call about a parent’s house on Beacon Hill that still has the original kitchen, a rental in the Rainier Valley they no longer want to staff, or a West Seattle house that needs more work than they will fund. KindKey buys the house from its Auburn office. The distance does not add a repair requirement.',
    extra:
      'Georgetown and the Duwamish industrial edge are not Ballard. If the address is actually Tukwila or Burien, use that city’s page. The closing agent confirms the parcel either way.',
    nearby: {
      slug: 'shoreline',
      name: 'Shoreline',
      relation: 'the King County city on Seattle’s north line',
    },
  },
  {
    slug: 'bellevue',
    name: 'Bellevue',
    where:
      'Bellevue is an incorporated King County city east of Lake Washington. Downtown, Crossroads, Lake Hills, Factoria, Eastgate, Newport, Somerset, Wilburton, West Bellevue, and Bridle Trails are the local areas. Medina, Clyde Hill, Hunts Point, Yarrow Point, and Mercer Island are separate cities.',
    housing:
      'Lake Hills and Crossroads ramblers are not downtown Bellevue housing, and a Factoria or Eastgate house is not a Newport view lot. Some houses are updated. Others still have the roof, panel, or addition the last owner stopped. KindKey looks at the house in front of us.',
    jurisdiction:
      'Bellevue City Hall does not record deeds. Bellevue parcels record with the King County Recorder. The King County Assessor is the assessment office. Probate for a Bellevue resident is commonly a King County Superior Court case, not a Bellevue municipal case. KindKey will not file it. Most deed-of-trust foreclosures in Washington are nonjudicial. Talk with a Washington attorney about the notice and about RCW 61.34. KindKey does not interpret that law.',
    codeOffice:
      'The City of Bellevue writes municipal building and code notices inside the city. A King County notice is a different agency. KindKey will not tell you the case closes because you requested an offer.',
    market:
      'Sellers include heirs who live out of state, owners leaving a Crossroads or Lake Hills house, and people who do not want showings in a house that needs work. The drive from Auburn is a routine trip up I-405 or SR-167.',
    extra:
      'Do not describe a Medina or Mercer Island house as Bellevue. The city line changes the permit counter. Title still confirms the parcel.',
    nearby: { slug: 'renton', name: 'Renton', relation: 'the King County city south along I-405' },
  },
  {
    slug: 'shoreline',
    name: 'Shoreline',
    where:
      'Shoreline is an incorporated King County city on Seattle’s north line. It incorporated in 1995. Richmond Beach, Ridgecrest, Echo Lake, Briarcrest, Highland Terrace, North City, Parkwood, and the Meridian corridor are the local names. Aurora Avenue North is State Route 99. Edmonds, next north, is in Snohomish County.',
    housing:
      'The stock is mostly mid-century houses and later ramblers, with older houses toward Richmond Beach and the ridges. A house on a slope toward the Sound is not the same as a lot east of Aurora. KindKey does not use one Shoreline average.',
    jurisdiction:
      'Shoreline is in King County, not Snohomish County. Deeds record with the King County Recorder. The King County Assessor is the assessment office. Probate for a Shoreline resident is commonly a King County matter. Do not open it in Everett because Edmonds is the next city. KindKey will not file. Most Washington foreclosures are nonjudicial. Ask a Washington attorney about RCW 61.34. KindKey does not interpret it.',
    codeOffice:
      'The City of Shoreline handles code inside the limits. King County handles unincorporated land. If the header does not say Shoreline, do not use the city’s process by default. KindKey is not code enforcement.',
    market:
      'Owners sell inherited houses near Echo Lake, rentals along the Aurora corridor, and houses they cannot keep up while living somewhere else. KindKey buys them directly from Auburn.',
    extra:
      'Lake Forest Park and Edmonds are neighbors with their own governments. Edmonds is Snohomish County. A Shoreline checklist does not travel across that line.',
    nearby: {
      slug: 'seattle',
      name: 'Seattle',
      relation: 'the King County city on Shoreline’s south line',
    },
  },
  {
    slug: 'maple-valley',
    name: 'Maple Valley',
    where:
      'Maple Valley is an incorporated King County city along State Route 169. It incorporated in 1997. Lake Wilderness, the downtown core, Summit, and Wilderness are local names. Four Corners is a highway junction with unincorporated King County around it. Hobart is unincorporated. Black Diamond is a separate city.',
    housing:
      'Newer subdivision houses and older plateau houses sit in the same mailing area. Some lots have shops, slopes, or septic systems. A Lake Wilderness house and a house on a well toward Hobart are not the same offer. KindKey does not certify a septic system or a well.',
    jurisdiction:
      'Maple Valley parcels inside the city record with the King County Recorder. The King County Assessor is the assessment office. Unincorporated Hobart and parts of Four Corners are still King County, but the permit counter may be the county rather than the city. Probate for a resident is commonly a King County Superior Court matter. KindKey will not file it. Most Washington foreclosures are nonjudicial. Talk with a Washington attorney. RCW 61.34 is a statute KindKey does not interpret.',
    codeOffice:
      'The City of Maple Valley writes city notices inside the limits. A King County notice can mean the parcel is outside the city even if the mail says Maple Valley. On-site sewage is not a city slogan. Read the header.',
    market:
      'Families sell after a job move off the plateau, or when an older house needs more repair than they will do. The drive from KindKey’s Auburn office is a normal southeast King County trip.',
    extra:
      'Covington is west. Kent is down SR-169. Enumclaw is farther south and is still King County. Buckley is the Pierce County town beyond Enumclaw. Do not mix those recorders.',
    nearby: {
      slug: 'covington',
      name: 'Covington',
      relation: 'the King County city west along Kent-Kangley Road',
    },
  },
  {
    slug: 'covington',
    name: 'Covington',
    where:
      'Covington is an incorporated King County city between Kent and Maple Valley. It incorporated in 1997. Downtown, Jenkins Creek, Timberlane, and Maple Hills are the residential names. The town center is commercial. Black Diamond is southeast and is its own city.',
    housing:
      'Many Covington houses are later ramblers and two-story houses on subdivision lots. Older houses closer to the original crossroads, and lots that still use septic, are a different product. KindKey does not treat the town center as the house you are selling.',
    jurisdiction:
      'Covington is in King County. Deeds record with the King County Recorder. The King County Assessor is the assessment office. The city handles municipal code inside the limits. Sewer and water are often a utility-district question, separate from the city letter. Probate for a Covington resident is commonly a King County case. KindKey will not open it. Most deed-of-trust foreclosures in Washington are nonjudicial. Ask a Washington attorney about the notice and about RCW 61.34. KindKey does not interpret that law.',
    codeOffice:
      'Read whether the notice is from the City of Covington or from King County. Those are different counters. KindKey will not negotiate the citation or promise that a fine disappears when you call.',
    market:
      'Owners sell rentals they no longer want to drive to, inherited houses, and houses where a roof or a system makes showings a poor fit. Auburn is a short drive southwest.',
    extra:
      'Kent is west, across a city line that shoppers ignore and permit offices do not. Maple Valley is east. Use the city on the tax bill.',
    nearby: {
      slug: 'maple-valley',
      name: 'Maple Valley',
      relation: 'the plateau city east on Kent-Kangley Road',
    },
  },
  {
    slug: 'enumclaw',
    name: 'Enumclaw',
    where:
      'Enumclaw is an incorporated city in southeast King County, near the White River. Downtown, Roosevelt, Osceola, Newaukum, and the edge toward the river are the local map. Buckley, the next town east, is in Pierce County. Black Diamond and Maple Valley are north. Some rural mailing addresses are unincorporated King County.',
    housing:
      'Downtown houses sit closer to the street. Plateau and edge properties are often larger, with shops, outbuildings, septic systems, or wells. A small in-town house and a property with a barn are not one offer. KindKey does not certify a septic system or a well, and you do not have to replace either before a visit.',
    jurisdiction:
      'The city of Enumclaw is in King County. Deeds record with the King County Recorder, not with the Pierce County Auditor in Tacoma. The King County Assessor is the assessment office. Do not switch counties because Buckley is a few minutes east. Probate for a person who lived in Enumclaw is commonly a King County matter. KindKey will not file it. Most Washington foreclosures are nonjudicial. Talk with a Washington attorney. KindKey does not interpret RCW 61.34.',
    codeOffice:
      'The City of Enumclaw handles municipal notices inside the limits. A King County letter can mean unincorporated land with an Enumclaw mailing city. KindKey is neither office.',
    market:
      'Sellers include heirs who live in Auburn or farther north, owners of larger lots who are done with the maintenance, and people leaving a downtown house that needs work. KindKey buys from its Auburn office, down the hill.',
    extra:
      'If the tax bill says Buckley, start with Pierce County facts, not this page. The purchase is still a direct sale to KindKey when we can buy it.',
    nearby: {
      slug: 'auburn',
      name: 'Auburn',
      relation: 'KindKey’s office city, northwest of the plateau',
    },
  },
  {
    slug: 'gig-harbor',
    name: 'Gig Harbor',
    where:
      'Gig Harbor is an incorporated Pierce County city west of the Tacoma Narrows. The harbor and downtown are the city core. Artondale, Canterwood, Rosedale, Swede Hill, and much of the wider mailing area are wholly or partly unincorporated Pierce County. Fox Island is a separate community. Port Orchard is across the bridge, in Kitsap County.',
    housing:
      'Harbor houses, older in-town streets, and larger lots in Artondale or Canterwood are different properties. Some use public sewer. Some use septic. View lots and inland lots should not be described as the same house. KindKey does not certify a septic system.',
    jurisdiction:
      'Gig Harbor is in Pierce County, not Kitsap County. Deeds record with the Pierce County Auditor in Tacoma. The Pierce County Assessor is the assessment office. Do not record the deed in Port Orchard because the Narrows Bridge is the drive you know. The City of Gig Harbor handles municipal matters inside the city. Unincorporated parcels are Pierce County cases. Probate for a resident is commonly a Pierce County Superior Court matter in Tacoma. Most Washington foreclosures are nonjudicial. Ask a Washington attorney about RCW 61.34. KindKey does not interpret it.',
    codeOffice:
      'A City of Gig Harbor notice and a Pierce County notice are different documents. On-site sewage questions go to the Tacoma-Pierce County Health Department, not the Kitsap Public Health District. Read the header. KindKey will not attend the hearing.',
    market:
      'Owners sell when they are leaving the peninsula, settling an estate from Tacoma or King County, or done managing a house that needs work. KindKey buys from Auburn. The bridge does not add a clean-out requirement.',
    extra:
      'University Place and Tacoma are east of the Narrows and are still Pierce County. They are not Gig Harbor neighborhoods. Say which side of the bridge the house is on.',
    nearby: {
      slug: 'university-place',
      name: 'University Place',
      relation: 'the Pierce County city east of the Narrows',
    },
  },
  {
    slug: 'university-place',
    name: 'University Place',
    where:
      'University Place is an incorporated Pierce County city between Tacoma and Puget Sound. It incorporated in 1995. Day Island, Sunset, Chambers Creek, Cirque, Bridgeport, and Grandview are local areas. Fircrest is a separate city. Steilacoom is south. Tacoma is east.',
    housing:
      'The city is mostly single-family houses, from older streets near Day Island and Sunset to later houses inland. A Chambers Creek slope and a flat inland lot are not interchangeable. KindKey does not need the house to be show-ready.',
    jurisdiction:
      'University Place is in Pierce County. Deeds record with the Pierce County Auditor in Tacoma. The Pierce County Assessor is the assessment office. The City of University Place is the municipal government inside the limits. Fircrest’s city hall is not this city’s counter. Probate for a resident is commonly a Pierce County Superior Court case in Tacoma. KindKey will not file it. Most Washington foreclosures are nonjudicial. Talk with a Washington attorney. KindKey does not interpret RCW 61.34.',
    codeOffice:
      'City of University Place notices stay with that city. A Tacoma notice or a Pierce County notice means a different jurisdiction. Do not assume the larger neighbor’s process applies. KindKey is not code enforcement.',
    market:
      'Owners sell inherited houses, houses that need systems work, and rentals they no longer want to manage from another county. The drive from Auburn is a normal Pierce County trip.',
    extra:
      'A “UP” mailing habit does not make Fircrest or Tacoma into University Place. Use the city on the parcel.',
    nearby: { slug: 'tacoma', name: 'Tacoma', relation: 'the Pierce County city on the east line' },
  },
  {
    slug: 'south-hill',
    name: 'South Hill',
    where:
      'South Hill is an unincorporated community in Pierce County, not a city. There is no City of South Hill. Meridian, which is State Route 161, Shaw Road, 122nd, 176th, Sunrise, Manorwood, Gem Heights, and Silver Creek are the local names. Many addresses use a Puyallup mailing city. Downtown Puyallup is the incorporated city in the valley. Frederickson and Graham are other unincorporated communities.',
    housing:
      'Plateau houses range from older ramblers to later subdivisions. Lots are often larger than downtown Puyallup lots. Some have shops. Some are on Pierce County sewer, some on septic, and some use wells. The parcel tells you which. KindKey does not certify a septic system or a well.',
    jurisdiction:
      'Pierce County is the local government for unincorporated South Hill. Deeds record with the Pierce County Auditor in Tacoma. The Pierce County Assessor is the assessment office. A house inside the City of Puyallup is a different permit counter even though both are Pierce County. Probate for a person who lived on the plateau is commonly a Pierce County Superior Court matter. KindKey will not open the case. Most Washington foreclosures are nonjudicial. Ask a Washington attorney about the notice and about RCW 61.34. KindKey does not interpret that statute.',
    codeOffice:
      'Unincorporated South Hill code letters are Pierce County letters, not City of Puyallup letters. If the header says Puyallup, the parcel may be inside the city. Septic letters are commonly from the Tacoma-Pierce County Health Department. Read the header before you pick an office.',
    market:
      'Families sell after a transfer, an estate, or a rental that became the whole job. The drive from Auburn is a familiar trip toward SR-512 and Meridian. You do not have to wait on a fairgrounds calendar. That schedule belongs to the valley city.',
    extra:
      'Bonney Lake is the incorporated city east of the plateau. Spanaway is the unincorporated community to the west. Do not use either city’s or community’s paperwork for a South Hill parcel without reading your own.',
    nearby: {
      slug: 'puyallup',
      name: 'Puyallup',
      relation: 'the incorporated city in the valley to the north',
    },
  },
  {
    slug: 'everett',
    name: 'Everett',
    where:
      'Everett is an incorporated city and the Snohomish County seat, on Port Gardner Bay. Downtown, Bayside, Riverside, Delta, View Ridge, and Silver Lake are different parts of the city. The naval station and the Boeing plant are employers, not residential neighborhoods. Mukilteo, Marysville, and Lynnwood are separate cities. Some east-side and Silver Lake addresses are unincorporated Snohomish County.',
    housing:
      'Older houses near the downtown grid and the bay differ from mid-century houses inland and from later houses toward Silver Lake. Hills, small lots, and houses that have been rentals for years are common. KindKey does not price a Bayside house as if it were a cul-de-sac in another city.',
    jurisdiction:
      'Everett is in Snohomish County, not King County. Deeds record with the Snohomish County Auditor in Everett. The Snohomish County Assessor is the assessment office. The City of Everett handles municipal code inside the limits. Unincorporated parcels are county cases. Probate for a person who lived in Everett is commonly filed in Snohomish County Superior Court in Everett. Do not file it in Seattle. KindKey will not file. Most Washington foreclosures are nonjudicial. Ask a Washington attorney about RCW 61.34. KindKey does not interpret it.',
    codeOffice:
      'A City of Everett notice is not a Snohomish County notice and not a King County notice. On-site sewage questions in the county go to the Snohomish County Health Department. KindKey is not any of those offices.',
    market:
      'Sellers include people leaving a job at the port or the plant, heirs in King County, and owners of older houses that need more repair than they will do. KindKey buys from Auburn. The miles do not create a listing.',
    extra:
      'If the house is in Mukilteo or Marysville, say that city. Both are close and both are different permit counters. Lynnwood has its own page.',
    nearby: {
      slug: 'lynnwood',
      name: 'Lynnwood',
      relation: 'the Snohomish County city south along I-5',
    },
  },
  {
    slug: 'lynnwood',
    name: 'Lynnwood',
    where:
      'Lynnwood is an incorporated city in southwest Snohomish County. Alderwood, Perrinville, Meadowdale, and the downtown streets are the local map. Alderwood Mall is commercial. Martha Lake is largely unincorporated Snohomish County. Edmonds and Mountlake Terrace are neighboring cities. Shoreline, farther south, is in King County.',
    housing:
      'The housing is mostly ramblers and later subdivision houses, with older houses in Perrinville and Meadowdale. A house backing to a busy arterial is not the same as a quiet side street. KindKey looks at the specific property.',
    jurisdiction:
      'Lynnwood deeds record with the Snohomish County Auditor in Everett, not at Lynnwood City Hall and not with the King County Recorder. The Snohomish County Assessor is the assessment office. The city handles municipal code inside the limits. Martha Lake and other unincorporated pockets are Snohomish County. Probate for a Lynnwood resident is commonly a Snohomish County Superior Court case in Everett. KindKey will not file it. Most Washington foreclosures are nonjudicial. Talk with a Washington attorney. KindKey does not interpret RCW 61.34.',
    codeOffice:
      'City of Lynnwood letters and Snohomish County letters are easy to mix up near Martha Lake. Read the header. KindKey will not decide the agency or attend the hearing.',
    market:
      'Owners sell when they are moving for work, settling a parent’s house, or finished with a rental near the mall corridor. The Auburn office is south, through Shoreline and Seattle or around the east side. We still buy the house.',
    extra:
      'Edmonds is on the Sound and is its own city. Do not use a Shoreline or Seattle code process for a Lynnwood parcel. The county line is real.',
    nearby: {
      slug: 'everett',
      name: 'Everett',
      relation: 'the Snohomish County seat to the north',
    },
  },
  {
    slug: 'olympia',
    name: 'Olympia',
    where:
      'Olympia and Lacey are separate incorporated cities in Thurston County, and KindKey buys in both. Olympia is the county seat and the state capital. Downtown, South Capitol, the Eastside, West Olympia, and the Northeast are Olympia. Lacey is east: Hawks Prairie, Tanglewilde, the Meadows, and Marvin Road are Lacey. Tumwater is a third city to the south.',
    housing:
      'Older houses near downtown Olympia and the South Capitol neighborhood differ from later Lacey subdivisions in Hawks Prairie and from houses along Marvin Road. Some edge lots use septic. A capital-area bungalow and a Hawks Prairie house are not one product. KindKey does not certify a septic system.',
    jurisdiction:
      'Deeds for Olympia and Lacey record with the Thurston County Auditor in Olympia. The Thurston County Assessor is the assessment office. Do not record them with Pierce County or King County because KindKey’s office is in Auburn. The City of Olympia and the City of Lacey have different building counters. Tumwater has another. Probate for a person who lived in either city is commonly a Thurston County Superior Court matter in Olympia. KindKey will not file it. Most Washington foreclosures are nonjudicial. Ask a Washington attorney about the notice and about RCW 61.34. KindKey does not interpret that statute.',
    codeOffice:
      'Read the city on the letter. An Olympia notice is not a Lacey notice. Unincorporated Thurston County is a county case. On-site sewage questions go to Thurston County Public Health and Social Services. KindKey is not that agency and is not either city.',
    market:
      'Owners sell houses they inherited while living in Pierce or King County, houses near the capital that need work, and Lacey houses after a job move. The drive from Auburn is longer than a Kent trip. It does not change the offer into a listing.',
    extra:
      'If the house is in Tumwater, say Tumwater. This page covers Olympia and Lacey. The closing agent confirms which city and which county the parcel is actually in.',
    nearby: {
      slug: 'lakewood',
      name: 'Lakewood',
      relation: 'the Pierce County city north along I-5',
    },
  },
];
