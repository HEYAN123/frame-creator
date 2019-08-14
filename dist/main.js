'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _constants = require('./utils/constants');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 命令配置映射
// 入口文件 实现处理命令行
let actionMap = {
    // init 命令
    init: {
        description: 'generate a new project from a template',
        usages: ['frame-create init <templateName> <projectName>']
    },
    // registry命令
    registry: {
        alias: 'reg',
        description: 'configure repositories\' sources (a GitHub account)',
        usages: ['frame-create registry', 'frame-create registry set <GitHubAccount>']
    }

    // 根据映射配置命令
};Object.keys(actionMap).forEach(action => {
    _commander2.default.command(action).description(actionMap[action].description).alias(actionMap[action].alias).action(() => {
        switch (action) {
            case 'init':
                (0, _index2.default)(action, ...process.argv.slice(3));
                break;
            case 'registry':
                (0, _index2.default)(action, ...process.argv.slice(3));
            default:
                break;
        }
    });
});

// 配置帮助命令
function help() {
    console.log('\r\nUsage:');
    Object.keys(actionMap).forEach(action => {
        actionMap[action].usages.forEach(usage => {
            console.log('  - ' + usage);
        });
    });
    console.log('\r');
}

_commander2.default.usage('<command> [options]');

_commander2.default.on('-h', help);
_commander2.default.on('--help', help);

_commander2.default.version(_constants.VERSION, '-v --version').parse(process.argv);

if (!process.argv.slice(2).length) {
    _commander2.default.outputHelp(make_green);
}

function make_green(txt) {
    return _chalk2.default.green(txt);
}