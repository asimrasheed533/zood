import { Link } from "react-router-dom";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function GoBack() {
  const [selectedLanguage] = useLanguage();

  return (
    <Link
      unstable_viewTransition
      to="/"
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "bold",
        backgroundColor: "var(--primary)",
        padding: "10px 20px",
        borderRadius: "5px",
      }}
    >
      {selectedLanguage === "ar" ? "العودة الى الصفحة الرئيسية" : "Got to Home"}
    </Link>
  );
}

export default memo(GoBack);
