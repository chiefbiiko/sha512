import { runIfMain, test } from "https://deno.land/x/testing/mod.ts";
import { assert } from "https://deno.land/x/testing/asserts.ts";

import { SHA512 } from "./mod.ts";

test(function self() {
  assert(new SHA512().selftest());
});

// TODO: test vectors

runIfMain(import.meta)
