"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ContactForm = function () {
    var _a = react_1.useState(''), name = _a[0], setName = _a[1];
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), message = _c[0], setMessage = _c[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    };
    return (react_1["default"].createElement("form", { className: 'w-50', onSubmit: handleSubmit },
        react_1["default"].createElement("div", { className: "mb-4" },
            react_1["default"].createElement("label", { htmlFor: "name", className: "block text-zinc-50 font-bold mb-2" }, "Nom"),
            react_1["default"].createElement("input", { type: "text", id: "name", value: name, onChange: function (e) { return setName(e.target.value); }, className: "w-full border rounded py-2 px-3 " + (email ? 'border-cyan-500' : 'border-gray-300') + " transition-all duration-300 focus:outline-none focus:border-cyan-500" })),
        react_1["default"].createElement("div", { className: "mb-4" },
            react_1["default"].createElement("label", { htmlFor: "email", className: "block text-zinc-50 font-bold mb-2" }, "Email"),
            react_1["default"].createElement("input", { type: "email", id: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "w-full border rounded py-2 px-3 " + (email ? 'border-cyan-500' : 'border-gray-300') + " transition-all duration-300 focus:outline-none focus:border-cyan-500" })),
        react_1["default"].createElement("div", { className: "mb-4" },
            react_1["default"].createElement("label", { htmlFor: "message", className: "block text-zinc-50 font-bold mb-2" }, "Message"),
            react_1["default"].createElement("textarea", { id: "message", value: message, onChange: function (e) { return setMessage(e.target.value); }, className: "w-full border rounded py-2 px-3 " + (email ? 'border-cyan-500' : 'border-gray-300') + " transition-all duration-300 focus:outline-none focus:border-cyan-500", rows: 5 })),
        react_1["default"].createElement("div", { className: "flex justify-end" },
            react_1["default"].createElement("button", { type: "submit", className: "bg-cyan-400 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" }, "Envoyer"))));
};
exports["default"] = ContactForm;
