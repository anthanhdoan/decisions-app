import { BrowserRouter as Router, Routes as R, Route } from "react-router";
import NavBar from "./components/NavBar.tsx";
import { Home } from "./pages/Home.tsx";
import { Wizard } from "./pages/Wizard.tsx";
import { About } from "./pages/About.tsx";

export const Routes = () => {
  return (
    <Router>
      <NavBar />

      <R>
        <Route path="/" element={<Home />} />
        <Route path="/wizard" element={<Wizard />} />
        <Route path="/about" element={<About />} />
      </R>
    </Router>
  );
};
