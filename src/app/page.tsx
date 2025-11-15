import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Next.js Learning Repository
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            A comprehensive guide to learning Next.js from scratch
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <LearningCard
            title="Getting Started"
            description="Learn the basics of Next.js, setup, and project structure"
            href="/getting-started"
            icon="🚀"
          />
          <LearningCard
            title="Routing"
            description="Understand file-based routing and dynamic routes"
            href="/routing"
            icon="🗺️"
          />
          <LearningCard
            title="Components"
            description="Build reusable React components"
            href="/components"
            icon="🧩"
          />
          <LearningCard
            title="API Routes"
            description="Create serverless API endpoints"
            href="/api-examples"
            icon="⚡"
          />
          <LearningCard
            title="Styling"
            description="Learn CSS Modules and Tailwind CSS"
            href="/styling"
            icon="🎨"
          />
          <LearningCard
            title="Data Fetching"
            description="Server and client-side data fetching"
            href="/data-fetching"
            icon="📊"
          />
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
          <div className="space-y-4">
            <Step number={1} title="Install Dependencies">
              <code className="block bg-zinc-100 dark:bg-zinc-900 p-3 rounded">
                npm install
              </code>
            </Step>
            <Step number={2} title="Run Development Server">
              <code className="block bg-zinc-100 dark:bg-zinc-900 p-3 rounded">
                npm run dev
              </code>
            </Step>
            <Step number={3} title="Open Your Browser">
              <p className="text-zinc-600 dark:text-zinc-400">
                Navigate to{" "}
                <a href="http://localhost:3000" className="text-blue-600 hover:underline">
                  http://localhost:3000
                </a>
              </p>
            </Step>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Official Docs
            </a>
            <a
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Interactive Tutorial
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

function LearningCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-zinc-200 dark:border-zinc-700"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
    </Link>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold mb-2">{title}</h4>
        {children}
      </div>
    </div>
  );
}
