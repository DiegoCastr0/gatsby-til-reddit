import React from "react";
import * as styles from "./LeftBar.module.css";
import Tab from "../tab";
import { StaticImage } from "gatsby-plugin-image";

const LeftBar: React.FC = () => {
  return (
    <div className={styles.leftBar}>
      <div className={styles.leftBarContent}>
        <StaticImage
          src="../../../assets/icons/reddit-logo.svg"
          alt="reddit-logo"
        />
        <div className={styles.tabs}>
          <Tab text="home" linkTo="/">
            <StaticImage src="../../../assets/icons/home.svg" alt="text" />
          </Tab>
          <Tab text="r/todayilearned" linkTo="/today-i-learned">
            <StaticImage src="../../../assets/icons/people.svg" alt="text" />
          </Tab>
        </div>
        <div className={styles.userTab}>
          <StaticImage
            src="../../../assets/images/avatar.png"
            alt="Profile pic"
          />
          <div>
            <span>Tom Cook</span>
            <button>View profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
