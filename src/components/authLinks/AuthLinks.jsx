"use client";
import React, { useState } from 'react';
import styles from "./authLinks.module.css";
import Link from 'next/link';

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>Kirish</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Chiqish</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {
        open && (
          <div className={styles.responsiveMenu}>
            <Link href="/">Uy</Link>
            <Link href="/">Aloqa</Link>
            <Link href="/">Bloglar</Link>
            {status === "notauthenticated" ? (
              <Link href="/login">Kirish</Link>
              ) : (
                <>
                  <Link href="/write" className={styles.link}>Write</Link>
                  <span className={styles.link}>Chiqish</span>
                </>
              )
            }
          </div>
        )
      }
    </>
  );
}

export default AuthLinks;
