import styled from "@emotion/styled";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "../src/styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/slack.png";

const Navbar = () => {
  const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    background: "black",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppBar position="static" className={styles.Navbar_section_full}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Typography className={styles.Navbar_link}>
            <Link href="/">
              <Image src={logo} width={40} height={40}/>
            </Link>
          </Typography>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${
              isMenuOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Typography className={styles.Navbar_link}>
                  <Link href="/nested/about" onClick={handleMenuItemClick}>
                    ABOUT US
                  </Link>
                </Typography>
              </li>
              <li className="nav-item">
                <Typography className={styles.Navbar_link}>
                  <Link href="/nested/service" onClick={handleMenuItemClick}>
                    SERVICES
                  </Link>
                </Typography>
              </li>
              <li className="nav-item">
                <Typography className={styles.Navbar_link}>
                  <Link href="/nested/portfolio" onClick={handleMenuItemClick}>
                    PORTFOLIO
                  </Link>
                </Typography>
              </li>
              <li className="nav-item">
                <Typography className={styles.Navbar_link}>
                  <Link href="/nested/blog" onClick={handleMenuItemClick}>
                    BLOG
                  </Link>
                </Typography>
              </li>
              <li className="nav-item">
                <Typography className={styles.Navbar_link}>
                  <Link href="/nested/contact" onClick={handleMenuItemClick}>
                    CONTACT
                  </Link>
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </AppBar>
  );
};

export default Navbar;
