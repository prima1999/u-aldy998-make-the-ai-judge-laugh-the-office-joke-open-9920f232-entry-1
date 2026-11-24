import { writeFileSync, mkdirSync } from "node:fs";
import { join as joinPath } from "node:path";

const joke = 'My boss said the meeting could have been an email — then scheduled a meeting to discuss the email about the meeting.';

const outDir = process.env["OUTPUT_DIR"] ?? "/output";
mkdirSync(outDir, { recursive: true, mode: 0o755 });
writeFileSync(joinPath(outDir, "entry.txt"), joke, { encoding: "utf8" });
