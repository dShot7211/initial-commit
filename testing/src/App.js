import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import React from "react";
import Modal from "./modal";
import Sidebar from "./Sidebar";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <main>
      <button className="sidebar-toggle" onClick={() => setSideOpen(!sideOpen)}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <button className="btn" onClick={() => setModalOpen(!modalOpen)}>
        Open Modal
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
    </main>
  );
};

export default App;
