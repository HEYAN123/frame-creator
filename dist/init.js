"use strict";

var _inquirer = _interopRequireDefault(require("inquirer"));

var _ora = _interopRequireDefault(require("ora"));

var _get = require("./utils/get");

var _fs = _interopRequireDefault(require("fs"));

var _chalk = _interopRequireDefault(require("chalk"));

var _logSymbols = _interopRequireDefault(require("log-symbols"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// init命令
// 命令行交互
// 下载进度显示
let init = async (templateName, projectName) => {
  if (!projectName) {
    console.log(_chalk.default.redBright('please enter a project name!'));
    return;
  } // 如果项目不存在


  if (!_fs.default.existsSync(projectName)) {
    // 命令行交互S
    _inquirer.default.prompt([{
      name: 'description',
      message: 'Please enter the project description: '
    }, {
      name: 'author',
      message: 'Please enter the author name: '
    }]).then(async answer => {
      // 拉取模板
      let loading = (0, _ora.default)('downloading template ...'); // 开始

      loading.start();
      (0, _get.downloadLocal)(templateName, projectName).then(() => {
        // 拉取成功
        loading.succeed();
        const fileName = `${projectName}/package.json`;

        if (_fs.default.existsSync(fileName)) {
          const data = _fs.default.readFileSync(fileName).toString();

          let json = JSON.parse(data);
          json.name = projectName;
          json.author = answer.author;
          json.description = answer.description; // 修改package.json

          _fs.default.writeFileSync(fileName, JSON.stringify(json, null, '\t'), 'utf-8');

          console.log(_logSymbols.default.success, _chalk.default.green('Project initialization finished!'));
        }
      }, err => {
        console.log(err);
        loading.fail();
      });
    });
  } else {
    console.log(_logSymbols.default.error, _chalk.default.red('The project already exists'));
  }
};

module.exports = init;