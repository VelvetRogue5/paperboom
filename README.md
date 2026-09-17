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

The iOS pages reflect the iOS build reviewed on September 17, 2026; the Android pages still reflect the review of
August 26, 2026. Both platforms have no account requirement, local game saves, and user-initiated email support.

- **Advertising** — AppLovin MAX rewarded and interstitial ads (banner present but disabled by default). The iOS
  build mediates AppLovin, Google AdMob, Unity Ads, Vungle (Liftoff), DT Exchange, Mintegral, Pangle (ByteDance),
  BidMachine, and Bigo Ads.
- **Analytics and crash reporting** — Firebase Analytics and Crashlytics, keyed to an app-generated device
  identifier (keychain-backed on iOS, app storage on Android).
- **Remote configuration and A/B tests** — Firebase Remote Config.
- **Install measurement** — AppsFlyer, Meta App Events, and install, app-open, tutorial, ad-impression, and
  cumulative ad-revenue reports to `app-d.paperboom.com.ai`, queued on device and retried for up to seven days.
- **Tracking (iOS)** — the App Tracking Transparency prompt is shown after first launch; the IDFA is read and shared
  only after the player allows it.
- **In-app purchases (iOS)** — StoreKit coin packs, bundles, a one-time Starter Pack, and a non-consumable Remove
  Ads, with Restore Purchases in settings. No server-side receipt validation. `purchase_result` events go to
  Firebase, AppsFlyer, and Meta.

The Android pages do not yet cover AppsFlyer, Meta, or in-app purchases.

Public support and privacy email: `velvet_rogue_5@proton.me`.

Update the policies and store declarations before release if the app adds cloud saves, accounts, subscriptions,
active migration uploads, or other data collection.

## Local validation

```bash
node tools/validate-site.mjs
```
