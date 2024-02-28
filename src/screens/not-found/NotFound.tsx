import './NotFound.scss'
import { Outlet, Link } from "react-router-dom";

export const NotFound = () => {
  
  return (
      <div className='container'>
        <iframe src="https://lottie.host/embed/049d20f8-0496-47b6-9f89-823616e2ae8d/ymXKqsXhNG.json"></iframe>
        <h1>Sitio en desarrollo</h1>
        <Link to="/">
          <p>Ir al inicio 🏠</p>
          </Link>
        <Outlet />
      </div>
  );
};
