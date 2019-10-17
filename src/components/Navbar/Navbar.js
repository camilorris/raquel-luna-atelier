import React from "react";

import styles from "./styles.module.scss";
import Logo from "assets/images/logo.png";

const Navbar = () => {
  return (
    <header>
      <div className={styles.logo}>
        <img src={Logo} alt="logo-raquel-luna-atelier" />
      </div>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <a href="#"> Inicio</a>
          </li>
          <li>
            <a href="#">Novias</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li className={styles.reservar}>
            <a href="#">Reservar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
