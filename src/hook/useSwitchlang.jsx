import { useTranslation } from "react-i18next";

export default function useSwitchLang() {
  const { i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);

    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.style.fontFamily =
      lng === "en" ? "'Poppins', sans-serif" : "'Cairo', sans-serif";
  };

  return { changeLang };
}
