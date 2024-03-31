import React from "react";
import { createPortal } from "react-dom";

// CSS
import classes from "./Overlay.module.css";
const Overlay = ({ onCloseModal }) => {
  return createPortal(
    <div className={classes.overlay} onClick={onCloseModal}></div>,
    document.getElementById("overlay-root")
  );
};

export default Overlay;
