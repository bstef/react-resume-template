# Ben Stef — Personal Resume Website

[![Better Stack Badge](https://uptime.betterstack.com/status-badges/v3/monitor/1gquk.svg)](https://uptime.betterstack.com/?utm_source=status_badge)

![Ben Stef Resume Website](resume-screenshot.jpg?raw=true 'Ben Stef Resume Website')

Personal resume website for Ben Stef, built with React, Next.js, TypeScript, and Tailwind CSS.

Live at **[benstef.org](https://benstef.org)**

## Tech Stack

- [Next.js](https://nextjs.org/) — server-side rendering and static generation
- [TypeScript](https://www.typescriptlang.org/) — full type safety
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling

## Running Locally

Requires Node.js. Install dependencies and start the dev server:

```bash
npm install
npx next dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Customization

All site content is driven from a single file: [`src/data/data.tsx`](src/data/data.tsx).

Update the values there to change any text, links, experience entries, skills, or contact info. Changes are reflected immediately while the dev server is running.

## Deployment

Deployed via [AWS Amplify](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html).

---

*Based on the [react-resume-template](https://github.com/tbakerx/react-resume-template) by Tim Baker.*
