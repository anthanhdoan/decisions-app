import {
  type ChangeEvent,
  type FunctionComponent,
  type RefObject,
  useId,
} from "react";

interface IItemInputProps {
  ref: RefObject<HTMLInputElement | null>;
  className?: string;
  readOnly?: boolean;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ListItemInput: FunctionComponent<IItemInputProps> = (props) => {
  const id = useId();

  return (
    <input
      id={`${id}-list-item-input`}
      ref={props.ref}
      type="text"
      className={`option-item ${props.className}`}
      readOnly={props.readOnly}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
