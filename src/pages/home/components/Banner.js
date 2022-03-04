import React from "react"
import styles from "./Banner.css";

function Banner() {
    return <div className={styles.videoWrapper}>
        <video autoPlay muted className={styles.video}>
          <source src="banner.mov" type="video/mp4" />
        </video>
      </div>
}

export default Banner;