# Paper Boom! Site

Static GitHub Pages site for Paper Boom!, including the marketing homepage, iOS and Android privacy policies,
platform terms, store-listing copy, and technical support.

## Pages

- `index.html`: public marketing homepage with current gameplay screenshots.
- `privacy.html`: iOS privacy policy for App Store Connect.
- `terms-of-use.html`: iOS terms of use.
- `marketing.html`: App Store marketing copy and submission notes.
- `android/privacy.html`: Android privacy policy for Google Play Console.
- `android/terms-of-use.html`: Android terms of use.
- `android/marketing.html`: Google Play marketing copy and submission notes.
- `support/index.html`: technical support page for both platforms.

## GitHub Pages

In repository settings, enable GitHub Pages using `Deploy from a branch`, branch `main`, and folder `/ (root)`.

- Home: `https://velvetrogue5.github.io/paperboom/`
- iOS privacy: `https://velvetrogue5.github.io/paperboom/privacy.html`
- iOS terms: `https://velvetrogue5.github.io/paperboom/terms-of-use.html`
- iOS marketing: `https://velvetrogue5.github.io/paperboom/marketing.html`
- Android privacy: `https://velvetrogue5.github.io/paperboom/android/privacy.html`
- Android terms: `https://velvetrogue5.github.io/paperboom/android/terms-of-use.html`
- Android marketing: `https://velvetrogue5.github.io/paperboom/android/marketing.html`
- Support: `https://velvetrogue5.github.io/paperboom/support/`

## Current privacy posture

The pages reflect the app configuration reviewed on August 14, 2026: no account requirement, local game saves,
no in-app advertising, no analytics or attribution SDKs, no cross-app tracking, no active store-purchase integration,
Android haptic vibration, and user-initiated email support. Purchase disclosures are written conditionally for future releases.

Public support and privacy email: `velvet_rogue_5@proton.me`.

Update the policies and store declarations before release if the app adds cloud saves, accounts, analytics, crash
reporting, advertising, attribution, remote configuration, active migration uploads, or other data collection.

## Local validation

```bash
node tools/validate-site.mjs
```
