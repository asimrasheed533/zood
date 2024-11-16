import { useCallback, useEffect } from "react";

import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";

const languageAtom = atomWithStorage("language", "en");

export const useLanguage = () => {
  const [language, setLanguage] = useAtom(languageAtom);

  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get("lang");

  useEffect(() => {
    if (lang) {
      setLanguage(lang);
    }
  }, [lang]);

  const handleLanguageChange = useCallback((lang) => setLanguage(lang), []);

  return [language, handleLanguageChange];
};
