import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GetGrados, postEstudiante, postGrados } from "../redux/actions";

import "./styles/create.css";

const validate = (input) => {
  let error = {};
  if (!input.PrimerNombre || typeof input.PrimerNombre !== "string") {
    error.PrimerNombre = "favor ingrese un nombre valido!";
  }

  if (!input.PrimerApellido || typeof input.PrimerApellido !== "string") {
    error.PrimerApellido = "favor ingrese un  apellido valido!";
  }
  if (!input.FechaDeNacimiento) {
    error.FechaDeNacimiento = "favor ingrese la fecha de nacimiento";
  }

  if (!input.gradosM) {
    error.gradosM = "favor seleccione un grado";
  }

  return error;
};
export default function StudentCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Grados = useSelector((state) => state.grados);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    PrimerNombre: "",
    SegundoNombre: "",
    PrimerApellido: "",

    SegundoApellido: "",
    FechaDeNacimiento: "",
    Fotografia: "",

    gradosM: [],
  });

  useEffect(() => {
    dispatch(GetGrados());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.PrimerNombre) {
      return alert("por favor ingresa un nombre!");
    } else if (!input.PrimerApellido) {
      return alert("por favor ingresa un apellido!");
    } else if (!input.gradosM) {
      return alert("por favor seleccione un grado");
    } else {
      dispatch(postEstudiante(input));

      alert("Estudiante registrado correctamente!!");
      setInput({
        PrimerNombre: "",
        SegundoNombre: "",
        PrimerApellido: "",

        SegundoApellido: "",
        FechaDeNacimiento: "",
        Fotografia: "",

        gradosM: [],
      });
    }
    navigate("/Home");
  };

  const handleChange = async (e) => {
    try {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "pruebatecnica");
      setLoading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dwwdj1lkw/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();

      setImage(file.secure_url);
      console.log(file.secure_url);
      setLoading(false);
      setInput({
        ...input,
        Fotografia: file.secure_url,
      });
    } catch {
      console.log(error);
    }
  };
  const handleChange2 = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleChangeGrados = (e) => {
    if (!input.gradosM.includes(e.target.value)) {
      setInput({
        ...input,
        gradosM: [e.target.value],
      });
    } else {
      alert("por favor seleccione otro grado");
    }
  };
  return (
    <div className="fondoCreate">
      <div className="homecre">
        <Link to="/Home">
          <button className="botonhomecre">Home</button>
        </Link>
      </div>
      <div className="titlecreate">
        <span>Registro &#160; de &#160;estudiante</span>
      </div>

      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="inputc">
          <strong>
            <label>Fotografia: </label>
          </strong>
          <input type="file" onChange={handleChange} />
          {loading ? (
            <h3>Cargando fotografia...</h3>
          ) : (
            <img src={image} width="200px" height="200" />
          )}
        </div>
        <div className="inputc">
          <strong>
            <label>Primer nombre: </label>
          </strong>
          <input
            type="text"
            autoComplete="off"
            value={input.PrimerNombre}
            name="PrimerNombre"
            onChange={(e) => handleChange2(e)}
          />
          {error.PrimerNombre && <span>{error.PrimerNombre}</span>}
        </div>
        <div className="inputc">
          <strong>
            <label>Segundo nombre: </label>
          </strong>
          <input
            type="text"
            value={input.SegundoNombre}
            name="SegundoNombre"
            onChange={(e) => handleChange2(e)}
          />
          {error.SegundoNombre && <span> {error.SegundoNombre}</span>}
        </div>

        <div className="inputc">
          <strong>
            <label>Primer apellido: </label>
          </strong>
          <input
            type="text"
            value={input.PrimerApellido}
            name="PrimerApellido"
            onChange={(e) => handleChange2(e)}
          />
          {error.PrimerApellido && <span>{error.PrimerApellido}</span>}
        </div>
        <div className="inputc">
          <strong>
            <label>Segundo apellido: </label>
          </strong>
          <input
            type="text"
            value={input.SegundoApellido}
            name="SegundoApellido"
            onChange={(e) => handleChange2(e)}
          />
          {error.SegundoApellido && <span> {error.SegundoApellido}</span>}
        </div>
        <div className="inputc">
          <strong>
            <label>Fecha de nacimiento: </label>
          </strong>
          <input
            type="date"
            value={input.FechaDeNacimiento}
            name="FechaDeNacimiento"
            onChange={(e) => handleChange2(e)}
          />
          {error.FechaDeNacimiento && <span>{error.FechaDeNacimiento}</span>}
        </div>

        <div className="inputc">
          <strong>Grados: </strong>
          <select onChange={(e) => handleChangeGrados(e)}>
            {Grados.map((e) => (
              <option className="option" key={e.Nombre}>
                {e.Nombre}
              </option>
            ))}
            {error.grados && <span>{error.grados}</span>}
          </select>
        </div>
      </form>
      <div className="moveocretae">
        <button
          className="botoncreate"
          id="submit"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Registrar estudiante
        </button>
      </div>
    </div>
  );
}
