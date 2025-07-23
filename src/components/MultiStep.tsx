import { useState } from "react";
import OptionsList from "./OptionsList";
import "./MultiStep.css";

export default function MultiStep() {
  const [step, setStep] = useState<number>(1);

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
          <h1>Select your decision making helper</h1>
          <p>[Dropdown menu with available tools]</p>
          <p>[Paragraph element explaining what the tool does]</p>
          <div className="multistep-buttons-container">
            <button className="multistep-button" onClick={prevStep}>
              Previous
            </button>
            <button className="multistep-button" onClick={nextStep}>
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
