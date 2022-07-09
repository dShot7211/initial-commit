import React from "react";
import { useState } from "react";
import { useContext } from "react";

const DisplayContext = React.createContext();

export const Context = ({ children }) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [people, setPeople] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [memail, setMemail] = useState();
  const [mpass, setMpass] = useState();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DisplayContext.Provider
      value={{
        email,
        name,
        people,
        setEmail,
        setName,
        setPeople,
        openModal,
        closeModal,
        isModalOpen,
        setMemail,
        setMpass,
        memail,
        mpass,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(DisplayContext);
};
