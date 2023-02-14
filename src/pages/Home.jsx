import React from "react";
import Navbar from "../components/Navbar";
import HeaderLogo from "../components/Header";
import Cami from "../assets/Img/Cami.jpeg";
import Footer from "../components/Footer";
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import "../css/Home.css";

function Home() {
  return (
    <>
      <body>
        <header className="container-header-home">
          <HeaderLogo />
          <Navbar />
        </header>
        <main className="container-main-home">
          <div className="container-main-image">
            <img className="cami" src={Cami} alt="" />
          </div>
          <div className="container-text">
            <p className="text">
              <span>
                Hola, soy Cami: maquilladora profesional y creadora de contenido
                "beauty"💓✨
              </span>
            </p>
            <p className="text">
              Empecé este recorrido en los tiempos de pandemia, donde no
              existían posibilidades de maquillar para eventos sociales,
              entonces descubrí el gran mundo de las redes sociales. Así nació
              esta fusión que tanto me apasiona. 🥰
            </p>
            <p className="text">
              ⚡️Mi objetivo es transmitir mensajes que considero claves en
              relación al autoestima de las personas. Una invitación a abrirnos
              a conceptos de belleza más amables con nosotros mismos.
            </p>
            <p className="text">
              ⚡️Considero que el maquillaje, sin dudas es una herramienta
              excelente si la usamos a nuestro favor, para potenciarnos,
              resaltarnos, amarnos. Esto relacionado a la exposición en redes
              sociales, bajo esta mirada más consciente, nos puede ayudar a
              abrirnos al mundo.{" "}
            </p>
            <p className="text">
              Esta es mi propuesta, mi propósito. Sean bienvenidos! ✨️💓
            </p>
          </div>
          <div>
            <ButtonWhatsapp />
          </div>
        </main>
        <footer className="container-footer-home">
          <Footer />
        </footer>
      </body>
    </>
  );
}

export default Home;
