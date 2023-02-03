import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import DetallesEst from "./components/DetallesEst";
import FormularioEst from "./components/FormularioEst";
import FormularioActuali from "./components/FormularioActuali";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/:id" element={<DetallesEst />} />
          <Route path="/Create" element={<FormularioEst />} />
          <Route path="/Create/:id" element={<FormularioActuali />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
