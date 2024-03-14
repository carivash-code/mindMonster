import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../screens/home/Home";
import { NotFound } from "../screens/not-found/NotFound"
import { Services } from "../screens/services-page"
import { Process } from "../screens/process-page"

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/services" element={<Services />} />
      <Route path="/process" element={<Process />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
