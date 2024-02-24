import AppRouter from "./routers/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MonsterApp = () => {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
};

export default MonsterApp;
