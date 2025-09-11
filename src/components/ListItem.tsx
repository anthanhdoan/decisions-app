import {
  useRef,
  useState,
  type SetStateAction,
  type Dispatch,
  type RefObject,
  type ChangeEvent,
} from "react";
import "./ListItem.css";
import type { IOption } from "../contexts/OptionsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCancel,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { ListItemInput } from "./ListItemInput.tsx";

interface IListItemProps {
  optionId: number;
  optionDescription: string;
  setOptions: Dispatch<SetStateAction<IOption[]>>;
}

export default function ListItem(props: IListItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(props.optionDescription);
  const inputRef: RefObject<HTMLInputElement | null> =
    useRef<HTMLInputElement>(null);

  const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target === null) return;
    setEditValue(e.target.value);
  };

  const removeOption = (id: number) => {
    props.setOptions((prev: IOption[]) =>
      prev.filter((option) => option.id !== id),
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
        option.id === id ? { ...option, description: editValue } : option,
      ),
    );

    setIsEditing(false);
  };

  const cancelEdit = () => {
    setEditValue(props.optionDescription);
    setIsEditing(false);
  };

  return (
    <li className="option-container" key={props.optionId}>
      <form
        className="list-item-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <ListItemInput
          ref={inputRef}
          value={editValue}
          readOnly={!isEditing}
          onChange={updateInput}
          className={isEditing ? "" : "option-item-saved"}
        />

        {!isEditing ? (
          <div className="list-item-buttons-container">
            <button
              className="listitem-button btn-info"
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
          <div className="list-item-buttons-container">
            <button
              className="listitem-button btn-success"
              type="submit"
              onClick={() => saveEditedValue(props.optionId)}
              disabled={!editValue}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
              className="listitem-button btn-info"
              onClick={() => cancelEdit()}
            >
              <FontAwesomeIcon icon={faCancel} />
            </button>
          </div>
        )}
      </form>
    </li>
  );
}
