import ar from "@data/ar.json";
import en from "@data/en.json";
import { useLanguage } from "@context/LanguageContext";
import { useMemo } from "react";

export default function useGetLanguage() {
  const [language] = useLanguage();

  return useMemo(() => (language === "ar" ? ar : en), [language]);
}
