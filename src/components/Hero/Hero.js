import React from "react";

import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroImage}>
        <div className={styles.heroText}>
          <h1>Diseñamos exclusivamente para ti</h1>{" "}
          <button>Reserva tu cita</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
