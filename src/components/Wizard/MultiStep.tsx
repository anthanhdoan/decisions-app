import { useContext, useState } from "react";
import OptionsList from "../OptionsList.tsx";
import "./MultiStep.css";
import WizardNav from "./WizardNav.tsx";
import {
  type IOption,
  OptionsContext,
} from "../../contexts/OptionsContext.tsx";
import { useNavigate } from "react-router";

// Refactor the MultiStep component to make it reusable...
// Idea #1: Create separate components for steps 1, 2 and 3, then create a config
// file with an array of objects including properties 'step' and 'component'
// Idea #2: Refactor the entire MultiStep component, and use React Router
// --> use <Link> instead of <button>
// --> use switch case to determine where to navigate next

export default function MultiStep() {
  const [step, setStep] = useState<number>(1);
  const [selectedTool, setSelectedTool] = useState<string>("");

  const navigate = useNavigate();

  const { options } = useContext(OptionsContext);

  return (
    <div className="multistep">
      {step === 1 && (
        <div className="multistep-page">
          <OptionsList />
          <WizardNav
            canPrev={false}
            canNext={options.length > 0}
            setStep={setStep}
          />
        </div>
      )}
      {step === 2 && (
        <div className="multistep-page">
          <div>
            <h1 style={{ marginBottom: "1rem" }}>
              Choose a decision making helper
            </h1>
            <p>
              Make a choice depending on your decision making needs. An
              explanation will be shown after selecting a helper.
            </p>
            <label htmlFor="tool-dropdown">
              <select
                style={{ marginTop: "1rem" }}
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
              <p style={{ margin: "1rem 0" }}>
                You have selected the <b>{selectedTool}</b> decisionmaking
                helper.
              </p>
            )}
            {selectedTool === "versus" && (
              <div>
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
              <div>
                <p>
                  This decision-making helper is best used when you have several
                  options to choose from, but don't have a real preference.
                </p>
                <p>It will simply choose one of your options at random.</p>
                <p style={{ color: "red" }}>Coming soon...</p>
              </div>
            )}
            {selectedTool === "tournament" && (
              <div>
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
            <h1 style={{ marginBottom: "1rem" }}>Confirmation</h1>
            <p>
              You have selected the <b>'{selectedTool}'</b> decision-making
              helper.
            </p>
            <br />
            <p>These are the options you have listed:</p>
            <ul className="options-list">
              {options.map((option: IOption) => {
                return <li key={option.id}>{option.description}</li>;
              })}
            </ul>
          </div>
          <WizardNav
            canPrev={true}
            canNext={false}
            isFinal={true}
            onFinish={() => navigate(`/${selectedTool}`)}
            setStep={setStep}
          />
        </div>
      )}
    </div>
  );
}
