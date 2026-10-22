# The Royal Purnama — frontend portfolio

A React interface study by Seggy Ferdianza Agustin, UI/UX Designer & Web Developer. Explore villa filters, room details, dining, wellness, offers, and browser-only enquiry drafts.

This is a portfolio prototype, not the official hotel booking service. Reservations open the hotel's existing booking website. The contact form prepares an email draft; it does not submit or store personal data.

## Run locally

Use Node.js 22 or newer:

```sh
npm install
npm test
npm run dev
```

Open http://127.0.0.1:5173/. Use `npm run build` for a static build in `dist/`, then `npm run preview` to inspect it. The development server binds to loopback.

## External assets

This source edition contains no hotel photographs, videos, PDF files, proprietary font files, dependency archives, or old screenshots. Image URLs are recorded in `src/media.json` and source attribution in `docs/media-sources.json`; document URLs are in `src/documents.json`. The video is loaded from the hotel's existing CDN. No asset is uploaded to a new third-party service by this project.

Arial and Georgia replace the proprietary fonts in this edition. Layout and text wrapping may differ from the private design review.

External files remain owned and served by their respective providers. Linking does not grant reuse rights. Their availability and permission for hotlinking must be confirmed with the hotel before a public website launch. A browser can save any media it receives; this project does not promise download prevention.

## Verification and limits

The automated checks cover filtering, source mapping, email encoding, and font tokens. Build verification checks the source bundle. A successful build does not verify all external URLs, hotel prices, reservation transactions, video captions, accessibility, or production security. There is no backend or payment processor in this repository.

This edition starts with a new Git history so that the original private repository's media and screenshots are not published. The original repository is maintained separately.
