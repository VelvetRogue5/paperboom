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

Both platforms' pages reflect the builds reviewed on September 17, 2026: no account requirement, local game saves,
and user-initiated email support.

- **Advertising** — AppLovin MAX rewarded and interstitial ads (banner present but disabled by default). iOS
  mediates AppLovin, Google AdMob, Unity Ads, Vungle (Liftoff), DT Exchange, Mintegral, Pangle (ByteDance),
  BidMachine, and Bigo Ads; Android mediates the same list without Google AdMob and DT Exchange.
- **Analytics and crash reporting** — Firebase Analytics and Crashlytics, keyed to an app-generated device
  identifier (keychain-backed on iOS, app storage on Android).
- **Remote configuration and A/B tests** — Firebase Remote Config.
- **Install measurement** — AppsFlyer (plus the Play Install Referrer on Android), Meta App Events, and install,
  app-open, tutorial, ad-impression, and cumulative ad-revenue reports to `app-d.paperboom.com.ai`, queued on device
  and retried for up to seven days.
- **Tracking** — iOS shows the App Tracking Transparency prompt after first launch and reads the IDFA only after the
  player allows it. On Android, AppLovin, AppsFlyer, and Meta read the Advertising ID where available.
- **In-app purchases** — StoreKit and Google Play Billing: coin packs, bundles, a one-time Starter Pack, and a
  non-consumable Remove Ads, with Restore Purchases in settings. No server-side receipt validation.
  `purchase_result` events go to Firebase, AppsFlyer, and Meta. Product setup lives in the game repo's
  `Documentation/ShopProducts.md`.
- **Notifications** — local reminder notifications only, no remote push.

Public support and privacy email: `velvet_rogue_5@proton.me`.

Update the policies and store declarations before release if the app adds cloud saves, accounts, subscriptions,
active migration uploads, or other data collection.

## Local validation

```bash
node tools/validate-site.mjs
```
