import "./OptionsList.css";
import ListItem from "./ListItem";
import AddOption from "./AddOption";
import { useContext } from "react";
import { OptionsContext, type IOption } from "../contexts/OptionsContext";

export default function OptionsList() {
  const { options, setOptions } = useContext(OptionsContext);

  return (
    <div>
      <AddOption setOptions={setOptions} />

      <ul className="options-container">
        {options.map((option: IOption) => {
          return (
            <li className="option-container" key={option.id}>
              <ListItem
                optionId={option.id}
                optionDescription={option.description}
                setOptions={setOptions}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
