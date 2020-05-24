import { getRandomQuote } from "./deps.ts";

console.log("\n________QUOTE OF THE DAY________\n");
const quote = getRandomQuote();
console.log(`${quote.text}\n`);
console.log(`${quote.author}\n`);
