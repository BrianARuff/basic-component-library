import React, { useState, useId } from 'react';

var Accordion = function (props) {
    var _a;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var id = useId();
    return (React.createElement("div", null,
        React.createElement("button", { onClick: function () { return setIsOpen(function (prev) { return !prev; }); }, type: "button", "aria-expanded": isOpen, id: "".concat(id, "Button") }, "Click To Toggle Accordion Content"),
        isOpen && !props.isDisabled
            ? (_a = props === null || props === void 0 ? void 0 : props.renderContent) === null || _a === void 0 ? void 0 : _a.call(props, {
                isOpen: isOpen,
                setIsOpen: setIsOpen,
                isDisabled: props === null || props === void 0 ? void 0 : props.isDisabled,
            })
            : null));
};

export { Accordion };
//# sourceMappingURL=index.es.js.map
