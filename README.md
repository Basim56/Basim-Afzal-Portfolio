# Basim Afzal — Portfolio

Personal developer portfolio built with **React + Vite**. No CSS frameworks required — all styles are written as inline JS objects backed by a shared theme file.

---

## Project Structure

```
my-portfolio/
├── public/
│   └── Basim_Afzal_CV.pdf        ← put your CV here
│
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx        ← fixed nav + CV download link
│   │   ├── Hero/
│   │   │   └── Hero.jsx          ← full-height landing section
│   │   ├── About/
│   │   │   └── About.jsx         ← professional summary
│   │   ├── Skills/
│   │   │   └── Skills.jsx        ← categorized tech-stack badges
│   │   ├── Experience/
│   │   │   └── Experience.jsx    ← work history card
│   │   ├── Projects/
│   │   │   ├── Projects.jsx      ← section wrapper
│   │   │   └── ProjectCard.jsx   ← individual project card
│   │   ├── Education/
│   │   │   └── Education.jsx     ← academic background
│   │   ├── Contact/
│   │   │   └── Contact.jsx       ← contact links + CV download CTA
│   │   └── Footer/
│   │       └── Footer.jsx        ← site footer
│   │
│   ├── data/
│   │   └── portfolioData.js      ← all content lives here (easy to edit)
│   │
│   ├── styles/
│   │   ├── globals.css           ← reset, fonts, animations, hover classes
│   │   └── theme.js              ← colour palette + shared style objects
│   │
│   ├── App.jsx                   ← root component, scroll-spy logic
│   └── main.jsx                  ← ReactDOM entry point
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Prerequisites

| Tool | Minimum version |
|------|----------------|
| Node.js | 18.x or later |
| npm | 9.x or later (comes with Node) |

Check your versions:

```bash
node -v
npm -v
```

Download Node from https://nodejs.org if you don't have it.

---

## Setup — Step by Step

### 1. Create the project folder and copy these files

```bash
mkdir my-portfolio
cd my-portfolio
```

Copy every file from this zip into the folder, preserving the directory structure shown above.

### 2. Add your CV to the public folder

```bash
# macOS / Linux
cp /path/to/yourBasim_Afzal_CV.pdf publicBasim_Afzal_CV.pdf

# Windows
copy C:\path\to\Basim_Afzal_CV.pdf public\Basim_Afzal_CV.pdf
```

> The CV download buttons in Navbar and Contact link to `Basim_Afzal_CV.pdf`.
> Vite serves everything inside `public/` at the root URL automatically.

### 3. Install dependencies

```bash
npm install
```

This installs React, ReactDOM, Vite, and the Vite React plugin (~50 MB).

### 4. Start the dev server

```bash
npm run dev
```

Open http://localhost:5173 in your browser. Changes save instantly thanks to Vite's HMR.

---

## Building for Production

```bash
npm run build
```

Compiled output lands in `dist/`. Preview it locally before deploying:

```bash
npm run preview
```

---

## Deploying

### Vercel (recommended — free)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite and sets the build command + output dir.

### Netlify

1. Push the project to GitHub.
2. Go to https://app.netlify.com → **Add new site → Import from Git**.
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Add to `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: "/your-repo-name/",   // replace with your GitHub repo name
});
```

Then run:

```bash
npm run deploy
```

---

## Customising Content

All text, lists, and links live in one place:

```
src/data/portfolioData.js
```

Edit that file to update your skills, projects, experience, education, or contact details — no need to touch any component.

To change colours or shared spacing, edit:

```
src/styles/theme.js
```

---

## Tech Stack

- **React 18** — UI
- **Vite 5** — dev server and bundler
- **Google Fonts** — Syne (headings) + DM Sans (body), loaded via CSS `@import`
- **Inline JS styles + theme.js** — zero runtime CSS-in-JS overhead
