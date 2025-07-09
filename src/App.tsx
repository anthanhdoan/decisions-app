import "./App.css";
import NavBar from "./components/NavBar";
// import Card from "./components/Card";
import OptionsList from "./components/OptionsList";

function App() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <h1>D3 app</h1>
      <OptionsList></OptionsList>
      {/* <Card></Card> */}
    </div>
  );
}

export default App;
