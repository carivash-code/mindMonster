import { BrowserRouter as Router } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutest";

const AppRouter = () => {
  return (
    <Router>
      <PublicRoutes />
    </Router>
  );
};

export default AppRouter;
