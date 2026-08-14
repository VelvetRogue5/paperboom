import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pagePaths = [
  "index.html",
  "privacy.html",
  "terms-of-use.html",
  "marketing.html",
  "android/privacy.html",
  "android/terms-of-use.html",
  "android/marketing.html",
  "support/index.html",
];

function read(relativePath) {
  const fullPath = join(root, relativePath);
  assert.ok(existsSync(fullPath), `${relativePath} should exist`);
  return readFileSync(fullPath, "utf8");
}

function includes(file, expected) {
  assert.ok(read(file).includes(expected), `${file} should include ${JSON.stringify(expected)}`);
}

for (const relativePath of pagePaths) {
  const fullPath = join(root, relativePath);
  const html = read(relativePath);
  for (const expected of ["<!doctype html>", "<html lang=\"en\">", "<title>", "name=\"viewport\""]) {
    assert.ok(html.toLowerCase().includes(expected.toLowerCase()), `${relativePath} should include ${expected}`);
  }

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|#)/.test(target)) continue;
    const localTarget = target.split("#", 1)[0].split("?", 1)[0];
    assert.ok(existsSync(resolve(dirname(fullPath), localTarget)), `${relativePath} should resolve ${target}`);
  }
}

includes("index.html", "Paper Boom! | Paper-Craft Cannon Puzzle");
includes("index.html", "1,000");
includes("index.html", "assets/screenshots/05_win.png");
includes("index.html", "android/privacy.html");
includes("index.html", "support/");

includes("privacy.html", "Privacy Policy (iOS) | Paper Boom!");
includes("privacy.html", "No Ads or Tracking");
includes("privacy.html", "Apple's App Tracking Transparency");
includes("privacy.html", "android/privacy.html");
includes("privacy.html", "terms-of-use.html");

includes("terms-of-use.html", "Paper Boom! iOS Terms");
includes("terms-of-use.html", "Apple Media Services Terms and Conditions");
includes("terms-of-use.html", "In-App Purchases");

includes("marketing.html", "App Store Connect");
includes("marketing.html", "Contains ads:</strong> No");
includes("marketing.html", "In-app purchases:</strong> No active purchase processing");

const iosMarketing = read("marketing.html");
for (const [id, max] of [["subtitle", 30], ["promotional-text", 170], ["keywords", 100], ["app-store-description", 4000]]) {
  const match = iosMarketing.match(new RegExp(`<pre id="${id}"[^>]*>([\\s\\S]*?)<\\/pre>`));
  assert.ok(match, `marketing.html should include #${id}`);
  assert.ok(match[1].trim().length <= max, `${id} should be at most ${max} characters`);
}

includes("android/privacy.html", "Privacy Policy (Android) | Paper Boom!");
includes("android/privacy.html", "Android Permissions and Haptics");
includes("android/privacy.html", "Android Advertising ID");
includes("android/privacy.html", "../privacy.html");
includes("android/privacy.html", "terms-of-use.html");

includes("android/terms-of-use.html", "Paper Boom! Android Terms");
includes("android/terms-of-use.html", "Google Play Terms of Service");
includes("android/terms-of-use.html", "In-App Purchases");

includes("android/marketing.html", "Google Play Console");
includes("android/marketing.html", "Data Safety Draft");
includes("android/marketing.html", "Contains ads:</strong> No");
includes("android/marketing.html", "In-app purchases:</strong> No active purchase processing");

const androidMarketing = read("android/marketing.html");
for (const [id, max] of [["short-description", 80], ["full-description", 4000]]) {
  const match = androidMarketing.match(new RegExp(`<pre id="${id}"[^>]*>([\\s\\S]*?)<\\/pre>`));
  assert.ok(match, `android/marketing.html should include #${id}`);
  assert.ok(match[1].trim().length <= max, `${id} should be at most ${max} characters`);
}

includes("support/index.html", "Paper Boom! Support");
includes("support/index.html", "https://github.com/VelvetRogue5/paperboom/issues");
includes("support/index.html", "contact@flowgames.net");
includes("support/index.html", "../android/marketing.html");

includes("README.md", "https://velvetrogue5.github.io/paperboom/android/privacy.html");
includes("assets/styles.css", ".screenshot-rail");
includes("assets/styles.css", ".platform-switcher");
includes("assets/styles.css", ".copy-block");

assert.ok(existsSync(join(root, ".nojekyll")), ".nojekyll should exist");
includes(".gitignore", ".DS_Store");
assert.ok(statSync(join(root, "assets/app-icon.png")).size > 100_000, "app icon should be a real PNG");

for (const name of ["01_loading.png", "02_home.png", "03_shot.png", "04_rockets.png", "05_win.png"]) {
  const path = join(root, "assets/screenshots", name);
  assert.ok(existsSync(path), `${name} should exist`);
  assert.ok(statSync(path).size > 100_000, `${name} should be a real screenshot`);
}

for (const relativePath of [...pagePaths, "README.md"]) {
  assert.ok(!read(relativePath).includes("Sandpals"), `${relativePath} should not mention Sandpals`);
}

console.log("Paper Boom site validation passed.");
