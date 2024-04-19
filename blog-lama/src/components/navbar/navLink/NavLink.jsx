"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

const NavLink = ({ link }) => {
  const currentPath = usePathname();
  return (
    <Link
      href={link.path}
      className={`${styles.container} ${
        currentPath === link.path && styles.active
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
