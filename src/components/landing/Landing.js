"use client";
import styles from "@/styles/landing.module.css";
import Link from "next/link";


export default function Landing({ children }) {


  return (
    <>
      <div className={styles.backgroundDiv}>
        <div className={styles.paperContainer}>

        <Link href={'/user-management'} style={{textDecoration:'none'}}>
     
          <div className={ styles.cardContainer}>
            <div className={ styles.cardmenu1} > User Management </div>
          </div>
          </Link>

          <a href={'/movie'} style={{textDecoration:'none'}}>

          <div className={styles.cardContainer}>
            <div className={ styles.cardmenu2} > Movie List </div>
          </div>
          </a>

        </div>
      </div>
    </>
  );
}
