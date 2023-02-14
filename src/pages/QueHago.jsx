import React from "react";
import Navbar from "../components/Navbar";
import HeaderLogo from "../components/Header";
import ButtonWhatsapp from "../components/ButtonWhatsapp";
import Footer from "../components/Footer";
import "../css/QueHago.css";

function QueHago() {
  return (
    <>
      <body>
        <header className="container-cursos-home">
          <HeaderLogo />
          <Navbar />
        </header>
        <main className="container-cursos-main">
          <div className="container-cursos-text">
            <p className="text-cursos">
              Como maquilladora profesional ofrezco mis servicios de maquillaje
              social y editorial. Adoro acompañar a mis clientes en sus eventos
              y a la vez, me encanta ser parte de un set de fotografía, trabajar
              en equipo, con una inspiración y recrear algo de makeup más libre
              y artístico. ❤️
            </p>
            <p className="text-cursos">
              También incluyo clases de auto-maquillaje, descubrí una gran
              pasión en la enseñanza, en transmitir conocimientos prácticos a
              mis alumnos, brindarles herramientas que los ayuden a recrear
              maquillajes en sí mismos, desde un nivel más bajo a uno más
              complejo. El éxito con el makeup es la práctica y encontrar tu
              propio estilo! 😍
            </p>
            <p className="text-cursos">
              Y mientras soy maquilladora, me cruzó al mundo de las redes
              sociales. Disfruto muchísimo generar contenido-beauty- para mis
              plataformas. ✨️ A mi lo que me gusta es recomendar servicios y
              reseñar productos, lo hago aclarando que va desde mi experiencia
              personal y según algunos criterios de mi mirada sobre el mundo
              beauty. 😍 Crear contenido me divierte (aunque a veces también
              frustra, no lo voy a ocultar), siento que me acerca a las
              personas, y me ayuda a transmitir mensajes que espero a algunas
              puedan inspirar e invitar a mirar un poquito a través de los
              lentes con los que veo la vida y el mundo. 😃✨️❤️
            </p>
          </div>
          <div>
            <ButtonWhatsapp />
          </div>
        </main>
        <footer className="container-cursos-footer">
          <Footer />
        </footer>
      </body>
    </>
  );
}

export default QueHago;
