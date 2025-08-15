import { NextRequest, NextResponse } from 'next/server'
import { buildSystemPrompt } from '@/lib/personas'
import { callOpenAI } from '@/lib/openai'
import { ChatRequest, ChatMessage } from '@/lib/types'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as ChatRequest
    const persona = body.persona || 'hitesh'
    const sys = buildSystemPrompt(persona)

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing OPENAI_API_KEY' }, { status: 500 })
    }
    const model = process.env.OPENAI_MODEL || 'gpt-4o-mini'

    // Always ensure language instruction present too
    const systemMsg: ChatMessage = { role: 'system', content: sys }
    const messages: ChatMessage[] = [systemMsg, ...body.messages]

    const reply = await callOpenAI(model, apiKey, messages)
    return NextResponse.json({ reply })
  } catch (e: any) {
    return NextResponse.json({ error: e.message ?? 'Unknown error' }, { status: 500 })
  }
}
