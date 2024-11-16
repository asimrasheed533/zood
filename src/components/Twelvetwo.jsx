import { SvgCountimg1, SvgCountimg2, SvgCountimg3 } from "@assets";
import { memo, useState } from "react";

import CountUpWhenInView from "./CountUpWhenInView";
import useGetLanguage from "@utils/useGetLanguage";

function Twelvetwo({ commercialUnits, developedSpaces, housingUnits }) {
  const language = useGetLanguage();
  const [select, setSelect] = useState("");

  return (
    <div>
      <div className="tweelve__twosection__heading">
        {language.InnovativeReal}
      </div>
      <div className="tweelve__twosection">
        <div
          className="sticky__points__container"
          onMouseLeave={() => setSelect("")}
        >
          <a
            title="Projects"
            href="#Projects"
            className="sticky__points__container__texts"
          >
            {select === "projects" && (
              <div className="sticky__points__container__text">
                {language.SidebarProject}
              </div>
            )}
            <div
              className="sticky__points__container__point"
              onMouseOver={() => setSelect("projects")}
            />
          </a>
          <a
            title="Message"
            href="#Message"
            className="sticky__points__container__texts"
          >
            {select === "Message" && (
              <div className="sticky__points__container__text">
                {language.SidebarMessage}
              </div>
            )}
            <div
              className="sticky__points__container__point"
              onMouseOver={() => setSelect("Message")}
            />
          </a>
          <a
            title="Services"
            href="#Services"
            className="sticky__points__container__texts"
          >
            {select === "Services" && (
              <div className="sticky__points__container__text">
                {language.SidebarServices}
              </div>
            )}
            <div
              className="sticky__points__container__point"
              onMouseOver={() => setSelect("Services")}
            />
          </a>
          <a
            title="Capabilities"
            href="#Capabilities"
            className="sticky__points__container__texts"
          >
            {select === "Capabilities" && (
              <div className="sticky__points__container__text">
                {language.SidebarCapabilities}
              </div>
            )}
            <div
              className="sticky__points__container__point"
              onMouseOver={() => setSelect("Capabilities")}
            />
          </a>
          <a
            title="Partner"
            href="#Partner"
            className="sticky__points__container__texts"
          >
            {select === "Partner" && (
              <div className="sticky__points__container__text">
                {language.SidebarPartner}
              </div>
            )}
            <div
              className="sticky__points__container__point"
              onMouseOver={() => setSelect("Partner")}
            />
          </a>
          <a
            title="Why"
            href="#Why"
            className="sticky__points__container__texts"
          >
            {select === "Why" && (
              <div className="sticky__points__container__text">
                {language.SidebarWhy}
              </div>
            )}
            <div
              className="sticky__points__container__point"
              onMouseOver={() => setSelect("Why")}
            />
          </a>
          <a
            title="Timeline"
            href="#Timeline"
            className="sticky__points__container__texts"
          >
            {select === "Timeline" && (
              <div className="sticky__points__container__text">
                {language.SidebarTimeline}
              </div>
            )}
            <div
              className="sticky__points__container__point"
              onMouseOver={() => setSelect("Timeline")}
            />
          </a>
        </div>
        <div
          className="transition__text__wraper"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="transition__text__wraper__col">
            <div className="transition__text__wraper__col__svg">
              <img
                loading="lazy"
                alt="zood"
                className="transition__text__wraper__col__svg__svg"
                src={SvgCountimg1}
              />
            </div>
          </div>
          <div className="transition__text__wraper__col">
            <div className="transition__text__wraper__col__heading">
              <CountUpWhenInView start={0} end={commercialUnits} duration={3} />{" "}
              <span>+</span>
            </div>
            <div className="transition__text__wraper__col__subheading">
              {language.HeaderText1}
            </div>
          </div>
        </div>
        <div
          className="transition__text__wraper"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1500"
        >
          <div className="transition__text__wraper__col">
            <div className="transition__text__wraper__col__svg">
              <img
                loading="lazy"
                alt="zood"
                className="transition__text__wraper__col__svg__svg"
                src={SvgCountimg2}
              />
            </div>
          </div>
          <div className="transition__text__wraper__col">
            <div className="transition__text__wraper__col__heading">
              <CountUpWhenInView start={0} end={developedSpaces} duration={3} />{" "}
              <span>+</span>
            </div>
            <div className="transition__text__wraper__col__subheading">
              {language.HeaderText2}
            </div>
          </div>
        </div>
        <div
          className="transition__text__wraper"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1800"
        >
          <div className="transition__text__wraper__col">
            <div className="transition__text__wraper__col__svg">
              <img
                loading="lazy"
                alt="zood"
                className="transition__text__wraper__col__svg__svg"
                src={SvgCountimg3}
              />
            </div>
          </div>
          <div className="transition__text__wraper__col">
            <div className="transition__text__wraper__col__heading">
              <CountUpWhenInView start={0} end={housingUnits} duration={3} />{" "}
              <span>+</span>
            </div>
            <div className="transition__text__wraper__col__subheading">
              {language.HeaderText3}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Twelvetwo);
