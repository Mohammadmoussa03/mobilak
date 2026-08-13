/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT EVERYTHING FROM THIS FILE. Nothing else needs touching.
 * ─────────────────────────────────────────────────────────────
 */

export const socialConfig = {
  /** Used for the page title, the logo's alt text, and as a text fallback if the logo image is missing. */
  brandName: 'MOBILAK',

  /** The small uppercase line under the logo. */
  subtitle: 'Connect with us',

  /** Put your file in `public/` and reference it from the site root, e.g. "/logo.png". */
  logo: '/logo.png',

  /** The three destinations. */
  links: {
    instagram: 'https://www.instagram.com/mobilak.lb?igsh=MTM4ZzFnbmpzZnZqZw==',
    tiktok: 'https://tiktok.com/@mobilak',
    whatsapp: 'https://wa.me/+96170794979',
  },

  /** The secondary line inside each button. Set to "" to hide one. */
  handles: {
    instagram: '@mobilak',
    tiktok: '@mobilak',
    whatsapp: 'Chat with us now',
  },

  /** The small footer line. Set to "" to hide it. */
  footnote: 'Your trusted mobile destination',

  /**
   * The QR card at the bottom of the page.
   *
   * `url` is what the QR code encodes. Leave it empty and the page encodes its
   * own address at runtime — so the same code works on localhost, on a preview
   * deployment, and on the production Vercel URL without any edit. Set it
   * explicitly (e.g. "https://my-social-qr.vercel.app") when you want to print
   * the code from a preview build.
   */
  qr: {
    enabled: true,
    url: '',
    title: 'Scan to connect',
    caption: 'Share this page — point any camera here.',
  },
} as const

export type SocialConfig = typeof socialConfig
