/**
 * The money rules, kept free of any database import so client components can
 * read them without pulling the libSQL driver into the browser bundle.
 */

/** Cheapest bid that gets a video onto the board. */
export const MIN_BID = 1;

/** Ceiling, so a fat-fingered bid cannot lock the top spot forever. */
export const MAX_BID = 999_999;

/** What it costs to beat the current #1, on top of their amount. */
export const OUTBID_STEP = 1;

/** Smallest raise on a listing you already hold. */
export const RAISE_STEP = 1;

/** What the top spot costs right now, given the leader's amount. */
export function priceOfFirst(topBid: number): number {
  return Math.max(topBid + OUTBID_STEP, MIN_BID);
}
