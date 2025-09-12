import "./App.css";
import { Routes } from "./Routes.tsx";
import { OptionsProvider } from "./contexts/OptionsContext.tsx";

function App() {
  return (
    <OptionsProvider>
      <div className="app">
        <Routes />
      </div>
    </OptionsProvider>
  );
}

export default App;
