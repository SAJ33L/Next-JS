import Link from "next/link";

// Simulated async data fetching
async function fetchUserData() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return {
    users: [
      { id: 1, name: "Alice Johnson", email: "alice@example.com" },
      { id: 2, name: "Bob Smith", email: "bob@example.com" },
      { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
    ],
  };
}

export default async function DataFetching() {
  // Server-side data fetching
  const data = await fetchUserData();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-6">Data Fetching in Next.js</h1>

        <div className="space-y-6">
          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Server Components (Default)</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              In Next.js App Router, you can fetch data directly in Server Components
              using async/await. This data is fetched on the server.
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm block whitespace-pre">
                {`async function fetchData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}`}
              </code>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Example: Server-Side Fetched Data</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              This data was fetched on the server when this page was rendered:
            </p>
            <div className="space-y-3">
              {data.users.map((user) => (
                <div
                  key={user.id}
                  className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                >
                  <div className="font-semibold">{user.name}</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {user.email}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Caching Strategies</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Control how Next.js caches your data:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Static Data (Default)</h3>
                <div className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded">
                  <code className="text-sm">
                    {`fetch('https://api.example.com/data')`}
                  </code>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                  Cached by default, revalidated during build
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Dynamic Data</h3>
                <div className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded">
                  <code className="text-sm">
                    {`fetch('...', { cache: 'no-store' })`}
                  </code>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                  Fetched on every request
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Revalidated Data</h3>
                <div className="bg-zinc-100 dark:bg-zinc-900 p-3 rounded">
                  <code className="text-sm">
                    {`fetch('...', { next: { revalidate: 60 } })`}
                  </code>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                  Cached and revalidated every 60 seconds
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Client-Side Fetching</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              For client-side data fetching, use Client Components with hooks:
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm block whitespace-pre">
                {`'use client';

import { useEffect, useState } from 'react';

export default function ClientComponent() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);
  
  return <div>{data?.title}</div>;
}`}
              </code>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Loading States</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Create a <code className="bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded">loading.tsx</code> file
              to show loading UI while data is being fetched:
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm block whitespace-pre">
                {`// app/dashboard/loading.tsx
export default function Loading() {
  return <div>Loading...</div>;
}`}
              </code>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Create an <code className="bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded">error.tsx</code> file
              to handle errors gracefully:
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm block whitespace-pre">
                {`'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}`}
              </code>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
