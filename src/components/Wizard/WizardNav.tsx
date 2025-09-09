interface IWizardNavProps {
  onPrev?: () => void;
  onNext?: () => void;
  onFinish?: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  isFinal?: boolean;
}

export default function WizardNav(props: IWizardNavProps) {
  return (
    <div className="multistep-buttons-container">
      {!props.canPrev && (
        <button className="multistep-button" disabled>
          Previous
        </button>
      )}
      {props.canPrev && (
        <button className="multistep-button" onClick={props.onPrev}>
          Previous
        </button>
      )}

      {!props.isFinal && (
        <button className="multistep-button" onClick={props.onNext}>
          Next
        </button>
      )}
      {props.isFinal && (
        <button className="multistep-button" onClick={props.onNext}>
          Finish
        </button>
      )}
    </div>
  );
}

// ========= SECOND STEP =========
// <div className="multistep-buttons-container">
//   <button className="multistep-button" onClick={prevStep}>
//     Previous
//   </button>
//   <button
//     className="multistep-button"
//     onClick={nextStep}
//     disabled={selectedTool !== "versus"}
//   >
//     Next
//   </button>
// </div>

// ========= LAST STEP =========
// <div className="multistep-buttons-container">
//   <button className="multistep-button" onClick={prevStep}>
//     Previous
//   </button>
//   <button className="multistep-button">Finish</button>
// </div>
