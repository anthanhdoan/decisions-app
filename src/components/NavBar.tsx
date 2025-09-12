import "./NavBar.css";
import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">DecisionsApp</div>
      <ul className="nav-ul">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "nav-item nav-item-active" : "nav-item"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/wizard"}
          className={({ isActive }) =>
            isActive ? "nav-item nav-item-active" : "nav-item"
          }
        >
          Wizard
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "nav-item nav-item-active" : "nav-item"
          }
        >
          About
        </NavLink>
      </ul>
    </nav>
  );
}
