import { useRef, useState } from "react";

interface IOption {
  id: number;
  description: string;
}

export default function OptionsList() {
  const [options, setOptions] = useState<IOption[]>([]);
  const [inputValue, setInputValue] = useState("");

  const [editingIds, setEditingIds] = useState<Array<number>>([]);
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

  const handleRemoveOption = (id: number) => {
    setOptions((prev) => prev.filter((option) => option.id !== id));
  };

  const handleEditOption = (id: number) => {
    setEditingIds((prev) => [...prev, id]);
  };

  const handleSaveEdit = (id: number) => {
    if (!inputValue) return;

    setOptions((prev) =>
      prev.map((option) =>
        option.id === id ? { ...option, description: inputValue } : option
      )
    );

    setEditingIds((prev) => prev.filter((edit) => edit !== id));
  };

  const handleCancelEdit = (id: number) => {
    setEditingIds((prev) => prev.filter((item) => item !== id));
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

      <div className="options-container">
        {options.map((option, index) => {
          return (
            <div className="option-container" key={option.id}>
              <input
                type="text"
                className="option-item"
                readOnly={!editingIds.includes(option.id)}
                defaultValue={option.description}
                onChange={handleInputChange}
              />
              {editingIds.includes(option.id) ? (
                <>
                  <button onClick={() => handleSaveEdit(option.id, index)}>
                    Save
                  </button>
                  <button onClick={() => handleCancelEdit(option.id)}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEditOption(option.id)}>
                    Edit
                  </button>
                  <button onClick={() => handleRemoveOption(option.id)}>
                    Remove
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
