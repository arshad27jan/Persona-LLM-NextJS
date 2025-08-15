'use client'

import { useState } from 'react'
import PersonaSwitcher from './PersonaSwitcher'
import MessageBubble from './MessageBubble'
import { ChatMessage, PersonaId } from '@/lib/types'

export default function Chat() {
  const [persona, setPersona] = useState<PersonaId>('hitesh')
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Haanji! Kya help karun aaj?' }
  ])
  const [input, setInput] = useState('')

  const send = async () => {
    if (!input.trim()) return
    const newThread: ChatMessage[] = [
      ...messages,
      { role: 'user' as ChatMessage['role'], content: input }
    ]
    setMessages(newThread)
    setInput('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ persona, messages: newThread })
      })
      if (!res.ok) throw new Error(await res.text())
      const data = await res.json()
      setMessages([...newThread, { role: 'assistant', content: data.reply }])
    } catch (e:any) {
      setMessages([...newThread, { role: 'assistant', content: `Oops! API error: ${e.message}` }])
    }
  }

  const onKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className="card p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <PersonaSwitcher value={persona} onChange={setPersona} />
        <div className="text-xs text-white/60">
          Responses are in Hinglish; tone depends on selected persona.
        </div>
      </div>

      <div className="h-[50vh] overflow-y-auto border border-white/5 rounded-lg p-3 bg-black/20">
        {messages.map((m, i) => <MessageBubble key={i} m={m} i={i} />)}
      </div>

      <div className="mt-4 flex gap-2">
        <textarea
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder="Type your message... (Shift+Enter for newline)"
          className="input min-h-[48px] flex-1"
          rows={3}
        />
        <button className="btn h-max" onClick={send}>Send</button>
      </div>
    </div>
  )
}
