import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mohana</h1>
        <p className={styles.description}>
          I'm a Final year student of AI and Data science branch . Check out my
          Resume!
        </p>
        <a
          href="https://drive.google.com/file/d/1o9YU8N0Kea0AO6BTxmdCiX06fObj_14Z/view?usp=sharing"
          className={styles.contactBtn}
        >
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/girl3.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
