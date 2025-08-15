'use client'
import MarkdownIt from 'markdown-it'
import { useMemo } from 'react'

const md = new MarkdownIt({ linkify: true, breaks: true })

export default function Markdown({ text }: { text: string }) {
  const html = useMemo(() => md.render(text || ''), [text])
  return <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
}
