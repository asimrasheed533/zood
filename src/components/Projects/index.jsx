import {
  memo,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Image from "../Image";
import Project from "./components/project";
import gsap from "gsap";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import useGetLanguage from "@utils/useGetLanguage";
import useQuery from "@utils/useQuery";

function Home() {
  const { data } = useQuery("/projects/all");

  const language = useGetLanguage();
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const selectedLanguage = useGetLanguage();
  const cursorLabel = useRef(null);
  const xMoveContainer = useRef(null);
  const yMoveContainer = useRef(null);
  const xMoveCursor = useRef(null);
  const yMoveCursor = useRef(null);
  const xMoveCursorLabel = useRef(null);
  const yMoveCursorLabel = useRef(null);

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  useLayoutEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };

  const manageModal = useCallback((active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  }, []);

  const memoizedData = useMemo(
    () =>
      data
        ?.sort((a, b) => a.place - b.place)
        ?.filter((data) => data?.deletedAt === null),
    [data],
  );

  return (
    <div className={styles?.headingfixed} id="Timeline">
      <div>
        <h2 className="eleven__heading__prjct" style={{ paddingTop: "0.5em" }}>
          {language.OurTimeLine}
        </h2>
      </div>
      <main
        onMouseMove={(e) => {
          moveItems(e.clientX, e.clientY);
        }}
        className={styles.projects}
      >
        <div className={styles.body}>
          {memoizedData?.map((project, index) => (
            <Project
              index={index}
              image={project.logo}
              arabicImage={project.logoArabic}
              year={project.timeline}
              location={
                selectedLanguage === "ar" ? project.city.ar : project.city.en
              }
              manageModal={manageModal}
              key={index}
            />
          ))}
        </div>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: `${index * -100}%` }}
            className={styles.modalSlider}
          >
            {memoizedData?.map((project, index) => (
              <div
                className={styles.modal}
                style={{ backgroundColor: "#f5f5f5", objectFit: "cover" }}
                key={`modal_${index}`}
              >
                <Image
                  loading="lazy"
                  alt="zood"
                  src={project.banner}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default memo(Home);
