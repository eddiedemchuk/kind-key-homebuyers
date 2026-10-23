import type { CitySituationKind, CitySituationPage } from '@/data/cityFirePages';
import { cities } from '@/data/cities';

const home = { name: 'Home', path: '/' };

const closingSentence =
  'KindKey does not charge an agent commission or a separate assignment fee. Closing-cost responsibility is stated in the written purchase agreement and can vary. Mortgage payoffs, liens, taxes, and other obligations can reduce proceeds. The closing agent provides a settlement statement before you close.';

const notAgent =
  'KindKey Home Buyers LLC is a principal buyer at 640 1st St SW in Auburn. KindKey is not a real estate agent or broker and does not list the house.';

interface DistressedCityProfile {
  slug: string;
  name: string;
  where: string;
  housing: string;
  jurisdiction: string;
  codeOffice: string;
  market: string;
  extra: string;
  nearby: { slug: string; name: string; relation: string };
}

const profiles: DistressedCityProfile[] = [
  {
    slug: 'kent',
    name: 'Kent',
    where:
      'Kent is an incorporated city in King County. The Green River valley separates East Hill from West Hill. Downtown Kent and the Kent Station area sit on the valley floor. Panther Lake and Lake Meridian are east-side residential areas, not separate cities.',
    housing:
      'East Hill and West Hill are full of ramblers and split-levels, many with steep driveways. Valley houses are often older and sit closer to rail and commercial land. A hill house and a valley house are not the same property, and KindKey does not price them as if they were.',
    jurisdiction:
      'Kent parcels record in King County. Probate for a person who lived in Kent is commonly a King County Superior Court matter, handled in Seattle or at the Maleng Regional Justice Center in Kent. KindKey will not choose the courthouse or file a petition. Ask a Washington attorney.',
    codeOffice:
      'Code notices inside the city come from the City of Kent. A Kent mailing address on the edge can still be unincorporated King County. Read the letterhead before you assume which office controls the file.',
    market:
      'Owners call about a parent’s East Hill house that has been sitting, a West Hill rental that has become a second job, or a valley house that needs more repair than a listing will tolerate. KindKey buys the house directly. The Auburn office is a short trip down the valley.',
    extra:
      'Covington, Renton, and SeaTac are neighbors, not Kent neighborhoods. If the house is just outside the city and still in South King County, say so. The closing agent confirms the parcel.',
    nearby: { slug: 'renton', name: 'Renton', relation: 'the next city north along the valley' },
  },
  {
    slug: 'federal-way',
    name: 'Federal Way',
    where:
      'Federal Way is an incorporated King County city between SeaTac and the Pierce County line. Twin Lakes, Steel Lake, Dash Point, Marine Hills, Lakota, and Star Lake are different parts of the same city. The Commons is a commercial center, not the house you are selling.',
    housing:
      'Many Federal Way houses are mid-century ramblers and split-levels. Some lake-area houses are updated. Others still have original roofs, tired interiors, or a repair that stopped. KindKey does not need the house to be show-ready before a visit.',
    jurisdiction:
      'Federal Way is in King County. Deeds record with the King County Recorder. A person who lived in Federal Way lived in King County for the residence question families take to a probate attorney. Milton, immediately south, can fall in either county. Do not use Milton’s split as a guess for a Federal Way parcel.',
    codeOffice:
      'The City of Federal Way writes municipal code cases inside the city limits. Unincorporated King County is a different letterhead. KindKey is not code enforcement and will not appear at a hearing for you.',
    market:
      'Sellers are often relocating, settling an estate, or done managing a rental near the lakes or toward Dash Point. The drive from KindKey’s Auburn office is a routine South King County trip.',
    extra:
      'Redondo is in Des Moines, next door. If the address is on the Federal Way side of that line, this is the right city. If it is Des Moines, use that page. Title still confirms the parcel.',
    nearby: {
      slug: 'des-moines',
      name: 'Des Moines',
      relation: 'the city along the Sound to the north',
    },
  },
  {
    slug: 'auburn',
    name: 'Auburn',
    where:
      'Auburn is KindKey’s home city. The office is at 640 1st St SW. Downtown and the Green River valley, Lea Hill, Lakeland Hills, and West Valley are all Auburn, and they are not the same housing stock.',
    housing:
      'Valley and downtown houses are often older. Lea Hill and Lakeland Hills are later subdivisions up the hill. Algona and Pacific are neighboring cities, not Auburn neighborhoods. The offer follows the house in front of us.',
    jurisdiction:
      'Most of Auburn is in King County. A southern portion is in Pierce County. The parcel, not an “Auburn, WA” mailing address, decides which county’s recorder and which superior court apply. KindKey does not guess from the neighborhood. Ask the closing agent or your attorney.',
    codeOffice:
      'Inside the city, the City of Auburn issues building and code notices. The county on the title report is a separate question from the city that wrote a yard letter. Keep the notice until you know who sent it.',
    market:
      'A walkthrough in Auburn does not depend on a drive from another county. Owners still choose whether to accept. Asking for an offer does not obligate a sale, and it does not pause a court date or a city deadline.',
    extra:
      'West Valley houses and hill houses can share a school conversation and still sit in different counties at the south end of the city. Send the street address.',
    nearby: { slug: 'kent', name: 'Kent', relation: 'the King County city immediately north' },
  },
  {
    slug: 'milton',
    name: 'Milton',
    where:
      'Milton is a small incorporated city on the King County and Pierce County line. The line runs through the city, so two Milton houses can be different county files even when both say Milton, WA.',
    housing:
      'The housing is mostly single-family, closer in feel to Edgewood and Fife than to a downtown grid. There is no long list of marketing neighborhoods that changes the offer. The parcel and the condition do.',
    jurisdiction:
      'The parcel decides whether King County or Pierce County records apply. Probate follows the county where the decedent lived, which in Milton can be either county. Do not file from the mailing city alone. Ask an attorney. KindKey will not pick the courthouse.',
    codeOffice:
      'The City of Milton handles municipal code inside city limits. A county letter means the parcel may not match the mailing city. Read the header before you treat it as a Milton city case.',
    market:
      'Milton sits between Edgewood, Fife, and Federal Way. Owners often live in one of those cities, or out of state, and still hold the Milton house. KindKey buys it directly from the Auburn office.',
    extra:
      'Edgewood, next door, is entirely in Pierce County. Federal Way is King County. Milton is the city that can be both. Do not borrow either neighbor’s checklist without reading your own paperwork.',
    nearby: { slug: 'edgewood', name: 'Edgewood', relation: 'the Pierce County city next door' },
  },
  {
    slug: 'tacoma',
    name: 'Tacoma',
    where:
      'Tacoma is an incorporated city in Pierce County. The North End, Stadium, Proctor, Hilltop, the Eastside, and South Tacoma are distinct neighborhoods. University Place, Fircrest, and Ruston are separate cities beside Tacoma.',
    housing:
      'Much of the older housing is plaster-era, with basements, steep streets, and deferred systems. South Tacoma and the Eastside have their own mix of smaller houses and mid-century homes. A North End house and a South Tacoma house are not interchangeable.',
    jurisdiction:
      'Tacoma parcels record with the Pierce County Auditor. Probate for a Tacoma resident is commonly filed with the Pierce County Superior Court clerk in Tacoma. The City of Tacoma does not appoint a personal representative. KindKey does not file probate or give tax advice.',
    codeOffice:
      'City of Tacoma code enforcement is not Pierce County code enforcement, and it is not a King County case. If the header does not say Tacoma, do not use this city’s process by default.',
    market:
      'Owners sell when an older house needs more work than they will fund, when heirs live in another state, or when a rental in Hilltop or South Tacoma has become the whole job. KindKey looks at houses across the city from its Auburn office.',
    extra:
      'Browns Point is part of Tacoma. A Ruston or University Place address is a different city. Say which one you have so the paperwork starts in the right place.',
    nearby: {
      slug: 'lakewood',
      name: 'Lakewood',
      relation: 'the Pierce County city south along I-5',
    },
  },
  {
    slug: 'puyallup',
    name: 'Puyallup',
    where:
      'Puyallup is an incorporated Pierce County city in the valley, with a downtown grid near Pioneer Park and the fairgrounds. South Hill is the plateau south of the valley. Many South Hill addresses use a Puyallup mailing city even when the parcel is unincorporated Pierce County.',
    housing:
      'Downtown houses are often older and on smaller lots. South Hill houses are newer, on larger lots, along the Meridian and Shaw Road corridors. Sumner and Edgewood are neighboring cities, not Puyallup neighborhoods.',
    jurisdiction:
      'A house inside the City of Puyallup records in Pierce County. An unincorporated South Hill parcel also records in Pierce County, but the permitting agency may be the county rather than the city. The title report and the letterhead tell you which. KindKey does not decide that from the fairgrounds schedule.',
    codeOffice:
      'Read whether the notice is from the City of Puyallup or from Pierce County. South Hill is where those two get mixed up. KindKey will not close a code file for you.',
    market:
      'Families sell downtown houses they no longer live in, and South Hill houses after a job move or an estate. The drive from Auburn is a normal Pierce County trip, often on SR-512.',
    extra:
      'You do not need to wait for the Washington State Fair to end, and you do not need to stage the house for visitors. The sale is a direct purchase, not a listing timed to an event.',
    nearby: { slug: 'sumner', name: 'Sumner', relation: 'the valley city to the north' },
  },
  {
    slug: 'renton',
    name: 'Renton',
    where:
      'Renton is an incorporated King County city at the south end of Lake Washington, north of Kent. Downtown, the Highlands, Kennydale, Talbot Hill, Benson Hill, Cascade, and Renton Hill are the local areas. Fairwood uses many Renton mailing addresses and is largely unincorporated King County.',
    housing:
      'Kennydale and the lake side differ from the hill neighborhoods above the valley and from older downtown houses. The Cedar River runs through the valley. I-405 and SR-167 are how people drive, not the boundary of what KindKey will look at.',
    jurisdiction:
      'City of Renton parcels are in King County. A Fairwood or other “Renton” address can be unincorporated King County. Both still record in King County, but the city and the county do not share one building counter. Probate for a Renton resident is commonly a King County matter. Ask an attorney before you file.',
    codeOffice:
      'City of Renton notices and King County notices are different documents. The mailing city is not the test. Bring the letter you actually received.',
    market:
      'Renton owners sell inherited Highlands houses, houses near the lake that need work, and rentals they no longer want to staff. KindKey is based in Auburn, south of here, and buys directly.',
    extra:
      'Newcastle, Kent, and Tukwila are the neighbors people confuse with Renton. Use the address on the tax bill, then let title confirm it.',
    nearby: { slug: 'tukwila', name: 'Tukwila', relation: 'the city to the west along the rivers' },
  },
  {
    slug: 'burien',
    name: 'Burien',
    where:
      'Burien is an incorporated King County city between Seattle and SeaTac, on Puget Sound. Downtown Burien, Seahurst, Three Tree Point, Lake Burien, Gregory Heights, and Shorewood are local areas. Boulevard Park sits on the north edge, where city limits and mailing names do not match every house.',
    housing:
      'The stock mixes older Sound-side houses, ramblers east of downtown, and houses on steep streets toward the water. Three Tree Point is not a separate city. Normandy Park, next door, is.',
    jurisdiction:
      'Burien is in King County. Deeds record with the King County Recorder. The city incorporated from unincorporated King County, and some nearby addresses people still call Burien are outside the city. The parcel controls which office applies.',
    codeOffice:
      'City of Burien code enforcement applies inside the city. A King County letter means you may be outside it. KindKey does not interpret the notice or attend the hearing.',
    market:
      'Owners sell when a house near the water or in Seahurst needs more repair than they will do, or when an estate house has been vacant. The drive from Auburn is longer than a Kent trip and still inside the area we buy.',
    extra:
      'Airport noise is a fact of some Burien streets and not of others. It does not decide whether KindKey can make an offer. Condition and title do.',
    nearby: { slug: 'seatac', name: 'SeaTac', relation: 'the city between Burien and I-5' },
  },
  {
    slug: 'seatac',
    name: 'SeaTac',
    where:
      'SeaTac is an incorporated King County city. The city’s name is one word. The airport is the dominant neighbor, not a neighborhood. Angle Lake, McMicken Heights, Riverton, and Bow Lake are residential areas. Tukwila, Burien, and Des Moines are separate cities on the edges.',
    housing:
      'Houses here are often mid-century, on lots near airport and highway corridors. Some streets are quiet and residential. Others sit near International Boulevard. KindKey looks at the house. We do not invent a citywide airport discount before a visit.',
    jurisdiction:
      'SeaTac is in King County. The City of SeaTac and the Port of Seattle are not the same entity. A city notice is not an airport document. Deeds record in King County. Probate for a resident is commonly a King County case. KindKey will not file it.',
    codeOffice:
      'Code cases inside the city come from the City of SeaTac. If the header says King County, Tukwila, or Burien, follow that agency. KindKey is not the city.',
    market:
      'Sellers include estates, landlords leaving a rental near International Boulevard, and owners who do not want showings on a house that needs work. KindKey buys as a principal from Auburn.',
    extra:
      'If the house is in Tukwila or Des Moines, say that instead of SeaTac. The names sit close together on a map and they are different permit counters.',
    nearby: { slug: 'burien', name: 'Burien', relation: 'the city on the Sound to the west' },
  },
  {
    slug: 'des-moines',
    name: 'Des Moines',
    where:
      'Des Moines is an incorporated King County city on Puget Sound, between SeaTac and Federal Way. The marina and downtown, Redondo, Zenith, North Hill, Woodmont, and Pacific Ridge are the local names. This is Des Moines, Washington, not Iowa. Saltwater State Park is on the water.',
    housing:
      'Marina-area houses, Redondo ramblers, and inland North Hill houses are different properties. Many are mid-century. A view lot and an inland lot should not be described as the same house.',
    jurisdiction:
      'Des Moines is in King County. The City of Des Moines handles municipal matters inside the limits. Deeds record with the King County Recorder. Nearby unincorporated King County and the Federal Way line are where mailing addresses get loose.',
    codeOffice:
      'A City of Des Moines notice is not a Federal Way notice and not a King County notice. The header is the first fact. KindKey will not tell you the case is closed because you requested an offer.',
    market:
      'Owners sell inherited houses above the marina, rentals in Redondo, and houses that need work they will not finish before a move. The Auburn office is east of here.',
    extra:
      'North Hill in Des Moines is not North Hill in Edgewood. Those are different counties. Use the street address before you pick a page.',
    nearby: { slug: 'federal-way', name: 'Federal Way', relation: 'the city immediately south' },
  },
  {
    slug: 'tukwila',
    name: 'Tukwila',
    where:
      'Tukwila is an incorporated King County city where I-5, I-405, the Duwamish River, and the Green River come together. Foster, Allentown, Riverton, Thorndyke, and Cascade View are residential pockets. Southcenter is the commercial district, not a neighborhood of houses.',
    housing:
      'Residential Tukwila is smaller than the commercial map suggests. Houses are often older, near the rivers or on the hills above the valley. A house in Allentown is not the mall, and KindKey does not price it as retail frontage.',
    jurisdiction:
      'Tukwila is King County. Some nearby mailing addresses fall in unincorporated King County or in SeaTac. The parcel, not the Southcenter exit, decides. Deeds record in King County.',
    codeOffice:
      'The City of Tukwila writes city code cases. King County writes county cases. KindKey does not negotiate the citation or promise that a fine disappears at recording.',
    market:
      'People sell inherited valley houses, tired rentals, and houses a retail lender may not like because of condition. We buy them as-is.',
    extra:
      'Renton, SeaTac, and Seattle’s south end are minutes away and are not Tukwila. Say the city on the tax bill.',
    nearby: { slug: 'renton', name: 'Renton', relation: 'the city up the valley to the southeast' },
  },
  {
    slug: 'sumner',
    name: 'Sumner',
    where:
      'Sumner is an incorporated Pierce County city in the White River and Puyallup River valley, between Auburn, Pacific, Puyallup, and the hill up to Bonney Lake. Downtown Sumner is a small historic grid. East Sumner and the valley edges mix houses with industrial land.',
    housing:
      'Older downtown houses sit close to the street. Other Sumner houses are on larger lots toward the edges, with shops and outbuildings. Bonney Lake, up SR-410, is a different city on the plateau.',
    jurisdiction:
      'Sumner is in Pierce County. Deeds record with the Pierce County Auditor. Probate for a Sumner resident is commonly a Pierce County matter in Tacoma, not a King County case in Kent, even though Auburn is close. Ask your attorney. KindKey will not file.',
    codeOffice:
      'The City of Sumner handles code inside the city. A Pierce County notice can mean the parcel is outside the limits even if the mailing city says Sumner. Read the header.',
    market:
      'Owners sell when they are leaving the valley floor, settling a parent’s downtown house, or done with a rental. The drive from KindKey’s Auburn office is short.',
    extra:
      'Pacific and Edgewood are neighbors. If the house is in one of those cities, start on that city’s page. The purchase is still a direct sale to KindKey.',
    nearby: { slug: 'bonney-lake', name: 'Bonney Lake', relation: 'the plateau city up SR-410' },
  },
  {
    slug: 'bonney-lake',
    name: 'Bonney Lake',
    where:
      'Bonney Lake is an incorporated Pierce County city on the plateau above Sumner, along SR-410. Downtown, Falling Water, Mountain Creek, and parts of Tehaleh are associated with the city. Tehaleh and much of the Lake Tapps shoreline also include unincorporated Pierce County parcels.',
    housing:
      'Much of the plateau is newer subdivision housing. Older houses closer to the original town, and some Lake Tapps lots, are a different product. Some have shops, slopes, or private septic and well systems. A cul-de-sac house and a mid-century house on a well are not the same offer.',
    jurisdiction:
      'City parcels are in Pierce County and, inside the limits, deal with the City of Bonney Lake. Unincorporated Lake Tapps and parts of Tehaleh deal with Pierce County. Both record with the Pierce County Auditor. KindKey does not draw that line for you.',
    codeOffice:
      'Read the letterhead before you assume the notice is from the City of Bonney Lake. On-site sewage questions in Pierce County are handled by the Tacoma-Pierce County Health Department, which is not the city building counter.',
    market:
      'Sellers include people leaving the plateau, estates, and owners of older lots who do not want to manage a septic system or a shop. KindKey buys from Auburn, down the hill.',
    extra:
      'Sumner is in the valley below. Buckley is east. Lake Tapps is a lake and a community name, not proof the house is inside the Bonney Lake city limits.',
    nearby: { slug: 'sumner', name: 'Sumner', relation: 'the valley city below the plateau' },
  },
  {
    slug: 'spanaway',
    name: 'Spanaway',
    where:
      'Spanaway is an unincorporated community in Pierce County, not an incorporated city. There is no City of Spanaway. Spanaway Lake, the Pacific Avenue corridor along SR-7, and the streets between Parkland and Joint Base Lewis-McChord are the local map. Parkland is the neighboring unincorporated community.',
    housing:
      'Lots are often larger than in Tacoma, with ramblers, manufactured homes on owned land, shops, and outbuildings. Many properties use septic systems. Some use wells. Others are on public utilities. The parcel tells you which. KindKey does not certify a septic system or a well.',
    jurisdiction:
      'Pierce County is the local government. Permits for unincorporated Spanaway run through the county. Deeds record with the Pierce County Auditor. Probate for a person who lived here is commonly a Pierce County Superior Court matter. KindKey will not open the case.',
    codeOffice:
      'Code letters are Pierce County letters, not a city notice. Septic letters are commonly from the Tacoma-Pierce County Health Department. Read the header and talk with that agency, or an attorney, if the deadline is unclear.',
    market:
      'Owners sell vacant houses they cannot watch, inherited houses full of belongings, and properties where a septic system, a roof, or a shop makes a listing unrealistic. A military move connected to the base is a common reason. It is not a separate legal process.',
    extra:
      'A Spanaway mailing address can sit close to the Lakewood or Parkland line. Use the address. Do not invent a city permit counter that Spanaway does not have.',
    nearby: { slug: 'lakewood', name: 'Lakewood', relation: 'the incorporated city to the west' },
  },
  {
    slug: 'lakewood',
    name: 'Lakewood',
    where:
      'Lakewood is an incorporated Pierce County city south of Tacoma, along I-5. American Lake, Gravelly Lake, and Lake Steilacoom are part of the local geography. Tillicum, Lakeview, Oakbrook, Springbrook, Lake City, and Bridgeport are neighborhoods. Joint Base Lewis-McChord is next door. Steilacoom and University Place are separate cities.',
    housing:
      'The city mixes mid-century ramblers, houses on the lakes, and neighborhoods such as Tillicum with their own streets. It is more urban than Spanaway. A lake house and a Tillicum house are not the same offer.',
    jurisdiction:
      'Lakewood is in Pierce County. The city handles municipal code inside the limits. Deeds record with the Pierce County Auditor. The base is not city hall. Probate for a Lakewood resident is commonly a Pierce County case. KindKey does not file it.',
    codeOffice:
      'City of Lakewood notices stay with the city. A Pierce County notice may mean unincorporated land with a Lakewood mailing address. KindKey does not interpret the notice.',
    market:
      'Sellers include landlords, estates, and owners relocating because of the base who do not want to repair a house first. KindKey buys as a principal and does not list the house.',
    extra:
      'Spanaway, to the east, is unincorporated. Do not use Lakewood’s city process for a Spanaway parcel, or the reverse.',
    nearby: {
      slug: 'spanaway',
      name: 'Spanaway',
      relation: 'the unincorporated community to the east',
    },
  },
  {
    slug: 'fife',
    name: 'Fife',
    where:
      'Fife is a small incorporated Pierce County city in the Puyallup River valley along I-5, between Tacoma and the Milton and Edgewood side of the valley. Much of the city is commercial and industrial. Residential streets are a smaller part of the map. The Port of Tacoma is adjacent, not the same city.',
    housing:
      'Houses here are often older valley houses on lots surrounded by a busier commercial city. They are not North Hill acreage in Edgewood, and they are not downtown Tacoma. Condition and access matter more than a freeway slogan.',
    jurisdiction:
      'Fife is in Pierce County. Parcels along this valley can sit near Tacoma, Milton, or Puyallup Tribe land. The title report, not the freeway exit, confirms the jurisdiction. KindKey does not interpret tribal jurisdiction.',
    codeOffice:
      'The City of Fife handles city code inside the limits. If the letter names another government, follow that letter and ask an attorney if you do not understand the deadline.',
    market:
      'Owners sell inherited valley houses, rentals, and houses that are hard to show because of condition or the surrounding streets. The drive from Auburn is short.',
    extra:
      'Milton can be King County or Pierce County. Fife is Pierce County. Still confirm the parcel, because the valley lines are tight.',
    nearby: { slug: 'edgewood', name: 'Edgewood', relation: 'the city on the hill to the east' },
  },
  {
    slug: 'port-orchard',
    name: 'Port Orchard',
    where:
      'Port Orchard is an incorporated city and the Kitsap County seat, on Sinclair Inlet in south Kitsap. Downtown and Bay Street, Annapolis, Mile Hill, the Bethel and Sedgwick corridors, and McCormick Woods are the areas people name. Manchester and Southworth are nearby unincorporated communities, not city neighborhoods.',
    housing:
      'Older downtown and Annapolis houses differ from newer McCormick Woods subdivisions and from larger edge lots that may be on septic. A ferry commute is why some owners bought here. It does not change how a direct sale works.',
    jurisdiction:
      'Port Orchard is in Kitsap County. Deeds record with the Kitsap County Auditor in Port Orchard. Probate for a person who lived in the city is a Kitsap County matter, not a Pierce County case in Tacoma and not a King County case in Seattle, even if the owner commuted across the Sound. The superior court sits in Port Orchard. KindKey will not file.',
    codeOffice:
      'The City of Port Orchard handles municipal building and code inside the limits. Unincorporated south Kitsap is Kitsap County. On-site sewage in Kitsap County is handled by the Kitsap Public Health District, a different agency. Read the letterhead.',
    market:
      'KindKey is based in Auburn and buys Port Orchard houses directly. Owners sell estates, houses that need work, and houses they no longer want to manage from the other side of the water.',
    extra:
      'Bremerton is the larger city across the inlet and a different city government. Gorst is an unincorporated junction, not downtown Port Orchard.',
    nearby: { slug: 'bremerton', name: 'Bremerton', relation: 'the city across Sinclair Inlet' },
  },
  {
    slug: 'bremerton',
    name: 'Bremerton',
    where:
      'Bremerton is an incorporated Kitsap County city on Sinclair Inlet. Downtown, Charleston, Manette, East Bremerton, West Bremerton, Kitsap Lake, and Rocky Point are local areas. The naval shipyard shapes the city. Navy Yard City and Gorst are unincorporated neighbors, not Bremerton neighborhoods.',
    housing:
      'Older houses on steep streets, mid-century ramblers, and houses near the yards are the usual stock. Some need systems work a retail buyer will not fund. Manette is not the same street grid as West Bremerton.',
    jurisdiction:
      'Bremerton is in Kitsap County. Recording is with the Kitsap County Auditor in Port Orchard, not with Pierce County and not at a city counter that records deeds. Probate for a Bremerton resident is commonly filed in Kitsap County Superior Court in Port Orchard. Ask an attorney before you file. KindKey will not.',
    codeOffice:
      'A City of Bremerton notice is not a Kitsap County notice and not a Port Orchard notice. If the house is off base and you have the right to sell it, say so. KindKey does not buy a house you cannot deed.',
    market:
      'Sellers include people leaving the shipyard area, heirs who live in King or Pierce County, and owners of older houses that need more repair than they will do. The ferry and SR-16 are how people travel. Neither stops an offer.',
    extra:
      'Port Orchard is across the inlet. Silverdale is north and unincorporated. Use the city that matches the parcel.',
    nearby: {
      slug: 'port-orchard',
      name: 'Port Orchard',
      relation: 'the county seat across the inlet',
    },
  },
  {
    slug: 'silverdale',
    name: 'Silverdale',
    where:
      'Silverdale is an unincorporated community in Central Kitsap, not an incorporated city. There is no City of Silverdale. Old Town, the Bucklin Hill and Kitsap Mall area, Ridgetop, and Clear Creek are local names. Dyes Inlet is the water. Chico is nearby.',
    housing:
      'The area mixes commercial corridors, newer ridge subdivisions, and older houses closer to the water and Clear Creek. Some lots are on public sewer. Some older and outlying lots use septic. KindKey does not decide which from the name Silverdale.',
    jurisdiction:
      'Kitsap County is the local government. Building permits go through Kitsap County. Deeds record with the Kitsap County Auditor in Port Orchard. Probate is a Kitsap County case if the decedent lived here. Do not open it in King County because the family shops in Seattle.',
    codeOffice:
      'Code letters are Kitsap County letters. Septic letters are commonly from the Kitsap Public Health District. Those are different offices. KindKey is neither of them.',
    market:
      'Owners sell houses they cannot keep up from another county, inherited houses, and properties where a repair or a septic system makes showings a poor fit. KindKey buys directly from Auburn.',
    extra:
      'Bremerton and Poulsbo are incorporated cities on either side of central Kitsap. Silverdale is the unincorporated commercial center between them.',
    nearby: {
      slug: 'poulsbo',
      name: 'Poulsbo',
      relation: 'the North Kitsap city up the peninsula',
    },
  },
  {
    slug: 'poulsbo',
    name: 'Poulsbo',
    where:
      'Poulsbo is an incorporated city in North Kitsap, on Liberty Bay. Downtown along Front Street, Viking Avenue, Noll Road, and the Olhava area are the local map. Kingston and the Kingston ferry are nearby and are not the city of Poulsbo.',
    housing:
      'Older downtown and bay houses differ from newer subdivisions on the hills. Some edge lots use septic or have shops. In-town streets are a tighter, older town. KindKey looks at the property you have, not at a waterfront average.',
    jurisdiction:
      'Poulsbo is in Kitsap County. The city handles municipal code inside the limits. Recording and superior court are Kitsap County functions based in Port Orchard, not in Poulsbo City Hall. A person who lived in Poulsbo lived in Kitsap County. KindKey does not file probate.',
    codeOffice:
      'City of Poulsbo letters and Kitsap County letters are easy to mix up on the north-end line. On-site sewage questions go to the Kitsap Public Health District. Read the header.',
    market:
      'Sellers include heirs in King County who do not want to manage a North Kitsap house, owners leaving a larger lot, and people who want a direct sale instead of showings. The drive from Auburn is long. We still buy the house.',
    extra:
      'Bainbridge Island is a different city across the water. Silverdale is south and unincorporated. Use this page when the house is in Poulsbo.',
    nearby: {
      slug: 'silverdale',
      name: 'Silverdale',
      relation: 'the unincorporated community to the south',
    },
  },
];

const covered = new Set(profiles.map((profile) => profile.slug));
for (const city of cities) {
  if (city.slug === 'edgewood') continue;
  if (!covered.has(city.slug)) {
    throw new Error(`Missing distressed-city profile for ${city.slug}`);
  }
}

type DistressedKind = Exclude<CitySituationKind, 'fire' | 'foreclosure'>;

const segments: Record<DistressedKind, string> = {
  inherited: 'sell-inherited-probate-house',
  code: 'sell-house-with-code-violations',
  tenants: 'sell-house-with-tenants',
  hoarder: 'sell-hoarder-house',
  vacant: 'sell-vacant-house',
};

const rootPaths: Record<DistressedKind, { href: string; label: string; short: string }> = {
  inherited: {
    href: '/sell-inherited-probate-house',
    label: 'Sell an inherited or probate house',
    short: 'Inherited or probate houses',
  },
  code: {
    href: '/sell-house-with-code-violations',
    label: 'Sell a house with code violations',
    short: 'Houses with code violations',
  },
  tenants: {
    href: '/sell-house-with-tenants',
    label: 'Sell a house with tenants',
    short: 'Houses with tenants',
  },
  hoarder: {
    href: '/sell-hoarder-house',
    label: 'Sell a hoarder or heavy-repair house',
    short: 'Hoarder or heavy-repair houses',
  },
  vacant: {
    href: '/sell-vacant-house',
    label: 'Sell a vacant house',
    short: 'Vacant houses',
  },
};

const sibling: Record<DistressedKind, DistressedKind> = {
  inherited: 'vacant',
  code: 'hoarder',
  tenants: 'inherited',
  hoarder: 'code',
  vacant: 'inherited',
};

function build(profile: DistressedCityProfile, kind: DistressedKind): CitySituationPage {
  const name = profile.name;
  const segment = segments[kind];
  const path = `/areas/${profile.slug}/${segment}`;
  const root = rootPaths[kind];
  const siblingKind = sibling[kind];
  const siblingSegment = segments[siblingKind];
  const copy = copyFor(profile, kind);

  return {
    citySlug: profile.slug,
    kind,
    path,
    title: copy.title,
    description: copy.description,
    h1: copy.h1,
    intro: copy.intro,
    sections: copy.sections,
    faqs: copy.faqs,
    related: [
      {
        href: `/areas/${profile.slug}`,
        label: `Sell a house in ${name}`,
        description: `The main ${name} page, including county and neighborhood context.`,
      },
      {
        href: root.href,
        label: root.label,
        description: 'The Washington overview for this situation.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description:
          'The same offer form used across the site. Asking does not obligate you to sell.',
      },
      {
        href: `/areas/${profile.slug}/${siblingSegment}`,
        label: `${rootPaths[siblingKind].short} in ${name}`,
        description: `Another ${name} page for a related situation.`,
      },
      {
        href: `/areas/${profile.nearby.slug}/${segment}`,
        label: `${root.short} in ${profile.nearby.name}`,
        description: profile.nearby.relation,
      },
    ],
    breadcrumbs: [home, { name, path: `/areas/${profile.slug}` }, { name: copy.crumb, path }],
    ctaTitle: copy.ctaTitle,
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You can say no after you see the offer.',
  };
}

function copyFor(profile: DistressedCityProfile, kind: DistressedKind) {
  const name = profile.name;
  if (kind === 'inherited') {
    return {
      crumb: 'Inherited or probate',
      h1: `Sell an Inherited or Probate House in ${name}, WA`,
      title: `Sell an Inherited or Probate House in ${name}, WA`,
      description: `Sell an inherited ${name}, WA house as-is to KindKey, an Auburn principal buyer. Confirm who can sign with a Washington attorney. Not legal or tax advice.`,
      ctaTitle: `Ask for an offer on an inherited ${name} house`,
      intro: [
        `You can sell an inherited or probate house in ${name} without repairing it, emptying every room, or listing it. ${notAgent} KindKey is not a probate attorney or a tax advisor.`,
        profile.where,
        `${profile.jurisdiction} If the estate is also under financial pressure, including a mortgage in default, ask your attorney about RCW 61.34. KindKey does not interpret that statute or tell you that it does not apply.`,
      ],
      sections: [
        {
          heading: `What inherited houses in ${name} actually look like`,
          paragraphs: [
            profile.housing,
            profile.market,
            'You do not have to haul a lifetime of belongings to the dump before KindKey will look. Take papers, photos, and the items the family wants. Leave the rest. If a relative still lives in the house, do not force that person out so the house photographs as vacant. Occupancy is a question for your attorney.',
          ],
        },
        {
          heading: 'Who can sign, and who cannot',
          paragraphs: [
            profile.extra,
            'Letters, a will, a trust, or a transfer-on-death deed can each change who signs. Agreement among relatives is not a substitute for the signature the title company requires. Heirs can live out of state and still be part of the estate. KindKey will not guess which person has authority.',
            closingSentence,
          ],
        },
      ],
      faqs: [
        {
          question: `Can I sell an inherited house in ${name} before probate is finished?`,
          answer:
            'Sometimes, if the person with legal authority can sign and any required court step is done or scheduled. KindKey does not decide that. Ask a Washington probate attorney, then request a cash offer if a sale is allowed.',
        },
        {
          question: `Which court handles a ${name} probate?`,
          answer: `${profile.jurisdiction} This page is not a filing instruction.`,
        },
        {
          question: 'Do heirs have to clean the house out first?',
          answer:
            'No. KindKey buys inherited houses with belongings still inside. Remove what the family wants to keep before the closing date you agree to.',
        },
        {
          question: 'Will you explain the tax on an inherited house?',
          answer:
            'No. Basis, gains, and estate-tax questions belong with a tax professional. KindKey only makes a purchase offer.',
        },
      ],
    };
  }

  if (kind === 'code') {
    return {
      crumb: 'Code violations',
      h1: `Sell a House with Code Violations in ${name}, WA`,
      title: `Sell a House with Code Violations in ${name}, WA`,
      description: `Sell a ${name}, WA house with an open code case as-is. KindKey is an Auburn principal buyer, not code enforcement. Read the letterhead.`,
      ctaTitle: `Get a ${name} offer while the notice is open`,
      intro: [
        `You can sell a house with open code violations in ${name} without finishing the punch list first. ${notAgent} KindKey is not the code enforcement office, and this page is not legal advice.`,
        profile.codeOffice,
        profile.where,
      ],
      sections: [
        {
          heading: `Notices KindKey sees on ${name} houses`,
          paragraphs: [
            profile.housing,
            'The notice might be about debris, an inoperable vehicle, tall vegetation, an unpermitted room, a shop, or a structure posted after a fire or a stopped repair. Those are different cases. KindKey will not tell you how a hearing examiner will rule. If the notice has a hearing, a fine, or an order to vacate, talk with a Washington attorney before you rely on a sale to solve it.',
            profile.extra,
          ],
        },
        {
          heading: 'Liens, deadlines, and the offer',
          paragraphs: [
            'You do not have to hire the contractor named in the letter before we visit. Photos of the posting and of the condition are enough to start. If the structure is not safe to enter, say so. Until the deed transfers, deadlines on the notice are still yours. Selling does not, by itself, close the case on the day you call.',
            `${profile.market} ${closingSentence} If the code case is also sitting next to a foreclosure or an estate, ask your attorney about RCW 61.34 before you sign. KindKey does not interpret that law.`,
          ],
        },
      ],
      faqs: [
        {
          question: `Can I sell a ${name} house before the code case is closed?`,
          answer:
            'Yes. KindKey buys houses with open violations and does not require you to finish the required repairs first. The agency that wrote the notice still controls its case.',
        },
        {
          question: `Who enforces code on a ${name} property?`,
          answer: profile.codeOffice,
        },
        {
          question: 'Will the fine disappear when I sell?',
          answer:
            'Do not assume that. Amounts that must be paid can reduce proceeds and show on the settlement statement. KindKey does not negotiate the citation.',
        },
        {
          question: 'Are you a real estate agent who can also list the house?',
          answer:
            'No. KindKey is the buyer. If you want the house listed, hire a licensed broker. You can compare that plan with a cash offer.',
        },
      ],
    };
  }

  if (kind === 'tenants') {
    return {
      crumb: 'Houses with tenants',
      h1: `Sell a House with Tenants in ${name}, WA`,
      title: `Sell a House with Tenants in ${name}, WA`,
      description: `Sell a rented ${name}, WA house without forcing tenants out first. KindKey is an Auburn principal buyer. Landlord-tenant questions belong with an attorney.`,
      ctaTitle: `Request a cash offer on a rented ${name} house`,
      intro: [
        `You can sell a house with tenants in ${name} without delivering it vacant. ${notAgent} KindKey is not your landlord-tenant lawyer and will not ask you to remove occupants illegally so the house is easier to see.`,
        profile.housing,
        'Washington has rules about notice, entry, deposits, and ending a tenancy. KindKey does not advise you on those rules. If you are unsure whether you can enter or ask someone to leave, talk with a Washington attorney before you do it.',
      ],
      sections: [
        {
          heading: `Rentals KindKey buys in ${name}`,
          paragraphs: [
            profile.where,
            profile.market,
            'Tell us whether the agreement is written, month-to-month, or unclear, and whether the occupant is current. A non-paying occupant is a different problem from a tenant with a lease. KindKey will not coach an eviction. If a foreclosure notice is also in the file, ask your attorney about RCW 61.34. KindKey does not interpret it.',
          ],
        },
        {
          heading: 'Access, deposits, and closing',
          paragraphs: [
            profile.extra,
            'We schedule a visit in a way that respects the people living there. You should follow whatever notice rules apply before anyone enters. Do not promise tenants a rent change or a move-out date on KindKey’s behalf. Security deposits may need to be accounted for at closing.',
            `${profile.jurisdiction} ${closingSentence}`,
          ],
        },
      ],
      faqs: [
        {
          question: `Do tenants have to move out before KindKey buys a ${name} house?`,
          answer:
            'No. KindKey can buy with tenants in place. Do not force occupants out to make the sale easier. Landlord-tenant questions belong with a Washington attorney.',
        },
        {
          question: 'What if the tenant will not allow a walkthrough?',
          answer:
            'Start with the notice rules that apply to entry. If access is delayed, we can begin from your description and photos. KindKey will not tell you to enter without the notice the law requires.',
        },
        {
          question: `I inherited a rental in ${name}. Can I sell it during probate?`,
          answer: `Sometimes, if the correct person has authority to sign. ${profile.jurisdiction} KindKey does not provide legal or tax advice.`,
        },
        {
          question: 'Are you going to manage the property for me?',
          answer:
            'No. KindKey is the buyer of the house. We do not list it, manage it for you before closing, or represent the tenants.',
        },
      ],
    };
  }

  if (kind === 'hoarder') {
    return {
      crumb: 'Hoarder or heavy repair',
      h1: `Sell a Hoarder or Heavy-Repair House in ${name}, WA`,
      title: `Sell a Hoarder or Heavy-Repair House in ${name}, WA`,
      description: `Sell a hoarder house or heavy-repair house in ${name}, WA as-is. No clean-out and no contractor bid required. KindKey is an Auburn principal buyer.`,
      ctaTitle: `Get a ${name} offer without cleaning the house out`,
      intro: [
        `You can sell a house in ${name} that is packed with belongings, or that needs heavy repairs, without a clean-out or a contractor bid. ${notAgent} You will not be asked to justify how the house got this way.`,
        profile.housing,
        profile.extra,
      ],
      sections: [
        {
          heading: `Heavy contents and heavy repairs in ${name}`,
          paragraphs: [
            profile.where,
            'We buy houses with full rooms, blocked garages, and yards that became part of the same problem. We also buy heavy-repair houses that are not hoarding situations: failed roofs, tired electrical, plumbing that has not worked, moisture, and remodels that stopped. Photos help when walking the whole house is difficult.',
            profile.market,
          ],
        },
        {
          heading: 'Privacy, code letters, and price',
          paragraphs: [
            'A listed sale of a house in this condition means photos online and strangers walking through personal belongings. A sale to KindKey is a walkthrough and a written offer. We do not post the interior as a case study. If someone still lives there, we work around that.',
            `${profile.codeOffice} An open debris case does not, by itself, stop an offer. If the sale is also under foreclosure or probate pressure, talk with a Washington attorney. RCW 61.34 is one reason not to sign a pressured sale without advice. KindKey does not interpret it. ${closingSentence}`,
          ],
        },
      ],
      faqs: [
        {
          question: `Do I have to clean out a ${name} house before you make an offer?`,
          answer:
            'No. Keep what matters and leave the rest. You do not need a junk-removal crew before KindKey looks.',
        },
        {
          question: 'What if only one room is buried and the rest is ordinary?',
          answer:
            'That is still a house we can buy. The offer covers the whole property, including the ordinary rooms and the difficult ones.',
        },
        {
          question: 'Can you buy if the roof, sewer, or foundation has failed?',
          answer:
            'Yes. Heavy repair is part of this page even when contents are not the issue. You can share a bid if you already have one. You do not need one to start.',
        },
        {
          question: 'Will neighbors see photos of the inside?',
          answer:
            'KindKey does not need a public listing to buy the house. A walkthrough is for pricing, not for an audience.',
        },
      ],
    };
  }

  return {
    crumb: 'Vacant houses',
    h1: `Sell a Vacant House in ${name}, WA`,
    title: `Sell a Vacant House in ${name}, WA`,
    description: `Sell a vacant ${name}, WA house as-is without staging it or keeping the utilities on for showings. KindKey is an Auburn principal buyer.`,
    ctaTitle: `Get a cash offer on a vacant ${name} house`,
    intro: [
      `You can sell a vacant house in ${name} without staging it, keeping the utilities on for a string of showings, or flying back to manage contractors. ${notAgent}`,
      profile.market,
      profile.where,
    ],
    sections: [
      {
        heading: `Why ${name} houses sit empty`,
        paragraphs: [
          profile.housing,
          'Empty can mean a job move, an estate, a divorce, a fire, or a tenant who left. The reason matters less than the condition and the title. If the house is vacant because of a foreclosure timeline or a probate, say so. Those situations have their own legal steps. Washington has distressed-property rules under RCW 61.34 that your attorney can explain. KindKey does not interpret them.',
          profile.extra,
        ],
      },
      {
        heading: 'Utilities, code notices, and what you can leave',
        paragraphs: [
          `${profile.codeOffice} Vacant houses collect yard, board-up, and debris notices. Tell us about any open case. You do not have to cure it before the visit.`,
          'Tell us whether the power and water are on and who has a key. You can leave unwanted furniture. Take documents and anything with sentimental value. Until closing, insurance and security are still yours. KindKey does not advise you on a vacant-house policy. Ask your insurer what the policy requires while the house is empty.',
          `${profile.jurisdiction} ${closingSentence}`,
        ],
      },
    ],
    faqs: [
      {
        question: `Do I need to clean out a vacant house in ${name} first?`,
        answer:
          'No. Leave what you do not want. Remove the belongings you want to keep before the closing date you agree to.',
      },
      {
        question: 'Can you buy if I live in another state?',
        answer:
          'Yes. A lockbox, a neighbor, or a property manager can provide access. Signing is coordinated with the closing agent. KindKey buys the house and does not list it.',
      },
      {
        question: 'What if the utilities are off?',
        answer:
          'Tell us. We can still review a house with the power or water off. You do not have to turn every utility on and remodel before an offer.',
      },
      {
        question: `The vacant ${name} house also has a code notice. Can I still sell?`,
        answer: `Yes. ${profile.codeOffice} Amounts that must be paid are typically handled through the closing statement.`,
      },
    ],
  };
}

const kinds: DistressedKind[] = ['inherited', 'code', 'tenants', 'hoarder', 'vacant'];

export const cityDistressedPages: CitySituationPage[] = profiles.flatMap((profile) =>
  kinds.map((kind) => build(profile, kind))
);
