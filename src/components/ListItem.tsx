import { useRef, useState } from "react";
import "./ListItem.css";
import type { IOption } from "../contexts/OptionsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCancel,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

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

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === null) return;
    setEditValue(e.target.value);
  };

  const removeOption = (id: number) => {
    props.setOptions((prev: IOption[]) =>
      prev.filter((option) => option.id !== id)
    );
  };

  const editOption = () => {
    setIsEditing(true);
    setEditValue(props.optionDescription);
    inputRef.current?.focus();
  };

  const saveEditedValue = (id: number) => {
    if (!editValue) return;

    props.setOptions((prev) =>
      prev.map((option) =>
        option.id === id ? { ...option, description: editValue } : option
      )
    );

    setIsEditing(false);
  };

  const cancelEdit = () => {
    setEditValue(props.optionDescription);
    setIsEditing(false);
  };

  return (
    <>
      <form className="listitem-container" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={inputRef}
          type="text"
          className={`option-item ${isEditing ? "" : "option-item-saved"}`}
          readOnly={!isEditing}
          value={editValue}
          onChange={updateInput}
        />

        {!isEditing ? (
          <div className="listitem-buttons-container">
            <button
              className="listitem-button"
              type="submit"
              onClick={() => editOption()}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button
              className="listitem-button btn-danger"
              onClick={() => removeOption(props.optionId)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ) : (
          <div className="listitem-buttons-container">
            <button
              className="listitem-button"
              type="submit"
              onClick={() => saveEditedValue(props.optionId)}
              disabled={!editValue}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className="listitem-button" onClick={() => cancelEdit()}>
              <FontAwesomeIcon icon={faCancel} />
            </button>
          </div>
        )}
      </form>
    </>
  );
}
