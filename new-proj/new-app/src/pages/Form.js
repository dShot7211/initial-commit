import React from "react";
import { useState } from "react";

import { useGlobalContext } from "./Context";

const Form = () => {
  const { name, email, setName, setEmail, setPeople } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const person = { id: new Date().getTime().toString(), name, email };
      setPeople((people) => {
        return [...people, person];
      });

      setName("");
      setEmail("");
    } else {
      console.log("empty value");
    }
  };

  return (
    <>
      <section className="formcontainer">
        <h1>WRITE US A MESSAGE</h1>
        <form action="" className="details" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="text" placeholder="Phone" name="phone" />
          <input type="text" placeholder="Subject" name="subject" />
          <textarea
            className="textarea"
            name="w3review"
            placeholder="Write Message"
          ></textarea>
          <button type="submit" className="btn">
            SEND
          </button>
        </form>
      </section>
    </>
  );
};
export default Form;
