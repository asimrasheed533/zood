import { memo, useLayoutEffect } from "react";

import { Helmet } from "react-helmet";
import optimizeImage from "@utils/optimizeImage";
import { useLanguage } from "@context/LanguageContext";

function Head({ settings }) {
  const [selectedLanguage] = useLanguage();

  useLayoutEffect(() => {
    try {
      document
        .querySelector(":root")
        .style.setProperty("--primary", settings?.themeColor || "#202020");
      document.querySelector("body").style.backgroundColor = "#ffffff";
    } catch (e) {
      console.log(e);
    }
  }, [settings?.themeColor]);

  return (
    <Helmet>
      <title>
        {selectedLanguage === "ar" ? settings?.title.ar : settings?.title.en}
      </title>
      <meta
        name="description"
        content={
          selectedLanguage === "ar"
            ? settings?.description.ar
            : settings?.description.en
        }
      />
      <meta name="keywords" content={settings?.keywords} />
      {selectedLanguage === "ar" ? (
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      ) : (
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      )}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={optimizeImage(settings?.favicon)}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={optimizeImage(settings?.favicon)}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={optimizeImage(settings?.favicon)}
      />
      <meta name="theme-color" content={settings?.themeColor} />
    </Helmet>
  );
}

export default memo(Head);
