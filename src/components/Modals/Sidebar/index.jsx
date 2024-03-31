import React from "react";
import { createPortal } from "react-dom";

// Components
import Overlay from "../Overlay";

const SidebarModal = ({ Component, ...props }) => {
  console.log(props.showSidebar);
  if (!props.showSidebar) return null;
  return createPortal(
    <>
      <Overlay onCloseModal={props.toggleSidebar} />
      <Component {...props} />
    </>,
    document.getElementById("modal-root")
  );
};

export default SidebarModal;
