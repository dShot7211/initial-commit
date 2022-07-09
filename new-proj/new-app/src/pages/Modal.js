import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Modal = () => {
  const { isModalOpen, closeModal, setMemail, setMpass, memail, mpass } =
    useGlobalContext();
  console.log(memail, mpass);

  const handleMSubmit = (e) => {
    e.preventDefault();
    setMemail("");
    setMpass("");
  };

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <form action="" className="modalform">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            valule={memail}
            onChange={(e) => setMemail(e.target.value)}
          />
          <br />
          <label htmlFor="passoword">Password :</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={mpass}
            onChange={(e) => setMpass(e.target.value)}
          />
          <br />
          <button type="submit" onClick={handleMSubmit}>
            Submit
          </button>
        </form>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
