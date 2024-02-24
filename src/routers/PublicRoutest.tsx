import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../screens/home/Home";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
