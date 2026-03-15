import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sideHustles, getAllCategories } from "../../lib/side-hustles";

const categorySlug = (cat: string) => cat.toLowerCase().replace(/\s+/g, "-");

export function generateStaticParams() {
  return getAllCategories().map((cat) => ({ name: categorySlug(cat) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await params;
  const category = getAllCategories().find(
    (cat) => categorySlug(cat) === name
  );
  if (!category) return {};

  const hustles = sideHustles.filter((h) => h.category === category);
  return {
    title: `Best ${category} Side Hustles in 2026 | Side Hustle Calculator`,
    description: `Explore ${hustles.length} ${category.toLowerCase()} side hustles. Compare earnings, difficulty, and flexibility. Find the best ${category.toLowerCase()} side hustle for your skills.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const category = getAllCategories().find(
    (cat) => categorySlug(cat) === name
  );
  if (!category) notFound();

  const hustles = sideHustles
    .filter((h) => h.category === category)
    .sort(
      (a, b) =>
        (b.hourlyLow + b.hourlyHigh) / 2 - (a.hourlyLow + a.hourlyHigh) / 2
    );

  const otherCategories = getAllCategories().filter((c) => c !== category);

  const diffColor: Record<string, string> = {
    Easy: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Hard: "bg-red-100 text-red-800",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>
          {" > "}
          <span className="text-gray-900">{category}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Best <span className="text-emerald-600">{category}</span> Side Hustles
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          {hustles.length} {category.toLowerCase()} side hustles ranked by
          earning potential. Compare hourly rates, difficulty, and flexibility.
        </p>

        <div className="space-y-4 mb-12">
          {hustles.map((h, i) => (
            <Link key={h.slug} href={`/${h.slug}`} className="block">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-emerald-600">
                      #{i + 1}
                    </span>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        {h.name}
                      </h2>
                      <p className="text-sm text-gray-500">{h.shortDesc}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${diffColor[h.difficulty]}`}
                  >
                    {h.difficulty}
                  </span>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                    {h.flexibility} Flexibility
                  </span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-lg font-bold text-emerald-600">
                    ${h.hourlyLow}-${h.hourlyHigh}/hr
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      (${Math.round(h.hourlyLow * 10 * 4.33).toLocaleString()}-$
                      {Math.round(h.hourlyHigh * 10 * 4.33).toLocaleString()}/mo
                      at 10hr/week)
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Other Categories */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Explore Other Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {otherCategories.map((cat) => (
            <Link
              key={cat}
              href={`/category/${categorySlug(cat)}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center"
            >
              <p className="font-bold text-gray-900">{cat}</p>
              <p className="text-sm text-gray-500">
                {sideHustles.filter((h) => h.category === cat).length} hustles
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Back to Side Hustle Calculator
          </Link>
        </div>
      </div>
    </main>
  );
}
