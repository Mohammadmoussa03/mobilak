import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'

type Props = {
  /** Leave empty to encode the page's own address. */
  url?: string
  title: string
  caption: string
}

/** Rendered large and scaled down so the code stays crisp on high-DPI screens. */
const RENDER_SIZE = 184

export function QrCard({ url, title, caption }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const target = url?.trim() || window.location.href

    let cancelled = false
    QRCode.toCanvas(canvas, target, {
      width: RENDER_SIZE,
      margin: 0,
      color: { dark: '#1b1a18', light: '#ffffff' },
      errorCorrectionLevel: 'M',
    })
      .then(() => {
        // qrcode writes an inline 184px width/height; hand sizing back to CSS.
        canvas.style.width = '100%'
        canvas.style.height = '100%'
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
    }
  }, [url])

  if (failed) return null

  return (
    <div className="a-qr flex items-center gap-[15px] rounded-[18px] border border-ink/[0.055] bg-white/55 px-4 py-[13px]">
      <div className="a-qr-tile grid size-[56px] shrink-0 place-items-center overflow-hidden rounded-[11px] border border-ink/[0.06] bg-white p-[5px]">
        <canvas ref={canvasRef} className="size-full" role="img" aria-label={`QR code for ${title}`} />
      </div>

      <div className="flex min-w-0 flex-col gap-1">
        <span className="text-[12px] font-semibold tracking-[0.11em] text-accent uppercase">
          {title}
        </span>
        <span className="text-[12px] leading-[1.45] text-muted">{caption}</span>
      </div>
    </div>
  )
}
