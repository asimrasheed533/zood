import { useEffect, useRef, useState } from "react";

import axios from "@utils/axios";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";

const AnimatedForm = () => {
  const form = useRef();
  const [name, setName] = useState("");

  const [selectedLanguage] = useLanguage();
  const [nameError, setNameError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const language = useGetLanguage();
  const [checkboxValues, setCheckboxValues] = useState({
    land: false,
    villa: false,
    apartment: false,
    commercial: false,
  });
  const [status, setStatus] = useState("");
  const [checkboxError, setCheckboxError] = useState(false);

  useEffect(() => {
    const labels = document.querySelectorAll(
      selectedLanguage === "ar"
        ? ".form-control__rtl label"
        : ".form-control label",
    );

    labels.forEach((label) => {
      const labelText = label.innerText;

      label.innerHTML =
        selectedLanguage === "ar"
          ? `<span style="transition-delay: ${50}ms">${labelText}</span>`
          : labelText
              ?.split("")
              ?.map(
                (letter, idx) =>
                  `<span style="transition-delay: ${
                    idx * 50
                  }ms">${letter}</span>`,
              )
              .join("");
    });
  }, [selectedLanguage]);

  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    const isChecked = event.target.checked;

    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [checkboxName]: isChecked,
    }));
    setCheckboxError(false);
  };

  const handleOnchange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    switch (inputName) {
      case "name":
        setName(inputValue);
        setNameError(false);
        break;
      case "phone":
        setPhone(inputValue);
        setPhoneError(false);
        break;
      case "email":
        setEmail(inputValue);
        setEmailError(false);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const isAnyCheckboxChecked = Object.values(checkboxValues).some(
      (value) => value === true,
    );
    if (isAnyCheckboxChecked) {
      setCheckboxError(false);
    } else {
      setCheckboxError(true);
    }
    if (name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (phone === "") {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    if (name !== "" && phone !== "") {
      setStatus("Sending");

      const types = Object.keys(checkboxValues).filter(
        (key) => checkboxValues[key],
      );

      await axios.post("/interests", {
        name,
        phone,
        email,
        types,
      });

      setName("");
      setPhone("");
      setEmail("");
      setCheckboxValues({
        land: false,
        villa: false,
        apartment: false,
        commercial: false,
      });

      setStatus("Sent");
      setTimeout(() => {
        setStatus("");
      }, 3000);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="home__contact__form__container">
      <div className="home__contact__form__container__img">
        <img
          loading="lazy"
          alt="zood"
          src="https://res.cloudinary.com/dsxbqyjwo/image/upload/q_50/v1705061558/homeContactFormBG_qbcpxt.webp"
        />
      </div>
      <div className="home__contact__form__container__content">
        <form
          className="home__contact__form__container__content__card"
          ref={form}
        >
          <div className="home__contact__form__container__content__heading">
            {language.Interest}
          </div>
          <div className="home__contact__form__container__content__inputs">
            <div
              className={
                selectedLanguage === "ar" ? "form-control__rtl" : "form-control"
              }
            >
              <input
                type="text"
                required
                value={name}
                name="name"
                id="name"
                onChange={handleOnchange}
              />
              <label htmlFor="name">{language.FormName}</label>
              <p>{nameError && "Name is required"}</p>
            </div>
            <div
              className={
                selectedLanguage === "ar" ? "form-control__rtl" : "form-control"
              }
            >
              <input
                type="phone"
                required
                name="phone"
                id="phone"
                value={phone}
                onChange={handleOnchange}
              />
              <label htmlFor="phone">{language.FormPhone}</label>
              <p>{phoneError && "Phone is required"}</p>
            </div>
            <div
              className={
                selectedLanguage === "ar" ? "form-control__rtl" : "form-control"
              }
            >
              <input
                type="search"
                name="email"
                id="email"
                value={email}
                onChange={handleOnchange}
              />
              <label htmlFor="email">{language.FormEmail}</label>
              <p>{emailError && "Email is required"}</p>
            </div>
          </div>
          <div className="boxes">
            <input
              type="checkbox"
              name="land"
              id="box-1"
              checked={checkboxValues.land}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="box-1">{language.FormCheck1}</label>
            <input
              type="checkbox"
              id="box-2"
              name="villa"
              checked={checkboxValues.villa}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="box-2">{language.FormCheck2}</label>
            <input
              type="checkbox"
              id="box-3"
              name="apartment"
              checked={checkboxValues.apartment}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="box-3">{language.FormCheck3}</label>
            <input
              type="checkbox"
              id="box-4"
              name="commercial"
              checked={checkboxValues.commercial}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="box-4">{language.FormCheck4}</label>
            <p>{checkboxError && "Please select at least one"}</p>
          </div>
          <div className="home__contact__form__container__content__button">
            {status === "Sent" ? <p>{language.EmailSend}</p> : null}
            <button type="submit" onClick={handleFormSubmit}>
              {status === "Sending" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  style={{
                    margin: "auto",
                    background: "none",
                    display: "block",
                    shapeRendering: "auto",
                    height: "70px",
                    width: "70px",
                  }}
                  width="30px"
                  height="30px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <g transform="rotate(0 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#ffffff"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.9166666666666666s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                  <g transform="rotate(30 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#ffffff"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.8333333333333334s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                  <g transform="rotate(60 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#ffffff"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.75s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                  <g transform="rotate(90 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#ffffff"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.6666666666666666s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                  <g transform="rotate(120 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#ffffff"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.5833333333333334s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                  <g transform="rotate(150 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#ffffff"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.5s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                  <g transform="rotate(180 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#ffffff"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.4166666666666667s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                  <g transform="rotate(210 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#ffffff"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.3333333333333333s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                  <g transform="rotate(240 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#ffffff"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.25s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                  <g transform="rotate(270 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#ffffff"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.16666666666666666s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                  <g transform="rotate(300 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#ffffff"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="-0.08333333333333333s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                  <g transform="rotate(330 50 50)">
                    <rect
                      x="47"
                      y="24"
                      rx="3"
                      ry="6"
                      width="6"
                      height="12"
                      fill="#ffffff"
                    >
                      <animate
                        attributeName="opacity"
                        values="1;0"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                </svg>
              ) : (
                <>
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        />
                      </svg>
                    </div>
                  </div>
                  <span>{language.Send}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnimatedForm;
