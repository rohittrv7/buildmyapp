import dtbScreenshot from "@/assets/dtb-screenshot.jpg";

export const boardSite = {
  makerName: "Ravana",
  hubName: "Toolshed",
  tagline: "Free software, built in the open.",
  aboutNote:
    "I build small, sharp tools for classrooms and desks — the kind of software I wanted and couldn't find. Everything here is free, offline-friendly, and made in my own time. If it saves you an hour, that's the whole point.",
  links: [
    { label: "Email", href: "mailto:rohittrv7@gmail.com" },
    { label: "WhatsApp", href: "https://wa.me/918227910516" },
    { label: "GitHub", href: "https://github.com/rohittrv7" },
  ],
};

export type BoardProject = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: { title: string; detail: string }[];
  downloadUrl: string;
  version: string;
  platform: string;
  fileSize: string;
  screenshot: string;
  status: "released" | "coming-soon";
};

export const boardProjects: BoardProject[] = [
  {
    id: "digital-teaching-board",
    name: "Digital Teaching Board",
    tagline: "A full-screen chalkboard for the modern classroom.",
    description:
      "Write, draw, and annotate anything on screen — built for teachers who want a board that keeps up with the lesson instead of getting in the way.",
    features: [
      { title: "Infinite board", detail: "Pan, zoom and add pages mid-lesson without losing your place." },
      { title: "Pressure-smooth ink", detail: "Pen, highlighter and shapes tuned for mice, touch and stylus alike." },
      { title: "Screen annotation", detail: "Draw straight over slides, PDFs or anything else on screen." },
      { title: "Works offline", detail: "No account, no cloud, no internet required. Installs and runs." },
    ],
    downloadUrl: "https://github.com/rohittrv7/digital-board/releases/download/Digital_Teaching_Board/Digital.Teaching.Board.Setup.1.1.0.exe",
    version: "1.1.0",
    platform: "Windows",
    fileSize: "145 MB",
    screenshot: dtbScreenshot,
    status: "released",
  },
];

export type BoardRoadmapItem = {
  id: string;
  name: string;
  blurb: string;
  target: string;
  status: "released" | "in-progress" | "planned";
};

export const boardRoadmap: BoardRoadmapItem[] = [
  {
    id: "digital-teaching-board",
    name: "Digital Teaching Board",
    blurb: "The full-screen classroom board. Out now for Windows.",
    target: "Released",
    status: "released",
  },
  {
    id: "next-tool",
    name: "Next tool (unannounced)",
    blurb: "In the workshop. Details soon.",
    target: "TBD",
    status: "in-progress",
  },
  {
    id: "later",
    name: "Whatever you suggest",
    blurb: "The suggestion box below genuinely feeds this list.",
    target: "Open",
    status: "planned",
  },
];
