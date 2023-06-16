"use strict";
exports.__esModule = true;
var react_loader_spinner_1 = require("react-loader-spinner");
var PageLoader = function () {
    return (React.createElement("div", { className: "flex items-center justify-center h-screen bg-black" },
        React.createElement(react_loader_spinner_1.TailSpin, { height: 100, width: 100, color: "cyan" })));
};
exports["default"] = PageLoader;
