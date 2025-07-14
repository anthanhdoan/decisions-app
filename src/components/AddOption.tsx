import { useRef, useState } from "react";
import type { IOption } from "./OptionsList";

interface IAddOptionProps {
  setOptions: React.Dispatch<React.SetStateAction<IOption[]>>;
}

export default function AddOption(props: IAddOptionProps) {
  const idRef = useRef(0);
  const inputElementRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addOption = () => {
    if (!inputValue) return;

    const newOption: IOption = {
      id: idRef.current,
      description: inputValue,
    };

    props.setOptions((prev) => [...prev, newOption]);

    idRef.current += 1;

    setInputValue("");
    inputElementRef.current?.focus();
  };

  return (
    <>
      <h1>Adding your options</h1>
      <p>
        Create a list of options. <br />
        Then, click next to select your decision making tool.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Lasagna"
          value={inputValue}
          onChange={updateInput}
          ref={inputElementRef}
        />
        <button onClick={addOption}>Add</button>
      </form>
    </>
  );
}
