import Link from "next/link";

export default async function DynamicRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/routing"
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          ← Back to Routing
        </Link>

        <h1 className="text-4xl font-bold mb-6">Dynamic Route Example</h1>

        <div className="bg-white dark:bg-zinc-800 rounded-lg p-6">
          <div className="mb-6">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Route Parameter:
            </span>
            <p className="text-3xl font-bold text-blue-600 mt-2">{id}</p>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-700 pt-6">
            <h2 className="text-2xl font-semibold mb-4">How it works</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              This page is located at <code className="bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded">src/app/routing/[id]/page.tsx</code>
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              The <code className="bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded">[id]</code> folder
              creates a dynamic route segment that captures the URL parameter.
            </p>

            <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded mt-4">
              <code className="text-sm block whitespace-pre">
                {`export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Use the id parameter
  return <div>{id}</div>;
}`}
              </code>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
            <h3 className="font-semibold mb-2">Try it yourself!</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Change the URL to see different values. For example:
            </p>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400 list-disc list-inside mt-2">
              <li>/routing/test</li>
              <li>/routing/123</li>
              <li>/routing/any-value</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
