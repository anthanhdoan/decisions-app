import "./App.css";
import MultiStep from "./components/MultiStep";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <MultiStep></MultiStep>
    </div>
  );
}

export default App;
