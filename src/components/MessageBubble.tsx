import Markdown from './Markdown'
import { ChatMessage } from '@/lib/types'
import clsx from 'clsx'

export default function MessageBubble({ m, i }: { m: ChatMessage, i: number }) {
  const isUser = m.role === 'user'
  return (
    <div className={clsx('w-full my-2 flex', isUser ? 'justify-end' : 'justify-start')}>
      <div className={clsx('max-w-[80%] rounded-lg px-4 py-3', isUser ? 'bg-brand text-white' : 'bg-white/5')}>
        {isUser ? <div className="text-xs opacity-80 mb-1">You</div> : <div className="text-xs opacity-80 mb-1">Assistant</div>}
        <Markdown text={m.content} />
      </div>
    </div>
  )
}
