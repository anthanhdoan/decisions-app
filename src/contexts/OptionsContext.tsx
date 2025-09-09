import { createContext, useState } from "react";

export interface IOption {
  id: number;
  description: string;
}

export interface IOptionsContext {
  options: IOption[];
  setOptions: Dispatch<SetStateAction<IOption[]>>;
}

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const OptionsContext = createContext<IOptionsContext | any>(undefined);

// Replaced empty initialState for placeholder content; remove before finishing.
// const initialOptionsState: Array<IOption> = [];
const initialOptionsState: Array<IOption> = [
  { id: 1, description: "First option placeholder" },
  { id: 2, description: "Second option placeholder" },
  { id: 3, description: "Third option placeholder" },
];

export const OptionsProvider = ({ children }: { children: ReactNode }) => {
  const [options, setOptions] = useState<Array<IOption>>(initialOptionsState);

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};
