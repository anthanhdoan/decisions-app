import { BrowserRouter as Router, Routes as R, Route } from "react-router";
import NavBar from "./components/NavBar.tsx";
import { Home } from "./pages/Home.tsx";
import { Wizard } from "./pages/Wizard.tsx";
import { About } from "./pages/About.tsx";
import { Random } from "./pages/decision-making-helpers/Random.tsx";
import { Versus } from "./pages/decision-making-helpers/Versus.tsx";
import { Tournament } from "./pages/decision-making-helpers/Tournament.tsx";

export const Routes = () => {
  return (
    <Router>
      <NavBar />

      <R>
        <Route path="/" element={<Home />} />
        <Route path="/wizard" element={<Wizard />} />
        <Route path="/about" element={<About />} />
        <Route path="/random" element={<Random />} />
        <Route path="/versus" element={<Versus />} />
        <Route path="/tournament" element={<Tournament />} />
      </R>
    </Router>
  );
};
