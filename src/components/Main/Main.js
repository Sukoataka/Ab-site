import React from "react";
import classes from "./Main.module.css";

function Main() {
  const mainBegin = "<MAIN>";
  const mainEnd = "</MAIN>";
  return (
    <>
      <main>
        <h1
          className={`${classes.tag} ${classes.beginMain} ${classes.fadeInDown} ${classes.animated}`}
        >
          {mainBegin}
        </h1>
        <h1
          className={`${classes.tag} ${classes.endMain} ${classes.fadeInDown} ${classes.animated}`}
        >
          {mainEnd}
        </h1>
      </main>
    </>
  );
}

export default Main;
