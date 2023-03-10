import Link from "next/link";
import classnames from "classnames";
import classes from "./navbar.module.css";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState<boolean>(false);
  const { data: session } = useSession();

  const navbarOnScroll = () => {
    window.scrollY > 100 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarOnScroll);
    return () => {
      window.removeEventListener("scroll", navbarOnScroll);
    };
  }, []);
  return (
    <header
      className={
        scroll ? classnames(classes.header, classes.scrollNav) : classes.header
      }
    >
      <div className="container">
        <nav>
          <div
            className={
              showMenu
                ? classnames(classes["humberger"], classes["active-icon"])
                : classes["humberger"]
            }
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={classnames(
              classes["nav-menu"],
              showMenu && classes["active"]
            )}
          >
            <li className={classes["nav-item"]}>
              <Link href="about" className={classes["nav-link"]}>
                about
              </Link>
            </li>
            <li className={classes["nav-item"]}>
              <Link href="contact" className={classes["nav-link"]}>
                contact
              </Link>
            </li>
          </ul>
          <div className={classes.logo}>
            <h2>
              <Link href="/" className={classes["nav-link"]}>
                TasteBit
              </Link>
            </h2>
          </div>
          <div className={classes["login"]}>
            {session ? (
              <img
                onClick={() => {
                  signOut();
                }}
                className={classes["profile-img"]}
                src={session?.user?.image || ""}
                alt="profile picture"
              />
            ) : (
              <button
                onClick={() => {
                  signIn();
                }}
              >
                Sign in
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
