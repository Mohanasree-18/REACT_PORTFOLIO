import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const Certifications = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>
                WALMART Advanced Software Engineering Job Simulation on Forage.
              </h3>
              <p></p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>
                GOOGLE certification on completing Google Cloud career readiness
                Associate Cloud Engineer track.
              </h3>
              <p></p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>
                UDEMY certification on Full stack web development (MERN stack).
              </h3>
              <p></p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>IBM certification on SQL.</h3>
              <p></p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>COURSERA certification on Machine Learning.</h3>
              <p></p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>NPTEL certification on Python programming</h3>
              <p></p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
