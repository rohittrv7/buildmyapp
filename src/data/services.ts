import { Smartphone, Globe, Monitor, Database, type LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  benefits: string[];
  tech: string[];
  icon: LucideIcon;
}

export const servicesData: ServiceItem[] = [
  {
    id: "mobile-apps",
    number: "01",
    title: "Mobile Apps",
    description: "Apps for Android phones.",
    benefits: ["Smooth and fast", "Works offline", "Ready for Play Store"],
    tech: ["React Native"],
    icon: Smartphone,
  },
  {
    id: "web-apps",
    number: "02",
    title: "Websites & Web Apps",
    description: "Websites that look good and work on every screen.",
    benefits: ["Mobile friendly", "Loads fast", "Easy to use"],
    tech: ["React", "TypeScript", "Tailwind"],
    icon: Globe,
  },
  {
    id: "desktop-software",
    number: "03",
    title: "Desktop Software",
    description: "Software you install on your computer.",
    benefits: ["Works on Windows & Mac", "Fast and light", "Saves data on your device"],
    tech: ["Electron"],
    icon: Monitor,
  },
  {
    id: "backend-database",
    number: "04",
    title: "Backend & Database",
    description: "The server and data that make your app work.",
    benefits: ["Secure login", "Fast and safe data", "Easy to manage"],
    tech: ["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL", "SQLite"],
    icon: Database,
  },
];
