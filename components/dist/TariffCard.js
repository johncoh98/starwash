"use strict";
exports.__esModule = true;
var TariffCard = function (_a) {
    var title = _a.title, price = _a.price;
    return (React.createElement("div", { className: "flex flex-col bg-white shadow-lg hover:shadow-2xl rounded-lg overflow-hidden  transition duration-500 transform hover:scale-105 " },
        React.createElement("div", { className: "px-6 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600" },
            React.createElement("h3", { className: "text-2xl font-semibold text-white" }, title),
            React.createElement("h3", { className: "text-xl font-semibold text-white" }, "\u00E0 partir de"),
            React.createElement("div", { className: "mt-4 flex items-center " },
                React.createElement("span", { className: "text-5xl font-bold text-white mr-2" }, "\u20AC"),
                React.createElement("span", { className: "text-5xl font-bold text-white" }, price)))));
};
exports["default"] = TariffCard;
