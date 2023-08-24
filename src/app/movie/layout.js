import React from "react";
import Navbar from "@/components/movie/Navbar";
import styles from "@/styles/movie.module.css";

export default function LayoutMovie({ children }) {
  return (
    <div>
      <Navbar />
      {/* <div className={styles.layoutContainer} >{children}</div> */
      }
      {children}
    </div>
  );
}
