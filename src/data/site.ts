import dtbScreenshot from "@/assets/dtb-screenshot.jpg";

export const site = {
  name: "BuildMyApp by Ravana",
  brandName: "BuildMyApp by Ravana",
  shortName: "BuildMyApp",
  domain: "buildmyapp.store",
  developerName: "Ravana",
  email: "rohittrv7@gmail.com",
  whatsapp: "https://wa.me/918227910516",
  phone: "+91 8227910516",
  socials: { github: "", linkedin: "", instagram: "" },
};

export type Project = {
  slug: string;
  name: string;
  category: "Android" | "Web" | "Desktop";
  kind: "App build" | "Software build";
  summary: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  features: string[];
  screenshot?: string;
};

export const projects: Project[] = [
  {
    slug: "cadence",
    name: "Cadence",
    category: "Android",
    kind: "App build",
    summary: "A calm daily habit tracker for Android phones.",
    problem: "Most habit apps are confusing, full of ads, and need an internet connection all the time.",
    solution: "An offline-first Android app with clean reminders, streaks, and simple daily routines.",
    result: "A reliable mobile app that works fast and helps people keep daily habits.",
    stack: ["React Native", "SQLite"],
    features: ["Simple daily routines", "Works offline", "Weekly progress view"],
  },
  {
    slug: "fieldnote",
    name: "Fieldnote",
    category: "Android",
    kind: "App build",
    summary: "A quick note-taking app that works without internet.",
    problem: "People working outdoors lose notes when they have no mobile network.",
    solution: "A map-enabled notebook that saves all notes safely on the phone and syncs later.",
    result: "A dependable Android app made for offline note-taking and easy export.",
    stack: ["React Native", "SQLite"],
    features: ["Offline notes", "Location markers", "Clean file export"],
  },
  {
    slug: "ledgerlite",
    name: "Ledgerlite",
    category: "Web",
    kind: "Software build",
    summary: "Simple money and invoice tracker for independent workers.",
    problem: "Small business owners waste hours tracking receipts and bills on paper.",
    solution: "A clean web dashboard to add receipts, track spending, and send simple invoices.",
    result: "A fast web app that makes monthly bookkeeping easy.",
    stack: ["React", "TypeScript", "PostgreSQL"],
    features: ["Income and expense lists", "Receipt photos", "One-click reports"],
  },
  {
    slug: "digital-teaching-board",
    name: "Digital Teaching Board",
    category: "Desktop",
    kind: "Software build",
    summary: "A full-screen chalkboard and screen annotation app for Windows.",
    problem: "Teachers and presenters struggle with clumsy whiteboard software that slows down lessons.",
    solution: "A high-performance offline Windows app for smooth inking, infinite canvas, and screen drawing.",
    result: "A fast, distraction-free classroom teaching board used for real-time lessons and recordings.",
    stack: ["Electron", "React", "TypeScript"],
    features: ["Infinite canvas", "Pressure-smooth ink", "Screen annotation", "Works 100% offline"],
    screenshot: dtbScreenshot,
  },
];

export const products = [
  {
    slug: "focus-board",
    name: "Focus Board",
    category: "Productivity",
    version: "1.0.0",
    size: "18 KB",
    price: "Free",
    description: "A simple daily planner that opens right in your web browser.",
    icon: "◫",
    file: "/downloads/focus-board.html",
    features: ["No sign up needed", "Set three daily goals", "Saves privately in your browser"],
  },
  {
    slug: "meeting-math",
    name: "Meeting Math",
    category: "Utilities",
    version: "1.0.0",
    size: "16 KB",
    price: "Free",
    description: "Calculate the real cost of a meeting and save team time.",
    icon: "⌁",
    file: "/downloads/meeting-math.html",
    features: ["Live cost counter", "Simple currency input", "Runs on any browser"],
  },
  {
    slug: "launch-checklist",
    name: "Launch Checklist",
    category: "Templates",
    version: "1.0.0",
    size: "12 KB",
    price: "Free",
    description: "A clean checklist to make sure your app is ready to launch.",
    icon: "↗",
    file: "/downloads/launch-checklist.html",
    features: ["Interactive checkboxes", "Saves progress locally", "Easy to print"],
  },
];

export type Post = {
  slug: string;
  title: string;
  category: string;
  read: string;
  date: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "from-rough-idea-to-first-build",
    title: "From a rough idea to your first working app",
    category: "App Advice",
    read: "4 min read",
    date: "Guide",
    excerpt: "The first version of your app should focus on one main problem that matters most.",
    content: [
      "When people get an idea for an app, they often write down a very long list of features.",
      "The best approach is to build the simplest version first. Find the one main thing your app does, and make that work really well.",
      "Once real people start using it, you will know exactly what features to add next.",
      "Building simple first saves you money and gets your app into people's hands much faster."
    ]
  },
  {
    slug: "what-to-prepare-before-a-software-quote",
    title: "What to prepare before you ask for an app quote",
    category: "Getting Started",
    read: "3 min read",
    date: "Guide",
    excerpt: "A few clear answers make it easy to give you an accurate price and timeline.",
    content: [
      "You do not need complicated technical documents before reaching out to a developer.",
      "Just write down who will use the app, what they will do inside the app, and any examples of apps you like.",
      "Even simple hand-drawn sketches on paper help a lot.",
      "With these basic details, I can give you a clear plan and a fair price right away."
    ]
  },
  {
    slug: "why-offline-first-software-wins",
    title: "Why apps should work without internet",
    category: "Tech Notes",
    read: "4 min read",
    date: "Guide",
    excerpt: "Apps that save data locally feel instant and never lose your work when network drops.",
    content: [
      "Everyone has had an app freeze because of poor mobile network.",
      "When an app saves data right on your device first using SQLite, it opens fast and never makes you wait.",
      "When the connection comes back, the app updates automatically in the background.",
      "This makes the app feel smooth, trustworthy, and pleasant to use every day."
    ]
  }
];
