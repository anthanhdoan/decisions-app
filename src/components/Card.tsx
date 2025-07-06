import React from "react";
import "./card.css";

export default function Card() {
  return (
    <div className="card">
      <h1 className="card-title">Card Title</h1>
      <p className="card-body">
        Card body Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
        alias architecto quam, modi voluptate optio fuga aspernatur earum
        repellat est, nemo sunt itaque. Iste sint est perferendis ut,
        exercitationem natus?
      </p>
      <button className="button">Keep</button>
    </div>
  );
}
