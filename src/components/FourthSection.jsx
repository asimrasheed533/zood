import RoundedButton2 from "@common/RoundedButton2";
import { useLanguage } from "@context/LanguageContext";
import useSettings from "../utils/useSettings";

const FourthSection = () => {
  const [language] = useLanguage();
  const settings = useSettings();

  return (
    <div className="forthsectioncontainer">
      <div className="book">
        <div className="gap" />
        <div className="pages">
          {Array.from({ length: 6 }, (_, index) => (
            <div className="page" key={`page${index + 1}`} />
          ))}
        </div>
        <div className="flips">
          <div className="flip flip1">
            <div className="flip flip2">
              <div className="flip flip3">
                <div className="flip flip4">
                  <div className="flip flip5">
                    <div className="flip flip6">
                      <div className="flip flip7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fouth__section___profile__button__wrapper">
        <a
          href={settings?.profilePdf}
          target="_blank"
          title="Download the profile"
          className="fouth__section___profile__button"
        >
          <RoundedButton2>
            <p>
              {language === "ar"
                ? "قم بتنزيل الملف الشخصي"
                : "Download profile for desktop"}
            </p>
          </RoundedButton2>
        </a>
        <a
          href={settings?.profilePdfArabic}
          target="_blank"
          title="Download the profile"
          className="fouth__section___profile__button"
          style={{ bottom: 20 }}
        >
          <RoundedButton2>
            <p>
              {language === "ar"
                ? "تحميل الملف الشخصي للجوال"
                : "Download profile for mobile"}
            </p>
          </RoundedButton2>
        </a>
      </div>
    </div>
  );
};

export default FourthSection;
