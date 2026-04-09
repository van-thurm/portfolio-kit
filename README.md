# portfolio kit

An AI-native portfolio template. An Astro site paired with Cursor skills and agent context that work together out of the box. Fork it, open it in Cursor, and the AI already knows how the site works, how to write case studies, and how to catch bad copy.

## quickstart

```bash
# fork or clone this repo, then:
npm install
npm run dev
```

Open `src/data/site.ts` and replace the placeholder values with your own name, links, and bio. The rest of the site pulls from this file.

## customize

**Identity**: edit `src/data/site.ts` -- name, URL, motto, bio, social links, footer text. Every component reads from here.

**Add a case study**: create a new `.astro` file in `src/pages/`, use `CaseStudyLayout`, and add a matching entry to `src/data/entries.ts`. Or tell the AI "add a new case study about [project]" and it will scaffold the right file with the right structure.

**Add a side project**: same idea, but use `BaseLayout` directly. See `example-project.astro` for the pattern.

**Styling**: the design system lives in `src/styles/global.css` (tokens, type, spacing, dark mode) and `src/styles/case-study.css` (all case study components). Change the `--spot` color to shift the accent across the whole site.

**Doodle tool**: the drawing overlay is included by default on pages that use BaseLayout. Pass `doodle={false}` to disable it on any page.

## file structure

```
src/
  data/
    site.ts            ← your identity and links (edit this first)
    entries.ts         ← directory of all work
    writing.ts         ← external writing links
    bookmarks.ts       ← bookmarks and quotes
  layouts/
    BaseLayout.astro   ← page shell (meta, fonts, theme, doodle)
    CaseStudyLayout.astro ← case study wrapper (hero, tags, footer)
  components/
    SiteHeader.astro   ← sticky header
    Directory.astro    ← home page listing
    DoodleTool.astro   ← drawing overlay
  styles/
    global.css         ← design tokens
    case-study.css     ← case study components
  pages/
    index.astro        ← home
    contact.astro      ← contact
    tag/[tag].astro    ← tag index
    example-case-study.astro  ← example (delete when you add your own)
    example-project.astro     ← example (delete when you add your own)
```

## bundled skills

These live in `.cursor/skills/` and activate automatically when you open the project in Cursor.

**portfolio-case-study** -- structured intake process for writing case studies. Interviews you about the project, extracts metrics, and drafts content using patterns from designers hired at top-tier companies. Three modes: intake + draft, review, and refine.

**slop-scrub-humanizer** -- mandatory audit that catches AI writing patterns before they ship. 22 construction bans, a vocabulary kill list, and a 14-step review process. Runs against any prose the AI generates for the site.

## agent context

`.cursor/rules/site-conventions.mdc` teaches the AI the file structure, naming patterns, design tokens, CSS classes, and the site's tone (lowercase, direct, no filler). This is what makes the AI productive from the first prompt instead of guessing at conventions.

## deployment

The site builds as static HTML and works anywhere:

```bash
npm run build    # outputs to dist/
npm run preview  # local preview of the build
```

Deploy the `dist/` folder to any static host: Vercel, Netlify, GitHub Pages, Cloudflare Pages, or just drag it into a file hosting service.

If you need server-side rendering (for auth, API routes, etc.), install an Astro adapter:

```bash
npm install @astrojs/vercel   # or @astrojs/netlify, @astrojs/node
```

Then update `astro.config.mjs`:

```js
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
```

## philosophy

This template assumes the person using it has things to say and an AI that can help them say it well. The skills and rules aren't guardrails for bad writers; they're tools for busy ones. The site structure handles the architecture so you can focus on the content. The AI handles the first draft so you can focus on making it yours.
