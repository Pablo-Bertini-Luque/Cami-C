import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderLogo from "../components/Header";
import WorkImages from "../components/WorkImages";
import "../css/MisTrabajos.css";

function MisTrabajos() {
  return (
    <>
      <body>
        <header className="container-header-trabajos">
          <HeaderLogo />
          <Navbar />
        </header>
        <main className="container-main-trabajos">
          <WorkImages />
        </main>
        <footer className="container-footer-trabajos">
          <Footer />
        </footer>
      </body>
    </>
  );
}

export default MisTrabajos;
