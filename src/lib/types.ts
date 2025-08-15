export type Role = 'system' | 'user' | 'assistant'

export interface ChatMessage {
  role: Role
  content: string
}

export type PersonaId = 'hitesh' | 'piyush'

export interface ChatRequest {
  persona: PersonaId
  messages: ChatMessage[]
}
