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
    // wa.me takes digits only — no "+", spaces, or dashes.
    whatsapp: 'https://wa.me/96170794979',
  },

  /** The secondary line inside each button. Set to "" to hide one. */
  handles: {
    instagram: '@mobilak',
    tiktok: '@mobilak',
    whatsapp: 'Chat with us now',
  },

  /** The small footer line. Set to "" to hide it. */
  footnote: 'Your trusted mobile destination',
} as const

export type SocialConfig = typeof socialConfig
