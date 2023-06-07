"use strict";
exports.__esModule = true;
;
var TarifDetailsCard = function (_a) {
    var title = _a.title, price = _a.price;
    return (React.createElement("div", { className: "border border-cyan-500 shadow rounded-md p-4 max-w-sm w-full mx-auto" },
        React.createElement("div", { className: "flex justify-between mb-2" },
            React.createElement("p", { className: "text-zinc-800" }, title),
            React.createElement("p", { className: "text-zinc-800" },
                price,
                "\u20AC"))));
};
exports["default"] = TarifDetailsCard;
