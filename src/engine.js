import { MOODS, ALIASES } from "./moods.js";

/**
 * Normalize user input
 */
export function normalizeInput(input) {
  return String(input ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

/**
 * Resolve a mood key from user input
 * - Direct mood: "happy" -> "happy"
 * - Alias mood: "ok" -> "chill" or "sleepy" -> "tired"
 */
export function resolveMoodKey(input) {
  const key = normalizeInput(input);
  if (!key) return null;

  if (MOODS[key]) return key;
  if (ALIASES[key] && MOODS[ALIASES[key]]) {
    return ALIASES[key];
  }
  return null;
}

/**
 * Pick deterministic item using a number of seed (for tests),
 * Otherwise pick random item.
 */
export function pickOne(list, seed = null) {
  if (!Array.isArray(list) || list.length === 0) return null;

  if (typeof seed === "number" && Number.isFinite(seed)) {
    const idx = Math.abs(Math.floor(seed)) % list.length;
    return list[idx];
  }

  return list[Math.floor(Math.random() * list.length)];
}

/**
 * Get an ASCII mood output for a given mood input.
 * Returns:
 *  - { ok: true, moodKey, art }
 *  - { ok: false, error }
 */
export function getMoodArt(input, { seed = null } = {}) {
  const moodKey = resolveMoodKey(input);

  if (!moodKey) {
    return {
      ok: false,
      error: `Unknown mood "${normalizeInput(input)}". Use --list to see available moods.`,
    };
  }

  const art = pickOne(MOODS[moodKey], seed);
  return { ok: true, moodKey, art };
}

/**
 * List the available moods as an array of keys.
 */
export function listMoods() {
  return Object.keys(MOODS).sort();
}
