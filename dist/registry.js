"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _util = require("util");

var _constants = require("./utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// frame-create registry命令
const readFile = (0, _util.promisify)(_fs.default.readFile);

let registry = async (action, account) => {
  // frame-create registry 查看配置的gitHub账号
  if (!action) console.log('now related account is: ' + _constants.DEFAULTS.registry); // frame-create registry set <GitHubAccount> 设置github账号
  else if (action == 'set') {
      if (account) {
        var defaults = await readFile(__dirname + '/utils/constants.js', 'utf8');
        var newDefaults = defaults.replace(_constants.DEFAULTS.registry, account);

        _fs.default.writeFileSync(__dirname + '/utils/constants.js', newDefaults, 'utf-8');

        console.log(_chalk.default.bgGreen('success!'));
      } else {
        console.log(_chalk.default.red('a GitHub account is required'));
      }
    }
};

module.exports = registry;