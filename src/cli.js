/**
 * Supports:
 *   - mm happy
 *   - mm --list
 *   - mm --random
 *   - mm --help
 */

import { getMoodArt, listMoods, normalizeInput } from "./engine.js";

/**
 * Map short flags to long flags
 */
const FLAG_ALIASES = {
  "-h": "--help",
  "-l": "--list",
  "-r": "--random",
};

/**
 * Normalize flags so CLI logic only deals with long flags
 */
function normalizeFlags(flags) {
  const normalized = new Set();
  for (const f of flags) {
    normalized.add(FLAG_ALIASES[f] ?? f);
  }
  return normalized;
}

function printHelp() {
  console.log(
    `
mm — print an ASCII mood

Usage:
  mm <mood>
  mm --random | -r
  mm --list | -l
  mm --help | -h

Examples:
  mm happy
  mm sleepy
  mm --random
  mm -r
  mm --list
  mm -l
  mm --help
  mm -h
`.trim(),
  );
}

function parseArgs(argv) {
  const flags = new Set();
  const positional = [];

  for (const arg of argv) {
    if (arg.startsWith("-")) flags.add(arg);
    else positional.push(arg);
  }

  return { flags, positional };
}

export function runCli(argv) {
  let { flags, positional } = parseArgs(argv);

  flags = normalizeFlags(flags);

  // Help
  if (flags.has("--help")) {
    printHelp();
    process.exit(0);
  }

  // List moods
  if (flags.has("--list")) {
    console.log(listMoods().join("\n"));
    process.exit(0);
  }

  // Random mood
  if (flags.has("--random")) {
    const moods = listMoods();
    const mood = moods[Math.floor(Math.random() * moods.length)];
    const res = getMoodArt(mood);
    console.log(res.art);
    process.exit(0);
  }

  // Mood from positional argument
  const moodInput = positional.join(" ");

  if (!moodInput) {
    console.error("Error: No mood specified. Use --help for usage.");
    process.exit(1);
  }

  const res = getMoodArt(moodInput);
  if (!res.ok) {
    console.error(`Error: ${res.error}`);
    process.exit(1);
  }

  console.log(res.art);
}
