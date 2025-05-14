import React from "react";
import Styles from "./Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <div className={Styles.NavContainer}>
      <nav className={Styles.LeftLinks}>
       
       <a><FontAwesomeIcon icon={faMagnifyingGlass} className={Styles.FontAwesomeIcon} /> Find a Car</a>
        <a>How to Buy <FontAwesomeIcon icon={faAngleDown} className={Styles.ArrowDown}/></a>
        <a>Sell your Car <FontAwesomeIcon icon={faAngleDown} className={Styles.ArrowDown} /></a>
        <a>Finance & Insurance <FontAwesomeIcon icon={faAngleDown} className={Styles.ArrowDown}/></a>
      </nav>
      <div className={Styles.RightLinks}>
        <a>Auctions <FontAwesomeIcon icon={faAngleDown} className={Styles.ArrowDown} /></a>
        <a>Services & Info <FontAwesomeIcon icon={faAngleDown} className={Styles.ArrowDown} /></a>
      </div>
    </div>
  );
}
