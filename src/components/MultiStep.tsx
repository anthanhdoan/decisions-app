import { useState } from "react";
import OptionsList from "./OptionsList";
import "./MultiStep.css";

export default function MultiStep() {
  // set initial state for step to 1 after finishing the other steps.
  const [step, setStep] = useState<number>(2);
  const [selectedTool, setSelectedTool] = useState<string>("");

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="multistep-container">
      {step === 1 && (
        <div className="multistep-page">
          <OptionsList />
          <div className="multistep-buttons-container">
            <button className="multistep-button" disabled>
              Previous
            </button>
            <button className="multistep-button" onClick={nextStep}>
              Next
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="multistep-page">
          <div>
            <h1>Choose a decisionmaking helper</h1>
            <p>
              Make a choice depending on your decisionmaking needs. An
              explanation will be shown after selecting a helper.
            </p>
            <label htmlFor="tool selection dropdown">
              <select
                required
                name="tool dropdown"
                id="tool-dropdown"
                onChange={(e) => setSelectedTool(e.target.value)}
              >
                <option selected hidden value="">
                  Select your decisionmaking helper
                </option>
                <option value="versus">Versus mode</option>
                <option value="random">Random decision</option>
                <option value="tournament">Tournament mode</option>
              </select>
            </label>
            {selectedTool && (
              <p>
                You have selected the <b>{selectedTool}</b> decisionmaking
                helper.
              </p>
            )}
            {selectedTool === "versus" && (
              <div className="tool-explanation">
                <p>
                  This decisionmaking helper is best used when you need to
                  decide on a single option.
                </p>
                <p>
                  It will have you make a series of choices between two of your
                  possible options, leaving one option as the winner!
                </p>
              </div>
            )}
            {selectedTool === "random" && (
              <div className="tool-explanation">
                <p>
                  This decisionmaking helper is best used when you have several
                  options to choose from, but don't have a real preference.
                </p>
                <p>It will simply choose one of your options at random.</p>
                <p style={{ color: "red" }}>Coming soon...</p>
              </div>
            )}
            {selectedTool === "tournament" && (
              <div className="tool-explanation">
                <p>
                  This decisionmaking helper is best used you need to decide on
                  multiple options.
                </p>
                <p>
                  It will have you make a series of choices. The "winning"
                  options from every duel will face off later in the tournament,
                  leaving you with a ranked list of options to choose from.
                </p>
                <p style={{ color: "red" }}>Coming soon...</p>
              </div>
            )}
          </div>
          <div className="multistep-buttons-container">
            <button className="multistep-button" onClick={prevStep}>
              Previous
            </button>
            <button
              className="multistep-button"
              onClick={nextStep}
              disabled={selectedTool !== "versus"}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="multistep-page">
          <h1>Confirmation</h1>
          <p>
            [Confirmation paragraph, e.g. "These are your options, and you'll
            use X tool, is that correct?"]
          </p>
          <div className="multistep-buttons-container">
            <button className="multistep-button" onClick={prevStep}>
              Previous
            </button>
            <button className="multistep-button">Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}
