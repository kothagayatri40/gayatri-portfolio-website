# Devi Sri Gayathri Kotha — Portfolio Website

A portfolio website built with React + Vite + Tailwind CSS, built from the content on my resume.

## What's in this project

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data.js              ← all resume content lives here, edit this to update the site
│   └── components/
│       ├── Nav.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Experience.jsx
│       ├── Education.jsx
│       ├── Certifications.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── NetworkMotif.jsx
└── public/
    └── PUT_YOUR_RESUME_PDF_HERE.txt
```

## Before you do anything: add your resume PDF

The "Resume" button on the site links to `/resume.pdf`. Drop your actual resume file
into the `public/` folder and name it exactly `resume.pdf`, then delete
`PUT_YOUR_RESUME_PDF_HERE.txt`. Without this, the Resume button will 404.

## Run it locally

You need [Node.js](https://nodejs.org) (version 18 or later) installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`) in your browser.

To build a production version and check it locally:

```bash
npm run build
npm run preview
```

## Deploy it (so you can submit a live URL)

The easiest free option is **Vercel**, using GitHub. Vercel auto-detects Vite projects, so
no extra configuration is needed.

### Step 1 — Push this project to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/kothagayatri40/YOUR-REPO-NAME.git
git push -u origin main
```

(Create the empty repo first on github.com, then copy its URL into the command above.)

**Files to push:** the entire project folder as-is — everything listed in the structure
above, including `package.json`, `index.html`, `src/`, `public/` (with your real
`resume.pdf` inside it), and the config files. Do **not** push `node_modules` or `dist` —
the included `.gitignore` already excludes them.

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **Add New → Project**.
3. Select the GitHub repository you just pushed.
4. Vercel will auto-detect the framework as **Vite** — leave the default build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**.
6. After a minute, Vercel gives you a live URL like `https://your-repo-name.vercel.app`.

That URL is what you submit to the hackathon form. It's hosted by Vercel, so it works
independently of your computer — you can close your laptop and it stays live.

### Alternative: Netlify

If you'd rather use Netlify:
1. Push the project to GitHub as above.
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import an existing project**.
3. Connect the repo. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy, and Netlify gives you a live URL to submit.

## Updating content later

All resume content (name, skills, projects, experience, education, certifications,
contact links) lives in a single file: `src/data.js`. Edit that file, save, and the
whole site updates — no need to touch any component file.

## Notes

- Built with React 18, Vite 5, and Tailwind CSS 3.
- Fully responsive (mobile, tablet, desktop), with a working mobile menu.
- No external links, statistics, or achievements were invented — every piece of content
  traces back to the resume provided.
