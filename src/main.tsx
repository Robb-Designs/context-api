import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import FilterProvider  from "./context/FilterContext.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ThemeProvider>,
);
