"use strict";

exports.__esModule = true;

var head_1 = require("next/head");

var About_1 = require("../../components/dist/About");

var Contact_1 = require("../../components/dist/Contact");

var Footer_1 = require("../../components/dist/Footer");

var Header_1 = require("../../components/dist/Header");

var Navbar_1 = require("../../components/dist/Navbar");

var TariffPage_1 = require("../../components/dist/TariffPage");

var react_1 = require("react");

var PageLoader_1 = require("../../components/dist/PageLoader");

function Home() {
  var _a = react_1.useState(true),
      loading = _a[0],
      setLoading = _a[1];

  react_1.useEffect(function () {
    setLoading(false);
  }, []);
  return React.createElement("div", null, loading ? React.createElement(PageLoader_1["default"], null) : React.createElement("div", {
    className: "container"
  }, React.createElement(head_1["default"], null, " ", React.createElement("title", null, "Create Next App"), " ", React.createElement("meta", {
    name: "description",
    content: "Generated by create next app"
  }), " ", React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), " ", React.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), " "), React.createElement(Navbar_1["default"], null), React.createElement(Header_1["default"], null), React.createElement(About_1["default"], null), React.createElement(TariffPage_1["default"], null), React.createElement(Contact_1["default"], null), React.createElement(Footer_1["default"], null)));
}

exports["default"] = Home;