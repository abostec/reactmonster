// @flow
import React from "react";
import "./HomeStyles.scss";
import { css } from "aphrodite";
import styles from "./HomeStyles"
import {WebHeader,WebSidebar} from "../../components"
export default function HomeView(props) {
  return (
    //you can delete all this below code to write yours
    //if you code has header please use the header in the component
    //Please DONT Edit the 'components' styling e.g webfooter,ebheader and websidebar
    //Please if you know both css and aphrodite stylying (aphrodite is preferable);
    // Please dont install plugins UNLESS Absolutly required and list it during submission
    //Happy coding
    
    <div>
    <WebHeader>

    </WebHeader>
    <WebSidebar>
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

    </WebSidebar>
    </div>
   
  );
}
