"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ContactForm_1 = require("./ContactForm");
var fa_1 = require("react-icons/fa");
var io5_1 = require("react-icons/io5");
var Contact = function () {
    return (react_1["default"].createElement("div", { id: 'contact', className: 'sm:flex sm:justify-around bg-zinc-800 w-screen' },
        react_1["default"].createElement("div", { className: 'px-4 ' },
            react_1["default"].createElement("h1", { className: 'text-zinc-50 text-2xl py-8' }, "Laissez-nous un message !"),
            react_1["default"].createElement(ContactForm_1["default"], null)),
        react_1["default"].createElement("div", { className: " rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center justify-center" },
            react_1["default"].createElement("div", { className: "px-8" },
                react_1["default"].createElement("h2", { className: "text-2xl font-bold text-zinc-50 mb-2" }, "Notre Adresse"),
                react_1["default"].createElement("p", { className: "text-zinc-50 mb-4" },
                    react_1["default"].createElement(io5_1.IoLocationSharp, { className: "inline-block mr-2 text-cyan-400" }),
                    " ",
                    react_1["default"].createElement("h2", { className: "text-xl text-zinc-50 mb-2" }, "1 bd eugene decros 93260 Les Lilas "),
                    react_1["default"].createElement(io5_1.IoLocationSharp, { className: "inline-block mr-2 text-cyan-400" }),
                    " ",
                    react_1["default"].createElement("h2", { className: "text-xl text-zinc-50 mb-2" }, "10 av Faidherbe 93260 Les Lilas "))),
            react_1["default"].createElement("div", { className: "px-8" },
                react_1["default"].createElement("h2", { className: "text-2xl pr-32 md:pr-0 font-bold text-zinc-50 mb-2" }, "Contactez-nous"),
                react_1["default"].createElement("p", { className: "text-zinc-50 mb-4" },
                    react_1["default"].createElement(fa_1.FaPhone, { className: "inline-block mr-2 text-cyan-400" }),
                    " ",
                    react_1["default"].createElement("a", { href: "tel:+33604090909", className: 'hover:text-cyan-700' }, "06 04 09 09 09")),
                react_1["default"].createElement("p", { className: "text-zinc-50 mb-4" },
                    react_1["default"].createElement("a", { href: "https://wa.me/33604090909", className: 'hover:text-cyan-700' },
                        react_1["default"].createElement(fa_1.FaWhatsapp, { className: "inline-block mr-2 text-cyan-400" }),
                        "Whatsapp")),
                react_1["default"].createElement("p", { className: "text-zinc-50 mb-4" },
                    react_1["default"].createElement("a", { href: "https://www.instagram.com/starwashparis/", className: 'hover:text-cyan-700' },
                        react_1["default"].createElement(fa_1.FaInstagram, { className: "inline-block mr-2 text-cyan-400" }),
                        "Instagram")),
                react_1["default"].createElement("p", { className: "text-zinc-50 mb-4" },
                    react_1["default"].createElement("a", { href: "https://www.snapchat.com/add/starwashparis", className: 'hover:text-cyan-700' },
                        react_1["default"].createElement(fa_1.FaSnapchat, { className: "inline-block mr-2 text-cyan-400" }),
                        "Snapchat")),
                react_1["default"].createElement("p", { className: "text-zinc-50 mb-4" },
                    react_1["default"].createElement(fa_1.FaEnvelope, { className: "inline-block mr-2 text-cyan-400" }),
                    " ",
                    react_1["default"].createElement("a", { href: "mailto:Starwash.paris@gmail.com", className: 'font-bold hover:text-cyan-800' }, "Starwash.paris@gmail.com"))))));
};
exports["default"] = Contact;
