import { useRef, useState } from "react";
import type { IOption } from "./OptionsList";
import "./ListItem.css";

interface IListItemProps {
  optionId: number;
  optionDescription: string;
  setOptions: React.Dispatch<React.SetStateAction<IOption[]>>;
}

export default function ListItem(props: IListItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(props.optionDescription);
  const inputRef: React.RefObject<HTMLInputElement | null> =
    useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === null) return;
    setEditValue(e.target.value);
  };

  const handleRemoveOption = (id: number) => {
    props.setOptions((prev: IOption[]) =>
      prev.filter((option) => option.id !== id)
    );
  };

  const handleEditOption = () => {
    setIsEditing(true);
    setEditValue(props.optionDescription);
    inputRef.current?.focus();
  };

  const handleSaveEdit = (id: number) => {
    if (!editValue) return;

    props.setOptions((prev) =>
      prev.map((option) =>
        option.id === id ? { ...option, description: editValue } : option
      )
    );

    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditValue(props.optionDescription);
    setIsEditing(false);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={inputRef}
          type="text"
          className={`option-item ${isEditing ? "" : "option-item-saved"}`}
          readOnly={!isEditing}
          value={editValue}
          onChange={handleInputChange}
        />

        {!isEditing ? (
          <>
            <button type="submit" onClick={() => handleEditOption()}>
              Edit
            </button>
            <button onClick={() => handleRemoveOption(props.optionId)}>
              Remove
            </button>
          </>
        ) : (
          <>
            <button
              type="submit"
              onClick={() => handleSaveEdit(props.optionId)}
            >
              Save
            </button>
            <button onClick={() => handleCancelEdit()}>Cancel</button>
          </>
        )}
      </form>
    </>
  );
}
