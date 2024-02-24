import React from "react";
import ReactDOM from "react-dom/client";

// import './styles/utils.scss';
import "./styles/index.scss";
import MonsterApp from "./MonsterApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MonsterApp />
  </React.StrictMode>
);
