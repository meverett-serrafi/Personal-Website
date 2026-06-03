# Matthew Everett — Personal Website

The personal website and portfolio of **Matthew Everett**, a software engineer.
A sleek, dark-themed site that showcases an about section, work experience,
projects, and skills — with all content driven from a single editable file.

🔗 **Live site:** [personal-website-chi-weld-71.vercel.app](https://personal-website-chi-weld-71.vercel.app)

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **shadcn/ui** (Radix primitives, Nova preset — Geist font + Lucide icons)
- Deployed on **Vercel**

## Setup

```bash
git clone <repository-url>
cd personal-website
npm install
```

Then run the commands you need:

```bash
npm run dev     # start the dev server at http://localhost:3000
npm run build   # create a production build
npm run start   # serve the production build
npm run lint    # lint the project
```

## Editing content

Everything you'll want to change lives in
[`src/lib/content.ts`](src/lib/content.ts):

- `site` — name, role, tagline, email, location, avatar, résumé link
- `nav` — navigation items
- `socials` — social links (github / linkedin / mail / twitter)
- `about` — bio paragraphs + quick facts
- `experience` — work history timeline
- `projects` — project cards (title, description, tags, image, links)
- `skills` — skill groups

Image fields (`site.avatar`, each `project.image`) accept a path under
`/public`. Leave them as `""` to show a styled placeholder.

## Deployment

The site is deployed on Vercel and available at the aliased link above:
**https://personal-website-chi-weld-71.vercel.app**. Pushes to `main` are built
and deployed automatically.
