import "./NavBar.css";
import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">DecisionsApp</div>
      <ul className="nav-ul">
        <Link to={"/"} className="nav-item">
          Home
        </Link>
        <Link to={"/wizard"} className="nav-item">
          Wizard
        </Link>
        <Link to={"/about"} className="nav-item">
          About
        </Link>
      </ul>
    </nav>
  );
}
