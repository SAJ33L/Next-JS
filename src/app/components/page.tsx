import Link from "next/link";

export default function Components() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-6">React Components in Next.js</h1>

        <div className="space-y-6">
          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Server Components (Default)</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              By default, components in the app directory are Server Components.
              They run on the server and can directly access backend resources.
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm block whitespace-pre">
                {`// This is a Server Component (default)
export default function ServerComponent() {
  // Can access databases, file system, etc.
  return <div>Server Component</div>;
}`}
              </code>
            </div>
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded">
              <p className="text-sm font-semibold mb-2">Benefits:</p>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 list-disc list-inside">
                <li>Zero JavaScript sent to client</li>
                <li>Direct database access</li>
                <li>Better SEO</li>
                <li>Faster initial page load</li>
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Client Components</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Use the &quot;use client&quot; directive for interactive components that need
              browser APIs or event handlers.
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm block whitespace-pre">
                {`'use client';

import { useState } from 'react';

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
              </code>
            </div>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm font-semibold mb-2">Use when you need:</p>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 list-disc list-inside">
                <li>useState, useEffect, or other hooks</li>
                <li>Event listeners (onClick, onChange, etc.)</li>
                <li>Browser APIs (localStorage, window, etc.)</li>
                <li>Third-party libraries that use browser APIs</li>
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Component Composition</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              You can compose Server and Client Components together.
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm block whitespace-pre">
                {`// Server Component
import ClientButton from './ClientButton';

export default function Page() {
  return (
    <div>
      <h1>Server Component</h1>
      <ClientButton /> {/* Client Component */}
    </div>
  );
}`}
              </code>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Example: Counter Component</h2>
            <InteractiveCounter />
          </section>
        </div>
      </div>
    </div>
  );
}

// This would normally be in a separate file with 'use client'
function InteractiveCounter() {
  return (
    <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded">
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        This is a placeholder for an interactive counter. In a real implementation,
        this would be a client component with useState.
      </p>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          -
        </button>
        <span className="text-2xl font-bold">0</span>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          +
        </button>
      </div>
    </div>
  );
}
