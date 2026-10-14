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
  post('how-to-sell-an-estate-house-in-washington', {
    breadcrumbName: 'Estate house steps',
    title: 'How to Sell an Estate House in Washington: A Step-by-Step Guide for Executors',
    description:
      'A step-by-step guide for Washington executors selling a house that is part of an estate. Letters, nonintervention powers, and when court approval is required. Not legal advice.',
    h1: 'How to Sell an Estate House in Washington: A Step-by-Step Guide for Executors',
    publishedAt: '2026-10-14',
    intro: [
      'You sell an estate house in Washington by confirming the house is an estate asset, getting the right person appointed, reading whether that person has nonintervention powers, and then transferring the house through a closing agent. KindKey Home Buyers LLC can buy the house as a principal once that person is ready to sign. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463 or use the cash-offer form on this site. KindKey is not a probate attorney, and KindKey does not list houses.',
      'Washington calls the person in charge a personal representative. A will may call that person an executor. The word in the will does not replace letters from superior court. This article is general information, not legal advice. Talk with a Washington probate attorney before you sign a purchase agreement or a deed.',
    ],
    sections: [
      {
        heading: 'Step 1: Confirm the house belongs in the probate',
        paragraphs: [
          'Some houses the family thinks of as “the estate house” never enter probate. A house titled in a living trust is administered under the trust. A transfer-on-death deed recorded under chapter 64.80 RCW can pass the house outside probate. Washington is a community property state, so a surviving spouse or domestic partner may already own an interest. Your attorney and the title company read the deed. KindKey will not.',
          'When the house is a probate asset, a small-estate affidavit is not a substitute for a deed. Pierce County’s probate page says a case is needed when the decedent’s assets exceed $100,000 and/or include any real property. A house is real property. Ask your attorney whether your county asks the same question before you rely on an affidavit. KindKey will not decide that a filing is unnecessary because the family agrees.',
        ],
      },
      {
        heading: 'Step 2: Get appointed and obtain letters',
        paragraphs: [
          'The superior court appoints the personal representative. If the will is admitted and the person named in it is appointed, the clerk issues letters testamentary. If there is no will, the clerk issues letters of administration. If there is a will but the named person does not serve, the clerk may issue letters of administration with will annexed. The appointment is a court order. The letters are the document the closing agent expects to see. The original will has to reach the clerk in the way that court requires. KindKey cannot issue letters or file the petition.',
          'RCW 11.96A.050, in the Washington Trust and Estate Dispute Resolution Act, chapter 11.96A RCW, lets a petitioner start in a Washington county they select. Another party can ask the court to move the case to the decedent’s county of residence. King County filings go to the Superior Court Clerk at the King County Courthouse, 516 Third Avenue, Room E-609, Seattle, and at the Maleng Regional Justice Center, 401 Fourth Avenue North, Room 2C, Kent. Pierce County filings go to the Clerk of the Superior Court, 930 Tacoma Ave S, Room 110, Tacoma, WA 98402, phone (253) 798-7455, Monday through Friday, 8:30 a.m. to 4:30 p.m. Ask your attorney which counter applies. City hall does not probate estates.',
        ],
      },
      {
        heading: 'Step 3: Read whether nonintervention powers were granted',
        paragraphs: [
          'Letters and nonintervention powers are related, and they are not the same line on the order. A personal representative may petition for nonintervention powers whether or not there is a will. Under RCW 11.68.011, unless the will tells the court not to grant those powers, the court grants them when it finds the estate is solvent, counting probate and nonprobate assets, and the petitioner fits a path in the statute. One path is the person named in the probated will. Other paths exist, and some appointed people may not petition. Notice of the hearing is not required in the situations RCW 11.68.041 exempts. Otherwise, heirs, will beneficiaries, and others entitled to notice may object. Your attorney matches the order to the statute.',
          'Once the powers are granted, RCW 11.68.090 lets the personal representative sell the decedent’s real and personal property without a further court order and without notice, approval, confirmation, or intervention of the court. There is no duty to follow the court-sale procedures in chapter 11.56 RCW. Discretionary powers still have to be used in good faith, with honest judgment, and in line with the will and the interests of the beneficiaries. The will can restrict a sale. If the powers were not granted, or a later order restricts them, the sale may have to follow chapter 11.56 RCW. You can ask KindKey for an offer while your attorney reads the order. Do not accept and sign until the attorney says the signer has authority.',
        ],
      },
      {
        heading: 'Step 4: Decide how the house will be sold',
        paragraphs: [
          'An estate sale of furniture is a sale of personal property. A sale of the house is a transfer of real estate. The guide on estate sales versus selling as-is covers contents. For the house itself, KindKey’s path is a walkthrough, a written offer, and a closing date you help choose with the closing agent. KindKey does not charge an agent commission or a separate assignment fee. The offer is not an obligation. If you want retail exposure, hire a licensed broker. Do not sign a listing and a purchase agreement for the same house without understanding both. KindKey will not run the listing.',
        ],
      },
      {
        heading: 'Step 5: Close in the estate’s name',
        paragraphs: [
          'When a personal representative has letters, the seller on the purchase agreement is often that representative, not every heir. Heirs who live in another state can still receive a share later. They do not all have to sign the deed unless your attorney and the title company say they do. Sale proceeds are estate funds. A mortgage payoff, delinquent taxes, other liens, and closing costs can reduce what the estate receives. The settlement statement shows those figures before the deed is signed.',
          'Distribution to heirs comes after expenses and valid claims. That work belongs to the personal representative and the attorney. KindKey does not write a separate check to each sibling, and KindKey does not give tax advice about basis or gains. Guides linked below cover heir disputes, repairs and liens, and the King County and Pierce County courthouses.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is an executor the same person as a personal representative in Washington?',
        answer:
          'A will often says “executor.” Washington statutes say “personal representative” for the person the court appoints. Letters testamentary or letters of administration are what the closing agent asks to see.',
      },
      {
        question:
          'If I have nonintervention powers, does the court still have to approve the sale?',
        answer:
          'Under RCW 11.68.090, a personal representative with those powers may sell without a further court order, subject to the will and the representative’s duties. If the powers were not granted, or a later order restricts them, chapter 11.56 RCW may apply. Ask your attorney.',
      },
      {
        question: 'Can the house be sold before the estate is closed?',
        answer:
          'Sometimes the sale happens during the estate, once the person with authority can sign and any required court step is done. Your attorney sets that order. Call (206) 519-5463 or use the cash-offer form when you want a number to take to that conversation.',
      },
      {
        question: 'Will KindKey open the probate or prepare the letters?',
        answer:
          'No. A probate attorney and the superior court clerk handle the case. The closing agent handles the settlement statement. KindKey buys the house. Sign only after your attorney says you may.',
      },
    ],
    related: [
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'How KindKey buys once someone has authority to sign.',
      },
      {
        href: '/blog/selling-a-house-in-probate-washington',
        label: 'Probate sales in Washington',
        description: 'What families should expect before the step-by-step.',
      },
      {
        href: '/blog/estate-sale-vs-selling-the-house-as-is',
        label: 'Estate sale vs. selling the house as-is',
        description: 'Contents, estate sale companies, and leaving belongings.',
      },
      {
        href: '/blog/selling-an-estate-house-in-king-county',
        label: 'Estate houses in King County',
        description: 'Seattle and Kent courthouses, and south King County cities.',
      },
      {
        href: '/blog/selling-an-estate-house-in-pierce-county',
        label: 'Estate houses in Pierce County',
        description: 'Tacoma, Edgewood, Milton, and Puyallup.',
      },
      {
        href: '/blog/selling-an-estate-house-when-heirs-disagree',
        label: 'When heirs disagree or live out of state',
        description: 'Objections, TEDRA, and signing from another state.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'The form. Asking does not obligate you to sell.',
      },
    ],
    ctaTitle: 'Ask for an offer once you know who can sign',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. Your attorney confirms authority. You can say no after you see the number.',
  }),
  post('estate-sale-vs-selling-the-house-as-is', {
    breadcrumbName: 'Estate sale vs. the house',
    title: 'Estate Sale vs. Selling the House As-Is',
    description:
      'How executors handle a loved one’s belongings: an estate sale company, a clean-out, or selling the Washington house as-is with items left behind. Not legal advice.',
    h1: 'Estate Sale vs. Selling the House As-Is: What to Do With a Loved One’s Home and Belongings',
    publishedAt: '2026-10-14',
    intro: [
      'An estate sale and a sale of the house are two different transactions, and people use the same phrase for both. One sells furniture, clothes, tools, and household goods. The other transfers the real estate. KindKey Home Buyers LLC buys the house. KindKey is not an estate sale company, a junk hauler, or a probate attorney. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463 or use the cash-offer form if you want a number on the house.',
      'You can clear the house, hire a company to sell the contents, leave the contents for a buyer, or mix those choices. The personal representative still has duties over personal property as well as the house. This article is general information, not legal advice. Talk with a Washington probate attorney about who may sell the contents and who may sign the deed.',
    ],
    sections: [
      {
        heading: 'What people mean by an estate sale',
        paragraphs: [
          'In ordinary speech, an estate sale is a sale of a person’s belongings, usually held at the house over a short run of days. An estate sale company prices the items, advertises the sale, staffs the door, and takes a share of what the personal property brings. The company is not selling you a deed, and a successful weekend of tables and tools does not appoint a personal representative. If the belongings are estate property, the person who hires that company needs authority to sell them. Ask your attorney before you sign the company’s contract.',
          'Those companies usually need time on a calendar, a house people can walk through, and enough saleable goods to justify the setup. A house with a failed roof, a hoarding condition, or no safe path through the rooms may not fit their model. That is a practical limit. It is not a legal rule. KindKey does not rate estate sale companies and will not tell you which contract to sign.',
        ],
      },
      {
        heading: 'Clearing the house yourself',
        paragraphs: [
          'Some families would rather have relatives take what they want, donate what a charity will accept, and hire a hauler for the rest. That work is real. It takes keys, weekends, and someone local enough to meet the truck. Heirs in another state often cannot do it. A clean, empty house can be easier to list with a broker. It is not a requirement for a sale to KindKey.',
          'Take the items the family will regret losing, and take them before closing day. Photographs, letters, jewelry, medications, and personal papers belong in that first pass. Firearms are a legal question of their own. Ask your attorney how they may be transferred. Do not leave a safe combination as a mystery for the closing. Tell the buyer what you already know you will remove, so the walkthrough matches the house that will be deeded.',
        ],
      },
      {
        heading: 'Selling the house as-is with belongings left behind',
        paragraphs: [
          'KindKey buys the real estate in its current condition, including houses that still hold furniture, boxed closets, a shop full of tools, or a garage that has not been opened in years. You do not have to empty the rooms, hold a tag sale, or paint before asking for an offer. Take what the family wants to keep. Leave the rest. After closing, the belongings that were left are no longer the estate’s project to haul.',
          'The offer reflects the house as it sits, including the work of dealing with what remains. KindKey does not promise that leftover furniture has resale value, and KindKey does not pay a separate price for a household inventory. If a relative still lives in the house, do not force that person out so the rooms look vacant. Occupancy is a question for your attorney. Washington law generally gives a personal representative a right to possession of estate property so the estate can be administered. That does not, by itself, tell you whether a surviving spouse, a tenant, or a relative has to move.',
        ],
      },
      {
        heading: 'How the two sales can be sequenced',
        paragraphs: [
          'One order is keepsakes first, then an estate sale of what a company will sell, then a transfer of the house once the personal property sale is over. Another order is a sale of the house with the contents still inside, because the family does not want to manage a weekend of shoppers. Both can be legitimate. The personal representative’s authority has to cover whichever sale is happening. RCW 11.68.090 gives a personal representative who has nonintervention powers the power to sell the decedent’s real and personal property without a further court order, subject to the will and the representative’s duties. Without those powers, a sale of either the house or the goods may need the court process your attorney describes.',
          'Do not schedule a public contents sale and a buyer’s walkthrough on top of each other without a plan for access. Shoppers and a purchase walkthrough can share a week if someone is in charge of the key. They cannot share a locked house that nobody can enter. If you accept a KindKey offer, say whether a contents sale will finish before closing or whether the contents stay. The purchase agreement should match that plan. KindKey will not list the house while an estate sale company is also marketing the furniture.',
        ],
      },
      {
        heading: 'What does not change because the rooms are full',
        paragraphs: [
          'Full rooms do not create authority to sign, and empty rooms do not either. The closing agent still wants letters testamentary or letters of administration, and the order that says whether nonintervention powers were granted. If those powers were not granted, chapter 11.56 RCW may apply to the real estate. The will can restrict a sale of the house or of specific items. A family vote about a piano is not a deed.',
          'KindKey does not charge an agent commission or a separate assignment fee for the purchase of the house. Liens, a mortgage payoff, taxes, and the closing costs in the agreement can reduce proceeds. The settlement statement shows the figures. The step-by-step guide for executors covers letters and court approval. The guides for King County and Pierce County cover where the case is filed. Call (206) 519-5463 or use the cash-offer form when you want the house priced with the belongings still there.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will KindKey run an estate sale of the furniture?',
        answer:
          'No. KindKey buys the house as a principal. An estate sale company, a charity, or the family handles belongings if you want them sold or donated before closing. You can also leave them.',
      },
      {
        question: 'Does the house have to be empty before KindKey will make an offer?',
        answer:
          'No. Belongings can stay. Remove what the family wants to keep before closing, and tell us what will remain so the offer matches the property. Call (206) 519-5463 or use the cash-offer form.',
      },
      {
        question: 'Can we hold an estate sale and still sell the house to KindKey?',
        answer:
          'Yes, if the person with authority wants that order and the calendar is clear. Finish the contents sale you care about, or leave the rest. Do not sign two contracts that fight over the same access without reading both.',
      },
      {
        question: 'Who is allowed to sell the contents?',
        answer:
          'If the belongings are estate property, the personal representative’s authority covers them, subject to the will and any court limit. KindKey does not decide that. Talk with a probate attorney before you hire an estate sale company or give items away.',
      },
    ],
    related: [
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'The service page for the real estate, not the furniture.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'Condition and contents do not have to be fixed first.',
      },
      {
        href: '/sell-hoarder-house',
        label: 'Hoarder and heavy-cleanout houses',
        description: 'When the contents are more than a normal household.',
      },
      {
        href: '/blog/how-to-sell-an-estate-house-in-washington',
        label: 'Step-by-step for executors',
        description: 'Letters and nonintervention powers, before the clean-out.',
      },
      {
        href: '/blog/selling-a-vacant-or-inherited-house',
        label: 'Vacant or inherited houses',
        description: 'When the house is empty, full, or both.',
      },
      {
        href: '/blog/selling-a-house-in-probate-washington',
        label: 'Probate sales in Washington',
        description: 'What to expect from the court file.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Ask while the family is still sorting belongings.',
      },
    ],
    ctaTitle: 'Ask for an offer with the belongings still there',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You can remove keepsakes before closing. You do not have to empty the house first.',
  }),
  post('selling-an-estate-house-in-king-county', {
    breadcrumbName: 'Estate houses in King County',
    title: 'Selling an Estate House in King County',
    description:
      'How executors sell an estate house in King County, including Auburn, Kent, Federal Way, and the Seattle area. Courthouse, letters, and nonintervention powers. Not legal advice.',
    h1: 'Selling an Estate House in King County, Washington',
    publishedAt: '2026-10-14',
    intro: [
      'You sell an estate house in King County by using King County Superior Court for the probate, then deeding the house once the person with authority can sign. KindKey Home Buyers LLC buys houses in this county as a principal. The office is in Auburn, at 640 1st St SW, Auburn, WA 98001, not at the courthouse. Call (206) 519-5463 or use the cash-offer form. KindKey is not a probate attorney. This article is general information, not legal advice. Talk with a Washington probate attorney about your letters before you sign.',
      'Kent, Federal Way, Seattle, and most of Auburn are in King County. Part of Milton is in King County. A southern portion of Auburn is in Pierce County even when the mailing city says Auburn. The city guides for inherited houses in Auburn, Federal Way, and Milton go into those parcels. This page is the county picture, including Kent and the Seattle area, which do not have their own inherited-house articles on this site.',
    ],
    sections: [
      {
        heading: 'Where a King County estate is opened',
        paragraphs: [
          'Probate is a superior court case. King County District Court and the municipal courts in Auburn, Kent, Federal Way, and Seattle do not appoint personal representatives. The Superior Court Clerk has offices at the King County Courthouse, 516 Third Avenue, Room E-609, Seattle, and at the Maleng Regional Justice Center, 401 Fourth Avenue North, Room 2C, Kent. King County uses a probate case-assignment cover sheet. The Kent counter is closer than downtown Seattle for many south King County families. Ask your attorney or the clerk which office and which case-assignment area apply. KindKey will not choose the courthouse or file the petition.',
          'RCW 11.96A.050, part of the Washington Trust and Estate Dispute Resolution Act, lets a petitioner start in a Washington county they select and lets another party ask to move the case. If the decedent lived in Washington, the transfer rule points to the county of residence. A person who lived in Kent, Federal Way, or Seattle resided in King County. A person who lived in Auburn resided in King County or Pierce County depending on the parcel. A person who lived in Milton may have resided in either county. The residence county and the county where the deed is recorded can be discussed with the closing agent as two facts. Do not pick a courthouse from the return address on the mail.',
        ],
      },
      {
        heading: 'Letters and when the court has to approve the sale',
        paragraphs: [
          'The closing agent will ask for letters testamentary or letters of administration, and for the order on nonintervention powers. Washington uses “personal representative” for the person the court appoints. A will may call that person an executor. If the court granted nonintervention powers, RCW 11.68.090 lets the personal representative sell the decedent’s real property without a further court order and without the sale procedures in chapter 11.56 RCW, subject to the will and the representative’s duties. Those duties include using discretionary power in good faith, with honest judgment, and in line with the will and the interests of the beneficiaries.',
          'RCW 11.68.011 is the statute on granting the powers. Unless the will tells the court not to grant them, the court grants them when it finds the estate is solvent, counting probate and nonprobate assets, and the petitioner fits a path in the statute. One path is being the person named in the probated will. The step-by-step guide for executors walks through the petition, the notice rules in RCW 11.68.041, and the cases where a sale still needs a court order. If the powers were not granted, or if a later order restricts them, chapter 11.56 RCW may apply. KindKey cannot waive that because the house is in King County.',
        ],
      },
      {
        heading: 'Auburn, Kent, Federal Way, and Seattle',
        paragraphs: [
          'Auburn is KindKey’s home city. Downtown, Lea Hill, and Lakeland Hills are commonly King County. A parcel toward the southern edge can come back as Pierce County at title. Use the Auburn inherited-house guide for that split, and use this page for the King County side. The deed, once you have authority to sign, records with the King County Recorder when the parcel is in King County. Property-tax questions on that parcel go to King County, not to Pierce County.',
          'Kent is in King County, from East Hill and West Hill down to the valley floor. There is no separate Kent probate article on this site because the court file is the county file described above. Federal Way is also a King County residence question for a person who lived there. The Federal Way inherited-house guide covers the neighborhoods and the difference between superior court and municipal court. This page is the clerk’s offices those families share with Seattle and Kent.',
          'Seattle is in King County, and the downtown courthouse is there. A decedent who lived in Seattle has a King County residence under the venue rule. This site’s city pages are Auburn, Kent, Federal Way, Milton, Tacoma, Edgewood, and Puyallup. The authority rules on this page are the same for a Seattle house. Call (206) 519-5463 and describe the property if you want to know whether KindKey will make an offer. KindKey is not a listing broker.',
        ],
      },
      {
        heading: 'The house, the contents, and the county line next door',
        paragraphs: [
          'King County estate houses are often full of a long occupancy: a Kent rambler with a deferred roof, a Federal Way house that has been vacant since the funeral, an Auburn house with a shop still locked. You do not have to empty them or repair them before KindKey looks. The guide comparing an estate sale of belongings with an as-is sale of the house covers clean-out companies and what to remove. Take keepsakes. Leave the rest. If someone still lives there, ask your attorney before you change the locks.',
          'Milton sits on the county line. A King County Milton parcel belongs in this conversation. A Pierce County Milton parcel belongs in the Pierce County estate guide and in the Milton inherited-house guide. Southern Auburn belongs in the Pierce County article when the parcel is on that side. The closing agent confirms the parcel. KindKey does not charge an agent commission or a separate assignment fee. The settlement statement shows payoffs, liens, taxes, and closing costs before you deed the house.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I file a Kent or Federal Way probate at King County Superior Court?',
        answer:
          'If the decedent lived in Kent or Federal Way, King County is the residence county under the transfer rule in RCW 11.96A.050. The clerk’s offices are in downtown Seattle and at the Maleng Regional Justice Center in Kent. City hall does not open estates. Ask an attorney before you file.',
      },
      {
        question: 'Is a Seattle estate filed in a different court from an Auburn estate?',
        answer:
          'Both are King County when the decedent lived on a King County parcel. Auburn’s southern edge can be Pierce County. Seattle is not split that way. The same superior court clerk serves the county. KindKey will not pick the case-assignment area.',
      },
      {
        question: 'Does nonintervention power mean no court is involved at all?',
        answer:
          'The court is involved in the appointment and in the order granting the powers. RCW 11.68.090 then lets the personal representative sell without a further order approving the sale, subject to the will and the representative’s duties. Talk with a probate attorney about your order. This article is not legal advice.',
      },
      {
        question: 'How do I ask KindKey for a King County offer?',
        answer:
          'Call (206) 519-5463 or use the cash-offer form. You can ask while letters are being prepared. Accept and sign only after your attorney says the signer has authority.',
      },
    ],
    related: [
      {
        href: '/areas/kent',
        label: 'Sell a house in Kent',
        description: 'East Hill, West Hill, and the valley.',
      },
      {
        href: '/areas/federal-way',
        label: 'Sell a house in Federal Way',
        description: 'The Federal Way city page.',
      },
      {
        href: '/areas/auburn',
        label: 'Sell a house in Auburn',
        description: 'KindKey’s home city, on the county line.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-auburn',
        label: 'Inherited houses in Auburn',
        description: 'Most parcels are King County. The south end can be Pierce.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-federal-way',
        label: 'Inherited houses in Federal Way',
        description: 'King County Superior Court, not municipal court.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-milton',
        label: 'Inherited houses in Milton',
        description: 'The King County side of a two-county city.',
      },
      {
        href: '/blog/how-to-sell-an-estate-house-in-washington',
        label: 'Step-by-step for executors',
        description: 'Letters, RCW 11.68, and the order of work.',
      },
      {
        href: '/blog/selling-an-estate-house-in-pierce-county',
        label: 'Estate houses in Pierce County',
        description: 'The other superior court, in Tacoma.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'The form used across the site.',
      },
    ],
    ctaTitle: 'Request a King County offer once authority is clear',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. Tell us the city. Your attorney confirms who can sign.',
  }),
  post('selling-an-estate-house-in-pierce-county', {
    breadcrumbName: 'Estate houses in Pierce County',
    title: 'Selling an Estate House in Pierce County',
    description:
      'How executors sell an estate house in Pierce County, including Tacoma, Edgewood, Milton, and Puyallup. Letters, nonintervention powers, and the Tacoma clerk. Not legal advice.',
    h1: 'Selling an Estate House in Pierce County, Washington',
    publishedAt: '2026-10-14',
    intro: [
      'You sell an estate house in Pierce County by opening the probate, when one is required, with the Pierce County Superior Court Clerk in Tacoma, then transferring the house once the person with authority can sign. KindKey Home Buyers LLC buys these houses as a principal from an office in Auburn, at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463 or use the cash-offer form. Being based on the King County side of Auburn does not make a Tacoma estate a King County case. KindKey is not a probate attorney. This article is general information, not legal advice.',
      'Tacoma, Edgewood, and Puyallup are in Pierce County. Milton is in both Pierce County and King County. A southern slice of Auburn is in Pierce County too. The Edgewood and Milton inherited-house guides cover those cities in detail. This page is the county file those cities share, plus Tacoma and Puyallup, which do not have their own probate articles on this site.',
    ],
    sections: [
      {
        heading: 'The clerk is in Tacoma',
        paragraphs: [
          'Pierce County probate is opened with the Clerk of the Superior Court at the County-City Building, 930 Tacoma Ave S, Room 110, Tacoma, WA 98402. The clerk’s phone number is (253) 798-7455, and the public counter is open Monday through Friday, 8:30 a.m. to 4:30 p.m. Pierce County’s probate page says a case is needed when the decedent’s assets exceed $100,000 and/or include any real property. A house is real property. Do not assume a small-estate affidavit can take the place of a deed. The same page lists opening papers and a filing fee. Confirm the current fee with the clerk before you go, because the fee schedule can change. KindKey will not file the case or stand in line for you.',
          'RCW 11.96A.050, in the Washington Trust and Estate Dispute Resolution Act, lets a petitioner begin in a Washington county they select and lets another party ask the court to move the case. If the decedent lived in Tacoma, Edgewood, or Puyallup, the residence county under that transfer rule is Pierce County. King County Superior Court, in Seattle or at the Maleng Regional Justice Center in Kent, is the wrong residence county for those decedents. Milton and the southern edge of Auburn can go either way. The city guides for those two places explain the split. The City of Tacoma, the City of Puyallup, and the City of Edgewood do not appoint personal representatives.',
        ],
      },
      {
        heading: 'Letters, nonintervention powers, and the deed',
        paragraphs: [
          'Whatever city is on the mailbox, the closing agent wants letters testamentary or letters of administration, and the order that says whether the personal representative has nonintervention powers. A will may say “executor.” Washington law uses “personal representative” for the appointed person. If the powers were granted, RCW 11.68.090 gives that person authority to sell the decedent’s real property without a further court order, and without following chapter 11.56 RCW, subject to the will and the representative’s duties. The duties include good faith, honest judgment, and the interests of the beneficiaries. The will can restrict the sale.',
          'RCW 11.68.011 is the grant statute. Unless the will tells the court not to grant nonintervention powers, the court grants them when it finds the estate is solvent, counting probate and nonprobate assets, and the petitioner fits a path in the statute, including the path for the person named in the will. If the powers were not granted, a sale may have to follow the court process in chapter 11.56 RCW. The step-by-step guide for executors explains the petition and when a hearing is required under RCW 11.68.041. An agreement among heirs in Tacoma and heirs out of state is not a substitute for the signature title requires. The deed records with the Pierce County Auditor when the parcel is in Pierce County.',
        ],
      },
      {
        heading: 'Tacoma and Puyallup',
        paragraphs: [
          'Tacoma estate houses show up across the city: older houses in the North End and Hilltop, houses on the Eastside, and houses in South Tacoma that have been vacant since the funeral. KindKey buys them as they sit. You do not have to repair plaster, empty a lifetime of belongings, or host showings for KindKey to make an offer. The Tacoma city page is the general sale page. This article is the probate overlay. Occupancy stays with your attorney if a relative still lives there.',
          'Puyallup is in Pierce County. Downtown Puyallup and the neighborhoods inside the city limits are city matters for code letters and city services. South Hill addresses that people call Puyallup are sometimes unincorporated Pierce County. The letterhead on a tax bill or a code notice tells you who wrote it. The closing agent confirms the parcel. KindKey does not treat “Puyallup” on an envelope as a legal description. There is a Puyallup city page for the sale itself. There is not a separate Puyallup probate article, because the clerk, the letters, and RCW 11.68 are the county process on this page.',
        ],
      },
      {
        heading: 'Edgewood, Milton, and the belongings',
        paragraphs: [
          'Edgewood is in Pierce County, between Milton, Fife, Puyallup, and Sumner. The Edgewood inherited-house guide covers North Hill, the valley, and the Puyallup Indian Reservation boundary question. Read that guide before you assume a King County checklist fits. Milton’s Pierce County side belongs in the Milton inherited-house guide as well as here. If the Milton parcel is on the King County side, use the King County estate guide. KindKey will not decide the side from a street name.',
          'Contents are the other half of the work. You can hire an estate sale company, clear the house, or leave the belongings. The comparison of an estate sale and an as-is house sale explains those choices. KindKey is the buyer of the house, not the company that runs a tag sale. KindKey does not charge an agent commission or a separate assignment fee. Payoffs and liens can reduce proceeds, and the settlement statement shows them. Call (206) 519-5463 or use the cash-offer form when the signer is known, or while your attorney is still confirming the signer. Sign only after that confirmation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where do I open a Tacoma, Edgewood, or Puyallup probate?',
        answer:
          'If the decedent lived in one of those cities, Pierce County is the residence county. Filings go to the Clerk of the Superior Court at 930 Tacoma Ave S in Tacoma. Ask a probate attorney before you file. KindKey will not file for you.',
      },
      {
        question: 'Does a Pierce County estate need court approval to sell the house?',
        answer:
          'It depends on the order. With nonintervention powers, RCW 11.68.090 allows a sale without a further court order, subject to the will and the representative’s duties. Without those powers, chapter 11.56 RCW may apply. This is not legal advice. Your attorney reads the letters.',
      },
      {
        question: 'Is Milton always a Pierce County estate?',
        answer:
          'No. Milton is in both counties. Edgewood is not split that way. The Milton inherited-house guide and the King County estate guide cover the other side of the line.',
      },
      {
        question: 'Can I ask for a cash offer before the Tacoma clerk issues letters?',
        answer:
          'You can request a number. Call (206) 519-5463 or use the cash-offer form. Do not accept and sign until the person title will accept has authority to sell.',
      },
    ],
    related: [
      {
        href: '/areas/tacoma',
        label: 'Sell a house in Tacoma',
        description: 'North End, Hilltop, Eastside, and South Tacoma.',
      },
      {
        href: '/areas/puyallup',
        label: 'Sell a house in Puyallup',
        description: 'Downtown and the surrounding Pierce County area.',
      },
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'The Edgewood city page.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Inherited houses in Edgewood',
        description: 'North Hill, the valley, and Pierce County probate.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-milton',
        label: 'Inherited houses in Milton',
        description: 'Pierce County or King County, depending on the parcel.',
      },
      {
        href: '/blog/selling-an-estate-house-in-king-county',
        label: 'Estate houses in King County',
        description: 'The other courthouse, in Seattle and Kent.',
      },
      {
        href: '/blog/how-to-sell-an-estate-house-in-washington',
        label: 'Step-by-step for executors',
        description: 'How letters and nonintervention powers fit together.',
      },
      {
        href: '/blog/selling-a-house-in-probate-washington',
        label: 'Probate sales in Washington',
        description: 'The statewide “what to expect” guide.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'The form. Asking does not obligate you to sell.',
      },
    ],
    ctaTitle: 'Ask for a Pierce County offer after you know the signer',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. The Tacoma clerk and your attorney handle the case. KindKey prices the house.',
  }),
  post('selling-an-estate-house-when-heirs-disagree', {
    breadcrumbName: 'Heirs who disagree',
    title: 'Selling an Estate House When Heirs Disagree or Live Out of State',
    description:
      'What Washington executors can do when heirs disagree or live out of state. Nonintervention powers, TEDRA petitions, and signing from afar. Not legal advice.',
    h1: 'Selling an Estate House When Heirs Disagree or Live Out of State',
    publishedAt: '2026-10-14',
    intro: [
      'Heirs can disagree about a house and still have a personal representative who is allowed to sell it. Heirs can also live in another state and still be part of the estate. Neither fact, by itself, signs the deed or blocks the deed. KindKey Home Buyers LLC can buy the house once the person with authority is ready. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463 or use the cash-offer form. KindKey is not a mediator, a probate attorney, or a real estate agent.',
      'This article is general information about Washington estates, not legal advice. Talk with a Washington probate attorney before you sign, especially if someone has already objected or if a court petition is pending. KindKey will not referee the family or tell you that an objection does not matter.',
    ],
    sections: [
      {
        heading: 'Disagreement is not the same thing as authority',
        paragraphs: [
          'Washington appoints a personal representative. A will may call that person an executor. Letters testamentary or letters of administration are the appointment the closing agent asks to see. If the court also granted nonintervention powers, RCW 11.68.090 lets the personal representative sell the decedent’s real property without a further court order and without the confirmation steps in chapter 11.56 RCW. The sale is still subject to the will. A discretionary power has to be used in good faith, with honest judgment, and in line with the will and the interests of the beneficiaries.',
          'A family vote is not what that statute requires, unless the will or a court order says consent is required. One heir’s objection does not, by itself, rewrite the letters. One heir’s enthusiasm does not, by itself, create letters. If nonintervention powers were never granted, the sale may have to follow chapter 11.56 RCW even when everyone agrees. Agreement and authority are separate. The step-by-step guide for executors explains how the powers are granted under RCW 11.68.011.',
        ],
      },
      {
        heading: 'How an heir asks the court to step in',
        paragraphs: [
          'Chapter 11.96A RCW is the Washington Trust and Estate Dispute Resolution Act, often called TEDRA. It is the procedure chapter for estate and trust disputes. RCW 11.68.070 lets a party, as that word is defined for these cases, petition the court under TEDRA for a determination that the personal representative breached a fiduciary duty, exceeded the representative’s authority, abused the representative’s discretion, otherwise failed to execute the trust faithfully, violated a statute or common law affecting the estate, or is subject to removal for a reason in RCW 11.28.250. The petition has to allege facts. It has to be verified or supported by an affidavit.',
          'If the court finds one of those grounds, it can order a remedy. The statute’s list includes directing the personal representative to take a specific action, restricting the powers, and removing the personal representative. When powers are restricted, the restriction and the date are endorsed on the order and on the letters. A buyer and a title company will ask whether that endorsement exists. Until a court enters an order, the objection is a dispute, not a new set of letters. KindKey will not predict how a judge will rule, and KindKey will not tell you to ignore a petition that has already been filed.',
          'If a petition is pending, ask your attorney whether the personal representative may still sign. Do not accept a purchase offer and sign a deed in the middle of that question because a buyer is ready. You can request a written offer so the family can see a number. Accepting it is a different step. KindKey will send one offer to the person who asked, for the estate. KindKey will not make separate side agreements with individual heirs for the same house.',
        ],
      },
      {
        heading: 'Out-of-state heirs and an out-of-state representative',
        paragraphs: [
          'Heirs do not have to live in Washington to inherit, to receive notice, or to be heard. A personal representative can live out of state and still serve if the court appointed that person and the letters are in effect. The closing agent is the one who says how a signature is taken where that person lives. KindKey does not choose notary rules and does not require a trip back to Auburn for a signing. Someone local, a lockbox, or a scheduled visit can handle a walkthrough. A listed sale is the path that usually needs more showings. KindKey does not list the house.',
          'Distance makes contents harder, not the deed. The guide on estate sales versus selling the house as-is covers leaving belongings when nobody can fly home to empty the rooms. Take what someone can carry or ship. Leave the rest if the buyer has agreed the contents stay. Put the offer in front of the people your attorney says should see it. A group text is a poor place to amend a will.',
        ],
      },
      {
        heading: 'Occupancy, a surviving spouse, and a will that gives the house to one person',
        paragraphs: [
          'A relative who still lives in the house is not a problem a buyer solves by scheduling a closing. Washington law generally gives a personal representative a right to possession of estate property so the estate can be administered. A surviving spouse or domestic partner may already own a community property interest. A tenant may have a rental agreement. Ask your attorney before anyone changes the locks or tells a sibling to be out by Friday. KindKey will not take on that conversation as if it were a property manager.',
          'A will can leave the house to one person and the rest of the estate to others. It can also direct that the house be sold. It can restrict nonintervention powers. Those sentences point in different directions, and only the document and your attorney can say which sentence controls. Do not assume a sale is forbidden because one heir was promised the house in a conversation, and do not assume a sale is allowed because the personal representative would rather have cash to divide. The King County and Pierce County estate guides cover where the case is filed if you are still choosing a courthouse. Call (206) 519-5463 when you want one number the attorney can review with the people who disagree.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can a personal representative sell if one heir objects?',
        answer:
          'If the representative has nonintervention powers and the will does not require consent, RCW 11.68.090 allows a sale without heir approval and without a further court order. The representative still owes duties to the beneficiaries. An heir can petition under RCW 11.68.070. Ask a probate attorney. This is not legal advice.',
      },
      {
        question: 'Do all the heirs have to sign the deed?',
        answer:
          'Not automatically. When a personal representative has letters, that representative is often the signer. Title and your attorney decide. Heirs who are not the representative may still be entitled to notice or to a share of the proceeds. A handshake is not a deed.',
      },
      {
        question: 'Can an heir who lives out of state sign?',
        answer:
          'Yes, if that heir is the person who must sign. The closing agent coordinates the signing where that person lives. Out-of-state heirs who are not the signer do not have to fly to Washington for a KindKey walkthrough. Call (206) 519-5463 or use the cash-offer form to start.',
      },
      {
        question: 'Will KindKey negotiate between heirs?',
        answer:
          'No. KindKey makes one purchase offer for the house. Your attorney handles objections, TEDRA petitions, and who is allowed to accept. You can say no after you see the offer.',
      },
    ],
    related: [
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'Authority to sign comes before an offer is accepted.',
      },
      {
        href: '/blog/how-to-sell-an-estate-house-in-washington',
        label: 'Step-by-step for executors',
        description: 'How nonintervention powers are granted.',
      },
      {
        href: '/blog/selling-a-house-in-probate-washington',
        label: 'Probate sales in Washington',
        description: 'What families should expect from the process.',
      },
      {
        href: '/blog/estate-sale-vs-selling-the-house-as-is',
        label: 'Estate sale vs. selling the house as-is',
        description: 'Belongings, when the fight is about contents too.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-auburn',
        label: 'Inherited houses in Auburn',
        description: 'King County or Pierce County, by parcel.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-federal-way',
        label: 'Inherited houses in Federal Way',
        description: 'Out-of-state children and a King County estate.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Inherited houses in Edgewood',
        description: 'A Pierce County probate for heirs who live elsewhere.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'One written number for the attorney to review.',
      },
    ],
    ctaTitle: 'Get one offer the family can review with a lawyer',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. KindKey does not take sides. Your attorney says whether anyone may sign.',
  }),
  post('estate-house-repairs-mortgage-taxes-liens', {
    breadcrumbName: 'Repairs, loans, and liens',
    title: 'Estate House With Repairs, a Mortgage, Back Taxes, or Liens',
    description:
      'What to do with a Washington estate house that needs repairs or has a mortgage, back taxes, or liens. Authority to sign is separate from condition. Not legal advice.',
    h1: 'What to Do With an Estate House That Needs Repairs or Has a Mortgage, Back Taxes, or Liens',
    publishedAt: '2026-10-14',
    intro: [
      'Repairs, a mortgage, back taxes, and liens change the numbers on an estate house. They do not, by themselves, decide who may sign the deed. KindKey Home Buyers LLC buys houses in that condition as a principal, in King County and Pierce County. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463 or use the cash-offer form. KindKey is not a probate attorney, a lender, a tax advisor, or a contractor.',
      'This article is general information, not legal advice. Talk with a Washington probate attorney about authority to sell, and with a tax professional about basis and gains. If the loan is in default, ask the attorney about Washington’s distressed-property rules under RCW 61.34 before you sign. KindKey does not interpret that statute.',
    ],
    sections: [
      {
        heading: 'Condition and authority are separate questions',
        paragraphs: [
          'A leaking roof, a stopped remodel, or a house full of deferred maintenance can be sold as it sits. The personal representative still needs letters testamentary or letters of administration, and the order on nonintervention powers. If those powers were granted, RCW 11.68.090 lets the personal representative sell the decedent’s real property without a further court order, subject to the will and the representative’s duties. If they were not granted, or if a later order restricts them, chapter 11.56 RCW may require court involvement. A bad roof does not skip that reading. A new roof does not create letters.',
          'RCW 11.68.011 is the statute on granting nonintervention powers. Unless the will tells the court not to grant them, the grant turns on solvency, counting probate and nonprobate assets, and on whether the petitioner fits a path in the statute. One path is the person named in the probated will. The step-by-step guide for executors covers the petition and the notice rules. The King County and Pierce County estate guides cover which clerk gets the filing. KindKey will not open the estate because the house needs work.',
        ],
      },
      {
        heading: 'Selling without repairing first',
        paragraphs: [
          'You can ask for a cash offer without a contractor bid or a pre-inspection. KindKey prices the house you have. An offer on a house that needs a roof is not a retail price for a repaired house. KindKey may repair, hold, rent, or resell after closing. You are not charged an agent commission or a separate assignment fee. A countywide discount quoted before anyone sees the property is a guess.',
          'A listing is the other path, if a broker and your attorney think retail buyers will wait through the repairs or buy the project. Hire a licensed broker for that. KindKey will not list the house. The Edgewood guide on houses that need major repairs is a city-level look at permits and North Hill houses. The as-is page and the hoarder-house page cover condition more broadly. Belongings left in a rough house are covered in the estate-sale comparison. You can leave them.',
        ],
      },
      {
        heading: 'A mortgage on the estate house',
        paragraphs: [
          'A mortgage does not disappear because the borrower died. The closing agent orders a payoff. If the purchase price covers that payoff and the other amounts that have to be paid to deliver the title the contract requires, those amounts are commonly paid at closing from the proceeds. The settlement statement shows the figures before you sign. If the price does not cover them, the sale may not close unless the lender agrees to a different number. KindKey will not negotiate with the lender as the estate’s representative.',
          'A missed payment adds a second clock to the probate calendar. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret them and will not tell you an estate is exempt. The statewide guide on selling before foreclosure, and the city guides for Auburn, Federal Way, Milton, and Edgewood, describe the notice side of that problem. Read them with your attorney if a trustee’s notice has already arrived. An offer from KindKey does not, by itself, stop a foreclosure sale.',
        ],
      },
      {
        heading: 'Back taxes and other liens',
        paragraphs: [
          'Delinquent property taxes are a title issue the closing agent will list. On a King County parcel, the tax questions go to King County. On a Pierce County parcel, they go to Pierce County. Auburn and Milton can fall in either county, so the bill’s letterhead matters more than the city name. If the sale price covers the taxes that have to be paid to close, they are commonly paid from proceeds and shown on the settlement statement. KindKey does not give advice about penalties, interest, or a county tax-foreclosure process, and KindKey does not give advice about the income-tax basis of an inherited house.',
          'Other liens show up the same way: a judgment, a homeowners association claim, a municipal utility balance, a child-support lien, or a tax lien recorded against the owner. The title report is the list. A creditor claim filed in the estate is not automatically the same thing as a lien on the house. The personal representative and the attorney handle claims. A recorded lien that title requires to be paid still has to be paid or otherwise resolved before the deed the buyer expects can be delivered. A sale does not erase a lien that the settlement statement did not pay.',
        ],
      },
      {
        heading: 'A practical order',
        paragraphs: [
          'Ask the attorney who can sign and whether court approval of the sale is required. Tell KindKey about the roof, the mortgage, the tax bill, and any lien you already know about, so the offer is built on the real file. You can request that offer while title is being opened and while letters are still being prepared. Review the settlement statement before you sign. Reject the offer if the net number is wrong for the estate. The personal representative’s duty to the beneficiaries includes looking at that number honestly. KindKey’s duty is the buyer’s duty in the contract.',
          'Code letters from a city do not appoint a personal representative, and they do not have to be cured before an as-is offer. The city still controls its own file. If heirs disagree about whether to sell a house that needs work, use the guide on heirs who disagree or live out of state. Call (206) 519-5463 or use the cash-offer form when you want the condition and the liens priced together.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does the estate have to repair the house before selling it?',
        answer:
          'No. KindKey buys estate houses as they sit, including heavy repairs. The offer reflects that condition. A listing with a broker is available if you hire one. KindKey will not list the house.',
      },
      {
        question: 'Can an estate house with a mortgage be sold?',
        answer:
          'Yes, when the person with authority can sign and the closing can pay what title requires, or the lender agrees to something else. KindKey does not negotiate the payoff for you. The settlement statement shows the numbers. Call (206) 519-5463 or use the cash-offer form to ask for an offer.',
      },
      {
        question: 'Who pays back property taxes?',
        answer:
          'Delinquent taxes that must be paid to close are commonly paid from the sale proceeds and listed on the settlement statement. Which county is owed the tax depends on the parcel. KindKey does not give tax advice. Talk with a tax professional about basis and gains, and with your attorney about authority.',
      },
      {
        question: 'Do liens or repairs change whether the court must approve the sale?',
        answer:
          'The approval question comes from the letters, the will, and any later order restricting nonintervention powers. RCW 11.68.090 and chapter 11.56 RCW are the places your attorney starts. A repair list does not replace that reading. This article is not legal advice.',
      },
    ],
    related: [
      {
        href: '/sell-inherited-probate-house',
        label: 'Sell an inherited or probate house',
        description: 'The service page for estate sales.',
      },
      {
        href: '/sell-house-as-is',
        label: 'Sell a house as-is',
        description: 'Repairs do not have to be finished first.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'When the estate loan is also in default.',
      },
      {
        href: '/blog/how-to-sell-an-estate-house-in-washington',
        label: 'Step-by-step for executors',
        description: 'Letters and when court approval is required.',
      },
      {
        href: '/blog/sell-house-before-foreclosure-washington',
        label: 'Selling before foreclosure in Washington',
        description: 'The notice, the payoff, and RCW 61.34.',
      },
      {
        href: '/blog/behind-on-property-taxes-edgewood-wa',
        label: 'Behind on property taxes in Edgewood',
        description: 'A Pierce County tax example on one city’s houses.',
      },
      {
        href: '/blog/sell-house-needing-repairs-edgewood-wa',
        label: 'Major repairs in Edgewood',
        description: 'Permits and condition on North Hill and in the valley.',
      },
      {
        href: '/blog/selling-an-estate-house-when-heirs-disagree',
        label: 'When heirs disagree',
        description: 'If the family cannot agree to sell a house that needs work.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Include the mortgage, the taxes, and the condition.',
      },
    ],
    ctaTitle: 'Get an offer that accounts for the repairs and the liens',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. Your attorney confirms who can sign. The settlement statement shows what gets paid.',
  }),
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
        href: '/blog/selling-an-estate-house-in-pierce-county',
        label: 'Estate houses in Pierce County',
        description: 'The county guide for Tacoma, Edgewood, Milton, and Puyallup.',
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
        href: '/blog/selling-an-estate-house-when-heirs-disagree',
        label: 'When heirs disagree or live out of state',
        description: 'When heirs live across the county line or out of state.',
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
        href: '/blog/selling-an-estate-house-in-king-county',
        label: 'Estate houses in King County',
        description: 'The county guide Federal Way shares with Kent, Auburn, and Seattle.',
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
        href: '/blog/selling-an-estate-house-in-king-county',
        label: 'Estate houses in King County',
        description: 'Auburn’s King County side, plus Kent, Federal Way, and Seattle.',
      },
      {
        href: '/blog/estate-house-repairs-mortgage-taxes-liens',
        label: 'Repairs, mortgages, taxes, and liens',
        description: 'When the Auburn estate house also has a loan or a tax bill.',
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
        href: '/blog/how-to-sell-an-estate-house-in-washington',
        label: 'Step-by-step for executors',
        description: 'Letters, nonintervention powers, and the order of work.',
      },
      {
        href: '/blog/selling-an-estate-house-in-king-county',
        label: 'Estate houses in King County',
        description: 'Seattle and Kent courthouses, Auburn, Kent, and Federal Way.',
      },
      {
        href: '/blog/selling-an-estate-house-in-pierce-county',
        label: 'Estate houses in Pierce County',
        description: 'Tacoma, Edgewood, Milton, and Puyallup.',
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
      {
        href: '/blog/estate-sale-vs-selling-the-house-as-is',
        label: 'Estate sale vs. selling the house as-is',
        description: 'Contents, estate sale companies, and leaving belongings behind.',
      },
      {
        href: '/blog/how-to-sell-an-estate-house-in-washington',
        label: 'Step-by-step for executors',
        description: 'Who can sign, before the clean-out.',
      },
    ],
    ctaTitle: 'Tell KindKey the house is vacant or inherited',
    ctaSubtitle: 'You do not have to clean it out before you ask for a number.',
  }),
  post('selling-a-house-during-divorce-edgewood-wa', {
    breadcrumbName: 'Divorce sales in Edgewood',
    title: 'Selling Your House During a Divorce in Edgewood, WA',
    description:
      'How Edgewood spouses sell a Pierce County house during a divorce once an attorney confirms who can sign. KindKey is a buyer, not a divorce lawyer.',
    h1: 'Selling Your House During a Divorce in Edgewood, WA',
    publishedAt: '2026-10-13',
    intro: [
      'Selling a house during a divorce in Edgewood starts with who is allowed to sign the deed, not with paint or a listing photo. KindKey Home Buyers LLC can buy the house as a principal once that question is answered. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463 or use the cash-offer form on this site. KindKey is not a divorce attorney, a mediator, or a real estate agent. This article is not legal advice.',
      'Edgewood is in Pierce County, between Milton, Fife, Puyallup, and Sumner. A North Hill house, a house in the Puyallup River valley, and a parcel the city’s plans place inside the Puyallup Indian Reservation boundary can share an Edgewood address and still be different title files. The divorce case and the deed do not always live in the same office. Your attorney and the closing agent sort that. KindKey will not.',
    ],
    sections: [
      {
        heading: 'Where an Edgewood divorce is filed',
        paragraphs: [
          'RCW 26.09.010 says a proceeding for dissolution of marriage, legal separation, or a declaration about the validity of a marriage may be filed in the superior court of the county where the petitioner resides. If you still live in Edgewood, that county is Pierce County. Filings go to the Clerk of the Superior Court at the County-City Building, 930 Tacoma Ave S, Room 110, Tacoma, WA 98402. The clerk’s phone number is (253) 798-7455, and the public counter is open Monday through Friday, 8:30 a.m. to 4:30 p.m. KindKey will not file the petition, serve your spouse, or choose the courthouse.',
          'The other spouse may already be in Milton, Fife, Puyallup, Sumner, Federal Way, or on the King County side of Auburn. If that person is the petitioner and no longer lives in Pierce County, the case may be in a different superior court. The house does not move with them. An Edgewood deed is recorded with the Pierce County Auditor. King County Superior Court, in Seattle or at the Maleng Regional Justice Center in Kent, is not the recording office for this parcel. Tell the closing agent where the case is filed and where the house sits. Those can be two counties.',
        ],
      },
      {
        heading: 'Who has to sign an Edgewood deed',
        paragraphs: [
          'Community property is defined in RCW 26.16.030. The same statute says neither spouse shall sell, convey, or encumber community real property unless the other spouse joins in the deed or other instrument, and both spouses acknowledge it. A handshake, a text message, or one signature on a purchase agreement is not that joinder. A Pierce County title company asks for the missing signature or for a court order that removes the need for it. KindKey cannot waive the requirement because both of you want the sale to be simple.',
          'A different statute covers a transfer from one spouse to the other. RCW 26.16.050 allows one spouse to deed a community interest directly to the other, and the grantor signs without the grantee joining. That deed changes who owns the house as between the two of you. It is not a sale to KindKey. A decree under RCW 26.09.080 can also award the house. The statute tells the court to divide property and liabilities in a way that is just and equitable, after considering the community property, the separate property, the length of the marriage, and each spouse’s economic circumstances, including whether the family home should go for a time to the parent the children live with most of the time. Just and equitable is not a promise of an even split. KindKey will not predict what a judge will do.',
        ],
      },
      {
        heading: 'Temporary orders, and transfers to avoid',
        paragraphs: [
          'RCW 26.09.060 allows temporary orders while the case is open, including orders about property. Read the petition and every order before you sign a purchase agreement. If an order restrains a sale or a new loan, a cash offer does not lift it. Do not deed the Edgewood house to a relative, or into one name, to keep it away from the other spouse or from the court. KindKey will not take part in that transfer.',
          'The house itself is often the fight. On North Hill the lot may hold a shop, a long driveway, and furniture neither person has sorted. In the valley the lot is different and the argument is the same. Meridian Avenue E, which is State Route 161, and Jovita Boulevard are the roads people use to reach those houses. You do not have to repair the roof, empty the shop, or stage a living room before you ask for a number. You do have to know whether you are allowed to accept it. Request the offer while your attorney works. Accept it only when your attorney says the signer is clear.',
        ],
      },
      {
        heading: 'What a direct sale does, and what it leaves alone',
        paragraphs: [
          'KindKey buys as a principal and does not charge an agent commission or a separate assignment fee. Closing-cost responsibility is written in the purchase agreement and can vary. A mortgage payoff, a Pierce County tax bill, or a City of Edgewood notice can reduce what is left. The closing agent prepares a settlement statement before anyone signs a deed. KindKey does not divide those proceeds between spouses. The decree, a written agreement your lawyers approve, or the closing instructions do that work.',
          'A listing can still fit a house that is already in good shape and able to wait through showings, if both of you can cooperate on access. Hire a licensed broker for that path. KindKey will not run the listing. If the loan is also behind, read the Edgewood foreclosure guide and talk with a Washington attorney about the distressed-property rules in RCW 61.34 before you sign. KindKey does not interpret that statute. If a parent has died and the divorce is tangled with an estate, the probate guide is the other file to read, because letters from the court are a different signature problem. Cash means KindKey is not waiting on a buyer’s mortgage approval. It does not mean the divorce is finished.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can we sell the Edgewood house before the divorce is final?',
        answer:
          'Sometimes, if both spouses can sign or a court order allows the sale. KindKey does not make that call. Ask your attorney, then use the cash-offer form or call (206) 519-5463 if a sale is allowed. You can decline the offer.',
      },
      {
        question: 'Does one signature work if the deed is only in one name?',
        answer:
          'Not by itself. RCW 26.16.030 requires both spouses to join in a deed of community real property, unless another statute or a court order applies. Ask your attorney. KindKey will not decide that from the face of the deed.',
      },
      {
        question: 'Where do we file if we still live in Edgewood?',
        answer:
          'Pierce County Superior Court. The clerk is at 930 Tacoma Ave S in Tacoma, at (253) 798-7455. If the petitioner has moved to another county, ask a lawyer before you assume the case stays in Tacoma.',
      },
      {
        question: 'Will KindKey negotiate with my spouse?',
        answer:
          'No. KindKey is the buyer of the house. Your lawyers handle the divorce. Call (206) 519-5463 when you want a written offer to review with them.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'The Edgewood city page, in Pierce County.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-edgewood',
        label: 'Sell fast for cash in Edgewood',
        description: 'How a direct Edgewood sale works when you are ready.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Inherited houses in Edgewood',
        description: 'When a death and a divorce are in the same file.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'If the loan is behind while the case is open.',
      },
      {
        href: '/blog/selling-a-house-during-divorce-auburn-wa',
        label: 'Divorce sales in Auburn',
        description: 'The same problem in KindKey’s home city, on the county line.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'The form. Asking does not obligate you to sell.',
      },
    ],
    ctaTitle: 'Ask for an Edgewood number once you know who can sign',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. Your attorney confirms authority. You can say no.',
  }),
  post('sell-house-needing-repairs-edgewood-wa', {
    breadcrumbName: 'Major repairs in Edgewood',
    title: 'How to Sell a House That Needs Major Repairs in Edgewood, WA',
    description:
      'How to sell an Edgewood house with a failed roof, a stopped remodel, or other major repairs. KindKey buys as-is. The city permit counter is separate.',
    h1: 'How to Sell a House That Needs Major Repairs in Edgewood, WA',
    publishedAt: '2026-10-13',
    intro: [
      'You sell an Edgewood house that needs major repairs by pricing it in its current condition and closing through a title company, without finishing the roof, the foundation, or a stopped remodel first. KindKey Home Buyers LLC buys that house as a principal. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463 or send the address through the cash-offer form. KindKey is not a contractor, a building official, or a real estate agent.',
      'Edgewood is in Pierce County. Most residents live on North Hill, in single-family houses with longer driveways and shops set back from the street. A smaller share of the city sits at the base of the hill in the Puyallup River valley, where drainage and access are a different problem. The offer is for the house you have. A citywide repair discount, quoted before anyone sees the property, is a guess.',
    ],
    sections: [
      {
        heading: 'The city’s permit counter is not the closing',
        paragraphs: [
          'If you did want to repair before a retail listing, the permits are a City of Edgewood matter. Community Development is at Edgewood City Hall, 10440 Dom Calata Way E, Edgewood, WA 98372. The permit line published by the city is (253) 952-3299, and City Hall’s posted hours are Monday through Thursday, 8:30 a.m. to 5:00 p.m. The city’s online permit center says plumbing, mechanical, and residential re-roof applications are generally issued within one week, and that the city tries to review other new applications within eight weeks and resubmittals within six weeks, depending on complexity. Those are the city’s stated targets. They are not a promise, and they are not a step KindKey requires.',
          'The city’s permit page also posts construction hours: Monday through Friday, 7:00 a.m. to 7:00 p.m., Saturday 9:00 a.m. to 6:00 p.m., and no construction on Sunday or on city-observed holidays. A contractor following those hours is doing city work. KindKey’s purchase does not depend on that schedule. You can ask for an offer while a permit is open, expired, or never pulled. Bring the paperwork if you have it. If you do not, say so.',
        ],
      },
      {
        heading: 'North Hill repairs and valley repairs are different jobs',
        paragraphs: [
          'A North Hill house often needs a roof, a failing deck, a shop that was wired years ago, or a bathroom that was started and abandoned. A valley house may have drainage trouble, a soft floor, or access that a retail buyer’s lender will not like. The City of Edgewood’s stormwater materials describe Jovita Creek, in the northeast of the city, flowing through a steep-sided canyon, with hill slopes the city says are subject to slides from runoff, tree falls, unstable ground, and high water. That is a description of the basin, not a diagnosis of your lot. If your house is along Jovita Boulevard, say what you have seen. KindKey prices the property in front of us.',
          'Day-to-day travel runs on Meridian Avenue E, State Route 161, and on Jovita Boulevard. Jovita is an older local name, not a separate city. Milton is west, Fife is farther west, and Puyallup and Sumner are the neighbors people drive to for errands. If the mailing city on the tax bill is one of those, use that city’s records. The closing agent confirms the Edgewood parcel. East Pierce Fire & Rescue is the fire agency: Edgewood’s former Fire District 8 joined East Pierce in 2010, and East Pierce’s 2022 standards of cover list Station 118 at 10105 24th Street E in Edgewood. A fire on top of an old repair is a different article. The countywide fire-damage guide covers insurance and condition. KindKey still does not advise you on a claim.',
        ],
      },
      {
        heading: 'Open permits, code letters, and a lender’s appraisal',
        paragraphs: [
          'An unfinished addition, a garage turned into a bedroom, or a roof that was replaced without a final inspection can sit in a City of Edgewood file. A letter about that work is a code case, not a reason you must hire the contractor before you sell. The general code-violations page explains how KindKey buys houses with an open notice. The city still controls its file until the city closes it. KindKey will not pull the permit, pass the inspection, or tell a hearing officer what to do.',
          'A retail buyer using a mortgage may not be able to close while the house fails an appraisal or an inspection. That is a common reason Edgewood owners with major repairs ask for a direct offer. Cash, in this sale, means KindKey is not waiting on that buyer’s loan. It does not mean a suitcase of money, and it does not erase a mortgage, a Pierce County tax lien, or a contractor’s lien. Those amounts show on the settlement statement. KindKey does not charge an agent commission or a separate assignment fee. Closing costs are whatever the purchase agreement states.',
        ],
      },
      {
        heading: 'When repairing, listing, or selling as-is each fits',
        paragraphs: [
          'Finishing the repair can fit if you have the money, the time, and a house you want to show. A listing can fit after that, or even before it, if a broker will take the condition and you can host access. Hire a licensed broker for a listing. KindKey will not run one and will not tell you a listing is a mistake.',
          'A direct sale fits when the repair bid is larger than the cash you have, when you already live in Puyallup or Tacoma, or when a deadline is closer than the city’s review time. Photos of the roof, the shop, and the stopped room are enough to start. If a floor is not safe, say so. You can leave unwanted furniture. Take personal papers. If the house is also in probate, or a foreclosure notice is posted on a quiet Edgewood street, read those Edgewood guides before you sign. Washington’s distressed-property rules under RCW 61.34 are a lawyer’s statute. KindKey does not interpret them. You can say no after you see the offer.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need an Edgewood building permit before KindKey will look?',
        answer:
          'No. KindKey buys Edgewood houses with open, expired, or missing permits. The city’s permit counter at 10440 Dom Calata Way E is for owners who choose to repair. Call (206) 519-5463 or use the cash-offer form to start a purchase.',
      },
      {
        question: 'Will a failed roof or a half-finished bathroom block a cash offer?',
        answer:
          'No. The offer reflects the remaining work, so it can be less than a retail price for a finished house. You do not have to complete the repair to see the number.',
      },
      {
        question: 'Is a City of Edgewood repair notice the same as a foreclosure?',
        answer:
          'No. A city letter and a trustee’s notice are different documents. Read the header. If both exist, talk with a Washington attorney before you sign. KindKey can still look at the house.',
      },
      {
        question: 'Are you a contractor who will fix the house for me?',
        answer:
          'No. KindKey is a principal buyer. KindKey may repair after closing for its own account. That work is not a service you hire, and it is not a real estate listing.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'Pierce County city page.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-edgewood',
        label: 'Sell fast for cash in Edgewood',
        description: 'The direct-sale path when repairs make a listing a poor fit.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Inherited houses in Edgewood',
        description: 'Estates often inherit the deferred repair too.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'When the repair bill and the mortgage are both behind.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'Open notices in King and Pierce County.',
      },
      {
        href: '/blog/sell-fire-damaged-house-king-pierce-county',
        label: 'Fire-damaged houses in King or Pierce County',
        description: 'When the major repair started as a fire.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'No contractor bid required.',
      },
    ],
    ctaTitle: 'Ask for an Edgewood offer on the house as it sits',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. Describe the repair. You can say no after you see the number.',
  }),
  post('behind-on-property-taxes-edgewood-wa', {
    breadcrumbName: 'Property taxes in Edgewood',
    title: 'Behind on Property Taxes in Edgewood? Your Options in Pierce County',
    description:
      'Pierce County options when an Edgewood property-tax bill is behind, including payment, deferral, and a sale. KindKey is a buyer, not the treasurer.',
    h1: 'Behind on Property Taxes in Edgewood? Your Options in Pierce County',
    publishedAt: '2026-10-13',
    intro: [
      'If you are behind on property taxes on an Edgewood house, the bill is a Pierce County bill, and the options still open to you are the ones the treasurer and your own timeline allow: pay what is due, ask the county about a program you might qualify for, or sell before a tax foreclosure if a sale can pay the lien. KindKey Home Buyers LLC can make a cash offer on that third path. Call (206) 519-5463 or use the cash-offer form. The office is at 640 1st St SW, Auburn, WA 98001. KindKey is not the Pierce County Treasurer, a tax advisor, or a real estate agent. This article is not tax or legal advice.',
      'Edgewood is entirely in Pierce County. King County’s treasury, which covers Federal Way and most of Auburn, is the wrong counter. Milton, next door, can fall in either county. An Edgewood parcel does not. The Pierce County Assessor-Treasurer is at 2401 S 35th St, Room 142, Tacoma, WA 98409. The main phone number is (253) 798-6111. The foreclosure department’s published number is (253) 798-2728. The office is open Monday through Friday, 8:30 a.m. to 4:30 p.m.',
    ],
    sections: [
      {
        heading: 'What “behind” means on a Pierce County bill',
        paragraphs: [
          'Pierce County’s tax page, following RCW 84.56.020, says statements go out in February and that failure to receive one does not waive interest. If the tax due is $50 or less, the full amount is due by April 30. If it is over $50, the first half may be paid by April 30 and the balance by October 31. After those dates the unpaid amount is delinquent. For residential property with four or fewer units, Pierce County’s interest page says interest on taxes levied for 2023 and later is 9 percent a year, figured at 0.75 percent a month, and that those residential parcels are not charged the penalty that applies to other property. Other property is charged 12 percent a year, plus penalties the county describes as 3 percent on June 1 and 8 percent on December 1, capped at 11 percent. Your bill controls. KindKey will not calculate it.',
          'Interest on a late first half is a different problem from a tax foreclosure. Many Edgewood owners on North Hill, or in the valley along the Puyallup River, are one installment behind and still years away from a treasurer’s sale. Call the Assessor-Treasurer with the ten-digit parcel number and ask for the amount. Do not guess from a neighbor’s bill on Meridian Avenue E or Jovita Boulevard. Lots on the hill and lots in the valley are not assessed alike, and KindKey does not set the assessment.',
        ],
      },
      {
        heading: 'When Pierce County starts a tax foreclosure',
        paragraphs: [
          'RCW 84.64.050 says that after three years from the date of delinquency, the county treasurer must issue certificates of delinquency for the taxes, interest, and costs, with a limited exception if the county legislative authority agrees to a shorter set of years. Pierce County’s foreclosure page describes the properties it proceeds on as those with tax of more than $100 cumulative that is three or more years delinquent. The treasurer files a certificate of delinquency with Pierce County Superior Court. That case is not a mortgage foreclosure under chapter 61.24 RCW, and it is not a City of Edgewood code letter. Read the caption on the paper.',
          'The county publishes a sale date for the current foreclosure year. For 2026, Pierce County’s site says the sale is Monday, November 9, and that owners and others with a recorded interest may redeem until 4:30 p.m. the day before the sale, which the county lists as Friday, November 6, 2026. The county also says there is no right of redemption after the sale, with narrow exceptions for a minor or a person judged incompetent. Confirm those dates with the foreclosure department before you rely on them. A published auction date can be updated. KindKey cannot move it.',
        ],
      },
      {
        heading: 'County programs that are not a sale to KindKey',
        paragraphs: [
          'Pierce County tells seniors age 61 or older, and disabled homeowners, to call the Senior / Disabled Department at (253) 798-2169 about a property-tax deferral. The county says a home that qualifies may be removed from foreclosure. The same page says a household with income of $64,000 or less may qualify for a one-time waiver of interest and penalty on a primary residence, with supporting documents, through the foreclosure avoidance team at (253) 798-2728. KindKey does not decide eligibility and will not tell you that you qualify. Call the county.',
          'If someone else is paying the tax on a parcel already in foreclosure, Pierce County says state law requires notarized proof of the relationship, on the county’s authorization form. The Assessor-Treasurer’s office says it does not have a notary. Bring the form already notarized. Paying the county is not the same as selling the house. A relative who pays the bill does not become the buyer unless a deed says so.',
        ],
      },
      {
        heading: 'Selling the Edgewood house while the taxes are open',
        paragraphs: [
          'A completed sale can use proceeds to pay the taxes and the other liens the title company requires, if the price covers them. If it does not, the sale may not close unless the lienholders agree to different numbers. KindKey will not negotiate those agreements as your representative. You should see a settlement statement before you sign a deed. You do not have to catch the taxes up, or repair the house, before you ask for an offer. A North Hill roof and a valley drainage problem are priced as they are.',
          'KindKey does not charge an agent commission or a separate assignment fee. Cash means the purchase is not waiting on a retail buyer’s mortgage. It does not erase the tax. If a mortgage foreclosure notice is posted at the same time, you have two clocks. Read the Edgewood foreclosure guide and talk with a Washington attorney about RCW 61.34 before you sign. KindKey does not interpret that law. If the house is also in a parent’s estate, the personal representative’s authority is a separate question, covered in the Edgewood probate guide. Requesting an offer does not pause the treasurer’s date. You can say no after you see the number.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Are Edgewood property taxes paid to King County?',
        answer:
          'No. Edgewood is in Pierce County. Pay and ask questions at the Pierce County Assessor-Treasurer, 2401 S 35th St, Room 142, Tacoma, (253) 798-6111. Milton can be either county. Edgewood is not.',
      },
      {
        question: 'Does one late installment mean the house is in tax foreclosure?',
        answer:
          'No. Pierce County describes tax foreclosure for taxes that are more than $100 and three or more years delinquent, and RCW 84.64.050 uses a three-year mark. Call the treasurer with your parcel number. KindKey does not track your account.',
      },
      {
        question: 'Can I sell before the Pierce County tax sale?',
        answer:
          'You can request a cash offer while taxes are unpaid. A closing can pay the lien if the price and the title requirements allow it. Call (206) 519-5463 or use the cash-offer form. Confirm the county’s redemption deadline yourself. An offer does not extend it.',
      },
      {
        question: 'Will KindKey tell me if I qualify for a senior deferral?',
        answer:
          'No. Call Pierce County’s Senior / Disabled Department at (253) 798-2169. KindKey only offers to buy the house, and only if you decide to sell.',
      },
    ],
    related: [
      {
        href: '/areas/edgewood',
        label: 'Sell a house in Edgewood',
        description: 'The Edgewood city page.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-edgewood',
        label: 'Sell fast for cash in Edgewood',
        description: 'A direct sale when the tax bill is part of a larger deadline.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-edgewood',
        label: 'Inherited houses in Edgewood',
        description: 'Estates often inherit the delinquent tax account too.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-edgewood-wa',
        label: 'Avoiding foreclosure in Edgewood',
        description: 'Mortgage foreclosure is a different notice from a tax sale.',
      },
      {
        href: '/sell-house-before-foreclosure',
        label: 'Sell a house before foreclosure',
        description: 'How a direct sale differs from a rescue program.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'The form. It does not pay the treasurer by itself.',
      },
    ],
    ctaTitle: 'Bring the Edgewood tax bill, then ask for a number',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. Confirm amounts and dates with Pierce County. You can say no.',
  }),

  post('sell-rental-property-with-tenants-milton-wa', {
    breadcrumbName: 'Rentals with tenants in Milton',
    title: 'Tired Landlord? Selling a Rental with Tenants in Milton, WA',
    description:
      'How Milton landlords sell a rented house with the tenant still there. Washington tenancy rules stay with your attorney. KindKey is a buyer.',
    h1: 'Tired Landlord? Selling a Rental with Tenants in Milton, WA',
    publishedAt: '2026-10-13',
    intro: [
      'You can sell a Milton rental with the tenants still living there. KindKey Home Buyers LLC buys houses as a principal, including occupied rentals, and does not require you to empty the house first. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463 or use the cash-offer form. KindKey is not a property manager, a landlord-tenant lawyer, or a real estate agent. This article is not legal advice.',
      'Milton sits in both Pierce County and King County. The county line runs through the city, and a Milton, WA 98354 address does not tell you which county holds the deed. Surprise Lake houses, older houses along Milton Way, and houses on the northern streets are different rentals. The tenant’s rights come from the lease and from Washington law on both sides of the line. The recording office follows the parcel.',
    ],
    sections: [
      {
        heading: 'A sale does not end the tenancy',
        paragraphs: [
          'Chapter 59.18 RCW is Washington’s Residential Landlord-Tenant Act. Selling the house does not, by itself, cancel a lease or a month-to-month tenancy. The tenant can still be in the house on the day the deed records. The buyer takes the property subject to that tenancy unless a lawful end to the tenancy has already happened. KindKey’s offer can assume the tenant stays. You do not have to stage the living room or promise that it will be vacant at closing.',
          'City Hall is at 1000 Laurel Street, Milton, WA 98354, phone (253) 922-8733, with posted hours Monday through Thursday, 7:30 a.m. to 4:30 p.m. The city maintains streets, parks, and its own permits. It does not hear evictions, and it does not become your property manager because you are tired of calls. Fife is west, Edgewood is east, Pacific is north, and Federal Way is the larger King County city past the line. None of those city halls ends a Milton tenancy either.',
        ],
      },
      {
        heading: 'Why “I’m selling” is not a notice you should copy',
        paragraphs: [
          'Landlords sometimes hear that selling is a legal reason to end a tenancy. RCW 59.18.650(2)(e) is narrower than that. It describes a cause when the owner elects to sell a single-family residence and has given at least 90 days’ written notice. The statute says an owner “elects to sell” by making reasonable attempts to sell within 30 days after the tenant has vacated, including, at a minimum, listing the house at a reasonable price with a realty agency or advertising it on the multiple listing service. A rebuttable presumption says the owner did not intend to sell if that listing does not happen. Subsection (5) of the same statute says this cause does not end a fixed-term tenancy early unless the landlord and the tenant agree in writing and the tenant has at least 60 days to leave.',
          'KindKey does not list houses. A purchase by KindKey is not a listing with a realty agency and it is not an MLS advertisement. Do not serve a notice under that subsection in order to empty a Milton house for a cash sale. KindKey will not write the notice, serve it, or tell you that it fits your lease. A Washington landlord-tenant attorney should read the lease, the statute, and any local rule together. If you want the tenant to stay through closing, say that when you ask for the offer. That is the path KindKey can actually price.',
        ],
      },
      {
        heading: 'What to bring to the conversation',
        paragraphs: [
          'Bring the address, which county you believe the parcel is in, the lease if you have it, the rent amount, the deposit amount, and whether rent is current. The closing agent needs those facts because unpaid rent, a deposit, and prepaid rent can show up in the settlement. KindKey does not calculate what the tenant is owed and does not hold the deposit for you before closing. If you do not know the county, say so. Guessing from the school the tenant’s children attend, or from a neighbor in Edgewood, can send the title order to the wrong auditor.',
          'A Pierce County Milton parcel records with the Pierce County Auditor. A King County Milton parcel records with the King County Recorder. Taxes follow the same split. King County’s map of Milton shows the county line inside the corporate boundary, including the northern part of the city, with I-5 along the west side of that King County portion. The closing agent confirms the parcel. Tell us about pets, a non-paying occupant, a garage converted to a room, or a repair you stopped making. The offer follows that house. A Milton-wide price, quoted before anyone sees the lease and the lot, is a guess.',
        ],
      },
      {
        heading: 'Listing, managing, or selling with the tenant in place',
        paragraphs: [
          'You can keep managing the rental. You can also hire a licensed broker to list it, if the tenant will allow the access a listing needs and a retail buyer will accept an occupied house. KindKey will not run that listing and will not tell you it is a mistake. Showings are the part many tired landlords cannot face. A direct sale is one walkthrough, arranged with whatever notice your attorney says the lease and chapter 59.18 require. KindKey will not tell you to enter without that notice.',
          'KindKey does not charge an agent commission or a separate assignment fee. Cash means the purchase is not waiting on a buyer’s mortgage approval. It does not erase a mortgage, a tax bill, or money the tenant is due. Those figures belong on the settlement statement before you sign. If the loan is in default, read the Milton foreclosure guide and talk with a Washington attorney about RCW 61.34. KindKey does not interpret that statute. If you inherited the rental and are not sure you can sign, read the Milton probate guide first. You can say no after you see the offer. Call (206) 519-5463 when you want the number.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell a Milton rental without evicting the tenant?',
        answer:
          'Yes. KindKey buys Milton houses with tenants in place. A sale does not, by itself, end the tenancy. Call (206) 519-5463 or use the cash-offer form and say the house is occupied.',
      },
      {
        question: 'Should I give a 90-day “I’m selling” notice before I call KindKey?',
        answer:
          'Do not use RCW 59.18.650(2)(e) as a plan to empty the house for a cash buyer. That subsection is written around a listing with a realty agency or on the MLS, and KindKey does not list houses. Ask a landlord-tenant attorney before you serve any notice.',
      },
      {
        question: 'Does it matter which county the Milton rental is in?',
        answer:
          'Yes for the deed and the taxes. Milton is in both Pierce County and King County. The tenant’s state-law rights exist on either side. Tell KindKey which county you think applies, if you know.',
      },
      {
        question: 'Will KindKey collect the rent or return the deposit?',
        answer:
          'KindKey is the buyer, not your property manager. Bring the lease, the deposit, and the rent status to the closing conversation. The settlement statement is where charges are shown. KindKey does not calculate the tenant’s claim.',
      },
    ],
    related: [
      {
        href: '/areas/milton',
        label: 'Sell a house in Milton',
        description: 'The Milton city page, in two counties.',
      },
      {
        href: '/sell-house-with-tenants',
        label: 'Sell a house with tenants',
        description: 'The service page for occupied rentals.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-milton',
        label: 'Sell fast for cash in Milton',
        description: 'How a direct Milton sale works once you are ready.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-milton',
        label: 'Inherited houses in Milton',
        description: 'When the rental came from an estate.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-milton-wa',
        label: 'Avoiding foreclosure in Milton',
        description: 'If the rental’s loan is also behind.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'Say the house is tenant-occupied on the form.',
      },
    ],
    ctaTitle: 'Ask for a Milton offer with the tenant still there',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You do not have to empty the house first. You can say no.',
  }),
  post('selling-a-vacant-house-milton-wa', {
    breadcrumbName: 'Vacant houses in Milton',
    title: 'Selling a Vacant House in Milton, WA',
    description:
      'How to sell a vacant Milton house without a clean-out or a listing. The parcel may be in Pierce County or King County. KindKey buys as-is.',
    h1: 'Selling a Vacant House in Milton, WA',
    publishedAt: '2026-10-13',
    intro: [
      'You can sell a vacant house in Milton without cleaning it out, flying back for showings, or repairing it to listing condition. KindKey Home Buyers LLC buys vacant houses directly. Call (206) 519-5463 or use the cash-offer form. The office is at 640 1st St SW, Auburn, WA 98001. KindKey is not a real estate agent. If the vacant house is also in an estate, a Washington attorney still has to confirm who can sign. This article is not legal or tax advice.',
      'Vacant means nobody lives there. It does not tell you the county. Milton is in both Pierce County and King County, and the line runs through the city. The city’s shoreline materials describe Milton as about 2.6 square miles, bordered by Federal Way and unincorporated King County on the north, Edgewood on the east and southeast, Fife on the southwest, and unincorporated Pierce County on the west. A shared ZIP code, 98354, does not put every empty house in the same auditor’s office.',
    ],
    sections: [
      {
        heading: 'What still has to be done while the house is empty',
        paragraphs: [
          'An empty house keeps costing money until the deed transfers. Insurance carriers ask questions once nobody lives there. Yards draw notices. Pipes and tarps fail in Western Washington rain. You do not have to solve all of that before an offer. You do have to keep meeting any duty you still have until closing. Ask your insurer what the policy requires. KindKey will not interpret the policy or promise that coverage continues.',
          'Do not assume Auburn’s vacant-property rule applies in Milton. Auburn City Code 15.20.100 is an Auburn ordinance, including a registration requirement for property vacant more than 30 days, with exceptions the Auburn code spells out. A Milton notice, if you have one, will name the City of Milton or the county that wrote it. Read the header. City Hall is at 1000 Laurel Street if the letter is actually from Milton. KindKey does not answer the letter for you, and an offer does not close a code file the morning you call.',
        ],
      },
      {
        heading: 'Surprise Lake, Milton Way, and the King County streets',
        paragraphs: [
          'Surprise Lake is a 32-acre lake in the Puyallup River watershed inside Milton, which the city’s lake reporting describes with a maximum depth of about 40 feet. Houses around the lake, older houses along Milton Way, and houses on the northern streets near the county line are not one product. A small vacant house near the lake can be a different repair from a house that has sat empty since the owner moved toward Federal Way. KindKey prices the lot in front of us.',
          'Access is the practical step. A lockbox, a relative in Fife or Edgewood, or one short visit works. Utilities can stay off. Leave the furniture you do not want. Take personal papers before closing day, not during it. Tell us about sheds, cars, and anything the offer should include. East Pierce Fire & Rescue lists Milton among the communities it serves. Milton’s fire department joined East Pierce in 2013. That fact does not make a vacant house safe to ignore. If a neighbor reports a problem, the notice still comes to the owner of record.',
        ],
      },
      {
        heading: 'The county line decides the paperwork',
        paragraphs: [
          'A Pierce County parcel records with the Pierce County Auditor and is taxed by Pierce County. A King County parcel records with the King County Recorder and is taxed by King County. King County’s map of Milton shows the line inside the city, including the northern part, with I-5 along the west side of that King County portion. Using the wrong county spends the time a vacant-house sale was supposed to save. If you do not know, say so. KindKey will not treat a guess as a fact.',
          'The closing date is chosen with you. Owners who already live out of state often want a shorter window. Owners who still need to collect a few boxes can ask for longer. KindKey does not promise a fixed number of days. Cash means the purchase is not waiting on a buyer’s mortgage approval. It does not erase a mortgage payoff, a tax bill, or a lien. The settlement statement shows those figures. KindKey does not charge an agent commission or a separate assignment fee.',
        ],
      },
      {
        heading: 'When vacant also means inherited, listed, or in default',
        paragraphs: [
          'A vacant inherited house has two problems: the key, and the signature. You can request an offer while an attorney finishes authority. Do not accept and sign before that authority exists. The Milton probate guide covers Pierce County filings in Tacoma and King County filings in Seattle or Kent. Heirs do not have to fly home to host an open house. They do have to match the signer to the title file.',
          'A listing can fit a vacant house that is clean, safe, and easy to finance, if someone local can handle showings. Hire a licensed broker for that. KindKey will not run the listing. If a foreclosure notice is also in the mail, read the Milton foreclosure guide and talk with a Washington attorney about RCW 61.34 before you sign. KindKey does not interpret that statute. You can say no after you see the number. The cash-offer form is the place to start if you want KindKey to look.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell a vacant Milton house from another state?',
        answer:
          'Yes, if you have authority to sign. Access can be a lockbox or a relative. Call (206) 519-5463 or use the cash-offer form. KindKey buys the house and does not list it.',
      },
      {
        question: 'Do I have to clean the house out first?',
        answer:
          'No. Furniture you do not want can stay. Take personal papers and the items you want to keep before closing day.',
      },
      {
        question: 'Which county handles a vacant Milton house?',
        answer:
          'The parcel’s county. Milton is in both Pierce County and King County. The ZIP code does not decide it. Tell KindKey if you already know which side of the line the house is on.',
      },
      {
        question: 'Does Auburn’s vacant-house registration apply in Milton?',
        answer:
          'No. Auburn City Code 15.20.100 is an Auburn rule. A Milton letter will name the City of Milton or the county that sent it. Read the header, and do not skip a deadline because a buyer is looking.',
      },
    ],
    related: [
      {
        href: '/areas/milton',
        label: 'Sell a house in Milton',
        description: 'The Milton city page.',
      },
      {
        href: '/sell-vacant-house',
        label: 'Sell a vacant house',
        description: 'The service page for empty houses.',
      },
      {
        href: '/blog/selling-a-vacant-or-inherited-house',
        label: 'Vacant or inherited houses',
        description: 'The King and Pierce County overview.',
      },
      {
        href: '/blog/sell-my-house-fast-for-cash-milton',
        label: 'Sell fast for cash in Milton',
        description: 'How a direct sale works in a two-county city.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-milton',
        label: 'Inherited houses in Milton',
        description: 'When the vacant house is also an estate.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-milton-wa',
        label: 'Avoiding foreclosure in Milton',
        description: 'If a notice arrived while the house sat empty.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'No clean-out required before you ask.',
      },
    ],
    ctaTitle: 'Tell KindKey the Milton house is vacant',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You do not have to clean it out first. You can say no.',
  }),
  post('relocating-sell-house-fast-milton-wa', {
    breadcrumbName: 'Relocating from Milton',
    title: 'Relocating? How to Sell Your Milton House Fast',
    description:
      'How Milton homeowners sell during a move without waiting on showings. The house may be in Pierce County or King County. KindKey is a buyer.',
    h1: 'Relocating? How to Sell Your Milton House Fast',
    publishedAt: '2026-10-13',
    intro: [
      'To sell a Milton house during a move, you sell it directly to a buyer who can close without a retail mortgage, on a date you help choose, instead of listing it and flying back for showings. KindKey Home Buyers LLC does that as a principal buyer. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463 or use the cash-offer form. KindKey is not a real estate agent and does not list houses. KindKey does not promise a specific number of days.',
      'The move can be a job in Tacoma or Seattle, orders connected to Joint Base Lewis-McChord, or a parent who needs you closer. The house you are leaving is still a Milton house. Milton is in both Pierce County and King County. The county line runs through the city. A fast sale that starts with the wrong county loses the time the move was supposed to save.',
    ],
    sections: [
      {
        heading: 'What “fast” means when you are already packing',
        paragraphs: [
          'The practical version is a walkthrough, a written offer, and a closing date set with you and the closing agent. Owners who have already started work out of state often want a shorter window. Owners who still need a week to box a Surprise Lake house, or a house along Milton Way, can ask for longer. The offer is not an obligation. You can say no after you see it, and you can still talk with a licensed broker about listing. Do not sign two conflicting contracts.',
          'KindKey does not charge an agent commission or a separate assignment fee. Closing-cost responsibility is in the purchase agreement and can vary. A mortgage payoff, taxes, and liens reduce proceeds on either side of the county line. The settlement statement is the paper that shows the figure before you sign a deed. Cash means KindKey is not waiting on a buyer’s loan approval. It does not mean the moving truck is paid for, and it does not erase what you owe.',
        ],
      },
      {
        heading: 'Start with the county, then the calendar',
        paragraphs: [
          'Send the address, the condition, the date you need to be gone, and which county you believe the parcel is in. If you do not know the county, say so. King County’s map of Milton shows the line inside the corporate boundary, including the northern part of the city, with I-5 along the west side of that King County portion. Edgewood, next door, is Pierce County. Federal Way is King County. A Milton address can be either. The closing agent confirms the parcel before anyone treats a guess as a fact.',
          'A Pierce County deed records with the Pierce County Auditor. A King County deed records with the King County Recorder. Property taxes follow the same split. City Hall, at 1000 Laurel Street, can answer city questions. It does not record the deed, and it does not set your closing date. Utilities that are still on do not have to stay on through a long listing. Tell us the date they will be shut off. An empty house after you leave is a different problem, covered in the Milton vacant-house guide, including insurance questions that belong with your insurer.',
        ],
      },
      {
        heading: 'The house can stay lived-in until you go',
        paragraphs: [
          'You do not have to paint, replace the carpet, or haul every stick of furniture to a dump before KindKey will look. Take what you are moving. Leave what you are not. Personal papers should go with you, not into a box in the garage you might forget. If a tenant is still there, do not treat this article as the one to follow. Occupied rentals have Washington rules under chapter 59.18 RCW, and the Milton rental guide explains why a cash sale is not a reason to serve a homemade move-out notice.',
          'Milton houses are often small and older. A hill of boxes in the living room does not stop a walkthrough. Photos from your phone are enough to start if you are already on the road. If a relative in Fife or Edgewood has a key, say so. KindKey’s office is in downtown Auburn, not at Milton City Hall, so the trip is local. KindKey may repair, hold, rent, or resell after closing. You are selling the house, not hiring a local agent who advertises speed.',
        ],
      },
      {
        heading: 'Deadlines that should not be ignored because of the move',
        paragraphs: [
          'A relocation can land on top of a foreclosure notice, a probate, or a code letter. Those are different problems from a start date at a new job. A foreclosure notice is a legal problem first. Read the Milton foreclosure guide, and talk with a Washington attorney about RCW 61.34 before you sign. KindKey does not interpret that statute and cannot order a trustee to wait because your moving truck is booked.',
          'An inherited house you are leaving behind has the same county question twice: where the decedent lived, and where the parcel sits. The Milton probate guide walks through the clerk in Tacoma and the clerk in Seattle or Kent. Ask for the offer when you are ready. Accept it only if the signer and the county are clear. A listing remains an option if the house is updated and someone local can host showings while you are gone. Hire a broker for that path. KindKey will not run it, and KindKey will not tell you it is a mistake.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I start a sale in Milton if I am about to move?',
        answer:
          'Use the cash-offer form or call (206) 519-5463. Include the address, the date you need to leave, and the county if you know it. You can decline the offer.',
      },
      {
        question: 'Will KindKey promise to close before my start date?',
        answer:
          'No. The closing date is chosen with you and the closing agent. KindKey does not promise a fixed number of days. Tell us the date that matters so the offer can be planned around it, not assumed.',
      },
      {
        question: 'Do I have to empty the house before the walkthrough?',
        answer:
          'No. Lived-in houses and half-packed houses are fine. Take personal papers with you. Leave what you do not want to move.',
      },
      {
        question: 'Is every Milton house in Pierce County?',
        answer:
          'No. Milton is in both Pierce County and King County. The parcel controls the deed and the taxes. Edgewood is Pierce County. Federal Way is King County. Do not guess from the ZIP code.',
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
        href: '/blog/sell-my-house-fast-for-cash-milton',
        label: 'Sell fast for cash in Milton',
        description: 'The longer guide to a direct Milton sale.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-milton',
        label: 'Inherited houses in Milton',
        description: 'If the move is also an estate.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-milton-wa',
        label: 'Avoiding foreclosure in Milton',
        description: 'If a notice is running while you pack.',
      },
      {
        href: '/blog/selling-a-vacant-house-milton-wa',
        label: 'Selling a vacant house in Milton',
        description: 'Once you have already left the keys behind.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'The form, including while you are out of town.',
      },
    ],
    ctaTitle: 'Start a Milton offer around your move date',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. Tell KindKey when you need to be gone. You can say no.',
  }),

  post('sell-fire-damaged-house-auburn-wa', {
    breadcrumbName: 'Fire damage in Auburn',
    title: 'How to Sell a Fire-Damaged House in Auburn, WA',
    description:
      'How to sell a fire-damaged Auburn house as-is. Valley Regional Fire Authority covers the city. KindKey is a local principal buyer, not an agent.',
    h1: 'How to Sell a Fire-Damaged House in Auburn, WA',
    publishedAt: '2026-10-13',
    intro: [
      'You sell a fire-damaged house in Auburn by pricing it in its current condition and transferring it through a closing agent, without rebuilding the kitchen, the roof, or the smoke-stained rooms first. KindKey Home Buyers LLC buys that house as a principal. The office is at 640 1st St SW, Auburn, WA 98001, in the same city. Call (206) 519-5463 or use the cash-offer form. KindKey is not a real estate agent, a fire investigator, or an insurance adjuster. This article does not tell you how to handle a claim.',
      'Auburn sits mostly in King County, with a southern portion in Pierce County. The mailing city being Auburn is enough to start. It is not enough to pick the auditor. Algona and Pacific are neighboring cities, not Auburn neighborhoods, even though the same fire authority answers calls there. Lea Hill, Lakeland Hills, the valley floor, and West Valley are different houses. The offer follows the one that burned.',
    ],
    sections: [
      {
        heading: 'Who responds, and who does not rebuild it for you',
        paragraphs: [
          'Valley Regional Fire Authority serves the cities of Algona, Auburn, and Pacific. The authority was established on January 1, 2007. Its published station list includes Station 31 at 1101 D Street NE and Station 35 at 2905 C Street SW, both in Auburn. A kitchen fire, a garage fire, an attic fire, or a house that is mostly smoke can all start with that response. The fire marshal’s office does inspections and investigations under the fire code. KindKey does not replace that office, and KindKey does not decide whether the structure is safe to enter.',
          'If you wanted to rebuild instead of sell, building permits are a City of Auburn matter. The permit center’s published line is (253) 931-3090, option 2, or permitcenter@auburnwa.gov. Auburn City Code adopts the International Fire Code with local amendments, and it says a reference to the fire department includes Valley Regional Fire Authority. Those permits are for an owner who is repairing. They are not a prerequisite for asking KindKey to look. If the house is not safe to walk through, say so. Photos and an exterior look can start the conversation. Do not enter a structure that is not safe just to satisfy a buyer.',
        ],
      },
      {
        heading: 'The claim and the house are separate',
        paragraphs: [
          'You are selling the real estate as it sits, not a restored house and not your insurance claim, unless a lawyer tells you a document does that. Keep those ideas separate. Talk with your insurer before you assign proceeds or sign claim paperwork you do not understand. Talk with a Washington attorney if a contractor or another buyer asks you to sign that paperwork. KindKey will not tell you whether to accept a claim payment.',
          'Western Washington rain makes tarps fail. Auburn City Code 15.20.100, the vacant-property rule, says tarps are not allowed as a way to secure or screen a damaged roof, door, window, or wall, except as a temporary measure before a permanent repair. That ordinance also says property vacant more than 30 days must be registered, with exceptions for a current rental business license under chapter 5.22 ACC and for a house the owner inhabits part-time. If the fire left the house empty, read that section and the city’s code compliance page. KindKey does not file the registration. The general fire-damage guide for King and Pierce County covers the same separation of claim and sale across both counties. The Auburn fire page on this site is the local service page.',
        ],
      },
      {
        heading: 'Hill houses, valley houses, and the county line',
        paragraphs: [
          'A newer house on Lea Hill or Lakeland Hills can look ordinary from the street and still hold smoke in the attic and the crawlspace. An older house downtown, near the Green River valley, or in West Valley can show the damage from the sidewalk. KindKey is based downtown, so a walkthrough in Auburn does not depend on a drive from another county. Describe what you know. The price reflects the repair, the lot, and the location. It will not match a retail price for a finished house, because that house does not exist yet.',
          'Most Auburn deeds record in King County. A southern parcel can record in Pierce County. The closing agent orders the correct title. Fire does not change that. Algona and Pacific have their own city halls even when Valley Regional Fire Authority answered the call. If the address is actually in one of those cities, say so. Unincorporated land outside Auburn is not this page. KindKey may repair, hold, or resell after closing. You are not charged an agent commission or a separate assignment fee for the purchase. Closing costs are whatever the purchase agreement states. Liens and the mortgage payoff come out of the price and show on the settlement statement.',
        ],
      },
      {
        heading: 'When a code letter or a loan notice arrives after the fire',
        paragraphs: [
          'A fire often produces a city letter: an unsafe structure, an open building, or a nuisance condition under Auburn’s code. That letter is a code case. The Auburn code-violations guide and the general code-violations page explain a sale with the notice still open. The city controls its file until the city closes it. KindKey will not attend a hearing for you or promise the fine disappears at signing. Amounts that must be paid can reduce proceeds the same way a payoff can.',
          'A fire plus a missed mortgage payment, or a fire in a probate house, needs an attorney before you sign. Washington’s distressed-property rules under RCW 61.34 may matter when money pressure is part of the sale. KindKey does not interpret the statute. You can still ask for an offer while you get that advice. A listing remains possible if you would rather market the damage and negotiate repairs with retail buyers. Hire a broker. Expect disclosures and a longer calendar. Many owners choose the direct sale because they cannot fund the rebuild or they are already living somewhere else. You can say no after you see the number.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell an Auburn house before the insurance claim is paid?',
        answer:
          'Yes. You can request a cash offer while a claim is open. KindKey will not tell you how to handle the claim. Ask your insurer and, if needed, an attorney. Call (206) 519-5463 or use the cash-offer form.',
      },
      {
        question: 'Do I have to rebuild before KindKey will make an offer?',
        answer:
          'No. KindKey buys fire-damaged and smoke-damaged Auburn houses as they sit. You do not need a permit, a drywall bid, or a final inspection first.',
      },
      {
        question: 'Which fire department covers Auburn?',
        answer:
          'Valley Regional Fire Authority serves Auburn, and also Algona and Pacific. It was established on January 1, 2007. KindKey is not the fire department and does not investigate the fire.',
      },
      {
        question: 'What if the house is unsafe to enter?',
        answer:
          'Say so. Photos and an exterior look can start the conversation. Do not walk a structure that is not safe. The offer can still be discussed from what is known.',
      },
    ],
    related: [
      {
        href: '/areas/auburn/sell-fire-damaged-house',
        label: 'Auburn fire-damaged houses',
        description: 'The Auburn service page for fire damage.',
      },
      {
        href: '/sell-fire-damaged-house',
        label: 'Sell a fire-damaged house',
        description: 'The main service page for both counties.',
      },
      {
        href: '/blog/sell-fire-damaged-house-king-pierce-county',
        label: 'Fire damage in King or Pierce County',
        description: 'The general guide. Auburn can be either county.',
      },
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'Unsafe-structure letters often follow a fire.',
      },
      {
        href: '/blog/how-to-sell-my-house-fast-for-cash-auburn',
        label: 'Sell fast for cash in Auburn',
        description: 'The direct-sale steps in KindKey’s home city.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-auburn',
        label: 'Inherited houses in Auburn',
        description: 'When the fire was in a parent’s house.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-auburn-wa',
        label: 'Avoiding foreclosure in Auburn',
        description: 'If the loan is behind after the fire.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'No repair bid required.',
      },
    ],
    ctaTitle: 'Ask for an Auburn offer on the damaged house',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. You can keep talking with your insurer. You can say no.',
  }),
  post('sell-house-with-code-violations-auburn-wa', {
    breadcrumbName: 'Code violations in Auburn',
    title: 'Selling a House with Code Violations in Auburn, WA',
    description:
      'How Auburn owners sell a house with an open code case without finishing the city’s list first. KindKey is a principal buyer, not code enforcement.',
    h1: 'Selling a House with Code Violations in Auburn, WA',
    publishedAt: '2026-10-13',
    intro: [
      'You sell a house with code violations in Auburn by pricing it as it sits and closing through a title company, without finishing the city’s repair list first. KindKey Home Buyers LLC does that as a principal buyer. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463 or use the cash-offer form. KindKey is not code enforcement, a permit expediter, or a real estate agent. This article is not legal advice.',
      'A notice about tall grass, junk, an inoperable vehicle, an unpermitted room, or an unsafe structure does not have to be cured before you ask for an offer. The agency that wrote the letter still controls the case. If the notice has a hearing, a fine, or an order to vacate, talk with a Washington attorney before you rely on a sale to solve it. KindKey will not appear at the hearing for you.',
    ],
    sections: [
      {
        heading: 'Read the header before you assume it is Auburn',
        paragraphs: [
          'City of Auburn Code Compliance is a division of Community Development. The city’s code compliance page says it enforces ordinances on public nuisances, including junked vehicles on private property, tall grass and weeds, and junk, and that it checks permits for construction, land clearing, grading, signs, and zoning. The published report line is (253) 931-3090, option 5, or codeenforcement@auburnwa.gov. The city’s neighborhood page also points people to the customer service center at 1 E Main Street, second floor. Parking and animal issues are directed to the Auburn Police non-emergency line at (253) 288-2121. KindKey is none of those offices.',
          'Auburn City Code Title 8 is the health and safety title the city cites for public-nuisance conditions such as excessive vegetation, garbage, litter, inoperable vehicles, and junk. A letter under that title is not a King County letter and not a Pierce County letter. The city’s own FAQ tells people to contact King County code enforcement or Pierce County code enforcement for unincorporated property. Algona and Pacific are separate cities. If the header does not say Auburn, do not treat this page as if it did. Inside the Auburn city limits, the city code can apply even when the parcel is one of the southern lots that record in Pierce County. The deed and the taxes follow the county. The notice follows the letterhead.',
        ],
      },
      {
        heading: 'Vacant houses and unpermitted work',
        paragraphs: [
          'Auburn takes vacant property seriously enough to put it in the city code. ACC 15.20.100 says vacant properties must be registered when they remain vacant for more than 30 days. Failure to register is a violation under chapter 1.25 ACC. The section does not apply to property with a current rental business license under chapter 5.22 ACC, or to a house the owner inhabits part-time. The same section requires the property to be kept free of code violations, secured, with doors and windows in place, and it says tarps are not a lasting way to cover a damaged roof, door, window, or wall. It also calls for water service to be disconnected, vegetation to be maintained, a visible contact notice, and registration with the Auburn police trespass program. The city clerk’s office has the official code. KindKey does not submit the form.',
          'Unpermitted additions and garage conversions show up on Lea Hill, on Lakeland Hills, in the valley, and in West Valley. A retail buyer’s lender may not close while that work is open. You do not need a contractor bid or a final inspection before KindKey will look. Photos of the posting and of the condition are enough to start. If the structure is not safe to enter, say so. An exterior look can begin the conversation. KindKey may repair, hold, or resell after closing. You are selling the house, not hiring someone to fight the case.',
        ],
      },
      {
        heading: 'Fines, liens, and a fire or foreclosure beside the letter',
        paragraphs: [
          'An open case does not, by itself, stop a deed. It also does not close because you requested an offer. Until recording, deadlines on the notice are still yours. Do not skip a hearing because a buyer is looking. Some cities record liens for unpaid fines or for the cost of abating a property. KindKey does not promise that every Auburn fine disappears when you sign. Amounts that must be paid can reduce proceeds the same way a mortgage payoff can. The settlement statement, prepared by the closing agent, is where you see them. KindKey does not negotiate the citation. KindKey does not charge an agent commission or a separate assignment fee.',
          'A fire often produces the code letter. The Auburn fire guide and the general King and Pierce County fire guide cover that overlap, including the insurance claim, which stays with your insurer. If the code case is also sitting next to a foreclosure notice or an estate, talk with a Washington attorney before you sign a purchase agreement. Washington has distressed-property rules under RCW 61.34. KindKey does not interpret that statute and will not tell you it does not apply because the immediate problem is a city letter. The Auburn foreclosure guide and the Auburn probate guide are the local pages for those other clocks.',
        ],
      },
      {
        heading: 'Curing the notice, listing, or selling as-is',
        paragraphs: [
          'Curing a small yard notice can be the right choice if you want to keep the house and the work is actually small. It is a poor fit when the letter requires a new roof, removal of an unpermitted unit, or a clean-out you cannot staff, and you already live somewhere else. A listing still means showings, disclosures, and buyers who may ask for repairs before they close. Hire a licensed broker if you want that path. KindKey will not run the listing.',
          'A direct sale is a walkthrough, a written offer, and a closing date you help choose. The offer reflects the remaining work, so it can be less than a retail price for a violation-free house. Compare the number with the calendar and the repair budget you actually have. You can say no after you see it. The general code-violations page describes the same purchase across King and Pierce County. Auburn is simply the city where the buyer’s office already is. Call (206) 519-5463 or use the cash-offer form and attach what the letter says.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I sell an Auburn house before the code case is closed?',
        answer:
          'Yes. KindKey buys Auburn houses with open violations and does not require you to finish the city’s list first. The city still controls its case until it says otherwise. Call (206) 519-5463 or use the cash-offer form.',
      },
      {
        question: 'Does KindKey speak to Auburn code enforcement for me?',
        answer:
          'No. KindKey is the buyer. Code compliance can be reached at (253) 931-3090, option 5. Bring the notice to your conversation with KindKey, and take legal questions to a Washington attorney.',
      },
      {
        question: 'My Auburn house is in Pierce County. Whose code applies?',
        answer:
          'If the house is inside Auburn city limits, read the letterhead. City of Auburn notices are city cases even when the deed records in Pierce County. Unincorporated land is a county case. The closing agent confirms the parcel.',
      },
      {
        question: 'Does a vacant Auburn house have to be registered?',
        answer:
          'ACC 15.20.100 says property vacant more than 30 days must be registered, with exceptions for a current rental business license and for part-time owner occupancy. Read the code and the city’s form. KindKey does not file it, and a sale does not erase a fine already assessed.',
      },
    ],
    related: [
      {
        href: '/sell-house-with-code-violations',
        label: 'Sell a house with code violations',
        description: 'The general page for King and Pierce County.',
      },
      {
        href: '/areas/auburn',
        label: 'Sell a house in Auburn',
        description: 'KindKey’s home city.',
      },
      {
        href: '/blog/sell-fire-damaged-house-king-pierce-county',
        label: 'Fire damage in King or Pierce County',
        description: 'Fires often leave an open code case behind.',
      },
      {
        href: '/blog/how-to-sell-my-house-fast-for-cash-auburn',
        label: 'Sell fast for cash in Auburn',
        description: 'The direct-sale steps when a notice is open.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-auburn',
        label: 'Inherited houses in Auburn',
        description: 'Estates often inherit the code letter too.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-auburn-wa',
        label: 'Avoiding foreclosure in Auburn',
        description: 'When a trustee’s notice sits next to the city letter.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'No repair bid required.',
      },
    ],
    ctaTitle: 'Ask for an Auburn offer while the notice is open',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. Share what the City of Auburn letter says. You can say no.',
  }),
  post('selling-a-house-during-divorce-auburn-wa', {
    breadcrumbName: 'Divorce sales in Auburn',
    title: 'Selling a House During Divorce in Auburn, WA',
    description:
      'How Auburn spouses sell a house during a divorce once an attorney confirms who can sign. The parcel may be in King or Pierce County.',
    h1: 'Selling a House During Divorce in Auburn, WA',
    publishedAt: '2026-10-13',
    intro: [
      'Selling a house during a divorce in Auburn starts with who is allowed to sign the deed. KindKey Home Buyers LLC can buy the house as a principal once that question is answered. The office is at 640 1st St SW, Auburn, WA 98001. Call (206) 519-5463 or use the cash-offer form. KindKey is not a divorce attorney, a mediator, or a real estate agent. This article is not legal advice.',
      'Auburn is mostly in King County, with a southern portion in Pierce County. A Lea Hill house, a Lakeland Hills house, a valley house near the Green River, and a West Valley house can share an Auburn mailing address and still be different title files. The divorce case follows the petitioner’s residence. The deed follows the parcel. Your attorney and the closing agent sort that. KindKey will not.',
    ],
    sections: [
      {
        heading: 'Which courthouse, and which recording office',
        paragraphs: [
          'RCW 26.09.010 says a dissolution, a legal separation, or a declaration about the validity of a marriage may be filed in the superior court of the county where the petitioner resides. If you live in the King County part of Auburn, that points to King County. King County filings are handled by the Superior Court Clerk at the King County Courthouse, 516 Third Avenue, Room E-609, Seattle, and at the Maleng Regional Justice Center, 401 Fourth Avenue North, Room 2C, Kent. Ask the clerk or your attorney which office and which case-assignment area apply. KindKey will not file the petition or pick the courthouse.',
          'If you live on a southern Auburn parcel that is actually in Pierce County, Pierce County can be the residence county. Those filings go to the Clerk of the Superior Court, 930 Tacoma Ave S, Room 110, Tacoma, WA 98402, phone (253) 798-7455. The other spouse may already be in Kent, Federal Way, Milton, or Edgewood. If that person is the petitioner and lives in a different county, the case may be filed there. The house does not move with them. A King County Auburn deed records with the King County Recorder. A Pierce County Auburn deed records with the Pierce County Auditor. Algona and Pacific are separate cities. Do not assume a house just outside the Auburn line is this file.',
        ],
      },
      {
        heading: 'Both spouses, the decree, and the family home',
        paragraphs: [
          'RCW 26.16.030 says neither spouse shall sell, convey, or encumber community real property unless the other spouse joins in the deed or other instrument, and both acknowledge it. One signature, a text message, or an agreement in a kitchen on Lea Hill is not that joinder. Title will ask for the missing signature or for a court order. KindKey cannot waive it because you want the sale to move.',
          'RCW 26.16.050 is the different path: one spouse may deed a community interest directly to the other, and the grantor signs without the grantee joining. That transfer is between the two of you. It is not a sale to KindKey. A decree under RCW 26.09.080 can award the house. The statute tells the court to divide property and liabilities in a way that is just and equitable, considering the community property, the separate property, the length of the marriage, and each spouse’s economic circumstances, including whether the family home should go for a time to the parent the children live with most of the time. KindKey will not predict that division or tell you what “equitable” means in your case.',
        ],
      },
      {
        heading: 'Orders you have to read before you sign',
        paragraphs: [
          'RCW 26.09.060 allows temporary orders while the case is open, including orders about property. Read every order before you sign a purchase agreement. If an order restrains a sale, a cash offer does not lift it. Do not deed the Auburn house to a relative, or into one name, to keep it out of the case. KindKey will not participate in a transfer meant to hide the house from the other spouse or from the court.',
          'The house is often the largest asset, whether it is a larger place on Lakeland Hills or a smaller house in the valley. You do not have to repair it, empty it, or stage it before you ask for a number. You do have to know whether you may accept the number. Request the offer while your attorney works. Accept it only when your attorney says the signer is clear. If one spouse has already moved and the other is still in the house, do not force a move-out so the house looks vacant. Occupancy belongs with your lawyers and with any order already entered.',
        ],
      },
      {
        heading: 'A purchase is not a side in the divorce',
        paragraphs: [
          'KindKey buys as a principal and does not charge an agent commission or a separate assignment fee. The closing agent prepares a settlement statement before closing. A mortgage, a tax bill in the parcel’s county, or a City of Auburn notice can reduce what is left. KindKey does not divide the proceeds. The decree, an agreement your lawyers approve, or the closing instructions do that. Cash means the purchase is not waiting on a buyer’s mortgage approval. It does not mean the divorce is over.',
          'A listing can fit a house that is in good condition if both of you can cooperate on showings. Hire a licensed broker. KindKey will not run the listing. If the loan is behind, read the Auburn foreclosure guide and talk with a Washington attorney about RCW 61.34 before you sign. KindKey does not interpret that statute. If a death in the family is part of the same mess, the Auburn probate guide is the signature question to solve first. The Edgewood divorce guide is the neighboring Pierce County version of this problem, for spouses who have a house on that side of the line instead. You can say no after you see the offer.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can we sell the Auburn house before the divorce is final?',
        answer:
          'Sometimes, if both spouses can sign or a court order allows it. KindKey does not decide that. Ask your attorney, then call (206) 519-5463 or use the cash-offer form if a sale is allowed. You can decline.',
      },
      {
        question: 'Where is an Auburn divorce filed?',
        answer:
          'In the superior court of the county where the petitioner resides, under RCW 26.09.010. That is often King County, at the clerk’s offices in Seattle or Kent. A spouse who lives on a Pierce County Auburn parcel may be in Pierce County. Ask a lawyer. KindKey will not choose the court.',
      },
      {
        question: 'Does one name on the deed mean only one signature?',
        answer:
          'Not by itself. RCW 26.16.030 requires both spouses to join in a deed of community real property unless another statute or a court order applies. Your attorney and the title company make that call.',
      },
      {
        question: 'Will KindKey talk to my spouse or my lawyer as my representative?',
        answer:
          'No. KindKey is the buyer. Your lawyers handle the divorce. Call (206) 519-5463 when you want a written number to review with them.',
      },
    ],
    related: [
      {
        href: '/areas/auburn',
        label: 'Sell a house in Auburn',
        description: 'The Auburn city page.',
      },
      {
        href: '/blog/how-to-sell-my-house-fast-for-cash-auburn',
        label: 'Sell fast for cash in Auburn',
        description: 'How a direct Auburn sale works once you can sign.',
      },
      {
        href: '/blog/selling-an-inherited-or-probate-house-auburn',
        label: 'Inherited houses in Auburn',
        description: 'When a death and a divorce are in the same file.',
      },
      {
        href: '/blog/avoiding-foreclosure-in-auburn-wa',
        label: 'Avoiding foreclosure in Auburn',
        description: 'If the loan is behind while the case is open.',
      },
      {
        href: '/blog/selling-a-house-during-divorce-edgewood-wa',
        label: 'Divorce sales in Edgewood',
        description: 'The Pierce County version, one city south.',
      },
      {
        href: '/cash-offer',
        label: 'Request a cash offer',
        description: 'The form. Asking does not obligate you to sell.',
      },
    ],
    ctaTitle: 'Ask for an Auburn number once you know who can sign',
    ctaSubtitle:
      'Call (206) 519-5463 or use the cash-offer form. Your attorney confirms authority. You can say no.',
  }),
];

export function getBlogPost(slug: string) {
  return blogPosts.find((entry) => entry.slug === slug);
}
