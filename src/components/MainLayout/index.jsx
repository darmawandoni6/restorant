"use client";

import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import images from "@/src/aseets/images";
import { listMenu, sosmed } from "./helpers/constants";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types"; // ES6

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link href="/">
            <Image src={images.logo} width={97} height={60} alt="logo" />
          </Link>
          <ul className={styles.list}>
            {listMenu.map((item) => (
              <li
                key={item.href}
                className={pathname === item.href ? styles.active : ""}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {children}
      <footer
        className={styles.footer}
        style={{
          backgroundImage: `url(${images.footerBg.src})`,
        }}
      >
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <Link href="/">
                <Image src={images.logo} width={97} height={60} alt="logo" />
              </Link>
            </div>
            <div className={styles.desc}>
              Axel-Springer-Platz 3, 20355 Hamburg, Germany <br />
              Info@yourdomain.com <br /> +(200) 0760 0760
            </div>
            <div className={styles.sosmed}>
              {sosmed.map((item, i) => (
                <Link key={i} href={item.href}>
                  {item.icon}
                </Link>
              ))}
            </div>
            <div className={styles.divider} />
          </div>
        </div>
      </footer>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
