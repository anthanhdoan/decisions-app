import { useState } from "react";
import OptionsList from "./OptionsList";

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
    <>
      {step === 1 && (
        <>
          <OptionsList />
          <button disabled>previous</button>
          <button onClick={nextStep}>next</button>
        </>
      )}
      {step === 2 && (
        <>
          <h1>Select your decision making helper</h1>
          <p>[Dropdown menu with available tools]</p>
          <p>[Paragraph element explaining what the tool does]</p>
          <button onClick={prevStep}>previous</button>
          <button onClick={nextStep}>next</button>
        </>
      )}
      {step === 3 && (
        <>
          <h1>Confirmation</h1>
          <p>
            [Confirmation paragraph, e.g. "These are your options, and you'll
            use X tool, is that correct?"]
          </p>
          <button onClick={prevStep}>Previous</button>
          <button>Continue</button>
        </>
      )}
    </>
  );
}
