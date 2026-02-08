#!/usr/bin/env node
// bin/ascii-mood.js
// Thin executable wrapper for the CLI.
// Keeps the actual CLI logic in src/cli.js for testability.

import { runCli } from "../src/cli.js";

runCli(process.argv.slice(2));
