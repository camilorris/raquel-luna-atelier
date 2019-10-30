import React from "react";

import styles from "./styles.module.scss";

import Logo from "assets/images/logo-footer.svg";
import FacebookIcon from "assets/icons/facebook-icon.svg";
import InstagramIcon from "assets/icons/instagram-icon.svg";
import PinterestIcon from "assets/icons/pinterest-icon.svg";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.decorationBox}></div>
      <img className={styles.logo} src={Logo} alt="logo" />
      <ul className={styles.social}>
        <li>
          <a href="https://www.facebook.com/RaquelLunaAtelier/">
            <img src={FacebookIcon} alt="facebook icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/raquellunaatelier/">
            <img src={InstagramIcon} alt="instagram icon" />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/23raqueldesign/">
            <img src={PinterestIcon} alt="pinterest icon" />
          </a>
        </li>
      </ul>
      <p>© 2019 - Raquel Luna Atelier </p>
      <a href="#" className={styles.andromeda}>
        Powered by Andromeda
      </a>
    </div>
  );
};

export default Footer;
