import { useRef, useState } from "react";
import "./OptionsList.css";
import ListItem from "./ListItem";

export interface IOption {
  id: number;
  description: string;
}

export default function OptionsList() {
  const [options, setOptions] = useState<IOption[]>([]);
  const [inputValue, setInputValue] = useState("");
  const idRef = useRef(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === null) return;
    setInputValue(e.target.value);
  };

  const handleAddOption = () => {
    if (!inputValue) return;

    const newOption: IOption = {
      id: idRef.current,
      description: inputValue,
    };

    setOptions((prev) => [...prev, newOption]);

    idRef.current += 1;

    setInputValue("");
  };

  return (
    <div>
      <h1>Setting up...</h1>
      <p>Add your options below:</p>

      <div>
        <input
          type="text"
          placeholder="Lasagna"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddOption}>Add</button>
      </div>

      <ul className="options-container">
        {options.map((option) => {
          return (
            <li className="option-container" key={option.id}>
              <ListItem
                // options={options}
                optionId={option.id}
                optionDescription={option.description}
                setOptions={setOptions}
              ></ListItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
