import { createContext, useState } from "react";

export interface IOption {
  id: number;
  description: string;
}

export interface IOptionsContext {
  options: IOption[];
  setOptions: React.Dispatch<React.SetStateAction<IOption[]>>;
}

// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-explicit-any
export const OptionsContext = createContext<IOptionsContext | any>(undefined);

const initialOptionsState: Array<IOption> = [];

export const OptionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [options, setOptions] = useState<Array<IOption>>(initialOptionsState);

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};
