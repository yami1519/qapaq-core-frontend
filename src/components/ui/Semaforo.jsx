/**
 * Badge de semáforo VERDE / AMARILLO / ROJO.
 * Espeja la lógica de cumplimiento de metas del backend.
 */
import { normalizarSemaforo } from '../../utils/semaforo.js'

const MAP = {
  VERDE: { clase: 'badge--verde', txt: 'VERDE' },
  AMARILLO: { clase: 'badge--amarillo', txt: 'AMARILLO' },
  ROJO: { clase: 'badge--rojo', txt: 'ROJO' },
}

export default function Semaforo({ estado }) {
  const normalizado = normalizarSemaforo(estado)
  const cfg = normalizado
    ? MAP[normalizado]
    : { clase: 'badge--neutral', txt: estado || '—' }
  return <span className={`badge ${cfg.clase}`}>{cfg.txt}</span>
}

