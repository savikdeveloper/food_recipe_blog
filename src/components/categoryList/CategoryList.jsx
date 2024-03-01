import React from 'react';
import styles from "./categoryList.module.css";
import Link from 'next/link';
import Image from 'next/image';

const chickenCtgImg = require("../../../public/images/chicken.png");
const pastaCtgImg = require("../../../public/images/pastaCtg.png");
const airFryerCtgImg = require("../../../public/images/air-fryer.png");
const breakfastCtgImg = require("../../../public/images/breakfast.png");
const instantPotCtgImg = require("../../../public/images/instant_pot.png");
const glutenFreeCtgImg = require("../../../public/images/Lentils.png");
const tacosCtgImg = require("../../../public/images/tacos.png");

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.chicken}`}>
            <div className={styles.ct_content}>
              <Image 
                src={chickenCtgImg}
                width={30}
                height={30}
                alt='chicken image'
                className={styles.image}
              />
              Chicken
            </div>
          </Link>
        </div>
        <div className={styles.category}>
          <Link href="/blog" className={`${styles.category} ${styles.pasta}`}>
            <div className={styles.ct_content}>
              <Image 
                src={pastaCtgImg}
                width={30}
                height={30}
                alt='pasta image'
                className={styles.image}
              />
              Pasta
            </div>
          </Link>
        </div>
        <div className={styles.category}>
          <Link href="/blog" className={`${styles.category} ${styles.air_fryer}`}>
            <div className={styles.ct_content}>
              <Image 
                src={airFryerCtgImg}
                width={30}
                height={30}
                alt='air_fryer image'
                className={styles.image}
              />
              Air-fryer
            </div>
          </Link>
        </div>
        <div className={styles.category}>
          <Link href="/blog" className={`${styles.category} ${styles.breakfast}`}>
            <div className={styles.ct_content}>
              <Image 
                src={breakfastCtgImg}
                width={30}
                height={30}
                alt='breakfast image'
                className={styles.image}
              />
              Breakfast
            </div>
          </Link>
        </div>
        <div className={styles.category}>
          <Link href="/blog" className={`${styles.category} ${styles.instantPot}`}>
            <div className={styles.ct_content}>
              <Image 
                src={instantPotCtgImg}
                width={30}
                height={30}
                alt='instantPot image'
                className={styles.image}
              />
              Instant-pot
            </div>
          </Link>
        </div>
        <div className={styles.category}>
          <Link href="/blog" className={`${styles.category} ${styles.glutenFree}`}>
            <div className={styles.ct_content}>
              <Image 
                src={glutenFreeCtgImg}
                width={30}
                height={30}
                alt='glutenFree image'
                className={styles.image}
              />
              Gluten-free
            </div>
          </Link>
        </div>
        <div className={styles.category}>
          <Link href="/blog" className={`${styles.category} ${styles.tacos}`}>
            <div className={styles.ct_content}>
              <Image 
                src={tacosCtgImg}
                width={30}
                height={30}
                alt='tacos image'
                className={styles.image}
              />
              Tacos
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
