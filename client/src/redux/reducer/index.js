import { GET_ESTUDIANTES, GET_BY_NAME, GET_ID, GET_GRADOS } from "../actions";

const initialState = {
  estudiante: [],
  getId: [],
  modificEstudiante: [],
  grados: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ESTUDIANTES:
      return {
        ...state,
        estudiante: action.payload,
        modificEstudiante: action.payload,
      };
    case GET_GRADOS:
      return {
        ...state,
        grados: action.payload,
      };

    case GET_BY_NAME:
      return {
        ...state,
        estudiante: action.payload,
      };

    case GET_ID:
      return {
        ...state,
        getId: action.payload,
      };
    case "POST_ESTUDIANTE":
      return {
        ...state,
      };

    case "POST_GRADO":
      return {
        ...state,
      };

    case "DELETE_GRADO":
      return {
        ...state,
      };
    case "PUT_GRADO":
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default rootReducer;
