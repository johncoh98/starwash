"use strict";
exports.__esModule = true;
var TariffCard_1 = require("../components/TariffCard");
var TariffsPage = function () {
    var tariffs = [
        {
            title: '2 places',
            price: '19.90'
        },
        {
            title: 'Citadine',
            price: '23.90'
        },
        {
            title: 'SUV/Break',
            price: '33.90'
        },
        {
            title: '4x4',
            price: '35.90'
        },
        {
            title: 'Monospace',
            price: '41.90'
        },
        {
            title: '2 Roues',
            price: '19.90'
        },
    ];
    return (React.createElement("div", { id: 'tarifs', className: "container mx-auto px-4 py-12 bg-zinc-50 " },
        React.createElement("h1", { className: "text-4xl font-bold text-center mb-12 text-zinc-900 " }, "Nos tarifs"),
        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" }, tariffs.map(function (tariff) { return (React.createElement(TariffCard_1["default"], { key: tariff.title, title: tariff.title, price: tariff.price })); }))));
};
exports["default"] = TariffsPage;
