import { memo, useLayoutEffect, useMemo, useState } from "react";

import AnimateText from "../components/AnimateText";
import ContactInput from "@components/ContactInput";
import ContactSection from "@components/Contact";
import ContactTextarea from "@components/ContactTextarea";
import FourthSection from "@components/FourthSection";
import Image from "../components/Image";
import NewsLetter from "@components/NewsLetter";
import SendingSVG from "@components/SendingSVG";
import SentSVG from "@components/SentSVG";
import SlidingImages from "@components/SlidingImages";
import addressDetails from "@assets/addressDetails.webp";
import addressDetailsAr from "@assets/addressDetailsAr.webp";
import addressDetailsMobile from "@assets/addressDetailsMobile.webp";
import addressDetailsMobileAr from "@assets/addressDetailsMobileAr.webp";
import axios from "@utils/axios";
import sendAnalytics from "@utils/sendAnalytics";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";
import useSettings from "../utils/useSettings";

function Contact() {
  useLayoutEffect(() => sendAnalytics("contact"), []);

  const data = useSettings();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [status, setStatus] = useState("");
  const language = useGetLanguage();
  const [selectedLanguage] = useLanguage();

  const smallimageUrl = useMemo(
    () =>
      selectedLanguage === "en" ? addressDetailsMobile : addressDetailsMobileAr,
    [selectedLanguage]
  );

  const largeimageUrl = useMemo(
    () => (selectedLanguage === "en" ? addressDetails : addressDetailsAr),
    [selectedLanguage]
  );

  const validateForm = () => {
    let isValid = true;

    if (name.trim()) {
      setNameError("");
    } else {
      setNameError("Name is required");
      isValid = false;
    }

    if (phone.trim()) {
      setPhoneError("");
    } else {
      setPhoneError("Phone number is required");
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (/\S+@\S+\.\S+/.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Invalid email address");
      isValid = false;
    }

    if (!subject.trim()) {
      setSubjectError("Subject is required");
      return false;
    }

    setSubjectError("");

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
    alert("Please fill all the fields");
  };

  return (
    <>
      <div className="top__header__black" />
      <div className="contact__serction">
        <div className="contact__serction__content">
          <div
            className="contact__serction__content__subheading"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1500"
          >
            {language.BlogfirstHeading}
          </div>
          <div
            className="contact__serction__content__heading"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1700"
          >
            {language.BlogfirstSubHeading}
          </div>
          <div
            className="linediv"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1500"
          />
          <div className="contact__serction__content__all">
            <div
              className="contact__serction__content__heading__info"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1500"
            >
              <div className="contact__serction__content__heading__info__heading">
                {language.BlogEntry1}
              </div>
              <a
                href={`tel:${data?.phone}`}
                className="contact__serction__content__heading__info__subheading"
              >
                {data?.phone}
              </a>
            </div>
            <div
              className="contact__serction__content__heading__info"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1600"
            >
              <div className="contact__serction__content__heading__info__heading">
                {language.BlogEntry2}
              </div>
              <a
                href={`mailto:${data?.email}`}
                className="contact__serction__content__heading__info__subheading"
              >
                {data?.email}
              </a>
            </div>
            <div
              className="contact__serction__content__heading__info"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1700"
            >
              <div className="contact__serction__content__heading__info__heading">
                {language.BlogEntry3}
              </div>
              <a
                href="https://maps.app.goo.gl/SikVBz6LsDsvToBC9"
                target="_blank"
                className="contact__serction__content__heading__info__subheading"
              >
                {data?.officeHours}
              </a>
            </div>
          </div>
        </div>
      </div>
      <FourthSection />
      <div className="contactusform">
        <div className="contactusform__content">
          <div className="contactusform__heading">
            <AnimateText>{language.InquiriesFeedback}</AnimateText>
          </div>
          <div className="contactusform__info">
            <AnimateText>{language.InquiriesSubHeading}</AnimateText>
          </div>
          <div
            className="contactusform__form__form"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1500"
          >
            {status === "sent" ? (
              <SentSVG />
            ) : (
              <form className="contact__content__left contact__content__left__reverse">
                <div className="contact__content__left__ro">
                  <ContactInput
                    placeholder={language.FormName}
                    name="name"
                    type="text"
                    label="Name"
                    title="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={nameError}
                    required={true}
                  />
                </div>
                <div className="contact__content__left__ro">
                  <ContactInput
                    name="phone"
                    type="tel"
                    label="phone"
                    title="phone"
                    placeholder={language.CompanyName}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    error={phoneError}
                  />
                </div>
                <div className="contact__content__left__ro">
                  <ContactInput
                    type="email"
                    label="Email"
                    title="Email"
                    name="email"
                    placeholder={language.FormEmail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={emailError}
                  />
                </div>
                <ContactTextarea
                  className="contact__content__left__input__field__textarea"
                  textarea="Subject"
                  placeholder={language.Subject}
                  required={true}
                  name="subject"
                  label="Subject"
                  title="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  error={subjectError}
                />
                <button
                  className="contact__content__left__button"
                  onClick={handleSubmit}
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {status === language.Send ? <SendingSVG /> : language.Send}
                </button>
                <p
                  style={{
                    marginTop: "1em",
                    color: "var(--primary)",
                    fontWeight: "bold",
                    textAlign: "center",
                    margin: "0",
                    padding: "0",
                    fontSize: "12px",
                  }}
                >
                  {status === "sent"
                    ? "Your message has been sent successfully"
                    : null}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="google__maps__wrapper">
        <div className="google__maps__wrapper__overlay">
          <a
            href="https://www.google.com/maps?ll=24.791747,46.648221&z=17&t=m&hl=en&gl=US&mapclient=embed&cid=782099778876452157"
            target="_blank"
            className="google__maps__wrapper__link"
          >
            <img
              src={data?.favicon}
              alt={data?.title}
              className="google__maps__wrapper__link__img"
            />
          </a>
        </div>
        <iframe
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.1082514132427!2d46.6482205!3d24.791746500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee34cf76210ef%3A0xada939aead7ad3d!2sZOOD!5e0!3m2!1sen!2s!4v1701177155730!5m2!1sen!2s"
          style={{ width: "100vw", height: "80vh" }}
          referrerPolicy="no-referrer-when-downgrade"
          className="google__maps"
        />
      </div>

      <div className="contact__page__image">
        <div className="contact__page__image__overlay">
          <Image
            loading="lazy"
            alt="zood"
            src={window.innerWidth < 700 ? smallimageUrl : largeimageUrl}
            className="hateen__map__contact"
          />
        </div>
      </div>
      <NewsLetter />
      <SlidingImages />
      <ContactSection />
    </>
  );
}

export default memo(Contact);
