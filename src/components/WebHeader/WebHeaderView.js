// @flow
import React from "react";
import {css} from "aphrodite"
import styles from "./WebHeaderStyles"
import LogoSmall from "../../assets/images/LogoSmall/LogoSmall.png"
import Dot from "../../assets/images/Dot/Dot.png"
import Notification from "../../assets/images/Notification/Notification.png"
import Search from "../../assets/images/Search/Search.png"
import Profile from "../../assets/images/Profile/Profile.png"
import ArrowDown from "../../assets/images/ArrowDown/ArrowDown.png"
import { Link } from "react-router-dom";
export default function WebHeaderView(props) {

/*  const topContainer = useRef();

  useEffect(() => {
    // To make sure page starts from the top
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);
 */
  return (
    <div
     
    >
     <div className={css(styles.mainHeader)}>
       <div className={css(styles.container)}>
        <div className={css(styles.imageView)}>
          <img src={LogoSmall} alt="uncloack Logo" />
        </div>
          <div className={css(styles.menuView)}>
            <Link to="#" className={css(styles.link)} >Home</Link>
            <Link to="#" className={css(styles.link)}  >Invites</Link>
            <Link to="#" className={css(styles.link)}  >Jobs</Link>
            <Link to="#" className={css(styles.link)}  >Account</Link>
          </div>
          <div className={css(styles.acountView)}>
            <div className={css(styles.search)}><img src={Search} /></div>
            <div className={css(styles.notification)}><img src={Notification} /><img className={css(styles.dot)} src={Dot} /></div>
            <div className={css(styles.profile)}>
              <div>
              <img className={css(styles.profileImage)} src={Profile} />
              </div>
              
              <div style={{display:"flex",flexDirection:"column",textAlign: "left",justifyContent: "space-around",margin:"0px 10px 0px 10px"}}>
                <p className={css(styles.profileFont1)}>Austin Robertson</p>
                <p className={css(styles.profileFont2)}>Marketing Administrator</p>
              </div>
              <div style={{display:"flex",alignItems:"center"}}>
                <img src={ArrowDown} />
              </div>
              </div>
          </div>
       </div>
        
       </div>
    </div>
  );
}
