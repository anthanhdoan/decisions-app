import { useEffect, useState } from "react";
import "./About.css";

export const About = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.kanye.rest")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setQuote(data.quote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="about">
      <h1 className="about-title">About this app</h1>
      <p className="about-paragraph">
        This app was created simply to play around with React.
      </p>
      <p>
        I figured I could make something that's useful, rather than just set up
        a basic to do app.
        <br />I used basic React and web development concepts, such as:
      </p>
      <ul>
        <li>JSX</li>
        <li>Basic CSS</li>
        <li>
          Hooks:
          <ul>
            <li>useState</li>
            <li>useContext</li>
            <li>useEffect</li>
          </ul>
        </li>
        <li>
          Routing
          <ul>
            <li>React Router</li>
            <li>Routes</li>
            <li>Route</li>
            <li>NavLink</li>
            <li>useNavigate</li>
          </ul>
        </li>
      </ul>
      <p>
        And just for fun (and because I didn't have any reason to use an API...)
        Here's a Kanye quote:
      </p>
      <blockquote className="blockquote">
        <p>
          {" "}
          {loading && "Loading..."}
          {error && `Error: ${error}`}
          {quote}
        </p>
      </blockquote>
    </div>
  );
};
