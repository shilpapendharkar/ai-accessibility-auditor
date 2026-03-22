
# AI Accessibility Auditor – Senior Frontend Architect Demo

**AI-first tool for auditing React JSX components for accessibility (WCAG-compliant) and providing actionable improvements.**

This project demonstrates **scalable frontend architecture, AI integration, and SaaS-level UX**, built as a portfolio-ready proof-of-concept suitable for EU recruiters evaluating senior engineers.

---

## 🌟 Highlights

- **AI-Integrated Accessibility Auditing**  
  Uses OpenAI GPT-4o-mini to analyze JSX/TSX for accessibility issues and provide automated refactoring suggestions.

- **Preloaded Example Snippets & Interactive Editor**  
  Users can instantly test common UI components. Built using **Monaco Editor** for a VSCode-like developer experience.

- **SaaS-Level UX & Architecture**  
  - Dashboard with audit history  
  - Modular, reusable components  
  - Copy/download improved code  
  - Scalable Next.js app structure  

- **Production-Oriented Code Practices**  
  - Environment-variable management for API keys  
  - Component-driven design  
  - TypeScript-ready  
  - Tailwind CSS for maintainable styling  

---

## 🛠️ Tech Stack & Architecture Decisions

- **Next.js + React 18:** Modern SSR + client-side architecture  
- **Monaco Editor:** Inline code editing with syntax highlighting  
- **OpenAI GPT-4o-mini:** AI analysis engine  
- **Tailwind CSS:** Scalable, utility-first styling  
- **Vercel Deployment:** Fast CI/CD for portfolio demo  
- **Folder Structure Designed for Scaling**  
  ```
  /app          → Pages & layouts
  /components   → Reusable UI elements
  /lib          → API clients, example snippets, utilities
  /api          → Serverless routes for AI calls
  /styles       → Tailwind + global styles
  ```

---

## 💡 Key Features

- **Real-Time JSX Audit:** Analyze code and highlight accessibility violations.  
- **Improved JSX Output:** AI refactoring suggestions for alt tags, ARIA, semantic HTML.  
- **Dashboard & History:** Review past audits, making it closer to a production SaaS.  
- **Preloaded Examples:** Login forms, buttons, hero sections ready to audit.  
- **Copy / Download / Share:** Allows actionable results immediately.  

---

## 🧠 Senior-Level Learnings / Decisions

- Integrated **AI auditing into a modular, scalable frontend architecture**.  
- Designed **SaaS-like UX for a portfolio-ready demo** in under 3 hours.  
- Applied **component-driven design** principles with Tailwind CSS for reusability.  
- Used **prompt engineering and AI response handling** for real-time actionable insights.  
- Prepared app for **multi-user scalability and future authentication / analytics**.  

---

## 💻 Getting Started

```bash
git clone https://github.com/<your-username>/ai-accessibility-auditor.git
cd ai-accessibility-auditor
npm install
cp .env.local.example .env.local  # Add OPENAI_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📸 Screenshots / Demo

**Dashboard** – Shows recent audits, SaaS-like UX  
**Editor** – Monaco editor with preloaded snippets  
**Audit Result** – AI-generated actionable suggestions  

*(Add actual screenshots)*

---

## 📝 License

Open-source for demo purposes. Adaptable for learning and portfolio showcases.
