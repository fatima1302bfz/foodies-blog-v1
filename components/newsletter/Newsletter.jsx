import React from "react";
import classes from "./newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={classes["newsletter"]}>
      <div className="container">
        <div className="wrapper">
          <div className={classes["heading"]}>
            <h2>
              Deliciousness <br /> to your inbox
            </h2>
            <p>Enjoy weekly hand picked recipes and <br /> recommandations</p>
          </div>
          <form className={classes["news-form"]}>
            <div className={classes["form-group"]}>
              <input type="email" placeholder="Email address"/>
              <button className={classes["join-btn"]}>join</button>
            </div>
          </form>
          <p className={classes["terms"]}>
            By joining to our newsletter, you agree to our {" "}
            <a href="#">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
