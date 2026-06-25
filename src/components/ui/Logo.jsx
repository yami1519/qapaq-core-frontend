/**
 * Logo textual de Financiera Qapaq para el Core interno.
 */

export default function Logo({ size = 44, wordmark = true, variant = 'dark' }) {
  const textColor = variant === 'light' ? '#ffffff' : '#111111'
  const subColor = variant === 'light' ? 'rgba(255,255,255,.82)' : '#5f6368'
  // El texto escala con el tamaño del isotipo.
  const nameSize = Math.round(size * 0.5)
  const subSize = Math.max(9, Math.round(size * 0.23))

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <span
        aria-label="Financiera Qapaq"
        role="img"
        style={{
          width: size,
          height: size,
          borderRadius: Math.max(8, Math.round(size * 0.24)),
          background: '#FFD000',
          color: '#111111',
          display: 'grid',
          placeItems: 'center',
          fontWeight: 900,
          fontSize: Math.round(size * 0.58),
          lineHeight: 1,
          boxShadow: variant === 'light' ? '0 0 0 1px rgba(255,255,255,.18)' : '0 8px 18px rgba(17,17,17,.12)',
        }}
      >
        Q
      </span>

      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.04 }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: nameSize,
              color: textColor,
              letterSpacing: '-0.5px',
            }}
          >
            Financiera Qapaq
          </span>
          <span
            style={{
              fontSize: subSize,
              fontWeight: 700,
              color: subColor,
              letterSpacing: '1.2px',
            }}
          >
            CORE FINANCIERO
          </span>
        </span>
      )}
    </span>
  )
}
