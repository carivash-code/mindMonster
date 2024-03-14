import { useDispatch, useSelector } from "react-redux"
import { links } from "./data";
import { Outlet, Link } from "react-router-dom";
import { State } from "../../../Types/ReduxType"
import { setPageSelected } from "../../../redux/actions"

export const Header = () => {
  
  const dispatch = useDispatch();
  
  const pageSelected = (pageName: string, link: string) => {
    if(link !== '/not-found') {
      dispatch(setPageSelected(pageName));
    } else {
      dispatch(setPageSelected(''));
    }
  }
  
  const pageName = useSelector((state: State) => state.pageSelectedName);
  return (
    <>
      <nav className="header">
            <ul>
              {links.map(({ id, title, link }) => (
                <li key={id}>
                  <Link onClick={() => pageSelected(title, link)} className={`${pageName === title ? 'selected' : ""}`} to={link}>{title}</Link>
                </li>
              ))}
            </ul>
      </nav>
      <Outlet />
    </>
  );
};
