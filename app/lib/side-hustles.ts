export interface SideHustle {
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  description: string;
  hourlyLow: number;
  hourlyHigh: number;
  startupCost: string;
  difficulty: "Easy" | "Medium" | "Hard";
  flexibility: "High" | "Medium" | "Low";
  demandLevel: "High" | "Medium" | "Low";
  skills: string[];
  platforms: Platform[];
  tips: string[];
  searchVolume: "High" | "Medium" | "Low";
}

export interface Platform {
  name: string;
  url: string;
  description: string;
}

export const categories = [
  "Freelancing",
  "Online",
  "Gig Economy",
  "Creative",
  "Teaching",
  "Finance",
  "Tech",
] as const;

export const sideHustles: SideHustle[] = [
  {
    slug: "freelance-writing",
    name: "Freelance Writing",
    category: "Freelancing",
    shortDesc: "Write articles, blog posts, and copy for businesses",
    description:
      "Freelance writing is one of the most accessible side hustles. Businesses constantly need blog posts, articles, website copy, email newsletters, and social media content. You can start with no investment and scale your rates as you build a portfolio.",
    hourlyLow: 15,
    hourlyHigh: 75,
    startupCost: "$0",
    difficulty: "Easy",
    flexibility: "High",
    demandLevel: "High",
    skills: ["Writing", "Research", "SEO basics"],
    platforms: [
      { name: "Upwork", url: "https://www.upwork.com", description: "Largest freelance marketplace" },
      { name: "Fiverr", url: "https://www.fiverr.com", description: "Gig-based freelance platform" },
      { name: "Contently", url: "https://www.contently.com", description: "Premium content marketplace" },
    ],
    tips: [
      "Start with a niche you know well to command higher rates",
      "Build a portfolio with 3-5 sample pieces before pitching",
      "Pitch directly to companies, not just freelance platforms",
    ],
    searchVolume: "High",
  },
  {
    slug: "virtual-assistant",
    name: "Virtual Assistant",
    category: "Freelancing",
    shortDesc: "Provide remote admin support to businesses and entrepreneurs",
    description:
      "Virtual assistants handle email management, scheduling, data entry, customer service, and social media for busy entrepreneurs and small businesses. It requires no special degree and you can start quickly.",
    hourlyLow: 12,
    hourlyHigh: 45,
    startupCost: "$0",
    difficulty: "Easy",
    flexibility: "High",
    demandLevel: "High",
    skills: ["Organization", "Communication", "Basic tech skills"],
    platforms: [
      { name: "Belay", url: "https://www.belaysolutions.com", description: "Premium VA placement" },
      { name: "Time Etc", url: "https://www.timeetc.com", description: "VA marketplace" },
      { name: "Upwork", url: "https://www.upwork.com", description: "Largest freelance marketplace" },
    ],
    tips: [
      "Specialize in a niche like real estate VAs or ecommerce VAs for higher rates",
      "Learn tools like Asana, Slack, and Google Workspace",
      "Offer a free trial hour to land your first client",
    ],
    searchVolume: "High",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    category: "Creative",
    shortDesc: "Create logos, social media graphics, and marketing materials",
    description:
      "Every business needs visual content — logos, social media posts, presentations, flyers, and brand assets. If you have an eye for design, tools like Canva and Figma make it easy to start, while Adobe Creative Suite opens up premium work.",
    hourlyLow: 20,
    hourlyHigh: 100,
    startupCost: "$0-50/mo",
    difficulty: "Medium",
    flexibility: "High",
    demandLevel: "High",
    skills: ["Design principles", "Typography", "Color theory", "Adobe Suite or Canva"],
    platforms: [
      { name: "99designs", url: "https://www.99designs.com", description: "Design contest platform" },
      { name: "Fiverr", url: "https://www.fiverr.com", description: "Gig-based freelance platform" },
      { name: "Dribbble", url: "https://www.dribbble.com", description: "Designer portfolio and jobs" },
    ],
    tips: [
      "Build a portfolio on Behance or Dribbble before taking paid work",
      "Logo design and social media templates are the easiest entry point",
      "Offer package deals (logo + business card + social media kit)",
    ],
    searchVolume: "High",
  },
  {
    slug: "online-tutoring",
    name: "Online Tutoring",
    category: "Teaching",
    shortDesc: "Teach students subjects you excel in via video calls",
    description:
      "Online tutoring lets you teach math, science, languages, test prep, or any subject you are strong in. The market is huge — parents pay well for quality tutoring, especially for SAT/ACT prep, coding, and STEM subjects.",
    hourlyLow: 20,
    hourlyHigh: 80,
    startupCost: "$0",
    difficulty: "Easy",
    flexibility: "High",
    demandLevel: "High",
    skills: ["Subject expertise", "Patience", "Communication"],
    platforms: [
      { name: "Wyzant", url: "https://www.wyzant.com", description: "Tutoring marketplace" },
      { name: "Tutor.com", url: "https://www.tutor.com", description: "Online tutoring platform" },
      { name: "Preply", url: "https://www.preply.com", description: "Language and subject tutoring" },
    ],
    tips: [
      "Test prep tutoring (SAT, GRE, GMAT) commands the highest rates",
      "Start with a lower rate and raise it as you get reviews",
      "Record sessions (with permission) to create content for marketing",
    ],
    searchVolume: "High",
  },
  {
    slug: "food-delivery",
    name: "Food Delivery Driver",
    category: "Gig Economy",
    shortDesc: "Deliver food with DoorDash, Uber Eats, or Grubhub",
    description:
      "Food delivery is the fastest way to start earning. Sign up, pass a background check, and start delivering. Best earnings are during lunch (11am-1pm) and dinner (5pm-9pm) rushes, especially on weekends.",
    hourlyLow: 10,
    hourlyHigh: 25,
    startupCost: "$0 (need a car/bike)",
    difficulty: "Easy",
    flexibility: "High",
    demandLevel: "High",
    skills: ["Driving", "Navigation", "Time management"],
    platforms: [
      { name: "DoorDash", url: "https://www.doordash.com", description: "Largest food delivery platform" },
      { name: "Uber Eats", url: "https://www.ubereats.com", description: "Food delivery by Uber" },
      { name: "Grubhub", url: "https://www.grubhub.com", description: "Food delivery platform" },
    ],
    tips: [
      "Multi-app (run DoorDash and Uber Eats simultaneously) to stay busy",
      "Track your mileage for tax deductions — it adds up significantly",
      "Focus on dinner rush in areas with lots of restaurants",
    ],
    searchVolume: "High",
  },
  {
    slug: "rideshare-driving",
    name: "Rideshare Driver",
    category: "Gig Economy",
    shortDesc: "Drive for Uber or Lyft on your own schedule",
    description:
      "Rideshare driving gives you complete schedule flexibility. Earnings vary hugely by city and time — airport runs, late night weekend rides, and surge pricing during events are where the real money is.",
    hourlyLow: 12,
    hourlyHigh: 30,
    startupCost: "$0 (need a qualifying car)",
    difficulty: "Easy",
    flexibility: "High",
    demandLevel: "High",
    skills: ["Driving", "Customer service", "Navigation"],
    platforms: [
      { name: "Uber", url: "https://www.uber.com", description: "Largest rideshare platform" },
      { name: "Lyft", url: "https://www.lyft.com", description: "Second largest rideshare" },
    ],
    tips: [
      "Drive during surge pricing hours (Friday/Saturday nights, events, bad weather)",
      "Keep your car clean and offer water/chargers for better ratings and tips",
      "Track all expenses — gas, maintenance, car washes are tax deductible",
    ],
    searchVolume: "High",
  },
  {
    slug: "web-development",
    name: "Freelance Web Development",
    category: "Tech",
    shortDesc: "Build websites and web apps for businesses",
    description:
      "Small businesses constantly need websites, landing pages, and web applications. If you know HTML/CSS/JavaScript or WordPress, you can start immediately. React, Next.js, and other modern frameworks command premium rates.",
    hourlyLow: 30,
    hourlyHigh: 150,
    startupCost: "$0",
    difficulty: "Hard",
    flexibility: "High",
    demandLevel: "High",
    skills: ["HTML/CSS", "JavaScript", "React or WordPress", "Git"],
    platforms: [
      { name: "Toptal", url: "https://www.toptal.com", description: "Top 3% freelance developers" },
      { name: "Upwork", url: "https://www.upwork.com", description: "Largest freelance marketplace" },
      { name: "Fiverr", url: "https://www.fiverr.com", description: "Gig-based freelance platform" },
    ],
    tips: [
      "Build 2-3 demo sites to showcase before taking clients",
      "WordPress sites for local businesses are the easiest entry point",
      "Charge project-based, not hourly — you earn more as you get faster",
    ],
    searchVolume: "High",
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    category: "Online",
    shortDesc: "Manage social media accounts for businesses",
    description:
      "Small businesses know they need social media but don't have time to do it. Managing their Instagram, Facebook, TikTok, and LinkedIn — creating posts, scheduling content, engaging with followers — is a growing side hustle.",
    hourlyLow: 15,
    hourlyHigh: 50,
    startupCost: "$0",
    difficulty: "Easy",
    flexibility: "Medium",
    demandLevel: "High",
    skills: ["Social media knowledge", "Content creation", "Copywriting", "Basic analytics"],
    platforms: [
      { name: "Upwork", url: "https://www.upwork.com", description: "Largest freelance marketplace" },
      { name: "Fiverr", url: "https://www.fiverr.com", description: "Gig-based freelance platform" },
    ],
    tips: [
      "Offer to manage a local business's account for free for 30 days to build your portfolio",
      "Learn scheduling tools like Buffer and Hootsuite",
      "Package deals work well — e.g. 12 posts/month + stories for $500/mo",
    ],
    searchVolume: "High",
  },
  {
    slug: "dropshipping",
    name: "Dropshipping",
    category: "Online",
    shortDesc: "Sell products online without holding inventory",
    description:
      "Dropshipping lets you run an online store without buying or storing products. When a customer orders, you forward the order to a supplier who ships directly. Your profit is the markup. Requires marketing skills to drive traffic.",
    hourlyLow: 0,
    hourlyHigh: 100,
    startupCost: "$50-500",
    difficulty: "Medium",
    flexibility: "Medium",
    demandLevel: "Medium",
    skills: ["Marketing", "Facebook/Google Ads", "Product research", "Customer service"],
    platforms: [
      { name: "Shopify", url: "https://www.shopify.com", description: "Leading ecommerce platform" },
      { name: "AliExpress", url: "https://www.aliexpress.com", description: "Product sourcing" },
    ],
    tips: [
      "Test products with small ad budgets before scaling",
      "Focus on a niche — pet products, fitness gear, phone accessories",
      "Customer service and fast shipping are what separate winners from failures",
    ],
    searchVolume: "High",
  },
  {
    slug: "youtube-channel",
    name: "YouTube Channel",
    category: "Creative",
    shortDesc: "Create video content and earn from ads and sponsorships",
    description:
      "YouTube is a long-term play but can generate significant passive income. You need 1,000 subscribers and 4,000 watch hours to monetize with ads. Niche channels (finance, tech reviews, tutorials) earn higher CPMs than entertainment.",
    hourlyLow: 0,
    hourlyHigh: 50,
    startupCost: "$0-500",
    difficulty: "Hard",
    flexibility: "High",
    demandLevel: "Medium",
    skills: ["Video editing", "On-camera presence", "Content planning", "SEO"],
    platforms: [
      { name: "YouTube", url: "https://www.youtube.com", description: "Largest video platform" },
    ],
    tips: [
      "Finance and tech niches pay the highest CPMs ($15-30 per 1000 views)",
      "Consistency matters more than production quality — post weekly",
      "Optimize titles and thumbnails — they determine 80% of your click-through rate",
    ],
    searchVolume: "High",
  },
  {
    slug: "sell-on-etsy",
    name: "Sell on Etsy",
    category: "Creative",
    shortDesc: "Sell handmade, vintage, or digital products on Etsy",
    description:
      "Etsy is a marketplace for unique, handmade, vintage, and digital products. Digital products (printables, templates, planners) are especially attractive because you create them once and sell unlimited copies with no inventory.",
    hourlyLow: 5,
    hourlyHigh: 60,
    startupCost: "$0-100",
    difficulty: "Medium",
    flexibility: "High",
    demandLevel: "High",
    skills: ["Product creation", "Photography", "SEO", "Marketing"],
    platforms: [
      { name: "Etsy", url: "https://www.etsy.com", description: "Handmade and digital marketplace" },
    ],
    tips: [
      "Digital products (printable planners, SVG files, templates) have the best margins",
      "Etsy SEO is crucial — research keywords with tools like eRank",
      "Good product photography is the single biggest factor in conversion",
    ],
    searchVolume: "High",
  },
  {
    slug: "bookkeeping",
    name: "Bookkeeping",
    category: "Finance",
    shortDesc: "Manage financial records for small businesses",
    description:
      "Small businesses need bookkeepers but cannot afford full-time staff. If you are comfortable with numbers and tools like QuickBooks or Xero, bookkeeping is a stable, well-paying side hustle with recurring revenue.",
    hourlyLow: 20,
    hourlyHigh: 60,
    startupCost: "$0-200",
    difficulty: "Medium",
    flexibility: "Medium",
    demandLevel: "High",
    skills: ["Accounting basics", "QuickBooks/Xero", "Attention to detail", "Organization"],
    platforms: [
      { name: "Upwork", url: "https://www.upwork.com", description: "Largest freelance marketplace" },
      { name: "Bench", url: "https://www.bench.co", description: "Online bookkeeping service" },
    ],
    tips: [
      "Get QuickBooks certified for free — it makes you much more hireable",
      "Target local businesses like restaurants, contractors, and retail shops",
      "Monthly retainer clients are better than one-off projects",
    ],
    searchVolume: "Medium",
  },
  {
    slug: "pet-sitting",
    name: "Pet Sitting and Dog Walking",
    category: "Gig Economy",
    shortDesc: "Care for pets while owners are away or at work",
    description:
      "Pet owners pay well for reliable sitters and dog walkers. This is a great side hustle if you love animals. Dog walking during lunch hours and pet sitting during holidays are peak earning periods.",
    hourlyLow: 12,
    hourlyHigh: 30,
    startupCost: "$0",
    difficulty: "Easy",
    flexibility: "Medium",
    demandLevel: "High",
    skills: ["Animal care", "Reliability", "Communication"],
    platforms: [
      { name: "Rover", url: "https://www.rover.com", description: "Pet sitting and walking marketplace" },
      { name: "Wag!", url: "https://www.wagwalking.com", description: "Dog walking app" },
    ],
    tips: [
      "Holiday pet sitting (Christmas, Thanksgiving) commands premium rates",
      "Get repeat clients — most pet owners want the same sitter every time",
      "Offer add-on services like grooming or training for higher earnings",
    ],
    searchVolume: "Medium",
  },
  {
    slug: "transcription",
    name: "Transcription",
    category: "Online",
    shortDesc: "Convert audio and video files into text",
    description:
      "Transcription involves listening to audio or video recordings and typing out the content. Medical and legal transcription pay the most. General transcription is the easiest entry point. Good typing speed is essential.",
    hourlyLow: 10,
    hourlyHigh: 35,
    startupCost: "$0",
    difficulty: "Easy",
    flexibility: "High",
    demandLevel: "Medium",
    skills: ["Fast typing (60+ WPM)", "Listening comprehension", "Attention to detail"],
    platforms: [
      { name: "Rev", url: "https://www.rev.com", description: "Transcription and captioning" },
      { name: "TranscribeMe", url: "https://www.transcribeme.com", description: "Transcription platform" },
      { name: "GoTranscript", url: "https://www.gotranscript.com", description: "Transcription services" },
    ],
    tips: [
      "Use a foot pedal to control audio playback — it dramatically increases speed",
      "Medical and legal transcription pay 2-3x more but require training",
      "AI tools are changing this field — focus on accuracy and complex audio that AI struggles with",
    ],
    searchVolume: "Medium",
  },
  {
    slug: "affiliate-marketing",
    name: "Affiliate Marketing",
    category: "Online",
    shortDesc: "Earn commissions by promoting other companies products",
    description:
      "Affiliate marketing means recommending products and earning a commission when someone buys through your link. It works through blogs, YouTube, social media, or email lists. The key is building an audience that trusts your recommendations.",
    hourlyLow: 0,
    hourlyHigh: 100,
    startupCost: "$0-100",
    difficulty: "Medium",
    flexibility: "High",
    demandLevel: "Medium",
    skills: ["Content creation", "SEO", "Marketing", "Audience building"],
    platforms: [
      { name: "Amazon Associates", url: "https://affiliate-program.amazon.com", description: "Amazon affiliate program" },
      { name: "ShareASale", url: "https://www.shareasale.com", description: "Affiliate network" },
      { name: "CJ Affiliate", url: "https://www.cj.com", description: "Large affiliate network" },
    ],
    tips: [
      "Write honest review posts targeting buyer-intent keywords",
      "Finance, software, and hosting affiliates pay the highest commissions",
      "Email lists convert better than social media for affiliate sales",
    ],
    searchVolume: "High",
  },
  {
    slug: "photography",
    name: "Photography",
    category: "Creative",
    shortDesc: "Shoot events, portraits, products, or sell stock photos",
    description:
      "Photography side hustles range from weekend event shooting to selling stock photos online. Product photography for ecommerce is booming. Even a good smartphone camera can get you started with real estate and food photography.",
    hourlyLow: 25,
    hourlyHigh: 100,
    startupCost: "$0-2000",
    difficulty: "Medium",
    flexibility: "Medium",
    demandLevel: "Medium",
    skills: ["Camera operation", "Lighting", "Photo editing", "Composition"],
    platforms: [
      { name: "Shutterstock", url: "https://www.shutterstock.com", description: "Stock photo marketplace" },
      { name: "Adobe Stock", url: "https://stock.adobe.com", description: "Stock photo marketplace" },
    ],
    tips: [
      "Product photography for Amazon sellers is a growing niche",
      "Offer mini sessions (20 minutes, 10 edited photos) for families — easy to sell",
      "Stock photography is passive income but requires volume",
    ],
    searchVolume: "Medium",
  },
  {
    slug: "data-entry",
    name: "Data Entry",
    category: "Online",
    shortDesc: "Input and organize data for businesses remotely",
    description:
      "Data entry is one of the simplest online side hustles. It involves entering information into spreadsheets, databases, or CRM systems. The pay is lower than specialized work, but the barrier to entry is almost zero.",
    hourlyLow: 10,
    hourlyHigh: 20,
    startupCost: "$0",
    difficulty: "Easy",
    flexibility: "High",
    demandLevel: "Medium",
    skills: ["Typing speed", "Accuracy", "Spreadsheet basics"],
    platforms: [
      { name: "Clickworker", url: "https://www.clickworker.com", description: "Micro-task platform" },
      { name: "Upwork", url: "https://www.upwork.com", description: "Largest freelance marketplace" },
    ],
    tips: [
      "Accuracy matters more than speed — double check your work",
      "Use data entry as a stepping stone to virtual assistant or bookkeeping roles",
      "Learn Excel shortcuts to dramatically increase your output",
    ],
    searchVolume: "Medium",
  },
  {
    slug: "online-surveys",
    name: "Online Surveys and Microtasks",
    category: "Online",
    shortDesc: "Complete surveys and small tasks for cash or gift cards",
    description:
      "Online surveys and microtasks are the lowest-effort side hustle. The pay is low but it requires zero skills and can be done from your phone during downtime. Best for earning gift cards or small amounts of extra cash.",
    hourlyLow: 3,
    hourlyHigh: 10,
    startupCost: "$0",
    difficulty: "Easy",
    flexibility: "High",
    demandLevel: "Low",
    skills: ["None required"],
    platforms: [
      { name: "Swagbucks", url: "https://www.swagbucks.com", description: "Surveys and rewards" },
      { name: "Prolific", url: "https://www.prolific.co", description: "Academic research surveys" },
      { name: "Amazon MTurk", url: "https://www.mturk.com", description: "Microtask platform" },
    ],
    tips: [
      "Prolific pays the best and has the most interesting surveys",
      "Do not pay to join any survey site — they are all free",
      "This is best for phone downtime, not as a primary income source",
    ],
    searchVolume: "High",
  },
  {
    slug: "reselling",
    name: "Reselling (Flipping)",
    category: "Gig Economy",
    shortDesc: "Buy low at thrift stores and sell high online",
    description:
      "Reselling means finding underpriced items at thrift stores, garage sales, estate sales, and clearance racks, then selling them for a profit on eBay, Poshmark, or Facebook Marketplace. Popular categories include clothing, electronics, books, and collectibles.",
    hourlyLow: 10,
    hourlyHigh: 50,
    startupCost: "$50-200",
    difficulty: "Medium",
    flexibility: "High",
    demandLevel: "Medium",
    skills: ["Product knowledge", "Pricing research", "Photography", "Negotiation"],
    platforms: [
      { name: "eBay", url: "https://www.ebay.com", description: "Largest online auction site" },
      { name: "Poshmark", url: "https://www.poshmark.com", description: "Fashion resale marketplace" },
      { name: "Facebook Marketplace", url: "https://www.facebook.com/marketplace", description: "Local buy/sell" },
    ],
    tips: [
      "Use the eBay app to scan barcodes and check sold prices before buying",
      "Start with a category you know — shoes, video games, or books",
      "Estate sales and liquidation auctions have the best margins",
    ],
    searchVolume: "High",
  },
  {
    slug: "teach-english-online",
    name: "Teach English Online",
    category: "Teaching",
    shortDesc: "Teach English to students worldwide via video",
    description:
      "There is massive demand for English teachers from students in Asia, South America, and Europe. If you are a native or fluent English speaker, you can teach conversational English, business English, or exam prep online.",
    hourlyLow: 12,
    hourlyHigh: 40,
    startupCost: "$0",
    difficulty: "Easy",
    flexibility: "Medium",
    demandLevel: "High",
    skills: ["English fluency", "Patience", "Basic teaching ability"],
    platforms: [
      { name: "Preply", url: "https://www.preply.com", description: "Language tutoring platform" },
      { name: "italki", url: "https://www.italki.com", description: "Language learning marketplace" },
      { name: "Cambly", url: "https://www.cambly.com", description: "Casual English conversation" },
    ],
    tips: [
      "A TEFL certificate is not required but increases your rate significantly",
      "Business English and exam prep (IELTS, TOEFL) pay the most",
      "Early morning and late evening slots match Asian time zones",
    ],
    searchVolume: "High",
  },
  {
    slug: "podcast-editing",
    name: "Podcast Editing",
    category: "Creative",
    shortDesc: "Edit and produce podcasts for creators",
    description:
      "The podcast industry is booming and most creators do not want to edit their own episodes. Audio editing, show notes, and publishing are in high demand. If you can use Audacity or Adobe Audition, this is a growing niche.",
    hourlyLow: 20,
    hourlyHigh: 75,
    startupCost: "$0",
    difficulty: "Medium",
    flexibility: "High",
    demandLevel: "Medium",
    skills: ["Audio editing", "Attention to detail", "Communication"],
    platforms: [
      { name: "Upwork", url: "https://www.upwork.com", description: "Largest freelance marketplace" },
      { name: "Fiverr", url: "https://www.fiverr.com", description: "Gig-based freelance platform" },
    ],
    tips: [
      "Offer a package: editing + show notes + publishing for a per-episode rate",
      "Most podcasters release weekly — this means recurring monthly income",
      "Learn noise removal, leveling, and intro/outro editing as your core skills",
    ],
    searchVolume: "Medium",
  },
  {
    slug: "house-cleaning",
    name: "House Cleaning",
    category: "Gig Economy",
    shortDesc: "Offer residential cleaning services in your area",
    description:
      "House cleaning is a reliable local side hustle with repeat clients. You can start with basic supplies you already own. Once you build a client base, income becomes predictable and you can raise rates.",
    hourlyLow: 15,
    hourlyHigh: 40,
    startupCost: "$0-100",
    difficulty: "Easy",
    flexibility: "Medium",
    demandLevel: "High",
    skills: ["Attention to detail", "Physical stamina", "Reliability"],
    platforms: [
      { name: "Handy", url: "https://www.handy.com", description: "Home cleaning platform" },
      { name: "TaskRabbit", url: "https://www.taskrabbit.com", description: "Local task marketplace" },
    ],
    tips: [
      "Go direct to clients after building a reputation — skip the platform fees",
      "Offer deep cleaning as a premium service at higher rates",
      "Consistent weekly clients are more valuable than one-time jobs",
    ],
    searchVolume: "Medium",
  },
  {
    slug: "sell-online-courses",
    name: "Sell Online Courses",
    category: "Teaching",
    shortDesc: "Create and sell courses on topics you are expert in",
    description:
      "If you have expertise in anything — coding, cooking, photography, marketing, music — you can create an online course and sell it. The beauty is that you create it once and sell it indefinitely. Top Udemy instructors earn six figures.",
    hourlyLow: 0,
    hourlyHigh: 200,
    startupCost: "$0-100",
    difficulty: "Hard",
    flexibility: "High",
    demandLevel: "Medium",
    skills: ["Subject expertise", "Teaching ability", "Video production", "Marketing"],
    platforms: [
      { name: "Udemy", url: "https://www.udemy.com", description: "Largest course marketplace" },
      { name: "Skillshare", url: "https://www.skillshare.com", description: "Creative course platform" },
      { name: "Teachable", url: "https://www.teachable.com", description: "Course hosting platform" },
    ],
    tips: [
      "Validate demand before recording — check Udemy for similar courses and their enrollment",
      "Keep videos short (5-10 minutes) and practical",
      "Your own platform (Teachable) pays better than marketplaces but requires your own traffic",
    ],
    searchVolume: "High",
  },
  {
    slug: "proofreading",
    name: "Proofreading",
    category: "Freelancing",
    shortDesc: "Review and correct written content for errors",
    description:
      "Proofreading involves checking documents for grammar, spelling, punctuation, and formatting errors. It is a quiet, detail-oriented side hustle that works well for introverts. Academic, legal, and business proofreading pay the best.",
    hourlyLow: 15,
    hourlyHigh: 45,
    startupCost: "$0",
    difficulty: "Easy",
    flexibility: "High",
    demandLevel: "Medium",
    skills: ["Grammar expertise", "Attention to detail", "Knowledge of style guides"],
    platforms: [
      { name: "Scribendi", url: "https://www.scribendi.com", description: "Editing and proofreading" },
      { name: "Upwork", url: "https://www.upwork.com", description: "Largest freelance marketplace" },
    ],
    tips: [
      "Get familiar with AP Style and Chicago Manual of Style",
      "Academic proofreading (theses, dissertations) is a steady niche",
      "Always do a test project before quoting long-term rates",
    ],
    searchVolume: "Medium",
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    category: "Tech",
    shortDesc: "Build mobile apps for clients or as your own products",
    description:
      "Mobile developers are in high demand. You can build apps for clients on freelance platforms, or build and publish your own apps and monetize with ads or in-app purchases. React Native and Flutter make cross-platform development accessible.",
    hourlyLow: 40,
    hourlyHigh: 150,
    startupCost: "$25-125 (app store fees)",
    difficulty: "Hard",
    flexibility: "High",
    demandLevel: "High",
    skills: ["JavaScript/Dart", "React Native or Flutter", "UI/UX", "API integration"],
    platforms: [
      { name: "Toptal", url: "https://www.toptal.com", description: "Top 3% freelance developers" },
      { name: "Upwork", url: "https://www.upwork.com", description: "Largest freelance marketplace" },
    ],
    tips: [
      "React Native or Flutter let you ship iOS and Android from one codebase",
      "Building your own simple apps (tools, games) can generate passive income",
      "App store optimization (ASO) is as important as SEO for discoverability",
    ],
    searchVolume: "High",
  },
  {
    slug: "tax-preparation",
    name: "Tax Preparation",
    category: "Finance",
    shortDesc: "Prepare tax returns for individuals and small businesses",
    description:
      "Tax preparation is a high-earning seasonal side hustle. From January to April, tax preparers are in massive demand. You need training and certification (like the IRS PTIN in the US) but the earning potential during tax season is excellent.",
    hourlyLow: 25,
    hourlyHigh: 75,
    startupCost: "$100-500",
    difficulty: "Medium",
    flexibility: "Low",
    demandLevel: "High",
    skills: ["Tax law knowledge", "Accounting", "Attention to detail", "Client communication"],
    platforms: [
      { name: "H&R Block", url: "https://www.hrblock.com", description: "Tax preparation company" },
      { name: "Jackson Hewitt", url: "https://www.jacksonhewitt.com", description: "Tax services" },
    ],
    tips: [
      "Get your IRS PTIN (Preparer Tax Identification Number) — it is free",
      "Start by doing taxes for friends and family to build experience",
      "Seasonal work from January to April means you can earn a lot in a short time",
    ],
    searchVolume: "Medium",
  },
  {
    slug: "personal-training",
    name: "Personal Training",
    category: "Gig Economy",
    shortDesc: "Train clients in-person or online for fitness goals",
    description:
      "Personal trainers help clients achieve fitness goals through customized workout programs. You can train in-person at gyms, at clients' homes, or online through video calls and custom workout plans.",
    hourlyLow: 25,
    hourlyHigh: 80,
    startupCost: "$200-500 (certification)",
    difficulty: "Medium",
    flexibility: "Medium",
    demandLevel: "High",
    skills: ["Fitness knowledge", "Motivation", "Program design", "Nutrition basics"],
    platforms: [
      { name: "Trainerize", url: "https://www.trainerize.com", description: "Online personal training" },
    ],
    tips: [
      "Online training scales better — you can manage 20+ clients vs 5-6 in person",
      "Specialize in a niche: postpartum, seniors, athletes, busy professionals",
      "Get a basic certification like NASM or ACE to build credibility",
    ],
    searchVolume: "Medium",
  },
  {
    slug: "consulting",
    name: "Consulting",
    category: "Freelancing",
    shortDesc: "Offer expert advice in your professional field",
    description:
      "If you have deep expertise in any professional area — marketing, HR, operations, engineering, finance — you can consult for other businesses. This is the highest-paying side hustle if you have valuable domain knowledge.",
    hourlyLow: 50,
    hourlyHigh: 300,
    startupCost: "$0",
    difficulty: "Hard",
    flexibility: "Medium",
    demandLevel: "Medium",
    skills: ["Domain expertise", "Communication", "Problem solving", "Business acumen"],
    platforms: [
      { name: "Clarity.fm", url: "https://www.clarity.fm", description: "Expert call marketplace" },
      { name: "Toptal", url: "https://www.toptal.com", description: "Top freelance talent" },
      { name: "LinkedIn", url: "https://www.linkedin.com", description: "Professional networking" },
    ],
    tips: [
      "Start by offering free 30-minute calls to build testimonials",
      "Package your expertise into frameworks and deliverables, not just advice",
      "Your network is your best lead source — tell everyone what you offer",
    ],
    searchVolume: "Medium",
  },
  {
    slug: "voiceover",
    name: "Voiceover Work",
    category: "Creative",
    shortDesc: "Record voiceovers for ads, videos, and audiobooks",
    description:
      "Voiceover artists record narration for commercials, YouTube videos, corporate training, audiobooks, and podcasts. A decent microphone and quiet recording space are all you need to start. Unique voices and accents are in demand.",
    hourlyLow: 20,
    hourlyHigh: 100,
    startupCost: "$100-500 (microphone setup)",
    difficulty: "Medium",
    flexibility: "High",
    demandLevel: "Medium",
    skills: ["Clear speaking voice", "Microphone technique", "Audio editing basics"],
    platforms: [
      { name: "Voices.com", url: "https://www.voices.com", description: "Voiceover marketplace" },
      { name: "Fiverr", url: "https://www.fiverr.com", description: "Gig-based freelance platform" },
      { name: "ACX", url: "https://www.acx.com", description: "Audiobook creation exchange" },
    ],
    tips: [
      "Audiobook narration via ACX can generate royalty income for years",
      "A treated closet with blankets makes a surprisingly good recording booth",
      "Create demo reels in different styles — commercial, narration, character",
    ],
    searchVolume: "Medium",
  },
  {
    slug: "seo-consulting",
    name: "SEO Consulting",
    category: "Tech",
    shortDesc: "Help businesses rank higher in Google search results",
    description:
      "SEO consulting helps businesses improve their Google rankings and organic traffic. Small businesses are willing to pay well for someone who can get them on page one of Google for their target keywords.",
    hourlyLow: 30,
    hourlyHigh: 150,
    startupCost: "$0-100",
    difficulty: "Medium",
    flexibility: "High",
    demandLevel: "High",
    skills: ["SEO knowledge", "Analytics", "Content strategy", "Technical auditing"],
    platforms: [
      { name: "Upwork", url: "https://www.upwork.com", description: "Largest freelance marketplace" },
      { name: "Moz", url: "https://www.moz.com", description: "SEO tools and community" },
    ],
    tips: [
      "Start by doing a free SEO audit for a local business to show your value",
      "Focus on local SEO — it is easier to rank and businesses pay well for it",
      "Monthly retainers ($500-2000/mo) are the standard pricing model",
    ],
    searchVolume: "Medium",
  },
];

export function getHustleBySlug(slug: string): SideHustle | undefined {
  return sideHustles.find((h) => h.slug === slug);
}

export function getHustlesByCategory(category: string): SideHustle[] {
  return sideHustles.filter((h) => h.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(sideHustles.map((h) => h.category))];
}
