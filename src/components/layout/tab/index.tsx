import React, { ReactNode } from "react";
import * as styles from "./Tab.module.css";
import { Link } from "gatsby";

interface Props {
  text: string;
  children: ReactNode;
  linkTo: string;
}

const Tab: React.FC<Props> = ({ text, children, linkTo }) => {
  return (
    <Link
      to={linkTo}
      className={styles.tabContainer}
      activeClassName={styles.active}
    >
      {children}
      <span>{text}</span>
    </Link>
  );
};

export default Tab;
