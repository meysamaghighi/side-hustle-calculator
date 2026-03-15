"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { sideHustles, getAllCategories, type SideHustle } from "../lib/side-hustles";

const skillOptions = [
  "Writing",
  "Design",
  "Coding",
  "Marketing",
  "Teaching",
  "Photography",
  "Video editing",
  "Data/spreadsheets",
  "Customer service",
  "Physical work",
  "Driving",
  "Sales",
  "Accounting",
  "Languages",
  "None specific",
];

export default function Calculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minDifficulty, setMinDifficulty] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"earnings" | "ease" | "flexibility">("earnings");
  const [showResults, setShowResults] = useState(false);

  const categories = getAllCategories();

  function toggleSkill(skill: string) {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  }

  function toggleCategory(cat: string) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  const results = useMemo(() => {
    let filtered = [...sideHustles];

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((h) => selectedCategories.includes(h.category));
    }

    if (minDifficulty !== "all") {
      const diffMap: Record<string, string[]> = {
        Easy: ["Easy"],
        Medium: ["Easy", "Medium"],
        Hard: ["Easy", "Medium", "Hard"],
      };
      filtered = filtered.filter((h) => diffMap[minDifficulty]?.includes(h.difficulty));
    }

    // Score each hustle based on skill match
    const scored = filtered.map((h) => {
      const skillMatch =
        selectedSkills.length === 0
          ? 0.5
          : selectedSkills.some((s) =>
              h.skills.some(
                (hs) =>
                  hs.toLowerCase().includes(s.toLowerCase()) ||
                  s.toLowerCase().includes(hs.toLowerCase())
              )
            )
          ? 1
          : 0.2;

      const avgHourly = (h.hourlyLow + h.hourlyHigh) / 2;
      const weeklyLow = h.hourlyLow * hoursPerWeek;
      const weeklyHigh = h.hourlyHigh * hoursPerWeek;
      const monthlyLow = weeklyLow * 4.33;
      const monthlyHigh = weeklyHigh * 4.33;

      return {
        ...h,
        skillMatch,
        avgHourly,
        weeklyLow,
        weeklyHigh,
        monthlyLow,
        monthlyHigh,
      };
    });

    // Sort
    scored.sort((a, b) => {
      if (sortBy === "earnings") {
        return b.avgHourly * b.skillMatch - a.avgHourly * a.skillMatch;
      }
      if (sortBy === "ease") {
        const diffScore: Record<string, number> = { Easy: 3, Medium: 2, Hard: 1 };
        return (diffScore[b.difficulty] || 0) - (diffScore[a.difficulty] || 0);
      }
      // flexibility
      const flexScore: Record<string, number> = { High: 3, Medium: 2, Low: 1 };
      return (flexScore[b.flexibility] || 0) - (flexScore[a.flexibility] || 0);
    });

    return scored;
  }, [hoursPerWeek, selectedSkills, selectedCategories, minDifficulty, sortBy]);

  return (
    <div>
      {/* Calculator Form */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Find Your Perfect Side Hustle
        </h2>

        {/* Hours per week */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            How many hours per week can you work?
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={1}
              max={40}
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <span className="text-2xl font-bold text-emerald-600 min-w-[4rem] text-right">
              {hoursPerWeek}h
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {hoursPerWeek <= 5
              ? "Great for passive income and micro-tasks"
              : hoursPerWeek <= 15
              ? "Perfect for most side hustles"
              : hoursPerWeek <= 25
              ? "Serious side hustle territory"
              : "Nearly full-time — high earning potential"}
          </p>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            What skills do you have? (select all that apply)
          </label>
          <div className="flex flex-wrap gap-2">
            {skillOptions.map((skill) => (
              <button
                key={skill}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedSkills.includes(skill)
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            What type of work interests you? (optional)
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCategories.includes(cat)
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Maximum difficulty level
          </label>
          <div className="flex gap-2">
            {["all", "Easy", "Medium", "Hard"].map((d) => (
              <button
                key={d}
                onClick={() => setMinDifficulty(d)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  minDifficulty === d
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {d === "all" ? "Any" : d}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setShowResults(true)}
          className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl text-lg hover:bg-emerald-700 transition-colors"
        >
          Find Side Hustles
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {results.length} side hustles found
            </h2>
            <div className="flex gap-2">
              <span className="text-sm text-gray-500 self-center">Sort by:</span>
              {(["earnings", "ease", "flexibility"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSortBy(s)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    sortBy === s
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {s === "earnings"
                    ? "Earnings"
                    : s === "ease"
                    ? "Easiest"
                    : "Flexibility"}
                </button>
              ))}
            </div>
          </div>

          {/* Earnings summary */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
            <p className="text-emerald-800 font-medium">
              With <strong>{hoursPerWeek} hours/week</strong>, your top match could
              earn you{" "}
              <strong>
                ${Math.round(results[0]?.monthlyLow || 0).toLocaleString()} - $
                {Math.round(results[0]?.monthlyHigh || 0).toLocaleString()}/month
              </strong>
            </p>
          </div>

          <div className="space-y-4">
            {results.map((hustle, i) => (
              <HustleCard key={hustle.slug} hustle={hustle} rank={i + 1} hoursPerWeek={hoursPerWeek} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface ScoredHustle extends SideHustle {
  skillMatch: number;
  avgHourly: number;
  weeklyLow: number;
  weeklyHigh: number;
  monthlyLow: number;
  monthlyHigh: number;
}

function HustleCard({
  hustle,
  rank,
  hoursPerWeek,
}: {
  hustle: ScoredHustle;
  rank: number;
  hoursPerWeek: number;
}) {
  const diffColor = {
    Easy: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Hard: "bg-red-100 text-red-800",
  };

  const flexColor = {
    High: "bg-blue-100 text-blue-800",
    Medium: "bg-gray-100 text-gray-800",
    Low: "bg-orange-100 text-orange-800",
  };

  return (
    <Link href={`/${hustle.slug}`} className="block">
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-emerald-600">#{rank}</span>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{hustle.name}</h3>
              <p className="text-sm text-gray-500">{hustle.category}</p>
            </div>
          </div>
          {hustle.skillMatch >= 0.8 && (
            <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full">
              Skill Match
            </span>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-3">{hustle.shortDesc}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${diffColor[hustle.difficulty]}`}>
            {hustle.difficulty}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${flexColor[hustle.flexibility]}`}>
            {hustle.flexibility} Flexibility
          </span>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-800">
            {hustle.startupCost} startup
          </span>
        </div>

        {/* Earnings bar */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Estimated earnings ({hoursPerWeek}h/week)</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-lg font-bold text-emerald-600">
              ${Math.round(hustle.monthlyLow).toLocaleString()} - $
              {Math.round(hustle.monthlyHigh).toLocaleString()}
              <span className="text-sm font-normal text-gray-500">/month</span>
            </span>
            <span className="text-sm text-gray-500">
              ${hustle.hourlyLow}-${hustle.hourlyHigh}/hr
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
