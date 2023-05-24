import React from "react";
import logo from "../assets/Img/Logotipo Morado.png";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
import "../css/Footer.css";

function Footer() {
  return (
    <>
      <hr />
      <footer className="footer">
        <section>
          <img src={logo} alt="logo" style={{ width: "100px" }} />
        </section>
        <section className="container-center">
          <p className="text">Todos los derechos reservados</p>
          <AiOutlineCopyrightCircle className="copyright" />
        </section>
        <section>
          <a
            className="icons"
            href="https://www.instagram.com/camiclericomakeup/"
          >
            <GrInstagram />
          </a>
          <a className="icons" href="https://www.tiktok.com/@camicmakeup">
            <IoLogoTiktok />
          </a>
        </section>
      </footer>
    </>
  );
}

export default Footer;
