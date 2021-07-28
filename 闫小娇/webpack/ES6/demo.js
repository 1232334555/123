"use strict";

var _arguments = arguments;
var fn = function fn() {
    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
    }

    console.log(arg);
    console.log(_arguments);
};
fn(1, 2, 3);
