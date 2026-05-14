import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";  // TODO: Add other pages here
import ManagerHistory from "./pages/ManagerHistory";
import Records from "./pages/Records";  // TODO: Add other pages here
import HeadtoHead from "./pages/HeadtoHead";  // TODO: Add other pages here
import "./styles/global.css";  // TODO: Add other styles here

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manager-history" element={<ManagerHistory />} />
        <Route path="/records" element={<Records />} />
        <Route path="/headtohead" element={<HeadtoHead />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;