"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_scroll_1 = require("react-scroll");
var Header = function () {
    return (react_1["default"].createElement("div", { id: 'home', className: 'relative w-screen h-screen bg-backnoam bg-cover bg-center' },
        react_1["default"].createElement("div", { className: 'absolute inset-0 bg-black opacity-50' }),
        react_1["default"].createElement("div", { className: 'flex flex-col items-center justify-center h-full text-white' },
            react_1["default"].createElement("div", { className: 'flex space-x-4' },
                react_1["default"].createElement(react_scroll_1.Link, { to: 'contact', smooth: true, duration: 500, offset: -80 },
                    react_1["default"].createElement("button", { className: 'relative top-32 z-10 px-6 py-3px-6 py-3 bg-white text-black hover:bg-cyan-300 rounded-md font-medium' },
                        "R\u00E9servez",
                        react_1["default"].createElement("div", { className: 'absolute inset-0 bg-black opacity-0 hover:opacity-30 rounded-md' }))),
                react_1["default"].createElement("a", { href: "tel:+33604080808" },
                    react_1["default"].createElement("button", { className: 'relative top-32 z-10 px-6 py-3 bg-white text-black hover:bg-cyan-300   rounded-md font-medium' },
                        "Appelez-Nous",
                        react_1["default"].createElement("div", { className: 'absolute inset-0 bg-black opacity-0 hover:opacity-30 rounded-md' })))))));
};
exports["default"] = Header;
