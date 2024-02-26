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
    <div className={styles.container} onClick={toggle}
      style={
        theme === "dark" 
        ? {left: 1, backgroundColor: "white"} 
        : {right: 1, backgroundColor: "#0f172a"}
      }
    >
      <Image src={moonImg} width={14} height={14} alt='moon'/>
      <div 
        className={styles.ball} 
        style={
          theme === "dark" 
          ? {left: 1, background: "#0f172a"} 
          : {right: 1, background: "white"}
        }
      ></div>
      <Image src={sunImg} width={14} height={14} alt='sun'/>
    </div>
  );
}

export default ThemeToggle;
