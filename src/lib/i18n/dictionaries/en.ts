/**
 * The source dictionary. Every other language is typed against this shape, so
 * a missing or renamed key fails the build rather than silently rendering a
 * key name to a reader.
 *
 * Anything with a number in it takes it as a parameter rather than baking it
 * into the sentence — the money rules live in bidding.ts and must not be
 * restated here, where they could drift.
 */
export const en = {
  nav: {
    leaderboard: "Leaderboard",
    categories: "Categories",
    about: "About",
    rules: "Rules",
    terms: "Terms",
    privacy: "Privacy",
    language: "Language",
  },
  footer: {
    tagline: "rank is what you pay.",
    payments:
      "Payments are handled by Dodo Payments. A listing goes on the board once its payment confirms.",
  },
  home: {
    bidSubtitle: "bid by creators to get their work seen",
    videosOnBoard: "{count} videos on the board",
    videoOnBoard: "{count} video on the board",
    clicksDelivered: "{count} click-throughs delivered",
    claimFor: "Claim #1 for",
    startAt: "New videos start at {amount}.",
    bidLess:
      "Bidding less than the top price still puts you on the board — at whatever place that bid can take.",
    noAlgorithm:
      "No algorithm, no subscriber count, no history. The whole ranking is one number, and you set it.",
    seeFull: "See the full leaderboard",
  },
  form: {
    videoLink: "Video link",
    videoLinkHint:
      "YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable, or an .mp4",
    title: "Title",
    titlePlaceholder: "What is this video?",
    category: "Category",
    categoryPlaceholder: "Choose a category",
    pitch: "One-line pitch",
    pitchHint: "Optional — 280 characters",
    pitchPlaceholder: "Why should someone press play?",
    yourBid: "Your bid",
    lowerBid: "Lower bid",
    raiseBid: "Raise bid",
    outbidFor: "Outbid for {amount}",
    startingCheckout: "Starting checkout…",
    incomplete: "Add a video link, a title, and a category to place a bid.",
    alreadyOnBoard:
      "Already on the board? Submit the same link with a higher bid to climb.",
    serverUnreachable: "Could not reach the server. Try again.",
  },
  modal: {
    title: "Confirm this rank",
    subtitle:
      "Check the rank and price, then agree to the Terms of Service to continue.",
    rank: "Rank",
    price: "Price",
    dueNow: "Due now",
    yourVideo: "Your video",
    goesOnBoard:
      "goes on the public board at that rank. Someone else can pay more and take it.",
    paymentTaken:
      "Payment is taken by Dodo Payments on the next screen. The listing goes on the board once the payment confirms.",
    agreeBefore: "I have read and agree to the",
    agreeTerms: "Terms of Service",
    agreeAfter: "of outbid.works",
    cancel: "Cancel",
    continue: "Continue to checkout",
    close: "Close",
  },
  board: {
    trending: "Trending right now",
    all: "All",
    empty: "The board is empty.",
    emptyHint: "Be the first creator on it — any bid takes #1 right now.",
    click: "{count} click",
    clicks: "{count} clicks",
    rankLabel: "Rank {rank}",
  },
  leaderboard: {
    title: "Leaderboard",
    description:
      "Every video on the board, ranked by bid. Ties go to whoever got here first.",
    videos: "Videos",
    totalBid: "Total bid",
    clickThroughs: "Click-throughs",
  },
  categoriesPage: {
    title: "Categories",
    description:
      "Each category is its own race. A quiet one is the cheapest place to be #1.",
    count: "{count} videos · leader at {amount}",
    countOne: "{count} video · leader at {amount}",
    nobody: "Nobody has bid here yet.",
    open: "Open — {amount} takes the top spot.",
  },
  categories: {
    gaming: "Gaming",
    music: "Music",
    tech: "Tech",
    comedy: "Comedy",
    education: "Education",
    film: "Film",
    vlog: "Vlog",
    fitness: "Fitness",
    other: "Other",
  },
  about: {
    title: "Why this exists",
    description:
      "A leaderboard where the only ranking signal is how much you paid to be on it.",
    p1: "A new creator's first problem is not quality. It is that nobody knows the video exists. Recommendation algorithms rank on signals a beginner does not have yet — watch time, subscribers, a back catalogue — so the work that needs discovery the most is the work least likely to get it.",
    p2: "outbid.works replaces all of that with one number. Bid {amount} and you are on the board. Bid more than everyone else and you are #1. No history, no follower count, no cold start. The ranking is legible to everyone looking at it, which is the part algorithms never manage.",
    p3: "Every card shows its click-through count, so a bid is not a black box. You can see exactly what the money bought, and decide whether the next one is worth it.",
    howPaying: "How paying works",
    howPayingBody:
      "Payment is taken by Dodo Payments, who act as merchant of record — card details never reach this site. A listing appears once its payment confirms, at whatever rank the amount earns.",
    readRules: "Read the rules",
  },
  rules: {
    title: "Rules",
    description:
      "outbid.works is a public leaderboard. No ads, no API keys, no revenue share. You pay to stand above everyone else. Rank is what you pay — nothing else.",
    boards: "The boards",
    boardsIntro:
      "One payment ranks you on every board that includes that spend. The boards just look at different windows of time.",
    allTime:
      "is the main board. Rank is everything you have ever paid for that listing. It does not expire.",
    today:
      "is a rolling 24 hours. Each payment counts from the moment you paid, then drops off a day later. Whoever spent the most in that window is #1.",
    daily:
      "is a UTC calendar day — midnight to midnight. The current day stays live until it closes; past days freeze as an archive. Rank is what you spent that day, not the last 24 hours.",
    live: "Live",
    notBuilt: "Not built yet",
    ranking: "How ranking works",
    ranking1:
      "New listings are whole US dollars, {min} minimum, {max} maximum, $1 at a time. Listings already on the board keep their amount until they raise or get outranked.",
    ranking2:
      "Taking #1 costs at least {step} more than the current #1. Paying less still puts you on the board at whatever rank that amount can take. Equal amounts stay in the order they were placed — the older listing keeps the higher rank.",
    ranking3:
      "Already on the list? Enter the same link again and raise your rank. The new amount must be at least {raise} above your current one. Nobody else can take your rank by paying that difference.",
    ranking4:
      "Tracking query strings are ignored, and platform links are keyed by their full path — so two videos on the same site never share a rank.",
    listing: "What you can list",
    listing1:
      "A video. YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable, or a direct video file. Links that do not resolve to a video are rejected at submit time.",
    listing2:
      "Chat and invite links are not allowed — Telegram, WhatsApp, Discord, Messenger, Signal, and similar. The board is for published work, not group chats.",
    listing3:
      "Links to sexual content are not allowed. If it is porn, NSFW, or an adult platform, it does not belong on the board.",
    listing4:
      "Query parameters are stripped from listing links. Affiliate, referral, and tracking URLs will not work.",
    listing5:
      "Link shortener URLs are not allowed. Submit the destination instead.",
    categoriesTitle: "Categories",
    categoriesBody:
      "You pick your own category when you submit. If a listing is in the wrong one, resubmit the same link with the right category — it updates the existing entry rather than creating a second.",
    afterPay: "After you pay",
    afterPay1:
      "Your listing is public. Clicks go to the URL you submitted, without query parameters, and the count is shown on your card.",
    afterPay2:
      "A completed payment is what claims the rank. Payments are not refundable.",
    gaps: "Not built yet",
    gapRefunds:
      "Payment goes through Dodo Payments, but there is no self-serve way to see past payments or ask for a listing to be removed — email us instead.",
    gapBoards:
      "Ranking a rolling day or a calendar day means summing individual payments inside a window, and the schema stores one row per listing with no payment history. Those boards need a second table.",
    gapEnforcement:
      "The chat, adult-content, and link-shortener rules above are policy, not code. Only the video-URL check runs automatically.",
    gapLegal:
      "are drafted, but both still have blanks to fill and neither has been reviewed by a lawyer.",
    whyExists: "Why this exists",
  },
  notFound: {
    code: "404",
    title: "Nothing ranked here",
    description:
      "This page does not exist, or the listing it pointed at was taken down.",
    back: "Back to the board",
    leaderboard: "See the leaderboard",
  },
  complete: {
    title: "Payment received",
    description: "Your listing goes on the board as soon as the payment confirms.",
    p1: "Confirmation usually lands within a few seconds. Open the leaderboard and your video should be there at the rank your bid earned.",
    p2: "If it has not appeared after a minute, do not pay again — email us and we will place it by hand.",
    leaderboard: "See the leaderboard",
    back: "Back to the board",
  },
  legal: {
    englishOnly: "This page is available in English only",
    englishOnlyBody:
      "The Terms of Service and Privacy Policy are legal documents. A machine translation of one can change what it means, so only the English text is binding and only the English text is shown.",
  },
};

/**
 * Values widen to `string` deliberately: with `as const` every English phrase
 * would be its own literal type and no translation could satisfy the shape.
 * Keys stay exact, so a missing or misspelled one still fails the build.
 */
export type Dictionary = {
  [Section in keyof typeof en]: {
    [Key in keyof (typeof en)[Section]]: string;
  };
};
