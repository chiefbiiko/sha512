import {
  runTests,
  test,
  assert,
  equal
} from "https://deno.land/x/testing/mod.ts";

import { SHA512 } from "./mod.ts";

test(function self() {
  assert(new SHA512().selftest());
});

// TODO: test vectors

runTests();
