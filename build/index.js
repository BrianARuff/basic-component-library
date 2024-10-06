'use strict';

var React = require('react');

var Accordion = function (props) {
    var _a;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var id = React.useId();
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

exports.Accordion = Accordion;
//# sourceMappingURL=index.js.map
