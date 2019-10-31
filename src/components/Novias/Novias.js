import React from "react";

import styles from "./styles.module.scss";

import Princesa from "assets/images/princesa.png";
import Sirena from "assets/images/sirena.png";
import Recto from "assets/images/recto.png";
import LineaA from "assets/images/linea-a.png";

const Novias = () => {
  return (
    <div id="novias" className={styles.noviasContainer}>
      <h2>El corte perfecto</h2>
      <div className={styles.dressLeft}>
        <img
          src={Princesa}
          alt="vestido corte princesa"
          className={styles.dressLeftImage}
        />
        <div className={styles.textLeft}>
          <h6>Princesa</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
            ultricies pellentesque varius proin augue sed nulla porttitor
            tellus.
          </p>
          <a href="#contact">¡Lo quiero!</a>
        </div>
      </div>
      <div className={styles.dressRight}>
        <img
          src={Sirena}
          alt="vestido corte sirena"
          className={styles.dressRightImage}
        />
        <div className={styles.textRight}>
          <h6>Sirena</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
            ultricies pellentesque varius proin augue sed nulla porttitor
            tellus.
          </p>
          <a href="#contact">¡Lo quiero!</a>
        </div>
      </div>
      <div className={styles.dressLeft}>
        <img
          src={Recto}
          alt="vestido corte recto"
          className={styles.dressLeftImage}
        />
        <div className={styles.textLeft}>
          <h6>Recto</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
            ultricies pellentesque varius proin augue sed nulla porttitor
            tellus.
          </p>
          <a href="#contact">¡Lo quiero!</a>
        </div>
      </div>
      <div className={styles.dressRight}>
        <img
          src={LineaA}
          alt="vestido corte línea a"
          className={styles.dressRightImage}
        />
        <div className={styles.textRight}>
          <h6>Línea A</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
            ultricies pellentesque varius proin augue sed nulla porttitor
            tellus.
          </p>
          <a href="#contact">¡Lo quiero!</a>
        </div>
      </div>
    </div>
  );
};

export default Novias;
