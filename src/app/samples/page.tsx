export default function Samples() {
  return (
    <main className="grid gap-6">
      <section className="card p-6">
        <h2 className="text-xl font-semibold mb-2">Sample Chats</h2>
        <p className="text-white/70 text-sm">A few seeded examples you can try in the Chat.</p>
      </section>

      <section className="card p-6">
        <h3 className="font-semibold mb-2">Hitesh persona — Prompt ideas</h3>
        <ul className="list-disc ml-6 space-y-1 text-white/90">
          <li>“React Hooks ko simple words mein samjhao.”</li>
          <li>“Mera roadmap banao for JS → React → Job ready, bhai.”</li>
          <li>“Git kaise seekhun quickly? Common mistakes bhi batao.”</li>
        </ul>
      </section>

      <section className="card p-6">
        <h3 className="font-semibold mb-2">Piyush persona — Prompt ideas</h3>
        <ul className="list-disc ml-6 space-y-1 text-white/90">
          <li>“Mere SaaS ke liye MVP plan banao; ship fast wale steps.”</li>
          <li>“System design for URL shortener — crisp and to-the-point.”</li>
          <li>“Startup metrics ka lightweight dashboard suggest karo.”</li>
        </ul>
      </section>
    </main>
  )
}
