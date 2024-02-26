import React from 'react';
import styles from "./authLinks.module.css";
import Link from 'next/link';

const AuthLinks = () => {
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Kirish</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Chiqish</span>
        </>
      )}
    </>
  );
}

export default AuthLinks;
