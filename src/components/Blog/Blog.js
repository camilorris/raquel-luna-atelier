import React from "react";

import styles from "./styles.module.scss";

import Lace from "assets/images/lace.png";

const Blog = () => {
  return (
    <div id="blog" className={styles.blogContainer}>
      <img src={Lace} alt="encaje" className={styles.lacePic} />
      <div className={styles.text}>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        <p>
          Integer molestie maximus magna, et ultricies sapien lobortis eu. Fusce
          vulputate ullamcorper metus, eget feugiat magna lacinia pellentesque.
          Nulla faucibus consectetur auctor. Mauris eget eros tincidunt,
          vulputate...
        </p>
        <a target="blank" href="https://www.facebook.com/RaquelLunaAtelier/">
          LEER MÁS
        </a>
      </div>
    </div>
  );
};

export default Blog;
