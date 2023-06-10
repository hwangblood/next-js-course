import { RateLimiter } from "limiter";

/* 
 * https://www.npmjs.com/package/limiter
*/

// Allow 3 requests per min. Also understands 'second', 'minute', 'day', or a number of milliseconds
export const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: "min",
  fireImmediately: true,
});
