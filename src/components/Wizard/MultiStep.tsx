import { useContext, useState } from "react";
import OptionsList from "../OptionsList.tsx";
import "./MultiStep.css";
import WizardNav from "./WizardNav.tsx";
import {
  type IOption,
  OptionsContext,
} from "../../contexts/OptionsContext.tsx";

export default function MultiStep() {
  // set initial state for step to 1 after finishing the other steps.
  const [step, setStep] = useState<number>(1);
  const [selectedTool, setSelectedTool] = useState<string>("");

  const { options } = useContext(OptionsContext);

  return (
    <div className="multistep-container">
      {step === 1 && (
        <div className="multistep-page">
          <OptionsList />
          <WizardNav canPrev={false} canNext={true} setStep={setStep} />
        </div>
      )}
      {step === 2 && (
        <div className="multistep-page">
          <div>
            <h1>Choose a decision making helper</h1>
            <p>
              Make a choice depending on your decision making needs. An
              explanation will be shown after selecting a helper.
            </p>
            <label htmlFor="tool-dropdown">
              <select
                required
                name="tool dropdown"
                id="tool-dropdown"
                onChange={(e) => setSelectedTool(e.target.value)}
                defaultValue={selectedTool}
              >
                <option value="">Select your decision-making helper</option>
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
                  This decision-making helper is best used when you need to
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
                  This decision-making helper is best used when you have several
                  options to choose from, but don't have a real preference.
                </p>
                <p>It will simply choose one of your options at random.</p>
                <p style={{ color: "red" }}>Coming soon...</p>
              </div>
            )}
            {selectedTool === "tournament" && (
              <div className="tool-explanation">
                <p>
                  This decision-making helper is best used you need to decide on
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
          <WizardNav
            canPrev={true}
            canNext={selectedTool !== ""}
            setStep={setStep}
          />
        </div>
      )}
      {step === 3 && (
        <div className="multistep-page">
          <div>
            <h1>Confirmation</h1>
            <p>
              You have selected the <b>'{selectedTool}'</b> decision-making
              helper.
            </p>
            <p>These are the options you have listed:</p>
            <ul>
              {options.map((option: IOption) => {
                return <li key={option.id}>{option.description}</li>;
              })}
            </ul>
          </div>
          <WizardNav
            canPrev={true}
            canNext={false}
            isFinal={true}
            onFinish={() => console.log("Finished!")}
            setStep={setStep}
          />
        </div>
      )}
    </div>
  );
}
