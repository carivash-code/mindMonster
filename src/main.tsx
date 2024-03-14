import ReactDOM from "react-dom/client";

// import './styles/utils.scss';
import "./styles/index.scss";
import MonsterApp from "./MonsterApp";
import { Provider } from "react-redux"
import store from "./redux/store"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <MonsterApp />
  </Provider>
);
