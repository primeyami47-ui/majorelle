/** La coche, tracée à l'apparition (voir .tick dans tokens.css). */
export function Tick({ size = 18, delay = 0, draw = false }: { size?: number; delay?: number; draw?: boolean }) {
  return (
    <svg className={`tick${draw ? ' tick--draw' : ''}`} width={size} height={size} viewBox="0 0 20 20"
         fill="none" aria-hidden="true" style={{ ['--d' as string]: `${delay}ms` }}>
      <path d="M4 10.5 8.2 14.5 16 5.5" stroke="currentColor" strokeWidth="2.4"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function WhatsApp({ size = 18 }: { size?: number }) {
  return (
    <svg className="wa" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.4 3.9c1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  )
}
