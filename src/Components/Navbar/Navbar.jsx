import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMenu(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // Bagian harus 60% terlihat agar dianggap aktif
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Kuroshi</h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a
              href="#home"
              className={menu === "home" ? "active" : ""}
              onClick={() => setMenu("home")}
            >
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#about"
              className={menu === "about" ? "active" : ""}
              onClick={() => setMenu("about")}
            >
              About Me
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#services"
              className={menu === "services" ? "active" : ""}
              onClick={() => setMenu("services")}
            >
              Services
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#projects"
              className={menu === "projects" ? "active" : ""}
              onClick={() => setMenu("projects")}
            >
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#contact"
              className={menu === "contact" ? "active" : ""}
              onClick={() => setMenu("contact")}
            >
              Contact
            </a>
          </li>
          <li className="navbar-item">
            <div className="nav-connect">Connect with Me</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
