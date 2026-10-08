# Bartwrights Boxing — App Build

This project contains the complete static app foundation for Bartwrights Boxing.

## Included
- Responsive mobile-first boxing site
- Working hash navigation and fighter search
- Fighter profiles, rankings, champions, stats and upcoming bout card
- External CSS and JavaScript
- PWA manifest and offline service worker
- App icons and extracted image assets
- Capacitor configuration for Android/iOS packaging
- Fighter data exported to `data/fighters.json` as the starting point for a real database

## GitHub Pages
Upload the contents of this folder to the repository root. Keep the Google verification HTML file in the root.

## Install as a phone app
On a supported browser, open the live GitHub Pages site and use the browser's Install/Add to Home Screen option. The PWA files are already included.

## Native Android/iPhone build
Install Node.js, then from this folder run:

```bash
npm install
npx cap add android
npx cap add ios
npx cap sync
```

Android requires Android Studio. iPhone/iPad builds require macOS + Xcode.

After native projects are created:

```bash
npm run android
npm run ios
```

## Future backend
GitHub Pages is static, so a secure admin login, shared live database and true push notifications need a backend service. `data/fighters.json` is deliberately separated so the data layer can be replaced later without redesigning the app.
