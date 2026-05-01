import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* App includes the home records preview; full records are on /records */}
    <App />
  </StrictMode>
);
