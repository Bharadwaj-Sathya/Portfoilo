# Requirements Document

## Introduction

A complete rebuild of Bharadwaj I V V S's personal portfolio website from the ground up. The existing React/Create-React-App client folder is removed entirely and replaced with a visually stunning, award-winning quality portfolio site built with pure HTML, CSS, and vanilla JavaScript (no framework dependencies). The site targets Awwwards / CSS Design Awards caliber visual design, centered on an elevated terminal/CLI aesthetic — dark theme, glowing neon accents, immersive animations — while remaining fully functional and locally previewable via a lightweight dev server.

## Glossary

- **Portfolio_Site**: The single-page HTML/CSS/JS website being built for Bharadwaj I V V S
- **Dev_Server**: A lightweight local HTTP server (e.g., `npx serve` or Python's `http.server`) used to preview the site at a local URL
- **Terminal_Aesthetic**: A design language inspired by command-line interfaces: monospace fonts, dark backgrounds, glowing prompt characters, typed text animations, ANSI-style color accents
- **Hero_Section**: The full-viewport opening section of the Portfolio_Site
- **Experience_Section**: The section displaying professional work history in a visual timeline
- **Skills_Section**: The section presenting the technical skill stack
- **About_Section**: The section containing a personal bio and summary
- **Contact_Section**: The section with contact details and a functional mailto link
- **Scroll_Animation**: CSS/JS-driven animations that trigger as the user scrolls into a section
- **Typewriter_Effect**: JavaScript animation that renders text character-by-character to simulate live terminal input
- **Particle_Layer**: A canvas-based or CSS background layer rendering animated floating particles or a grid pattern
- **Nav_Bar**: The fixed top or side navigation bar with anchor links to each section
- **Timeline_Card**: A styled card component within the Experience_Section representing a single job role
- **Skill_Tag**: A visually styled pill or badge element representing one technical skill
- **CTA_Button**: A call-to-action button (e.g., "Download Resume", "Contact Me")

---

## Requirements

### Requirement 1: Remove Existing React Client

**User Story:** As the site owner, I want the old React client folder removed, so that the new portfolio starts fresh without legacy code or build tooling overhead.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL replace the contents of the workspace root with a new, self-contained directory structure containing only HTML, CSS, JavaScript, and static assets
2. WHEN the old `client/` directory exists, THE Portfolio_Site build process SHALL not depend on any files inside it
3. THE Portfolio_Site SHALL not require `npm install`, webpack, Babel, or Create-React-App to render correctly in a browser

---

### Requirement 2: Local Preview via Dev Server

**User Story:** As the site owner, I want to preview the portfolio via a local URL, so that I can review the site before deploying it.

#### Acceptance Criteria

1. THE Dev_Server SHALL serve the Portfolio_Site at `http://localhost:3000` (or an available port above 1024) when started with a single shell command
2. WHEN the Dev_Server is started, THE Portfolio_Site SHALL load fully in a modern browser (Chrome, Firefox, Edge) within 3 seconds on a localhost connection
3. THE Portfolio_Site SHALL produce no console errors on initial page load
4. THE Dev_Server SHALL serve all static assets (CSS, JS, fonts, images) with correct MIME types

---

### Requirement 3: Award-Winning Visual Design System

**User Story:** As the site owner, I want an award-winning visual design, so that the portfolio stands out to potential employers and clients the way Awwwards-featured sites do.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL use a dark color scheme with a background no lighter than `#0d0d0d` as its base
2. THE Portfolio_Site SHALL use a primary neon accent color in the range `#00ff88` to `#00d4ff` for interactive highlights and glowing elements
3. THE Portfolio_Site SHALL use a monospace font (e.g., JetBrains Mono, Fira Code, or Source Code Pro loaded via Google Fonts or CDN) for all terminal-themed text elements
4. THE Portfolio_Site SHALL use a sans-serif display font (e.g., Inter, Space Grotesk) for headings and body copy to balance readability against the monospace theme
5. THE Portfolio_Site SHALL render all text at a contrast ratio meeting WCAG AA (minimum 4.5:1 for body text, 3:1 for large text) against its background
6. THE Portfolio_Site SHALL include a Particle_Layer on the Hero_Section background rendered at no more than 80 particles to maintain 60fps on mid-range hardware
7. THE Portfolio_Site SHALL apply smooth CSS transitions of 200–400ms duration to all interactive elements (hover states, focus states)
8. THE Portfolio_Site SHALL include at least one ambient glow or gradient overlay effect on section backgrounds to create depth

---

### Requirement 4: Hero Section

**User Story:** As a visitor, I want an immediate, striking first impression on the hero section, so that I understand who Bharadwaj is and feel compelled to scroll further.

#### Acceptance Criteria

1. THE Hero_Section SHALL occupy 100% of the initial viewport height (`100vh`)
2. THE Hero_Section SHALL display the Typewriter_Effect animating the sequence: `$ whoami` → `Bharadwaj I V V S` → `$ cat title.txt` → `AI & Data Science Engineer` within 4 seconds of page load
3. THE Hero_Section SHALL display a subtitle line reading "5+ years · AI Agents · LLMs · Cloud · Data Science" beneath the Typewriter_Effect
4. THE Hero_Section SHALL include a blinking terminal cursor (`_` or `|`) appended to the last line of the Typewriter_Effect at all times after the animation completes
5. THE Hero_Section SHALL display icon links to GitHub (`https://github.com/Bharadwaj-Sathya`) and LinkedIn (`https://www.linkedin.com/in/bharadwajsathya/`) and a mailto link to `bharadwajinamahanthi@gmail.com`
6. THE Hero_Section SHALL include a CTA_Button labeled "View My Work" that smoothly scrolls the viewport to the Experience_Section when clicked
7. THE Hero_Section SHALL include a secondary CTA_Button labeled "Download Resume" that triggers a download of the resume PDF file
8. WHEN a visitor scrolls past the Hero_Section, THE Nav_Bar SHALL become visible (either fade in or slide down)

---

### Requirement 5: Fixed Navigation Bar

**User Story:** As a visitor, I want persistent navigation, so that I can jump to any section of the portfolio at any time.

#### Acceptance Criteria

1. THE Nav_Bar SHALL contain anchor links to: Hero, Experience, Skills, About, and Contact sections
2. THE Nav_Bar SHALL highlight the anchor link corresponding to the section currently in the viewport using an `active` visual state
3. WHEN a Nav_Bar link is clicked, THE Portfolio_Site SHALL smoothly scroll to the target section within 600ms
4. THE Nav_Bar SHALL collapse into a hamburger menu on viewports narrower than 768px
5. WHEN the hamburger menu is open on mobile, THE Nav_Bar SHALL display all five navigation links in a full-width overlay or dropdown

---

### Requirement 6: Experience Section

**User Story:** As a recruiter or collaborator, I want to read Bharadwaj's work history in a clear timeline, so that I can quickly assess seniority, impact, and relevance.

#### Acceptance Criteria

1. THE Experience_Section SHALL display a vertical timeline with one Timeline_Card per role, ordered chronologically from most recent to oldest
2. THE Experience_Section SHALL include Timeline_Cards for the following three roles in order:
   - Data Science Engineer @ Genpact (Jul 2022 – Present, Telangana, India)
   - Junior Data Science Engineer @ LogiQ Dreams (Dec 2020 – Jun 2022, Kerala, India)
   - Software Intern @ PSQUARE Groups (Apr 2018 – May 2018, Visakhapatnam, India)
3. EACH Timeline_Card SHALL display: company name, job title, date range, location, and at least three key achievement bullets
4. THE Experience_Section SHALL use the terminal prompt prefix `▶` or `$` to style achievement bullets for visual consistency with the Terminal_Aesthetic
5. WHEN a Timeline_Card scrolls into view, THE Portfolio_Site SHALL animate it using a Scroll_Animation (fade-in + slide-up, ≤300ms delay per card)
6. THE Experience_Section SHALL visually distinguish the current role (Genpact) with an accent color badge or "Current" label

---

### Requirement 7: Skills Section

**User Story:** As a technical evaluator, I want to see Bharadwaj's full skill stack organized by category, so that I can quickly match skills to my needs.

#### Acceptance Criteria

1. THE Skills_Section SHALL organize Skill_Tags into four named categories: "Languages & Frameworks", "AI & LLMs", "Databases & Tools", and "Cloud & DevOps"
2. THE Skills_Section SHALL render each skill as a Skill_Tag styled as a glowing pill or bordered badge consistent with the Terminal_Aesthetic
3. THE Skills_Section SHALL include all of the following skills:
   - Languages & Frameworks: Python, TypeScript, FastAPI, Django, Flask
   - AI & LLMs: NLP, Claude, LLMs, AI Agents, Function Calling, MCP, RAG, Prompt Engineering
   - Databases & Tools: SQL, MongoDB, Docker, Git, OpenCV, OCR
   - Cloud & DevOps: AWS, GCP, Docker, GitHub Actions, Nginx, Linux, Vertex AI, Gemini AI
4. WHEN a visitor hovers over a Skill_Tag, THE Portfolio_Site SHALL apply a glow or brightness animation to that Skill_Tag within 150ms
5. WHEN the Skills_Section scrolls into view, THE Portfolio_Site SHALL stagger-animate Skill_Tags into visibility with a 30ms delay between each tag

---

### Requirement 8: About Section

**User Story:** As a visitor, I want to read a concise personal bio, so that I can understand Bharadwaj's background, values, and approach to engineering.

#### Acceptance Criteria

1. THE About_Section SHALL display a bio paragraph summarizing Bharadwaj's 5+ year career as an AI & Data Science Engineer based in Telangana, India
2. THE About_Section SHALL present the bio in a terminal-style block, rendered as if typed into a `$ man bharadwaj` command
3. THE About_Section SHALL include an education entry: "B.Tech, Computer Science & Engineering — Swarna Bharathi Institute of Science & Technology, Khammam, India (2015–2019)"
4. THE About_Section SHALL include a metrics row displaying at least three quantified achievements (e.g., "30–40% inventory discrepancy reduction", "40% purchase order automation", "15% ROI improvement") as visually prominent stat blocks

---

### Requirement 9: Contact Section

**User Story:** As a potential employer or collaborator, I want easy access to contact Bharadwaj, so that I can reach out directly.

#### Acceptance Criteria

1. THE Contact_Section SHALL display Bharadwaj's email address `bharadwajinamahanthi@gmail.com` as a clickable `mailto:` link
2. THE Contact_Section SHALL display the phone number `+91 96660 33443`
3. THE Contact_Section SHALL display the location "Telangana, India"
4. THE Contact_Section SHALL include icon links to GitHub and LinkedIn, consistent in style with the Hero_Section social links
5. THE Contact_Section SHALL frame its content using a terminal-style prompt, e.g., `$ ./contact.sh`, consistent with the Terminal_Aesthetic
6. WHEN the email link is clicked, THE Portfolio_Site SHALL open the visitor's default mail client with the `to:` field pre-filled to `bharadwajinamahanthi@gmail.com`

---

### Requirement 10: Responsive Layout

**User Story:** As a visitor on any device, I want the portfolio to display correctly, so that my experience is not degraded on mobile or tablet.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL render without horizontal overflow on viewports as narrow as 320px
2. THE Portfolio_Site SHALL use CSS media queries to reflow the layout at breakpoints of 768px (tablet) and 1024px (desktop)
3. WHEN viewed on a viewport narrower than 768px, THE Experience_Section timeline SHALL switch from a two-column layout (if used) to a single-column stacked layout
4. WHEN viewed on a viewport narrower than 768px, THE Skills_Section SHALL wrap Skill_Tags to multiple rows rather than scroll horizontally
5. THE Portfolio_Site SHALL use relative units (rem, %, vw/vh) rather than fixed pixel values for font sizes and layout spacing to support fluid scaling

---

### Requirement 11: Performance and Accessibility

**User Story:** As any visitor, I want the site to load fast and be navigable with assistive technologies, so that the portfolio is inclusive and professional.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL load all above-the-fold content within 2 seconds on a simulated Fast 3G connection (no external blocking resources above the fold)
2. THE Portfolio_Site SHALL declare `lang="en"` on the `<html>` element
3. THE Portfolio_Site SHALL provide descriptive `alt` text for all non-decorative images
4. THE Portfolio_Site SHALL use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`) for page structure
5. THE Portfolio_Site SHALL ensure all interactive elements (links, buttons) are keyboard-focusable and display a visible focus ring
6. THE Portfolio_Site SHALL not autoplay audio; all animations SHALL respect the `prefers-reduced-motion` media query by disabling non-essential animations when the user has requested reduced motion
7. THE Portfolio_Site SHALL inline critical CSS or place it in the `<head>` to prevent a flash of unstyled content (FOUC) on load
