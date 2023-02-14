import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <>
      <section className="navbar">
        <Link to="/" className="button">
          ACERCA DE MI
        </Link>
        <Link to="/QueHago" className="button">
          ¿QUE HAGO?
        </Link>
        <Link to="/Portfolio" className="button">
          PORTFOLIO
        </Link>
      </section>
    </>
  );
}

export default Navbar;
