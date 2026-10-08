import type { LongformContent } from '@/lib/content';

const home = { name: 'Home', path: '/' };

const distressedRules =
  'KindKey does not provide legal or tax advice. If foreclosure, an estate, or other financial pressure is part of the sale, talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret those rules or tell you whether they apply to your sale.';

export const situations: LongformContent[] = [
  {
    path: '/sell-fire-damaged-house',
    title: 'Sell a Fire-Damaged House for Cash in Washington',
    description:
      'Sell a fire-damaged or smoke-damaged house as-is in King or Pierce County. KindKey Home Buyers LLC is an Auburn principal buyer, not a real estate agent.',
    h1: 'Sell a Fire-Damaged House for Cash',
    intro: [
      'You can sell a fire-damaged house as-is to KindKey Home Buyers LLC without rebuilding the kitchen, replacing smoke-stained drywall, or finishing an insurance project first. KindKey is a principal buyer based at 640 1st St SW in Auburn, Washington. We purchase houses directly from owners in King County and Pierce County. We are not a real estate agent or broker, and we do not list the house.',
      'The fire does not have to be a total loss. We make offers on kitchen fires, garage fires, attic smoke, boarded windows, and partial burns that left the house standing but not livable. You do not need a contractor bid, a cleared certificate of occupancy, or a cleaned-out interior before you ask for a cash offer.',
      'A retail listing of a burned house usually means showings, repair negotiations, and months of carrying the mortgage, insurance, and utilities. Selling to KindKey skips that. You tell us the address and what happened. We review the damage, walk the property when it is safe, and send a written offer you can accept or decline.',
    ],
    sections: [
      {
        heading: 'How a fire-damaged sale works',
        paragraphs: [
          'Start with the property address, how the fire started if you know, and whether anyone can safely go inside. Photos of the roof, the room where the fire began, and any posted notices are enough for a first look. You do not have to hire an inspector or pull reconstruction permits before we talk.',
          'If the offer is one you want, the closing date is set with the closing agent. Owners of vacant or uninsured houses often want a shorter timeline. Owners who are still removing salvageable belongings, or who are waiting on an insurer, can ask for more time. Requesting the offer does not require you to accept it.',
        ],
      },
      {
        heading: 'What we buy after a fire',
        paragraphs: [
          'We buy single-family houses, townhouses, and condos with fire, smoke, or water damage from putting the fire out. That includes a destroyed kitchen with the rest of the house intact, a tarp on the roof, missing windows, and houses with an older fire that was never fully repaired. Vacant houses and inherited houses the family does not want to rebuild are common.',
          'Tell us about red tags, stop-work orders, and open code cases. Those notices do not automatically end a purchase. Fines or liens that have to be paid are handled through the closing statement, not as a surprise after you have moved on. KindKey does not give insurance advice. Talk with your insurer, and with a Washington attorney if you are unsure of your rights, before you assign a claim or sign a repair contract you do not understand. You can request an offer while a claim is still open.',
        ],
        bullets: [
          'Kitchen, garage, attic, and room fires where the structure is still standing',
          'Smoke damage through halls, HVAC, and insulation, even if flames stayed in one room',
          'Water damage from firefighting, including soft floors and wet drywall',
          'Houses with an open, paused, or settled insurance claim',
          'Partial remodels that stopped when the insurance money or the contractor ran out',
        ],
      },
      {
        heading: 'Where we buy fire-damaged houses',
        paragraphs: [
          'Our office is in downtown Auburn. We look at houses in Auburn, Kent, Federal Way, Tacoma, and Puyallup, and we also buy in Milton, Edgewood, and nearby King and Pierce County communities. Older wood-frame houses and newer hill houses can both be sold as-is when smoke and water damage make a polished listing unrealistic.',
          'Western Washington rain matters after a fire. A tarp that held in July can fail by November. You do not have to solve that before closing. Leave damaged belongings you do not want. KindKey coordinates its side of the purchase with the closing agent.',
        ],
      },
      {
        heading: 'How the offer reflects the damage',
        paragraphs: [
          'A cash offer on a fire-damaged house accounts for the cost and time to make it livable again, along with the lot, the location, and what the house might bring after repair. KindKey may repair and resell, hold, or otherwise invest after closing. That is the work of a principal buyer. You are not paying KindKey an agent commission or a separate assignment fee.',
          'Closing-cost responsibility is written in the purchase agreement and may vary by transaction. Mortgage payoffs, liens, taxes, and other property obligations can reduce what you receive. The closing agent provides a settlement statement before closing so you can see the numbers.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell a fire-damaged house before the insurance claim is paid?',
        answer:
          'Yes. You can ask KindKey for a cash offer while a claim is open, paused, or already settled. KindKey does not advise you on the claim. Talk with your insurer and, if you need legal help, a Washington attorney before you assign claim proceeds or sign a repair contract.',
      },
      {
        question: 'Do I have to repair the house or pull permits first?',
        answer:
          'No. KindKey buys fire-damaged houses in their current condition. You do not need to replace drywall, clear a final inspection, or finish a contractor’s scope before requesting an offer.',
      },
      {
        question: 'What if the house is not safe to walk through?',
        answer:
          'Tell us. Photos, the fire report if you have it, and an exterior look are often enough to start. We will not ask you to enter a structure that is unsafe.',
      },
      {
        question: 'Does smoke damage alone count, if the flames were small?',
        answer:
          'Yes. Smoke in insulation, ducts, and framing can make a house unpleasant to list even when the structure is sound. We make offers on smoke damage as well as on heavier fire damage.',
      },
      {
        question: 'Will KindKey charge me a commission to buy the house?',
        answer:
          'KindKey does not charge the seller an agent commission or a separate service or assignment fee. Closing costs are stated in the written purchase agreement and may vary. KindKey is the buyer, not your listing agent.',
      },
    ],
    related: [
      {
        href: '/areas/auburn/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Auburn',
        description:
          'Auburn is our home base, mostly in King County, with some parcels in Pierce County.',
      },
      {
        href: '/areas/kent/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Kent',
        description: 'East Hill, West Hill, and the Kent valley.',
      },
      {
        href: '/areas/federal-way/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Federal Way',
        description: 'Twin Lakes, Dash Point, Marine Hills, and Steel Lake.',
      },
      {
        href: '/areas/tacoma/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Tacoma',
        description: 'Pierce County houses from the North End to South Tacoma.',
      },
      {
        href: '/areas/puyallup/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Puyallup',
        description: 'Downtown Puyallup and the South Hill plateau.',
      },
      {
        href: '/blog/sell-fire-damaged-house-king-pierce-county',
        label: 'How to sell a fire-damaged house in King or Pierce County',
        description: 'A plain-language walkthrough of the decision.',
      },
    ],
    breadcrumbs: [home, { name: 'Sell a fire-damaged house', path: '/sell-fire-damaged-house' }],
    ctaTitle: 'Get a cash offer on a fire-damaged house',
    ctaSubtitle: 'Share the address and what the fire affected. There is no obligation to accept.',
  },
  {
    path: '/sell-house-before-foreclosure',
    title: 'Sell a House Before Foreclosure in Washington',
    description:
      'Sell a Washington house before foreclosure to an Auburn principal buyer. KindKey is not a real estate agent. Talk with an attorney about RCW 61.34 and your deadlines.',
    h1: 'Sell a House Before Foreclosure',
    intro: [
      'If you are behind on the mortgage, you may still be able to sell the house before a foreclosure sale and use the proceeds at closing to pay what the lender is owed. KindKey Home Buyers LLC, based at 640 1st St SW in Auburn, buys houses directly from owners in King County and Pierce County. We are a principal buyer, not a real estate agent, broker, or foreclosure-rescue service.',
      'A notice of default or a trustee-sale notice does not, by itself, tell you which options are still open. Deadlines can be short, and they depend on the paperwork you received and on which county the property is in. Auburn, Kent, and Federal Way houses are often in King County. Tacoma and Puyallup houses are in Pierce County. Some Auburn parcels are in Pierce County even though the mailing city says Auburn. Confirm the county with the title company or your attorney instead of guessing from the city name.',
      distressedRules,
    ],
    sections: [
      {
        heading: 'How selling before foreclosure works',
        paragraphs: [
          'Tell us the address, the condition of the house, and the timeline you are working with. You do not have to repair the property, evict occupants, or catch up the mortgage before we look. We review the house and send a written cash offer. If you accept, the closing agent orders payoff figures and a title report and prepares a settlement statement.',
          'The closing date has to work with the deadline in your notice and with the time the lender and closing agent need for payoffs. KindKey can aim for a faster closing when that is realistic, or a later date if your attorney says you have room. We do not promise that a sale will stop a foreclosure. Your attorney and the closing agent are the people who can match a closing date to the notice you received.',
        ],
      },
      {
        heading: 'What we can buy in this situation',
        paragraphs: [
          'We buy houses that are behind and houses that already have a sale scheduled, when title can still transfer. Deferred maintenance, fire damage, code cases, tenants, and vacant houses are all eligible. You can leave personal property you do not want.',
          'KindKey is not your advisor on loan modification, bankruptcy, or reinstatement. Ask a Washington attorney before you choose among those paths. If you want a sale, KindKey buys as a principal and does not charge you an agent commission or a separate assignment fee.',
        ],
        bullets: [
          'Houses with a notice of default or a scheduled trustee sale, when a sale can still close in time',
          'Vacant houses where the payment default and the condition piled up together',
          'Inherited houses with a mortgage the heirs do not want to keep',
          'Houses with tenants, when the lease stays in place or the parties handle occupancy lawfully',
          'Houses that also need heavy repairs, so a retail listing is not realistic on this timeline',
        ],
      },
      {
        heading: 'King County and Pierce County are not the same office',
        paragraphs: [
          'A King County house and a Pierce County house are not processed by the same recorder, treasurer, or superior court. That matters when a payoff, a tax lien, or a court case has to be cleared before a deed can record. Federal Way and Kent are in King County. Tacoma, Puyallup, Milton, and Edgewood are in Pierce County. Auburn sits on the county line, so the parcel — not the neighborhood name — controls which county records apply.',
          'We buy in all of those cities. Local pages for Auburn, Kent, Federal Way, Tacoma, and Puyallup cover the housing and the county context in more detail. None of those pages is a substitute for advice about your notice.',
        ],
      },
      {
        heading: 'What the offer does and does not include',
        paragraphs: [
          'The written offer is a proposal to buy the property. It is not a promise to cure the default or negotiate with your lender. If the payoff is higher than the offer, the sale may depend on the lender. The closing agent shows payoffs, liens, taxes, and allocated closing costs on a settlement statement before you close.',
          'Washington’s distressed-property law is RCW 61.34. KindKey will not tell you what it requires. Bring the offer and the notice to an attorney.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell my house after a foreclosure notice in Washington?',
        answer:
          'Often yes, if title can still transfer before the sale date and the closing can pay the required liens. Whether that is true for you depends on the notice, the payoff, and the county. Ask a Washington attorney. KindKey can make a cash offer, and KindKey does not interpret RCW 61.34 for you.',
      },
      {
        question: 'Will KindKey stop the foreclosure for me?',
        answer:
          'No. KindKey is a buyer, not a foreclosure consultant. A completed sale may pay the lender from closing proceeds, but only the lender, the trustee, and your attorney can speak to the status of the foreclosure.',
      },
      {
        question: 'Do I need to catch up the payments or repair the house first?',
        answer:
          'You do not need to reinstate the loan or repair the house before requesting an offer. Payoffs and liens are addressed in the closing statement if you accept an offer and the sale can close.',
      },
      {
        question: 'What if I am not sure which county my house is in?',
        answer:
          'Use the parcel, not only the mailing city. Auburn in particular includes King County and Pierce County parcels. The title company or your attorney can confirm which county’s records apply.',
      },
      {
        question: 'Is KindKey a real estate agent who can list the house if I change my mind?',
        answer:
          'No. KindKey buys as a principal and does not list houses or act as your agent. If you want a listed sale, hire a licensed broker. You can compare that path with a cash offer.',
      },
    ],
    related: [
      {
        href: '/areas/auburn/sell-house-before-foreclosure',
        label: 'Sell before foreclosure in Auburn',
        description: 'Home base on the King and Pierce county line.',
      },
      {
        href: '/areas/kent/sell-house-before-foreclosure',
        label: 'Sell before foreclosure in Kent',
        description: 'King County, from the valley to East Hill and West Hill.',
      },
      {
        href: '/areas/federal-way/sell-house-before-foreclosure',
        label: 'Sell before foreclosure in Federal Way',
        description: 'King County houses along I-5 and SR-18.',
      },
      {
        href: '/areas/tacoma/sell-house-before-foreclosure',
        label: 'Sell before foreclosure in Tacoma',
        description: 'Pierce County, including older neighborhoods and South Tacoma.',
      },
      {
        href: '/areas/puyallup/sell-house-before-foreclosure',
        label: 'Sell before foreclosure in Puyallup',
        description: 'Pierce County, downtown and the South Hill area.',
      },
      {
        href: '/blog/sell-house-before-foreclosure-washington',
        label: 'Can I sell my house before foreclosure in Washington?',
        description: 'What to ask an attorney, and how a cash sale is different from a listing.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Sell a house before foreclosure', path: '/sell-house-before-foreclosure' },
    ],
    ctaTitle: 'Request a cash offer before the deadline gets tighter',
    ctaSubtitle:
      'Share the address and the timeline on your notice. Talk with an attorney before you sign.',
  },
  {
    path: '/sell-inherited-probate-house',
    title: 'Sell an Inherited or Probate House in Washington',
    description:
      'Sell an inherited or probate house as-is in King or Pierce County. KindKey is an Auburn principal buyer. Confirm authority to sign with an attorney. Not legal or tax advice.',
    h1: 'Sell an Inherited or Probate House',
    intro: [
      'You can sell an inherited house in Washington without repairing it, emptying every room, or moving back to manage a listing. KindKey Home Buyers LLC buys houses directly from people who have the authority to sell. We are based at 640 1st St SW in Auburn and we purchase in King County and Pierce County. KindKey is not a real estate agent, a probate lawyer, or a tax advisor.',
      'Whether a sale can happen now depends on the estate. Some families already have a personal representative with letters from the superior court. Some are still opening probate. Some houses were in a living trust or passed by a transfer-on-death deed, which is a different path. KindKey will not tell you which path you are on. A Washington attorney, and the closing agent once title is opened, are the right people to confirm who can sign the deed.',
      'King County estates and Pierce County estates are filed in different superior courts. A house in Kent, Federal Way, or most of Auburn is commonly a King County matter. A house in Tacoma, Puyallup, Milton, or Edgewood is commonly a Pierce County matter. Auburn’s southern edge crosses into Pierce County, so the parcel controls. Do not rely on the mailing city alone.',
    ],
    sections: [
      {
        heading: 'What to expect if you want a cash sale',
        paragraphs: [
          'Tell us the address, the condition, and who you believe is allowed to sign. If letters or a court order exist, the closing agent will ask for them. You do not need to finish probate repairs, paint, or haul every belonging to the dump before we look. Photos and a walkthrough are enough to price the house as it sits.',
          'If several people inherit, they do not all have to live nearby to ask for an offer. They do need a clear signer. Disagreements among heirs are not something KindKey negotiates as if we were the family’s lawyer. Sort authority and agreement with an attorney before you accept an offer. The purchase agreement should name the correct seller.',
        ],
      },
      {
        heading: 'Houses we buy from estates',
        paragraphs: [
          'Inherited houses are often dated, full of belongings, or vacant for months. We buy those. We also buy estate houses with fire damage, code violations, a remaining mortgage, or tenants who were already living there. The occupant might be a relative. Tell us, and do not try to force someone out in order to make the house “show ready.”',
          'KindKey does not advise you on estate tax, capital gains, or the basis of the property. Those questions belong with a tax professional. We also do not interpret Washington’s distressed-property rules. If the estate is selling because of a foreclosure, a delinquent mortgage, or other pressure, RCW 61.34 may be relevant. Ask your attorney. KindKey will not tell you that the statute does or does not apply.',
        ],
        bullets: [
          'Probate houses that still need a personal representative’s signature',
          'Trust or beneficiary sales, once your attorney confirms who signs',
          'Houses full of furniture, paperwork, and items the family does not want',
          'Vacant inherited houses with lapsed upkeep',
          'Estate houses that also have fire damage, code cases, or a loan in default',
        ],
      },
      {
        heading: 'Condition, contents, and the family that lives elsewhere',
        paragraphs: [
          'Many heirs live outside Washington. A listed sale asks someone to meet inspectors, contractors, and buyers, or to hire people to do that. A sale to KindKey can be handled with a walkthrough, a written offer, and a closing agent. You can leave contents you do not want to ship. If particular items must stay with the family, take those before closing and tell us what will remain.',
          'Out-of-date kitchens in Lea Hill, East Hill Kent, the Tacoma North End, or downtown Puyallup do not have to be remodeled for us to make an offer. The offer reflects the house as it is. KindKey does not charge an agent commission or a separate assignment fee. Closing costs are in the purchase agreement. Liens, mortgages, and taxes can reduce proceeds, and the settlement statement shows that before closing.',
        ],
      },
      {
        heading: 'A direct answer on timing',
        paragraphs: [
          'We can set a closing date around the estate’s paperwork when the signer is ready. We cannot shorten a court process or issue letters. If your attorney says the sale must wait for confirmation, we can time the closing to that instruction. If the attorney says you may sign now, we can move on a shorter calendar.',
          distressedRules,
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell a house in Washington before probate is finished?',
        answer:
          'Sometimes, if the person with legal authority can sign and any required court step is done or properly scheduled. KindKey does not decide that. Ask a Washington probate attorney, then request a cash offer if a sale is allowed.',
      },
      {
        question: 'Do all heirs have to be in Washington to sell?',
        answer:
          'People can live out of state and still be part of a sale. Who must sign is a legal question. The closing agent will need the correct authority documents. KindKey will not guess which relative has the power to deed the house.',
      },
      {
        question: 'Does the house need to be cleaned out first?',
        answer:
          'No. KindKey buys inherited houses with belongings still inside. Remove anything the family wants to keep before closing, and leave the rest.',
      },
      {
        question: 'Will you give tax advice on an inherited house?',
        answer:
          'No. Questions about basis, gains, or estate tax belong with a tax professional. KindKey only makes a purchase offer for the property.',
      },
      {
        question: 'What is RCW 61.34 doing on a probate page?',
        answer:
          'Washington’s distressed-property rules can matter when a sale happens under financial pressure, including some estate sales tied to a mortgage default. KindKey does not interpret RCW 61.34. Your attorney can tell you whether it affects your sale.',
      },
    ],
    related: [
      {
        href: '/blog/selling-a-house-in-probate-washington',
        label: 'Selling a house in probate in Washington',
        description: 'What families usually have to line up before a deed can be signed.',
      },
      {
        href: '/blog/selling-a-vacant-or-inherited-house',
        label: 'Selling a vacant or inherited house you do not want to manage',
        description: 'Contents, distance, and houses that have been sitting.',
      },
      {
        href: '/areas/auburn',
        label: 'Sell a house in Auburn',
        description: 'KindKey is based in downtown Auburn.',
      },
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'Many inherited houses are already empty.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'The offer form is the same one used across the site.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Sell an inherited or probate house', path: '/sell-inherited-probate-house' },
    ],
    ctaTitle: 'Ask for an offer on an inherited house',
    ctaSubtitle: 'Confirm who can sign with an attorney. KindKey will price the house as it is.',
  },
  {
    path: '/sell-vacant-house',
    title: 'Sell a Vacant House for Cash in Washington',
    description:
      'Sell a vacant house as-is in King or Pierce County without cleaning it out or making repairs. KindKey Home Buyers LLC is an Auburn principal buyer.',
    h1: 'Sell a Vacant House for Cash',
    intro: [
      'You can sell a vacant house to KindKey Home Buyers LLC without staging it, keeping the utilities on for showings, or flying back to manage contractors. KindKey is a principal buyer at 640 1st St SW, Auburn, WA 98001. We buy houses in King County and Pierce County, including homes that have been empty for weeks or for years. We are not a real estate agent.',
      'Vacant does not mean simple. Empty houses in Auburn, Kent, Federal Way, Tacoma, and Puyallup still need insurance decisions, yard care, and a watchful eye for break-ins, frozen pipes, and mail that piles up. Those costs continue until the deed transfers. A cash sale is one way to stop that calendar.',
      'You do not have to remove every stick of furniture or correct deferred maintenance first. Tell us the house is empty, whether the power and water are on, and if anyone has a key. We will look at it and send a written offer.',
    ],
    sections: [
      {
        heading: 'How selling a vacant house works',
        paragraphs: [
          'Share the address and how we can see the property. If you live out of the area, a lockbox, a neighbor, or a property manager can provide access. A video walkthrough can start the conversation when a same-day visit is hard. The offer is based on the house as it sits, including outdated finishes, roof wear, and rooms that were never put back together.',
          'If you accept, you choose a closing window with the closing agent. Sellers who already live elsewhere often want a short timeline. Sellers who still need to collect specific items can ask for a few extra days. KindKey does not charge an agent commission or a separate assignment fee for buying the house.',
        ],
      },
      {
        heading: 'What we buy when nobody lives there',
        paragraphs: [
          'We buy vacant single-family houses, townhouses, and condos. Common reasons they are empty include a move for work, an estate, a divorce, a fire, or a tenant who left. The reason matters less than the condition and the title. If the house is vacant because of a foreclosure timeline or a probate, say so. Those situations have their own legal steps, and you should talk with an attorney. Washington has distressed-property rules under RCW 61.34 that your attorney can explain. KindKey does not interpret them.',
          'Code cases are also common on vacant houses: tall grass, boarded windows, inoperable vehicles, or an unfinished repair the city noticed. Tell us about open violations. We can still make an offer. Liens that must be paid show up on the settlement statement.',
        ],
        bullets: [
          'Houses empty after the owner moved and did not want to manage two places',
          'Inherited houses sitting between relatives',
          'Houses vacant after a tenant moved out, with or without damage',
          'Fire-damaged or heavy-repair houses that are not safe or practical to occupy',
          'Houses with winterized or shut-off utilities',
        ],
      },
      {
        heading: 'Local houses that sit empty',
        paragraphs: [
          'In the Auburn valley and downtown, older houses sometimes go vacant when an owner moves to Lea Hill, Lakeland Hills, or out of state and does not rent the first house. On Kent’s East Hill and West Hill, vacant ramblers show up when a family relocates and the repair list is longer than the time they have. Federal Way’s Twin Lakes, Steel Lake, and Dash Point neighborhoods have houses that are hard to watch from another city because the lots are spread out. In Tacoma, vacant houses in the North End, Hilltop, and South Tacoma can draw break-ins while an owner lives in Pierce County’s suburbs or out of state. In Puyallup, a downtown house can sit empty while the owners live on South Hill, and a South Hill house can sit empty after a job move. South Hill includes many unincorporated Pierce County addresses that people still call Puyallup.',
          'You do not need a local relative to “keep an eye on it” until a buyer from the MLS appears. KindKey can buy the house and take on the property after closing. Until then, security and insurance are still yours. We do not advise you on vacant-home insurance. Ask your insurer what the policy requires while the house is empty.',
        ],
      },
      {
        heading: 'What you can leave behind',
        paragraphs: [
          'Take documents, valuables, and anything with sentimental value. Furniture, old appliances, tools, and trash can stay if you do not want them. Tell us about sheds, vehicles, and fuel tanks so the offer and the closing paperwork match the property.',
          'The purchase agreement states who pays which closing costs. Mortgage payoffs, liens, utilities, and taxes can reduce the amount you receive. Escrow provides a settlement statement before closing.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need to clean out a vacant house before KindKey will look at it?',
        answer:
          'No. You can leave unwanted furniture and household items. Remove the belongings you want to keep before the closing date you agree to.',
      },
      {
        question: 'Can you buy a vacant house if I live in another state?',
        answer:
          'Yes. Access can be arranged without you attending a showing schedule. Signing is coordinated with the closing agent. KindKey buys the house and does not list it for you.',
      },
      {
        question: 'What if the utilities are off?',
        answer:
          'Tell us. We can still review a house with the power or water off. You do not have to turn every utility on and remodel before an offer.',
      },
      {
        question: 'The vacant house also has a code violation. Is that a problem?',
        answer:
          'Open code cases do not automatically stop an offer. Share the notices you have. Amounts that must be paid are typically handled through the closing statement.',
      },
      {
        question: 'Will a vacant house sell faster to KindKey than on the open market?',
        answer:
          'A direct sale avoids listing preparation and showings, and the closing date is chosen with you and the closing agent. A listed sale can still make sense if the house is updated and you can wait. KindKey does not predict market time for a listing.',
      },
    ],
    related: [
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Many vacant houses are tied to an estate.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'Empty houses often collect city notices.',
      },
      {
        href: '/blog/selling-a-vacant-or-inherited-house',
        label: 'Selling a vacant or inherited house',
        description: 'A guide for owners who do not want to manage the property.',
      },
      {
        href: '/areas/auburn',
        label: 'Auburn cash home buyer',
        description: 'KindKey’s office is in downtown Auburn.',
      },
    ],
    breadcrumbs: [home, { name: 'Sell a vacant house', path: '/sell-vacant-house' }],
    ctaTitle: 'Get a cash offer on a vacant house',
    ctaSubtitle: 'You do not need to clean it out or turn it into a show home first.',
  },
  {
    path: '/sell-house-with-code-violations',
    title: 'Sell a House with Code Violations for Cash',
    description:
      'Sell a King or Pierce County house with open code violations as-is. KindKey Home Buyers LLC is an Auburn principal buyer, not a code consultant or real estate agent.',
    h1: 'Sell a House with Code Violations',
    intro: [
      'You can sell a house with open code violations without finishing the city’s punch list first. KindKey Home Buyers LLC buys houses as-is from owners in King County and Pierce County. We are based at 640 1st St SW in Auburn. We are not a real estate agent, and we are not the code enforcement office.',
      'A notice might be about tall grass, an inoperable vehicle, a boarded window, an unpermitted addition, an unsafe deck, junk and debris, or a structure the city says is not fit to live in. Those cases differ, and the city that issued the notice is the authority on what it requires. KindKey will not tell you how to fight a citation or what a hearing officer will do.',
      'What we can do is make a cash offer that assumes the violation is still open. You tell us which city wrote the notice and what it says. If you accept an offer, title and the closing agent identify liens that have to be paid. You should read the notice with an attorney if you do not understand the deadline or the penalty.',
    ],
    sections: [
      {
        heading: 'How the sale works when a city notice is open',
        paragraphs: [
          'Send the address and a copy or a photo of the notice if you have it. We look at the house in its current condition, including work that was started without a permit and work that was red-tagged. You do not have to hire the contractor the notice describes before we visit.',
          'The offer is for the property as it is, not for a promise that KindKey will close the code case on a particular date. After closing, the property is KindKey’s to deal with, including permits we choose to pull. Until closing, the notice is still yours. Do not ignore a deadline because a sale is being discussed.',
        ],
      },
      {
        heading: 'Violations we see on houses we buy',
        paragraphs: [
          'South King County and Pierce County cities each run their own code enforcement. Auburn, Kent, and Federal Way are King County cities with their own municipal codes. Tacoma and Puyallup are Pierce County cities. Unincorporated pockets, including parts of the South Hill plateau that use a Puyallup address, can fall under Pierce County instead of the city. The header on your notice is the first place to look. If you are unsure, ask the city or county named on the letter, or ask an attorney.',
          'We regularly see vacant-property cases, interior hoarding and debris that spilled outside, fire-damaged houses with an unsafe-structure posting, and additions or garage conversions that never had a final inspection. A retail buyer using a loan may struggle with those issues. KindKey pays cash and does not need the house to pass a lender’s appraisal before we buy it.',
        ],
        bullets: [
          'Overgrown yards, debris, and vehicle violations on vacant houses',
          'Unpermitted rooms, decks, and garage conversions',
          'Unsafe-structure or do-not-occupy postings',
          'Incomplete repairs after fire, water, or a stopped remodel',
          'Cases where fines or abatement costs may already be a lien',
        ],
      },
      {
        heading: 'Money, liens, and what we will not promise',
        paragraphs: [
          'Some cities record liens for unpaid fines or for the cost of cleaning a property. Those amounts can reduce seller proceeds in the same way a mortgage payoff can. The settlement statement is where you see them. KindKey does not guarantee that every fine disappears at recording, and we do not negotiate the citation for you.',
          'If the violation is tied to a foreclosure, an estate, or another pressured sale, talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that law or tell you whether your code case plus a loan default puts you under it.',
        ],
      },
      {
        heading: 'Why owners sell instead of curing the notice',
        paragraphs: [
          'Curing a notice can be the right path when the fix is small and you want to keep the house. It is a poor fit when the notice requires a new roof, a tear-out of an unpermitted unit, or a full clean-out you cannot staff. Listing agents also have to disclose material problems, and buyers often ask for repairs before they will close.',
          'Selling to KindKey means you skip that repair negotiation. You still need to be honest about the notice. Hiding it does not help either of us, because title work and a walkthrough will surface open permits and posted orders.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell if the city has an open code case?',
        answer:
          'Yes. KindKey buys houses with open violations in Auburn, Kent, Federal Way, Tacoma, Puyallup, and nearby King and Pierce County communities. Bring the notice. You do not have to finish the city’s required repairs first.',
      },
      {
        question: 'Will the violation automatically close when I sell?',
        answer:
          'Do not assume that. The city controls its case. Liens that must be paid can be handled at closing and will show on the settlement statement. KindKey does not speak for code enforcement.',
      },
      {
        question: 'What if I do not know whether the house is in the city or the county?',
        answer:
          'Read the notice. South Hill and parts of Auburn are easy to mislabel because mailing addresses and city limits do not always match. The agency named on the letter, or your attorney, can confirm jurisdiction.',
      },
      {
        question: 'Do I need an attorney?',
        answer:
          'If the notice has a hearing, a large fine, a vacate order, or it overlaps with foreclosure or probate, talk with a Washington attorney. KindKey does not give legal advice and does not interpret RCW 61.34.',
      },
      {
        question: 'Are you a real estate agent who can also list the house?',
        answer:
          'No. KindKey is the buyer. If you want the house listed, hire a licensed broker. You can request a cash offer either way and compare it with a listing plan.',
      },
    ],
    related: [
      {
        href: '/sell-hoarder-house',
        label: 'Sell a hoarder or heavy-repair house',
        description: 'Debris and deferred repair cases often become code cases.',
      },
      {
        href: '/sell-fire-damaged-house',
        label: 'Sell a fire-damaged house',
        description: 'Fire postings and stop-work orders are a type of notice we see.',
      },
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'Vacant-property enforcement is a frequent reason owners call.',
      },
      {
        href: '/areas/auburn',
        label: 'Auburn',
        description: 'KindKey is based in downtown Auburn.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Sell a house with code violations', path: '/sell-house-with-code-violations' },
    ],
    ctaTitle: 'Get a cash offer while the notice is still open',
    ctaSubtitle: 'Share the address and the city or county named on the letter.',
  },
  {
    path: '/sell-house-with-tenants',
    title: 'Sell a House with Tenants for Cash in Washington',
    description:
      'Sell a rented house in King or Pierce County without forcing tenants out first. KindKey is an Auburn principal buyer. Landlord-tenant questions belong with an attorney.',
    h1: 'Sell a House with Tenants',
    intro: [
      'You can sell a house with tenants in place. KindKey Home Buyers LLC buys occupied rental houses in King County and Pierce County and does not require you to deliver the property vacant. We are a principal buyer based at 640 1st St SW in Auburn. We are not a real estate agent, and we are not your landlord-tenant lawyer.',
      'Washington has rules about notice, entry, deposits, and ending a tenancy. KindKey does not advise you on those rules and will not ask you to remove tenants illegally so the house is easier to show. If you are unsure whether you can enter, raise rent, or ask someone to leave, talk with a Washington attorney before you do it.',
      'A cash sale can be a fit when you are tired of repairs, you live out of the area, the tenant relationship is strained, or you inherited a rental you never wanted. The lease, if there is one, is a fact the closing has to respect. Tell us whether the agreement is written, month-to-month, or unclear.',
    ],
    sections: [
      {
        heading: 'How a sale works when someone lives there',
        paragraphs: [
          'Give us the address, the general condition, and what you know about the occupancy. We schedule a visit in a way that respects the people living there. You should follow whatever notice rules apply before anyone enters. We can also start from photos and your description if access will take time.',
          'The written offer states that KindKey is buying the property. It should match the occupancy you disclosed. If you accept, the closing agent handles title, deposits that must be transferred, and the settlement statement. Do not promise tenants a change in their rent or their move-out date on KindKey’s behalf.',
        ],
      },
      {
        heading: 'What we buy',
        paragraphs: [
          'We buy single-family rentals, small multi-unit houses, and houses with an ADU or a basement tenant when the seller has the right to sell. Condition can be tired. Long-term tenants in older Auburn valley houses, Kent East Hill ramblers, Federal Way split-levels, Tacoma houses near the Eastside or South Tacoma, and Puyallup rentals are all within the area we serve. We also buy when the owner has moved away and a manager or relative has been collecting rent.',
          'Non-paying occupants are a different problem from a tenant with a lease. KindKey will not coach you through an eviction. If someone will not leave, or if you are in foreclosure at the same time, get legal advice first. Washington’s distressed-property rules under RCW 61.34 are one more reason not to sign a pressured sale without an attorney. KindKey does not interpret that statute.',
        ],
        bullets: [
          'Houses with a written lease or a month-to-month tenant',
          'Inherited rentals the heirs do not want to keep managing',
          'Houses where the owner lives out of state and the repairs never stop',
          'Occupied houses that also need roofs, electrical work, or other major repair',
          'Situations where delivering the house vacant would require a legal process you do not want to run',
        ],
      },
      {
        heading: 'What stays the same for the people who live there',
        paragraphs: [
          'A sale does not erase a valid lease by magic. Security deposits, the right to notice, and the rent terms are legal issues, not marketing points. KindKey’s purchase does not include legal advice to the tenant or to you. If a tenant asks you what happens after closing, send them to the documents and, if needed, to their own advisor. Do not invent a policy.',
          'Showings for a listed sale are hard on occupants. A direct sale to KindKey usually means one visit, not a string of open houses. That is often easier on everyone, and it is still your job to give proper notice for that visit.',
        ],
      },
      {
        heading: 'Price, deposits, and closing costs',
        paragraphs: [
          'An offer on a tenant-occupied house reflects the condition, the location, and the fact that someone lives there. KindKey may hold the house as a rental or take another path after closing. That is the buyer’s decision. You are not charged an agent commission or a separate assignment fee by KindKey.',
          'Tenant deposits that the seller holds may need to be transferred or accounted for at closing. The closing agent can show that on the settlement statement along with mortgage payoffs, taxes, and allocated closing costs. Ask your attorney if you are unsure which deposits are yours to transfer.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do tenants have to move out before KindKey buys the house?',
        answer:
          'No. KindKey can buy a house with tenants in place. Do not force occupants out to make the sale easier. Landlord-tenant questions belong with a Washington attorney.',
      },
      {
        question: 'Can you buy if the tenant will not allow a walkthrough?',
        answer:
          'Start with the notice rules that apply to entry. If access is delayed, we can begin with your description and photos. KindKey will not tell you to enter without whatever notice the law requires.',
      },
      {
        question: 'What if the occupants are not paying rent?',
        answer:
          'Tell us. KindKey may still make an offer, but we will not advise you on eviction, notices, or lockouts. Talk with an attorney about the occupancy before you rely on a sale to solve it.',
      },
      {
        question: 'I inherited a rental. Can I sell it during probate?',
        answer:
          'Sometimes, if the correct person has authority to sign. That is a probate question for your attorney. KindKey buys as a principal and does not provide legal or tax advice. If financial pressure is involved, ask the attorney about RCW 61.34 as well.',
      },
      {
        question: 'Are you acting as my property manager or agent?',
        answer:
          'No. KindKey is the buyer of the house. We do not list it, manage it for you, or represent the tenants.',
      },
    ],
    related: [
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited house',
        description: 'Inherited rentals need a signer with authority.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell before foreclosure',
        description: 'Some rented houses are also behind on the mortgage.',
      },
      {
        href: '/blog/cash-buyer-vs-listing-with-an-agent',
        label: 'Cash buyer versus listing with an agent',
        description: 'Showings and commissions, compared in plain language.',
      },
      {
        href: '/areas/tacoma',
        label: 'Sell a house in Tacoma',
        description: 'Pierce County rentals are part of the area we buy.',
      },
    ],
    breadcrumbs: [home, { name: 'Sell a house with tenants', path: '/sell-house-with-tenants' }],
    ctaTitle: 'Request a cash offer on a rented house',
    ctaSubtitle:
      'You do not have to deliver the house vacant. Ask an attorney before you end a tenancy.',
  },
  {
    path: '/sell-hoarder-house',
    title: 'Sell a Hoarder House or Heavy-Repair House',
    description:
      'Sell a hoarder house or heavy-repair house as-is in King or Pierce County. No clean-out and no contractor bid required. KindKey is an Auburn principal buyer.',
    h1: 'Sell a Hoarder House or Heavy-Repair House',
    intro: [
      'You can sell a house that is packed with belongings, or a house that needs heavy repairs, without cleaning it out or hiring a contractor first. KindKey Home Buyers LLC buys those houses directly from owners in King County and Pierce County. We are based at 640 1st St SW in Auburn. We are not a real estate agent, and we do not require the house to be presentable.',
      'A house can reach this point for many reasons: a long illness, a death in the family, a repair that started and stopped, or years of putting off a roof, a sewer line, or a foundation crack. None of that has to be solved before you ask for a cash offer. You will not be asked to justify how the house got this way.',
      'If a city has also opened a code case, or if the house is part of a probate or a foreclosure, say so. Those facts change who can sign and which deadlines matter. KindKey does not give legal advice. Washington has distressed-property rules under RCW 61.34 that an attorney can explain if the sale is happening under pressure.',
    ],
    sections: [
      {
        heading: 'How the sale works',
        paragraphs: [
          'Tell us the address and, in plain words, what is going on. “You can barely walk through the living room” is a useful description. “The roof leaks into two bedrooms and the electrical panel is original” is also useful. Photos help when walking the full house is difficult. We will not shame you or a relative for the condition.',
          'The offer prices the house as it is, including the cost of removing contents and making repairs after closing. If you accept, you do not have to bag belongings, rent a dumpster, or finish the repair that stalled. Take the papers, photos, and keepsakes you want. The rest can stay.',
        ],
      },
      {
        heading: 'What we buy',
        paragraphs: [
          'We buy houses with heavy contents in every room, houses with only a path from the door to a chair, and houses where garages, yards, and outbuildings are part of the same situation. We also buy heavy-repair houses that are not hoarding situations at all: failed roofs, outdated hazardous-looking electrical, plumbing that has not worked in years, fire or water damage that was patched and then ignored, and additions that were never finished.',
          'These houses show up across our area. Older homes in downtown Auburn and along the valley floor, East Hill and West Hill in Kent, ramblers in Federal Way, plaster-era houses in Tacoma’s North End and Hilltop, and pre-war and mid-century houses in downtown Puyallup are typical because they are old enough to have deferred systems and decades of belongings. Newer houses on Lakeland Hills, Lea Hill, and South Hill can qualify too when a roof, a moisture problem, or a stopped remodel is the issue rather than age alone.',
        ],
        bullets: [
          'Houses filled with belongings, trash, or both, including yards and garages',
          'Inherited houses the family cannot face cleaning out',
          'Heavy repair: roof, foundation, sewer, plumbing, electrical, or mold-like moisture',
          'Stopped remodels with open walls and missing fixtures',
          'Houses that also have a code notice because the condition is visible from the street',
        ],
      },
      {
        heading: 'Privacy and access',
        paragraphs: [
          'A listed sale of a house in this condition means photos on the internet and strangers walking through personal belongings. A sale to KindKey is a private walkthrough and a written offer. We do not post the interior as a case study. If a family member is still living in the house, we work around that. We do not require them to “stage” a room.',
          'Access can be emotional. Some owners want to be present. Some do not. Either is fine. If the house is unsafe to walk — soft floors, no power, blocked exits — say that before we arrive.',
        ],
      },
      {
        heading: 'Repairs, clean-out, and the offer',
        paragraphs: [
          'KindKey handles clean-out and repairs after we own the house, if we buy it. You are not our contractor, and you do not owe us a bid. The offer is lower than a retail price for a repaired, empty house because the work is still ahead. That tradeoff is the point for owners who cannot fund the work or wait for it.',
          'KindKey does not charge you an agent commission or a separate assignment fee. Closing-cost responsibility is in the purchase agreement. Payoffs and liens reduce proceeds and appear on the settlement statement. If you are comparing this with a listing, read the guide on cash buyers and agents, and hire a broker if you want the house on the open market. KindKey will not list it for you.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I have to clean out a hoarder house before you make an offer?',
        answer:
          'No. KindKey makes offers with belongings still in the house. Keep what matters to you and leave the rest. You do not need a junk-removal crew first.',
      },
      {
        question: 'What if only one part of the house is buried and the rest is ordinary?',
        answer:
          'That is still a house we can buy. Describe it as it is. The offer covers the whole property, not only the difficult rooms.',
      },
      {
        question: 'Can you buy a house that needs a new roof, sewer, or foundation?',
        answer:
          'Yes. Heavy-repair houses are part of this page even when contents are not the issue. You do not need a contractor’s bid before requesting an offer, though you can share one if you already have it.',
      },
      {
        question: 'The city cited the debris. Can I still sell?',
        answer:
          'Yes. Tell us about the notice. You do not have to cure it first. If fines became a lien, they are handled through closing. KindKey does not represent you at a code hearing.',
      },
      {
        question: 'Will neighbors or the internet see photos of the inside?',
        answer:
          'KindKey does not need a public listing to buy the house. We do not publish interior photos of your sale as marketing. A walkthrough is for pricing, not for an audience.',
      },
    ],
    related: [
      {
        href: '/sell-house-with-code-violations',
        label: 'Houses with code violations',
        description: 'When the city has already sent a notice.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Inherited and probate houses',
        description: 'Families often face both contents and a court process.',
      },
      {
        href: '/sell-fire-damaged-house',
        label: 'Fire-damaged houses',
        description: 'A different kind of heavy repair, sold as-is.',
      },
      {
        href: '/blog/cash-buyer-vs-listing-with-an-agent',
        label: 'Cash buyer vs. listing with an agent',
        description: 'How to compare a private sale with a listed sale.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Sell a hoarder or heavy-repair house', path: '/sell-hoarder-house' },
    ],
    ctaTitle: 'Request a private cash offer',
    ctaSubtitle: 'You do not need to clean the house or collect repair bids first.',
  },
];

export function getSituation(slug: string) {
  const page = situations.find((item) => item.path === `/${slug}`);
  if (!page) {
    throw new Error(`Unknown situation slug: ${slug}`);
  }
  return page;
}
