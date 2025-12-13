# Next-JS

Next-JS is a minimal example/starter repository demonstrating core Next.js (App Router) concepts and best practices. This repo contains a small sample app that highlights several Next.js features and patterns covered in the companion course.

## Table of Contents
- Overview
- Features
- Getting Started
- Project structure
- How to run
- Deployment notes
- Contributing
- License

## Overview
This project is a compact Next.js app showing common patterns and techniques used to build modern web apps with React and Next.js. It is intended to support course material and learning exercises.

## Features
You will find examples in this repo demonstrating:

- Styling: Multiple ways to style your app with Next.js (global styles, component styles, and the App Router conventions).
- Optimizations: Examples of optimizing images, links, and fonts.
- Routing: Nested layouts and pages using Next.js file-system routing (App Router).
- Data fetching: Best practices for fetching, streaming, and how you could set up a Postgres database on Vercel.
- Search & pagination: How to use URL search params to implement search and pagination.
- Mutating data: Using React Server Actions to mutate server-side data and revalidate the Next.js cache.
- Error handling: Patterns for global errors and 404 pages.
- Forms & accessibility: Server-side validation examples and accessibility tips.
- Authentication: How to add authentication using NextAuth.js and proxies.
- Metadata: How to add page metadata for social sharing and SEO.

## Getting started
Requirements:

- Node.js 18+ (or current LTS) and npm or yarn
- Recommended: Windows PowerShell on Windows or a POSIX-compatible shell on Mac/Linux

Install dependencies:

```powershell
npm install
```

### Run the development server

```powershell
npm run dev
```

Open http://localhost:3000 in your browser to view the app.

### Build & start (production)
This repo currently includes a development script in `package.json` (see `scripts.dev`). If you want to run a production build locally, add these scripts to `package.json`:

```json
"scripts": {
	"dev": "next dev",
	"build": "next build",
	"start": "next start"
}
```

Then run:
```powershell
npm run build
npm run start
```

## Project structure
This repo is small; the main code lives in the `app/` directory using the App Router:

- `app/layout.js` — App root layout and shared UI shell
- `app/page.js` — The home page component
- `app/like-button.js` — Example component demonstrating state and server actions

Other files:
- `package.json` — Project dependencies and scripts
- `README.md` — This file

## Deployment notes
The course discusses deploying Next.js apps on Vercel and setting up a Postgres database for server-side data. For deployment:

- If using Vercel, connect your GitHub repo and use Vercel's Postgres or environment variables for database connection.
- Follow Next.js docs for configuring environment variables for production and preview deployments.

## Learn with Next.js — React Foundations

This repository is intentionally small and works well alongside the official Next.js "React Foundations" tutorial (https://nextjs.org/learn/react-foundations). The course is beginner-friendly and walks you through building a simple app, migrating it to React, and then migrating to Next.js. It explains core concepts that this example demonstrates.

What you will learn in that course:

- A practical introduction to React and Next.js
- How to convert JavaScript app code into a React component-based structure
- Next.js App Router concepts (layouts, pages, and server components)
- Fetching and mutation patterns, and deploying to platforms like Vercel

Prerequisites (from the tutorial):

- HTML, CSS, and JavaScript knowledge
- Node.js installed (the tutorial recommends Node.js 20.12.0+; this repo lists Node.js 18+ in the README but either works for learning)
- A code editor like VS Code

How this repo maps to the course:

- `app/page.js` — Example landing page; start here for routing and metadata examples
- `app/layout.js` — Shared layout to demonstrate nested layouts and the App Router
- `app/like-button.js` — An example component showing state and server actions for mutation

If you are following the tutorial, use this repository as the project to experiment with the patterns and code examples described in the lessons. For discussion and help, check the Next.js Discord linked in the course.

## Contributing
Contributions are welcome — open an issue or a PR to suggest improvements. Keep changes small and update the README if your changes affect the developer workflow.

## License
This repository does not include a license file; add a LICENSE (MIT or similar) if you want to permit reuse.

---
If you want the README tailored further (add badges, CI instructions, or example screenshots), tell me what you'd like and I will update it.