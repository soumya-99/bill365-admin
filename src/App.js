import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { ConfigProvider } from "antd";

function App() {
  console.log("app");
  return (
    // <ReportContext>
    <PrimeReactProvider>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemSelectedBg: "#E2E2F3",
              itemSelectedColor: "#404198",
            },
          },
        }}>
        <Outlet />
      </ConfigProvider>
    </PrimeReactProvider>
    // </ReportContext>
  );
}

export default App;
