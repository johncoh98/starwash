"use strict";
exports.__esModule = true;
var react_intersection_observer_1 = require("react-intersection-observer");
function ScrollTriggeredText() {
    var _a = react_intersection_observer_1.useInView({
        threshold: 0.5
    }), ref = _a.ref, inView = _a.inView;
}
