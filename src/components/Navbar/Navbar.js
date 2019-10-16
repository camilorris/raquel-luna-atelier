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
          <li>Inicio</li>
          <li>Novias</li>
          <li>Blog</li>
          <li>Reservar</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
