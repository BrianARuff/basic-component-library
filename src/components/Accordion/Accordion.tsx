import React, { ReactNode, useId, useState } from "react";

export type AccordionRenderContentProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AccordionProps = {
  isDisabled?: boolean;
  renderBodyContent?: ({
    isOpen,
    setIsOpen,
  }: AccordionRenderContentProps) => ReactNode;
  renderHeaderContent?: ({
    isOpen,
    setIsOpen,
  }: AccordionRenderContentProps) => ReactNode;
};

export const Accordion = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  return (
    <div data-testid="accordion-container">
      {
        <button
          data-testid="accordion-button"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
          aria-expanded={isOpen}
          aria-controls={`${id}Content`}
          aria-label="Toggle Accordion"
          id={`${id}Button`}
        >
          {props?.renderHeaderContent?.({ isOpen, setIsOpen })}
        </button>
      }
      <div
        aria-labelledby={`${id}Button`}
        id={`${id}Content`}
        role="region"
        hidden={!isOpen}
      >
        {isOpen && !props.isDisabled
          ? props?.renderBodyContent?.({
              isOpen,
              setIsOpen,
            })
          : null}
      </div>
    </div>
  );
};
