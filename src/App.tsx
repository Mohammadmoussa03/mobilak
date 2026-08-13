import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

import { socialConfig } from './config'
import { Instagram, TikTok } from './icons'
import { SocialButton } from './components/SocialButton'
import { QrCard } from './components/QrCard'

const { brandName, subtitle, logo, links, handles, footnote, qr } = socialConfig

export default function App() {
  const [logoBroken, setLogoBroken] = useState(false)

  return (
    <main className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-[radial-gradient(120%_62%_at_50%_-6%,#f7f7f8_0%,#ebebec_46%,#e2e2e4_100%)] px-5 pt-[30px] pb-[calc(30px+env(safe-area-inset-bottom))]">
      {/* Decorative halo drifting behind the column. */}
      <div
        aria-hidden="true"
        className="a-halo pointer-events-none absolute top-[-22%] left-1/2 aspect-square w-[min(132vw,760px)] [translate:-50%_0] bg-[radial-gradient(circle_at_50%_50%,rgba(123,167,220,.3)_0%,rgba(123,167,220,.1)_42%,rgba(123,167,220,0)_68%)]"
      />

      <div className="relative flex w-full max-w-[404px] flex-col gap-[30px]">
        {/* Brand */}
        <header className="flex flex-col items-center gap-[18px] pt-1">
          {logoBroken ? (
            <h1 className="a-logo font-display text-[34px] leading-none font-semibold tracking-[0.02em] text-ink uppercase">
              {brandName}
            </h1>
          ) : (
            <img
              src={logo}
              alt={brandName}
              width={428}
              height={238}
              className="a-logo block h-auto w-[218px] max-w-[68%]"
              onError={() => setLogoBroken(true)}
            />
          )}

          {subtitle ? (
            <div className="flex items-center gap-[11px]">
              <span
                aria-hidden="true"
                className="a-rule a-rule-left h-px w-6 bg-[linear-gradient(90deg,rgba(110,155,212,0),rgba(110,155,212,.6))]"
              />
              <p className="a-tagline font-display text-[12.5px] font-medium tracking-[0.14em] whitespace-nowrap text-muted-strong uppercase">
                {subtitle}
              </p>
              <span
                aria-hidden="true"
                className="a-rule a-rule-right h-px w-6 bg-[linear-gradient(90deg,rgba(110,155,212,.6),rgba(110,155,212,0))]"
              />
            </div>
          ) : null}
        </header>

        {/* The three destinations */}
        {/*
          The entrance sits on a wrapper, not the anchor: an animation with `both`
          fill would otherwise pin the anchor's transform and kill the hover lift.
        */}
        <nav className="flex flex-col gap-[11px]" aria-label={`${brandName} social links`}>
          <div className="a-row a-row-1">
            <SocialButton
              href={links.instagram}
              label="Instagram"
              sublabel={handles.instagram}
              icon={<Instagram size={21} />}
            />
          </div>
          <div className="a-row a-row-2">
            <SocialButton
              href={links.tiktok}
              label="TikTok"
              sublabel={handles.tiktok}
              icon={<TikTok size={21} />}
            />
          </div>
          <div className="a-row a-row-3">
            <SocialButton
              href={links.whatsapp}
              label="WhatsApp"
              sublabel={handles.whatsapp}
              icon={<MessageCircle size={21} strokeWidth={1.7} />}
              variant="accent"
            />
          </div>
        </nav>

        {qr.enabled ? <QrCard url={qr.url} title={qr.title} caption={qr.caption} /> : null}

        {footnote ? (
          <p className="a-footer text-center font-display text-[10.5px] tracking-[0.18em] text-faint uppercase">
            {footnote}
          </p>
        ) : null}
      </div>
    </main>
  )
}
