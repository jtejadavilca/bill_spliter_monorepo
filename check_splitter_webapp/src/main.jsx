import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import CheckSplitterApp from "./CheckSplitterApp";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <CheckSplitterApp />
        </BrowserRouter>
    </StrictMode>
);
