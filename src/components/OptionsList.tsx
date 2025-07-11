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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    inputRef.current?.focus();
  };

  return (
    //refactor by adding AddOption component
    <div>
      <h1>Setting up...</h1>
      <p>Add your options below:</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Lasagna"
          value={inputValue}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <button onClick={handleAddOption}>Add</button>
      </form>

      <ul className="options-container">
        {options.map((option) => {
          return (
            <li className="option-container" key={option.id}>
              <ListItem
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
