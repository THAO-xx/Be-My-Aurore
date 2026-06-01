import { useState } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Calendar, 
  Award, 
  ChevronRight, 
  Languages, 
  ArrowRight,
  ExternalLink,
  Crown,
  Sparkles,
  BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PortfolioData, Language, JobExperience } from "../types";
import AuroreAvatar from "./AuroreAvatar";

interface ResumeViewProps {
  data: PortfolioData;
  language: Language;
}

export default function ResumeView({ data, language }: ResumeViewProps) {
  const [activeTab, setActiveTab] = useState<"home" | "experience" | "education">("home");
  const [selectedExp, setSelectedExp] = useState<string | null>("Biologique Recherche");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const formatEmailHref = (email: string) => `mailto:${email}`;
  const formatPhoneHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

  const experiences = data.experiences;
  const filteredExperiences = categoryFilter 
    ? experiences.filter(exp => exp.category === categoryFilter)
    : experiences;

  return (
    <div className="flex flex-col h-full bg-[#fcfaf7] rounded-3xl border border-neutral-200 shadow-sm overflow-hidden select-text">
      
      {/* Portfolio Header with Avatar and Gold accents */}
      <div className="relative bg-gradient-to-b from-[#FAF6F0] to-[#fcfaf7] p-6 sm:p-8 border-b border-stone-200">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#ebdcb9]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-12 w-32 h-32 bg-[#dfba6b]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row gap-6 items-center relative z-10">
          <AuroreAvatar className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0" />
          
          <div className="text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-1.5">
              <span className="font-serif text-[#c5a059] font-medium uppercase tracking-widest text-[10px] sm:text-[11px] bg-[#fbf5e8] border border-[#f0dfbc] px-3 py-1 rounded-full">
                #BeautyInnovation
              </span>
              <span className="font-sans text-neutral-500 font-light text-[10px] sm:text-[11px] bg-stone-100 border border-stone-200 px-3 py-1 rounded-full">
                {language === "fr" ? "Disponible" : "Ready for CDI"} Sept 2026
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium tracking-tight mb-2">
              {data.name}
            </h1>
            
            <p className="font-sans font-light text-base text-[#8a6828] uppercase tracking-wider mb-4 leading-relaxed">
              {data.title}
            </p>

            {/* Quick contact tags */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-stone-600 font-sans text-xs">
              <a 
                href={formatEmailHref(data.experiences[0] ? "auroredangvu.te@gmail.com" : "auroredangvu.te@gmail.com")} 
                className="flex items-center gap-1.5 hover:text-[#dfba6b] transition duration-300"
              >
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                <span className="underline decoration-stone-200">auroredangvu.te@gmail.com</span>
              </a>
              <a 
                href={formatPhoneHref("+33 6 66 91 52 82")} 
                className="flex items-center gap-1.5 hover:text-[#dfba6b] transition duration-300"
              >
                <Phone className="w-3.5 h-3.5 text-stone-400" />
                <span>+33 6 66 91 52 82</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/auroredangvu/" 
                target="_blank" 
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 hover:text-[#dfba6b] transition duration-300"
              >
                <Linkedin className="w-3.5 h-3.5 text-stone-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 text-stone-450" />
              </a>
              <span className="flex items-center gap-1.5 text-stone-500">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span>Paris, FR</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-stone-200 bg-[#FAF8F5]/50 px-4 pt-1 flex-shrink-0 select-none">
        <button
          onClick={() => setActiveTab("home")}
          className={`px-5 py-3 text-xs sm:text-sm font-sans font-medium tracking-wider uppercase border-b-2 transition duration-300 ${
            activeTab === "home" 
              ? "border-[#17171a] text-[#17171a]" 
              : "border-transparent text-stone-500 hover:text-stone-850"
          }`}
        >
          {language === "fr" ? "Profil" : "Profile Overview"}
        </button>
        <button
          onClick={() => setActiveTab("experience")}
          className={`px-5 py-3 text-xs sm:text-sm font-sans font-medium tracking-wider uppercase border-b-2 transition duration-300 ${
            activeTab === "experience" 
              ? "border-[#17171a] text-[#17171a]" 
              : "border-transparent text-stone-500 hover:text-stone-850"
          }`}
        >
          {language === "fr" ? "Parcours & Projets" : "Experiences & Projects"}
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`px-5 py-3 text-xs sm:text-sm font-sans font-medium tracking-wider uppercase border-b-2 transition duration-300 ${
            activeTab === "education" 
              ? "border-[#17171a] text-[#17171a]" 
              : "border-transparent text-stone-500 hover:text-stone-850"
          }`}
        >
          {language === "fr" ? "Formations & Atouts" : "Skills & Academics"}
        </button>
      </div>

      {/* Tab Contents Area */}
      <div className="flex-1 overflow-y-auto p-6 sm:p-8 class-scroller">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Luxury Summary Box */}
              <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-6 relative overflow-hidden shadow-xs">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ebdcb9]/15 rounded-full pointer-events-none" />
                <h3 className="font-serif text-[#8a6828] text-base font-medium uppercase tracking-widest flex items-center gap-2 mb-3">
                  <Crown className="w-4.5 h-4.5 text-[#dfba6b]" />
                  {language === "fr" ? "Ambition de Carrière" : "Career Aspiration"}
                </h3>
                <p className="font-serif italic text-stone-820 text-base sm:text-lg leading-relaxed font-light mb-4">
                  "{data.objective}"
                </p>
                <div className="border-t border-stone-200/60 pt-4 font-sans font-light text-sm text-stone-600 leading-relaxed">
                  {data.profileText}
                </div>
              </div>

              {/* Core Sectors of Interest Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white hover:bg-gradient-to-br hover:from-white hover:to-[#ebf3ff]/40 p-5 rounded-2xl border border-stone-200 hover:border-blue-300 transition duration-300 group shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                    <Sparkles className="w-5 h-5 text-blue-900" />
                  </div>
                  <h4 className="font-serif font-medium text-stone-900 text-sm tracking-wide mb-1">
                    {language === "fr" ? "Soin & Dermatologie" : "Skincare Formulation"}
                  </h4>
                  <p className="text-stone-500 text-xs font-sans leading-relaxed">
                    {language === "fr" 
                      ? "Innover au cœur de la physiologie cutanée, l'expertise des ingrédients et le soin haute clinique."
                      : "Developing state-of-the-art formulations driven by skin science, premium active ingredients."}
                  </p>
                </div>

                <div className="bg-white hover:bg-gradient-to-br hover:from-white hover:to-[#fffbf4]/40 p-5 rounded-2xl border border-stone-200 hover:border-[#dfba6b] transition duration-300 group shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                    <Crown className="w-5 h-5 text-[#dfba6b]" />
                  </div>
                  <h4 className="font-serif font-medium text-stone-900 text-sm tracking-wide mb-1">
                    {language === "fr" ? "Maquillage d'Exception" : "Luxury Makeup Niche"}
                  </h4>
                  <p className="text-stone-500 text-xs font-sans leading-relaxed">
                    {language === "fr" 
                      ? "Rapprocher l'univers artistique, le raffinement des couleurs et le développement haut de gamme."
                      : "Blending high artistic value, complex pigments, and ultimate packaging aesthetics."}
                  </p>
                </div>

                <div className="bg-white hover:bg-gradient-to-br hover:from-white hover:to-[#fbfcfc]/40 p-5 rounded-2xl border border-stone-200 hover:border-slate-350 transition duration-300 group shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-3 group-hover:scale-110 transition">
                    <BookOpen className="w-5 h-5 text-slate-800" />
                  </div>
                  <h4 className="font-serif font-medium text-stone-900 text-sm tracking-wide mb-1">
                    {language === "fr" ? "Analyse Consommateur" : "Consumer Insights"}
                  </h4>
                  <p className="text-stone-500 text-xs font-sans leading-relaxed">
                    {language === "fr" 
                      ? "Décoder les perceptions qualitatives et quantitatives pour étayer des lancements infaillibles."
                      : "Extracting actionable market studies metrics to frame successful product innovations."}
                  </p>
                </div>
              </div>

              {/* Languages at a Glance */}
              <div>
                <h3 className="font-serif text-stone-900 text-base font-medium tracking-wide flex items-center gap-2 mb-4">
                  <Languages className="w-4.5 h-4.5 text-[#dfba6b]" />
                  {language === "fr" ? "Maîtrise Linguistique" : "Languages Proficiency"}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 select-none">
                  {data.languages.map((lang) => (
                    <div 
                      key={lang.name} 
                      className="bg-white border border-stone-200 rounded-xl p-3 flex items-center justify-between hover:border-stone-300 transition shadow-3xs"
                    >
                      <div>
                        <div className="font-sans font-medium text-xs text-stone-900">{lang.name}</div>
                        <div className="font-mono text-[10px] text-stone-500 mt-0.5">{lang.level}</div>
                      </div>
                      <span className="font-mono text-[9px] font-bold text-[#c5a059] bg-[#fbf5e8] border border-[#f5e9d0] px-1.5 py-0.5 rounded-md">
                        {lang.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "experience" && (
            <motion.div
              key="exp-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 mb-4 select-none">
                <button
                  onClick={() => setCategoryFilter(null)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium border transition cursor-pointer ${
                    categoryFilter === null
                      ? "bg-[#17171a] text-white border-[#17171a]"
                      : "bg-white text-stone-500 border-stone-200 hover:border-stone-400"
                  }`}
                >
                  {language === "fr" ? "Tous les Cosmétiques" : "All Cosmetics"}
                </button>
                <button
                  onClick={() => setCategoryFilter("Skincare")}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium border transition cursor-pointer ${
                    categoryFilter === "Skincare"
                      ? "bg-blue-900 text-white border-blue-900"
                      : "bg-blue-50/40 text-blue-950 border-blue-100 hover:border-blue-300"
                  }`}
                >
                  Skincare (Biologique Recherche)
                </button>
                <button
                  onClick={() => setCategoryFilter("Consumer Insights")}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium border transition cursor-pointer ${
                    categoryFilter === "Consumer Insights"
                      ? "bg-slate-800 text-white border-slate-800"
                      : "bg-slate-50/40 text-slate-800 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  Insights & Data (L'Oréal)
                </button>
                <button
                  onClick={() => setCategoryFilter("Makeup")}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium border transition cursor-pointer ${
                    categoryFilter === "Makeup"
                      ? "bg-amber-950 text-white border-amber-950"
                      : "bg-amber-50/30 text-amber-950 border-amber-100/90 hover:border-amber-300"
                  }`}
                >
                  Makeup (Byredo/Puig)
                </button>
              </div>

              {/* Master Split Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                
                {/* Visual List Stack */}
                <div className="lg:col-span-2 space-y-3">
                  {filteredExperiences.map((exp) => (
                    <button
                      key={exp.company}
                      type="button"
                      onClick={() => setSelectedExp(exp.company)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden select-none outline-none group cursor-pointer ${
                        selectedExp === exp.company
                          ? `border-stone-900 bg-white shadow-md ring-1 ring-stone-900`
                          : "border-stone-200 bg-stone-50/40 hover:bg-white hover:border-stone-300 shadow-3xs"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-serif font-medium text-stone-920 text-sm tracking-wide">
                            {exp.company}
                          </h4>
                          <p className="font-sans text-stone-500 font-light text-[11px] mt-0.5 leading-snug">
                            {exp.role}
                          </p>
                        </div>
                        <ChevronRight className={`w-4 h-4 text-stone-400 transition transform ${selectedExp === exp.company ? "translate-x-1 text-stone-700" : ""}`} />
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between text-[10px] font-sans text-stone-500">
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                          {exp.period}
                        </span>
                        
                        <span className={`px-2 py-0.5 rounded-md font-medium font-sans border ${
                          exp.category === "Skincare" 
                            ? "bg-blue-50 text-blue-900 border-blue-100" 
                            : exp.category === "Makeup"
                              ? "bg-amber-50 text-amber-900 border-amber-100"
                              : "bg-slate-100 text-slate-800 border-slate-200"
                        }`}>
                          {exp.category}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Main Content Details Wrapper */}
                <div className="lg:col-span-3">
                  <AnimatePresence mode="wait">
                    {(() => {
                      const exp = experiences.find(e => e.company === selectedExp);
                      if (!exp) return <div className="text-stone-400 text-sm">{language === "fr" ? "Sélectionnez un parcours" : "Select an experience"}</div>;
                      return (
                        <motion.div
                          key={exp.company}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col h-full"
                        >
                          <div className={`h-1 px-4 w-12 bg-gradient-to-r ${exp.logoColor} rounded-full mb-4`} />
                          
                          <div className="flex justify-between items-start mb-1 select-text">
                            <h3 className="font-serif font-semibold text-lg text-stone-900 leading-tight">
                              {exp.role}
                            </h3>
                          </div>
                          
                          <div className="font-sans text-[#a3802e] text-xs font-semibold tracking-wider mb-3 uppercase">
                            {exp.company} — {exp.period}
                          </div>

                          <p className="font-sans text-stone-500 font-light text-xs italic bg-stone-50/70 border-l-2 border-stone-300 p-2.5 rounded-r-lg mb-5 select-text">
                            {exp.tagline}
                          </p>

                          <div className="flex-1 select-text">
                            <h4 className="font-serif text-stone-850 text-xs font-medium uppercase tracking-wider mb-2.5">
                              {language === "fr" ? "Réalisations Clés :" : "Key Accomplishments:"}
                            </h4>
                            <ul className="space-y-3">
                              {exp.bulletPoints.map((point, index) => (
                                <li key={index} className="flex gap-2.5 text-stone-660 text-xs font-sans font-light leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#dfba6b] mt-1.5 flex-shrink-0" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skill Tags for Job */}
                          <div className="mt-6 border-t border-stone-100 pt-4 select-none">
                            <span className="font-sans text-[10px] text-stone-400 font-medium uppercase tracking-wider block mb-2">
                              {language === "fr" ? "Savoir-faire exploité :" : "Acquired Core Skills:"}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.skills.map((sk) => (
                                <span 
                                  key={sk} 
                                  className="font-sans text-[10px] font-medium text-stone-700 bg-neutral-100 hover:bg-[#FAF4EE] hover:text-[#8a6828] transition border border-stone-200/60 px-2 py-1 rounded-md"
                                >
                                  {sk}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })()}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="edu-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* Academics Division */}
              <div>
                <h3 className="font-serif text-stone-900 text-base font-medium tracking-wide flex items-center gap-2 mb-4">
                  <GraduationCap className="w-4.5 h-4.5 text-[#dfba6b]" />
                  {language === "fr" ? "Parcours Études & Cursus" : "Aurore's Education & Academic Path"}
                </h3>
                
                <div className="relative border-l border-stone-200 pl-6 ml-1 space-y-6 select-text">
                  {data.education.map((edu, idx) => (
                    <div key={edu.school} className="relative">
                      {/* Timeline Dot Indicator */}
                      <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-[#dfba6b] flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-[#dfba6b]" />
                      </span>
                      
                      <div className="font-sans text-[11px] font-mono text-[#a3802e] mb-1">
                        {edu.period}
                      </div>
                      
                      <h4 className="font-serif font-semibold text-stone-900 text-[14px]">
                        {edu.degree}
                      </h4>
                      
                      <p className="font-sans font-medium text-stone-500 text-xs mt-0.5 mb-2.5">
                        {edu.school}
                      </p>

                      <div className="space-y-1.5 pl-3 border-l-2 border-[#dfba6b]/30">
                        {edu.details.map((det, dIdx) => (
                          <p key={dIdx} className="font-sans text-stone-600 text-[11.5px] font-light leading-relaxed">
                            {det}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hard & Soft Skills Blocks Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-text">
                
                {/* Hard Skills mapping */}
                <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-2xs">
                  <h3 className="font-serif text-stone-900 text-sm font-medium tracking-wide flex items-center gap-2 mb-4 pb-2 border-b border-stone-100">
                    <Award className="w-4 h-4 text-[#dfba6b]" />
                    {language === "fr" ? "Compétences Techniques & Outils (Hard)" : "Hard Technical Skills & Tooling"}
                  </h3>
                  
                  <div className="space-y-4">
                    {data.hardSkills.map((gp) => (
                      <div key={gp.category}>
                        <span className="font-sans font-medium text-[10.5px] text-[#a3802e] tracking-wider uppercase block mb-1.5">
                          {gp.category}
                        </span>
                        <div className="flex flex-wrap gap-1.5 select-none">
                          {gp.items.map((item) => (
                            <span 
                              key={item} 
                              className="font-sans text-[10.5px] text-stone-700 bg-stone-50 border border-stone-200/80 px-2 py-1 rounded-lg"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills mapping */}
                <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-2xs">
                  <h3 className="font-serif text-stone-900 text-sm font-medium tracking-wide flex items-center gap-2 mb-4 pb-2 border-b border-stone-100">
                    <Sparkles className="w-4 h-4 text-[#dfba6b]" />
                    {language === "fr" ? "Savoir-être & Soft Skills" : "Soft Human Strengths & Skills"}
                  </h3>
                  
                  <ul className="space-y-3">
                    {data.softSkills.map((sf, idx) => (
                      <li key={idx} className="flex gap-2.5 items-center font-sans font-light text-xs text-stone-660 leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-[#fbf5e8] flex items-center justify-center flex-shrink-0 text-[#c5a059] text-[10px] font-mono">
                          {idx + 1}
                        </span>
                        <span>{sf}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 bg-[#fdfbf7] p-4 border border-stone-200/50 rounded-xl relative overflow-hidden select-text">
                    <span className="font-serif text-[11px] text-[#dfba6b] font-medium tracking-wider uppercase block mb-1">
                      {language === "fr" ? "Excellence Client & Luxe" : "Selective Client Focus"}
                    </span>
                    <p className="font-sans font-light text-[10px] sm:text-[11.5px] text-stone-500 leading-relaxed">
                      {language === "fr" 
                        ? "Maîtrise des univers sélectifs, sens de l'esthétique soigné et compréhension fine des exigences réglementaires."
                        : "Advanced insight of luxury guidelines, meticulous design aesthetics, and structured alignment with cosmetic standards."}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive CTA footer */}
      <div className="bg-[#FAF8F5]/80 border-t border-stone-200 p-4 shrink-0 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left select-none bg-radial">
        <div>
          <p className="font-serif font-medium text-[13px] text-stone-900">
            {language === "fr" 
              ? "Prêt(e) à examiner sa candidature d'Innovation Produit ?" 
              : "Ready to study her Innovation Marketing proposal?"}
          </p>
          <p className="font-sans text-stone-500 text-[10.5px]">
            {language === "fr" 
              ? "Discutez directement avec son assistant intelligent à droite !" 
              : "Chat directly with her interactive AI representative on the right!"}
          </p>
        </div>
        <button
          onClick={() => {
            // Fast toggle tab to trigger views
            setActiveTab("experience");
          }}
          className="bg-stone-900 group shrink-0 flex items-center gap-2 hover:bg-[#c5a059] text-white hover:text-stone-950 font-sans text-xs font-semibold px-4 py-2 rounded-xl transition cursor-pointer shadow-sm shadow-stone-950/20"
        >
          <span>{language === "fr" ? "Consulter son CV" : "Explore CV Details"}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 duration-300" />
        </button>
      </div>

    </div>
  );
}
