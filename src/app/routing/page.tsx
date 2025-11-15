import Link from "next/link";

export default function Routing() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-6">Routing in Next.js</h1>

        <div className="space-y-6">
          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">File-based Routing</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Next.js uses a file-based routing system. Files in the app directory
              automatically become routes.
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded font-mono text-sm">
              <pre>
                {`app/
├── page.tsx           → /
├── about/
│   └── page.tsx       → /about
└── blog/
    ├── page.tsx       → /blog
    └── [slug]/
        └── page.tsx   → /blog/:slug`}
              </pre>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Dynamic Routes</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Use square brackets to create dynamic route segments.
            </p>
            <div className="space-y-3">
              <Link
                href="/routing/1"
                className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                <span className="font-semibold">Example 1:</span> /routing/1
              </Link>
              <Link
                href="/routing/hello-world"
                className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                <span className="font-semibold">Example 2:</span> /routing/hello-world
              </Link>
              <Link
                href="/routing/nextjs-is-awesome"
                className="block p-4 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                <span className="font-semibold">Example 3:</span> /routing/nextjs-is-awesome
              </Link>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Route Groups</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Use parentheses to organize routes without affecting the URL structure.
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded font-mono text-sm">
              <pre>
                {`app/
├── (marketing)/
│   ├── about/page.tsx    → /about
│   └── contact/page.tsx  → /contact
└── (shop)/
    └── products/page.tsx → /products`}
              </pre>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Use the Link component for client-side navigation:
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm">
                {`import Link from 'next/link';\n\n<Link href="/about">About</Link>`}
              </code>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
