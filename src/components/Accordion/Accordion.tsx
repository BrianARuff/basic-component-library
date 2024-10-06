import React, { ReactNode, useId, useState } from "react";

export const Accordion = (props: {
  isDisabled: boolean;
  renderContent: ({
    isOpen,
    setIsOpen,
  }: {
    isOpen: boolean;
    isDisabled: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        aria-expanded={isOpen}
        id={`${id}Button`}
      >
        Click To Toggle Accordion Content
      </button>
      {isOpen && !props.isDisabled
        ? props?.renderContent?.({
            isOpen,
            setIsOpen,
            isDisabled: props?.isDisabled,
          })
        : null}
    </div>
  );
};
