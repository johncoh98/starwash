"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var ScrollToTopButton = function () {
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var toggleVisible = function () {
        var scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        }
        else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    var scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);
    return (React.createElement("div", { className: "fixed bottom-6 right-6 transition-opacity duration-500 " + (visible ? 'opacity-100' : 'opacity-0') },
        React.createElement("button", { onClick: scrollToTop, className: "bg-gray-900 text-white hover:text-cyan-500 rounded-full p-2 shadow-lg focus:outline-none" },
            React.createElement(fa_1.FaArrowUp, { size: 20 }))));
};
exports["default"] = ScrollToTopButton;
