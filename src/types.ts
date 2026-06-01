export interface JobExperience {
  role: string;
  company: string;
  period: string;
  tagline: string;
  bulletPoints: string[];
  skills: string[];
  logoColor: string;
  category: "Skincare" | "Consumer Insights" | "Makeup";
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  period: string;
  degree: string;
  details: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
  badge: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  objective: string;
  profileText: string;
  experiences: JobExperience[];
  hardSkills: SkillGroup[];
  softSkills: string[];
  education: EducationItem[];
  languages: LanguageItem[];
}

export type Language = "fr" | "en";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}
