import React, { useState, useId } from 'react';

var Accordion = function (props) {
    var _a, _b;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var id = useId();
    return (React.createElement("div", { "data-testid": "accordion-container" },
        React.createElement("button", { "data-testid": "accordion-button", onClick: function () { return setIsOpen(function (prev) { return !prev; }); }, type: "button", "aria-expanded": isOpen, "aria-controls": "".concat(id, "Content"), "aria-label": "Toggle Accordion", id: "".concat(id, "Button") }, (_a = props === null || props === void 0 ? void 0 : props.renderHeaderContent) === null || _a === void 0 ? void 0 : _a.call(props, { isOpen: isOpen, setIsOpen: setIsOpen })),
        React.createElement("div", { "aria-labelledby": "".concat(id, "Button"), id: "".concat(id, "Content"), role: "region", hidden: !isOpen }, isOpen && !props.isDisabled
            ? (_b = props === null || props === void 0 ? void 0 : props.renderBodyContent) === null || _b === void 0 ? void 0 : _b.call(props, {
                isOpen: isOpen,
                setIsOpen: setIsOpen,
            })
            : null)));
};

export { Accordion };
//# sourceMappingURL=index.es.js.map
