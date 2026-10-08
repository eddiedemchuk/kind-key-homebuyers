import type { CitySituationPage } from '@/data/cityFirePages';

const home = { name: 'Home', path: '/' };

const attorneyNote =
  'KindKey does not provide legal or tax advice. Talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret those rules or tell you whether they apply to your sale.';

export const cityForeclosurePages: CitySituationPage[] = [
  {
    citySlug: 'auburn',
    kind: 'foreclosure',
    path: '/areas/auburn/sell-house-before-foreclosure',
    title: 'Sell a House Before Foreclosure in Auburn, WA',
    description:
      'Sell an Auburn house before foreclosure to KindKey, a principal buyer at 640 1st St SW. Confirm your county and your deadline with an attorney. Not legal advice.',
    h1: 'Sell a House Before Foreclosure in Auburn',
    intro: [
      'If your Auburn house is heading toward foreclosure, you may be able to sell it before the sale date and pay the lender from closing proceeds. KindKey Home Buyers LLC is based at 640 1st St SW in downtown Auburn and buys houses directly. We are not a real estate agent, a loan modifier, or a foreclosure-rescue company.',
      'Auburn straddles a county line. Downtown, Lea Hill, Lakeland Hills, and much of the valley are in King County. Part of southern Auburn is in Pierce County. A notice, a trustee, and a payoff are tied to the parcel’s county and to the paperwork you received, not to the fact that your mailing address says Auburn. Ask the title company or your attorney which county applies. Do not guess from the neighborhood name.',
      attorneyNote,
    ],
    sections: [
      {
        heading: 'What KindKey can and cannot do in Auburn',
        paragraphs: [
          'We can look at the house quickly because we are already in the city, including vacant houses downtown and houses on Lea Hill or Lakeland Hills that owners can no longer afford alongside a long commute on SR-167. We can send a written cash offer on the property as it is. We cannot stop a trustee sale, reinstate your loan, or promise that a closing will beat the date on your notice.',
          'If you accept an offer, the closing agent orders a payoff and a title report. The closing date has to be one your attorney believes still works. West Valley and other Auburn neighborhoods are all eligible. Condition, tenants, and code cases do not have to be cleaned up first.',
        ],
      },
      {
        heading: 'Auburn situations that are not the same file',
        paragraphs: [
          'A house with a notice of default and a sound roof is a different closing from a house that is also vacant, fire-damaged, or full of belongings after a relative’s death. Algona and Pacific are separate small cities on Auburn’s edge. If the notice lists an Auburn address inside one of those stories, this page still applies only when the property is actually in Auburn. Bring the notice either way so we do not assume.',
          'People who work north toward Kent and Renton, or west toward Tacoma, sometimes cannot cure a default and also fund repairs. Selling as-is is a way to skip the repair list. It is not a legal strategy. Your attorney compares it with reinstatement, a listed sale, or any other option that still exists on your timeline.',
        ],
        bullets: [
          'King County Auburn parcels and Pierce County Auburn parcels',
          'Houses near downtown, on Lea Hill, on Lakeland Hills, and in West Valley',
          'Vacant houses where the default and the empty months stacked up',
          'Houses with tenants, if occupancy is handled lawfully',
          'Houses that also need repairs a retail buyer would demand before the sale date',
        ],
      },
      {
        heading: 'Read the offer with a lawyer',
        paragraphs: [
          'The offer is a proposal to buy the house. It is not a promise to negotiate with your lender. If the payoff is higher than the price, the sale may depend on the lender. The settlement statement shows payoffs, liens, taxes, and the closing costs allocated in the contract.',
          'RCW 61.34 is Washington’s distressed-property law. KindKey will not summarize what it requires of you or of a buyer. Bring the notice and the offer to a Washington attorney before you sign.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell my Auburn house after I receive a foreclosure notice?',
        answer:
          'Sometimes, if title can still transfer in time and the numbers work at closing. KindKey can make a cash offer. Only your attorney, the lender, and the trustee can speak to whether the foreclosure is still stoppable. KindKey does not interpret RCW 61.34.',
      },
      {
        question: 'Which courthouse or county applies to an Auburn house?',
        answer:
          'It depends on the parcel. Auburn includes King County and Pierce County properties. Confirm with the title company or your attorney. The mailing city is not enough.',
      },
      {
        question: 'Do I have to repair the house or catch up the mortgage first?',
        answer:
          'No. You can request an offer as-is and behind on payments. Catching up the loan is a separate decision to make with your attorney and your lender.',
      },
      {
        question: 'Are you based in Auburn?',
        answer:
          'Yes. KindKey Home Buyers LLC is based at 640 1st St SW, Auburn, WA 98001. We buy as a principal, not as your agent.',
      },
    ],
    related: [
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'The King and Pierce County overview.',
      },
      {
        href: '/areas/auburn',
        label: 'Sell a house in Auburn',
        description: 'KindKey’s home city.',
      },
      {
        href: '/areas/auburn/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Auburn',
        description: 'If the default followed a fire.',
      },
      {
        href: '/blog/sell-house-before-foreclosure-washington',
        label: 'Can I sell before foreclosure in Washington?',
        description: 'Questions to take to an attorney.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Auburn', path: '/areas/auburn' },
      { name: 'Before foreclosure', path: '/areas/auburn/sell-house-before-foreclosure' },
    ],
    ctaTitle: 'Request an Auburn cash offer before the date gets closer',
    ctaSubtitle: 'Bring your attorney into the timeline. KindKey will price the house as it is.',
  },
  {
    citySlug: 'kent',
    kind: 'foreclosure',
    path: '/areas/kent/sell-house-before-foreclosure',
    title: 'Sell a House Before Foreclosure in Kent, WA',
    description:
      'Sell a Kent, WA house before foreclosure. King County cash sale to an Auburn principal buyer. Talk with an attorney about your notice and RCW 61.34.',
    h1: 'Sell a House Before Foreclosure in Kent',
    intro: [
      'You may be able to sell a Kent house before a foreclosure sale if there is still time to transfer title and satisfy what has to be paid at closing. KindKey Home Buyers LLC buys Kent houses directly. We are based in neighboring Auburn, not in a call center, and we are not a real estate agent or a foreclosure consultant.',
      'Kent is in King County. East Hill, West Hill, and the valley around downtown and Kent Station are all inside that county’s records when the house is inside the city. That is a different set of offices from a Tacoma or Puyallup foreclosure. Your notice still controls the dates. KindKey will not calculate “how many days you have left.”',
      attorneyNote,
    ],
    sections: [
      {
        heading: 'A Kent sale on a short calendar',
        paragraphs: [
          'Tell us the address, the condition, and the date you are worried about. East Hill and West Hill houses are a routine drive from Auburn through the valley. We can look at a house that needs a roof, a house with tenants, or a vacant rambler without asking you to list it on the MLS first. A listed sale in Kent can still be right if the house is updated and your attorney says the calendar allows showings and a financed buyer. Many notices do not.',
          'The written offer is only an offer to purchase. The closing agent requests the payoff. If the lender’s number is higher than the offer, you may not be able to sell unless the lender agrees. That is a reason to have an attorney early, not a reason to hide the notice from us.',
        ],
      },
      {
        heading: 'What we see in Kent',
        paragraphs: [
          'Kent is a large, diverse city. Defaults here are not one story. Some are East Hill houses bought when the commute north still felt comfortable. Some are West Hill houses with a repair list and a payment that both slipped. Some are valley houses near the industrial and station areas where an owner moved out and the payment did not. Panther Lake and Lake Meridian are East Hill areas, not separate foreclosure systems.',
          'Renton and Covington border Kent and are not this page. Use them only as landmarks. KindKey does not charge you an agent commission or a separate assignment fee. Closing costs are stated in the purchase agreement and can change the cash you receive, along with liens and taxes.',
        ],
        bullets: [
          'King County houses inside the City of Kent',
          'East Hill, including Panther Lake and Lake Meridian',
          'West Hill houses with deferred repairs',
          'Downtown and valley houses near Kent Station',
          'Occupied or vacant houses, as long as the signer has authority',
        ],
      },
      {
        heading: 'Pressure is a reason to slow down on the paperwork',
        paragraphs: [
          'A fast closing is useful only if you understand it. RCW 61.34 exists because distressed sales can be abused. KindKey will not tell you that our offer is exempt, or that you must sign today. Read it with a Washington attorney. Compare it, if you still have time, with other options your attorney describes.',
          'We will not contact your lender and claim to represent you. We will not ask you to deed the house to a third party informally. If you accept, the deed and the money move through a closing agent, with a settlement statement first.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell my Kent house before the foreclosure sale?',
        answer:
          'You can request a cash offer, and many owners do sell before a sale date when title and payoff allow it. Whether you still can is a question for your attorney and the notice in your hand. KindKey does not interpret RCW 61.34.',
      },
      {
        question: 'Is Kent foreclosure handled in Pierce County?',
        answer:
          'No. Kent is in King County. Pierce County cities such as Tacoma and Puyallup are a different set of records. Your notice and the title report are the sources to trust.',
      },
      {
        question: 'Do you buy on East Hill and West Hill?',
        answer:
          'Yes. Both hills and the valley are areas where KindKey buys houses before foreclosure, in as-is condition.',
      },
      {
        question: 'Will you list the house if I want more exposure?',
        answer:
          'No. KindKey only buys as a principal. Hire a licensed broker if you want a listing, and ask that broker and your attorney whether the timeline is realistic.',
      },
    ],
    related: [
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell before foreclosure',
        description: 'Statewide-area overview for Washington owners.',
      },
      {
        href: '/areas/kent',
        label: 'Sell a house in Kent',
        description: 'The main Kent page.',
      },
      {
        href: '/areas/kent/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Kent',
        description: 'When condition, not just the loan, is the issue.',
      },
      {
        href: '/areas/federal-way/sell-house-before-foreclosure',
        label: 'Federal Way before foreclosure',
        description: 'Another King County city south of Kent.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Kent', path: '/areas/kent' },
      { name: 'Before foreclosure', path: '/areas/kent/sell-house-before-foreclosure' },
    ],
    ctaTitle: 'Get a Kent cash offer and review it with your attorney',
    ctaSubtitle: 'Share the address and the timeline. You are not obligated to accept.',
  },
  {
    citySlug: 'federal-way',
    kind: 'foreclosure',
    path: '/areas/federal-way/sell-house-before-foreclosure',
    title: 'Sell a House Before Foreclosure in Federal Way, WA',
    description:
      'Sell a Federal Way house before foreclosure. King County cash offer from an Auburn principal buyer. Attorney review recommended. RCW 61.34 is not interpreted here.',
    h1: 'Sell a House Before Foreclosure in Federal Way',
    intro: [
      'You may be able to sell a Federal Way house before foreclosure if your notice still leaves a lawful window to close. KindKey Home Buyers LLC buys Federal Way houses as a principal, from an office in Auburn. We are not a real estate agent and we do not run a foreclosure-rescue program.',
      'Federal Way is in King County, between Auburn and Tacoma along I-5 and SR-18. Twin Lakes, Steel Lake, Marine Hills, Dash Point, and Redondo are neighborhoods inside that city, not different counties. Milton and Edgewood, immediately south, are Pierce County. If your paperwork says Federal Way, do not use a Pierce County checklist you found for Tacoma. If you are unsure, your attorney or the title company should confirm the parcel.',
      attorneyNote,
    ],
    sections: [
      {
        heading: 'Why Federal Way owners call',
        paragraphs: [
          'Federal Way houses are often spread out on hills and around lakes. When a payment slips, the house may already need a roof, a deck, or drainage work that a hillside lot makes expensive. Owners commuting on I-5 sometimes decide they cannot fund both the cure amount and the repair. KindKey can make an as-is offer so the repair is not a precondition. That offer does not pause the foreclosure by itself.',
          'A house near The Commons and a house above Dash Point can have very different resale paths. We look at the one you own. You do not have to clear vehicles, finish a listing photo shoot, or ask occupants to leave before we talk. If someone lives there, follow the notice rules that apply to entry. We will not tell you to lock anyone out.',
        ],
      },
      {
        heading: 'The King County closing, practically',
        paragraphs: [
          'If you accept, a closing agent requests payoff figures and title for a King County property inside the City of Federal Way. Taxes, liens, and the mortgage can consume the price. You should see that on a settlement statement before funds are distributed. KindKey does not charge an agent commission or a separate assignment fee.',
          'SR-99 and I-5 make showings noisy and time-consuming for a listed sale. A direct sale is one visit and a closing date. Whether you have time for either path is what the notice and your attorney are for. KindKey will not pick the path for you.',
        ],
        bullets: [
          'King County houses inside Federal Way',
          'Twin Lakes, Steel Lake, Marine Hills, Dash Point, and Redondo',
          'Houses with repair needs that will not be finished before a sale date',
          'Vacant houses that are hard to monitor from another city',
          'Tenant-occupied houses, handled without an illegal move-out',
        ],
      },
      {
        heading: 'Do not sign under a slogan',
        paragraphs: [
          '“We stop foreclosures” is not a sentence KindKey uses, because we cannot stop one. A purchase might pay a lender if the numbers and the clock work. RCW 61.34 is part of why you should not deed a house away in a parking lot or sign a contract you have not read. Take the offer to a Washington attorney.',
          'If the house is also fire-damaged, say that. There is a separate Federal Way page for fire damage, and the foreclosure deadline still belongs in the conversation with your lawyer.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell my Federal Way house before the trustee sale?',
        answer:
          'Possibly, if there is time and the payoff can be satisfied. KindKey can offer to buy the house as-is. Your attorney should compare that with the notice. We do not interpret RCW 61.34.',
      },
      {
        question: 'Is Federal Way in Pierce County because it is near Tacoma?',
        answer:
          'No. Federal Way is in King County. Tacoma, Milton, and Edgewood are in Pierce County. The county on the parcel controls the records.',
      },
      {
        question: 'Do you buy in Twin Lakes and Dash Point?',
        answer:
          'Yes. Those neighborhoods, along with Steel Lake, Marine Hills, and Redondo, are part of the Federal Way area where we buy houses before foreclosure.',
      },
      {
        question: 'Will catching up one payment be required before an offer?',
        answer:
          'No. You can request an offer while you are behind. Reinstatement is a separate option to discuss with your lender and your attorney.',
      },
    ],
    related: [
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'How KindKey approaches these sales in both counties.',
      },
      {
        href: '/areas/federal-way',
        label: 'Sell a house in Federal Way',
        description: 'The main Federal Way page.',
      },
      {
        href: '/areas/federal-way/sell-fire-damaged-house',
        label: 'Fire-damaged Federal Way houses',
        description: 'Condition issues on the same city’s hills and lakes.',
      },
      {
        href: '/areas/milton',
        label: 'Milton',
        description: 'Nearby Pierce County city. No separate foreclosure page.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Federal Way', path: '/areas/federal-way' },
      { name: 'Before foreclosure', path: '/areas/federal-way/sell-house-before-foreclosure' },
    ],
    ctaTitle: 'Ask for a Federal Way cash offer',
    ctaSubtitle: 'Review the timeline with an attorney before you accept any offer.',
  },
  {
    citySlug: 'tacoma',
    kind: 'foreclosure',
    path: '/areas/tacoma/sell-house-before-foreclosure',
    title: 'Sell a House Before Foreclosure in Tacoma, WA',
    description:
      'Sell a Tacoma house before foreclosure in Pierce County. KindKey is an Auburn principal buyer, not an agent. Ask an attorney about your notice and RCW 61.34.',
    h1: 'Sell a House Before Foreclosure in Tacoma',
    intro: [
      'You may be able to sell a Tacoma house before foreclosure, but the answer is in your notice and in Pierce County title, not in a King County checklist. KindKey Home Buyers LLC buys Tacoma houses directly. Our office is in Auburn. We are not a real estate agent, and being based in King County does not make your Tacoma loan a King County matter.',
      'Tacoma is a large Pierce County city. The North End, Proctor, the Stadium District, Hilltop, the Eastside, and South Tacoma have different houses and different prices. A default on an older North End house with plaster and a long-held loan is not the same file as a newer South Tacoma house with a recent payment shock. KindKey looks at the specific house. We do not publish a Tacoma foreclosure rate, and we will not invent one.',
      attorneyNote,
    ],
    sections: [
      {
        heading: 'Pierce County is the record that matters',
        paragraphs: [
          'Payoffs, tax liens, and any court case tied to a Tacoma house run through Pierce County systems and the City of Tacoma where a local code case is also open. University Place and Fircrest are next door and are not Tacoma. Fife is not Tacoma. If your notice uses a Tacoma address, stay on this page and let your attorney confirm the parcel. If the house is actually in University Place, use the cash-offer form with that city named.',
          'We can schedule a visit from Auburn without asking you to host a series of showings along I-5 or SR-16. Vacant houses in Hilltop and South Tacoma are particularly hard on owners who have already moved, because break-ins and code complaints continue while the payment default continues. Selling as-is can address the property. It does not automatically address the foreclosure.',
        ],
      },
      {
        heading: 'What a cash sale changes, and what it does not',
        paragraphs: [
          'If the closing can pay what must be paid, a sale can retire the mortgage debt from proceeds. If it cannot, the lender has to be part of any shortfall discussion, and KindKey will not pretend to negotiate that for you as your representative. The settlement statement is where the numbers have to be visible before you deed the house.',
          'KindKey does not charge an agent commission or a separate assignment fee. We may repair, hold, or resell after we own the house. That is ordinary principal-buyer work. It is not a counseling service. RCW 61.34 is one reason to have your own lawyer read both the notice and the offer.',
        ],
        bullets: [
          'Pierce County houses inside the City of Tacoma',
          'North End, Proctor, Stadium District, and Hilltop',
          'Eastside and South Tacoma houses',
          'Houses with deferred repairs that a financed buyer would flag',
          'Houses with occupants, if you do not use an illegal lockout to get them out',
        ],
      },
      {
        heading: 'Timing',
        paragraphs: [
          'Tell us the date printed on your papers and whether an attorney has already told you a last responsible day to close. We can aim the purchase at a date the closing agent can actually meet. We cannot shrink a trustee’s process because Tacoma is busy or because you are ready.',
          'If probate and foreclosure are both open, stop and get advice on who can sign. An heir’s willingness is not the same thing as authority. KindKey will not guess.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell my Tacoma house before foreclosure?',
        answer:
          'Many owners can, when Pierce County title can transfer in time and the payoff works. KindKey will make a cash offer if we can buy the house. Your attorney should decide whether a sale is still available. We do not interpret RCW 61.34.',
      },
      {
        question: 'Do you treat Tacoma like a King County city?',
        answer:
          'No. Tacoma is in Pierce County. Our Auburn office does not change the county on your deed, your notice, or your taxes.',
      },
      {
        question: 'Which Tacoma neighborhoods do you buy in?',
        answer:
          'We buy throughout Tacoma, including the North End, Proctor, the Stadium District, Hilltop, the Eastside, and South Tacoma.',
      },
      {
        question: 'What if I also have a City of Tacoma code case?',
        answer:
          'Tell us. An open code case does not by itself stop an offer. It also does not go away because you requested one. Liens, if any, belong on the settlement statement. Ask an attorney if the case has a hearing or a vacate order.',
      },
    ],
    related: [
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell before foreclosure in Washington',
        description: 'Attorney-first overview for both counties.',
      },
      {
        href: '/areas/tacoma',
        label: 'Sell a house in Tacoma',
        description: 'The main Tacoma page.',
      },
      {
        href: '/areas/tacoma/sell-fire-damaged-house',
        label: 'Fire-damaged Tacoma houses',
        description: 'Older Tacoma houses after a fire.',
      },
      {
        href: '/areas/puyallup/sell-house-before-foreclosure',
        label: 'Puyallup before foreclosure',
        description: 'Another Pierce County city.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Tacoma', path: '/areas/tacoma' },
      { name: 'Before foreclosure', path: '/areas/tacoma/sell-house-before-foreclosure' },
    ],
    ctaTitle: 'Request a Tacoma cash offer and have an attorney read it',
    ctaSubtitle:
      'Pierce County notices need a Pierce County answer. KindKey supplies the purchase offer.',
  },
  {
    citySlug: 'puyallup',
    kind: 'foreclosure',
    path: '/areas/puyallup/sell-house-before-foreclosure',
    title: 'Sell a House Before Foreclosure in Puyallup, WA',
    description:
      'Sell a Puyallup or South Hill house before foreclosure. Pierce County cash offer from KindKey, an Auburn principal buyer. Talk with an attorney about RCW 61.34.',
    h1: 'Sell a House Before Foreclosure in Puyallup',
    intro: [
      'You may be able to sell a Puyallup house before foreclosure if the notice, the payoff, and Pierce County title still allow a transfer. KindKey Home Buyers LLC buys these houses directly. We are based in Auburn and we are not a real estate agent or a foreclosure advisor.',
      'Say which Puyallup you mean. Downtown Puyallup is inside the city, near Pioneer Park and the fairgrounds, with older houses on a grid. South Hill is the plateau, reached by Meridian and Shaw Road, where many owners have a Puyallup address even though the parcel is unincorporated Pierce County. Both are Pierce County. Neither is King County. Sumner and Edgewood are different cities on the valley edges. Your attorney and the title report should match the notice to the parcel before you rely on a closing date.',
      attorneyNote,
    ],
    sections: [
      {
        heading: 'Two housing markets, one county',
        paragraphs: [
          'A downtown Puyallup house that has been in a family for decades may have an older loan, deferred paint and roof work, and a notice that arrived after a spouse’s death or a medical leave. A South Hill house may be newer, with a larger payment and little equity once sale costs are counted. KindKey does not assume which one you have. The offer is for your address, in its real condition.',
          'Owners sometimes live on South Hill and still own a house downtown, or they moved to Edgewood and left the Puyallup house vacant. Carrying two Pierce County houses during a default gets expensive. A cash sale of the one you do not want can be discussed. It is not a promise that the foreclosure stops. Only the lender, the trustee, and your attorney can describe the status of the case.',
        ],
      },
      {
        heading: 'How the purchase works',
        paragraphs: [
          'We visit, or we start from photos if you cannot be there, and we send a written offer. You do not have to paint, empty the attic, or catch up payments before that step. If you accept, the closing agent works the Pierce County title and the payoff. You should have an attorney check that the closing date is early enough for the notice you received.',
          'KindKey does not charge an agent commission or a separate assignment fee. Closing costs are in the contract. If a city or county lien exists because of a code case on a vacant downtown house or a South Hill lot, it belongs on the settlement statement. We will not tell you the citation is forgiven.',
        ],
        bullets: [
          'City of Puyallup houses, including the downtown grid',
          'South Hill addresses that may be unincorporated Pierce County',
          'Vacant houses and inherited houses with a remaining mortgage',
          'Houses that need repairs a short timeline will not allow',
          'Houses near Sumner or Edgewood that are actually in Puyallup',
        ],
      },
      {
        heading: 'Take RCW 61.34 to a lawyer, not to a blog',
        paragraphs: [
          'Washington’s distressed-property statute is easy to quote and easy to misuse. KindKey will not tell you that a Puyallup sale is outside it, or inside it, because of South Hill or because of the fairgrounds or because of anything else local. The local facts help us price a house. They do not answer a legal test.',
          'If you want a listed sale instead, hire a broker and ask whether a Pierce County buyer with a loan can close before your date. KindKey will not list the house for you. You can hold our offer next to that advice and decide.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell my Puyallup house before foreclosure?',
        answer:
          'If there is time to close and the payoff can be met, a sale is often one of the options an attorney will discuss. KindKey can make a cash offer. We cannot tell you that your particular notice still allows it, and we do not interpret RCW 61.34.',
      },
      {
        question: 'Is a South Hill house a Puyallup foreclosure?',
        answer:
          'South Hill uses Pierce County either way. Some parcels are inside Puyallup and some are unincorporated with a Puyallup mailing address. Your notice and title report identify which. KindKey looks at both.',
      },
      {
        question: 'Do I need to get current on the mortgage before you visit?',
        answer:
          'No. Request the offer as-is. Reinstating the loan is a separate conversation with your lender and your attorney.',
      },
      {
        question: 'We are in Edgewood. Is that Puyallup?',
        answer:
          'No. Edgewood is its own city. KindKey buys in Edgewood, and the main Edgewood page is the better link. This page is for Puyallup and South Hill addresses.',
      },
    ],
    related: [
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'What KindKey will and will not do.',
      },
      {
        href: '/areas/puyallup',
        label: 'Sell a house in Puyallup',
        description: 'The main Puyallup page.',
      },
      {
        href: '/areas/puyallup/sell-fire-damaged-house',
        label: 'Fire-damaged Puyallup houses',
        description: 'Downtown and South Hill after a fire.',
      },
      {
        href: '/blog/sell-house-before-foreclosure-washington',
        label: 'Can I sell before foreclosure in Washington?',
        description: 'A short guide that still sends you to an attorney.',
      },
    ],
    breadcrumbs: [
      home,
      { name: 'Puyallup', path: '/areas/puyallup' },
      { name: 'Before foreclosure', path: '/areas/puyallup/sell-house-before-foreclosure' },
    ],
    ctaTitle: 'Get a Puyallup cash offer you can review with counsel',
    ctaSubtitle: 'Downtown or South Hill, start with the address and the date on your notice.',
  },
];
