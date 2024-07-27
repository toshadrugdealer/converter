import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import { BaseLayout } from "./layouts/BaseLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BaseLayout />
  </ThemeProvider>
);
