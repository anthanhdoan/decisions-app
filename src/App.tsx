import "./App.css";
// import Card from "./components/Card";
import OptionsList from "./components/OptionsList";

function App() {
  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="nav-logo">DecisionsApp</div>
        <ul>
          <li className="nav-item">Link1</li>
          <li className="nav-item">Link2</li>
          <li className="nav-item">Link3</li>
        </ul>
      </nav>

      <h1>D3 app</h1>
      <OptionsList></OptionsList>
      {/* <Card></Card> */}
    </div>
  );
}

export default App;
