import React from 'react';
import styles from "./navbar.module.css"
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const youtubeLogo = require('/public/images/youtube.png');
const instagramLogo = require('/public/images/instagram.png');
const telegramLogo = require('/public/images/Telegram_logo.webp');

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src={youtubeLogo} width={20} height={20} alt="youtube" />
        <Image src={instagramLogo} width={20} height={20} alt="instagram" />
        <Image src={telegramLogo} width={20} height={20} alt="telegram" />
      </div>
      <div className={styles.logo}>SavikDev</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Uy</Link>
        <Link href="/" className={styles.link}>Aloqa</Link>
        <Link href="/" className={styles.link}>Bloglar</Link>
        <AuthLinks />
      </div>
    </div>
  );
}

export default Navbar;