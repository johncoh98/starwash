"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var fa_1 = require("react-icons/fa");
var Footer = function () {
    return (React.createElement("footer", { className: "bg-zinc-200 text-zinc-800 py-8 px-4" },
        React.createElement("div", { className: "container mx-auto flex flex-col md:flex-row justify-between items-center" },
            React.createElement("div", { className: "text-center md:text-left mb-4 md:mb-0" },
                React.createElement("p", { className: "font-bold text-lg" }, "Star Wash"),
                React.createElement("p", { className: "text-gray-500" }, "1 bd eugene decros 93260 Les Lilas"),
                React.createElement("p", { className: "text-gray-500" }, "10 av Faidherbe 93260 les Lilas")),
            React.createElement("div", { className: "flex items-center" },
                React.createElement("a", { href: "tel:+33604090909", className: "mr-6 text-cyan-600 hover:text-cyan-800" },
                    React.createElement(fa_1.FaPhone, { className: "inline-block mr-1" }),
                    "06 04 09 09 09"),
                React.createElement("a", { href: "mailto:contact@masociete.com", className: "text-cyan-600 hover:text-cyan-800" },
                    React.createElement(fa_1.FaEnvelope, { className: "inline-block mr-1" }),
                    "Starwash.paris@gmail.com")),
            React.createElement("div", { className: "flex-col my-4 " },
                React.createElement("h1", null, "Horaires d'Ouverture"),
                React.createElement("p", null, "Lundi-Samedi - 10h30-19h"),
                React.createElement("p", null, "Dimanche - Sur R\u00E9servation")),
            React.createElement("div", { className: "text-center md:text-right mt-4 md:mt-0" },
                React.createElement("p", null, "\u00A9 2023 Star Wash Paris. Tous droits r\u00E9serv\u00E9s."),
                React.createElement(link_1["default"], { href: "/privacy" },
                    React.createElement("p", { className: "text-gray-500 hover:text-cyan-600" }, "Politique de confidentialit\u00E9"))))));
};
exports["default"] = Footer;
