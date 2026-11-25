// The Excuse That Almost Works — make.fun bounty
// u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
//
// Writes one line — the excuse a gamer texts the boss to skip work
// during GTA 6 launch week — to /output/entry.txt.
//
// Why this line: a tired manager has heard every wild story twice, so the
// excuse that almost works is a boring, specific, verifiable-sounding
// workplace-adjacent detail. Council roadworks towing a car off a
// residential street is real, mundane, and out of the sender's control —
// and it carries its own quiet joke: the street itself conspired against
// the commute. Short, hurried, plain words, no setup, no signature.
// 16 words, 99 characters, one line.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry, the council's resurfacing our street tomorrow and they've towed my car, I can't get in.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
