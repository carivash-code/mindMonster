import { links } from "./data";
import { Outlet, Link } from "react-router-dom";

export const Header = () => {

  return (
    <>
      <nav className="header">
            <ul>
              {links.map(({ id, title }) => (
                <li key={id}>
                  <Link to="/not-found">{title}</Link>
                </li>
              ))}
            </ul>
      </nav>
      <Outlet />
    </>
  );
};
