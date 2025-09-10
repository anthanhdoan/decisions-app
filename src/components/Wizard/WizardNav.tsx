import type { Dispatch, SetStateAction } from "react";

interface IWizardNavProps {
  setStep: Dispatch<SetStateAction<number>>;
  canPrev: boolean;
  canNext: boolean;
  isFinal?: boolean;
  onFinish?: () => void;
}

export default function WizardNav(props: IWizardNavProps) {
  const nextStep = () => {
    props.setStep((prev: number) => prev + 1);
  };

  const prevStep = () => {
    props.setStep((prev: number) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="multistep-buttons-container">
      <button onClick={prevStep} disabled={!props.canPrev}>
        Previous
      </button>

      {!props.isFinal ? (
        <button onClick={nextStep} disabled={!props.canNext}>
          Next
        </button>
      ) : (
        <button onClick={props.onFinish}>Finish</button>
      )}
    </div>
  );
}
