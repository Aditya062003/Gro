import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bse from "./components/Bse";
import Ashokley from "./components/Ashokley";
import Cipla from "./components/Cipla";
import Eichermot from "./components/Eichermot";
import Nse from "./components/Nse";
import Reliance from "./components/Reliance";
import Tatasteel from "./components/Tatasteel";
import Register from "./components/Register";
import Home from "./components/Home";
import InputCompanyData from "./components/inputCompanyData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="bse" element={<Bse />} />
        <Route path="ashokley" element={<Ashokley />} />
        <Route path="cipla" element={<Cipla />} />
        <Route path="eichermot" element={<Eichermot />} />
        <Route path="nse" element={<Nse />} />
        <Route path="reliance" element={<Reliance />} />
        <Route path="tatasteel" element={<Tatasteel />} />
        <Route path="company" element={<InputCompanyData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
