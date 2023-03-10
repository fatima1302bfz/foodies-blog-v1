import React from "react";
import classes from "./team.module.css";

interface Props {
  member: {
    id: number;
    name: string;
    image: string;
    prof: string;
    socialLinks: string[];
  };
}
const TeamCard = ({ member }: Props) => {
  const socialIcon = [
    { icon: <i className="fa-brands fa-facebook-f"></i> },
    { icon: <i className="fa-brands fa-twitter"></i> },
    { icon: <i className="fa-brands fa-instagram"></i> },
  ];
  return (
    <div className={classes["profile-box"]}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={member.image} alt="profile pic" />
      <h3>{member.name}</h3>
      <h4>{member.prof}</h4>

      <ul className={classes["social-menu"]}>
        {member.socialLinks.map((link: string, index: number) => (
          <li key={index}>
            <a href={link} target="_blank">
              {socialIcon[index].icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamCard;
