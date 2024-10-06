import React from "react";
import { Accordion } from "./Accordion";

export default {
  title: "AccordionComponent",
};

export const AccordionStory = () => (
  <Accordion
    isDisabled={false}
    renderHeaderContent={() => <h1>Click to Toggle Accordion Content</h1>}
    renderBodyContent={({ setIsOpen }) => {
      return (
        <div style={{ width: "30rem" }}>
          <p className="accordion-content-message">Hello, Storybook World!</p>
          <button onClick={() => setIsOpen(false)}>Close Accordion</button>
        </div>
      );
    }}
  />
);
