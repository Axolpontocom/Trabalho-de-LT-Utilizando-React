import {BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "./pages/Inicial";
import Docentes from "./pages/Docentes"; 
import Formulario from "./pages/Formulario";
import Campus from "./pages/Campus"; 
import Info from "./pages/Info";
import Metodologia from "./pages/Metodologia";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Metodologia" element={<Metodologia />}/>
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;