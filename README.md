# Persona LLM • Hinglish (Hitesh & Piyush tones)

Website that lets you chat with two distinct **personas** inspired by the public tones of
**Hitesh Choudhary** (teacher vibe) and **Piyush Garg** (product/startup vibe).  
⚠️ We **do not impersonate** them; this project only *adopts stylistic cues* based on public content.  
All responses come in **Hinglish** (Hindi + English, romanized).

---

## Quickstart

```bash
pnpm i         # or: npm i / yarn
cp .env.example .env.local
# put your OpenAI API key
pnpm dev
# open http://localhost:3000
```

### Routes
- `/` — Chat UI with persona switcher
- `/persona-lab` — See the compiled **system prompts** for each persona
- `/samples` — Sample prompts to try

---

## Where to put your constants

Paste your curated tone cues into:  
`src/data/personas/constants.ts`

These are merged into the system prompt by:  
`src/lib/personas.ts`

You can also bring your own JSON datasets (e.g., from transcripts/tweets) in
`src/data/personas/*.json` and combine them inside `buildSystemPrompt`.

---

## Prompt Logic (high level)

1. We build a **system message** with:
   - Common rules (Hinglish output, safety, structure)
   - Persona block (tone, style, signature phrases pulled from constants)
2. We append the chat history from the user.
3. We call `OpenAI Chat Completions` with `temperature=0.6` for a balanced tone.
4. The UI renders the assistant’s response.

See code: `src/lib/personas.ts`, `src/app/api/chat/route.ts`.

---

## Data Prep (example idea)

- Scrape/collect **public** YouTube transcripts and tweets.
- Clean noise (remove links/mentions), split into phrases.
- Extract **recurring markers** (catchphrases, fillers) and **themes**.
- Save distilled cues into `constants.ts` / JSON files.
- Optionally compute TF-IDF/embeddings to auto-summarize common patterns.

*(A small sample is included in `src/data/personas/*.sample.json`.)*

---

## Notes

- This project is for educational demo purposes.
- Keep tone respectful and avoid misleading claims.
- Extend easily to more personas by adding constants + a case in `buildSystemPrompt`.

Happy hacking! ☕️⚡️
