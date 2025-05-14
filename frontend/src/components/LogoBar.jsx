import React from "react";
import Styles from "./LogoBar.module.css";

export default function LogoBar() {
  return (
    <div className={Styles.LogoBarContainer}>
      <div>
        <img src="turnerslogo.png" alt="TurnersLogo" className={Styles.TurnersLogo} />
      </div>

      <div className={Styles.RightLinks}>
        <p className={Styles.LoginReg}>LOGIN<span>OR</span>REGISTER</p>
        <p>0800 887 637</p>
        <p>Find Us</p>
        <p>中文</p>
      </div>
    </div>
  );
}
