import { motion as Motion, AnimatePresence } from "framer-motion";
import useSwitchLang from "../../hook/useSwitchlang";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English", flag: "fi fi-gb" },
  { code: "fr", name: "Français", flag: "fi fi-fr" },
  { code: "ar", name: "العربية", flag: "fi fi-dz" },
];

const LangMenu = ({ langOpen, setLangOpen, isDark }) => {
  const { changeLang } = useSwitchLang();
  const { i18n } = useTranslation();

  return (
    <AnimatePresence>
      {langOpen && (
        <Motion.div
          initial={{ opacity: 0, y: 15, x: 0, scale: 0.95 }}
          animate={{ opacity: 1, y: 12, x: i18n.language === "ar" ? 50 : 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          className={`absolute right-0 top-full mt-2 p-2 rounded-2xl backdrop-blur-2xl border min-w-[200px]shadow-2xl ${
            isDark ? "bg-[#111]/90 border-white/10" : "bg-white/90 border-slate-200"
          }`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLangOpen(false);
                changeLang(lang.code);
              }}
              className={`w-full flex items-center gap-5 my-1 justify-between px-4 py-3 rounded-xl transition-all cursor-pointer
                ${i18n.language === lang.code ? (isDark ? "bg-white/20 text-white" : "bg-slate-200 text-slate-900") : ""}
               ${isDark ? "hover:bg-white/10 text-white" : "hover:bg-slate-100 text-slate-900"}`}>
              <span className="text-[10px] font-black tracking-widest uppercase">{lang.name}</span>
              <span className={`text-lg ${lang.flag}`}></span>
            </button>
          ))}
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default LangMenu;
