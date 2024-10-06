import React, { ReactNode } from "react";
export declare const Accordion: (props: {
    isDisabled: boolean;
    renderContent: ({ isOpen, setIsOpen, }: {
        isOpen: boolean;
        isDisabled: boolean;
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }) => ReactNode;
}) => React.JSX.Element;
