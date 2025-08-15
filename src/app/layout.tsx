import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Persona LLM • Hinglish',
  description: 'Hitesh & Piyush tone personas powered by LLM',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container py-8">
          <header className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold tracking-tight">
              Persona LLM <span className="text-brand">Hinglish</span>
            </h1>
            <nav className="flex gap-4 text-sm text-white/80">
              <a className="hover:text-white" href="/">Chat</a>
              <a className="hover:text-white" href="/persona-lab">Persona Lab</a>
              <a className="hover:text-white" href="/samples">Samples</a>
            </nav>
          </header>
          {children}
          <footer className="mt-16 text-center text-white/50 text-sm">
            Built for persona mimicry demo — responses come in Hinglish (Hindi+English).
          </footer>
        </div>
      </body>
    </html>
  )
}
