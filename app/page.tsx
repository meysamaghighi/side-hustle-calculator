import type { Metadata } from "next";
import Calculator from "./components/Calculator";
import Link from "next/link";
import { sideHustles, getAllCategories } from "./lib/side-hustles";

export const metadata: Metadata = {
  title: "Side Hustle Calculator - Find the Best Side Hustle for You in 2026",
  description:
    "Free side hustle calculator. Input your available hours and skills to get personalized side hustle recommendations with estimated monthly earnings. 30+ side hustles ranked.",
  keywords: [
    "side hustle",
    "side hustle calculator",
    "make extra money",
    "side hustle ideas",
    "best side hustles 2026",
    "how to make extra money",
    "passive income ideas",
    "freelance work",
    "gig economy",
  ],
};

export default function Home() {
  const categories = getAllCategories();
  const topEarners = [...sideHustles]
    .sort((a, b) => (b.hourlyLow + b.hourlyHigh) / 2 - (a.hourlyLow + a.hourlyHigh) / 2)
    .slice(0, 10);

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Find Your Perfect{" "}
          <span className="text-emerald-600">Side Hustle</span>
        </h1>
        <p className="text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
          Tell us your available hours, skills, and preferences. We will match
          you with the best side hustles and show exactly how much you can earn.
        </p>
        <p className="text-sm text-gray-400">
          30+ side hustles with real earning data and platform links
        </p>
      </div>

      {/* Calculator */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <Calculator />
      </div>

      {/* Browse by Category */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Browse Side Hustles by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((cat) => {
            const count = sideHustles.filter((h) => h.category === cat).length;
            return (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center"
              >
                <p className="font-bold text-gray-900">{cat}</p>
                <p className="text-sm text-gray-500">{count} hustles</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Top Earners Table */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Top 10 Highest-Paying Side Hustles in 2026
        </h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-emerald-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold">#</th>
                  <th className="px-4 py-3 text-sm font-semibold">Side Hustle</th>
                  <th className="px-4 py-3 text-sm font-semibold">Hourly Rate</th>
                  <th className="px-4 py-3 text-sm font-semibold">Difficulty</th>
                  <th className="px-4 py-3 text-sm font-semibold">Startup Cost</th>
                </tr>
              </thead>
              <tbody>
                {topEarners.map((h, i) => (
                  <tr
                    key={h.slug}
                    className={`border-b ${i % 2 === 0 ? "bg-gray-50" : ""}`}
                  >
                    <td className="px-4 py-3 font-bold text-emerald-600">{i + 1}</td>
                    <td className="px-4 py-3">
                      <Link
                        href={`/${h.slug}`}
                        className="font-medium text-gray-900 hover:text-emerald-600"
                      >
                        {h.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      ${h.hourlyLow}-${h.hourlyHigh}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          h.difficulty === "Easy"
                            ? "bg-green-100 text-green-800"
                            : h.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {h.difficulty}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{h.startupCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          How the Side Hustle Calculator Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-3xl font-bold text-emerald-600 mb-2">1</div>
            <h3 className="font-bold text-gray-900 mb-2">Enter Your Details</h3>
            <p className="text-gray-600 text-sm">
              Tell us how many hours per week you have, what skills you bring,
              and what type of work you prefer.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
            <h3 className="font-bold text-gray-900 mb-2">Get Matched</h3>
            <p className="text-gray-600 text-sm">
              Our calculator ranks 30+ side hustles based on your skills, time,
              and earning potential. Skill matches are highlighted.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-3xl font-bold text-emerald-600 mb-2">3</div>
            <h3 className="font-bold text-gray-900 mb-2">Start Earning</h3>
            <p className="text-gray-600 text-sm">
              Each side hustle includes platforms to get started, tips from real
              earners, and estimated monthly income at your hours.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Finding the Best Side Hustle in 2026
        </h2>
        <div className="max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            Whether you want to pay off debt, build an emergency fund, or reach
            financial independence, a side hustle can accelerate your goals. The
            gig economy in 2026 offers more options than ever, from traditional
            freelancing to app-based work to online businesses.
          </p>
          <p>
            The best side hustle for you depends on three factors: your available
            time, your existing skills, and your earning goals. Someone with 5
            hours a week and coding skills might earn more from a single
            freelance project than someone driving 20 hours for a rideshare app.
          </p>
          <p>
            Our calculator helps you cut through the noise. Instead of browsing
            generic lists, you get personalized recommendations based on your
            situation with realistic earning estimates, not inflated promises.
          </p>
          <h3>How Much Can You Realistically Earn?</h3>
          <p>
            Earnings vary wildly by side hustle. Consulting and software
            development can pay $50-300/hour, while surveys and data entry pay
            $3-20/hour. The key is matching your skills to the highest-paying
            opportunity that fits your schedule.
          </p>
          <p>
            With 10 hours per week, most people can realistically earn $500-2,000
            per month from a well-chosen side hustle. The calculator above shows
            you exactly where you fall based on your inputs.
          </p>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the highest paying side hustle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Consulting and freelance software development are the highest paying side hustles, with rates of $50-300/hour. However, they require specialized skills. For beginners, freelance writing ($15-75/hr) and virtual assistant work ($12-45/hr) offer the best balance of accessibility and pay.",
                },
              },
              {
                "@type": "Question",
                name: "How many hours per week do I need for a side hustle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can start a side hustle with as few as 5 hours per week. Passive income streams like affiliate marketing or selling digital products require upfront time but can eventually earn with minimal ongoing hours. Active hustles like freelancing or gig work scale linearly with hours invested.",
                },
              },
              {
                "@type": "Question",
                name: "What is the easiest side hustle to start?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Food delivery (DoorDash, Uber Eats), online surveys, and data entry are the easiest side hustles to start with zero skills or investment. For slightly higher earning potential, virtual assistant work and transcription are also easy entry points.",
                },
              },
              {
                "@type": "Question",
                name: "How much can I make with a side hustle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most people earn $500-2,000 per month working 10-15 hours per week on a side hustle. Top earners in high-skill hustles like consulting or web development can make $5,000+ per month. The key factors are your skill level, hours invested, and chosen hustle.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to pay taxes on side hustle income?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, side hustle income is taxable. In the US, you must report all income over $400 from self-employment. You may need to make quarterly estimated tax payments. Keep track of expenses as many are deductible (mileage, equipment, software, home office).",
                },
              },
            ],
          }),
        }}
      />

      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Side Hustle Calculator",
            description:
              "Free side hustle calculator. Input your available hours and skills to get personalized side hustle recommendations with estimated monthly earnings.",
            url: "https://side-hustle-calculator-xi.vercel.app",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </main>
  );
}
