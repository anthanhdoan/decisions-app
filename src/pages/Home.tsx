import "./Home.css";
import { NavLink } from "react-router";

export const Home = () => {
  return (
    <div className="home-page">
      <div className="home-banner">
        <h1 className="home-title">
          Sometimes, making a decision can be overwhelming.
        </h1>
        <p>We're here to help!</p>
        <p>
          Use our wizard, list your options and select a decision-making helper.
        </p>
        <NavLink to={"/wizard"}>Get started</NavLink>
      </div>
    </div>
  );
};
