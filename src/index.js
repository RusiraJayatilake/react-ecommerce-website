import "./assets/css/bootstrap-custom.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter } from "react-router-dom";

library.add(fas, far, fab);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
