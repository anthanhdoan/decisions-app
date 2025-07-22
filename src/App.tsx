import "./App.css";
import MultiStep from "./components/MultiStep";
import NavBar from "./components/NavBar";
import { OptionsProvider } from "./contexts/OptionsContext";

function App() {
  return (
    <div className="container">
      <NavBar />
      <OptionsProvider>
        <MultiStep></MultiStep>
      </OptionsProvider>
    </div>
  );
}

export default App;
