import React from 'react';
import styles from "./featured.module.css";
import Image from 'next/image';

const bannerImg = require("../../../public/images/camping-recipes.jpeg");
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
      <b>Hey, SavikDev here!</b> Here you will find food recipes.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={bannerImg} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>On this site you can see the recipes of the food you want in the world!</h1>
          <p className={styles.postDesc}>
            You will be able to see a picture of each food on this site and read in detail how it is prepared and what should be added to it. Food information on this site is taken from <a href="https://iamafoodblog.com/">iamafoodblog</a>
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
