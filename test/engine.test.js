import test from "node:test";
import assert from "node:assert/strict";

import {
  resolveMoodKey,
  getMoodArt,
  listMoods,
  pickOne,
} from "../src/engine.js";

test("listMoods returns non-empty list", () => {
  const moods = listMoods();
  assert.ok(Array.isArray(moods));
  assert.ok(moods.length > 0);
});

test("resolveMoodKey resolves direct mood", () => {
  assert.equal(resolveMoodKey("happy"), "happy");
});

test("resolveMoodKey resolves alias", () => {
  assert.equal(resolveMoodKey("sleepy"), "tired");
});

test("getMoodArt returns error on unknown mood", () => {
  const res = getMoodArt("not-a-real-mood");
  assert.equal(res.ok, false);
  assert.match(res.error, /Unknown mood/i);
});

test("pickOne deterministic with seed", () => {
  const list = ["a", "b", "c"];
  assert.equal(pickOne(list, 0), "a");
  assert.equal(pickOne(list, 1), "b");
  assert.equal(pickOne(list, 2), "c");
  assert.equal(pickOne(list, 3), "a");
});
