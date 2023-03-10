import React from "react";
import TeamCard from "./team/TeamCard";
import classes from "./about.module.css";

const team = [
  {
    id: 1,
    image: "/team/team-1.jfif",
    name: "fatima bkt",
    prof: "chef and blogger",
    socialLinks: [
      "https://www.facebook.com/profile.php?id=100025101773233",
      "https://www.instagram.com/fatima_bfz13/",
      "https://twitter.com/BktFatima",
    ],
  },
  {
    id: 2,
    image: "/team/team-2.jfif",
    name: "fatima bkt",
    prof: "chef and blogger",
    socialLinks: [
      "https://www.facebook.com/profile.php?id=100025101773233",
      "https://www.instagram.com/fatima_bfz13/",
      "https://twitter.com/BktFatima",
    ],
  },
  {
    id: 3,
    image: "/team/team-3.jfif",
    name: "fatima bkt",
    prof: "chef and blogger",
    socialLinks: [
      "https://www.facebook.com/profile.php?id=100025101773233",
      "https://www.instagram.com/fatima_bfz13/",
      "https://twitter.com/BktFatima",
    ],
  },
  {
    id: 4,
    image: "/team/team-4.jfif",
    name: "fatima bkt",
    prof: "chef and blogger",
    socialLinks: [
      "https://www.facebook.com/profile.php?id=100025101773233",
      "https://www.instagram.com/fatima_bfz13/",
      "https://twitter.com/BktFatima",
    ],
  },
  {
    id: 5,
    image: "/team/team-5.jfif",
    name: "fatima bkt",
    prof: "chef and blogger",
    socialLinks: [
      "https://www.facebook.com/profile.php?id=100025101773233",
      "https://www.instagram.com/fatima_bfz13/",
      "https://twitter.com/BktFatima",
    ],
  },
  {
    id: 6,
    image: "/team/team-6.jfif",
    name: "fatima bkt",
    prof: "chef and blogger",
    socialLinks: [
      "https://www.facebook.com/profile.php?id=100025101773233",
      "https://www.instagram.com/fatima_bfz13/",
      "https://twitter.com/BktFatima",
    ],
  },
  {
    id: 7,
    image: "/team/team-7.jfif",
    name: "fatima bkt",
    prof: "chef and blogger",
    socialLinks: [
      "https://www.facebook.com/profile.php?id=100025101773233",
      "https://www.instagram.com/fatima_bfz13/",
      "https://twitter.com/BktFatima",
    ],
  },
  {
    id: 8,
    image: "/team/team-8.jfif",
    name: "fatima bkt",
    prof: "chef and blogger",
    socialLinks: [
      "https://www.facebook.com/profile.php?id=100025101773233",
      "https://www.instagram.com/fatima_bfz13/",
      "https://twitter.com/BktFatima",
    ],
  },
];

const AboutComponent = () => {
  return (
    <section className={classes["about"]}>
      <div className="container">
        <div className={classes["page-head"]}>
          <h2>about</h2>
        </div>
        <div className={classes["wrapper"]}>
          <article className={classes["one"]}>
            <h2>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              we're a group of foodies who love <br /> cooking and the internet
            </h2>
            <div className={classes["about-img"]}></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam
              non porro veritatis autem. Quo eaque magnam quod! Officia aliquam
              id quis maxime deleniti similique aperiam eaque quas obcaecati
              veniam.
            </p>
          </article>
          <article className={classes["two"]}>
            <div className={classes["text"]}>
              <h2>
                simple, easy <br /> recipes for all
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam
                non porro veritatis autem. Quo eaque magnam quod! Officia
                aliquam id quis maxime deleniti similique aperiam eaque quas
                obcaecati veniam.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/chef-3.jpg" alt="" />
          </article>
          <article className={classes["three"]}>
            <h2>
              an incredible team of talented <br /> chefs and foodies
            </h2>
            <div className={classes["team-list"]}>
              {team?.map((member) => (
                <TeamCard key={member?.id} member={member} />
              ))}
            </div>
          </article>
        </div>
        <div className={classes["small-descr"]}>
          <h3>Operation from NYC, Dubai and London</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugiat
            velit nostrum debitis soluta iusto, odio, consequuntur reprehenderit
            aliquid expedita laboriosam quis necessitatibus numquam! Quasi in
            vitae dignissimos ipsa molestiae!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
