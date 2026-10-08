import type { BlogPost } from '@/lib/content';

const home = { name: 'Home', path: '/' };
const blog = { name: 'Blog', path: '/blog' };

const publishedAt = '2026-10-08';

function post(
  slug: string,
  data: Omit<BlogPost, 'slug' | 'path' | 'publishedAt' | 'updatedAt' | 'breadcrumbs'> & {
    breadcrumbName: string;
  }
): BlogPost {
  const path = `/blog/${slug}`;
  const { breadcrumbName, ...rest } = data;
  return {
    ...rest,
    slug,
    path,
    publishedAt,
    updatedAt: publishedAt,
    breadcrumbs: [home, blog, { name: breadcrumbName, path }],
  };
}

export const blogPosts: BlogPost[] = [
  post('how-to-sell-my-house-fast-for-cash-auburn', {
    breadcrumbName: 'Sell fast for cash in Auburn',
    title: 'How to Sell a House Fast for Cash in Auburn, WA',
    description:
      'How Auburn homeowners sell a house for cash without a listing. KindKey Home Buyers LLC is a principal buyer at 640 1st St SW, not a real estate agent.',
    h1: 'How to Sell My House Fast for Cash in Auburn, WA',
    intro: [
      'To sell a house fast for cash in Auburn, you sell it directly to a buyer who can pay at closing without a retail loan, instead of listing it and waiting for showings. KindKey Home Buyers LLC does that as a principal buyer. The office is at 640 1st St SW, Auburn, WA 98001. KindKey is not a real estate agent or broker, and KindKey does not list your house.',
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
          'Send the address through the cash-offer form or contact KindKey. A walkthrough and a written offer come next. You do not have to accept the offer.',
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
    ],
    ctaTitle: 'Start an Auburn cash offer',
    ctaSubtitle: 'Tell KindKey about the house. You can say no after you see the number.',
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
          'Kent, Federal Way, and much of Auburn are in King County. Tacoma, Puyallup, Milton, and Edgewood are in Pierce County. Southern Auburn can be Pierce County even when the city name is Auburn. Using the wrong county’s assumptions about recording or court locations wastes the one thing a notice does not give you, which is time. Confirm the parcel. Do not rely on a blog, including this one, for the county line.',
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
          'King County cities in our main area include Kent, Federal Way, and most of Auburn. Pierce County cities include Tacoma, Puyallup, Milton, and Edgewood. Auburn’s south end can be Pierce County. The closing agent confirms the parcel. Fire permits and unsafe-structure notices come from the city or county that posted them, and they remain your problem until that agency or the closing says otherwise.',
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
