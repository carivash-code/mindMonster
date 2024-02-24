import { links } from "./data";

export const Header = () => {
  return (
    <nav className="header">
      <ul>
        {links.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </nav>
  );
};
