import { buildSystemPrompt } from '@/lib/personas'

export default function PersonaLab() {
  const hitesh = buildSystemPrompt('hitesh' as any)
  const piyush = buildSystemPrompt('piyush' as any)
  return (
    <main className="grid gap-6">
      <section className="card p-6">
        <h2 className="text-xl font-semibold mb-2">Persona Lab</h2>
        <p className="text-white/70 text-sm">Yahan pe aap prompt blocks dekh sakte ho. Isse aapke constants merge hote hain.</p>
      </section>

      <section className="card p-6">
        <h3 className="font-semibold mb-2">System Prompt — Hitesh</h3>
        <pre className="bg-black/40 p-4 rounded-md overflow-auto text-sm whitespace-pre-wrap">{hitesh}</pre>
      </section>

      <section className="card p-6">
        <h3 className="font-semibold mb-2">System Prompt — Piyush</h3>
        <pre className="bg-black/40 p-4 rounded-md overflow-auto text-sm whitespace-pre-wrap">{piyush}</pre>
      </section>
    </main>
  )
}
