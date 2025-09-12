import "./Home.css";
import { NavLink } from "react-router";

export const Home = () => {
  return (
    <div className="home-page">
      <div className="home-banner">
        <h1 className="home-title">
          Sometimes, making a decision feels like a puzzle.
        </h1>
        <p className="home-subtitle">
          We're here to help!
          <br />
          <br />
          Use our wizard, list your options and select a decision-making helper.
        </p>
        <NavLink className="home-wizard-link" to={"/wizard"}>
          Get started
        </NavLink>
      </div>
    </div>
  );
};
