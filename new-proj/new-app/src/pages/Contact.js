import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <main className="firstsection">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261__480.jpg"
          alt="image"
        />
      </main>
      <section className="container">
        <h1>OUR OFFICES</h1>
        <div className="boxcontainer">
          <div className="info">
            <h3>Noida</h3>
            <h5>info@bizzeonline.com</h5>
            <p>+91-8178567042</p>
          </div>
          <div className="info">
            <h3>Gurugram</h3>
            <h5>info@bizzeonline.com</h5>
            <p>+966-509514264</p>
          </div>
          <div className="info">
            <h3>Banglore</h3>
            <h5>info@bizzeonline.com</h5>
            <p>+61-468914941</p>
          </div>
          <div className="info">
            <h3>Chennai</h3>
            <h5>info@bizzeonline.com</h5>
            <p>+1-416-555-0109</p>
          </div>
        </div>
      </section>
      <Form />
    </>
  );
};

export default Contact;
