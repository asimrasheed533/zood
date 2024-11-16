import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { Outlet, useLocation } from "react-router-dom";
import { lazy, useLayoutEffect } from "react";

import FirstLoad from "@components/FirstLoad";
import Head from "@components/Head";
import { useLanguage } from "../context/LanguageContext";
import useSettings from "../utils/useSettings";

const Bot = lazy(() => import("@components/Bot"));
const Home = lazy(() => import("@components/Home"));
const HeaderTop = lazy(() => import("@components/HeaderTop"));
const Bottomnavbar = lazy(() => import("@components/Bottomnavbar"));
const ContactButton = lazy(() => import("@components/ContactButton"));

export default () => {
  const settings = useSettings();
  const { pathname } = useLocation();
  const [language] = useLanguage();

  useLayoutEffect(() => {
    try {
      const body = document.body.classList;
      if (language === "ar") body.add("rtl");
      else body.remove("rtl");
    } catch (e) {
      console.log(e);
    }
  }, [language]);

  return window.navigator.onLine ? (
    <>
      <FirstLoad />
      <Head settings={settings} />
      <Home settings={settings} />
      <HeaderTop settings={settings} />
      <Outlet />
      {window.innerWidth < 900 && <Bottomnavbar />}
      {window.innerWidth > 900 && <ContactButton />}
      {pathname !== "/map" && <Bot settings={settings} />}
    </>
  ) : (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Offline</h1>
      <h2>Check your connection</h2>
    </div>
  );
};
