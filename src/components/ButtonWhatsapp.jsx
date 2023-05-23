import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import "../css/IconWhatsapp.css";

function ButtonWhatsapp() {
  return (
    <>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=5493814023649"
          target="blank"
          className="buttonWhatsapp"
        >
          <AiOutlineWhatsApp />
        </a>
      </div>
    </>
  );
}

export default ButtonWhatsapp;
