import React from "react";
import { Link } from "react-router-dom";
import "./styles/card.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteEstudent, updateEstudiante } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function Card({
  id,
  name,
  SecondName,
  primerApellido,
  segundoApellido,
  Fotografia,

  grados,
  FechaDeNacimiento,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteEstudent(id));
    window.location.reload();
  };

  const handleUpdate = (id) => {
    dispatch(updateEstudiante(id));
    // redirigir a la página de actualización aquí
    navigate(`/Create/${id}`);
  };
  return (
    <div className="card">
      <div>
        <Link to={`/Home/${id}`}>
          <img
            src={Fotografia}
            alt="imagen not fount"
            width="200px"
            height="200px"
          />
        </Link>
      </div>
      <div className="content">
        <h3>Primer nombre: {name}</h3>
        <h3>Segundo nombre: {SecondName}</h3>
        <h3>Primer Apellido: {primerApellido}</h3>
        <h3>Segundo Apellido:{segundoApellido} </h3>
        <h3>Fecha de nacimiento: {FechaDeNacimiento} </h3>
        <h3>Grado: {grados.map((e) => e)}</h3>
        <button onClick={() => handleDelete(id)}>
          Eliminar
          <IoIosCloseCircleOutline />
        </button>
        <button onClick={() => handleUpdate(id)}>Actualizar</button>
      </div>
    </div>
  );
}
