import React from "react";
import * as styles from "./Header.module.css";
import { StaticImage } from "gatsby-plugin-image";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({title}) => {
  return (
    <header className={styles.header}>
      <StaticImage
        src="../../../assets/icons/reddit-til-logo.svg"
        alt="reddit-til-logo"
      />
      <h1>{title}</h1>
      {/* <HamburgerMenuButton /> */}
    </header>
  );
};

export default Header;
