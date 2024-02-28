import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../screens/home/Home";
import { NotFound } from "../screens/not-found/NotFound"

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
