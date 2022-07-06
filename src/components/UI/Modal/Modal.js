import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { MdOutlineClose } from "react-icons/md";

const BackDrop = (props) => {
  return (
    <div
      onClick={props.onClose}
      className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30 z-10"
    ></div>
  );
};

const ModalOverlay = (props) => {
  console.log("modal", props);
  return (
    <div className={classes.modal}>
      <div className={classes["modal-header"]}>
        <h2 className="font-bold">{props.title}</h2>
        <MdOutlineClose
          className="w-5 h-5 ml-auto cursor-pointer"
          onClick={props.onClose}
        />
      </div>
      <div className="flex-grow p-2 border-b-[0.5px]">{props.children}</div>
      <div className="p-2 text-sm"></div>
    </div>
  );
};

const Modal = (props) => {
  if (!props.show) {
    return;
  }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay {...props} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
