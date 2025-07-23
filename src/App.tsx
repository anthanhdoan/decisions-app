import "./App.css";
import MultiStep from "./components/MultiStep";
import NavBar from "./components/NavBar";
import { OptionsProvider } from "./contexts/OptionsContext";

function App() {
  return (
    <div>
      <NavBar />
      <div className="app-container">
        <OptionsProvider>
          <MultiStep></MultiStep>
        </OptionsProvider>
      </div>
    </div>
  );
}

export default App;
