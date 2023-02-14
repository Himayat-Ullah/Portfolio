import React from "react";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="contactd">
      <div className="heading">
        <h1>CONTACT</h1>
      </div>
      <form
        action="https://formspree.io/f/xknajrkl"
        method="POST"
        className="formd"
      >
        <h2>CONTACT ME</h2>
        <label htmlFor="" className="labeld" id="test">
          Phone Number
        </label>
        <input
          type="number"
          className="inputd"
          value={name}
          name="number"
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="" className="labeld" id="emaild">
          Email
        </label>
        <input
          type="email"
          className="inputd"
          value={email}
          autoComplete="off"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="" className="labeld" id="messaged">
          Message
        </label>
        {/* <input type="textarea" id="textaread" /> */}
        <textarea
          name="message"
          id="textaread"
          className="inputd"
          autoComplete="off"
          value={message}
          onChange={(e) => setMessage(console.log(e.target.value))}
        />

        <button>Send</button>
      </form>
    </div>
  );
}

export default Contact;
