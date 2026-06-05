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

export type Post = {
  slug: string;
  title: string;
  date: string;        // ISO format: "YYYY-MM-DD"
  excerpt: string;     // 1–2 sentence summary shown on listing page
  thumbnail: string;   // Path relative to /public, e.g. "/blog/image.jpg"
  content: string;     // Full post body as an HTML string
};

export const POSTS: Post[] = [
  // ← Add new posts here. Newest first.
  {
    slug: "am-i-overpaying-car-insurance-sarasota",
    title: "Am I Overpaying for Car Insurance in Sarasota? Here's How to Tell",
    date: "2026-06-05",
    excerpt: "Florida car insurance rates are finally dropping — but only if you're shopping. A Sarasota agent explains what local drivers over 55 are missing and how a free 15-minute review can make a real difference.",
    thumbnail: "",
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

      <p>According to local rate data, drivers in their 60s in Sarasota pay around $159 per month on average for car insurance. Drivers in their 70s pay closer to $203 per month — rates do tick up again with age, and that's a real factor worth understanding honestly.</p>

      <p>But those are averages. They include people who haven't shopped, haven't asked about discounts, and haven't adjusted their coverage as their cars aged and their driving changed. The drivers paying below those averages aren't lucky — they made a call.</p>

      <p>If you're paying significantly more than these figures, that's a concrete signal. If you're paying less but haven't reviewed your coverage in years, you may be under-covered in ways that matter. Either way, a conversation with a local agent takes fifteen minutes and costs nothing.</p>

      <h2>Where the Savings Usually Come From</h2>

      <p>No single discount makes a dramatic difference on its own. What changes the number meaningfully is when two or three apply at the same time and nobody's been tracking them.</p>

      <p>The mature driver discount is the one that surprises people most because it's legally required and almost universally unclaimed. Florida mandates that insurers offer it to drivers 55 and older who complete an approved defensive driving course. The discount is valid for three years. The course takes a few hours and can be done online. Most carriers will not remind you it exists.</p>

      <p>Mileage is the next lever. If you're retired and your car is used primarily for errands, appointments, and occasional longer trips rather than a daily commute, you're likely under 7,500 miles a year — and most carriers have a discount tier for exactly that. Usage-based programs go further, monitoring actual driving behavior and rewarding safe, low-mileage drivers with reductions that can reach 25–30%. If your policy was set up when you were still working, it was almost certainly not priced around retirement mileage.</p>

      <p>Then there's bundling. If your homeowner's insurance and auto insurance are with different carriers, that's one of the cleanest savings available — and one of the most commonly overlooked, because most people set up their policies at different times without thinking about the relationship between them. Running both through a single carrier typically earns a discount on each.</p>

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
        <a href="/contact" style="display:inline-block;background:#1a56db;color:#fff;padding:0.65rem 1.5rem;border-radius:6px;text-decoration:none;font-weight:600;">Get a Free Policy Review →</a>
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
