import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Fades a block in as it enters the viewport.
 *
 * The element renders visible by default and the observer only ever *adds*
 * the hidden state, so if JS fails or IntersectionObserver is missing the
 * content is still readable — the animation is genuinely progressive.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
}: {
  children: ReactNode
  as?: 'div' | 'section' | 'article' | 'li' | 'header' | 'figure'
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return

    el.classList.add('rv')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).style.transitionDelay = `${delay}ms`
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px 12% 0px', threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Tag ref={ref as any} className={className}>{children}</Tag>
}

export function Arrow() {
  return (
    <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.5 8h11m0 0L9 3.5M13.5 8 9 12.5"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
