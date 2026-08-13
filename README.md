# Mobilak — QR landing page

A single-screen, mobile-first landing page for a QR code. Someone scans the code, lands here,
and gets exactly three ways to reach you: Instagram, TikTok, WhatsApp.

React · Vite · TypeScript · Tailwind CSS v4 · lucide-react. No backend, no database, no CMS.

## Edit everything from one file

`src/config.ts` is the only file you need to touch:

```ts
export const socialConfig = {
  brandName: 'MOBILAK',
  subtitle: 'Connect with us',
  logo: '/logo.png',

  links: {
    instagram: 'https://instagram.com/mobilak',
    tiktok: 'https://tiktok.com/@mobilak',
    whatsapp: 'https://wa.me/961XXXXXXXXX',
  },
  // ...handles, footnote, and the QR card live here too
}
```

- **WhatsApp** — use the `https://wa.me/<number>` form with the country code and no `+`,
  spaces, or dashes. For Lebanon: `https://wa.me/9613123456`.
- **Logo** — replace `public/logo.png`. Anything in `public/` is served from the site root,
  so `public/logo.png` is referenced as `/logo.png`. If the file is missing, the page falls
  back to `brandName` set in the display face.
- **Hiding things** — set `handles.*` or `footnote` to `""`, or `qr.enabled` to `false`.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
```

## Deploy to Vercel

No custom domain needed — the default `*.vercel.app` URL is all this requires.

1. Push the folder to a Git repo (GitHub/GitLab/Bitbucket).
2. On [vercel.com](https://vercel.com) → **Add New… → Project** → import the repo.
3. Vercel detects Vite on its own. Build command `npm run build`, output directory `dist`.
   No environment variables.
4. Deploy. You get a URL like `https://my-social-qr.vercel.app`.

Or from the terminal:

```bash
npx vercel --prod
```

## The QR code

`qr.url` in the config is empty by default, which means the on-page QR card encodes
**whatever address the page is currently served from**. The same code therefore works on
localhost, on a preview deployment, and in production without any edit.

For the QR you actually print on a sticker, card, or shop window, generate it from the
production URL — `https://my-social-qr.vercel.app` — using any generator, or set
`qr.url` to that exact URL and screenshot the card. Two things worth doing:

- Use the **production** URL, not a preview URL. Preview URLs change on every deploy.
- Test the printed code with a phone camera before printing a batch.

## Notes on the design

- The source design sets the tagline and footnote in **Glancyr**, a licensed typeface that
  is not bundled here — those two lines currently fall back to Instrument Sans. To restore
  the original face, drop `Glancyr-Regular.otf` and `Glancyr-Medium.otf` into
  `public/fonts/` and uncomment the `@font-face` block at the top of `src/index.css`.
- `lucide-react` v1 dropped brand marks, so it supplies the chevron and the WhatsApp
  bubble, while the Instagram and TikTok glyphs are drawn in `src/icons.tsx` using lucide's
  own geometry conventions (24×24 box, round caps, `currentColor` stroke) so they sit flush
  with the rest.

## Layout

```
src/
  config.ts                 ← edit this
  App.tsx                   page composition
  icons.tsx                 Instagram + TikTok marks
  index.css                 Tailwind theme tokens
  components/
    SocialButton.tsx        the three cards
    QrCard.tsx              the scan-to-connect card
public/
  logo.png                  ← replace this
```
