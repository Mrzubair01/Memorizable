import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import { TodoProvider } from "./contexts/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster position="top-center" reverseOrder={false} />
  </>
);
