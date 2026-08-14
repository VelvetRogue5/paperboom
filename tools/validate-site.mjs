import { access, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pages = ["index.html", "privacy.html"];
const failures = [];

for (const page of pages) {
  const fullPath = resolve(root, page);
  const html = await readFile(fullPath, "utf8");

  for (const required of ["<!doctype html>", "<title>", "name=\"viewport\""]) {
    if (!html.toLowerCase().includes(required.toLowerCase())) {
      failures.push(`${page}: missing ${required}`);
    }
  }

  const attributePattern = /(?:href|src)="([^"]+)"/g;
  for (const match of html.matchAll(attributePattern)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|#)/.test(target)) {
      continue;
    }

    const localTarget = target.split("#", 1)[0].split("?", 1)[0];
    try {
      await access(resolve(dirname(fullPath), localTarget));
    } catch {
      failures.push(`${page}: missing local target ${target}`);
    }
  }
}

const privacy = await readFile(resolve(root, "privacy.html"), "utf8");
for (const requiredText of [
  "Paper Boom!",
  "Last updated: August 14, 2026",
  "contact@flowgames.net",
  "No Ads or Tracking",
  "In-App Purchases",
]) {
  if (!privacy.includes(requiredText)) {
    failures.push(`privacy.html: missing required text: ${requiredText}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Paper Boom privacy site validation passed.");
}
