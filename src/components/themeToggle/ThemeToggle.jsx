"use client";
import React, { useContext } from 'react';
import styles from "./themeToggle.module.css";
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

const moonImg = require("/public/images/moon.png");
const sunImg = require("/public/images/sun.png");

const ThemeToggle = () => {
  const {toggle, theme} = useContext(ThemeContext);
  console.log(theme)

  return (
    <div className={styles.container} onClick={toggle}>
      <Image src={moonImg} width={14} height={14} alt='moon'/>
      <div className={styles.ball}></div>
      <Image src={sunImg} width={14} height={14} alt='sun'/>
    </div>
  );
}

export default ThemeToggle;
