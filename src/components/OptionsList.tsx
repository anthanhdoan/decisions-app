import "./OptionsList.css";
import ListItem from "./ListItem";
import AddOption from "./AddOption";
import { useContext } from "react";
import { OptionsContext, type IOption } from "../contexts/OptionsContext";

export default function OptionsList() {
  const { options, setOptions } = useContext(OptionsContext);

  return (
    <div className="optionslist-container">
      <h1>Adding your options</h1>
      <p>
        Create a list of options. <br />
        Then, click next to select your decision making tool.
      </p>

      <AddOption setOptions={setOptions} />

      <ul className="options-container">
        {options.map((option: IOption) => {
          return (
            <ListItem
              key={option.id}
              optionId={option.id}
              optionDescription={option.description}
              setOptions={setOptions}
            />
          );
        })}
      </ul>
    </div>
  );
}
