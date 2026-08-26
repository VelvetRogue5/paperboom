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

The pages reflect the app configuration reviewed on August 26, 2026: no account requirement, local game saves,
Android haptic vibration, user-initiated email support, and no active store-purchase integration, plus the data
services the app now ships with:

- **Advertising** — AppLovin MAX rewarded and interstitial ads (banner present but disabled by default), mediating
  AppLovin, Unity Ads, Vungle (Liftoff), Mintegral, Pangle (ByteDance), BidMachine, and Bigo Ads. iOS ad units are
  not live yet, but the SDKs ship in the build and both platform pages are written as ad-supported.
- **Analytics and crash reporting** — Firebase Analytics and Crashlytics, keyed to an app-generated device
  identifier (keychain-backed on iOS, app storage on Android). Not the IDFA; no ATT prompt in this build.
- **Remote configuration and A/B tests** — Firebase Remote Config.
- **Install measurement** — install, app-open, tutorial, ad-impression, and cumulative ad-revenue reports to
  `app-d.paperboom.com.ai`, queued on device and retried for up to seven days.

Purchase disclosures are still written conditionally for future releases.

Public support and privacy email: `velvet_rogue_5@proton.me`.

Two declarations are deliberately left to a human before submission and are flagged on the marketing pages:
whether App Store review requires an App Tracking Transparency prompt now that ad networks receive a device
identifier, and the Google Play Data safety answers for the Advertising ID.

Update the policies and store declarations before release if the app adds cloud saves, accounts, in-app purchases,
an ATT prompt, active migration uploads, or other data collection.

## Local validation

```bash
node tools/validate-site.mjs
```
