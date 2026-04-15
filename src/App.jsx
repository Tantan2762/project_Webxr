import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPageWebXR from "./components/LandingPageWebXRCibiru.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageWebXR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
