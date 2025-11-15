import Link from "next/link";

export default function GettingStarted() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-6">Getting Started with Next.js</h1>

        <div className="prose dark:prose-invert max-w-none">
          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">What is Next.js?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Next.js is a React framework that enables functionality such as
              server-side rendering and generating static websites. It provides
              a great developer experience with features like:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>File-based routing</li>
              <li>Server-side rendering (SSR)</li>
              <li>Static site generation (SSG)</li>
              <li>API routes</li>
              <li>Built-in CSS and TypeScript support</li>
              <li>Fast refresh for instant feedback</li>
            </ul>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded font-mono text-sm">
              <pre>
                {`next-js-learning/
├── src/
│   └── app/           # App Router directory
│       ├── page.tsx   # Home page
│       ├── layout.tsx # Root layout
│       └── globals.css
├── public/            # Static files
├── package.json
├── tsconfig.json
└── next.config.ts`}
              </pre>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">App Router</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  The app directory uses React Server Components by default,
                  enabling better performance and smaller JavaScript bundles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Server Components</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Components that run on the server, reducing client-side
                  JavaScript and improving initial page load.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Client Components</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Use the &quot;use client&quot; directive for components that need
                  interactivity or browser APIs.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
            <div className="space-y-2">
              <Link
                href="/routing"
                className="block text-blue-600 hover:underline"
              >
                → Learn about Routing
              </Link>
              <Link
                href="/components"
                className="block text-blue-600 hover:underline"
              >
                → Explore Components
              </Link>
              <Link
                href="/data-fetching"
                className="block text-blue-600 hover:underline"
              >
                → Understand Data Fetching
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
