import { lazy, memo, useLayoutEffect, useState } from "react";

import sendAnalytics from "@utils/sendAnalytics";
import useSettings from "../utils/useSettings";

const Appropriations = lazy(() => import("@components/Appropriations"));
const Capabilities = lazy(() => import("@components/Capabilities"));
const ChiefOfficer = lazy(() => import("@components/ChiefOfficer"));
const Contact = lazy(() => import("@components/Contact"));
const CustomCursor = lazy(() => import("@components/CustomCursor"));
const ElevenSection = lazy(() => import("@components/ElevenSection"));
const HomeContactForm = lazy(() => import("@components/HomeContactForm"));
const HomeSection = lazy(() => import("@components/HomeSection"));
const LegacySection = lazy(() => import("@components/LegacySection"));
const NewsLetter = lazy(() => import("@components/NewsLetter"));
const OurGoals = lazy(() => import("@components/OurGoals"));
const OurMessage = lazy(() => import("@components/OurMessage"));
const OurPartners = lazy(() => import("@components/OurPartners"));
const Projectss = lazy(() => import("@components/Projects"));
const ProvideServices = lazy(() => import("@components/ProvideServices"));
const ScrollToTop = lazy(() => import("@components/ScrollToTop"));
const SlidingImages = lazy(() => import("@components/SlidingImages"));
const Society = lazy(() => import("@components/Society"));
const Twelvetwo = lazy(() => import("@components/Twelvetwo"));
const Value = lazy(() => import("@components/Value"));
const Vision = lazy(() => import("@components/Vision"));
const WhyUs = lazy(() => import("@components/WhyUs"));
function Index() {
  useLayoutEffect(() => sendAnalytics("home"), []);

  const settings = useSettings();

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const onChangeCursor = (e) => {
    if (window.innerWidth > 1024) {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <>
      <ScrollToTop />
      <div onMouseMove={onChangeCursor}>
        <HomeSection />
        <Twelvetwo
          commercialUnits={settings?.commercialUnits}
          developedSpaces={settings?.developedSpaces}
          housingUnits={settings?.housingUnits}
        />
        <ElevenSection />
        <LegacySection heritage={settings?.heritage} />
        <Society foundersMessage={settings?.foundersMessage} />
        <ChiefOfficer ceoMessage={settings?.CEOMessage} />
        <Vision vision={settings?.vision} />
        <OurMessage message={settings?.message} />
        <Value values={settings?.values} />
        <OurGoals goals={settings?.goals} />
        <ProvideServices services={settings?.services} />
        <Capabilities capabilities={settings?.capabilities} />
        <OurPartners partners={settings?.partners} />
        <WhyUs whyUs={settings?.whyUs} />
        <Projectss />
        <Appropriations />
        <HomeContactForm />
        <NewsLetter />
        <SlidingImages />
        <Contact />
        {window.innerWidth > 1024 && (
          <CustomCursor cursorPosition={cursorPosition} />
        )}
      </div>
    </>
  );
}

export default memo(Index);
