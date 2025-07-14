import { useState } from "react";
import "./OptionsList.css";
import ListItem from "./ListItem";
import AddOption from "./AddOption";

export interface IOption {
  id: number;
  description: string;
}

export default function OptionsList() {
  const [options, setOptions] = useState<IOption[]>([]);

  return (
    <div>
      <AddOption setOptions={setOptions} />

      <ul className="options-container">
        {options.map((option) => {
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
