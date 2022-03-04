import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Hamburger.module.css";

const Hamburger = () => {
  const [translatePosition, setTranslatePosition] = useState({
    transform: "translateX(-100%)",
  });
  const [open, setOpen] = useState(false);

  const handleTranslate = () => {
    console.log("onClick...");
    if (!open) {
      setTranslatePosition({
        transform: "translateX(0)",
      });
      setOpen(!open);
    } else {
      setTranslatePosition({
        transform: "translateX(-100%)",
      });
      setOpen(!open);
    }
  };
  return (
    <div className={styles.navContainer}>
      <button className={styles.button} onClick={() => handleTranslate(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="black"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ color: "black", width: "20px" }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className={styles.leftSidebar} style={translatePosition}>
        <button
          className={styles.closeButton}
          onClick={() => handleTranslate(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={styles.closeButtonSVG}
            style={{ color: "black", width: "20px" }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/about" className={styles.link}>
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Hamburger;
