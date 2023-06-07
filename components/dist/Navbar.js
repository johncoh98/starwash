"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_scroll_1 = require("react-scroll");
var ai_1 = require("react-icons/ai");
var Navbar = function () {
    var _a = react_1.useState(false), menuOpen = _a[0], setMenuOpen = _a[1];
    var handleNav = function () {
        setMenuOpen(!menuOpen);
    };
    return (react_1["default"].createElement("nav", { className: 'w-full fixed  z-40 h-14 ' },
        react_1["default"].createElement("div", { className: 'flex bg-white  justify-end items-center px-4 h-full w-full 2xl:px-16' },
            react_1["default"].createElement("div", { className: 'hidden sm:flex' },
                react_1["default"].createElement("ul", { className: 'hidden sm:flex text-zinc-800' },
                    react_1["default"].createElement(react_scroll_1.Link, { to: "home", smooth: true, duration: 500, offset: -80 },
                        react_1["default"].createElement("li", { className: 'font-bold ml-10 uppercase hover:border-b hover:border-cyan-500 hover:text-cyan-500 text-xl cursor-pointer' }, "Accueil")),
                    react_1["default"].createElement(react_scroll_1.Link, { to: "about", smooth: true, duration: 500, offset: -80 },
                        react_1["default"].createElement("li", { className: 'font-bold ml-10 uppercase hover:border-b hover:border-cyan-500 hover:text-cyan-500 text-xl cursor-pointer' }, "Pourquoi Star Wash ?")),
                    react_1["default"].createElement(react_scroll_1.Link, { to: 'tarifs', smooth: true, duration: 500, offset: -80 },
                        react_1["default"].createElement("li", { className: 'font-bold ml-10 uppercase hover:border-b hover:border-cyan-500 hover:text-cyan-500 text-xl cursor-pointer' }, "Tarifs")),
                    react_1["default"].createElement(react_scroll_1.Link, { to: 'contact', smooth: true, duration: 500, offset: -80 },
                        react_1["default"].createElement("li", { className: 'font-bold ml-10 uppercase hover:border-b hover:border-cyan-500 hover:text-cyan-500 text-xl cursor-pointer' }, "Contact")))),
            react_1["default"].createElement("div", { onClick: handleNav, className: 'sm:hidden cursor-pointer pl-24' },
                react_1["default"].createElement(ai_1.AiOutlineMenu, { size: 25, color: 'black' }))),
        react_1["default"].createElement("div", { className: menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-zinc-800 p-10 ease-in duration-500"
                : "fixed left-[100%] top-0 p-10 ease-in duration-500" },
            react_1["default"].createElement("div", { className: 'flex w-full items-center justify-end' },
                react_1["default"].createElement("div", { onClick: handleNav, className: 'cursor-pointer' },
                    react_1["default"].createElement(ai_1.AiOutlineClose, { size: 25, color: "white" }))),
            react_1["default"].createElement("div", { className: 'flex-col py-4' },
                react_1["default"].createElement("ul", { className: 'text-zinc-50 ' },
                    react_1["default"].createElement(react_scroll_1.Link, { to: "home", smooth: true, duration: 500, offset: -80 },
                        react_1["default"].createElement("li", { onClick: function () { return setMenuOpen(false); }, className: 'py-4 cursor-pointer hover:text-cyan-500' }, "Accueil")),
                    react_1["default"].createElement(react_scroll_1.Link, { to: "about", smooth: true, duration: 500, offset: -80 },
                        react_1["default"].createElement("li", { onClick: function () { return setMenuOpen(false); }, className: 'py-4 cursor-pointer hover:text-cyan-500' }, "Pourquoi Nous ?")),
                    react_1["default"].createElement(react_scroll_1.Link, { to: "tarifs", smooth: true, duration: 500, offset: -80 },
                        react_1["default"].createElement("li", { onClick: function () { return setMenuOpen(false); }, className: 'py-4 cursor-pointer hover:text-cyan-500' }, "Tarifs")),
                    react_1["default"].createElement(react_scroll_1.Link, { to: "contact", smooth: true, duration: 500, offset: -80 },
                        react_1["default"].createElement("li", { onClick: function () { return setMenuOpen(false); }, className: 'py-4 cursor-pointer hover:text-cyan-500' }, "Contact")))))));
};
exports["default"] = Navbar;
