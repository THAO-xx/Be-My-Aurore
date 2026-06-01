import { useState } from "react";
import { Sparkles, Globe, Mail, Phone, Moon, HelpCircle, ArrowRightLeft } from "lucide-react";
import { PORTFOLIO_DATA } from "./data";
import { Language } from "./types";
import ResumeView from "./components/ResumeView";
import AiAssistant from "./components/AiAssistant";

export default function App() {
  const [language, setLanguage] = useState<Language>("fr");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const currentData = PORTFOLIO_DATA[language];

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col font-sans text-stone-900 leading-normal selection:bg-[#dfba6b]/30 select-text">
      
      {/* Top Luxury Banner / Navigation */}
      <header className="sticky top-0 z-50 bg-[#fffdfc]/90 backdrop-blur-md border-b border-stone-200/60 px-6 py-4 shadow-3xs flex-shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Mark */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#dfba6b] to-[#17171a] flex items-center justify-center text-white font-serif text-sm font-semibold select-none shadow-sm">
              A
            </div>
            <div>
              <div className="font-serif font-medium uppercase tracking-widest text-xs text-stone-950 flex items-center gap-1.5">
                BE My Aurora
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfba6b] inline-block" />
              </div>
              <p className="text-[10px] sm:text-[10.5px] text-stone-500 font-sans tracking-wide">
                {language === "fr" ? "Agent Confidentiel & Portfolio d'Aurore" : "Aurore Dang Vu's Interactive AI Hub"}
              </p>
            </div>
          </div>

          {/* Action Tools: Bilingual Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              type="button"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 hover:border-[#dfba6b] bg-white hover:bg-stone-50 duration-300 transition-all cursor-pointer shadow-3xs hover:shadow-xs select-none"
              title={language === "fr" ? "Switch to English" : "Passer en Français"}
            >
              <Globe className="w-3.5 h-3.5 text-[#dfba6b] transition transform group-hover:rotate-12" />
              <span className="font-mono text-[11px] font-semibold text-stone-700">
                {language === "fr" ? "Français / EN" : "English / FR"}
              </span>
              <span className="text-[10px] font-bold text-[#dfba6b] px-1.5 py-0.2 rounded-md bg-[#faf5e6] border border-[#f0e3bf]">
                {language.toUpperCase()}
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Dual View Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left pane: Interactive graphical CV (7 columns on large desktop) */}
        <section className="lg:col-span-8 flex flex-col h-[calc(100vh-140px)] min-h-[500px]">
          <ResumeView data={currentData} language={language} />
        </section>

        {/* Right pane: Aurore's Intelligent AI Companion (4 columns on large desktop) */}
        <section className="lg:col-span-4 flex flex-col h-[calc(100vh-140px)] min-h-[500px]">
          <AiAssistant language={language} />
        </section>

      </main>

      {/* Ultra-minimal footer in luxury layout */}
      <footer className="w-full py-4 text-center mt-auto border-t border-stone-200/45 bg-[#fffdfb] shrink-0 text-[10px] text-stone-400 font-mono tracking-wider select-none uppercase">
        © {new Date().getFullYear()} Aurore Dang Vu — {language === "fr" ? "Tous Droits Réservés" : "All Rights Reserved"} • BBA LUXURY MANAGEMENT & ESCE MARKETING
      </footer>

    </div>
  );
}
