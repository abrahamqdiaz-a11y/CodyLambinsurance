// ─────────────────────────────────────────────────────────────────────────────
// INSIGHTS BLOG POSTS
//
// HOW TO ADD A NEW POST
// ─────────────────────
// 1. Add a new object to the POSTS array below (newest post first).
// 2. Give it a unique `slug` — this becomes the URL: /insights/your-slug
// 3. Provide a `thumbnail` image path (place the image in /public/blog/).
//    If you don't have an image yet, use "" and no thumbnail will render.
// 4. Write the full post body in `content` as an HTML string.
//    Use standard tags: <p>, <h2>, <h3>, <ul>, <ol>, <li>, <strong>, <em>, <a>.
//
// EXAMPLE ENTRY:
// {
//   slug: "understanding-flood-insurance",
//   title: "Understanding Flood Insurance in Sarasota",
//   date: "2026-06-01",
//   excerpt: "Florida homeowners are often surprised to learn that standard home insurance doesn't cover floods. Here's what you need to know.",
//   thumbnail: "/blog/flood-insurance.jpg",
//   content: `
//     <p>Standard homeowners policies exclude flood damage...</p>
//     <h2>Why Separate Coverage Matters</h2>
//     <p>The National Flood Insurance Program (NFIP)...</p>
//   `,
// },
// ─────────────────────────────────────────────────────────────────────────────

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;        // ISO format: "YYYY-MM-DD"
  excerpt: string;     // 1–2 sentence summary shown on listing page
  thumbnail: string;   // Path relative to /public, e.g. "/blog/image.jpg"
  content: string;     // Full post body as an HTML string
  // Optional extended fields
  metaDescription?: string;
  metaTitle?: string;
  author?: string;
  authorTitle?: string;
  reviewedBy?: string;
  lastUpdated?: string;
  faqItems?: FaqItem[];
};

export const POSTS: Post[] = [
  // ← Add new posts here. Newest first.
  {
    slug: "florida-roof-age-non-renewal",
    title: "Got a Roof Non-Renewal in Florida? You May Not Need a New Roof",
    metaTitle: "Florida Roof Non-Renewal & the 15-Year Rule | Sarasota",
    date: "2026-07-28",
    lastUpdated: "2026-07-28",
    excerpt: "A Florida roof non-renewal notice does not always mean you have to replace the roof. Here is the 15-year rule, your inspection right, and what to do first.",
    metaDescription: "A Florida roof non-renewal notice does not always mean you have to replace the roof. Here is the 15-year rule, your inspection right, and what to do first.",
    thumbnail: "/roof. letter.png",
    author: "Cody Lamb",
    authorTitle: "Licensed Insurance Agent, FL License #G034846",
    reviewedBy: "Cody Lamb, Licensed Insurance Agent",
    faqItems: [
      {
        id: "can-insurer-drop-roof-age",
        question: "Can my insurer really drop me just because my roof is old?",
        answer: "For a roof 15 years or older, an insurer can require proof of condition as a renewal condition, but it must first allow you to get an authorized inspection, and it cannot non-renew based on roof age alone if that inspection shows 5 or more years of remaining useful life. For a roof under 15 years, it cannot non-renew based on roof age alone at all.",
      },
      {
        id: "roof-age-calculation",
        question: "How is my roof's age calculated?",
        answer: "From the last date the entire roof surface, 100 percent of it, was built or replaced under the building code in effect then. A full re-roof resets that clock, even on an old house.",
      },
      {
        id: "who-can-inspect",
        question: "Who can perform the roof inspection?",
        answer: "An authorized inspector, which as of the 2024 change includes licensed roofing contractors along with licensed home inspectors, engineers, and architects. Make sure the report addresses remaining useful life specifically, because that is the finding the statute hangs on.",
      },
      {
        id: "condo-rental-coverage",
        question: "Does this roof age protection cover my condo or my rental property?",
        answer: "Not in the same way. The standard homeowners statute applies to homeowners policies. A 2026 effort to extend it to condo and landlord policies did not pass. If you own one of those, talk with your agent about what your specific policy form provides.",
      },
      {
        id: "four-point-vs-wind-mitigation",
        question: "What is the difference between a 4-point and a wind mitigation inspection?",
        answer: "A 4-point looks at roof, electrical, plumbing, and HVAC and is a carrier underwriting requirement that decides whether you can be covered at all. A wind mitigation inspection documents wind-resistant features that trigger mandatory discounts on the windstorm portion of your premium under Florida law. They serve different purposes and are often worth getting at the same time if you are already scheduling roof access.",
      },
    ],
    content: `
      <p>The letter shows up, and it ruins the week. Your insurer says it will not renew your homeowners policy because of the age of your roof. The number that follows in your head is usually somewhere north of twenty thousand dollars, and if you are like most people I talk to in Sarasota, your next call is to a roofer.</p>

      <p>Hold on before you make that call. In a lot of these cases, Florida law gives you a way to keep your coverage without replacing anything. Most homeowners never find out about it, and they spend money they did not have to spend. I want you to know your options before you sign a roofing contract you may not need.</p>

      <p>Here is how the roof age rules actually work in Florida, in plain terms, with the law cited so you can check every word of it yourself.</p>

      <h2>The 15-Year Rule</h2>

      <p>Florida has a specific statute that governs this, section 627.7011 of the Florida Statutes. Two parts of it matter to you.</p>

      <p>First, an insurer cannot refuse to issue or renew a homeowners policy on a home with a roof that is less than 15 years old just because of the roof's age <sup><a href="https://www.flsenate.gov/Laws/Statutes/2025/627.7011" target="_blank" rel="noopener">[1]</a></sup>. If your roof is under 15 and you got a non-renewal that blames roof age alone, that notice is on shaky ground. Something else may be going on, and it is worth a hard look at the exact wording of the letter.</p>

      <p>Second, and this is the part that saves people real money: for a roof that is 15 years or older, the law requires your insurer to let you have the roof inspected by an authorized inspector, at your own expense, before it can make you replace the roof as a condition of coverage <sup><a href="https://www.flsenate.gov/Laws/Statutes/2025/627.7011" target="_blank" rel="noopener">[1]</a></sup>. If that inspection shows the roof has 5 years or more of useful life remaining, the insurer cannot refuse to renew you based on roof age alone <sup><a href="https://www.flsenate.gov/Laws/Statutes/2025/627.7011" target="_blank" rel="noopener">[1]</a></sup>.</p>

      <p>Read that again, because it is the whole game. A qualifying inspection can force the carrier to keep you. You are not at the mercy of a replace-it-or-lose-coverage ultimatum. You have a documented right to prove the roof is fine.</p>

      <p>I see this most with metal and tile roofs. A 20-year-old tile or standing seam metal roof can have decades of life left, but an underwriting system sees the age number and fires off a notice anyway. That homeowner does not need a new roof. They need an inspector to put the remaining useful life in writing.</p>

      <h2>How Your Roof's Age Is Actually Counted</h2>

      <p>People assume roof age runs from the day the house was built. Not always. Under the statute, a roof's age is calculated from the last date on which 100 percent of the roof's surface area was built or replaced in line with the building code in effect at that time <sup><a href="https://www.flsenate.gov/Laws/Statutes/2025/627.7011" target="_blank" rel="noopener">[2]</a></sup>.</p>

      <p>So if you replaced the entire roof surface eight years ago, your roof is eight years old for this purpose, not the age of the house. If you only did a partial replacement, that is a different conversation, because the rule points to the last time the full surface was done. Dig up your permit or your roofing invoice. The date on that paperwork may be worth thousands to you.</p>

      <h2>Who Counts as an Authorized Inspector</h2>

      <p>The inspection only helps you if the right kind of professional performs it. Florida expanded the list of who qualifies. As of a 2024 change to the law, licensed roofing contractors are authorized to perform these inspections, alongside the home inspectors, engineers, and architects who already qualified <sup>[3]</sup>.</p>

      <p>That expansion matters in practice because roofing contractors are often faster to schedule and already know exactly what an insurer wants to see documented. When you order the inspection, be clear about what you need: a report that speaks to remaining useful life, not just a general condition note. The remaining useful life finding is the specific thing the statute hangs on <sup><a href="https://www.flsenate.gov/Laws/Statutes/2025/627.7011" target="_blank" rel="noopener">[1]</a></sup>.</p>

      <h2>What the 2026 Legislature Did and Did Not Change</h2>

      <p>I want to be straight with you about the current state of the law, because there was a lot of noise about it this year.</p>

      <p>During the 2026 legislative session, lawmakers introduced bills that would have extended this roof age protection beyond standard homeowners policies to reach condominium association policies, landlord policies, and other residential forms, and would have set a separate standard for low-slope roofs <sup><a href="https://www.liveinsurancenews.com/florida-legal-roof-inspection/8574151/" target="_blank" rel="noopener nofollow">[4]</a></sup>. Those bills did not pass <sup><a href="https://www.liveinsurancenews.com/florida-legal-roof-inspection/8574151/" target="_blank" rel="noopener nofollow">[4]</a></sup>.</p>

      <p>What that means for you is simple. If you own a single-family home, the protection in section 627.7011 is in force right now and has been since the 2022 and 2023 reforms, unchanged <sup><a href="https://www.liveinsurancenews.com/florida-legal-roof-inspection/8574151/" target="_blank" rel="noopener nofollow">[4]</a></sup>. If you own a <a href="/condo-insurance-sarasota-fl">condo unit or rental property</a>, the standard homeowners statute does not reach your policy type the same way, and that gap the legislature tried to close is still open <sup><a href="https://www.liveinsurancenews.com/florida-legal-roof-inspection/8574151/" target="_blank" rel="noopener nofollow">[4]</a></sup>. If that is your situation, do not assume the 15-year rule covers you. Call me and we will look at what your specific policy form actually provides.</p>

      <h2>The Two Inspections People Confuse</h2>

      <p>There are two different roof-related inspections in the Florida market, and homeowners mix them up constantly. They do different jobs.</p>

      <p>The 4-point inspection looks at four systems: roof, electrical, plumbing, and HVAC. Carriers commonly require it on older homes, often around the 20-year mark, before they will write or renew a policy. This is underwriting practice rather than a statute, and the exact age threshold varies by carrier <sup><a href="https://www.livecovered.com/florida-homeowners-insurance-guide/" target="_blank" rel="noopener nofollow">[5]</a></sup>. Think of the 4-point as the gate. It tells the insurer whether it is willing to cover the home at all.</p>

      <p>The wind mitigation inspection is a different animal, and this one can put money back in your pocket. Florida law, section 627.0629, requires insurers to build discounts into their rates for homes with verified wind-resistant features, and those credits apply to the windstorm portion of your premium <sup><a href="https://www.flsenate.gov/Laws/Statutes/2025/627.0629" target="_blank" rel="noopener">[6]</a></sup>. The features that count include roof shape, roof deck attachment, roof-to-wall connections like clips and straps, a secondary water barrier, and opening protection <sup><a href="https://www.flsenate.gov/Laws/Statutes/2025/627.0629" target="_blank" rel="noopener">[6]</a></sup>.</p>

      <p>These are not favors the carrier does for you. When a licensed inspector documents qualifying features on the state's uniform mitigation form, the discount is required, not optional <sup><a href="https://www.flsenate.gov/Laws/Statutes/2025/627.0629" target="_blank" rel="noopener">[6]</a></sup><sup><a href="https://floir.gov/consumers/wind-mitigation-resources" target="_blank" rel="noopener">[7]</a></sup>. The report is generally good for five years <sup><a href="https://floir.gov/consumers/wind-mitigation-resources" target="_blank" rel="noopener">[7]</a></sup>. If you have a newer roof, impact windows, or hurricane shutters and you have never had a current wind mitigation inspection on file, there is a real chance you are paying more than the law requires you to. That is the first thing I check when a homeowner comes to me frustrated about their bill.</p>

      <p>Wind mitigation credits and your <a href="/insights/florida-hurricane-deductible">storm deductible structure</a> work together to shape your total out-of-pocket exposure after a named storm. Understanding both at the same time is worth the hour.</p>

      <h2>What to Do the Day the Notice Arrives</h2>

      <p>Here is the order of operations I walk clients through when a roof non-renewal lands.</p>

      <ol>
        <li><strong>Read the notice carefully and note the date.</strong> Non-renewal notices come with a response window, often several months before the policy actually ends. You have more time than the panic suggests, but not unlimited time. Mark the expiration date.</li>
        <li><strong>Find out your roof's true age.</strong> Pull the permit or invoice from the last full roof replacement. Remember the age is measured from the last time the entire surface was redone <sup><a href="https://www.flsenate.gov/Laws/Statutes/2025/627.7011" target="_blank" rel="noopener">[2]</a></sup>, not from when the house was built.</li>
        <li><strong>If the roof is under 15 years, question the notice.</strong> The law does not allow a non-renewal based on roof age alone for a roof that young <sup><a href="https://www.flsenate.gov/Laws/Statutes/2025/627.7011" target="_blank" rel="noopener">[1]</a></sup>. Send me the letter and let me look at the exact reason cited.</li>
        <li><strong>If the roof is 15 or older, order the inspection before you order a roofer.</strong> Get an authorized inspector to assess remaining useful life <sup><a href="https://www.flsenate.gov/Laws/Statutes/2025/627.7011" target="_blank" rel="noopener">[1]</a></sup><sup>[3]</sup>. If the report shows 5 or more years remaining, that document is your protection <sup><a href="https://www.flsenate.gov/Laws/Statutes/2025/627.7011" target="_blank" rel="noopener">[1]</a></sup>. A few hundred dollars for an inspection can save you a roof you did not need to replace.</li>
        <li><strong>Ask about wind mitigation at the same time.</strong> If you are already getting someone up on the roof, a wind mitigation inspection can document credits you may be owed <sup><a href="https://www.flsenate.gov/Laws/Statutes/2025/627.0629" target="_blank" rel="noopener">[6]</a></sup>. Two birds.</li>
        <li><strong>Call your agent early, not late.</strong> The worst version of this is the homeowner who does nothing until two weeks before the policy lapses. Options narrow fast at the end. Options are wide open at the beginning.</li>
      </ol>

      <h2>Where I Come In</h2>

      <p>I write <a href="/homeowners-insurance-sarasota-fl">homeowners policies</a> for people across Sarasota and Manatee County, from older properties in <a href="/insurance-bradenton-fl">Bradenton neighborhoods</a> where aging tile and shingle roofs are common, to newer builds in <a href="/insurance-north-port-fl">North Port communities</a> where the homes are younger but the carriers are still selective. Roof non-renewals are one of the most common reasons someone new calls me. A good chunk of the time, once we pull the paperwork and look at the actual roof age and condition, the problem is smaller than the letter made it feel.</p>

      <p>I am not going to tell you a roof never needs replacing. Sometimes the inspection comes back short and replacement really is the answer. But I am not going to let you spend twenty or thirty thousand dollars because an underwriting system flagged a date, when the law gives you a documented way to prove the roof has life left in it.</p>

      <p>If you have a non-renewal notice in hand, or you can see one coming because your roof is getting up there in years, <a href="/#contact">reach out through the site or give me a call</a>. Bring the notice and whatever roof paperwork you have. We will go through it together and figure out the cheapest honest path to keeping you covered.</p>

      <div style="margin-top:3rem;padding-top:1.5rem;border-top:1px solid #d1d5db;">
        <h2 style="font-size:1.125rem;margin-bottom:1rem;">References</h2>
        <ol style="font-size:0.875rem;color:#4b5563;line-height:1.75;padding-left:1.25rem;">
          <li>Fla. Stat. &sect;&nbsp;627.7011(3)(b)&ndash;(c) (2025). Homeowners' policies; offer of replacement cost coverage and law and ordinance coverage. The Florida Senate. <a href="https://www.flsenate.gov/Laws/Statutes/2025/627.7011" target="_blank" rel="noopener">flsenate.gov/Laws/Statutes/2025/627.7011</a></li>
          <li>Fla. Stat. &sect;&nbsp;627.7011(3)(d) (2025). Roof age calculation based on the last date 100 percent of the roof surface was built or replaced. The Florida Senate. <a href="https://www.flsenate.gov/Laws/Statutes/2025/627.7011" target="_blank" rel="noopener">flsenate.gov/Laws/Statutes/2025/627.7011</a></li>
          <li>Expansion of authorized inspectors to include licensed roofing contractors, effective July 2024 (House Bill 1611), amending the authorized inspector provisions applicable to Fla. Stat. &sect;&nbsp;627.7011. Confirm current inspector list against the statute before relying on it.</li>
          <li>2026 Florida legislative session, House Bill 815 and Senate Bill 808, proposing to extend roof age protection to condominium association, landlord, and other residential policies and to create a low-slope roof standard; the bills did not become law. <a href="https://www.liveinsurancenews.com/florida-legal-roof-inspection/8574151/" target="_blank" rel="noopener nofollow">Live Insurance News, reporting on the failed expansion, July 2026</a>.</li>
          <li>Four-point inspection requirements are carrier underwriting practice rather than statute; thresholds vary by insurer, commonly around 20 years of home age. See industry overview: <a href="https://www.livecovered.com/florida-homeowners-insurance-guide/" target="_blank" rel="noopener nofollow">Florida Homeowners Insurance Guide (2026)</a>.</li>
          <li>Fla. Stat. &sect;&nbsp;627.0629(1). Requirement that residential property insurance rate filings include actuarially reasonable discounts, credits, or rate differentials for verified windstorm mitigation features. The Florida Senate. <a href="https://www.flsenate.gov/Laws/Statutes/2025/627.0629" target="_blank" rel="noopener">flsenate.gov/Laws/Statutes/2025/627.0629</a></li>
          <li>Florida Office of Insurance Regulation, Wind Mitigation Resources, describing the uniform mitigation verification form (OIR-B1-1802) and the mitigation discount framework. <a href="https://floir.gov/consumers/wind-mitigation-resources" target="_blank" rel="noopener">floir.gov/consumers/wind-mitigation-resources</a></li>
        </ol>
      </div>

      <p style="font-size:0.8125rem;color:#6b7280;margin-top:1.5rem;padding-top:1.25rem;border-top:1px solid #e5e7eb;">This article is general educational information about Florida roof age and homeowners insurance rules as of July 2026. It is not legal advice, and your own policy language and the current statutes control. Laws and carrier requirements change. Verify current statutory language with the Florida Legislature and review your specific policy with a licensed agent before acting.</p>
    `,
  },
  {
    slug: "florida-hurricane-deductible",
    title: "How Florida Hurricane Deductibles Actually Work (And What Yours Probably Is)",
    metaTitle: "Florida Hurricane Deductibles Explained | Sarasota, FL",
    date: "2026-07-24",
    excerpt: "Most Florida homeowners policies include a separate hurricane deductible expressed as a percentage of your dwelling limit, not a flat dollar amount. Here is how the math works, when the deductible triggers, and the calendar year rule that protects you after multiple storms.",
    metaDescription: "Your hurricane deductible isn't the $1,000 on your policy. How the 2%, 5%, and 10% options work, what triggers them, and the once-a-year rule in Florida.",
    thumbnail: "",
    author: "Cody Lamb",
    authorTitle: "Licensed Insurance Agent, FL License #[INSERT]",
    content: `
      <p>Every hurricane season I have the same conversation with someone in Sarasota. A storm turns toward the Gulf, they pull out their policy for the first time in three years, and they call me to confirm their deductible is $1,000.</p>

      <p>It usually isn't. Not for wind damage from a named hurricane.</p>

      <p>Most Florida homeowners policies carry two separate deductibles. There is the all other perils deductible, which is the flat dollar amount people remember, and it applies to things like a kitchen fire or a burst supply line. Then there is the hurricane deductible, which is almost always written as a percentage of your dwelling limit and is a much larger number.<sup>[<a href="#ref-1">1</a>]</sup></p>

      <p>That gap is where people get hurt. Here is how it actually works, and what I want you to check on your own policy before the next storm forms.</p>

      <h2>Your hurricane deductible is a percentage, not a flat amount</h2>

      <p>Florida law requires insurers to offer hurricane deductible options of $500, 2 percent, 5 percent, or 10 percent of the dwelling or structure limits on the policy, with some exceptions based on how much your home is insured for.<sup>[<a href="#ref-2">2</a>]</sup></p>

      <p>The percentage applies to your <a href="/homeowners-insurance-sarasota-fl">Coverage A dwelling limit</a>. That is the amount it would cost to rebuild your home, not what you paid for it and not what Zillow says it is worth today.</p>

      <p>The math is simple once you see it:</p>

      <ul>
        <li>$400,000 dwelling limit with a 2 percent hurricane deductible: $8,000 out of pocket</li>
        <li>$400,000 dwelling limit with a 5 percent hurricane deductible: $20,000 out of pocket</li>
        <li>$600,000 dwelling limit with a 5 percent hurricane deductible: $30,000 out of pocket</li>
      </ul>

      <p>If your home is insured for $250,000 or more, your insurer is not required to offer you the $500 option at all. It only has to offer 2, 5, or 10 percent.<sup>[<a href="#ref-2">2</a>]</sup> So if you bought a home in <a href="/insurance-lakewood-ranch-fl">Lakewood Ranch</a> or <a href="/insurance-palmer-ranch-fl">Palmer Ranch</a> in the last few years, there is a good chance a percentage deductible was the only thing on the table.</p>

      <p>One detail worth knowing: even when your deductible is expressed as a percentage, Florida requires it to be shown on your policy as a dollar amount.<sup>[<a href="#ref-2">2</a>]</sup> Pull up your declarations page and look for it. It should be sitting right there in plain numbers.</p>

      <h2>What actually triggers the hurricane deductible</h2>

      <p>This is the part almost nobody knows, and it matters more than the percentage.</p>

      <p>The hurricane deductible does not apply just because it was windy. Florida defines a hurricane as a storm system declared to be a hurricane by the National Hurricane Center, and the deductible applies during a specific window:<sup>[<a href="#ref-1">1</a>]</sup></p>

      <ul>
        <li>It begins when a hurricane watch or warning is issued for any part of Florida, not just Sarasota County</li>
        <li>It ends 72 hours after the last hurricane watch or warning for any part of Florida is terminated<sup>[<a href="#ref-1">1</a>]</sup></li>
      </ul>

      <p>So a storm that makes landfall in the Panhandle can still open the hurricane deductible window for a home in <a href="/insurance-venice-fl">Venice</a>. And damage from a summer thunderstorm, a tropical storm that never reached hurricane strength, or a straight line wind event generally falls under your all other perils deductible instead.</p>

      <p>I have seen this go the other way too, where a hurricane deductible gets applied to a wind loss that happened outside that window. If that happens to you, say something. It is worth a conversation.</p>

      <p>One more thing: when the hurricane deductible applies, no other deductible under the policy can be applied on top of it.<sup>[<a href="#ref-1">1</a>]</sup> You are not paying both.</p>

      <h2>The once-a-year rule that protects you</h2>

      <p>Florida runs the hurricane deductible on a calendar year basis rather than per storm, which is a real protection in a bad season.<sup>[<a href="#ref-1">1</a>]</sup></p>

      <p>If you stay with the same insurer or an insurer in the same group, the deductible for a second hurricane in the same calendar year is the greater of the amount left over from your first hurricane deductible, or your all other perils deductible.<sup>[<a href="#ref-1">1</a>]</sup> Once the full hurricane deductible has been satisfied, later hurricane claims that year fall to the all other perils deductible.</p>

      <p>The state's own example makes it concrete. A home insured for $200,000 with a 2 percent hurricane deductible has a $4,000 hurricane deductible and a $1,000 all other perils deductible. The first hurricane causes $2,000 in damage, which is under the deductible, so it is paid out of pocket but credited against the $4,000. A second hurricane causes $5,000 in damage. The remaining $2,000 balance applies, the deductible is now fully met, and the insurer pays the $3,000 balance. Every hurricane claim after that in the same calendar year is subject only to the $1,000 all other perils deductible.</p>

      <p>Two things follow from this that I tell every client.</p>

      <p>File the claim even when the damage is below your deductible. You get no credit toward the calendar year deductible if there is no claim on record.<sup>[<a href="#ref-1">1</a>]</sup> That $3,000 of soffit and screen damage you decided to just eat could have counted toward the next storm. It is also common to find hidden damage once a contractor opens things up, and a claim already on file makes a supplemental claim much easier.</p>

      <p>Moving your policy mid-season resets the clock. If you move to an insurer outside your current insurer's group after a hurricane loss, the full hurricane deductible applies again to the next claim with no credit for what you already paid that year.<sup>[<a href="#ref-1">1</a>]</sup></p>

      <h2>Your hurricane deductible does not cover flood</h2>

      <p>This one costs people the most money in our area.</p>

      <p>Hurricane coverage under a homeowners policy is coverage for windstorm damage during a hurricane. It includes rain that gets inside after wind first creates an opening in the building. It does not include flooding.<sup>[<a href="#ref-1">1</a>]</sup></p>

      <p>Storm surge is flood. Rising water is flood. That is a separate policy, and after what we have seen come across the barrier islands and up through the low-lying parts of Sarasota and Manatee County, it is not a theoretical distinction. If you do not have a <a href="/flood-insurance-sarasota-fl">flood policy</a>, that is a separate conversation I would like to have with you before August.</p>

      <h2>Condo owners have a third exposure</h2>

      <p>If you own a condo on <a href="/insurance-siesta-key-fl">Siesta Key</a> or anywhere else in the county, you have your own HO-6 hurricane deductible on your interior improvements and personal property. You also have exposure to your association's master policy deductible.</p>

      <p>Master policies on larger buildings carry percentage hurricane deductibles too, and on a building insured in the tens of millions that deductible runs into the hundreds of thousands or higher. Associations commonly pass that cost to unit owners as a special assessment.</p>

      <p>Florida requires condo unit owner policies to include at least $2,000 in loss assessment coverage.<sup>[<a href="#ref-3">3</a>]</sup> After a serious storm, $2,000 is not close to enough. Assessments in the five figures per unit are not unusual. If you own a condo, look at your loss assessment limit specifically, not just your deductible.</p>

      <h2>Mitigation can lower your hurricane deductible</h2>

      <p>Florida law also says that when you have taken appropriate hurricane mitigation measures on your home, your insurer must give you the option of either an appropriate reduction in your hurricane deductible or a premium credit.<sup>[<a href="#ref-2">2</a>]</sup></p>

      <p>That is the part of your policy you have the most control over. Impact windows, a roof-to-wall connection upgrade, opening protection, and a current wind mitigation inspection all feed into this. If you have made improvements to your home and never sent me the documentation, that is real money sitting on the table.</p>

      <p>Roof age also factors into coverage continuity. If your carrier has questioned your roof's condition alongside any deductible or renewal discussion, our guide to <a href="/insights/florida-roof-age-non-renewal">Florida's roof age rules and the 15-year inspection right</a> explains what the law requires before a non-renewal can take effect.</p>

      <h2>What to do this week</h2>

      <p>Pull your declarations page and find four numbers:</p>

      <ol>
        <li>Your Coverage A dwelling limit</li>
        <li>Your hurricane deductible, shown as a dollar amount</li>
        <li>Your all other perils deductible</li>
        <li>Whether you have a separate flood policy at all</li>
      </ol>

      <p>Then ask yourself the honest question: if a named storm hit tomorrow, could you write a check for that hurricane deductible number?</p>

      <p>If the answer is no, we should talk. There are levers here. Mitigation credits, deductible structure, and making sure your dwelling limit is accurate rather than inflated all change that number.</p>

      <p>I am in Sarasota, I write policies for homeowners across Sarasota and Manatee County, and I would rather have this conversation in July than in September. Give me a call or <a href="/#contact">reach out through the site</a> and we will go through your declarations page together.</p>

      <h2>Frequently asked questions</h2>

      <h3>Does a tropical storm trigger my hurricane deductible?</h3>
      <p>Generally no. The deductible window is tied to a hurricane declared by the National Hurricane Center and to hurricane watches or warnings issued for Florida.<sup>[<a href="#ref-1">1</a>]</sup> A tropical storm that never reaches hurricane strength typically falls under your all other perils deductible.</p>

      <h3>A hurricane hit the Panhandle. Does my Sarasota policy's hurricane deductible apply?</h3>
      <p>It can. The window opens when a hurricane watch or warning is issued for any part of Florida, not only your county.<sup>[<a href="#ref-1">1</a>]</sup></p>

      <h3>Do I pay the hurricane deductible for every storm in a season?</h3>
      <p>No. It applies on an annual calendar year basis with the same insurer or insurer group. After it is satisfied, later hurricane claims that year are subject to the greater of the remaining balance or your all other perils deductible.<sup>[<a href="#ref-1">1</a>]</sup></p>

      <h3>Does my hurricane deductible apply to roof damage?</h3>
      <p>A separate roof deductible cannot be applied to a roof loss resulting from a hurricane.<sup>[<a href="#ref-1">1</a>]</sup> Your hurricane deductible is what applies.</p>

      <h3>Is my hurricane deductible amount fixed all year?</h3>
      <p>Not necessarily. If your policy has an inflation guard endorsement, your dwelling limit increases at intervals, and a percentage deductible increases along with it. Your insurer has to disclose on the declarations page when inflation guard may push the deductible higher than shown.<sup>[<a href="#ref-1">1</a>]</sup></p>

      <h2>References</h2>

      <ol>
        <li id="ref-1">Florida Department of Financial Services, Division of Consumer Services. <a href="https://www.myfloridacfo.com/division/consumers/consumerprotections/floridashurricanedeductible" target="_blank" rel="noopener">Florida's Hurricane Deductible</a>. myfloridacfo.com.</li>
        <li id="ref-2"><a href="https://www.flsenate.gov/laws/statutes/2024/627.701" target="_blank" rel="noopener">Florida Statutes § 627.701</a>, Liability of insureds; coinsurance; deductibles. The Florida Senate.</li>
        <li id="ref-3"><a href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&amp;URL=0700-0799/0718/Sections/0718.111.html" target="_blank" rel="noopener">Florida Statutes § 718.111</a>, condominium insurance requirements. The Florida Legislature.</li>
        <li id="ref-4"><a href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&amp;URL=0600-0699/0627/Sections/0627.4025.html" target="_blank" rel="noopener">Florida Statutes § 627.4025</a>, hurricane definition and deductible trigger window. The Florida Legislature.</li>
      </ol>

      <p><em>The hurricane definition and deductible trigger window referenced throughout are set in Florida Statutes § 627.4025. This article is general information about how Florida hurricane deductibles are structured under state law. Your own policy language controls. Review your declarations page and talk with your agent about your specific coverage.</em></p>
    `,
  },
  {
    slug: "paid-off-mortgage-homeowners-insurance-sarasota",
    title: "You Paid Off Your Mortgage — Should You Drop Your Homeowners Insurance?",
    date: "2026-07-08",
    excerpt: "Florida doesn't require homeowners insurance once your mortgage is paid off — but the risk doesn't disappear with the loan. A Sarasota-based look at the real numbers before you cancel.",
    metaDescription: "Florida doesn't require homeowners insurance once your mortgage is paid off — but the risk doesn't disappear with the loan. A Sarasota-based look at the real numbers before you cancel.",
    thumbnail: "/paid off home.png",
    author: "Cody Lamb",
    authorTitle: "Licensed Insurance Agent — FL License #G034846",
    faqItems: [
      {
        id: "required-after-payoff",
        question: "Is homeowners insurance required in Florida after paying off a mortgage?",
        answer: "No. Florida law does not mandate homeowners insurance — it is a lender requirement while a loan is active. Once the mortgage is paid off, no state or federal rule compels you to maintain the policy. The decision becomes entirely yours, which is exactly why it deserves careful thought.",
      },
      {
        id: "wind-vs-flood",
        question: "Does homeowners insurance cover both wind damage and flood damage in Florida?",
        answer: "No — these are two separate coverages. A standard homeowners policy typically covers wind damage and rain that enters through a wind-created opening. It does not cover flooding or rising water; that requires a separate flood insurance policy through the National Flood Insurance Program or a private flood carrier.",
      },
      {
        id: "fema-backstop",
        question: "Can I rely on FEMA disaster assistance instead of homeowners insurance?",
        answer: "FEMA disaster assistance is not a substitute for insurance. Current federal caps sit at $43,600 for housing assistance and $43,600 for other needs assistance per disaster event — and FEMA explicitly states this assistance is not designed to make a homeowner whole after a serious loss. A major rebuild in Sarasota County can run into the hundreds of thousands of dollars.",
      },
      {
        id: "hurricane-deductible",
        question: "What is a hurricane deductible and how does it work in Florida?",
        answer: "Florida homeowners policies typically include a separate named storm or hurricane deductible expressed as a percentage of the dwelling coverage amount — commonly 2% to 5%. On a $400,000 insured home, a 2% deductible means $8,000 comes out of your pocket before insurance pays; a 5% deductible is $20,000. This deductible applies per hurricane event, not per year.",
      },
      {
        id: "gap-in-coverage",
        question: "What happens if I cancel homeowners insurance and want to get it back later?",
        answer: "Re-entering the insurance market after a gap isn't automatic. Insurers can require underwriting inspections — including a four-point inspection covering roofing, electrical, plumbing, and HVAC — before writing a new policy. Older roofs often need documentation of remaining useful life. Some carriers also price less favorably for homeowners with a prior coverage gap versus those who stayed continuously insured.",
      },
      {
        id: "wind-mitigation-credits",
        question: "What are wind mitigation credits and can they lower my Sarasota home insurance premium?",
        answer: "Wind mitigation credits are premium discounts Florida insurers are required to offer based on features that reduce hurricane damage: roof shape, roof-to-wall connections, roof deck attachment, and opening protection (windows, doors, garage). A hip roof, hurricane straps, and impact-rated openings can each generate credits that stack — sometimes reducing the wind portion of a premium by hundreds of dollars annually. A wind mitigation inspection typically costs $75–$150.",
      },
    ],
    content: `
      <img src="/paid off home.png" alt="Paid off home with no mortgage" style="width:100%;border-radius:12px;margin-bottom:2rem;object-fit:cover;max-height:420px;" />

      <p>Paying off a mortgage is one of the best financial milestones a homeowner can hit. It also opens a door that a lot of Sarasota homeowners don't realize is there: once the lender is out of the picture, Florida law does not require you to carry homeowners insurance at all.</p>

      <p>That's a fact, not a suggestion. And for some households working through what to do with a newly freed-up monthly payment, dropping the policy looks like an easy way to keep more of that cash.</p>

      <p>Before making that call, it's worth separating two very different things: the <em>legal requirement</em> to carry insurance, and the <em>physical risk</em> the insurance was covering. Paying off the loan removes the first one entirely. It does nothing to the second.</p>

      <h2>What Actually Changes When the Mortgage Is Gone</h2>

      <p>Florida's Department of Financial Services is clear that homeowners insurance isn't mandated by the state — it's a lender requirement while a loan exists. The same is true for flood insurance, with one exception: if your home sits in a federally designated high-risk flood zone and had a federally backed mortgage, flood coverage was federally required, not just lender-required.</p>

      <p>Once the loan is paid off, both of those lender-driven mandates go away. Florida also allows homeowners to formally exclude windstorm coverage under specific conditions, and — importantly — if there's still a mortgage or lien on the property, the lender has to consent in writing before that exclusion can happen. The day your mortgage is paid off is also the day one of the last real obstacles to dropping wind coverage disappears.</p>

      <p>That's exactly why this decision deserves more thought once the loan is gone, not less.</p>

      <h2>The Sarasota Numbers</h2>

      <p>Local context matters here. Statewide data reported through Florida's Office of Insurance Regulation puts the average Sarasota County homeowners premium (including wind coverage) at roughly $3,482 a year, with policies excluding wind averaging closer to $1,459. That's meaningfully lower than what homeowners in Monroe County ($7,829), Palm Beach ($6,412), or Broward ($6,220) are paying — but it's still real money, and it's the number that tempts people to consider going without.</p>

      <p>Here's what that number doesn't show: the potential loss on the other side of that decision isn't proportional to the premium. A $30,000 wind-damage repair doesn't care whether your annual premium was $2,500 or $7,500. It's the same $30,000 bill either way — the only question is whether insurance is standing between you and that bill, or whether you are.</p>

      <h2>Run the Actual Math Before You Decide</h2>

      <p>A simple way to think about it: how many years of premium savings would it take to equal one bad claim?</p>

      <ul>
        <li><strong>A moderate wind-damage repair</strong> — say $30,000 — against a Sarasota-area premium of roughly $2,500–$3,500 a year works out to somewhere around 9–12 years of "savings" wiped out by a single event.</li>
        <li><strong>A serious rebuild</strong> after a total-loss event can run into the hundreds of thousands of dollars. Ten years of skipped premiums, even at Sarasota's relatively moderate rates, wouldn't come close to covering it.</li>
        <li><strong>FEMA disaster assistance is not a backstop.</strong> Current federal caps sit at $43,600 for housing assistance and $43,600 for other needs assistance per disaster — and FEMA says outright that this assistance is not a substitute for insurance and won't make a homeowner whole after a serious loss.</li>
      </ul>

      <p>None of this means insurance is "cheap" or that premiums don't matter. It means the potential downside is large and uneven in a way that a single year's premium comparison doesn't capture.</p>

      <!-- mid-article CTA -->
      <div style="background:#f0f8f4;border:2px solid #4a8050;border-radius:12px;padding:1.75rem 2rem;margin:2.5rem 0;">
        <p style="margin:0 0 0.4rem;font-weight:700;font-size:1.1rem;color:#1a2e1c;">Wondering what your coverage actually costs to keep — and what you'd be giving up?</p>
        <p style="margin:0 0 1.25rem;color:#374151;font-size:0.975rem;">A 20-minute review is usually all it takes to see the real picture on your specific home.</p>
        <a href="/#contact" style="display:inline-block;background:linear-gradient(135deg,#4a8050,#38653d);color:#fff;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.95rem;">Book a 20-minute coverage review</a>
      </div>

      <h2>Wind Coverage and Flood Coverage Are Two Separate Questions</h2>

      <p>This is one of the most common points of confusion after a storm. A standard <a href="/homeowners-insurance-sarasota-fl">homeowners policy</a> generally covers wind damage and rain that enters through an opening the wind itself created. It does not cover flood or rising water — that's a separate product, whether through the National Flood Insurance Program or a <a href="/flood-insurance-sarasota-fl">private flood policy</a>.</p>

      <p>Florida officials note that roughly a quarter of flood claims happen outside officially designated high-risk zones. Sarasota's flat terrain, proximity to the coast, and heavy seasonal rain events mean flood exposure isn't limited to homes right on the water. Homeowners in older neighborhoods around <a href="/insurance-bradenton-fl">Bradenton</a>, for instance, often discover riverine flood risk from the Manatee and Braden rivers that has nothing to do with proximity to the Gulf.</p>

      <p>If you're weighing whether to keep, drop, or restructure coverage after paying off a mortgage, "storm damage" isn't one decision — it's at least two: wind, and water. It's also worth considering whether an <a href="/umbrella-insurance-sarasota">umbrella insurance policy</a> makes sense alongside your home coverage — it adds excess liability protection at relatively low cost and is often overlooked by mortgage-free homeowners who think they're fully covered.</p>

      <h2>Dropping Coverage Now Can Make It Harder — and Pricier — to Get Back Later</h2>

      <p>Something homeowners don't always plan for: re-entering the insurance market after a gap isn't automatic. Insurers can require underwriting inspections before writing a new policy, and for older homes that often means a four-point inspection covering roofing, electrical, plumbing, and HVAC systems. Roofs beyond a certain age typically need documentation showing several years of remaining useful life before a carrier will write a new policy.</p>

      <p>On top of that, some insurers price less favorably for homeowners who had a gap in coverage rather than staying continuously insured. So the choice isn't just "save money this year" — it's "save money this year, and potentially pay more, or face more hoops, to get covered again later."</p>

      <h2>A Short Checklist Before You Cancel Anything</h2>

      <ol>
        <li><strong>Recalculate what it would actually cost to rebuild</strong> your home today — not what it's worth on the market, and not what you owe. Land isn't insured; the structure is.</li>
        <li><strong>Separate wind coverage from flood coverage.</strong> Confirm which one(s) you currently carry, and which one(s) you'd be walking away from.</li>
        <li><strong>Know your hurricane deductible in dollars, not just percent.</strong> A 2% deductible on a $400,000 home is $8,000. A 5% deductible is $20,000.</li>
        <li><strong>Ask about wind mitigation credits</strong> before assuming your premium can't come down. Roof shape, roof-to-wall connections, and opening protection can all reduce cost without reducing coverage.</li>
        <li><strong>If your roof or systems are older,</strong> get ahead of a four-point inspection now — before you need one to get re-covered later.</li>
        <li><strong>Be honest about liquid reserves.</strong> Going without coverage only makes financial sense if you could personally absorb a six-figure loss without touching retirement savings, a business, or your kids' future plans.</li>
        <li><strong>Model the bad year, not the average year.</strong> Ten quiet years followed by one bad one is still a net loss if that one year is bad enough.</li>
      </ol>

      <h2>The Bottom Line</h2>

      <p>Paying off your mortgage removes a lender's insistence that you carry insurance. It does not remove the wind, the water, the liability exposure, or the cost of rebuilding a home in Sarasota County. For a small number of households with the liquid capital to genuinely self-insure, dropping coverage can be a deliberate, informed decision. For most mortgage-free homeowners, going without isn't self-insurance — it's just uninsured risk with a lower monthly cash outflow.</p>

      <p>If you've recently paid off your home and are trying to figure out what coverage actually makes sense now — what to keep, what to adjust, and where you might be able to reduce premium without giving up protection — that's exactly the kind of review worth having before you make any changes.</p>

      <div style="background:#f0f7ff;border-left:4px solid #1a56db;padding:1.5rem 2rem;margin:2rem 0;border-radius:0 8px 8px 0;">
        <p style="margin:0 0 0.5rem;font-weight:700;font-size:1.1rem;">Ready to find out what your coverage is actually worth keeping?</p>
        <p style="margin:0 0 1rem;">Reach out to Lamb Insurance Agency for a coverage review built around your specific home, your specific risk, and your specific numbers — not a generic statewide average.</p>
        <a href="/#contact" style="display:inline-block;background:#1a56db;color:#fff;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;font-weight:600;">Book a 20-minute coverage review →</a>
      </div>

      <p><em>Cody Alexander Lamb is a licensed Florida insurance agent (License No. G034846) serving Sarasota and the surrounding Gulf Coast, licensed in Life including Variable Annuity &amp; Health (0215), General Lines — Property &amp; Casualty (0220), and Personal Lines (2044). License status can be verified through the Florida Department of Financial Services at <a href="https://www.myfloridacfo.com/division/agents" target="_blank" rel="noopener noreferrer">myfloridacfo.com/division/agents</a>. This article is for general informational purposes and does not constitute legal, financial, or insurance advice specific to your situation. Coverage availability, requirements, and pricing vary by carrier, property, and individual circumstances. Reviewed for accuracy as of July 8, 2026.</em></p>
    `,
  },
  {
    slug: "high-net-worth-home-insurance-sarasota",
    title: "High Value Home Insurance: What Coverage Actually Costs",
    date: "2026-06-22",
    excerpt: "What high value home insurance covers, what it costs, and how to buy it through a local agent who reviews your home's real replacement value.",
    metaDescription: "What high value home insurance covers, what it costs, and how to buy it through a local agent who reviews your home's real replacement value.",
    thumbnail: "/blog/high-net-worth-home-insurance.jpg",
    author: "Cody Lamb",
    authorTitle: "Licensed Insurance Agent — FL License #G034846",
    faqItems: [
      {
        id: "what-is-high-net-worth",
        question: "What is considered a high net worth home for insurance purposes?",
        answer: "It's less about market value and more about rebuild cost, the value of contents like art and jewelry, and liability exposure from things like pools, docks, or staff. A home can be high net worth at $900K and standard at $3M, depending on these factors.",
      },
      {
        id: "same-as-high-value",
        question: "Is high net worth home insurance the same as high value home insurance?",
        answer: "Yes. The two terms are used interchangeably in the industry to describe homes that exceed what a standard insurer is comfortable writing, based on rebuild cost, contents value, and liability exposure, not market value alone.",
      },
      {
        id: "standard-carrier",
        question: "Will a standard homeowners carrier insure a high-value home?",
        answer: "Standard carriers write strong policies for homes within their limits, generally up to roughly $1M in rebuild cost with moderate valuables and liability exposure. Above that, a specialty high net worth carrier is usually a better fit.",
      },
      {
        id: "real-difference",
        question: "What's the real difference between standard homeowners insurance and high net worth homeowners insurance?",
        answer: "The biggest differences are replacement cost guarantees, sub-limits on valuables, liability ceilings, and claims handling built around long-term retention rather than non-renewal after a loss.",
      },
      {
        id: "dwelling-coverage-2m",
        question: "How much dwelling coverage do I need for a $2 million home in Florida?",
        answer: "Dwelling coverage should be based on rebuild cost, not market value or purchase price, and in Florida that calculation needs to separately account for named storm deductibles and flood exposure, since NFIP limits cap out well below what a home at this value typically needs.",
      },
      {
        id: "specialist-carriers",
        question: "What carriers specialize in high net worth home insurance?",
        answer: "PURE, Chubb, AIG Private Client Group, Cincinnati Private Client, Berkley One, Nationwide Private Client, and Vault are the names that come up most often in this space.",
      },
    ],
    content: `
      <p>If you own a home on <a href="/insurance-siesta-key-fl">Siesta Key</a>, Longboat Key, or in one of the gated communities around <a href="/insurance-lakewood-ranch-fl">Lakewood Ranch</a>, you've probably already noticed that <a href="/homeowners-insurance-sarasota-fl">homeowners insurance</a> doesn't scale the way you'd expect. Double the home value and you don't just pay double the premium. At some point, the coverage itself changes shape.</p>

      <p>That point is what most people mean by "high net worth home insurance," sometimes called "high value home insurance," and it's where standard carriers start to show real limits. I review policies like this every week, and I'm going to tell you plainly where a standard policy is the right call and where it isn't. That's the only way this is useful to you.</p>

      <h2>What Actually Makes a Home "High Net Worth" for Insurance Purposes</h2>

      <p>It's not your net worth and it's not your home's market value. It's rebuild cost, plus a few risk factors layered on top:</p>

      <ul>
        <li><strong>Rebuild cost</strong>, not resale value. A waterfront lot can inflate market value without changing what it actually costs to rebuild the structure.</li>
        <li><strong>Contents that exceed standard sub-limits</strong>: fine art, jewelry, wine collections, firearms, watches.</li>
        <li><strong>Liability exposure</strong>: a pool, a dock, a trampoline, a dog, household staff, or simply a higher public profile.</li>
        <li><strong>Multiple properties</strong>, especially if one is seasonal or unoccupied part of the year.</li>
        <li><strong>A claims history</strong> that makes a standard carrier nervous about renewal.</li>
      </ul>

      <p>A home can check zero of these boxes and be worth $3M, and a standard policy fits fine. Another home can check three of them at $900K, and it's already outgrowing the standard market. Value alone is the wrong filter.</p>

      <h2>Where Standard Homeowners Coverage Does This Well</h2>

      <p>For homes within standard limits, a well-chosen standard policy is a strong fit, and I say that as the person who has to stand behind the policy at claim time. You get solid dwelling, other structures, personal property, loss of use, and liability coverage, backed by a carrier with real financial stability and a claims process that doesn't disappear when you need it most. Bundled with auto and an <a href="/umbrella-insurance-sarasota">umbrella insurance policy</a>, the pricing is usually competitive with anything else in that range.</p>

      <p>"Standard limits" generally means a rebuild cost under roughly $1M, valuables that don't exceed everyday sub-limits, and liability exposure that an umbrella policy can adequately cover on top of the homeowners base.</p>

      <h2>Where the Ceiling Actually Is</h2>

      <p>This is the part most agents gloss over. Here's where standard homeowners coverage starts to strain:</p>

      <p><strong>Dwelling coverage caps.</strong> Every standard carrier has a point past which they simply won't write the dwelling limit you need, or they'll write it with conditions that don't hold up well in a major loss.</p>

      <p><strong>Scheduled personal property sub-limits.</strong> Standard policies cap jewelry, art, and collectibles at low per-item amounts (often $1,500–$2,500) unless you schedule them individually, and even scheduling has an aggregate ceiling. If you have a real collection, this matters more than the dwelling limit does.</p>

      <p><strong>No guaranteed replacement cost.</strong> Standard policies pay "up to" your limit. High net worth carriers offer guaranteed or extended replacement cost, sometimes with no cap at all, which matters enormously after a total loss during a construction cost spike.</p>

      <p><strong>Liability ceilings.</strong> An umbrella helps, but it sits on top of an underlying limit. If that underlying limit is thin, the umbrella has less to work with in a serious claim.</p>

      <p><strong>Equipment breakdown, water backup, and service line limits</strong> are usually modest on standard policies and meaningfully higher on specialty ones.</p>

      <p><strong>Non-renewal risk after a claim.</strong> Standard carriers are quicker to non-renew after one large loss. High net worth carriers are built around long-term retention even after a claim, which is part of what you're paying for.</p>

      <h3>Florida adds its own layer</h3>

      <p>None of the above is unique to Florida, but Florida makes it worse:</p>

      <ul>
        <li><strong>Named storm deductibles</strong> are often a separate, overlooked percentage-based deductible that hits high-value homes hardest in dollar terms.</li>
        <li><strong><a href="/flood-insurance-sarasota-fl">Flood coverage</a> through NFIP caps at $250K building / $100K contents.</strong> That's far below what a Sarasota waterfront home needs, regardless of which company writes your homeowners policy. Private or excess flood is usually necessary on top of whatever else you buy.</li>
        <li><strong>Sinkhole and catastrophic ground cover collapse coverage</strong> have Florida-specific rules worth understanding before you assume you're covered.</li>
        <li><strong>Wind mitigation credits</strong> are worth verifying no matter who underwrites the policy. They're often left on the table.</li>
      </ul>

      <!-- mid-article CTA -->
      <div style="background:#f0f8f4;border:2px solid #4a8050;border-radius:12px;padding:1.75rem 2rem;margin:2.5rem 0;">
        <p style="margin:0 0 0.4rem;font-weight:700;font-size:1.1rem;color:#1a2e1c;">Not sure where your coverage actually stands?</p>
        <p style="margin:0 0 1.25rem;color:#374151;font-size:0.975rem;">A 20-minute review of your current declarations page is usually all it takes to know for sure.</p>
        <a href="/#contact" style="display:inline-block;background:linear-gradient(135deg,#4a8050,#38653d);color:#fff;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.95rem;">Book a 20-minute coverage review</a>
      </div>

      <h2>The Specialist Carriers, and What They Actually Add</h2>

      <p>When a home outgrows standard limits, the usual names are PURE, Chubb, AIG Private Client Group, Cincinnati Private Client, Berkley One, Nationwide Private Client, and Vault. What you're actually buying from them:</p>

      <ul>
        <li>Guaranteed or cash-settlement replacement cost</li>
        <li>Higher liability limits, often $5M–$25M+</li>
        <li>Real coverage for valuables, not token sub-limits</li>
        <li>Cyber, identity theft, and in some cases kidnap and ransom coverage</li>
        <li>Dedicated claims handling and, with several of these, in-house risk engineers who'll walk your property before there's ever a loss</li>
      </ul>

      <p>The tradeoff is cost and, with a couple of these carriers, membership-style eligibility criteria. You also generally lose the multi-line bundling discount you'd get keeping auto and home under one roof.</p>

      <h2>A Quick Way to Know Which Camp You're In</h2>

      <p>If two or more of these apply to your home, it's worth a second look before you renew on autopilot:</p>

      <ul>
        <li>Rebuild cost (not market value) is over $1M</li>
        <li>You're holding $50K+ in unscheduled valuables in the house</li>
        <li>Your liability exposure includes a pool, dock, trampoline, specific dog breed, or a public-facing role</li>
        <li>You own or insure more than one property</li>
        <li>You've had a claim in the last five years and you're not sure where you stand on renewal</li>
        <li>You want guaranteed replacement cost, not "up to policy limit"</li>
      </ul>

      <h2>Where I Land on This, Honestly</h2>

      <p>If your home's rebuild cost is under roughly $1M and your liability and valuables exposure is moderate, I can usually put together a strong standard policy for you, often with a meaningful bundled discount alongside auto and umbrella.</p>

      <p>If you're above that, or several of the risk factors above apply, I'll tell you that directly, and I'll point you toward the carrier that actually fits, even when it's not something I personally write. I'd rather you end up with the right policy somewhere else than the wrong one with my name on it. That's not a sales pitch. It's the only version of this job that holds up over time.</p>

      <h2>What Happens If You Reach Out</h2>

      <p>I'll review your current declarations page, walk through the checklist above against your actual home, and give you a straight answer. If a standard policy fits, I'll write it and bundle it with whatever else makes sense. If it doesn't, I'll tell you which specialist market does and make the introduction myself.</p>

      <p><strong>Book a 20-minute coverage review with Cody Lamb</strong> and bring your current policy. You'll know within the call where your home actually stands.</p>

      <div style="background:#f0f7ff;border-left:4px solid #1a56db;padding:1.5rem 2rem;margin:2rem 0;border-radius:0 8px 8px 0;">
        <p style="margin:0 0 0.5rem;font-weight:700;font-size:1.1rem;">Ready to find out where your home actually stands?</p>
        <p style="margin:0 0 1rem;">Bring your current declarations page. One call is usually all it takes.</p>
        <a href="/#contact" style="display:inline-block;background:#1a56db;color:#fff;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;font-weight:600;">Book a 20-minute coverage review →</a>
      </div>

      <p><em>This article is general information, not a personalized coverage recommendation. Every policy is subject to underwriting. For a specific review of your home, reach out directly.</em></p>
    `,
  },
  {
    slug: "florida-insurance-rates-dropping-2026",
    title: "Florida Insurance Rates Are Dropping in 2026: What It Means for Your Coverage",
    date: "2026-06-17",
    excerpt: "More than 40 Florida insurers have filed rate decreases. A Sarasota licensed insurance agent explains why rates are falling, how much, and how to make sure you actually capture the savings.",
    thumbnail: "/florida rates dropping 2026.png",
    author: "Cody Lamb",
    authorTitle: "Licensed Insurance Agent — FL License #G034846",
    content: `
      <p>After several brutal years of rising premiums, Florida's <a href="/auto-insurance-sarasota-fl">auto</a> and <a href="/homeowners-insurance-sarasota-fl">home insurance</a> markets have turned a corner. More than 40 companies have filed for rate decreases since the start of 2025, and the state's five largest auto insurers are now averaging roughly an 8% reduction for 2026. For Sarasota homeowners and drivers, this is the best opportunity in over a decade to review coverage and recapture savings.</p>

      <p>But here's what most coverage of this story leaves out: lower filed rates do <strong>not</strong> automatically lower <em>your</em> bill. Savings depend on your carrier, your renewal date, your roof, your claims history, and discounts you may not even know you qualify for. This is where working with a local agent who knows the Florida market makes a measurable difference.</p>

      <p>Below is a plain-English breakdown of what's actually happening, the verified numbers, and the specific steps to take right now.</p>

      <h2>Why Florida Rates Are Falling</h2>

      <p>The turnaround traces back to legislative reform. In 2023, Florida passed comprehensive tort reform (HB 837) that shortened the statute of limitations to two years, eliminated "phantom" damages, and ended one-way attorney fee awards — changes designed to curb the litigation that had made Florida one of the most expensive insurance markets in the country.</p>

      <p>The effect on lawsuit volume was sharp. According to a Milliman white paper cited by USAA, auto glass lawsuits fell from roughly <strong>24,000 in Q2 2023 to about 2,600 in Q2 2024</strong> <a href="https://www.cnbc.com/2026/06/08/usaa-to-return-nearly-1-billion-to-florida-members-as-legal-reforms-help-lower-insurance-costs.html" target="_blank" rel="noopener noreferrer">(CNBC)</a>. Insurance Commissioner Mike Yaworsky has credited those reforms directly for the rate relief now reaching consumers, noting that nearly 80% of Florida auto policyholders are seeing lower rates for 2026 <a href="https://floir.gov/newsroom/archives/item-details/2026/01/28/commissioner-mike-yaworsky-approves-more-auto-rate-cuts-for-consumers-in-2026--including-military-service-members" target="_blank" rel="noopener noreferrer">(Florida OIR)</a>.</p>

      <p>Fewer lawsuits meant lower claim costs, which meant insurers could file for lower rates — and new competitors could afford to enter the market.</p>

      <h2>Auto Insurance: The Verified Rate Cuts</h2>

      <p>Florida's top five auto groups — Progressive, GEICO, State Farm, Allstate, and USAA — represent about 78% of the market and are indicating an average <strong>-8%</strong> rate change for 2026 <a href="https://floir.gov/newsroom/archives/item-details/2026/03/05/commissioner-mike-yaworsky-announces-more-significant-auto-rate-decreases-for-florida-s-top-5-auto-insurance-groups" target="_blank" rel="noopener noreferrer">(Florida OIR, March 2026)</a>. Specific filings approved by the Office of Insurance Regulation include:</p>

      <table style="width:100%;border-collapse:collapse;margin:1.5rem 0;">
        <thead>
          <tr style="background:#f0f7ff;">
            <th style="text-align:left;padding:0.6rem 0.8rem;border:1px solid #d1d5db;">Insurer</th>
            <th style="text-align:left;padding:0.6rem 0.8rem;border:1px solid #d1d5db;">Approved Rate Change</th>
            <th style="text-align:left;padding:0.6rem 0.8rem;border:1px solid #d1d5db;">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">State Farm</td>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">-10.1%</td>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">Third reduction since 2024; more than 20% cumulative, over $1B in statewide savings</td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">Auto Club Group</td>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">-15%</td>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">Three reductions over the year, plus a fourth round in early 2026; more than $16M in annual auto savings for 133,000+ Florida policyholders</td>
          </tr>
          <tr>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">Florida Farm Bureau</td>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">-8.7%</td>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;"></td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">Progressive</td>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">-8%</td>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">Plus a separate refund of over $1 billion to policyholders</td>
          </tr>
          <tr>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">USAA</td>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">-7%</td>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">More than $125M in estimated annual savings for FL members</td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">Allstate</td>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;">-4%</td>
            <td style="padding:0.6rem 0.8rem;border:1px solid #d1d5db;"></td>
          </tr>
        </tbody>
      </table>

      <p><em>Source: <a href="https://floir.gov/newsroom/archives/item-details/2026/01/28/commissioner-mike-yaworsky-approves-more-auto-rate-cuts-for-consumers-in-2026--including-military-service-members" target="_blank" rel="noopener noreferrer">Florida Office of Insurance Regulation, Jan. 28, 2026</a>. Rate figures are current as of June 2026 and change as carriers file new rates — confirm current pricing before relying on any specific number.</em></p>

      <p>USAA went further, announcing it will return <strong>nearly $1 billion</strong> in combined rate reductions and direct member returns between December 2025 and July 2026 — including a <strong>$500 million dividend</strong> to roughly 830,000 members who held Florida auto policies between 2023 and 2025. The average payment is about $760, with more than a quarter of members receiving over $1,000 <a href="https://newsroom.usaa360.com/news/usaa-broadens-national-effort-to-help-military-families-navigate-rising-costs" target="_blank" rel="noopener noreferrer">(USAA Newsroom)</a>. If you're a veteran or active military family in the Sarasota area, this one is worth a direct conversation.</p>

      <h2>Home Insurance: Stabilizing, With Relief Arriving at Renewal</h2>

      <p>The homeowners market is improving more gradually, but the direction is clear:</p>

      <ul>
        <li><strong>17 new insurance companies</strong> have entered the Florida market, adding capacity and competition <a href="https://floir.gov/newsroom/archives/item-details/2026/01/28/commissioner-mike-yaworsky-approves-more-auto-rate-cuts-for-consumers-in-2026--including-military-service-members" target="_blank" rel="noopener noreferrer">(Florida OIR)</a>.</li>
        <li><strong>Citizens Property Insurance</strong>, the state-backed insurer of last resort, has shrunk from about 1.42 million policies in October 2023 to roughly 395,000 by January 2026 — a sign private carriers are taking policies back.</li>
        <li>Citizens has filed for an average statewide decrease of about <strong>8.7%</strong> effective 2026, with South Florida counties seeing larger cuts.</li>
        <li>Multiple private carriers, including Florida Peninsula, have filed decreases in the <strong>8%+</strong> range <a href="https://mynews13.com/fl/orlando/news/2025/12/19/more-home-insurance-companies-plan-rate-decreases-for-2026" target="_blank" rel="noopener noreferrer">(Spectrum News)</a>.</li>
      </ul>

      <p>The catch for homeowners: home savings show up at <strong>renewal</strong>, not mid-term. If your renewal is months away, that's exactly the window to review your options.</p>

      <h2>How to Actually Capture the Savings</h2>

      <p>Filed rate decreases are the headline. Whether you see them on your bill comes down to a handful of factors a local agent can help you work through.</p>

      <h3>1. Maximize the discounts you may be missing</h3>
      <p>Florida homeowners can stack significant savings:</p>
      <ul>
        <li><strong>Wind mitigation</strong> — features like hurricane straps, a properly rated roof, and impact-resistant openings can substantially reduce the wind portion of your premium. This single inspection is often the highest-ROI step a Gulf Coast homeowner can take.</li>
        <li><strong>Newer roof</strong> — many carriers reward roofs under 10 years old.</li>
        <li><strong>Claims-free history</strong>, <strong><a href="/bundle-insurance-sarasota-fl">bundling home and auto</a></strong>, and <strong>security/water-leak devices</strong> can each add savings.</li>
      </ul>

      <h3>2. Work with an agent who reviews the market for you</h3>
      <p>Cody Lamb personally reviews your current coverage, checks it against today's market, and makes sure you're getting every discount you qualify for.</p>

      <h3>3. Don't wait for the renewal notice</h3>
      <p>Talk to your agent now — you may have made an improvement like a new roof that they don't know about, and that could mean a decrease.</p>

      <h3>4. Get a wind mitigation inspection</h3>
      <p>If you've never had one on your current home, this is the first call to make. The inspection typically costs $75–$150 and can reduce your annual premium by hundreds of dollars.</p>

      <h2>Why Work With a Local Sarasota Agent</h2>

      <p>Florida's market is unlike anywhere else — hurricane and flood exposure, roof age rules, and carrier appetite that changes by ZIP code all drive pricing. A Sarasota-based agent who lives and works in this market understands those dynamics firsthand and can match your coverage to the realities of the Gulf Coast, not a generic national rate table.</p>

      <p>If you haven't reviewed your coverage in the last 12 months, you are very likely leaving money on the table in the current environment. That's especially true in fast-growing communities like <a href="/insurance-lakewood-ranch-fl">Lakewood Ranch</a>, where residents who moved from out of state often carry policies that were never calibrated to Florida's flood, wind, and roof-age underwriting rules.</p>

      <div style="background:#f0f7ff;border-left:4px solid #1a56db;padding:1.5rem 2rem;margin:2rem 0;border-radius:0 8px 8px 0;">
        <p style="margin:0 0 0.5rem;font-weight:700;font-size:1.1rem;">Ready to capture your 2026 rate savings?</p>
        <p style="margin:0 0 1rem;">Cody Lamb is a licensed insurance agent based in Sarasota. He reviews auto and home policies at no cost and no obligation — a straightforward look at whether you're getting today's best rates.</p>
        <a href="/#contact" style="display:inline-block;background:#1a56db;color:#fff;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;font-weight:600;">Get a Free Coverage Review →</a>
      </div>

      <h2>References</h2>
      <ol>
        <li>CNBC — <a href="https://www.cnbc.com/2026/06/08/usaa-to-return-nearly-1-billion-to-florida-members-as-legal-reforms-help-lower-insurance-costs.html" target="_blank" rel="noopener noreferrer">"USAA to return nearly $1 billion to Florida members as legal reforms help lower insurance costs"</a> (June 2026)</li>
        <li>Florida OIR — <a href="https://floir.gov/newsroom/archives/item-details/2026/01/28/commissioner-mike-yaworsky-approves-more-auto-rate-cuts-for-consumers-in-2026--including-military-service-members" target="_blank" rel="noopener noreferrer">"Commissioner Yaworsky Approves More Auto Rate Cuts for Consumers in 2026"</a> (Jan. 2026)</li>
        <li>Florida OIR — <a href="https://floir.gov/newsroom/archives/item-details/2026/03/05/commissioner-mike-yaworsky-announces-more-significant-auto-rate-decreases-for-florida-s-top-5-auto-insurance-groups" target="_blank" rel="noopener noreferrer">"Top 5 Auto Insurance Groups Indicating Average -8% Rate Change"</a> (March 2026)</li>
        <li>USAA Newsroom — <a href="https://newsroom.usaa360.com/news/usaa-broadens-national-effort-to-help-military-families-navigate-rising-costs" target="_blank" rel="noopener noreferrer">"USAA Broadens National Effort to Help Military Families Navigate Rising Costs"</a> (June 2026)</li>
        <li>Spectrum News 13 — <a href="https://mynews13.com/fl/orlando/news/2025/12/19/more-home-insurance-companies-plan-rate-decreases-for-2026" target="_blank" rel="noopener noreferrer">"More home insurance companies plan Florida rate decreases for 2026"</a> (Dec. 2025)</li>
        <li>Insurance Journal — <a href="https://www.insurancejournal.com/news/southeast/2026/06/09/873045.htm" target="_blank" rel="noopener noreferrer">"USAA Not Done With Dividends: Florida Reforms Prompt $500M Payout"</a> (June 2026)</li>
      </ol>

      <p><em>This article is provided by Lamb Insurance Agency for general informational purposes only and does not constitute legal, tax, or financial advice. Insurance rates, discounts, eligibility, and availability vary by carrier and individual circumstances. Contact a licensed agent for guidance specific to your situation.</em></p>

      <p><em>Cody Alexander Lamb is a licensed Florida insurance agent (License No. G034846) serving Sarasota and the surrounding Gulf Coast, licensed in Life including Variable Annuity &amp; Health (0215), General Lines — Property &amp; Casualty (0220), and Personal Lines (2044). License status can be verified through the Florida Department of Financial Services at <a href="https://www.myfloridacfo.com/division/agents" target="_blank" rel="noopener noreferrer">myfloridacfo.com/division/agents</a>. Reviewed for accuracy as of June 17, 2026.</em></p>
    `,
  },
  {
    slug: "flood-zones-home-insurance-sarasota-neighborhoods",
    title: "Flood Zones, Home Insurance, and Sarasota Neighborhoods: What New Residents Need to Know Before They Buy",
    date: "2026-06-12",
    excerpt: "Moving to Sarasota? Most out-of-state buyers have never had to think about flood zones, wind mitigation, or separate flood policies. Here's a practical orientation before you sign anything.",
    thumbnail: "",
    author: "Cody Lamb",
    authorTitle: "Licensed Insurance Agent — FL License #G034846",
    content: `
      <p>I talk to a lot of people relocating to Sarasota. They've done their homework on neighborhoods, school ratings, commute times, and restaurant scenes. What almost none of them have done is think seriously about insurance — specifically, what Florida insurance actually costs and why.</p>

      <p>That's not a criticism. If you're coming from Ohio, Michigan, or Connecticut, your homeowner's policy probably just renewed automatically every year without much drama. You paid it. You forgot about it. Here, that approach will cost you — sometimes a lot. Florida's insurance market is unlike any other in the country, and Sarasota's particular geography adds layers that catch out-of-state buyers completely off guard.</p>

      <p>This post isn't meant to scare you. Sarasota is a genuinely wonderful place to live, and plenty of people buy homes here and manage their insurance intelligently. But "intelligently" means understanding what you're buying before you sign anything. Consider this your orientation.</p>

      <h2>What Flood Zones Actually Mean</h2>

      <p>The first thing to understand is that your standard homeowner's insurance policy does not cover flood damage. Not one dollar. <a href="/flood-insurance-sarasota-fl">Flood coverage</a> is a separate policy, typically through the National Flood Insurance Program (NFIP) or a private flood carrier, and whether you're required to carry it — and what it costs — depends heavily on your flood zone designation.</p>

      <p>FEMA maintains flood maps for every county in the country. In Sarasota County, the three zones you'll encounter most often are:</p>

      <p><strong>Zone X</strong> is the baseline most buyers hope for. It indicates a lower flood risk area — outside the 100-year floodplain. Flood insurance isn't federally required in Zone X, and if you buy it anyway, premiums are generally modest. Many buyers in areas like Lakewood Ranch or parts of Palmer Ranch fall into Zone X, though that designation isn't universal even within those communities.</p>

      <p><strong>Zone AE</strong> is where things get more serious. AE zones are within the 100-year floodplain, meaning FEMA estimates at least a 1% annual chance of flooding — which sounds small until you hold a 30-year mortgage. If you're financing a home in an AE zone, your lender will require flood insurance. Sarasota County has extensive AE coverage, particularly around Sarasota Bay, the barrier islands, and low-lying inland areas near waterways and retention systems. Premiums in AE zones vary significantly based on your home's elevation relative to the Base Flood Elevation (BFE) established for that zone.</p>

      <p><strong>Zone VE</strong> is the coastal high-hazard zone — the most exposure-heavy designation. VE zones account for wave action in addition to flooding, and you'll find them along the Gulf-facing edges of Siesta Key, Lido Key, and similar barrier island locations. Insurance in VE zones is the most expensive category, and construction requirements are strict.</p>

      <p>Here's something that genuinely surprises people: two houses on the same block can be in different flood zones, or share a zone but have dramatically different BFEs. Your neighbor's flood premium tells you almost nothing about yours. An elevation certificate — a survey document that establishes your home's finished floor elevation relative to the BFE — is the key to understanding your actual exposure and your actual premium.</p>

      <h2>How Neighborhood Choice Affects Your Premium</h2>

      <p>This is where I want to be direct with buyers: where you choose to live in Sarasota is not just a lifestyle decision. It's an insurance decision.</p>

      <p><a href="/insurance-siesta-key-fl">Siesta Key</a> is one of the most desirable addresses in the region, and it carries one of the most complex insurance profiles. Much of the key sits in AE or VE flood zones. Wind exposure on a barrier island is significant. Combined premiums for flood and homeowner's insurance on Siesta Key can run considerably higher than an equivalent home several miles inland — sometimes by thousands of dollars annually.</p>

      <p>Downtown Sarasota, particularly near the bayfront, has its own flood zone patchwork. Some blocks are fine; others carry meaningful AE exposure. The age and construction type of downtown homes — many built before modern wind codes — also affects wind mitigation credits, which I'll get to in a moment.</p>

      <p><a href="/insurance-palmer-ranch-fl">Palmer Ranch</a> and Sarasota's established inland communities generally offer more favorable flood profiles, though "inland" doesn't mean immune. Some Palmer Ranch parcels near retention ponds or drainage corridors carry AE designations that surprise buyers who assumed they were in the clear.</p>

      <p><a href="/insurance-lakewood-ranch-fl">Lakewood Ranch</a>, which extends into Manatee County, is often Zone X for many of its developed communities — one reason it's attracted so much growth. But even there, individual lots vary, and newer FEMA map updates have reclassified some areas.</p>

      <p>Before you fall in love with a specific neighborhood, understand its risk profile. A resource like <a href="https://mysarasotaguide.com/neighborhoods" target="_blank" rel="noopener noreferrer">this Sarasota neighborhoods guide</a> is a good starting point for understanding the geography of the area — then layer in the FEMA flood map data and get a quote. Don't do it in reverse.</p>

      <h2>Wind Mitigation Inspections: Get One Before You Close</h2>

      <p>Florida's building codes changed significantly after Hurricane Andrew in 1992 and again after the 2004–2005 hurricane seasons. Homes built or significantly retrofitted after those benchmarks often qualify for meaningful wind mitigation credits that reduce your homeowner's premium.</p>

      <p>A wind mitigation inspection — typically $75 to $150 — examines your roof shape, roof covering, roof deck attachment, roof-to-wall connections, and opening protection (windows, doors, garage). The inspector produces a standardized report that you submit to your insurer.</p>

      <p>The credits can be substantial. I've seen wind mitigation reports reduce a client's annual homeowner's premium by $800 to $1,500 or more, depending on the home's construction quality and the insurer's rating algorithm. A hip roof (sloped on all four sides) performs significantly better than a gable roof in wind, and that difference shows up in your premium. Homes with hurricane-rated windows and doors, reinforced roof-to-wall straps, and sealed roof decks can accumulate credits across multiple categories.</p>

      <p>The mistake I see frequently: buyers get the inspection after closing, as an afterthought. Get it before. If the report reveals a meaningful credit, you can factor that into your insurance budget accurately. If it reveals deficiencies — say, an aging roof deck attachment — you may want to negotiate repairs before you're the one paying for them.</p>

      <h2>Common Mistakes New Florida Homeowners Make</h2>

      <ul>
        <li><strong>Assuming homeowner's insurance covers flood.</strong> It never does. <a href="/homeowners-insurance-sarasota-fl">Standard homeowners insurance</a> and flood are always separate policies. If you're in a required flood zone and don't have a flood policy at closing, your lender will force-place one — at a much higher cost, with less favorable terms.</li>
        <li><strong>Skipping the elevation certificate.</strong> If your home is in an AE zone, an elevation certificate can dramatically affect your NFIP premium. Without one, you may be rated at the worst-case assumption. A certificate costs a few hundred dollars and can save you that amount annually.</li>
        <li><strong>Not comparing Citizens vs. the private market.</strong> Citizens Property Insurance Corporation is Florida's state-backed insurer of last resort. It's not always the cheapest or best option, but many buyers assume it's their only option. The private market — especially for newer construction in lower-risk zones — can offer better pricing and broader coverage. Work with a broker who has access to both.</li>
        <li><strong>Waiting until June to think about this.</strong> Hurricane season runs June 1 through November 30. Some insurers tighten underwriting or pause new policies as storm activity increases. If you're buying a home and closing in the spring, don't put off your insurance review. Lock in your coverage early.</li>
      </ul>

      <div style="background:#f0f7ff;border-left:4px solid #1a56db;padding:1.5rem 2rem;margin:2rem 0;border-radius:0 8px 8px 0;">
        <p style="margin:0 0 0.5rem;font-weight:700;font-size:1.1rem;">Buying in Sarasota? Let's talk through your coverage before you close.</p>
        <p style="margin:0 0 1rem;">Reach out to Lamb Insurance for a no-pressure coverage review — whether you're still shopping for a home or already under contract. A 20-minute conversation now can prevent an expensive surprise later.</p>
        <a href="/#contact" style="display:inline-block;background:#1a56db;color:#fff;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;font-weight:600;">Get a Free Coverage Review →</a>
      </div>

      <p><em>Cody Lamb is a licensed insurance agent serving Sarasota and the surrounding area. He specializes in helping Florida homeowners — and future homeowners — find coverage that fits their actual situation.</em></p>
    `,
  },
  {
    slug: "should-you-bundle-home-and-auto-insurance-florida",
    title: "Should You Bundle Home and Auto Insurance in Florida? What Homeowners Need to Know",
    date: "2026-06-08",
    excerpt: "Bundling home and auto insurance can save money — but in Florida's rapidly shifting market, it isn't always the best move. Here's how to evaluate whether a bundle actually works in your favor.",
    thumbnail: "/blog/bundle-home-auto-florida.png",
    author: "Cody Lamb",
    authorTitle: "Licensed Insurance Agent — FL License #G034846",
    content: `
      <p>For many homeowners, insurance is one of the largest recurring household expenses. In Florida, this burden has become particularly acute. Recent data indicates that the average annual home insurance premium in the state reached $8,292 in 2025 — an 18% rise from the previous year, with cumulative rate increases hitting roughly 30% since 2022.</p>

      <p>As premiums continue to fluctuate, it is common to hear recommendations to <a href="/bundle-insurance-sarasota-fl">bundle home and auto insurance</a> policies with the same carrier. The concept is simple: purchase multiple policies from one insurer and receive a discount.</p>

      <p>While bundling can provide savings in some situations, the reality is more nuanced. The best insurance arrangement depends on the homeowner's individual circumstances, the available carriers in their market, and the specific coverage being compared. Understanding how bundling works — and where its limitations exist — can help homeowners make more informed decisions, especially as the Florida market undergoes significant regulatory and structural changes.</p>

      <h2>What Is Insurance Bundling?</h2>

      <p>Insurance bundling refers to purchasing multiple insurance policies through the same insurance company. The most common arrangement combines homeowners insurance and automobile insurance under a single carrier.</p>

      <p>Insurers often encourage bundling by offering multi-policy discounts. These discounts are designed to increase customer retention and simplify account management by consolidating policies under one provider.</p>

      <p>Depending on the insurer, homeowners may also be able to bundle additional policies such as:</p>

      <ul>
        <li>Umbrella insurance</li>
        <li>Motorcycle insurance</li>
        <li>Boat insurance</li>
        <li>Recreational vehicle insurance</li>
        <li>Rental property insurance</li>
      </ul>

      <p>The specific discounts and eligibility requirements vary significantly between carriers. Whether you own a home in Sarasota, your <a href="/homeowners-insurance-sarasota-fl">homeowners insurance</a> and <a href="/auto-insurance-sarasota-fl">auto insurance</a> policies each have different pricing dynamics that affect how bundling plays out.</p>

      <h2>The Shifting Florida Market: New Opportunities and Competition</h2>

      <p>The Florida insurance market is currently in a state of flux, creating new dynamics for bundling. For years, the state was defined by carrier exits and skyrocketing rates. However, legislative reforms aimed at curbing legal system abuse are beginning to stabilize the market, leading to new entrants and even rate decreases.</p>

      <h3>New Players Entering the Market</h3>

      <p>Since major legislative reforms were enacted, 20 new insurance companies have entered or re-entered the Florida market, bringing over $850 million in capital. Recent partnerships between regional insurers have been specifically designed to offer bundled home and auto options statewide, and several digital-first insurers have launched auto insurance in Florida, advertising bundle savings of up to 20% on auto premiums. Communities like <a href="/insurance-lakewood-ranch-fl">Lakewood Ranch</a>, where newer construction often qualifies for favorable underwriting, have seen particularly competitive bundled options emerge as carriers compete for this market.</p>

      <h3>Rate Reductions on the Horizon</h3>

      <p>For the first time in years, there is genuine relief on pricing. State regulators have announced that several leading auto insurers have cut premiums by an average of 6.5%. On the home side, starting in spring 2026, over 330,000 policies will see average reductions of nearly 9%, with some of the highest-cost counties seeing drops exceeding 14%.</p>

      <p>For homeowners, this means a bundled quote received even six months ago may no longer be the best deal available. Insurers are competing aggressively for customers who bundle, and that competition creates leverage worth using.</p>

      <h2>Does Bundling Always Save Money?</h2>

      <p>No — and this is one of the most persistent misconceptions in personal insurance.</p>

      <p>In practice, insurance pricing is influenced by numerous factors including property characteristics, vehicle type, driving history, claims history, credit-based insurance scores, geographic location, and underwriting guidelines. Because every insurer weighs these variables differently, there are situations where a homeowner may receive a lower combined premium from separate carriers than from a bundled package.</p>

      <p>A bundled quote should therefore be viewed as one option among many rather than an automatic cost-saving strategy. According to the Insurance Information Institute (III), many insurers offer discounts for purchasing multiple policies, but the amount of savings varies considerably among companies and states.</p>

      <h2>When Bundling May Make Sense</h2>

      <p>Bundling often provides value when multiple favorable conditions align:</p>

      <ul>
        <li><strong>Multiple vehicles:</strong> Households with several vehicles frequently qualify for larger multi-policy and multi-vehicle discounts.</li>
        <li><strong>Long-term relationships:</strong> Some insurers provide additional benefits to customers who maintain multiple policies over an extended period.</li>
        <li><strong>Consistent coverage needs:</strong> Bundling may be advantageous when a single carrier offers competitive pricing across both homeowners and auto insurance without sacrificing coverage quality.</li>
        <li><strong>Administrative simplicity:</strong> For some households, managing insurance through a single company may justify a modest difference in premium.</li>
      </ul>

      <h2>When Bundling May Not Be the Best Choice</h2>

      <p>There are also circumstances where separate carriers may be worth considering:</p>

      <ul>
        <li><strong>Specialized property risks:</strong> Certain homes may fit better within insurers that specialize in specific property profiles or geographic regions.</li>
        <li><strong>Unique vehicle situations:</strong> Classic cars, luxury vehicles, commercial-use vehicles, or high-performance vehicles sometimes receive more competitive treatment from specialty carriers.</li>
        <li><strong>Coverage differences:</strong> A lower premium should not be evaluated independently from policy terms. Deductibles, exclusions, endorsements, and liability limits all influence the overall value of a policy.</li>
        <li><strong>Market changes:</strong> Insurance companies regularly adjust rates and underwriting appetite. An insurer that offered competitive pricing one year may become significantly less competitive the following year.</li>
      </ul>

      <h2>The "My Safe Florida Home" Program: A Wrinkle Worth Knowing</h2>

      <p>One unique Florida consideration is the My Safe Florida Home program, which offers grants up to $10,000 for home fortifications — roof-to-wall reinforcements, impact-resistant windows, and similar upgrades. While these improvements lower your home premium, not every auto insurer recognizes the associated home-hardening discounts equally.</p>

      <p>A specialist home insurer that fully credits these fortification upgrades, paired with a separate auto insurer offering a competitive rate, might yield a better net result than a bundle where the home discount is minimal. If you've made improvements under this program, it's worth confirming how any prospective bundle handles those credits before committing.</p>

      <h2>Coverage Matters More Than Discounts</h2>

      <p>Insurance discussions often focus on premium costs because they are easy to compare. Coverage quality is harder to evaluate — but it's what actually matters when something goes wrong.</p>

      <p>A lower premium may coincide with higher deductibles, reduced liability protection, lower dwelling limits, additional exclusions, or fewer optional endorsements. For homeowners, the purpose of insurance is financial protection against low-frequency but potentially severe losses. The policy's ability to respond appropriately during a claim is often more important than the size of a discount received at purchase.</p>

      <h2>What to Ask Before Bundling</h2>

      <p>Before changing insurance arrangements, homeowners should get clear answers to these questions:</p>

      <ul>
        <li>Are the coverage limits identical between quotes?</li>
        <li>Have any deductibles changed?</li>
        <li>Are policy exclusions different?</li>
        <li>What endorsements are included or removed?</li>
        <li>How much of the savings comes from the bundle discount itself?</li>
        <li>What is the insurer's financial strength rating?</li>
        <li>How has the insurer handled claims in Florida?</li>
        <li>Does my home qualify for fortification grants or credits — and does this insurer fully honor them?</li>
      </ul>

      <p>These questions help ensure that comparisons are based on coverage value rather than premium alone.</p>

      <div style="background:#f0f7ff;border-left:4px solid #1a56db;padding:1.5rem 2rem;margin:2rem 0;border-radius:0 8px 8px 0;">
        <p style="margin:0 0 0.5rem;font-weight:700;font-size:1.1rem;">Not sure if your bundle is actually saving you money?</p>
        <p style="margin:0 0 1rem;">Cody Lamb is a licensed insurance agent based in Sarasota. He reviews home and auto policies at no cost and no obligation — a straightforward look at whether your current setup still makes sense.</p>
        <a href="/#contact" style="display:inline-block;background:#1a56db;color:#fff;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;font-weight:600;">Get a Free Policy Review →</a>
      </div>

      <h2>Frequently Asked Questions</h2>

      <h3>How much can I save by bundling home and auto insurance in Florida?</h3>
      <p>Discounts vary widely by carrier, but multi-policy discounts typically range from 5% to 25% on one or both policies. However, the headline discount doesn't tell the whole story — if the bundled carrier's base rates are higher than competitors, the net savings may be smaller than advertised, or you may pay more overall despite receiving a discount. Always compare the total combined premium, not just the discount percentage.</p>

      <h3>Is bundling always cheaper than keeping policies with separate companies?</h3>
      <p>No. While bundling often produces savings, it isn't guaranteed. Specialty carriers sometimes offer lower rates for specific home profiles or vehicle types than a general bundling carrier can match — even after applying the multi-policy discount. The only reliable way to know is to compare a bundled quote against separate quotes side by side, with identical coverage terms.</p>

      <h3>Will my bundle discount go away if I file a claim?</h3>
      <p>The multi-policy discount itself is generally tied to maintaining both policies with the carrier, not to your claims history. However, filing a claim can affect your overall premium at renewal — and if your rate increases significantly, the bundle may become less competitive. It's worth asking any prospective insurer how claims affect pricing for bundled customers specifically.</p>

      <h3>What happens if my homeowners insurer leaves Florida?</h3>
      <p>Florida has seen a number of carrier withdrawals and non-renewals in recent years. If your home insurer exits the market, your bundled auto policy remains in place — but you lose the bundle discount when you're forced to move your home coverage. This is one reason it's worth periodically reviewing whether your current bundle arrangement still makes sense, rather than assuming stability.</p>

      <h3>Should I bundle if I've made improvements through the My Safe Florida Home program?</h3>
      <p>Not necessarily. Insurers vary in how much credit they give for home fortification upgrades. If your current home insurer fully prices in those improvements and a bundling carrier does not, you may actually pay more for home coverage after bundling — even if the auto discount looks appealing. A comparison that accounts for fortification credits specifically is the right way to evaluate this.</p>

      <h3>How often should I review my bundled policy?</h3>
      <p>At minimum, before each annual renewal. The Florida insurance market has been changing rapidly — new carriers have entered, rates have shifted, and underwriting guidelines continue to evolve. A bundle that was competitively priced 12 to 18 months ago may no longer be the best arrangement today. A brief annual review with a local agent takes relatively little time and can surface meaningful savings or coverage gaps.</p>

      <p><em>Cody Lamb is a licensed insurance agent serving Sarasota and the surrounding area. He specializes in helping Florida homeowners find coverage that fits their actual situation — not the situation they were in when they first set up their policies.</em></p>
    `,
  },
  {
    slug: "am-i-overpaying-car-insurance-sarasota",
    title: "Am I Overpaying for Car Insurance in Sarasota? Here's How to Tell",
    date: "2026-06-05",
    excerpt: "Florida car insurance rates are finally dropping — but only if you're shopping. A Sarasota agent explains what local drivers over 55 are missing and how a free 15-minute review can make a real difference.",
    thumbnail: "",
    author: "Cody Lamb",
    authorTitle: "Licensed Insurance Agent — FL License #G034846",
    content: `
      <p>You open the renewal notice. The number is higher than you remembered — or maybe it's the same, and you're just now wondering if it should be lower. Either way, that feeling is worth paying attention to.</p>

      <p>Florida has had one of the most turbulent car insurance markets in the country over the past few years. Rates surged dramatically in 2022 and 2023, catching millions of drivers off guard. But here's what most Sarasota residents don't know yet: rates are finally coming down. Major insurers have been filing for significant rate reductions across Florida — and if you haven't reviewed your policy recently, there's a real chance you're still paying yesterday's inflated price for coverage that may no longer fit your life today.</p>

      <p>This isn't a sales pitch. It's a straightforward breakdown of how to tell whether you're overpaying — and what to do about it if you are.</p>

      <h2>Florida Rates Went Up — But They're Finally Coming Down</h2>

      <p>Between 2022 and 2024, Florida car insurance rates became some of the most expensive in the country. Nationally, rates rose 12% in 2023 and another 16.5% in 2024. Florida got hit even harder — at one point, average full coverage in the state was 55% above the national average, making it the most expensive state in the country for car insurance.</p>

      <p>The good news: that's changing. Florida's top auto insurers are now indicating an average rate decrease of 6.5% for 2025, a dramatic reversal from the 31.7% average increase seen in 2023. Major carriers including GEICO, Progressive, and State Farm have filed for rate reductions of 10.5%, 8.1%, and 6% respectively.</p>

      <p>But here's the catch: those decreases don't automatically land in your account. Insurance companies aren't in the habit of calling customers to offer them less money. If you haven't actively reviewed your policy — or if you've been with the same company for years without shopping — there's a good chance the market has moved without you.</p>

      <p>The Sarasota drivers who are paying less right now are the ones who made a phone call.</p>

      <h2>Why Most Sarasota Drivers Are Still Paying 2023 Prices</h2>

      <p>When I sit down with someone for a policy review, I'm rarely looking at a dramatic problem. I'm usually looking at a policy that made perfect sense when it was set up — and just never got updated.</p>

      <p>The most common scenario I see is a couple who moved to Sarasota from somewhere in the Midwest or Northeast, set up their insurance when they arrived, and have been auto-renewing ever since. They're retired now. They're not commuting anymore. The car they insured six years ago at $28,000 might be worth $9,000 today. Their driving life has changed fundamentally — but the policy is still priced for the life they had when they got here.</p>

      <p>That's not negligence. That's just how insurance works when no one's paying attention. The carrier isn't going to call you and say "hey, you qualify for a lower rate now." That call doesn't happen.</p>

      <p>The mileage question is the first thing I look at. Drivers 65 and older average around 7,600 miles a year — roughly half what someone in their working years drives. If your insurer is still pricing you as a higher-mileage driver, you're overpaying for risk you're no longer carrying. Low-mileage discounts exist specifically for this, and some usage-based programs will track your actual driving and reduce your rate accordingly. Most people I talk to have never had this conversation with their insurer.</p>

      <p>The second thing I look at is the vehicle value relative to the deductible structure. When a car depreciates to the point where the math on full coverage stops working — and that threshold is generally somewhere around $5,000–$6,000 in current market value — continuing to pay collision and comprehensive premiums is effectively self-insurance at a bad price. You're paying the insurer to protect a claim that, after your deductible, would net you very little. Whether that threshold applies to your specific vehicle is something I can tell you in five minutes with a current valuation.</p>

      <p>The deductible itself is another lever most people have never touched. A $250 or $500 deductible made sense when it was set — low uncertainty, conservative choice. But if you have a comfortable emergency fund and a clean claims history, raising that deductible to $1,000 can meaningfully reduce your monthly premium. That's a structural change to the policy, not a coverage reduction, and it's one of the most straightforward adjustments available.</p>

      <p>The last thing — and this is the one that surprises people most — is the Florida defensive driving course discount. State law requires auto insurers to offer a discount to drivers 55 and older who complete an approved course. The discount is real, it's mandated, and it's valid for three years. The course takes a few hours and can be done online. In my experience, the majority of drivers who qualify for this discount have never taken advantage of it, often because they simply didn't know it existed.</p>

      <p>None of these are exotic. They're basic structural questions that a policy sitting on auto-renew for several years will never answer on its own.</p>

      <h2>What Sarasota Drivers in Their 60s and 70s Actually Pay</h2>

      <p>According to local rate data, drivers in their 60s in Sarasota pay around $159 per month on average for car insurance. Drivers in their 70s pay closer to $203 per month — rates do tick up again with age, and that's a real factor worth understanding honestly. The same dynamics apply to drivers throughout Manatee County, including <a href="/insurance-bradenton-fl">Bradenton</a>, where many residents share similar retirement and commuting patterns.</p>

      <p>But those are averages. They include people who haven't shopped, haven't asked about discounts, and haven't adjusted their coverage as their cars aged and their driving changed. The drivers paying below those averages aren't lucky — they made a call.</p>

      <p>If you're paying significantly more than these figures, that's a concrete signal. If you're paying less but haven't reviewed your coverage in years, you may be under-covered in ways that matter. Either way, a conversation with a local agent takes fifteen minutes and costs nothing.</p>

      <h2>Where the Savings Usually Come From</h2>

      <p>No single discount makes a dramatic difference on its own. What changes the number meaningfully is when two or three apply at the same time and nobody's been tracking them.</p>

      <p>The mature driver discount is the one that surprises people most because it's legally required and almost universally unclaimed. Florida mandates that insurers offer it to drivers 55 and older who complete an approved defensive driving course. The discount is valid for three years. The course takes a few hours and can be done online. Most carriers will not remind you it exists.</p>

      <p>Mileage is the next lever. If you're retired and your car is used primarily for errands, appointments, and occasional longer trips rather than a daily commute, you're likely under 7,500 miles a year — and most carriers have a discount tier for exactly that. Usage-based programs go further, monitoring actual driving behavior and rewarding safe, low-mileage drivers with reductions that can reach 25–30%. If your policy was set up when you were still working, it was almost certainly not priced around retirement mileage.</p>

      <p>Then there's <a href="/bundle-insurance-sarasota-fl">bundling</a>. If your homeowner's insurance and <a href="/auto-insurance-sarasota-fl">auto insurance</a> are with different carriers, that's one of the cleanest savings available — and one of the most commonly overlooked, because most people set up their policies at different times without thinking about the relationship between them. Running both through a single carrier typically earns a discount on each.</p>

      <p>A clean claims history should also be working in your favor. If you haven't filed in several years, most carriers have a credit for it. Whether that credit is actually on your policy is worth confirming.</p>

      <p>None of these require anything complicated. They require someone to actually look at the policy and ask the right questions — which is what a review is for.</p>

      <h2>What a Policy Review Actually Looks Like</h2>

      <p>If the word "review" sounds like an excuse to sell you something, here's what it actually is.</p>

      <p>It's a 15–20 minute conversation. No paperwork upfront. A local agent looks at your current policy — what coverage you have, what you're paying, and what your driving life actually looks like today. They ask a few questions: how many miles do you drive, do you own your home, when's the last time you compared rates, have you had any claims.</p>

      <p>Then they tell you honestly what they find. Sometimes there's a meaningful opportunity to restructure coverage or find a better rate. Sometimes the policy is already well-suited to the situation and the answer is: you're fine, keep what you have.</p>

      <p>Either way, you leave knowing the answer — which is more than most people have.</p>

      <p>One Sarasota couple came in recently expecting nothing. He was 68, retired, driving maybe 6,000 miles a year. She was 65, same situation. They had been with the same carrier for nine years, auto-renewing without looking. After a review, their deductible structure was adjusted, a low-mileage discount was applied that had never been on the policy, and they bundled with their home insurance. They ended up with broader coverage — including better protection against uninsured drivers, which matters in Florida — and a lower monthly bill. No magic. Just a policy that fit how they actually live.</p>

      <p>That's not the exception. That's what happens when someone finally looks.</p>

      <h2>The One Thing Worth Doing Before Your Next Renewal</h2>

      <p>You don't need to do anything dramatic. You don't need to spend hours comparing quotes online or fill out forms on six different websites.</p>

      <p>You need one conversation with a local agent who knows the Sarasota market, knows what discounts are actually available, and can look at your current policy with fresh eyes.</p>

      <p>If something's off, they'll find it. If nothing's off, you'll have the peace of mind of knowing your coverage is solid going into another year.</p>

      <div style="background:#f0f7ff;border-left:4px solid #1a56db;padding:1.5rem 2rem;margin:2rem 0;border-radius:0 8px 8px 0;">
        <p style="margin:0 0 0.5rem;font-weight:700;font-size:1.1rem;">Find out in 15 minutes.</p>
        <p style="margin:0 0 1rem;">Cody Lamb is a licensed insurance agent based in Sarasota. He reviews car insurance policies at no cost and no obligation — just a straight answer about whether your policy still makes sense for your life.</p>
        <a href="/#contact" style="display:inline-block;background:#1a56db;color:#fff;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;font-weight:600;">Get a Free Policy Review →</a>
      </div>

      <p><em>Cody Lamb is a licensed insurance agent serving Sarasota and the surrounding area. He specializes in helping Florida residents find coverage that fits their life — not the life they had when they first moved here.</em></p>
    `,
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
