export function normalizarSemaforo(valor) {
  const estado = String(valor ?? '').trim().toUpperCase()
  return ['VERDE', 'AMARILLO', 'ROJO'].includes(estado) ? estado : null
}

export function colorSemaforo(valor) {
  const estado = normalizarSemaforo(valor)
  if (estado === 'VERDE') return 'var(--c-verde)'
  if (estado === 'AMARILLO') return 'var(--c-amarillo)'
  if (estado === 'ROJO') return 'var(--c-rojo)'
  return null
}
