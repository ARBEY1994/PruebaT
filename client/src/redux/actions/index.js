import axios from "axios";
export const GET_ESTUDIANTES = "GET_ESTUDIANTES";
export const GET_GRADOS = "GET_GRADOS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_ID = "GET_ID";

export function GetEstudiantes() {
  return async function (dispatch) {
    try {
      let info = await axios.get(`/estudiante`);
      return dispatch({
        type: "GET_ESTUDIANTES",
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function GetGrados() {
  return async function (dispatch) {
    try {
      let infoG = await axios.get(`/grados`);
      return dispatch({
        type: "GET_GRADOS",
        payload: infoG.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function GetDetail(id) {
  return async function (dispatch) {
    try {
      let infoId = await axios.get(`/estudiante/${id}`);
      return dispatch({
        type: "GET_ID",
        payload: infoId.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function GetByName(name) {
  return async function (dispatch) {
    try {
      let { data } = await axios.get(`/estudiante?name=${name}`);
      return dispatch({
        type: "GET_BY_NAME",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postEstudiante(payload) {
  return async function (dispatch) {
    const info = await axios.post(`/estudiante`, payload);
    return info;
  };
}

export function postGrados(payload) {
  return async function (dispatch) {
    const info = await axios.post(`/grados`, payload);
    return info;
  };
}

export function deleteEstudent(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`/estudiante/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateEstudiante(id, payload) {
  return async function (dispatch) {
    try {
      await axios.put(`/estudiante/${id}`, payload);
    } catch (error) {
      console.log(error);
    }
  };
}
