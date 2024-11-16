import { memo, useState } from "react";

import AnimateText from "./AnimateText";
import ContactButtonInput from "./ContactButtonInput";
import ContactButtonTextarea from "./ContactButtonTextarea";
import SendingSVG from "./SendingSVG";
import SentSVG from "./SentSVG";
import axios from "@utils/axios";
import useGetLanguage from "@utils/useGetLanguage";

function ContactButton() {
  const language = useGetLanguage();
  const [showman, setShowman] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [status, setStatus] = useState("");

  const handleCLick = () => {
    setShowman(!showman);
  };

  const validateForm = () => {
    let isValid = true;

    if (name.trim()) {
      setNameError("");
    } else {
      setNameError(language.NameRequired);
      isValid = false;
    }

    if (phone.trim()) {
      setPhoneError("");
    } else {
      setPhoneError(language.PhoneRequired);
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError(language.EmailRequired);
      isValid = false;
    } else if (/\S+@\S+\.\S+/.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email address");
      isValid = false;
    }

    if (subject.trim()) {
      setSubjectError("");
    } else {
      setSubjectError(language.MessageRequired);
      return false;
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      setStatus("sending");
      await axios.post("/queries", {
        name,
        phone,
        email,
        subject,
        read: false,
      });
      setStatus("sent");
      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setTimeout(() => {
        setStatus("");
      }, 3000);
      return;
    }
    alert("Please fill out all the fields");
  };

  return (
    <div className="contact__button__container">
      <div className="contact__button__icon" onClick={handleCLick}>
        <svg
          width="27"
          height="19"
          viewBox="0 0 27 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.04883 0.766846C1.39283 0.766846 0.0488281 2.11085 0.0488281 3.76685V15.7668C0.0488281 17.4228 1.39283 18.7668 3.04883 18.7668H23.0488C24.7048 18.7668 26.0488 17.4228 26.0488 15.7668V3.76685C26.0488 2.11085 24.7048 0.766846 23.0488 0.766846H3.04883ZM3.04883 2.76685H23.0488C23.5998 2.76685 24.0488 3.21585 24.0488 3.76685V4.26685L13.0488 10.2048L2.04883 4.26685V3.76685C2.04883 3.21585 2.49783 2.76685 3.04883 2.76685ZM2.04883 4.54785L8.57983 9.64185L2.17383 16.2048L9.98683 10.6418L13.0488 12.6108L16.1118 10.6418L23.9238 16.2048L17.5178 9.64185L24.0488 4.54785V15.7668C24.0433 15.9208 24.0004 16.0711 23.9238 16.2048C23.7588 16.5298 23.4378 16.7668 23.0488 16.7668H3.04883C2.65983 16.7668 2.33883 16.5308 2.17383 16.2048C2.09741 16.0714 2.05452 15.9205 2.04883 15.7668V4.54785Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {showman && (
        <div className="contact__button__mail">
          <span
            className="contact__button__mail__span"
            onClick={() => setShowman(false)}
          >
            X
          </span>
          <div
            className="contactusform"
            style={{
              padding: "0",
              backgroundColor: "transparent",
              backgroundImage: "none",
            }}
          >
            <div
              className="contactusform__content"
              style={{
                maxWidth: "400px",
                borderRadius: "0",
                padding: "2em",
                width: "100%",
              }}
            >
              <div
                className="contactusform__heading"
                style={{ fontSize: "24px", fontWeight: "bold" }}
              >
                <AnimateText>{language.CallUs}</AnimateText>
              </div>
              <div className="contactusform__info">
                <AnimateText>{language.CallUsSub}</AnimateText>
              </div>
              <div
                className="contactusform__form__form"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1500"
              >
                {status !== "sent" ? (
                  <form className="contact__content__left contact__content__left__reverse">
                    <div className="contact__content__left__ro">
                      <ContactButtonInput
                        placeholder={language.FormName}
                        name="name"
                        type="text"
                        label="Name"
                        value={name}
                        title="Name"
                        required={true}
                        error={nameError}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="contact__content__left__ro">
                      <ContactButtonInput
                        name="Phone"
                        type="tel"
                        label="Phone Number"
                        title="Phone Number"
                        placeholder={language.FormPhone}
                        value={phone}
                        error={phoneError}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                    <div className="contact__content__left__ro">
                      <ContactButtonInput
                        type="email"
                        label="Email"
                        title="Email"
                        name="Email"
                        value={email}
                        placeholder={language.FormEmail}
                        error={emailError}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <ContactButtonTextarea
                      className="contact__content__left__input__field__textarea"
                      textarea="Subject"
                      placeholder={language.Subject}
                      required={true}
                      name="Subject"
                      label="Subject"
                      value={subject}
                      error={subjectError}
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                    />
                    <button
                      onClick={handleSubmit}
                      className="contact__content__left__button"
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {status === "sending" ? <SendingSVG /> : language.Send}
                    </button>
                  </form>
                ) : (
                  <SentSVG />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(ContactButton);
