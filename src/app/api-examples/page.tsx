import Link from "next/link";

export default function APIExamples() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-6">API Routes in Next.js</h1>

        <div className="space-y-6">
          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">What are API Routes?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              API Routes allow you to build serverless API endpoints directly in your
              Next.js application. They run on the server and can handle backend logic.
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm block whitespace-pre">
                {`app/api/
├── hello/
│   └── route.ts    → /api/hello
└── time/
    └── route.ts    → /api/time`}
              </code>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Creating an API Route</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              API routes are defined in <code className="bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded">route.ts</code> files
              within the app/api directory.
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm block whitespace-pre">
                {`import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Hello from API!',
  });
}`}
              </code>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Try the API Routes</h2>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
                <h3 className="font-semibold mb-2">GET /api/hello</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  A simple API that returns a greeting message.
                </p>
                <a
                  href="/api/hello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Open /api/hello
                </a>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded">
                <h3 className="font-semibold mb-2">GET /api/time</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  Returns the current server time in various formats.
                </p>
                <a
                  href="/api/time"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                  Open /api/time
                </a>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">HTTP Methods</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              You can handle different HTTP methods by exporting functions with
              corresponding names:
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
              <code className="text-sm block whitespace-pre">
                {`export async function GET(request: Request) { }
export async function POST(request: Request) { }
export async function PUT(request: Request) { }
export async function DELETE(request: Request) { }
export async function PATCH(request: Request) { }`}
              </code>
            </div>
          </section>

          <section className="bg-white dark:bg-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 list-disc list-inside">
              <li>Handle form submissions</li>
              <li>Interact with databases</li>
              <li>Call external APIs securely</li>
              <li>Implement authentication</li>
              <li>Process webhooks</li>
              <li>Generate dynamic data</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
