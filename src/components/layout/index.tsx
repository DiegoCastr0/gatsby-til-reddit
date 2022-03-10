import React, { ReactNode } from "react";
import LeftBar from "./leftBar";
import * as styles from "./Layout.module.css";
import Header from "./header";
import "./globalStyles.css";

interface Props {
  children: ReactNode;
  pageTitle: string;
}

const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <main className={styles.container}>
      <LeftBar />
      <div className={styles.mainContent}>
        <Header title={pageTitle}/>
        {children}
      </div>
    </main>
  );
};

export default Layout;
