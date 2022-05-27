import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./components/welcome";
import 'bootstrap/dist/css/bootstrap.css';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Welcome />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
