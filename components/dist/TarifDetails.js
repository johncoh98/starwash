"use strict";
exports.__esModule = true;
var TarifDetailsCard_1 = require("./TarifDetailsCard");
var TarifDetails = function () {
    var tariffs = [
        {
            title: 'Pack Silver',
            vehicleTypes: [
                { name: 'Smart ou Vsp', price: 10 },
                { name: 'Citadine', price: 15 },
                { name: 'Berline', price: 20 },
                { name: 'SUV ou Break', price: 25 },
                { name: '4x4 ou Monospace', price: 30 },
                { name: 'Utilitaire 7/9 places', price: 35 },
            ]
        },
        {
            title: 'Pack Gold',
            vehicleTypes: [
                { name: 'Smart ou Vsp', price: 10 },
                { name: 'Citadine', price: 15 },
                { name: 'Berline', price: 20 },
                { name: 'SUV ou Break', price: 25 },
                { name: '4x4 ou Monospace', price: 30 },
                { name: 'Utilitaire 7/9 places', price: 35 },
            ]
        },
        {
            title: 'Pack Moto',
            vehicleTypes: [
                { name: 'Moto', price: 25 },
                { name: 'Scooter', price: 20 },
            ]
        },
    ];
    return (React.createElement("div", { id: 'tarifs', className: "container mx-auto px-4 py-12 bg-zinc-50 " },
        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" }, tariffs.map(function (tariff) { return (React.createElement("div", { key: tariff.title },
            React.createElement("h2", { className: "text-lg font-bold mb-4" }, tariff.title),
            tariff.vehicleTypes.map(function (vehicleType) { return (React.createElement(TarifDetailsCard_1["default"], { key: tariff.title + "-" + vehicleType.name, title: vehicleType.name, vehicleType: vehicleType })); }))); }))));
};
exports["default"] = TarifDetails;
