# ✨ Surya Singularity

> **One place for all AI solutions.**

An open-source AI hub that combines curated AI tools, prompt engineering resources, and a unified chat interface with open-source models — all in one beautiful platform.

🌐 **Live:** [ai.suryaraj.com](https://ai.suryaraj.com)

---

## 🎯 Features

### 🔧 AI Tools Directory
Discover and explore 50+ curated AI tools across categories — text, image, code, audio, video, and more.

### 📖 Prompts
- **Learn Prompting** — Structured learning path from basics to advanced techniques
- **Prompt Templates** — Ready-to-use templates with variable slots

### 💬 Chat
Unified chat interface with multiple open-source AI models:
- Llama 3.3 70B (via Groq)
- Mixtral 8x7B (via Groq)
- DeepSeek-V3 (via Together AI)
- **"Refine Input"** — AI-powered prompt enhancement before sending

---

## 🛠️ Tech Stack

| Layer | Technology |
|:---|:---|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Database** | Neon PostgreSQL |
| **ORM** | Drizzle |
| **Auth** | Auth.js v5 |
| **AI** | Vercel AI SDK + Groq + Together AI |
| **Deployment** | Vercel |
| **Icons** | Lucide React |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Setup

```bash
# Clone
git clone https://github.com/suryakantamangaraj/ai.git
cd ai

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your values (see .env.example for docs)

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Landing page
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Design system + Tailwind
│   ├── tools/              # AI Tools directory
│   ├── prompts/            # Prompts section
│   ├── learn-prompt/       # Learning path
│   ├── prompt-templates/   # Template gallery
│   ├── chat/               # Chat interface
│   └── api/                # API routes
├── components/
│   ├── layout/             # Header, Footer
│   ├── ui/                 # Reusable UI components
│   └── ...                 # Feature components
└── lib/                    # Utilities, DB, Auth config
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repo
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

[MIT](LICENSE) © [Surya Raj](https://suryaraj.com)
