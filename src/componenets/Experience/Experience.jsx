import { motion } from "framer-motion";
import AboutBackground from "../about/AboutBackground";
import { useSelector } from "react-redux";

const experiences = [
  {
    year: "2022",
    title: "Chargé de vente",
    company: "EURL HOME AND BEYOND",
    desc: "Développement commercial, négociation et fidélisation d'une clientèle exigeante dans le secteur du design.",
    tag: "Sales",
  },
  {
    year: "2024",
    title: "Chargé du suivi du transport",
    company: "EURL MELYNA HADID",
    desc: "Coordination logistique, gestion des flottes et optimisation des délais de livraison pour une efficacité maximale.",
    tag: "Logistics",
  },

  {
    year: "2025",
    title: "Saisie et Facturation",
    company: "M Santé",
    desc: "Gestion rigoureuse des flux financiers, saisie de données critiques et optimisation de la facturation client.",
    tag: "Admin",
  },

  {
    year: "2025",
    title: "Ingénieur en électricité",
    company: "Entreprise BOUTRFA – Travaux d’électricité",
    desc: "Conception et suivi des installations électriques industrielles et domestiques. Expertise en schémas électriques et normes de sécurité.",
    tag: "Engineering",
  },

  {
    year: "2026",
    title: "Amadeus Agent & Billetterie",
    company: "Agence NUMIDIA",
    desc: "Expertise en systèmes de réservation GDS Amadeus. Gestion complexe de la billetterie internationale et optimisation des itinéraires de voyage.",
    tag: "Aviation Tech",
  },
];

const Experience = () => {
  const { mode } = useSelector((state) => state.mode);
  const isDark = mode === "dark";
  return (
    <section
      className={`relative min-h-screen w-full py-20 snap-start overflow-hidden font-['Roboto'] transition-colors duration-700 ${
        isDark ? "bg-[#05050a]" : "bg-[#F0F7FF]"
      }`}>
      {/* Texture de bruit subtile */}
      <div className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <AboutBackground isDark={isDark} />

      <div className="relative z-50 max-w-6xl px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 text-center">
          <h2
            className={`text-3xl italic font-black tracking-tighter uppercase  lg:text-5xl transition-colors duration-700 ${
              isDark ? "text-white" : "text-[#1a1a2e]"
            }`}>
            Expériences <span className="text-[#5945a1] text-glow">profissional</span>
          </h2>
          <div className="w-30 h-1 mx-auto mt-4 bg-[#5945a1] rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Ligne centrale dynamique */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-0.5 h-full hidden md:block transition-all duration-700 ${
              isDark
                ? "bg-linear-to-b from-[#5945a1] via-purple-500/50 to-transparent"
                : "bg-linear-to-b from-blue-400/30 via-blue-600/20 to-transparent"
            }`}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${isEven ? "md:flex-row-reverse" : ""}`}>
                  <div className="hidden w-5/12 md:block" />

                  {/* Point Central Adaptatif */}
                  <div className="relative z-20 items-center justify-center hidden w-2/12 md:flex">
                    <div
                      className={`w-4 h-4 rounded-full border-4 transition-all duration-700 ${
                        isDark
                          ? "bg-[#beaff3] border-[#a200ff] ring-4 ring-purple-500/20"
                          : "bg-blue-600 border-[#F0F7FF] ring-4 ring-blue-600/10"
                      }`}
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-5/12 group">
                    <div
                      className={`relative p-0.5 rounded-4xl overflow-hidden transition-all duration-700 ${
                        isDark
                          ? "bg-linear-to-br from-[#5945a1] via-purple-500/20 to-transparent shadow-[0_20px_50px_rgba(59,130,246,0.1)]"
                          : "bg-linear-to-br from-blue-400 via-blue-200 to-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                      }`}>
                      {/* FOND DE LA CARTE AVEC UN LÉGER DÉGRADÉ INTERNE */}
                      <div
                        className={`relative z-10 p-8 md:p-10 rounded-4xl backdrop-blur-3xl transition-colors duration-700 ${
                          isDark ? "bg-[#05050a]/90" : "bg-white/95"
                        }`}>
                        {/* 1. DÉGRADÉ LINÉAIRE SUR L'ANNÉE (Text Gradient) */}
                        <div className="mb-6">
                          <span className="text-3xl italic font-black tracking-tighter text-transparent bg-linear-to-r from-[#7054e9] to-purple-500 bg-clip-text">
                            {exp.year}
                          </span>
                          <div className="w-12 h-1 mt-1 rounded-full bg-linear-to-r from-purple-600 to-transparent" />
                        </div>

                        {/* 2. TITRE AVEC DÉGRADÉ SUBTIL */}
                        <h3
                          className={`text-2xl md:text-3xl font-bold tracking-tight mb-2 ${
                            isDark ? "text-white" : "text-[#1a1a2e]"
                          }`}>
                          {exp.title}
                        </h3>

                        {/* 3. NOM DE L'ENTREPRISE EN DÉGRADÉ SOFT */}
                        <p className="text-sm font-bold uppercase tracking-[0.2em] mb-6 bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                          {exp.company}
                        </p>

                        {/* 4. DESCRIPTION (Pure et lisible) */}
                        <p
                          className={`text-sm md:text-base leading-relaxed font-light ${
                            isDark ? "text-gray-400" : "text-slate-600"
                          }`}>
                          {exp.desc}
                        </p>

                        {/* 5. TAG EN GLASSMORPHISM AVEC DÉGRADÉ */}
                        <div className="flex items-center justify-between mt-8">
                          <span
                            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${
                              isDark
                                ? "bg-linear-to-r from-blue-500/10 to-purple-500/10 text-purple-300 border-blue-500/20"
                                : "bg-linear-to-r from-blue-50 to-white text-blue-600 border-blue-100"
                            }`}>
                            {exp.tag}
                          </span>

                          {/* Décoration : Un cercle en dégradé diffus dans le coin */}
                          <div
                            className={`w-8 h-8 rounded-full blur-xl animate-pulse ${
                              isDark ? "bg-blue-500/20" : "bg-blue-600/10"
                            }`}
                          />
                        </div>
                      </div>

                      {/* EFFET DE LUMIÈRE DE FOND (Glow) */}
                      <div
                        className={`absolute -bottom-10 -right-10 w-32 h-32 blur-[50px] rounded-full pointer-events-none ${
                          isDark ? "bg-blue-600/10" : "bg-blue-400/5"
                        }`}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
