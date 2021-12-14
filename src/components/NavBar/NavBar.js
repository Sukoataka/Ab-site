import React from "react";
import classes from "./NavBar.module.css";
import Logo from "../../assets/transparent.png";

function NavBar() {
  const navBegin = "<NAV>";
  const navEnd = "</NAV>";

  return (
    <>
      <div className={classes.backdrop}>
        <nav className={classes.navBar}>
          <img
            src={Logo}
            className={`${classes.Logo} ${classes.animated} ${classes.fadeInDown}`}
            alt="Logo Alossery bouwen"
          />
          <i
            className={`${classes.Header} ${classes.animated} ${classes.fadeInDown}`}
          >
            Bouwen Alossery
          </i>
          <h1 className={`${classes.tag} ${classes.navBeg} ${classes.fadeInDown} ${classes.animated}`}>{navBegin}</h1>
          <h1 className={`${classes.tag} ${classes.navEnd} ${classes.fadeInDown} ${classes.animated}`}>{navEnd}</h1>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
