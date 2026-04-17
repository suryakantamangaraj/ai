
# AIverse Tools — Multi-Page SPA

## Overview
A multi-page React SPA inspired by aiversetools.com's dark cosmic design language, with 6 distinct pages sharing a unified header and footer.

## Design System (from aiversetools.com)
- **Theme**: Dark background (#0a0a1a / deep navy-black) with cosmic particle/constellation effects
- **Primary colors**: Purple gradient (#7c3aed → #a855f7), blue accents
- **Typography**: Clean sans-serif, large hero text with purple gradient
- **Cards**: Dark glass-morphism style with subtle borders
- **Navigation**: Sticky top nav with logo, links, and CTA button

## Shared Components
- **Header**: Logo "AIverse", nav links (Home, Tools, Prompts, Chat), purple CTA button
- **Footer**: Dark footer with links, branding, social icons
- **Layout wrapper**: Consistent max-width container with cosmic background

## Pages

### 1. `/` — Landing Page (replica of aiversetools.com)
- Hero section with large gradient "AIverse" text and animated cosmic particle background
- Subtitle: "Expert-Curated AI Tools Directory"
- Large search bar with placeholder text and search icon
- Quick suggestion chips ("Create Website", "Make A Logo", "Write Blog")
- Featured tools section with cards
- Categories section

### 2. `/tools` — AI Tools Directory (replica of wvw.dev)
- Left sidebar with categories (macOS Apps, iOS Apps, Web Apps, CLI Apps, Developer Tools, Productivity, etc.)
- Search bar at top of sidebar
- Main content area with featured carousel (Staff Pick, Dev Essential, etc.)
- "Best New Apps" grid — two-column layout with app cards showing icon, name, description, tags, star count, and action button (View/Get/Price)
- "Best Paid Apps" section below
- App cards with: icon, title, author badge, description, platform tag, star count, action button

### 3. `/prompts` — Prompts Hub Page
- Hero section with title "AI Prompts"
- Brief description text about prompt engineering resources
- Two large cards/boxes linking to:
  - **"Learn Prompting"** → `/prompts-learn` (with icon and description)
  - **"Prompt Gallery"** → `/prompts-gallery` (with icon and description)

### 4. `/prompts-learn` — Prompt Engineering Guide (replica of promptingguide.ai)
- Top bar with "Prompt Engineering Guide" branding
- Left sidebar with collapsible navigation tree:
  - Prompt Engineering > Introduction, LLM Settings, Basics of Prompting, Prompt Elements, General Tips, Examples
  - Prompting Techniques > Zero-shot, Few-shot, Chain-of-Thought, Meta Prompting, Self-Consistency, etc.
- Main content area with markdown-style article content
- "Related Learning" cards at bottom (course cards)
- Search bar in header (CTRL+K)
- All content is static/hardcoded sample text

### 5. `/prompts-gallery` — Prompt Collection (replica of prompts.chat)
- Header nav: Prompts, Skills, Taste, Workflows, Categories, Tags
- Hero: "The Free Social Platform for AI Prompts" with colorful gradient text
- Search bar for prompts
- Industry tag grid (Teachers, Freelancers, Doctors, Translators, etc.)
- Client buttons (Command Line, App Store, Extension)
- Sponsor logos bar
- Scrollable prompt cards list with: title, description, copy button, category tags
- Footer with stats (GitHub stars, etc.)

### 6. `/chat` — AI Chat Interface (replica of Copilot)
- Minimal left icon sidebar (Discover, Shopping, Imagine, Labs icons)
- Large centered area with warm beige/cream background
- Greeting: "Hi there. What should we dive into today?"
- Chat input box with placeholder "Message Copilot"
- Mode selector dropdown ("Smart")
- Quick action chips below input (Create an image, Improve writing, Draft an email, etc.)
- Frontend-only — typing shows a mock response or just stays as UI

## Technical Approach
- React Router for all routes in SPA
- Shared `Layout` component wrapping all pages (header + footer)
- Static JSON data files for tools, prompts, sidebar nav items
- Modular components per page (e.g., `ToolCard`, `PromptCard`, `Sidebar`, `ChatInput`)
- Tailwind CSS with custom dark theme tokens
- Animated particle/constellation background using CSS or a lightweight canvas component
- All content hardcoded — no backend needed
