import React, { ReactNode } from "react";
export type AccordionRenderContentProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export type AccordionProps = {
    isDisabled?: boolean;
    renderBodyContent?: ({ isOpen, setIsOpen, }: AccordionRenderContentProps) => ReactNode;
    renderHeaderContent?: ({ isOpen, setIsOpen, }: AccordionRenderContentProps) => ReactNode;
};
export declare const Accordion: (props: AccordionProps) => React.JSX.Element;
