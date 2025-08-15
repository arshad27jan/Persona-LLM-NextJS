import Chat from '@/components/Chat'

export default function Home() {
  return (
    <main className="grid gap-6">
      <section className="card p-6">
        <h2 className="text-xl font-semibold mb-2">Chat</h2>
        <p className="text-white/70 text-sm">Choose a persona and chat. Saare replies **Hinglish** mein aayenge.</p>
      </section>
      <Chat />
    </main>
  )
}
