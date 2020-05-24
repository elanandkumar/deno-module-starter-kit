import { assertEquals } from "./test_deps.ts";
import { IQuote, getRandomQuote } from "./mod.ts";

Deno.test("Should return a object with quote and author", function test_get_random_quote() {
  const quote: IQuote = getRandomQuote();

  assertEquals(quote.hasOwnProperty("text"), true);
  assertEquals(quote.hasOwnProperty("author"), true);
  assertEquals(typeof quote.text, "string");
  assertEquals(typeof quote.author, "string");
});
