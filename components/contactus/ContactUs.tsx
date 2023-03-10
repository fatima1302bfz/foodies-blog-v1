import React from "react";
import classes from "./contact.module.css";
const ContactUs = () => {
  const socialIcon = [
    "fa-brands fa-facebook-f",
    "fa-brands fa-twitter",
    "fa-brands fa-instagram",
  ];
  return (
    <div className="container">
      <div className={classes["contact"]}>
        <h2>Get in touch</h2>

        <form>
          <ul>
            <li>
              <label htmlFor="name">
                Name <span className={classes["required-star"]}>*</span>
              </label>
              <input type="text" id="name" name="user_name" required />
            </li>
            <li>
              <label htmlFor="mail">
                Email <span className={classes["required-star"]}>*</span>
              </label>
              <input type="email" id="mail" name="user_email" required />
            </li>
            <li>
              <label htmlFor="msg">Message</label>
              {/* @ts-ignore */}
              <textarea rows="4" cols="50"></textarea>
            </li>
          </ul>
          <div className={classes["submition"]}>
            <button>send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
