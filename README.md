# Gevas International

Gevas International is a premium, state-of-the-art web application for a leading engineering and construction conglomerate headquartered in Nairobi, Kenya. Established in 1999, the company delivers world-class infrastructure, commercial developments, residential towers, industrial projects, and water management solutions across East Africa and globally.

---

## 🚀 Tech Stack

- **Core**: React 18, TypeScript, Vite 7
- **Styling**: Tailwind CSS v3.4 (with shadcn/ui custom theme structure)
- **Routing**: React Router DOM
- **Animations**: Framer Motion (for smooth micro-animations, fade-ins, and timelines)
- **Icons**: React Icons (lucide/feather icons support)

---

## 📁 Project Structure

```bash
gevas/
├── public/                 # Static assets (images, logos, icons)
├── src/
│   ├── components/
│   │   ├── layout/         # Layout components (Navbar, Footer, Layout wrapper)
│   │   ├── sections/       # Reusable page sections (Stats, Call to Action)
│   │   ├── shared/         # Common UI shared elements (SectionTitle, etc.)
│   │   └── ui/             # UI Components (Buttons, Cards, Inputs, Selects)
│   ├── data/
│   │   └── siteData.ts     # Centralized, fully configurable site data and content
│   ├── pages/              # Routed pages (Home, About, Services, Projects, Careers, etc.)
│   ├── App.tsx             # Root page routing configuration
│   ├── index.css           # Global design system variables & utility styles
│   └── main.tsx            # React entry point
├── tailwind.config.js      # Custom theme settings (brand-blue, brand-gold, etc.)
└── vite.config.ts          # Vite configuration
```

---

## ✨ Features

1. **Modern Premium Design**: Glassmorphism elements, custom tailwind color tokens, curated fonts, and polished hover states.
2. **Data-Driven Content**: All page content, projects, team members, testimonials, jobs, and milestones are managed in [siteData.ts](file:///c:/Users/brian/PROJECTS/gevas/src/data/siteData.ts) for easy maintenance.
3. **East Africa Focused Portfolio**: Featured projects include:
   - *Nairobi Expressway Expansion Link* (Nairobi, Kenya)
   - *Kigamboni Bridge Expansion* (Dar es Salaam, Tanzania)
   - *Garissa Solar Power Plant* (Garissa, Kenya)
   - *Kigali Heights Commercial Complex* (Kigali, Rwanda)
   - *Nyali Ocean Crest Residences* (Mombasa, Kenya)
   - *Katosi Water Treatment Plant* (Kampala, Uganda)
4. **Interactive Subsystems**: Fully responsive navigation, filterable portfolio search, expandable FAQ sections, interactive job details drawer, and fully styled forms (Contact, Quote requests).

---

## 🛠️ Development & Commands

To get the site running locally:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Dev Server
```bash
npm run dev
```
*The dev server will run locally (typically at `http://localhost:5173`).*

### 3. Build for Production
```bash
npm run build
```

---

## 📞 Contact Information

- **HQ Address**: Nairobi, Kenya
- **Phone**: +254 728 932651
- **Email**: [info@gevasinternational.co.ke](mailto:info@gevasinternational.co.ke)
- **Website**: [gevasinternational.co.ke](https://gevasinternational.co.ke)
