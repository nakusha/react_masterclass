import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  backgroundColor: "whitesmoke",
  textColor: "#111",
};

const light = false;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
