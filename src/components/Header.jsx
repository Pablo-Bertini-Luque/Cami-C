import React from "react";
import Logo from "../assets/Img/Logotipo Morado.png";
import { GrInstagram } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
import "../css/Header.css";

function HeaderLogo() {
  return (
    <>
      <section className="container-icons">
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
      <section className="container-logo">
        <img className="logo" src={Logo} alt="" />
      </section>
    </>
  );
}

export default HeaderLogo;
