import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";

function App() {
  console.log("app");
  return (
    // <ReportContext>
    <PrimeReactProvider>
      <Outlet />
    </PrimeReactProvider>
    // </ReportContext>
  );
}

export default App;
