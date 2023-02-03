import React from "react";
import { Link } from "react-router-dom";

import "../components/styles/landingPage.css";

export default function LandingPage() {
  return (
    <div className="background">
      <p className="title">
        <span>Bienvenido a App Estudiantes</span>
      </p>
      <div className="enter">
        <Link to="/Home">
          <div>
            <button className="buttonLanding">Entrar</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
