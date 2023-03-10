import React from "react";
import classes from "./footer.module.css";
const Footer = () => {
  const socialIcon = [
    "fa-brands fa-facebook-f",
    "fa-brands fa-twitter",
    "fa-brands fa-instagram",
  ];
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes["text"]}>
          <p className={classes["copyright-text"]}>
            Copyright © {new Date().getFullYear()}  | <a href="#">Tastebit.</a>
          </p>
          <ul className={classes["social-menu"]}>
              {socialIcon.map((icon, index) => (
                <li key={index}>
                  <a href="">
                    <i className={icon}></i>
                  </a>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
