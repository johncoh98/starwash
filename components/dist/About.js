"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var cleaning2_jpg_1 = require("../public/cleaning2.jpg");
var fa_1 = require("react-icons/fa");
var react_scroll_1 = require("react-scroll");
var About = function () {
    return (React.createElement("section", { id: 'about', className: "bg-zinc-800 text-white py-20" },
        React.createElement("div", { className: "container mx-auto" },
            React.createElement("h2", { className: "text-4xl font-bold text-center mb-10" }, "Bienvenue chez Star Wash"),
            React.createElement("div", { className: "  sm:flex-column md:flex justify-center items-center" },
                React.createElement("div", { className: "w-1/2 md:pr-10 mb-8 md:mb-0 " },
                    React.createElement(image_1["default"], { src: cleaning2_jpg_1["default"], alt: "Voiture lav\u00E9e \u00E0 la main", width: 600, height: 400, className: "ml-[50%] md:ml-0 rounded-md shadow-lg" })),
                React.createElement("div", { className: "md:w-1/2 pl-32 md:pl-10 " },
                    React.createElement("h3", { className: "text-2xl font-bold mb-4" }, "Pourquoi nous choisir ?"),
                    React.createElement("ul", { className: "list-disc pl-6" },
                        React.createElement("li", { className: "mb-4 flex items-center" },
                            React.createElement(fa_1.FaCheckCircle, { className: "mr-2 text-cyan-500" }),
                            "Service de qualit\u00E9 sup\u00E9rieure"),
                        React.createElement("li", { className: "mb-4 flex items-center" },
                            React.createElement(fa_1.FaCheckCircle, { className: "mr-2 text-cyan-500" }),
                            "Prix abordable"),
                        React.createElement("li", { className: "mb-4 flex items-center" },
                            React.createElement(fa_1.FaCheckCircle, { className: "mr-2 text-cyan-500" }),
                            "\u00C9quipe de professionnels"),
                        React.createElement("li", { className: "mb-4 flex items-center" },
                            React.createElement(fa_1.FaCheckCircle, { className: "mr-2 text-cyan-500" }),
                            "Techniques de lavage respectueuses de l'environnement"),
                        React.createElement("li", { className: "mb-4 flex items-center" },
                            React.createElement(fa_1.FaCheckCircle, { className: "mr-2 text-cyan-500" }),
                            "Exp\u00E9rience de lavage rapide et pratique")))),
            React.createElement("div", { className: "flex-column md:flex justify-center items-center my-20" },
                React.createElement("div", { className: "md:w-1/2 md:pr-10 pl-32" },
                    React.createElement("h3", { className: "text-2xl ce font-bold mb-4" }, "Nos avantages"),
                    React.createElement("ul", { className: "list-disc pl-6" },
                        React.createElement("li", { className: "mb-4 flex items-center" },
                            React.createElement(fa_1.FaCheckCircle, { className: "mr-2 text-cyan-500" }),
                            "Lavage en profondeur de l'int\u00E9rieur et de l'ext\u00E9rieur"),
                        React.createElement("li", { className: "mb-4 flex items-center" },
                            React.createElement(fa_1.FaCheckCircle, { className: "mr-2 text-cyan-500" }),
                            "\u00C9limination des taches tenaces et de la salet\u00E9"),
                        React.createElement("li", { className: "mb-4 flex items-center" },
                            React.createElement(fa_1.FaCheckCircle, { className: "mr-2 text-cyan-500" }),
                            "Protection de la peinture de votre voiture"))),
                React.createElement("div", { className: "md:w-1/2 pl-10" },
                    React.createElement("div", { className: "relative", style: { paddingBottom: "56.25%" } },
                        React.createElement("iframe", { className: "absolute inset-0 w-full h-full", src: "https://player.vimeo.com/external/514160342.sd.mp4?s=2c92d0dc321450b900207793a3e4188e7e583db0&profile_id=164&oauth2_token_id=57447761", title: "Car Wash XYZ - Video promotionnelle", allowFullScreen: true })))),
            React.createElement("div", { className: "text-center" },
                React.createElement("p", { className: "text-lg" }, "Pour un lavage de voiture de qualit\u00E9 sup\u00E9rieure et respectueux de l'environnement, contactez Star Wash d\u00E8s aujourd'hui."),
                React.createElement(react_scroll_1.Link, { to: "contact", smooth: true, duration: 500, offset: -80 },
                    React.createElement("div", { className: "bg-cyan-500 text-white inline-block px-6 py-3 rounded-md mt-8 hover:bg-cyan-400 transition-colors duration-300 cursor-pointer" }, "R\u00E9servez votre lavage"))))));
    ;
};
exports["default"] = About;
