'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RC = exports.VERSION = exports.DEFAULTS = undefined;

var _package = require('../../package.json');

// 版本号
const VERSION = _package.version;

// 根目录
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : "HOME"];

// 配置文件目录
const RC = `${HOME}` + `\\.frame-createrc`;

// 模板下载地址，配合gitHub api
// // https://api.github.com/${type}/${registry}/repos
var DEFAULTS = {
    registry: 'lifuqiang2019',
    type: 'users'
};

exports.DEFAULTS = DEFAULTS;
exports.VERSION = VERSION;
exports.RC = RC;