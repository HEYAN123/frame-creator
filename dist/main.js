"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _constants = require("./utils/constants");

var _index = _interopRequireDefault(require("./index"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 入口文件 实现处理命令行
// 命令配置映射
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
  } // 根据映射配置命令

};
Object.keys(actionMap).forEach(action => {
  _commander.default.command(action).description(actionMap[action].description).alias(actionMap[action].alias).action(() => {
    switch (action) {
      case 'init':
        (0, _index.default)(action, ...process.argv.slice(3));
        break;

      case 'registry':
        (0, _index.default)(action, ...process.argv.slice(3));

      default:
        break;
    }
  });
}); // 配置帮助命令

function help() {
  console.log('\r\nUsage:');
  Object.keys(actionMap).forEach(action => {
    actionMap[action].usages.forEach(usage => {
      console.log('  - ' + usage);
    });
  });
  console.log('\r');
}

_commander.default.usage('<command> [options]');

_commander.default.on('-h', help);

_commander.default.on('--help', help);

_commander.default.version(_constants.VERSION, '-v --version').parse(process.argv);

if (!process.argv.slice(2).length) {
  _commander.default.outputHelp(make_green);
}

function make_green(txt) {
  return _chalk.default.green(txt);
}