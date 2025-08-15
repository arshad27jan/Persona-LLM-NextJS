import { ChatMessage } from './types'

export async function callOpenAI(model: string, apiKey: string, messages: ChatMessage[]) {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.6,
      top_p: 1
    })
  })

  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(`OpenAI API error: ${res.status} ${res.statusText} - ${errorText}`)
  }

  const data = await res.json()
  const content = data.choices?.[0]?.message?.content ?? ''
  return content
}
