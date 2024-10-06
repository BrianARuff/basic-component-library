import React from "react";
import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/react";
import raxe from "react-axe";

import { Accordion, AccordionProps } from "./Accordion";

// @ts-ignore
expect.extend(toHaveNoViolations);

const setup = (props: AccordionProps) => {
  return render(
    <main>
      <h1>Page Header for react-axe</h1>
      <Accordion {...props} />
    </main>
  );
};

describe("Test Component", () => {
  afterEach(async () => {
    document.querySelector("html")?.setAttribute("lang", "en");
    document.title = "Accordion Testing";
    expect(await raxe(React, document, 0));
  });
  it("should have primary className with default props", () => {
    const { getByTestId } = setup({});

    const testComponent = getByTestId("accordion-container");

    expect(testComponent).toBeDefined();
  });

  it('should have a button with the text of the variable "buttonText"', async () => {
    const buttonText = "Click to Toggle Accordion Content!";

    const { container, getByTestId } = setup({
      renderBodyContent({ isOpen, setIsOpen }) {
        return (
          <div>
            <h1>Hello, Accordion Content Header!</h1>
          </div>
        );
      },
      renderHeaderContent: () => <p>Click to Toggle Accordion Content!</p>,
    });

    const accordionButton = getByTestId("accordion-button");

    expect(accordionButton.textContent).toEqual(buttonText);

    // @ts-ignore
    expect(await axe(accordionButton))?.toHaveNoViolations();
  });
});
