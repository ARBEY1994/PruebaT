import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GetDetail } from "../redux/actions";

import "./styles/detail.css";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const IdEstudiante = useSelector((state) => state.getId);
  const [state, setState] = useState(true);

  useEffect(() => {
    dispatch(GetDetail(id)).then(() => setState(false));
  }, [dispatch, id]);

  if (state) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="detail">
      <div>
        {
          <div className="fondo2">
            <div className="imagend">
              <img
                src={IdEstudiante.Fotografia}
                alt="img not fount"
                height="100px"
                width="100px"
              />
            </div>
            <div className="text">
              <h3>Id: {IdEstudiante.id}</h3>
              <h3>Primer nombre: {IdEstudiante.PrimerNombre}</h3>

              <h3>Segundo nombre: {IdEstudiante.SegundoNombre}</h3>
              <h3>Primer apellido: {IdEstudiante.PrimerApellido} </h3>
              <h3>Segundo apellido: {IdEstudiante.SegundoApellido}</h3>
              <h3>Fecha de nacimiento: {IdEstudiante.FechaDeNacimiento}</h3>

              <h3>Grados: {IdEstudiante.grados.map((e) => e.Nombre)}</h3>
            </div>
          </div>
        }
      </div>
      <div>
        <h1>{}</h1>
        <h2>{}</h2>
        <Link to="/Home">
          <button className="botondetail">Home</button>
        </Link>
      </div>
    </div>
  );
}
