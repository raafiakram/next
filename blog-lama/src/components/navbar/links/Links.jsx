"use client";

import styles from "./links.module.css";
import NavLink from "../navLink/NavLink";
import { useState } from "react";
import Image from "next/image";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink link={{ title: "Admin", path: "/admin" }} />}{" "}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        className={styles.menubtn}
        alt="Menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => (prev = !prev))}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
