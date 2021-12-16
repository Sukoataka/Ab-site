import React, { useState } from "react";
import classes from "./Main.module.css";
import InProgressModal from "../InProgressModal/InProgressModal";

function Main() {
  const mainBegin = "<MAIN>";
  const mainEnd = "</MAIN>";
  const [error, setError] = useState(true);

  const errorHandler = () => {
    setError(false);
  };

  return (
    <>
    <div>
        {error && (
          <InProgressModal
            title="Work in progress"
            message="Sorry, i'm still working on my website"
            onConfirm={errorHandler}
          />
        )}
      </div>
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
