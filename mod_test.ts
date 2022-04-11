import { greet, Greeting } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.134.0/testing/asserts.ts";

Deno.test("greet default", () => {
  const greeting = greet("TypeScript Congress");
  assertEquals(greeting, "Hello TypeScript Congress!");
});

Deno.test("greet hi", () => {
  const greeting = greet("TypeScript Congress", Greeting.Hi);
  assertEquals(greeting, "Hi TypeScript Congress!");
});

Deno.test("greet good evening", () => {
  const greeting = greet("TypeScript Congress", Greeting.GoodEvening);
  assertEquals(greeting, "Good evening TypeScript Congress!");
});
