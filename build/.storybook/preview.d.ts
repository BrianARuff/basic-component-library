import "../styles/lib_styles.css";
declare var preview: {
    parameters: {
        actions: {
            argTypesRegex: string;
        };
        controls: {
            matchers: {
                color: RegExp;
                date: RegExp;
            };
        };
    };
};
export default preview;
