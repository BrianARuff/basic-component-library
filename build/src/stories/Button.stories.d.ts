declare var meta: {
    title: string;
    component: (_ref: any) => import("react").DetailedReactHTMLElement<any, HTMLElement>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: string;
        };
    };
};
export default meta;
export declare var Primary: {
    args: {
        primary: boolean;
        label: string;
    };
};
export declare var Secondary: {
    args: {
        label: string;
    };
};
export declare var Large: {
    args: {
        size: string;
        label: string;
    };
};
export declare var Small: {
    args: {
        size: string;
        label: string;
    };
};
