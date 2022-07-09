import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import React from "react";

const Modal = ({ modalOpen, setModalOpen }) => {
  return (
    <div className={`${modalOpen ? "modal show-modal" : "modal"}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-btn" onClick={() => setModalOpen(!modalOpen)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
