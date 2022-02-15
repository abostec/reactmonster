// @flow
import React from "react";
import "./HomeStyles.scss";
import { css } from "aphrodite";
import styles from "./HomeStyles"
export default function HomeView(props) {
  return (
    //you can delete all this below code to write yours
    <div className="homepage">

      <section className="cssopt">
       
       Write your code on this page alone<br/>
       using css styling
       
      </section>
      <section className={css(styles.aphroditeOpt)}>
       
      Write your code on this page alone<br/>
      using aphrodite styling

      </section>
      
    </div>
  );
}
