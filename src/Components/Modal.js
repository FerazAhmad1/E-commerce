import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

export const Modal = (props) => {
  return ReactDom.createPortal(
    <div className="modal">{props.children}</div>,
    document.getElementById("overlay")
  );
};
export default Modal;
