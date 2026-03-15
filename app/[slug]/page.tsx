import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sideHustles, getHustleBySlug, getHustlesByCategory } from "../lib/side-hustles";

export function generateStaticParams() {
  return sideHustles.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hustle = getHustleBySlug(slug);
  if (!hustle) return {};

  return {
    title: `${hustle.name} Side Hustle - Earn $${hustle.hourlyLow}-$${hustle.hourlyHigh}/hr | Side Hustle Calculator`,
    description: `${hustle.name}: ${hustle.shortDesc}. Earn $${hustle.hourlyLow}-$${hustle.hourlyHigh}/hour. ${hustle.difficulty} difficulty, ${hustle.flexibility.toLowerCase()} flexibility. Get started today.`,
    keywords: [
      hustle.name.toLowerCase(),
      `${hustle.name.toLowerCase()} side hustle`,
      `how to make money ${hustle.name.toLowerCase()}`,
      `${hustle.name.toLowerCase()} earnings`,
      "side hustle",
      "make extra money",
    ],
  };
}

export default async function HustlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hustle = getHustleBySlug(slug);
  if (!hustle) notFound();

  const related = getHustlesByCategory(hustle.category).filter(
    (h) => h.slug !== hustle.slug
  );

  const hours = [5, 10, 15, 20, 30];

  const diffColor = {
    Easy: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Hard: "bg-red-100 text-red-800",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>
          {" > "}
          <Link
            href={`/category/${hustle.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:text-emerald-600"
          >
            {hustle.category}
          </Link>
          {" > "}
          <span className="text-gray-900">{hustle.name}</span>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className={`text-sm font-medium px-3 py-1 rounded-full ${diffColor[hustle.difficulty]}`}
            >
              {hustle.difficulty}
            </span>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800">
              {hustle.flexibility} Flexibility
            </span>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-purple-100 text-purple-800">
              {hustle.startupCost} startup
            </span>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
              {hustle.demandLevel} Demand
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            {hustle.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{hustle.shortDesc}</p>

          {/* Featured snippet target */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-emerald-800 text-lg font-medium">
              <strong>{hustle.name}</strong> pays{" "}
              <strong>
                ${hustle.hourlyLow}-${hustle.hourlyHigh} per hour
              </strong>
              . With 10 hours per week, you can earn{" "}
              <strong>
                ${Math.round(hustle.hourlyLow * 10 * 4.33).toLocaleString()}-$
                {Math.round(hustle.hourlyHigh * 10 * 4.33).toLocaleString()} per
                month
              </strong>
              . Difficulty: {hustle.difficulty}. Startup cost: {hustle.startupCost}.
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What is {hustle.name}?
          </h2>
          <p className="text-gray-700 leading-relaxed">{hustle.description}</p>
        </div>

        {/* Earnings Table */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {hustle.name} Earnings Breakdown
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold">Hours/Week</th>
                  <th className="px-4 py-3 text-sm font-semibold">Weekly (Low)</th>
                  <th className="px-4 py-3 text-sm font-semibold">Weekly (High)</th>
                  <th className="px-4 py-3 text-sm font-semibold">Monthly (Low)</th>
                  <th className="px-4 py-3 text-sm font-semibold">Monthly (High)</th>
                </tr>
              </thead>
              <tbody>
                {hours.map((h, i) => (
                  <tr key={h} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-3 font-bold text-emerald-600">
                      {h} hours
                    </td>
                    <td className="px-4 py-3 text-gray-800">
                      ${(hustle.hourlyLow * h).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-gray-800">
                      ${(hustle.hourlyHigh * h).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-gray-800">
                      ${Math.round(hustle.hourlyLow * h * 4.33).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 font-semibold text-emerald-600">
                      ${Math.round(hustle.hourlyHigh * h * 4.33).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Skills Needed */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Skills Needed for {hustle.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {hustle.skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Platforms */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Where to Find {hustle.name} Work
          </h2>
          <div className="space-y-4">
            {hustle.platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-50 hover:bg-emerald-50 rounded-xl p-4 transition-colors"
              >
                <div>
                  <p className="font-bold text-gray-900">{platform.name}</p>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                </div>
                <span className="text-emerald-600 font-medium text-sm whitespace-nowrap ml-4">
                  Visit Site &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tips for Getting Started with {hustle.name}
          </h2>
          <ol className="space-y-3">
            {hustle.tips.map((tip, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-gray-700 pt-1">{tip}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Related Side Hustles */}
        {related.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              More {hustle.category} Side Hustles
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/${r.slug}`}
                  className="bg-gray-50 hover:bg-emerald-50 rounded-xl p-4 transition-colors"
                >
                  <p className="font-bold text-gray-900">{r.name}</p>
                  <p className="text-sm text-gray-600">
                    ${r.hourlyLow}-${r.hourlyHigh}/hr - {r.difficulty}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Calculator */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Back to Side Hustle Calculator
          </Link>
        </div>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${hustle.name} Side Hustle Guide - Earn $${hustle.hourlyLow}-$${hustle.hourlyHigh}/hour`,
            description: hustle.description,
            author: { "@type": "Organization", name: "Side Hustle Calculator" },
          }),
        }}
      />
    </main>
  );
}
