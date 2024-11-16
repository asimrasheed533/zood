import { memo, useState } from "react";

import SendingSVG from "./SendingSVG";
import axios from "@utils/axios";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";

function NewsLetter() {
  const [selectedLanguage] = useLanguage();
  const [emailReg, setEmailer] = useState("");
  const [emailRegError, setEmailerError] = useState("");
  const [status, setStatus] = useState("");
  const language = useGetLanguage();

  const contactRegForm = () => {
    let isValid = true;
    if (!emailReg.trim()) {
      setEmailerError("Email is required");
      isValid = false;
    }
    if (!emailReg.trim().includes("@")) {
      setEmailerError("Email is Invalid");
      return false;
    }
    return isValid;
  };

  const validateRegForm = async (e) => {
    e.preventDefault();

    if (contactRegForm()) {
      setStatus("sending");

      await axios.post("/newsletters", { email: emailReg });
      setStatus("sent");
      setEmailer("");
      setEmailerError("");

      setTimeout(() => {
        setStatus("");
      }, 2000);
      return;
    }
    console.error("Please fill the field");
  };
  return (
    <div className="contact__mail__Container">
      <div className="contact__mail__Container__wrapper">
        <div className="contact__mail__Container__heading">
          {language.FortheLatest}
        </div>
        <div className="contact__mail__Container__sub__heading">
          {language.FortheLatestSub}
        </div>
        <div className="contact__mail__contant__input__wraper">
          <div
            onClick={validateRegForm}
            className="contact__mail__contant__input__title"
          >
            {status === "sent" ? (
              selectedLanguage === "ar" ? (
                "شكرا لك على الاشتراك"
              ) : (
                "Thank you for subscribing"
              )
            ) : status === "sending" ? (
              <SendingSVG />
            ) : (
              language.Registration
            )}
          </div>
          <div className="contact__mail__contant__input">
            <input
              type="email"
              placeholder="contact@zood.sa"
              value={emailReg}
              onChange={(e) => {
                setEmailer(e.target.value);
              }}
              error={emailRegError}
              required={true}
            />
          </div>
        </div>
        {emailRegError === "" ? null : (
          <div className="contact__mail__contant__input__error">
            {emailRegError}
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(NewsLetter);
