import React from "react";
import ReactDOM from "react-dom";
import classes from "./InProgressModal.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

function InProgressModal(props) {
  const portalElement = document.getElementById('modal');

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`${classes.backdrop} ${classes.fadeInDown} ${classes.animated}`}
          onClick={props.onConfirm}
        />, portalElement
      )}

      {ReactDOM.createPortal(<Card
        className={`${classes.modal} ${classes.fadeInDown} ${classes.animated}`}
      >
        <div
          className={`${classes.modal} ${classes.fadeInDown} ${classes.animated}`}
        ></div>
        <header
          className={`${classes.header} ${classes.fadeInDown} ${classes.animated}`}
        >
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer
          className={`${classes.actions} ${classes.fadeInDown} ${classes.animated}`}
        >
          <Button onClick={props.onConfirm}>It's Okay!</Button>
        </footer>
      </Card>, portalElement)};
    </>
  );
}

export default InProgressModal;
