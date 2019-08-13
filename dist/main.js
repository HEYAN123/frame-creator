'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _constants = require('./utils/constants');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 入口文件 实现处理命令行
var actionMap = {
    // init 命令
    init: {
        description: 'generate a new project from a template',
        usages: ['frame-create init templateName projectName']
    },

    // config命令
    config: {
        alias: 'cfg',
        description: 'config .frame-createrc',
        usages: ['frame-create config set <key> <value>', 'frame-create config get <key>', 'frame-create config remove <key>']
    }
};