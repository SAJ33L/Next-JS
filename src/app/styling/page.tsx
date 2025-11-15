import Link from "next/link";

export default function Styling() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-6">Styling in Next.js</h1>

        <div className="space-y-6">
          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Tailwind CSS (Recommended)</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              This project uses Tailwind CSS, a utility-first CSS framework.
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded mb-4">
              <code className="text-sm block whitespace-pre">
                {`<div className="bg-blue-500 text-white p-4 rounded-lg">
  Tailwind CSS Example
</div>`}
              </code>
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-lg">
              This box is styled with Tailwind CSS!
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Utility Classes</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Tailwind provides utility classes for common CSS properties:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
                <code className="text-sm">bg-gradient-to-r from-purple-500 to-pink-500</code>
              </div>
              <div className="p-4 shadow-xl rounded-lg bg-white dark:bg-zinc-700">
                <code className="text-sm">shadow-xl rounded-lg</code>
              </div>
              <div className="p-4 border-2 border-blue-500 rounded-lg">
                <code className="text-sm">border-2 border-blue-500</code>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg">
                <code className="text-sm">bg-green-100 text-green-800</code>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">CSS Modules</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Next.js also supports CSS Modules for component-scoped styling.
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm block whitespace-pre">
                {`// component.module.css
.card {
  padding: 1rem;
  border-radius: 0.5rem;
  background: white;
}

// Component.tsx
import styles from './component.module.css';

export default function Card() {
  return <div className={styles.card}>Content</div>;
}`}
              </code>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Global Styles</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Global styles are imported in the root layout:
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm block whitespace-pre">
                {`// app/layout.tsx
import './globals.css';

// globals.css
@import "tailwindcss";

body {
  background: var(--background);
  color: var(--foreground);
}`}
              </code>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Dark Mode</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Tailwind makes dark mode easy with the <code className="bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded">dark:</code> prefix:
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded mb-4">
              <code className="text-sm block">
                {`<div className="bg-white dark:bg-zinc-800 text-black dark:text-white">
  Content that adapts to dark mode
</div>`}
              </code>
            </div>
            <div className="p-4 bg-white dark:bg-zinc-700 text-black dark:text-white rounded-lg border-2 border-zinc-300 dark:border-zinc-600">
              This box automatically adapts to your system&apos;s dark mode preference!
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Responsive Design</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Use responsive prefixes for different breakpoints:
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm block">
                {`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid layout
</div>`}
              </code>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
