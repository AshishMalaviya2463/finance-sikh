# Finance Sikh

Static Astro 5 / TypeScript / Tailwind CSS 4 personal-finance education site. Use Node.js 22 LTS or later.

## Commands

`npm install`, `npm run dev`, `npm run check`, `npm test`, `npm run build`, `npm run test:e2e`, and `npm run check:content`.

The content check is deliberately expected to fail until the owner replaces all placeholders, supplies real author information, name, domain, email and Firebase values, and reviews every article. It is a pre-deployment safety gate, not a development build prerequisite.

## Content workflow

Edit Markdown under `src/content/blog/`. This is intentionally one flat blog: do not add category or tag fields. Use original, current primary sources. Review calculations, sources and factual claims before launch; update the article date and note material corrections when appropriate.

## Firebase contact form

Create a Firebase project, register a Web app, create Firestore in production mode, then copy its public web configuration into `.env` from `.env.example`. These web identifiers are not service-account secrets. Deploy restrictive rules with `firebase deploy --only firestore`; `firestore.rules` permits validated creates to `contactMessages` only, never reads. The form stores messages in Firestore; it does not email the owner. Enable Firebase App Check in the Firebase console before launch and configure its web provider. A honeypot is only basic deterrence, not rate limiting. Test rules locally with `firebase emulators:start --only firestore` and the Firebase Rules emulator test tooling before deployment.

## Hosting and launch

Install the Firebase CLI, authenticate to the real owner project, then use `firebase deploy --only hosting,firestore` only after the production content check passes. Connect the real domain in Firebase Hosting, replace `[DOMAIN]`, submit `https://[DOMAIN]/sitemap-index.xml` to Search Console, and verify all policy pages. Add AdSense head code, ad slots and the exact Google-provided `ads.txt` line only after the owner has an approved configuration; do not invent a publisher ID. Update the Privacy Policy if advertising is enabled.

## Selected versions

Astro `^5.13`, Tailwind CSS `^4.1` via `@tailwindcss/vite`, Firebase `^12`, Vitest `^3.2`, and Playwright `^1.55` were selected using current official documentation. The current Tailwind-on-Astro guidance uses the Vite plugin, while sitemap and RSS use the official Astro packages.
