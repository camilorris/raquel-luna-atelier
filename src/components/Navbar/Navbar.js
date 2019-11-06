import React, { useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

import Logo from "assets/images/logo.png";
import FacebookIcon from "assets/icons/facebook-icon-dark.svg";
import InstagramIcon from "assets/icons/instagram-icon-dark.svg";
import PinterestIcon from "assets/icons/pinterest-icon-dark.svg";

const Navbar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const sidebarClassnames = classNames({
    [styles.sidebar]: true,
    [styles.isOpen]: sidebarIsOpen
  });

  const hamburgerMenuClassnames = classNames({
    [styles.hamburgerMenu]: true,
    [styles.isOpen]: sidebarIsOpen
  });

  return (
    <div className={styles.navbarContainer}>
      <header>
        <div className={styles.logo}>
          <img src={Logo} alt="logo-raquel-luna-atelier" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#novias">Novias</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li className={styles.reservar}>
              <a href="#contact">Reservar</a>
            </li>
          </ul>
        </nav>
        <div
          className={hamburgerMenuClassnames}
          onClick={() => {
            setSidebarIsOpen(!sidebarIsOpen);
          }}
        >
          <span></span>
        </div>
        <div className={sidebarClassnames}>
          <ul className={styles.menuList}>
            <li>NOVIAS</li>
            <li>BLOG</li>
            <li>RESERVA TU CITA</li>
          </ul>
          <ul className={styles.icons}>
            <li>
              <a
                target="blank"
                href="https://www.facebook.com/RaquelLunaAtelier/"
              >
                <img src={FacebookIcon} alt="facebook icon" />
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://www.instagram.com/raquellunaatelier/"
              >
                <img src={InstagramIcon} alt="instagram icon" />
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://www.pinterest.com/23raqueldesign/"
              >
                <img src={PinterestIcon} alt="pinterest icon" />
              </a>
            </li>
          </ul>
        </div>
      </header>{" "}
    </div>
  );
};

export default Navbar;
