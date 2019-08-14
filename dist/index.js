// 入口文件
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

let apply = (action, ...args) => {
    require(`./${action}`)(...args);
};

exports.default = apply;