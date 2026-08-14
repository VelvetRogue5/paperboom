# Paper Boom! Privacy Site

Static privacy-policy site for Paper Boom! on iOS.

## Pages

- `privacy.html`: public iOS privacy policy suitable for an App Store Connect privacy-policy URL.
- `index.html`: redirects the site root to the privacy policy.

## Current privacy posture

The policy reflects the app configuration reviewed on August 14, 2026: no account requirement, local game saves,
no in-app advertising, no analytics or attribution SDKs, no cross-app tracking, optional App Store purchases, and
user-initiated email support.

Update the policy before release if the app adds cloud saves, accounts, analytics, crash reporting, advertising,
attribution, remote configuration, active migration uploads, new purchase processing, or other data collection.

## Local validation

Run:

```bash
node tools/validate-site.mjs
```
