import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetEstudiantes, GetGrados } from "../redux/actions";
import { Link } from "react-router-dom";
import Card from "./Card";

import "./styles/home.css";

export default function Home() {
  const dispatch = useDispatch();

  const AllEstudiantes = useSelector((state) => state.estudiante);
  const AllGrados = useSelector((state) => state.grados);
  const Pagina = AllEstudiantes;

  useEffect(() => {
    dispatch(GetEstudiantes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetGrados());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(GetEstudiantes());
    window.location.reload();
  };

  return (
    <div className="fondo">
      <div className="ubicacioncreate">
        <Link to="/Create">
          <button className="createvideo">Registrar estudiante</button>
        </Link>
      </div>
      <div className="title">
        <span>Estudiantes</span>
      </div>
      <div>
        <main>
          <button className="buttonLoad" onClick={(e) => handleClick(e)}>
            {" "}
            Refrescar
          </button>
        </main>
      </div>
      <div>
        <div className="homeCard">
          {Pagina.length > 0 ? (
            Pagina?.map((e) => {
              return (
                <div key={e.id}>
                  <Card
                    id={e.id}
                    name={e.PrimerNombre}
                    SecondName={e.SegundoNombre}
                    primerApellido={e.PrimerApellido}
                    segundoApellido={e.SegundoApellido}
                    FechaDeNacimiento={e.FechaDeNacimiento}
                    Fotografia={e.Fotografia}
                    grados={e.grados.map((e) => e.Nombre)}
                  />
                </div>
              );
            })
          ) : (
            <div>
              <p>Hola ahora arreglo</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
