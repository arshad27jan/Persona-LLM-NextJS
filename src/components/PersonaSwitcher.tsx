'use client'
import { PersonaId } from '@/lib/types'

export default function PersonaSwitcher({ value, onChange }:{ value: PersonaId, onChange: (p: PersonaId)=>void }) {
  return (
    <div className="flex gap-2 items-center">
      <label className="text-sm text-white/80">Persona</label>
      <select className="select" value={value} onChange={e=>onChange(e.target.value as PersonaId)}>
        <option value="hitesh">Hitesh Choudhary</option>
        <option value="piyush">Piyush Garg</option>
      </select>
    </div>
  )
}
