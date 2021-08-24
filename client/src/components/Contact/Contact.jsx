import { useState } from "react";
import { createMessage } from "../../services/contacts";
import "./Contact.css";

export default function Contact() {
  const [sent, isSent] = useState(false)
  const [contact, setContact] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMessage(contact);
    setContact({
      email: "",
      message: "",
    })
    isSent(!sent)
  };

  return (
    <div id="contact">
      <h1 id="contact-me">Contact</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div className="label-input">
          <label className="labels" htmlFor="name">
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="name"
            name="name"
            type="name"
            value={contact.name}
            className="inputs"
            placeholder="Name"

          />
        </div>
        <div className="label-input">
          <label className="labels" htmlFor="email">
          </label>
          <input
            onChange={(e) => handleChange(e)}
            id="email"
            name="email"
            type="email"
            value={contact.email}
            className="inputs"
            placeholder="Email"

          />
        </div>
        <div className="label-input">
          <label className="labels" htmlFor="message">
          </label>
          <textarea
            onChange={(e) => handleChange(e)}
            id="message"
            name="message"
            type="text"
            value={contact.message}
            className="inputs"
            placeholder="Your message"
          />
        </div>
        <button className="contact-button" type="submit">{sent === true ? "Sent!" : "Send" }</button>
      </form>
    </div>
  );
}