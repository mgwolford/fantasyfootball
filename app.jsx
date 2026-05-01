import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ManagerHistory from "./pages/ManagerHistory";
import Records from "./pages/Records";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manager-history" element={<ManagerHistory />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;