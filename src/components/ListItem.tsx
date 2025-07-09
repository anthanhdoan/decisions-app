import { useEffect, useState } from "react";
import type { IOption } from "./OptionsList";
import "./ListItem.css";

interface IListItemProps {
  optionId: number;
  optionDescription: string;
  // options: IOption[];
  setOptions: React.Dispatch<React.SetStateAction<IOption[]>>;
}

//DOUBLECHECK IF THE OPTIONS ARRAY ACTUALLY GETS UPDATED AFTER YOU SAVE, CANCEL OR REMOVE

export default function ListItem(props: IListItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(props.optionDescription);

  useEffect(() => {}, [editValue]);

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
      <input
        type="text"
        className={`option-item ${isEditing ? "" : "option-item-saved"}`}
        readOnly={!isEditing}
        defaultValue={editValue}
        onChange={handleInputChange}
      />

      {isEditing ? (
        <>
          <button onClick={() => handleSaveEdit(props.optionId)}>Save</button>
          <button onClick={() => handleCancelEdit()}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={() => handleEditOption()}>Edit</button>
          <button onClick={() => handleRemoveOption(props.optionId)}>
            Remove
          </button>
        </>
      )}
    </>
  );
}
