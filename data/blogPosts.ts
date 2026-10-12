import type { BlogPost } from '@/lib/content';

const home = { name: 'Home', path: '/' };
const blog = { name: 'Blog', path: '/blog' };

const publishedAt = '2026-10-08';

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

export const blogPosts: BlogPost[] = [
  post('sell-my-house-fast-for-cash-edgewood', {
    breadcrumbName: 'Sell fast for cash in Edgewood',
    title: 'Sell My House Fast for Cash in Edgewood, WA',
    description:
      'How Edgewood homeowners sell a Pierce County house for cash without listing it. KindKey is an Auburn principal buyer at 640 1st St SW, not an agent.',
    h1: 'Sell My House Fast for Cash in Edgewood, WA',
    publishedAt: '2026-10-12',
    intro: [
      'To sell a house fast for cash in Edgewood, you sell it directly to a buyer who can pay at closing without a retail mortgage, instead of listing it and waiting on showings. KindKey Home Buyers LLC does that as a principal buyer. The office is at 640 1st St SW, Auburn, WA 98001, and the phone number is (206) 519-5463. KindKey is not a real estate agent or broker, and KindKey does not list your house.',
      'Edgewood is in Pierce County, between Milton, Fife, Puyallup, and Sumner. The city incorporated on February 28, 1996. You do not need a repair bid, a clean-out, or a pre-inspection before you ask for an offer. KindKey does not promise a specific number of days.',
    ],
    sections: [
      {
        heading: 'What “fast” means on an Edgewood sale',
        paragraphs: [
          'The practical version is a walkthrough, a written offer, and a closing date you help choose with the closing agent. Owners who already live in Puyallup or Tacoma often want a shorter window. Owners who still need to take furniture off a North Hill lot can ask for longer. The offer is not an obligation. You can say no after you see it.',
          'KindKey does not charge an agent commission or a separate assignment fee. Closing-cost responsibility is written in the purchase agreement and can vary. Mortgage payoffs, liens, and taxes can reduce what you receive. The settlement statement, prepared by the closing agent, is the document that shows the figure.',
        ],
      },
      {
        heading: 'North Hill houses and valley houses are different',
        paragraphs: [
          'Most Edgewood residents live on North Hill: single-family houses, longer driveways, and shops or sheds set back from the street. A smaller share of the city sits at the base of the hill in the Puyallup River valley, where water and access are a different problem. KindKey prices the house you own. A citywide discount, quoted before anyone sees the property, is a guess.',
          'Day-to-day commerce runs along Meridian Avenue E, which is State Route 161, and along Jovita Boulevard. Jovita is an older local name, not a separate city. There is no downtown row of open houses the way there is in Puyallup. If the mailing city is Milton, Fife, Puyallup, or Sumner, use that city’s guide. The closing agent confirms the parcel.',
        ],
      },
      {
        heading: 'Pierce County records, and the reservation boundary',
        paragraphs: [
          'An Edgewood deed records with the Pierce County Auditor. Property-tax questions go to Pierce County, not to King County. Federal Way, and most of Auburn, are the wrong county’s checklist. Milton, next door, can fall in either county. Edgewood does not work that way.',
          'The City of Edgewood’s budget and comprehensive plan note that parts of the city lie inside the Puyallup Indian Reservation boundary. That can change what a title report has to explain. KindKey does not interpret tribal jurisdiction. Tell the closing agent if you already know the parcel is inside that boundary.',
        ],
      },
      {
        heading: 'When a listing is the other path',
        paragraphs: [
          'A listing can fit a house that is already updated and able to wait through showings. Hire a licensed broker for that. KindKey will not run the listing and will not tell you a listing is a mistake.',
          'A direct sale fits a vacant hill house, a dated interior, a rental you no longer want, a code notice, or a deadline. Cash means KindKey is not waiting on a buyer’s mortgage approval. It does not mean a suitcase of money, and it does not erase liens. KindKey may repair, hold, rent, or resell after closing. You are selling the house, not hiring a local agent who advertises cash.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I start a cash sale in Edgewood?',
        answer:
          'Send the address through the cash-offer form or call (206) 519-5463. A walkthrough and a written offer come next. You do not have to accept the offer.',
      },
      {
        question: 'Does an Edgewood house have to be repaired first?',
        answer:
          'No. KindKey buys Edgewood houses as they sit, including heavy repairs, code issues, and houses that have been vacant.',
      },
      {
        question: 'Is Edgewood in King County because it borders the county line?',
        answer:
          'No. Edgewood is in Pierce County. King County is the northern border. Milton is the neighbor that can fall in either county. The closing agent confirms the Edgewood parcel.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'The Edgewood city page.',
      },
      {
        href: '/areas/edgewood/sell-my-house-fast',
        label: 'Sell my house fast in Edgewood',
        description: 'The Edgewood fast-sale page.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-milton',
        label: 'Sell fast for cash in Milton',
        description: 'The next city west, split by the county line.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-federal-way',
        label: 'Sell fast for cash in Federal Way',
        description: 'King County, north of Edgewood.',
      },
      {
        href: '/blog/how-to-sell-my-house-fast-for-cash-auburn',
        label: 'Sell fast for cash in Auburn',
        description: 'KindKey’s home city, on the county line.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'The form used across the site.',
      },
    ],
    ctaTitle: 'Ask for an Edgewood cash offer',
    ctaSubtitle: 'Call (206) 519-5463 or use the form. You can say no after you see the number.',
  }),
  post('selling-an-inherited-or-probate-house-edgewood', {
    breadcrumbName: 'Probate houses in Edgewood',
    title: 'Selling an Inherited or Probate House in Edgewood, WA',
    description:
      'How Edgewood families sell an inherited house in a Pierce County probate. Confirm who can sign with an attorney. KindKey is a buyer, not a law firm.',
    h1: 'Selling an Inherited or Probate House in Edgewood, WA',
    publishedAt: '2026-10-12',
    intro: [
      'You sell an inherited or probate house in Edgewood by confirming who has authority to sign the deed, then transferring the house as it sits. KindKey Home Buyers LLC can buy it as a principal once that person is ready. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463. KindKey is not a probate attorney, and this article is not legal or tax advice.',
      'Edgewood is in Pierce County. A parent’s house on North Hill, a house in the Puyallup River valley, and a parcel inside the Puyallup Indian Reservation boundary can share an Edgewood mailing address and still be different title files. The city name is enough to start. It is not enough to pick a courthouse.',
    ],
    sections: [
      {
        heading: 'Pierce County is the residence county for an Edgewood decedent',
        paragraphs: [
          'Pierce County probate is opened with the Clerk of the Superior Court at the County-City Building, 930 Tacoma Ave S, Room 110, Tacoma, WA 98402. The clerk’s phone number is (253) 798-7455, and the public counter is open Monday through Friday, 8:30 a.m. to 4:30 p.m. Pierce County’s probate page says a probate case is needed when the decedent’s assets exceed $100,000 and/or include any real property. A house is real property. Do not assume a small-estate affidavit can take the place of a deed. The same page lists the opening papers and a filing fee. Confirm the current fee with the clerk before you go, because the fee schedule can change.',
          'Washington’s venue statute is RCW 11.96A.050. A petitioner may begin in a Washington county they select, and another party can ask the court to move the case. If the decedent lived in Edgewood, the residence county under that transfer rule is Pierce County. King County Superior Court, in Seattle or Kent, is not the residence county for an Edgewood resident. KindKey will not choose the courthouse or prepare the petition.',
        ],
      },
      {
        heading: 'Letters, nonintervention powers, and other ways title can pass',
        paragraphs: [
          'The closing agent will ask for letters testamentary or letters of administration, and for the order that says whether the personal representative has nonintervention powers. If those powers were granted, RCW 11.68.090 gives the personal representative authority to sell the decedent’s real property without a further court order, subject to the will and the representative’s duties. If they were not granted, a sale may have to follow the court process in chapter 11.56 RCW. The will can also restrict a sale. Agreement among siblings is not a substitute for the signature title requires.',
          'Some Edgewood houses were already titled in a living trust. Some had a transfer-on-death deed recorded under chapter 64.80 RCW. Those paths are not a probate. A Washington attorney, and then the title company, confirms who signs. Heirs can live in Sumner, Puyallup, Fife, Milton, or out of state and still take part. They cannot sign on a handshake.',
        ],
      },
      {
        heading: 'The North Hill house is often the hard part',
        paragraphs: [
          'Inherited houses in Edgewood are often full of a lifetime of belongings, with a shop the family has not opened in years. You do not have to empty them, paint them, or replace a roof before KindKey looks. Take what the family wants. Leave the rest. If a relative still lives there, do not force that person out so the house looks vacant. Occupancy belongs with your attorney.',
          'Tell us about a mortgage, a Pierce County tax bill, a City of Edgewood notice, or fire damage. The city is not the probate court. A yard letter does not appoint a personal representative. KindKey does not give tax advice about basis or gains. Take those questions to a tax professional.',
        ],
      },
      {
        heading: 'When the estate is also behind on the loan',
        paragraphs: [
          'A probate house with a missed payment has two clocks: the court file and the lender’s notice. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret them and will not tell you they do not apply because the seller is an estate. Ask your attorney before you sign under that kind of pressure.',
          'If a sale is allowed, KindKey buys as a principal and does not charge an agent commission or a separate assignment fee. Payoffs and liens can reduce proceeds. The settlement statement shows the figures before closing. You can request an offer while the attorney finishes authority. Do not accept and sign before that authority exists.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can an Edgewood house be sold before probate is finished?',
        answer:
          'Sometimes, if the person with authority can sign and any required court step is done. KindKey does not make that call. Ask a probate attorney, then request an offer if a sale is allowed.',
      },
      {
        question: 'Do I open an Edgewood probate at the King County courthouse in Kent?',
        answer:
          'If the decedent lived in Edgewood, Pierce County is the residence county under the transfer rule in RCW 11.96A.050. The Pierce County Clerk is at 930 Tacoma Ave S in Tacoma. Ask an attorney before you file. KindKey will not file for you.',
      },
      {
        question: 'Does the family have to clean out an Edgewood house first?',
        answer:
          'No. Belongings can stay. A relative who still lives there should not be pushed out so the house looks empty for a buyer.',
      },
      {
        question: 'Will KindKey explain the tax on an inherited Edgewood house?',
        answer:
          'No. Basis, gains, and estate-tax questions belong with a tax professional. KindKey only offers to buy the house.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'Pierce County city page.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'The service page for estate sales.',
      },
      {
        href: '/blog/selling-a-house-in-probate-washington',
        label: 'Probate sales in Washington',
        description: 'Authority to sign, before any city detail.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-milton',
        label: 'Inherited houses in Milton',
        description: 'A two-county probate question next door.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-federal-way',
        label: 'Inherited houses in Federal Way',
        description: 'King County Superior Court, not Pierce.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-auburn',
        label: 'Inherited houses in Auburn',
        description: 'KindKey’s city, which can be either county.',
      },
    ],
    ctaTitle: 'Request an Edgewood offer once you know who can sign',
    ctaSubtitle:
      'Call (206) 519-5463 or use the form. Your attorney confirms authority. KindKey prices the house as it is.',
  }),
  post('avoiding-foreclosure-in-edgewood-wa', {
    breadcrumbName: 'Avoiding foreclosure in Edgewood',
    title: 'Avoiding Foreclosure in Edgewood, WA',
    description:
      'Options and Washington foreclosure timelines for Edgewood homeowners in Pierce County. KindKey is a cash buyer, not a foreclosure consultant. Not legal advice.',
    h1: 'Avoiding Foreclosure in Edgewood, WA: Options and Timelines',
    publishedAt: '2026-10-12',
    intro: [
      'You avoid a foreclosure sale of an Edgewood house by using an option that is still open on your notice: cure the default, reach an agreement with the servicer, or sell before the trustee’s sale if title and the payoff allow it. KindKey Home Buyers LLC can make a cash offer on that third path. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463. KindKey is not a foreclosure consultant, a lender, or a real estate agent. This article is not legal advice.',
      'Edgewood is in Pierce County. A notice of trustee’s sale on an Edgewood deed of trust is recorded with the Pierce County Auditor, because RCW 61.24.040 requires recording in each county where the deed of trust is of record. A King County notice for Federal Way or Auburn is a different file. Talk with a Washington attorney before you sign anything. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret those rules.',
    ],
    sections: [
      {
        heading: 'The Washington timeline, read against your Edgewood notice',
        paragraphs: [
          'Most home loans in Washington are deeds of trust, foreclosed without a lawsuit under chapter 61.24 RCW. A judicial foreclosure under chapter 61.12 RCW is a different case, with a summons. This section is about the nonjudicial path. RCW 61.24.030(8) requires a written notice of default at least 30 days before a notice of sale is recorded, transmitted, or served, for the loans that subsection covers. The statutory form tells owner-occupants that if they do nothing, a notice of sale may be issued as soon as 30 days from the notice of default, and that the notice of sale provides a minimum of 120 days’ notice of the sale date.',
          'RCW 61.24.040 says the trustee records the notice of sale at least 90 days before the sale, or at least 120 days before the sale if a letter under RCW 61.24.031 is required. Those are statutory minimums. A postponed sale, or a loan that does not follow the owner-occupied rules, can show a different date. The date on your paper controls. KindKey cannot order a trustee to move it.',
        ],
      },
      {
        heading: 'Options that are not a sale to KindKey',
        paragraphs: [
          'Reinstatement is in RCW 61.24.090. The borrower can discontinue the sale by curing the default any time before the eleventh day before the sale date in the notice, or before the eleventh day before the actual sale if the trustee continues it. That payment goes to the trustee, in the amount the statute describes. It is not a payment to KindKey, and KindKey does not calculate it.',
          'The servicer may discuss a repayment plan or a modification. KindKey does not negotiate with your lender. Where it applies, foreclosure mediation is in RCW 61.24.163. The notice of default tells owner-occupants that mediation has a deadline measured back from the sale date. Ask a housing counselor or a Washington attorney whether your loan is in that program. A bankruptcy, or a court order restraining the sale, is an attorney’s topic. KindKey will not explain how to file either one.',
        ],
      },
      {
        heading: 'Selling the Edgewood house before the sale date',
        paragraphs: [
          'A completed sale can use proceeds to pay the mortgage and the other liens the title company requires. If the payoff is higher than the price, the sale may not close unless the lender agrees to a different number. KindKey will not negotiate that agreement as your representative. The closing agent shows the figures on a settlement statement before you sign the deed.',
          'You can ask for an as-is offer without catching up payments or repairing the house. A North Hill house with a failing roof and a valley house with drainage trouble are priced as those houses. A posted notice on a quiet Edgewood street is easy for neighbors to see. That stress does not make a City of Edgewood letter the same document as a trustee’s notice. Read the header. Milton, Fife, Puyallup, and Sumner notices are their own files.',
        ],
      },
      {
        heading: 'What to refuse while you decide',
        paragraphs: [
          'Do not deed the house to a stranger outside of escrow. Do not skip a lawyer because someone says cash buyers sit outside RCW 61.34. Requesting a number from KindKey does not lock you in, and it does not stop the sale date. The lender, the trustee, or a completed transaction that pays what must be paid are the events that change the foreclosure. An offer, by itself, is not one of those events.',
          'Compare a direct sale with a listing only if your attorney thinks a listed sale can finish in time. A financed buyer needs an appraisal and underwriting that your date may not allow. KindKey does not charge an agent commission or a separate assignment fee, and KindKey may repair, hold, or resell after closing.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does asking for an offer stop an Edgewood foreclosure?',
        answer:
          'No. An offer does not stop a trustee sale. A completed sale might pay the lender if the numbers and the date work. Your attorney should say whether that is still possible. Call (206) 519-5463 if you want KindKey to look at the house while you get that advice.',
      },
      {
        question: 'Where is an Edgewood notice of trustee’s sale recorded?',
        answer:
          'With the Pierce County Auditor, under RCW 61.24.040, because Edgewood is in Pierce County. Do not search for it in King County’s recorder.',
      },
      {
        question: 'How late can I reinstate an Edgewood loan?',
        answer:
          'RCW 61.24.090 allows a cure until the eleventh day before the sale date, or before the eleventh day before a continued sale. Confirm the amount and the date with the trustee and your attorney.',
      },
      {
        question: 'Is selling the only way to avoid foreclosure in Edgewood?',
        answer:
          'No. A cure, a servicer agreement, mediation where it applies, and other legal options can exist. KindKey only participates if you choose a sale and accept an offer.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'The Edgewood city page.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'The main service page for both counties.',
      },
      {
        href: '/blog/sell-house-before-foreclosure-washington',
        label: 'Sell before foreclosure in Washington',
        description: 'The statewide guide, with RCW 61.34 left to your attorney.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-milton-wa',
        label: 'Avoiding foreclosure in Milton',
        description: 'Same statute, and a county line inside the city.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-federal-way-wa',
        label: 'Avoiding foreclosure in Federal Way',
        description: 'King County recording, north of Edgewood.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-auburn-wa',
        label: 'Avoiding foreclosure in Auburn',
        description: 'KindKey’s city. Most parcels are King County.',
      },
    ],
    ctaTitle: 'Get an Edgewood offer you can take to your attorney',
    ctaSubtitle:
      'Call (206) 519-5463 or share the address and the date on your notice. KindKey does not give legal advice.',
  }),
  post('sell-my-house-fast-for-cash-milton', {
    breadcrumbName: 'Sell fast for cash in Milton',
    title: 'Sell My House Fast for Cash in Milton, WA',
    description:
      'How to sell a Milton house for cash when the city sits in both Pierce and King County. KindKey is an Auburn principal buyer, not an agent.',
    h1: 'Sell My House Fast for Cash in Milton, WA',
    publishedAt: '2026-10-12',
    intro: [
      'To sell a house fast for cash in Milton, you sell it directly to a buyer who can close without a retail loan, after the parcel’s county is identified. KindKey Home Buyers LLC buys as a principal. The office is at 640 1st St SW, Auburn, WA 98001, not at Milton City Hall. Call (206) 519-5463. KindKey is not a real estate agent and does not list houses.',
      'Milton is in both Pierce County and King County. The county line runs through the city. King County’s map of Milton shows that line inside the corporate boundary, including the northern part of the city. A Milton, WA 98354 address does not tell you which county holds the deed. You do not need repairs or a clean-out before you ask for an offer.',
    ],
    sections: [
      {
        heading: 'Start with the county, then the house',
        paragraphs: [
          'Order the conversation this way: address, which county you believe the parcel is in, condition, and whether anyone still lives there. If you do not know the county, say so. Guessing from the school district, from a neighbor in Edgewood, or from a Federal Way mailing address nearby will send the title order to the wrong office. KindKey will not treat a guess as a fact.',
          'The written offer comes after a look at the house. It is not an obligation. KindKey does not charge an agent commission or a separate assignment fee. The closing agent prepares a settlement statement before closing. Payoffs and liens reduce proceeds on either side of the county line.',
        ],
      },
      {
        heading: 'Milton is several kinds of houses',
        paragraphs: [
          'Houses around Surprise Lake, older houses along Milton Way, and houses on the northern streets near the county line are not one product. Fife is immediately west. Edgewood is east. Pacific is north. Federal Way is the larger King County city beyond the line. A cash sale prices the lot you have, including a small older house that will not show well and a house that has been vacant since the owner moved.',
          'City Hall is at 1000 Laurel Street if you need the city itself. KindKey is the buyer in Auburn. A walkthrough can be scheduled from that office. Utilities that are off do not block a first look. Leave furniture you do not want. Take personal papers. Tell us about sheds, vehicles, and anything the offer should include.',
        ],
      },
      {
        heading: 'What the closing agent has to get right',
        paragraphs: [
          'A Pierce County Milton parcel records with the Pierce County Auditor. A King County Milton parcel records with the King County Recorder. Taxes follow the same split. Using the wrong county spends the time a fast sale was supposed to save. The closing date is chosen with you. KindKey does not promise a fixed number of days for every file.',
          'Cash means the purchase is not waiting on a buyer’s mortgage approval. It does not erase excise tax, liens, or a mortgage payoff. KindKey may repair, hold, rent, or resell after closing. If you would rather list the house, hire a licensed broker. KindKey will not run that listing.',
        ],
      },
      {
        heading: 'Deadlines that change the sale',
        paragraphs: [
          'A foreclosure notice, a probate, or a code letter can sit on top of an ordinary move. Those are different problems. A foreclosure notice is a legal problem first. Read the avoiding-foreclosure guide for Milton, and talk with a Washington attorney about RCW 61.34 before you sign. KindKey does not interpret that statute.',
          'An inherited Milton house has the same county question twice: where the decedent lived, and where the parcel sits. Those counties can match and still confuse people, because both are named Milton. Ask for the offer when you are ready. Accept it only if the signer and the county are clear.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I ask for a cash offer on a Milton house?',
        answer:
          'Use the cash-offer form or call (206) 519-5463. Include the address and, if you know it, whether the parcel is in Pierce County or King County. You can decline the offer.',
      },
      {
        question: 'Is all of Milton in Pierce County?',
        answer:
          'No. Milton is in both Pierce County and King County. The parcel controls the records. Edgewood, next door, is in Pierce County. Federal Way is in King County.',
      },
      {
        question: 'Do I have to empty the house before KindKey will look?',
        answer:
          'No. Milton houses can be sold with belongings left behind. Take the papers and the items you want to keep.',
      },
    ],
    related: [
      {
        href: '/areas/milton',
        label: 'Sell a house in Milton',
        description: 'The Milton city page.',
      },
      {
        href: '/areas/milton/sell-my-house-fast',
        label: 'Sell my house fast in Milton',
        description: 'The Milton fast-sale page.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-edgewood',
        label: 'Sell fast for cash in Edgewood',
        description: 'Pierce County, on Milton’s east side.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-federal-way',
        label: 'Sell fast for cash in Federal Way',
        description: 'King County, just north of Milton.',
      },
      {
        href: '/blog/how-to-sell-my-house-fast-for-cash-auburn',
        label: 'Sell fast for cash in Auburn',
        description: 'Where KindKey’s office is.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'No repair bid required.',
      },
    ],
    ctaTitle: 'Start a Milton cash offer',
    ctaSubtitle:
      'Call (206) 519-5463 or send the address. Say which county you think the parcel is in, if you know.',
  }),
  post('selling-an-inherited-or-probate-house-milton', {
    breadcrumbName: 'Probate houses in Milton',
    title: 'Selling an Inherited or Probate House in Milton, WA',
    description:
      'Milton probate can be a Pierce County or King County case. How families sell the house once an attorney confirms who can sign. KindKey is a buyer.',
    h1: 'Selling an Inherited or Probate House in Milton, WA',
    publishedAt: '2026-10-12',
    intro: [
      'You sell an inherited Milton house by confirming two counties’ worth of facts: where the decedent lived, and which county the parcel is in. KindKey Home Buyers LLC can buy the house as-is once the person with authority is ready to sign. Call (206) 519-5463 or use the cash-offer form. The office is at 640 1st St SW, Auburn, WA 98001. KindKey is not a probate attorney. This article is not legal or tax advice.',
      'Milton straddles Pierce County and King County. Neighbors Edgewood and Fife are in Pierce County. The northern part of Milton is in King County. A shared ZIP code, 98354, does not put every house in the same superior court.',
    ],
    sections: [
      {
        heading: 'Two courthouses, and a statute that uses residence',
        paragraphs: [
          'RCW 11.96A.050 lets a petitioner start a probate in a Washington county they select, and it lets another party ask the court to move the case. If the decedent was a Washington resident, the transfer rule points to the county where the decedent lived. Someone who lived in Edgewood resided in Pierce County. Someone who lived in Milton might have resided in either county, depending on which side of the line the house is on. KindKey will not decide that from a street name.',
          'Pierce County filings go to the Clerk of the Superior Court, 930 Tacoma Ave S, Room 110, Tacoma, WA 98402, phone (253) 798-7455. Pierce County’s probate page says a case is needed when assets exceed $100,000 and/or include real property, and it lists the opening documents and the current fee. King County filings are handled by the Superior Court Clerk at the King County Courthouse, 516 Third Avenue, Room E-609, Seattle, and at the Maleng Regional Justice Center, 401 Fourth Avenue North, Room 2C, Kent. Ask the clerk or your attorney which office and which case-assignment area apply. The City of Milton does not probate estates.',
        ],
      },
      {
        heading: 'Authority to sign is separate from the county line',
        paragraphs: [
          'Whichever court issues them, the closing agent wants letters testamentary or letters of administration, and the order on nonintervention powers. RCW 11.68.090 allows a personal representative who has those powers to sell real property without a further court order, subject to the will and the representative’s duties. Without those powers, chapter 11.56 RCW may require a court process before a deed. KindKey cannot issue letters or treat a family agreement as a deed.',
          'A living trust, or a transfer-on-death deed under chapter 64.80 RCW, can mean the house is not a probate asset at all. Title has to see the document. Heirs in Fife, Federal Way, Pacific, or out of state can still sell. Someone local does not have to repaint Surprise Lake house or host showings for that to be true.',
        ],
      },
      {
        heading: 'The house families actually inherit in Milton',
        paragraphs: [
          'Milton estates are often small older houses, full of furniture, on lots that also have a shed or a car nobody has moved. You do not have to haul that out before an offer. Take keepsakes before closing day, not during it. If a relative still lives in the house, do not force a move-out to make the sale easier. Ask your attorney about occupancy.',
          'A mortgage, a code notice, or a tax bill belongs in the first conversation. The notice’s letterhead tells you whether the City of Milton, Pierce County, or King County wrote it. KindKey does not give tax advice. A tax professional handles basis and gains.',
        ],
      },
      {
        heading: 'If the loan is also in default',
        paragraphs: [
          'An estate that is behind on the mortgage adds RCW 61.34 to the probate questions. KindKey does not interpret Washington’s distressed-property rules and will not tell you an estate is exempt. Ask your attorney before you sign a purchase agreement on a short clock.',
          'If a sale is allowed, the purchase is as-is. KindKey does not charge an agent commission or a separate assignment fee. The settlement statement shows what liens and the payoff take out of the price. Request the offer while authority is being sorted. Sign only after authority exists.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which court handles a Milton probate?',
        answer:
          'It depends on where the decedent lived. Pierce County cases are filed with the clerk in Tacoma. King County cases use the clerk in Seattle or Kent. RCW 11.96A.050 is the venue statute. Ask a Washington attorney. KindKey will not choose the court.',
      },
      {
        question: 'Can heirs sell a Milton house from another state?',
        answer:
          'Yes, if they have authority to sign. They do not have to clean the house out or fly back for showings. The closing agent still needs the letters or other documents title requires.',
      },
      {
        question: 'Does a Milton address mean the estate is in Pierce County?',
        answer:
          'No. Milton is in both counties. The residence of the decedent and the county of the parcel can be confirmed from the records. Do not rely on the ZIP code.',
      },
      {
        question: 'Will you advise me on inheritance tax?',
        answer:
          'No. Tax questions go to a tax professional. KindKey’s role is a purchase offer, and only after you know who can sign. Call (206) 519-5463 when you are ready for that offer.',
      },
    ],
    related: [
      {
        href: '/areas/milton',
        label: 'Sell a house in Milton',
        description: 'The Milton city page.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'The service page for King and Pierce County estates.',
      },
      {
        href: '/blog/selling-a-house-in-probate-washington',
        label: 'Probate sales in Washington',
        description: 'What families should expect before the local details.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Inherited houses in Edgewood',
        description: 'A Pierce County probate next door.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-federal-way',
        label: 'Inherited houses in Federal Way',
        description: 'King County, if the Milton parcel is on that side of the line.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-auburn',
        label: 'Inherited houses in Auburn',
        description: 'Another city where the parcel picks the county.',
      },
    ],
    ctaTitle: 'Ask for a Milton offer after authority is clear',
    ctaSubtitle:
      'Call (206) 519-5463 or use the form. Tell us which county the house is in if you already know.',
  }),
  post('avoiding-foreclosure-in-milton-wa', {
    breadcrumbName: 'Avoiding foreclosure in Milton',
    title: 'Avoiding Foreclosure in Milton, WA',
    description:
      'Foreclosure options for Milton homeowners, including how Pierce and King County recordings differ under RCW 61.24. KindKey is a buyer, not a rescue service.',
    h1: 'Avoiding Foreclosure in Milton, WA: Options and Timelines',
    publishedAt: '2026-10-12',
    intro: [
      'A Milton foreclosure is avoided when an option on your notice is still open: you cure the default, you reach an agreement with the servicer, or you sell in time for the closing to pay what title requires. KindKey Home Buyers LLC can offer to buy the house. KindKey cannot stop the trustee. Call (206) 519-5463. The office is at 640 1st St SW, Auburn, WA 98001. This article is not legal advice.',
      'Read the header before you read the timeline. Milton is in both Pierce County and King County, so the notice may be a Pierce County Auditor recording or a King County Recorder recording. Chapter 61.24 RCW is state law either way. The file lives in the parcel’s county. Talk with a Washington attorney before you sign. RCW 61.34, the distressed-property law, is their statute to explain. KindKey does not interpret it.',
    ],
    sections: [
      {
        heading: 'Same state timeline, two different recording offices',
        paragraphs: [
          'For a deed of trust, RCW 61.24.030(8) requires a written notice of default at least 30 days before the notice of sale is recorded, transmitted, or served, on the loans that subsection covers. The form in that statute tells owner-occupants that doing nothing can lead to a notice of sale as soon as 30 days later, and that the notice of sale gives a minimum of 120 days’ notice of the sale. RCW 61.24.040 requires the trustee to record the notice of sale at least 90 days before the sale, or at least 120 days before the sale if a letter under RCW 61.24.031 is required.',
          'Those minimums do not tell you which counter has the paper. RCW 61.24.040 says the notice is recorded in each county where the deed of trust is recorded. In Milton that is either the Pierce County Auditor or the King County Recorder. A notice that says Federal Way is King County. A notice that says Edgewood or Fife is Pierce County. A notice that says Milton still has to be matched to the parcel. Judicial foreclosure under chapter 61.12 RCW is a lawsuit, not this notice. Do not mix the documents up.',
        ],
      },
      {
        heading: 'Options to put next to the date',
        paragraphs: [
          'You can reinstate under RCW 61.24.090 by curing the default before the eleventh day before the sale date, or before the eleventh day before a continued sale. The trustee, not a home buyer, states the amount. You can also ask the servicer about a repayment plan or a modification. KindKey does not call the servicer for you.',
          'Foreclosure mediation, where the statute applies, is RCW 61.24.163. The default notice describes a deadline counted back from the sale date. A housing counselor or a Washington attorney can say whether your loan qualifies. Bankruptcy and a motion to restrain the sale are legal filings. KindKey will not coach you through them. Selling is the only option KindKey participates in, and only if you accept an offer.',
        ],
      },
      {
        heading: 'What a Milton sale can and cannot do',
        paragraphs: [
          'If you sell, the closing agent uses the parcel’s county for title and payoffs. Proceeds can pay the mortgage and other required liens. If the payoff is larger than the price, the lender has to agree before the sale can close that way. KindKey will not negotiate that agreement as your representative. You should see a settlement statement before any deed is signed.',
          'The house can stay as-is. Surprise Lake houses, Milton Way houses, and houses on the King County side of town do not need to be repaired to request an offer. A posted notice in a small city feels public. That feeling does not change the cure deadline or the recording office. KindKey does not charge an agent commission or a separate assignment fee.',
        ],
      },
      {
        heading: 'Pressure to ignore',
        paragraphs: [
          'Do not sign a deed outside escrow because someone met you near City Hall or along Milton Way and said they could “take over the payments.” Do not treat a request for a cash offer as a pause button. The sale date stands until the lender, the trustee, or a completed payoff changes it.',
          'Bring the notice, the county you believe applies, and any offer to your attorney. Then decide. A listing is a broker’s job, and many foreclosure calendars do not leave room for a buyer’s loan. KindKey will not list the house.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does a Milton foreclosure get recorded in Pierce County?',
        answer:
          'Only if the deed of trust is a Pierce County recording. King County Milton parcels are recorded with the King County Recorder. RCW 61.24.040 follows the deed’s county. Check the notice.',
      },
      {
        question: 'Will a cash offer stop the trustee sale?',
        answer:
          'No. KindKey making an offer does not stop a sale date. A closed sale might pay the loan if the payoff and the clock allow it. Ask a Washington attorney before you rely on that.',
      },
      {
        question: 'When does the right to reinstate end?',
        answer:
          'RCW 61.24.090 puts the cure deadline on the eleventh day before the sale, or before the eleventh day before a continued sale. Confirm the figure with the trustee. KindKey does not collect it.',
      },
      {
        question: 'Who do I call if I want an offer while I talk to a lawyer?',
        answer:
          'Call KindKey at (206) 519-5463 or use the cash-offer form. Requesting a number does not obligate you to sell, and it is not a substitute for legal advice.',
      },
    ],
    related: [
      {
        href: '/areas/milton',
        label: 'Sell a house in Milton',
        description: 'The Milton city page.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'How a direct sale differs from a rescue program.',
      },
      {
        href: '/blog/sell-house-before-foreclosure-washington',
        label: 'Washington foreclosure sales',
        description: 'The statewide article. Your notice still controls.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'Pierce County, east of Milton.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-federal-way-wa',
        label: 'Avoiding foreclosure in Federal Way',
        description: 'King County filings north of the Milton line.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-auburn-wa',
        label: 'Avoiding foreclosure in Auburn',
        description: 'Another city with parcels in both counties.',
      },
    ],
    ctaTitle: 'Bring the Milton notice, then ask for a number',
    ctaSubtitle:
      'Call (206) 519-5463 or use the form. Review the timeline with an attorney before you accept.',
  }),
  post('sell-my-house-fast-for-cash-federal-way', {
    breadcrumbName: 'Sell fast for cash in Federal Way',
    title: 'Sell My House Fast for Cash in Federal Way, WA',
    description:
      'How Federal Way homeowners sell for cash without a listing. The city is in King County. KindKey is an Auburn principal buyer, not an agent.',
    h1: 'Sell My House Fast for Cash in Federal Way, WA',
    publishedAt: '2026-10-12',
    intro: [
      'To sell a house fast for cash in Federal Way, you sell it to a buyer who can pay at closing without a retail mortgage, instead of listing it and waiting on a buyer’s loan. KindKey Home Buyers LLC does that as a principal. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463. KindKey is not a real estate agent or broker and will not list the house.',
      'Federal Way is in King County. Twin Lakes, Steel Lake, Marine Hills, Dash Point, and Redondo are neighborhoods inside that city, not separate counties. Milton, just south, is the city that sits in both King and Pierce. Do not use a Pierce County checklist because Tacoma is a short drive down I-5. You do not need repairs before you ask for an offer.',
    ],
    sections: [
      {
        heading: 'The Federal Way version of a direct sale',
        paragraphs: [
          'Send the address, the neighborhood if you know it, the condition, and whether the house is vacant, rented, inherited, or on a deadline. Photos help. A walkthrough is one visit, not a showing schedule along SR-18 or I-5. The written offer is yours to reject. KindKey does not promise the same number of days on every file. The closing agent and you pick a date the title work can meet.',
          'KindKey does not charge an agent commission or a separate assignment fee. Closing costs are whatever the purchase agreement states. The settlement statement shows the mortgage payoff, liens, and your proceeds before you deed the house away. Cash means KindKey is not asking you to wait on mortgage underwriting. It does not mean liens disappear.',
        ],
      },
      {
        heading: 'Lakes, the hillside, and the downtown grid are different houses',
        paragraphs: [
          'A house above Twin Lakes or Steel Lake, a Dash Point or Redondo house nearer the water, a Marine Hills house, and a house near The Commons are priced separately. Lakota and Star Lake are not the same lot as a townhouse by the mall. Anyone who quotes one Federal Way number without seeing the house is guessing. KindKey looks at the one you own.',
          'Older houses in these neighborhoods often need a roof, drainage, or a kitchen that a retail buyer will ask to renegotiate. You do not have to finish that work. You can leave unwanted furniture. Take personal documents. If tenants live there, say so, and do not lock anyone out to make a walkthrough easier. Washington landlord-tenant rules are not something KindKey will coach you through.',
        ],
      },
      {
        heading: 'King County is the recording office',
        paragraphs: [
          'The deed records with the King County Recorder. Property tax is a King County question. Auburn’s southern edge can be Pierce County, and Milton can be either, but a Federal Way parcel is King County. Confirm that on the title report anyway. If the report surprises you, you may be looking at a Milton or unincorporated address that only sounds like Federal Way.',
          'KindKey may repair, hold, rent, or resell after closing. That is the buyer’s business, not an agent’s listing. If the house is updated and you can wait for the open market, hire a licensed broker and compare that net sheet with the cash offer. KindKey will not tell you the listing is a mistake.',
        ],
      },
      {
        heading: 'When speed is about a notice, not a move',
        paragraphs: [
          'Some Federal Way calls are a job transfer. Others are a foreclosure notice, a probate, or a house that has been empty long enough to draw a city letter. Those last three need more than a fast slogan. Foreclosure and probate questions belong with a Washington attorney. KindKey can still look at the house while you get that advice. RCW 61.34 may matter if the sale is under financial pressure. KindKey does not interpret it.',
          'Requesting an offer does not lock you in. Do not sign a purchase agreement and a listing agreement for the same house without understanding both. KindKey’s path is only the purchase.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I start a cash sale in Federal Way?',
        answer:
          'Call (206) 519-5463 or send the address through the cash-offer form. A walkthrough and a written offer follow. You do not have to accept.',
      },
      {
        question: 'Is Federal Way in Pierce County?',
        answer:
          'No. Federal Way is in King County. Tacoma and Edgewood are in Pierce County. Milton, between Federal Way and Edgewood, is in both counties.',
      },
      {
        question: 'Do Twin Lakes and Dash Point houses qualify?',
        answer:
          'Yes. KindKey buys in Twin Lakes, Steel Lake, Marine Hills, Dash Point, Redondo, and the rest of Federal Way, as-is.',
      },
      {
        question: 'Does the house need to be cleaned out first?',
        answer:
          'No. Vacant houses, dated houses, and houses with belongings left in them can all be offered on. Take the items you want to keep.',
      },
    ],
    related: [
      {
        href: '/areas/federal-way',
        label: 'Sell a house in Federal Way',
        description: 'The Federal Way city page.',
      },
      {
        href: '/areas/federal-way/sell-my-house-fast',
        label: 'Sell my house fast in Federal Way',
        description: 'The Federal Way fast-sale page.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-edgewood',
        label: 'Sell fast for cash in Edgewood',
        description: 'Pierce County, south of Federal Way.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-milton',
        label: 'Sell fast for cash in Milton',
        description: 'The two-county city on Federal Way’s south edge.',
      },
      {
        href: '/blog/how-to-sell-my-house-fast-for-cash-auburn',
        label: 'Sell fast for cash in Auburn',
        description: 'KindKey’s office city, east of Federal Way.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'No listing and no repair bid.',
      },
    ],
    ctaTitle: 'Ask for a Federal Way cash offer',
    ctaSubtitle: 'Call (206) 519-5463 or use the form. You can say no after you read the number.',
  }),
  post('selling-an-inherited-or-probate-house-federal-way', {
    breadcrumbName: 'Probate houses in Federal Way',
    title: 'Selling an Inherited or Probate House in Federal Way, WA',
    description:
      'Federal Way estates are King County probate matters. How families sell the house once an attorney confirms who can sign. KindKey is a buyer, not a law firm.',
    h1: 'Selling an Inherited or Probate House in Federal Way, WA',
    publishedAt: '2026-10-12',
    intro: [
      'You sell an inherited Federal Way house once a Washington attorney confirms who can sign, and then you transfer it as it sits. KindKey Home Buyers LLC can buy that house as a principal. Call (206) 519-5463. The office is at 640 1st St SW, Auburn, WA 98001. KindKey is not a probate attorney or a tax advisor. This article is not legal or tax advice.',
      'Federal Way is in King County. Probate is a superior-court case, not a Federal Way municipal-court case. Families lose weeks by calling the city, or by assuming a Milton or Edgewood probate packet applies. If the decedent lived in Federal Way, the residence county under Washington’s venue rules is King County.',
    ],
    sections: [
      {
        heading: 'King County Superior Court, not City Hall',
        paragraphs: [
          'RCW 11.96A.050 allows a petitioner to file in a Washington county they choose, and it allows another party to ask that the case move to the decedent’s county of residence. For a Federal Way resident, that residence county is King County. The Superior Court Clerk has offices at the King County Courthouse, 516 Third Avenue, Room E-609, Seattle, and at the Maleng Regional Justice Center, 401 Fourth Avenue North, Room 2C, Kent. King County uses a probate case-assignment cover sheet. Ask your attorney or the clerk which office hears the matter. KindKey will not open the estate.',
          'Pierce County’s clerk in Tacoma is the right counter for an Edgewood decedent, and it may be the right counter for a Milton decedent who lived on the Pierce County side. It is the wrong residence county for someone who lived in Federal Way. The parcel’s deed still records in King County even after the court issues letters.',
        ],
      },
      {
        heading: 'What the closing agent asks to see',
        paragraphs: [
          'Expect a request for letters testamentary or letters of administration, plus the order granting or withholding nonintervention powers. With those powers, RCW 11.68.090 lets the personal representative sell real property without a further court order, subject to the will and the duty owed to the people interested in the estate. Without them, a sale may need the court process in chapter 11.56 RCW. Original wills have to reach the clerk in the way the court requires. KindKey cannot shorten that step or decide that the heirs’ group text is authority.',
          'A house already in a trust, or a house with a transfer-on-death deed under chapter 64.80 RCW, may never enter probate. Title and your attorney sort that. Out-of-state children can sell a Twin Lakes or Dash Point house without moving back. They still need the correct signer on the deed.',
        ],
      },
      {
        heading: 'Federal Way houses estates actually leave behind',
        paragraphs: [
          'Inherited houses here are often lived-in for decades: a Marine Hills rambler, a Lakota house with a deferred roof, a Redondo house full of furniture, or a place near The Commons that has been vacant since the funeral. You do not have to empty them or update them for KindKey to make an offer. Take what matters. Leave the rest. If someone still lives there, do not force them out for photos.',
          'Mention a remaining mortgage, a King County tax delinquency, an HOA, or fire damage. Those items change the payoff and the condition. They do not change who is allowed to sign. KindKey does not advise you on the tax basis of inherited property.',
        ],
      },
      {
        heading: 'Estates that are also in default',
        paragraphs: [
          'If the Federal Way loan is behind, the probate calendar and the foreclosure calendar are both real. RCW 61.34 can apply to a sale made under that pressure, including a sale by an estate. KindKey will not tell you the statute is irrelevant. Ask your attorney before you sign.',
          'KindKey buys as a principal, without an agent commission or a separate assignment fee charged to you. The settlement statement is where liens and the payoff show up. You may request an offer while letters are still being prepared. You should not accept it until the signer is the person title will accept.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where do I file a Federal Way probate?',
        answer:
          'King County Superior Court. The clerk’s offices are in downtown Seattle and at the Maleng Regional Justice Center in Kent. Federal Way Municipal Court does not handle probate. Ask an attorney before you file.',
      },
      {
        question: 'Can the house be sold before the estate is closed?',
        answer:
          'Sometimes, if the personal representative has authority and any required court step is finished. RCW 11.68.090 covers sales by a representative who has nonintervention powers. KindKey does not decide whether those powers exist.',
      },
      {
        question: 'Do all the heirs have to be in Federal Way to sell?',
        answer:
          'No. Out-of-state heirs can participate. The purchase agreement still has to name the person who has authority to sign. A family vote is not that authority.',
      },
      {
        question: 'Does KindKey give tax advice on a Federal Way inheritance?',
        answer:
          'No. Call (206) 519-5463 when you want a purchase offer. Take basis and gain questions to a tax professional.',
      },
    ],
    related: [
      {
        href: '/areas/federal-way',
        label: 'Sell a house in Federal Way',
        description: 'The Federal Way city page.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'The service page for estate sales.',
      },
      {
        href: '/blog/selling-a-house-in-probate-washington',
        label: 'Probate sales in Washington',
        description: 'Who can sign, before the city details.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Inherited houses in Edgewood',
        description: 'Pierce County Superior Court in Tacoma.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-milton',
        label: 'Inherited houses in Milton',
        description: 'Residence county can be King or Pierce.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-auburn',
        label: 'Inherited houses in Auburn',
        description: 'Mostly King County, with a Pierce County edge.',
      },
    ],
    ctaTitle: 'Request a Federal Way offer once the signer is known',
    ctaSubtitle:
      'Call (206) 519-5463 or use the form. KindKey prices the house. Your attorney confirms authority.',
  }),
  post('avoiding-foreclosure-in-federal-way-wa', {
    breadcrumbName: 'Avoiding foreclosure in Federal Way',
    title: 'Avoiding Foreclosure in Federal Way, WA',
    description:
      'Federal Way foreclosure options under Washington’s deed-of-trust timeline. King County recording. KindKey is a buyer, not a loan modifier. Not legal advice.',
    h1: 'Avoiding Foreclosure in Federal Way, WA: Options and Timelines',
    publishedAt: '2026-10-12',
    intro: [
      'Federal Way owners who want to avoid a foreclosure sale start with the date on the notice, then look at a cure, a servicer agreement, mediation if it applies, or a sale that can close in time. KindKey Home Buyers LLC can make a cash offer. KindKey cannot reinstate your loan or postpone a trustee. Call (206) 519-5463. The office is at 640 1st St SW, Auburn, WA 98001. This article is not legal advice.',
      'Federal Way is in King County, so a nonjudicial notice of trustee’s sale is recorded with the King County Recorder. RCW 61.24.040 is the recording rule. Do not look for the notice at the Pierce County Auditor because you drive through Milton or Fife. Talk with a Washington attorney before you sign. RCW 61.34 is the distressed-property statute. KindKey does not interpret it.',
    ],
    sections: [
      {
        heading: 'Time that can run before the notice of default',
        paragraphs: [
          'On many owner-occupied residential loans, chapter 61.24 RCW adds steps before a notice of default exists. RCW 61.24.031 says a trustee, beneficiary, or agent may not issue the notice of default under RCW 61.24.030(8) until 30 days after the due-diligence contact rules are met and the borrower has not responded, or, if the borrower responds, until 90 days after the initial contact was initiated. That section has exceptions, including some commercial loans and seller-financed sales. KindKey will not tell you that your loan is inside or outside those exceptions.',
          'Once a notice of default is issued, RCW 61.24.030(8) requires that it go out at least 30 days before the notice of sale is recorded, transmitted, or served, for the loans that subsection covers. The statutory form tells owner-occupants that a notice of sale may issue as soon as 30 days later and will give a minimum of 120 days’ notice of the sale. RCW 61.24.040 then requires the notice of sale to be recorded at least 90 days before the sale, or at least 120 days before the sale if a letter under RCW 61.24.031 is required. Your notice is the clock. A blog is not.',
        ],
      },
      {
        heading: 'Cure, mediation, and the options KindKey does not provide',
        paragraphs: [
          'RCW 61.24.090 lets the borrower discontinue the sale by curing the default before the eleventh day before the sale date, or before the eleventh day before a continued sale. The amount is the trustee’s figure. A repayment plan or a loan modification is a conversation with the servicer. KindKey is not that servicer and will not pose as your representative.',
          'Where it applies, foreclosure mediation under RCW 61.24.163 has a deadline the notice of default describes, counted back from the sale date. Ask a housing counselor or a Washington attorney whether Federal Way owner-occupied property in your loan file qualifies. A summons in a judicial foreclosure under chapter 61.12 RCW is a different document from a notice of trustee’s sale. Bankruptcy is a lawyer’s filing. KindKey will not explain how to use it.',
        ],
      },
      {
        heading: 'Selling a Federal Way house before the trustee’s date',
        paragraphs: [
          'A sale can pay the mortgage and other required liens from closing proceeds when the price covers them and the date is still open. If it does not cover them, the lender has to agree to something else or the sale does not close. KindKey will not negotiate that agreement for you. The closing agent shows the math on a settlement statement first.',
          'You do not have to catch up payments or repair a Twin Lakes roof, a Marine Hills deck, or a Dash Point drainage problem before requesting an offer. There is a separate Federal Way page for selling before foreclosure if you want the service-page version of this path. KindKey does not charge an agent commission or a separate assignment fee. An offer does not, by itself, stop the sale.',
        ],
      },
      {
        heading: 'How to use the days you still have',
        paragraphs: [
          'Put the sale date, the eleventh-day cure deadline, and any mediation date from the notice on one page. Take that page and any offer to a Washington attorney. If the attorney says a listed sale cannot finish, a direct sale is the comparison that is left, not a slogan about stopping foreclosure. KindKey does not use that slogan, because a buyer cannot stop a trustee.',
          'Do not deed the house away in a parking lot near The Commons or sign a contract that postpones the settlement statement. RCW 61.34 exists because owners under this kind of pressure get rushed. Requesting a KindKey number does not lock you in.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are Federal Way foreclosures recorded in King County?',
        answer:
          'Yes. A notice of trustee’s sale is recorded with the King County Recorder under RCW 61.24.040. Pierce County is the wrong office. Milton, next door, can be either county. Federal Way is not.',
      },
      {
        question: 'Does the pre-foreclosure contact period apply to every Federal Way loan?',
        answer:
          'No. RCW 61.24.031 has exceptions. The notice in your hand, and a Washington attorney, are how you tell whether the 30-day or 90-day contact rule already ran. KindKey will not make that call.',
      },
      {
        question: 'Can I sell before the trustee sale without catching up payments?',
        answer:
          'You can request an as-is offer without reinstating. Whether a sale can close depends on the payoff, the price, and the date. Your attorney should compare those. Call (206) 519-5463 if you want the offer side of that comparison.',
      },
      {
        question: 'Will KindKey stop the foreclosure?',
        answer:
          'No. KindKey is a buyer. A completed sale might pay the lender from proceeds. The offer itself does not change the sale date.',
      },
    ],
    related: [
      {
        href: '/areas/federal-way',
        label: 'Sell a house in Federal Way',
        description: 'The Federal Way city page.',
      },
      {
        href: '/areas/federal-way/sell-house-before-foreclosure',
        label: 'Sell before foreclosure in Federal Way',
        description: 'The city service page for this situation.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'The main service page.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'Pierce County Auditor, not King County Recorder.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-milton-wa',
        label: 'Avoiding foreclosure in Milton',
        description: 'The county line south of Federal Way.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-auburn-wa',
        label: 'Avoiding foreclosure in Auburn',
        description: 'Mostly King County, with a Pierce County portion.',
      },
    ],
    ctaTitle: 'Get a Federal Way number for your attorney to review',
    ctaSubtitle:
      'Call (206) 519-5463 or send the address and the date on the notice. KindKey does not give legal advice.',
  }),
  post('selling-an-inherited-or-probate-house-auburn', {
    breadcrumbName: 'Probate houses in Auburn',
    title: 'Selling an Inherited or Probate House in Auburn, WA',
    description:
      'Auburn probate can be King County or Pierce County, depending on where the decedent lived. KindKey buys the house from Auburn. Not legal advice.',
    h1: 'Selling an Inherited or Probate House in Auburn, WA',
    publishedAt: '2026-10-12',
    intro: [
      'You sell an inherited Auburn house by confirming who can sign, then selling the house as it sits. KindKey Home Buyers LLC can buy it. The office is in the city, at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463. Being local does not make KindKey a probate attorney. This article is not legal or tax advice.',
      'Most of Auburn is in King County. A southern portion of the city is in Pierce County. Downtown, Lea Hill, and Lakeland Hills are commonly King County. A parcel toward Algona, Pacific, or the southern edge can come back as Pierce County at title. The decedent’s residence county, not the “Auburn” line on the envelope, is what RCW 11.96A.050 uses when a party asks to move venue.',
    ],
    sections: [
      {
        heading: 'The buyer is in Auburn. The court may not be.',
        paragraphs: [
          'If the decedent lived on a King County Auburn parcel, the residence county is King County. The Superior Court Clerk is at 516 Third Avenue, Room E-609, in the King County Courthouse in Seattle, and at 401 Fourth Avenue North, Room 2C, in the Maleng Regional Justice Center in Kent. Kent is the closer counter for many south-end families. Ask your attorney which case-assignment area applies. KindKey will not file the petition because the office is nearby.',
          'If the decedent lived on a Pierce County Auburn parcel, the residence county is Pierce County. Those filings go to the Clerk of the Superior Court at 930 Tacoma Ave S, Room 110, Tacoma, phone (253) 798-7455. Pierce County’s probate page says a case is needed when assets exceed $100,000 and/or the estate includes real property, and it publishes the current fee and the opening documents. Sumner is its own Pierce County city. Algona and Pacific are not Auburn neighborhoods. Do not borrow their paperwork.',
        ],
      },
      {
        heading: 'Letters, and the sales that never go through probate',
        paragraphs: [
          'The closing agent will ask for letters and for whether nonintervention powers were granted. RCW 11.68.090 gives a personal representative with those powers the authority to sell real property without a further court order, subject to the will and the representative’s duties. If the powers were not granted, chapter 11.56 RCW may require court involvement. The will can forbid a sale or limit price. KindKey cannot waive any of that because the house is a short drive from 1st Street.',
          'Some Auburn parents put the house in a living trust. Some recorded a transfer-on-death deed under chapter 64.80 RCW. Those are not probate files. Heirs in Kent, Federal Way, or out of state can still sell a Lea Hill house or a valley house. They need the signer title will accept, not a family consensus whispered at the kitchen table.',
        ],
      },
      {
        heading: 'What Auburn estate houses usually look like',
        paragraphs: [
          'Lea Hill and Lakeland Hills houses are a different inheritance from a smaller house on the valley floor near the Green River, or a downtown house that has been vacant since the owner moved to a care facility. Belongings, a deferred roof, and a yard that got away are common. You do not have to clean them out or remodel them first. Take what the family wants before closing day.',
          'If a relative remains in the house, leave that occupancy question with your attorney. Tell KindKey about a mortgage, a code notice, or fire damage so the offer matches the property. Tax basis and capital gains are a tax professional’s work. KindKey will not estimate them.',
        ],
      },
      {
        heading: 'When the estate is racing a foreclosure notice',
        paragraphs: [
          'An Auburn estate that is also behind on the loan should be treated as a legal emergency, not as a reason to skip reading the purchase agreement. RCW 61.34 may apply. KindKey does not interpret it and does not claim an estate sale is exempt. The county on the deed of trust, King or Pierce, is also the county on the foreclosure recording.',
          'If your attorney says a sale is allowed, KindKey buys as a principal. There is no agent commission and no separate assignment fee charged to the seller. The settlement statement shows the payoff. You can ask for the number while letters are in process. Sign after that authority exists.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is an Auburn probate filed in King County?',
        answer:
          'Often, because most of Auburn is in King County and venue follows where the decedent lived. A decedent who lived on a Pierce County Auburn parcel is a Pierce County residence question. Ask an attorney. KindKey will not pick the court.',
      },
      {
        question: 'Can I sell my parent’s Auburn house before probate ends?',
        answer:
          'Sometimes, if the personal representative can sign and any court step your attorney identifies is done. Nonintervention powers are described in RCW 11.68.090. KindKey does not decide if you have them.',
      },
      {
        question: 'Do we have to empty a Lea Hill or valley house first?',
        answer:
          'No. KindKey can offer on the house with belongings in it. Remove personal papers and anything the family wants to keep.',
      },
      {
        question: 'Who do I call for the offer?',
        answer:
          'Call (206) 519-5463 or use the cash-offer form. The Auburn office can look at a local house. The call is not legal advice, and you can decline the offer.',
      },
    ],
    related: [
      {
        href: '/areas/auburn',
        label: 'Sell a house in Auburn',
        description: 'The Auburn city page.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'The service page for estate sales.',
      },
      {
        href: '/blog/selling-a-house-in-probate-washington',
        label: 'Probate sales in Washington',
        description: 'The statewide explanation of who can sign.',
      },
      {
        href: '/blog/how-to-sell-my-house-fast-for-cash-auburn',
        label: 'Sell fast for cash in Auburn',
        description: 'The direct-sale steps, when probate is not the issue.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Inherited houses in Edgewood',
        description: 'Pierce County, south of Auburn.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-milton',
        label: 'Inherited houses in Milton',
        description: 'Another city split by the county line.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-federal-way',
        label: 'Inherited houses in Federal Way',
        description: 'King County Superior Court, west of Auburn.',
      },
    ],
    ctaTitle: 'Request an Auburn estate offer',
    ctaSubtitle:
      'Call (206) 519-5463 or use the form. Your attorney confirms who signs. KindKey prices the house as it is.',
  }),
  post('avoiding-foreclosure-in-auburn-wa', {
    breadcrumbName: 'Avoiding foreclosure in Auburn',
    title: 'Avoiding Foreclosure in Auburn, WA',
    description:
      'Auburn foreclosure options and Washington timelines. Most of the city is King County; part of the south end is Pierce. KindKey is a buyer, not a consultant.',
    h1: 'Avoiding Foreclosure in Auburn, WA: Options and Timelines',
    publishedAt: '2026-10-12',
    intro: [
      'Auburn owners can sometimes avoid a trustee sale by curing the default or by selling before the date, if the notice still leaves a lawful window. KindKey Home Buyers LLC can make a cash offer from its office at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463. KindKey is not a foreclosure consultant, a lender, or a real estate agent. This article is not legal advice.',
      'The county printed on the notice decides the file. Most Auburn parcels are in King County, so many notices are recorded with the King County Recorder. Part of southern Auburn is in Pierce County, and those notices are recorded with the Pierce County Auditor. RCW 61.24.040 requires recording in each county where the deed of trust is recorded. Lea Hill, Lakeland Hills, and downtown are not a safe guess. Ask the title company or your attorney. Washington’s distressed-property rules are RCW 61.34. KindKey does not interpret them.',
    ],
    sections: [
      {
        heading: 'The timeline in chapter 61.24 RCW',
        paragraphs: [
          'For loans covered by RCW 61.24.030(8), a written notice of default has to be given at least 30 days before a notice of sale is recorded, transmitted, or served. The form in the statute tells owner-occupants that if they do nothing, a notice of sale may issue as soon as 30 days from the notice of default, and that the notice of sale provides a minimum of 120 days’ notice of the actual sale. On many owner-occupied loans, RCW 61.24.031 also requires contact and a waiting period before that notice of default can be issued. The section has exceptions. Your notice shows which stage you are already in.',
          'RCW 61.24.040 says the trustee records the notice of sale at least 90 days before the sale, or at least 120 days before the sale if a letter under RCW 61.24.031 is required. RCW 61.24.090 allows a cure until the eleventh day before the sale date, or until the eleventh day before a continued sale. A judicial foreclosure under chapter 61.12 RCW is a court case with a summons, not this trustee notice. KindKey cannot move any of these dates.',
        ],
      },
      {
        heading: 'Options that do not involve selling to KindKey',
        paragraphs: [
          'Reinstatement means paying the trustee the cure amount in RCW 61.24.090 before that eleventh-day deadline. A repayment plan or a loan modification means talking to the servicer. Mediation, where RCW 61.24.163 applies, has a deadline the notice describes. A housing counselor or a Washington attorney should say whether your Auburn loan is in that program. KindKey does not attend mediation and does not call your lender as your representative.',
          'Bankruptcy and a lawsuit to restrain the sale are attorney work. KindKey will not explain how to file them. If you want a listed sale instead of a direct sale, hire a licensed broker, and only if your attorney thinks a financed buyer can close before the date. Many cannot.',
        ],
      },
      {
        heading: 'Selling an Auburn house while the notice is open',
        paragraphs: [
          'You can ask for an as-is offer without catching up the mortgage or repairing the house. A valley house near the Green River, a Lea Hill house, and a Lakeland Hills house are different collateral. Southern parcels that title places in Pierce County use Pierce County records even though the mailing city says Auburn. West Valley and the rest of the city are eligible. Condition does not have to be fixed first.',
          'If you accept, the closing agent orders the payoff. Proceeds can pay the loan and other required liens when the numbers work. When they do not, the sale depends on the lender. You should see that on a settlement statement before closing. KindKey does not charge an agent commission or a separate assignment fee. There is a separate Auburn page for selling before foreclosure if you want the shorter service-page version. An offer is not a postponement.',
        ],
      },
      {
        heading: 'Use the Auburn office without treating it as legal advice',
        paragraphs: [
          'You can bring the notice to a local buyer and still refuse the offer. Do not deed the house to anyone outside escrow, downtown or elsewhere. Do not sign because someone says RCW 61.34 does not apply to cash buyers. The statute is aimed at sales made when an owner is in distress. Your attorney applies it. KindKey will not.',
          'Algona, Pacific, and Sumner notices are not Auburn notices, even when the commute is the same. Sumner is in Pierce County. Confirm the city and the county on the paper in your hand, then decide. Requesting a number from KindKey does not lock you in.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is an Auburn foreclosure a King County case?',
        answer:
          'Often, because most of Auburn is in King County and the notice is recorded where the deed of trust is recorded. Southern Auburn can be Pierce County. Read the notice. Do not guess from the neighborhood.',
      },
      {
        question: 'Can I reinstate instead of selling?',
        answer:
          'RCW 61.24.090 allows a cure before the eleventh day before the sale, or before the eleventh day before a continued sale. The trustee sets out the amount. KindKey does not collect a reinstatement and does not calculate it.',
      },
      {
        question: 'Does calling KindKey stop the Auburn sale date?',
        answer:
          'No. Call (206) 519-5463 if you want a cash offer to review with your attorney. The call and the offer do not postpone a trustee. A completed sale might pay the loan if the payoff and the date allow it.',
      },
      {
        question: 'Do I have to repair the house before I ask for an offer?',
        answer:
          'No. KindKey can look at Auburn houses as they are, including vacant houses and houses that need major work. You can decline the offer.',
      },
    ],
    related: [
      {
        href: '/areas/auburn',
        label: 'Sell a house in Auburn',
        description: 'The Auburn city page.',
      },
      {
        href: '/areas/auburn/sell-house-before-foreclosure',
        label: 'Sell before foreclosure in Auburn',
        description: 'The Auburn service page for this deadline.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'The main service page.',
      },
      {
        href: '/blog/sell-house-before-foreclosure-washington',
        label: 'Sell before foreclosure in Washington',
        description: 'Statewide context for the notice in your hand.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'Pierce County, south of Auburn.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-milton-wa',
        label: 'Avoiding foreclosure in Milton',
        description: 'A city that, like Auburn, crosses the county line.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-federal-way-wa',
        label: 'Avoiding foreclosure in Federal Way',
        description: 'King County, west of Auburn.',
      },
    ],
    ctaTitle: 'Get an Auburn offer you can review with counsel',
    ctaSubtitle:
      'Call (206) 519-5463 or send the address and the date on your notice. KindKey does not give legal advice.',
  }),

  post('sell-house-with-code-violations-tacoma', {
    breadcrumbName: 'Code violations in Tacoma',
    title: 'How to Sell a House with Code Violations in Tacoma, WA',
    description:
      'How Tacoma owners sell a house with an open code violation without finishing the city’s repairs first. KindKey is an Auburn principal buyer, not an agent.',
    h1: 'How to Sell a House with Code Violations in Tacoma, WA',
    publishedAt: '2026-10-12',
    intro: [
      'You sell a house with code violations in Tacoma by pricing it as it sits and closing through a title company, without finishing the city’s repair list first. KindKey Home Buyers LLC does that as a principal buyer. The office is at 640 1st St SW, Auburn, WA 98001. KindKey is not a real estate agent or broker, and KindKey does not clear the citation for you.',
      'Tacoma is in Pierce County. A notice about grass, debris, an unpermitted room, a boarded window, or an unsafe structure does not have to be cured before you ask for an offer. The agency that wrote the letter still controls the case. This article is not legal advice. If the notice has a hearing, a fine, or a vacate order, talk with a Washington attorney before you rely on a sale to solve it.',
    ],
    sections: [
      {
        heading: 'What the Tacoma notice changes',
        paragraphs: [
          'The letter tells you which agency is involved. A City of Tacoma notice is not a Pierce County notice, and it is not a King County notice from Auburn, Kent, or Federal Way. University Place and Fircrest are separate cities beside Tacoma. If the header does not say Tacoma, do not treat this page as if it did. The closing agent and the title report confirm the parcel.',
          'An open case does not, by itself, stop a deed. It also does not close because you requested an offer. Until recording, deadlines on the notice are still yours. Do not skip a hearing because a buyer is looking at the house. KindKey will not tell you how to contest a citation or what a hearing officer will decide.',
        ],
      },
      {
        heading: 'Tacoma houses this sale fits',
        paragraphs: [
          'Older houses in the North End, the Proctor district, and the Stadium District are a different product from mid-century houses on the Eastside and in South Tacoma. Hilltop’s lots are tighter, so a yard, a vehicle, or a boarded opening is easy to see from the street. A notice can be about any of those, or about an unpermitted room, a stopped repair, or a structure the city says is not safe. The offer follows that house and that open case. Anyone who quotes a Tacoma-wide discount without seeing the notice and the house is guessing.',
          'You do not need a contractor bid, a clean-out, or a final inspection before KindKey will look. Photos of the posting and of the condition are enough to start. If the structure is not safe to enter, say so. An exterior look can begin the conversation. KindKey may repair, hold, or resell after closing. You are selling the house, not hiring someone to fight the case.',
        ],
      },
      {
        heading: 'Fines, liens, and a foreclosure overlap',
        paragraphs: [
          'Some cities record liens for unpaid fines or for the cost of abating a property. KindKey does not promise that every Tacoma fine disappears when you sign. Amounts that must be paid can reduce proceeds the same way a mortgage payoff can. The settlement statement, prepared by the closing agent, is where you see them. KindKey does not negotiate the citation for you. KindKey does not charge an agent commission or a separate assignment fee.',
          'If the code case is also sitting next to a foreclosure notice or an estate, talk with a Washington attorney before you sign a purchase agreement. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute and will not tell you it does not apply because the immediate problem is a city letter. Requesting an offer does not lock you in.',
        ],
      },
      {
        heading: 'Why owners sell instead of curing the notice',
        paragraphs: [
          'Curing a small yard notice can be the right choice if you want to keep the house. It is a poor fit when the letter requires a new roof, removal of an unpermitted unit, or a full clean-out you cannot staff, and you already live somewhere else. A listing still means showings, disclosures, and buyers who may ask for repairs before they close. A financed buyer may not be able to close while the case is open. KindKey will not run that listing. Hire a licensed broker if you want one.',
          'A direct sale is a walkthrough, a written offer, and a closing date you help choose. The offer reflects the remaining work, so it can be less than a retail price for a violation-free house. Compare the number with the calendar and the repair budget you actually have. You can say no after you see it.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell a Tacoma house before the code case is closed?',
        answer:
          'Yes. KindKey buys Tacoma houses with open violations and does not require you to finish the city’s repair list first. The city still controls its case until it says otherwise.',
      },
      {
        question: 'Does KindKey speak to the City of Tacoma for me?',
        answer:
          'No. KindKey is the buyer of the house, not a code consultant and not a real estate agent. Bring the notice to the conversation, and take legal questions to a Washington attorney.',
      },
      {
        question: 'What if the Tacoma notice overlaps a foreclosure?',
        answer:
          'Ask a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34 that KindKey will not interpret. You can still request a cash offer while you get that advice.',
      },
    ],
    related: [
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The main service page for King and Pierce County.',
      },
      {
        href: '/areas/tacoma',
        label: 'Sell a house in Tacoma',
        description: 'Pierce County, where KindKey buys directly.',
      },
      {
        href: '/areas/tacoma/sell-fire-damaged-house',
        label: 'Fire-damaged houses in Tacoma',
        description: 'Unsafe-structure postings often follow a fire.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'No repair bid required.',
      },
    ],
    ctaTitle: 'Ask for a Tacoma offer while the notice is open',
    ctaSubtitle: 'Share the address and what the City of Tacoma letter says. You can say no.',
  }),
  post('how-to-sell-my-house-fast-for-cash-auburn', {
    breadcrumbName: 'Sell fast for cash in Auburn',
    title: 'How to Sell a House Fast for Cash in Auburn, WA',
    description:
      'How Auburn homeowners sell a house for cash without a listing. KindKey Home Buyers LLC is a principal buyer at 640 1st St SW, not a real estate agent.',
    h1: 'How to Sell My House Fast for Cash in Auburn, WA',
    intro: [
      'To sell a house fast for cash in Auburn, you sell it directly to a buyer who can pay at closing without a retail loan, instead of listing it and waiting for showings. KindKey Home Buyers LLC does that as a principal buyer. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463. KindKey is not a real estate agent or broker, and KindKey does not list your house.',
      'Auburn sits mostly in King County, with a southern portion in Pierce County, so the parcel’s county still has to be confirmed at title. The mailing city being Auburn is enough to start. You do not need repairs, a clean-out, or a pre-inspection before you ask for an offer.',
    ],
    sections: [
      {
        heading: 'The steps, in order',
        paragraphs: [
          'First, send the address, the condition, and a phone number or email. Mention if the house is vacant, rented, inherited, fire-damaged, or tied to a deadline. Photos help. A walkthrough can happen in town quickly because the buyer is based in downtown Auburn, including houses on Lea Hill, Lakeland Hills, the valley floor, and West Valley.',
          'Second, read the written offer. It is not an obligation. Compare it with what you would net from a listing after repairs, time, and a negotiated commission, if you even want that path. KindKey does not charge you an agent commission or a separate assignment fee. Closing-cost responsibility is in the purchase agreement and can vary.',
          'Third, if you accept, the closing agent orders title and payoffs and gives you a settlement statement before closing. The date is chosen with you. Owners who already moved often want a shorter window. Owners who need to collect belongings can ask for longer. KindKey does not promise a specific number of days for every file.',
        ],
      },
      {
        heading: 'When a fast Auburn sale is a fit',
        paragraphs: [
          'A cash sale fits houses that will not show well: dated interiors on the hill, a vacant valley house, a rental you no longer want, or a property with a code notice. It also fits a deadline, including a move or a foreclosure notice. A foreclosure notice is a legal problem first. Talk with a Washington attorney before you sign, and ask them about Washington’s distressed-property rules under RCW 61.34. KindKey does not interpret that law.',
          'A listing can fit a house that is already updated, empty of problems, and able to wait. KindKey will not tell you a listed sale is a mistake. KindKey also will not run that listing. If you want one, hire a licensed broker.',
        ],
      },
      {
        heading: 'Auburn details that change the conversation',
        paragraphs: [
          'Lea Hill and Lakeland Hills are not the same product as a smaller house downtown near the Green River valley. Algona and Pacific are neighboring cities, not Auburn neighborhoods. If you are on the southern edge, do not be surprised if title comes back in Pierce County. None of that stops an offer. It changes which records the closing agent orders.',
          'You can leave unwanted furniture. You should remove documents and anything you want to keep. Utilities that are off do not block a first look. Insurance on a vacant Auburn house is your insurer’s question, not a promise KindKey can make.',
        ],
      },
      {
        heading: 'What “cash” means here',
        paragraphs: [
          'Cash means KindKey is not asking you to wait on a buyer’s mortgage approval. It does not mean a suitcase of money, and it does not mean closing costs, liens, or taxes disappear. The settlement statement is the document that shows what you actually receive.',
          'KindKey may repair, hold, rent, or resell after closing. That is how a principal buyer works. You are selling the house, not hiring a local agent who happens to advertise cash.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I start a cash sale in Auburn?',
        answer:
          'Send the address through the cash-offer form or call (206) 519-5463. A walkthrough and a written offer come next. You do not have to accept the offer.',
      },
      {
        question: 'Does the house need to be repaired first?',
        answer:
          'No. KindKey buys Auburn houses as-is, including heavy repairs, code issues, and houses that have been sitting vacant.',
      },
      {
        question: 'Are you a real estate agent in Auburn?',
        answer:
          'No. KindKey Home Buyers LLC buys as a principal. If you want a listing, hire a licensed broker.',
      },
    ],
    related: [
      {
        href: '/areas/auburn',
        label: 'Sell a house in Auburn',
        description: 'The Auburn city page.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'The form used across the site.',
      },
      {
        href: '/blog/cash-buyer-vs-listing-with-an-agent',
        label: 'Cash buyer vs. listing with an agent',
        description: 'A side-by-side look at the two paths.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-edgewood',
        label: 'Sell fast for cash in Edgewood',
        description: 'Pierce County, south of Auburn.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-milton',
        label: 'Sell fast for cash in Milton',
        description: 'A city in both King and Pierce County.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-federal-way',
        label: 'Sell fast for cash in Federal Way',
        description: 'King County, west of Auburn.',
      },
    ],
    ctaTitle: 'Start an Auburn cash offer',
    ctaSubtitle:
      'Call (206) 519-5463 or tell KindKey about the house. You can say no after you see the number.',
  }),
  post('selling-a-house-in-probate-washington', {
    breadcrumbName: 'Probate sales in Washington',
    title: 'Selling a House in Probate in Washington',
    description:
      'What Washington families should expect when selling a house during probate. Confirm who can sign with an attorney. KindKey is a principal buyer, not a law firm.',
    h1: 'Selling a House in Probate in Washington: What to Expect',
    intro: [
      'You should expect a probate sale in Washington to turn on one question: who has legal authority to sign the deed. KindKey Home Buyers LLC can buy the house as-is once that person is ready. KindKey is a principal buyer in Auburn, not a probate attorney, and this article is not legal or tax advice.',
      'Some estates already have a personal representative and letters from superior court. Some families have not opened probate. Some houses pass through a trust or another non-probate tool. Those are different files. A Washington attorney is the person who sorts them. King County and Pierce County use different superior courts, so a Kent or Federal Way house is not filed in the same place as a Tacoma or Puyallup house. Auburn can fall in either county depending on the parcel.',
    ],
    sections: [
      {
        heading: 'What usually has to happen before a deed',
        paragraphs: [
          'The closing agent will ask for the documents that show authority. If your attorney says the court has to confirm the sale, the closing date has to respect that step. KindKey cannot issue letters, shorten a court calendar, or decide that “all the kids agree” is enough. Agreement matters, and it is not a substitute for the signature the title company requires.',
          'Heirs can live outside Washington. They can still be part of a sale. Someone local does not have to repaint the house or host showings for that to be true. A cash sale can be a walkthrough, an offer, and a closing package. A listed sale asks for more time and more access. Either can be appropriate. KindKey only offers the purchase.',
        ],
      },
      {
        heading: 'The house itself is often the hard part',
        paragraphs: [
          'Probate houses in downtown Auburn, East Hill Kent, Tacoma’s North End, and downtown Puyallup are often full of belongings and decades of deferred updates. You do not have to empty them or remodel them for KindKey to make an offer. Take what the family wants. Leave the rest. If a relative is still living there, do not force them out to make the house easier to sell. Occupancy questions belong with your attorney.',
          'Tell us about a mortgage, a tax bill, a code notice, or fire damage. Those items show up in the payoff and the condition, and they belong in the offer conversation. KindKey does not give tax advice about basis or gains. Take those questions to a tax professional.',
        ],
      },
      {
        heading: 'Distressed estates',
        paragraphs: [
          'Some probate houses are also behind on the loan. That adds a deadline to an already formal process. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret them and will not tell you they do not apply just because the seller is an estate. Ask your attorney whether the statute matters before you sign a purchase agreement under pressure.',
          'If a sale is allowed, KindKey buys as a principal in King and Pierce County. We do not charge an agent commission or a separate assignment fee. Closing costs, liens, and the mortgage payoff can reduce proceeds. The settlement statement shows the figures before closing.',
        ],
      },
      {
        heading: 'A practical sequence',
        paragraphs: [
          'Ask an attorney who can sign and whether court approval is required. Then request a cash offer if a sale is on the table. Share the attorney’s timing limits with the closing agent if you accept. Do not list the house “just to see” and also sign a purchase contract for the same house without understanding both sets of obligations. KindKey will not list it. A broker can, if you hire one.',
          'Expect the offer to reflect condition. An estate is not a reason for anyone to pretend the roof is new. Honest photos and access save everyone a revised number later.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can a Washington house be sold before probate is finished?',
        answer:
          'Sometimes, if the person with authority can sign and any required court step is satisfied. KindKey does not make that call. Ask a probate attorney, then request an offer if a sale is allowed.',
      },
      {
        question: 'Do you give tax advice on inherited property?',
        answer:
          'No. Basis, gains, and estate-tax questions belong with a tax professional. KindKey only offers to buy the house.',
      },
      {
        question: 'What is RCW 61.34 doing in a probate article?',
        answer:
          'Washington’s distressed-property rules can matter when a sale happens under financial pressure, including some estates with a loan in default. Your attorney should say whether it applies. KindKey will not.',
      },
    ],
    related: [
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'The service page for estate sales.',
      },
      {
        href: '/blog/selling-a-vacant-or-inherited-house',
        label: 'Vacant or inherited houses',
        description: 'When the practical problem is the property, not only the court file.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'After you know who can sign.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Inherited houses in Edgewood',
        description: 'Pierce County probate for an Edgewood decedent.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-milton',
        label: 'Inherited houses in Milton',
        description: 'The residence county can be King or Pierce.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-federal-way',
        label: 'Inherited houses in Federal Way',
        description: 'King County Superior Court, not municipal court.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-auburn',
        label: 'Inherited houses in Auburn',
        description: 'Most Auburn estates are King County. The south end can be Pierce.',
      },
    ],
    ctaTitle: 'Request an offer once you know who can sign',
    ctaSubtitle: 'KindKey prices the house as it is. Your attorney confirms authority.',
  }),
  post('sell-house-before-foreclosure-washington', {
    breadcrumbName: 'Sell before foreclosure',
    title: 'Can I Sell My House Before Foreclosure in Washington?',
    description:
      'Many Washington owners can sell before a foreclosure sale if time and payoff allow it. Talk to an attorney about your notice and RCW 61.34. KindKey is a buyer, not a rescue service.',
    h1: 'Can I Sell My House Before Foreclosure in Washington?',
    intro: [
      'Often, yes. Washington homeowners regularly sell before a foreclosure sale when title can still transfer and the closing can pay what has to be paid. That is not true in every file. The notice you received, the payoff, and the county control the answer. KindKey Home Buyers LLC can make a cash offer as a principal buyer. KindKey is not a foreclosure consultant, a lender, or a real estate agent, and this article is not legal advice.',
      'Talk with a Washington attorney before you sign anything. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret those rules, does not tell you that you are exempt from them, and does not tell you that you must accept an offer.',
    ],
    sections: [
      {
        heading: 'What a sale can accomplish',
        paragraphs: [
          'A completed sale can use proceeds to pay the mortgage and other liens that the title company requires. If the payoff is higher than the price, the sale may not close unless the lender agrees to a different number. KindKey will not negotiate with your lender as your representative. The closing agent shows the figures on a settlement statement before you deed the house away.',
          'A sale is not the same thing as reinstating the loan, modifying it, or filing bankruptcy. Those options may exist. An attorney can tell you whether they are still open. KindKey only participates if you choose a sale and accept an offer.',
        ],
      },
      {
        heading: 'King County and Pierce County are different records',
        paragraphs: [
          'Kent, Federal Way, and much of Auburn are in King County. Tacoma, Puyallup, and Edgewood are in Pierce County. Milton is in both counties, and southern Auburn can be Pierce County even when the city name is Auburn. Using the wrong county’s assumptions about recording or court locations wastes the one thing a notice does not give you, which is time. Confirm the parcel. Do not rely on a blog, including this one, for the county line.',
          'Local pages for Auburn, Kent, Federal Way, Tacoma, and Puyallup describe the housing in those cities. They are not legal opinions about your trustee sale.',
        ],
      },
      {
        heading: 'How KindKey fits',
        paragraphs: [
          'You can ask for an as-is offer without catching up payments or repairing the house. The timeline you share should be the one on your notice, plus whatever your attorney says is the last responsible closing day. KindKey can aim for a date a closing agent can meet. KindKey cannot order a trustee to postpone.',
          'We do not charge an agent commission or a separate assignment fee. We may repair, hold, or resell after closing. You should compare that plain purchase with a listing if, and only if, your attorney thinks a listed sale can finish in time. Many cannot, because a financed buyer needs appraisals and underwriting that your date may not allow.',
        ],
      },
      {
        heading: 'Pressure tactics to refuse',
        paragraphs: [
          'Do not deed the house to a stranger outside of escrow. Do not sign a contract that leaves the foreclosure “to be handled later” with no settlement statement. Do not skip a lawyer because someone says the law does not apply to cash buyers. RCW 61.34 is on the books precisely because distressed owners get rushed.',
          'Bring the notice, the payoff if you have it, and any offer to your attorney. Then decide. Requesting a number from KindKey does not lock you in.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does requesting a cash offer stop foreclosure?',
        answer:
          'No. Only the lender, the trustee, or a completed transaction that pays what must be paid can change the status of a foreclosure. KindKey making an offer does not, by itself, stop a sale date.',
      },
      {
        question: 'Do I need a real estate agent to sell before foreclosure?',
        answer:
          'No. You can sell directly to a principal buyer such as KindKey. You can also hire a licensed broker if you want a listing. KindKey will not act as that broker.',
      },
      {
        question: 'Where can I read about RCW 61.34?',
        answer:
          'Ask a Washington attorney. KindKey will not interpret the distressed-property statute or apply it to your notice in an article.',
      },
    ],
    related: [
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'The main service page.',
      },
      {
        href: '/areas/auburn/sell-house-before-foreclosure',
        label: 'Auburn',
        description: 'County-line city where KindKey is based.',
      },
      {
        href: '/areas/tacoma/sell-house-before-foreclosure',
        label: 'Tacoma',
        description: 'Pierce County.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'No obligation to accept.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'Pierce County recording and the chapter 61.24 RCW timeline.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-milton-wa',
        label: 'Avoiding foreclosure in Milton',
        description: 'The notice may be a King County or Pierce County recording.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-federal-way-wa',
        label: 'Avoiding foreclosure in Federal Way',
        description: 'King County Recorder, including the pre-default contact rules.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-auburn-wa',
        label: 'Avoiding foreclosure in Auburn',
        description: 'Most parcels are King County. The south end can be Pierce.',
      },
    ],
    ctaTitle: 'Get an offer you can take to your attorney',
    ctaSubtitle:
      'Share the address and the date on your notice. KindKey does not give legal advice.',
  }),
  post('sell-fire-damaged-house-king-pierce-county', {
    breadcrumbName: 'Fire-damaged houses',
    title: 'How to Sell a Fire-Damaged House in King or Pierce County',
    description:
      'How to sell a fire-damaged house as-is in King or Pierce County. KindKey is an Auburn principal buyer. Insurance questions stay with your insurer.',
    h1: 'How to Sell a Fire-Damaged House in King or Pierce County',
    intro: [
      'You sell a fire-damaged house in King or Pierce County by pricing it in its current condition and transferring it through a closing agent, without rebuilding first. KindKey Home Buyers LLC will buy that house directly. We are based at 640 1st St SW in Auburn. We are not a real estate agent, and we do not advise you on the insurance claim.',
      'The fire can be a kitchen, a garage, an attic, or mostly smoke. The house can be in Auburn, Kent, Federal Way, Tacoma, or Puyallup, or elsewhere in the two counties. You do not need a contractor’s bid to start.',
    ],
    sections: [
      {
        heading: 'Decide what you are selling',
        paragraphs: [
          'You are selling the real estate as it sits, not a restored house and not your insurance claim unless a lawyer tells you a document does that. Keep those ideas separate. Talk with your insurer before you assign proceeds. Talk with a Washington attorney if a contractor, a lender, or a buyer asks you to sign claim paperwork you do not understand.',
          'King County cities in our main area include Kent, Federal Way, and most of Auburn. Pierce County cities include Tacoma, Puyallup, and Edgewood. Milton is in both King County and Pierce County. Auburn’s south end can be Pierce County. The closing agent confirms the parcel. Fire permits and unsafe-structure notices come from the city or county that posted them, and they remain your problem until that agency or the closing says otherwise.',
        ],
      },
      {
        heading: 'What to gather',
        paragraphs: [
          'Gather the address, photos, any fire report you already have, and a note about whether people can enter. You do not need to dry the building, replace drywall, or pass a final inspection. Western Washington rain makes tarps fail. That urgency is practical. It is not a reason to skip reading an offer.',
          'Older houses in downtown Auburn, the Kent valley, Tacoma’s North End and Hilltop, and downtown Puyallup often hide smoke in plaster and crawlspaces. Newer houses on Lea Hill, East Hill, Twin Lakes, and South Hill can look fine from the curb and still need a full smoke clean. Describe what you know. The walkthrough covers the rest when it is safe.',
        ],
      },
      {
        heading: 'How the offer is built',
        paragraphs: [
          'The offer reflects repair cost, the lot, and the location. It will not match a retail price for a finished house, because the finished house does not exist yet. KindKey may do that work after closing. You are not charged an agent commission or a separate assignment fee for the purchase.',
          'If you would rather list the damage and negotiate repairs with retail buyers, hire a broker. Expect disclosures and a longer calendar. KindKey will not run that process. Many owners choose the direct sale because they cannot fund the rebuild or live elsewhere already.',
        ],
      },
      {
        heading: 'If a loan or an estate is also involved',
        paragraphs: [
          'A fire plus a missed mortgage payment, or a fire in a probate house, needs an attorney. Deadlines and signatures are legal facts. Washington’s distressed-property rules under RCW 61.34 may matter when money pressure is part of the sale. KindKey does not interpret the statute. We can still look at the house while you get that advice.',
          'Liens and the mortgage payoff come out of the price and show on the settlement statement. Closing-cost splits are whatever the purchase agreement states.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell before the insurance company pays?',
        answer:
          'Yes. You can request a cash offer while a claim is open. KindKey will not tell you how the claim should be handled. Ask your insurer and, if needed, an attorney.',
      },
      {
        question: 'Do both King County and Pierce County houses qualify?',
        answer:
          'Yes. KindKey buys fire-damaged houses in both counties, with local pages for Auburn, Kent, Federal Way, Tacoma, and Puyallup.',
      },
      {
        question: 'What if the house is unsafe to enter?',
        answer:
          'Say so. Photos and an exterior look can start the conversation. Do not walk a structure that is not safe just to satisfy a buyer.',
      },
    ],
    related: [
      {
        href: '/sell-fire-damaged-house',
        label: 'Sell a fire-damaged house',
        description: 'The main service page.',
      },
      {
        href: '/areas/auburn/sell-fire-damaged-house',
        label: 'Auburn fire damage',
        description: 'KindKey’s home city.',
      },
      {
        href: '/areas/tacoma/sell-fire-damaged-house',
        label: 'Tacoma fire damage',
        description: 'Pierce County’s largest city in our area.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'No repair bid required.',
      },
    ],
    ctaTitle: 'Ask for an offer on the damaged house',
    ctaSubtitle: 'You can keep talking with your insurer while KindKey prices the property.',
  }),
  post('cash-buyer-vs-listing-with-an-agent', {
    breadcrumbName: 'Cash buyer vs. agent',
    title: 'Cash Buyer vs. Listing with an Agent',
    description:
      'Compare selling to KindKey, a principal cash buyer, with listing through a licensed agent. No invented sale prices. KindKey is not a broker.',
    h1: 'Cash Buyer vs. Listing with an Agent: Pros and Cons',
    intro: [
      'A cash buyer purchases your house directly. A listing agent markets it to the public under a listing agreement. KindKey Home Buyers LLC is only the first of those. KindKey is a principal buyer based in Auburn, serving King and Pierce County. KindKey is not a real estate agent or broker and will not list your house.',
      'Neither path is automatically better. The useful comparison is condition, timeline, and how much of the work you will do before a closing. This article does not predict your price. Anyone who quotes a countywide “average discount” without seeing the house is guessing.',
    ],
    sections: [
      {
        heading: 'Listing with an agent',
        paragraphs: [
          'A listing puts the house in front of retail buyers, which can help when the property is clean, safe, and easy to finance. You sign a listing agreement with a licensed broker. Commission is negotiated in that agreement and is not set by KindKey. Showings, photos, disclosures, and repair requests are part of the work. The closing date depends on a buyer’s loan, inspection, and appraisal.',
          'The cons show up on houses that are fire-damaged, full of belongings, vacant and deteriorating, tenant-occupied, or on a foreclosure clock. Retail buyers may not get a loan. You may spend money on repairs and still have a sale fall through. KindKey does not claim that happens every time. It happens often enough that owners ask for a direct offer.',
        ],
      },
      {
        heading: 'Selling to a principal buyer',
        paragraphs: [
          'KindKey looks at the house as it is and sends a written offer. There is no public photo tour. You are not charged an agent commission or a separate assignment fee by KindKey. The closing date is set with you and the closing agent, which is why owners with a move or a notice like the path. KindKey may repair, rent, or resell after closing. The offer reflects that remaining work, so it can be less than a retail price for a repaired house.',
          'The con is price and scope. You are not exposing the house to every retail buyer. If the house is updated and you can wait, a listing may net more after costs. You should do that math with a broker’s estimated proceeds, not with a slogan. Closing costs, payoffs, and liens apply to both paths and show on a settlement statement.',
        ],
      },
      {
        heading: 'Situations that push the choice',
        paragraphs: [
          'Fire damage, code violations, heavy repairs, and hoarding conditions are hard to list without either a big repair budget or a buyer who wants a project. Tenants make showings complicated, and Washington landlord-tenant rules are not something KindKey will coach you through. Probate and foreclosure add a signer and a deadline. For those two, talk with a Washington attorney before you sign. Washington has distressed-property rules under RCW 61.34 that KindKey will not interpret.',
          'Auburn, Kent, Federal Way, Tacoma, and Puyallup are the cities where KindKey has the most specific pages. The comparison is the same in Milton and Edgewood: listing is a broker’s job, and a direct sale is a buyer’s job.',
        ],
      },
      {
        heading: 'A clean way to decide',
        paragraphs: [
          'Get a cash offer and, if you want, a listing consultation. Put both net sheets next to the calendar you actually have. Reject either one. KindKey’s offer is not exclusive just because you asked for it, unless and until you sign a purchase agreement.',
          'Do not hire KindKey expecting agent duties such as pricing advice for the open market or representation against other buyers. Those duties belong to a licensed broker you choose. KindKey’s duty in the transaction is the buyer’s duty, spelled out in the contract.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is KindKey a real estate agent?',
        answer:
          'No. KindKey Home Buyers LLC buys houses as a principal. Listing a house requires a licensed broker, which KindKey is not.',
      },
      {
        question: 'Does a cash sale always net less than a listing?',
        answer:
          'Not always, and KindKey will not invent a percentage. A repaired retail sale can gross more and still net less after repairs, carrying costs, and commission. Compare written estimates for your house.',
      },
      {
        question: 'Can I get an offer and still talk to an agent?',
        answer:
          'Yes. Requesting a KindKey offer does not stop you from interviewing a broker. Do not sign two conflicting contracts.',
      },
    ],
    related: [
      { href: '/cash-offer', label: 'Get a cash offer', description: 'The direct-sale path.' },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'Condition does not have to be fixed first.',
      },
      {
        href: '/how-it-works',
        label: 'How it works',
        description: 'The steps after you ask KindKey for an offer.',
      },
    ],
    ctaTitle: 'Get the cash-offer side of the comparison',
    ctaSubtitle: 'You can still talk with a licensed broker about listing.',
  }),
  post('selling-a-vacant-or-inherited-house', {
    breadcrumbName: 'Vacant or inherited houses',
    title: 'Selling a Vacant or Inherited House',
    description:
      'How to sell a vacant or inherited house in King or Pierce County without managing a clean-out from far away. KindKey is an Auburn principal buyer.',
    h1: 'Selling a Vacant or Inherited House You Don’t Want to Deal With',
    intro: [
      'You can sell a vacant or inherited house in King or Pierce County without cleaning it out, flying back for showings, or repairing it to listing condition. KindKey Home Buyers LLC will buy it directly. We are based in Auburn. We are not a real estate agent. If the house is in probate, you still need an attorney to confirm who can sign. This article is not legal or tax advice.',
      'Vacant and inherited are not the same fact, even though they often arrive together. A vacant house might be yours, with a clear deed, and simply empty after a move. An inherited house might be occupied by a relative, full of belongings, and still waiting on letters from the court. Handle the authority question first when there is an estate. Handle the locks, insurance, and city notices first when the house is simply empty and already in your name.',
    ],
    sections: [
      {
        heading: 'If the house is vacant',
        paragraphs: [
          'Empty houses in Auburn’s valley, on Kent’s hills, in Federal Way, in Tacoma, and in Puyallup keep costing money. Insurance carriers ask questions once nobody lives there. Yards draw code notices. Pipes and tarps fail in the rain. You do not have to solve all of that before an offer. You do have to keep meeting any duty you still have until the deed transfers. Ask your insurer what the policy requires. KindKey will not interpret the policy.',
          'Access is the practical step. A lockbox, a relative, or a short visit works. Utilities can stay off. Leave the furniture you do not want. Take personal papers. Tell us about sheds, cars, and fuel tanks so the offer matches the property.',
        ],
      },
      {
        heading: 'If the house is inherited',
        paragraphs: [
          'Expect the closing agent to ask who signs. King County and Pierce County probate are not interchangeable, and Auburn parcels can be in either county. Out-of-state heirs can sell without moving home. They cannot sell on a handshake if title requires letters or a court order. KindKey will not provide that legal conclusion.',
          'Contents are emotional and also just heavy. A cash buyer does not need the house staged. Families argue less about paint colors when nobody is promising an open house. They still need a plan for keepsakes. Do that before closing day, not during it. Tax questions about an inheritance go to a tax professional, not to a buyer.',
        ],
      },
      {
        heading: 'When both are true',
        paragraphs: [
          'A vacant inherited house is the overlap: no one local wants the key, the lawn is tall, and the court file may still be open. You can request an offer while the attorney finishes authority, as long as you do not accept and sign before that authority exists. If a mortgage is also in default, the timeline gets sharper. Washington has distressed-property rules under RCW 61.34. Ask your attorney whether they apply. KindKey does not interpret them.',
          'Code enforcement is common in this overlap. Auburn, Kent, Federal Way, Tacoma, and Pierce County each write their own notices. South Hill addresses that say Puyallup are sometimes unincorporated. The letterhead tells you who wrote it. An offer can assume the notice is still open. It does not close the case the morning you call.',
        ],
      },
      {
        heading: 'What you are not required to do',
        paragraphs: [
          'You are not required to hire a junk-removal crew, a gardener, and a painter before KindKey will look. You are not required to list the house. If you want a listing, hire a broker and budget for the access that showings require. KindKey’s path is a purchase, a settlement statement, and a closing date you help pick.',
          'KindKey does not charge an agent commission or a separate assignment fee. Payoffs and liens still reduce proceeds. Read the statement. Then decide if being done with the house is worth the number.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell a vacant house from another state?',
        answer:
          'Yes, if you have authority to sign. Access can be arranged without a showing schedule. KindKey buys the house and does not list it.',
      },
      {
        question: 'Does an inherited house have to be empty?',
        answer:
          'No. Belongings can stay, and a relative who still lives there should not be forced out so the house looks vacant. Ask an attorney about occupancy and about who signs.',
      },
      {
        question: 'Will you advise me on estate tax or capital gains?',
        answer:
          'No. Those questions belong with a tax professional. KindKey will not interpret RCW 61.34 either. An attorney should do that if the sale is under financial pressure.',
      },
    ],
    related: [
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'Empty houses, as-is.',
      },
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Authority to sign comes before the offer is accepted.',
      },
      {
        href: '/blog/selling-a-house-in-probate-washington',
        label: 'Probate in Washington',
        description: 'What families should expect from the process.',
      },
    ],
    ctaTitle: 'Tell KindKey the house is vacant or inherited',
    ctaSubtitle: 'You do not have to clean it out before you ask for a number.',
  }),
];

export function getBlogPost(slug: string) {
  return blogPosts.find((entry) => entry.slug === slug);
}
