export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Our Blog</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            Welcome to our blog! This is a demo application built with Next.js
            and Tailwind CSS, showcasing modern web development practices and
            responsive design.
          </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
            Features
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Server-side rendering with Next.js</li>
            <li>Responsive design using Tailwind CSS</li>
            <li>Dynamic routing for blog posts</li>
            <li>Hashtag filtering system</li>
            <li>Clean and modern UI</li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
            Technologies Used
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Next.js - React framework for production</li>
            <li>Tailwind CSS - Utility-first CSS framework</li>
            <li>TypeScript - Type-safe JavaScript</li>
            <li>JSONPlaceholder API - Demo content</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
