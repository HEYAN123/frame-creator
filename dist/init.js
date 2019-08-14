'use strict';

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _get = require('./utils/get');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _logSymbols = require('log-symbols');

var _logSymbols2 = _interopRequireDefault(_logSymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// init命令
// 命令行交互
let init = async (templateName, projectName) => {
    // 如果项目不存在
    if (!_fs2.default.existsSync(projectName)) {
        // 命令行交互
        _inquirer2.default.prompt([{
            name: 'description',
            message: 'Please enter the project description: '
        }, {
            name: 'author',
            message: 'Please enter the author name: '
        }]).then(async answer => {
            // 拉取模板
            let loading = (0, _ora2.default)('downloading template ...');
            // 开始
            loading.start();
            (0, _get.downloadLocal)(templateName, projectName).then(() => {
                // 拉取成功
                loading.succeed();
                const fileName = `${projectName}/package.json`;
                if (_fs2.default.existsSync(fileName)) {
                    const data = _fs2.default.readFileSync(fileName).toString();
                    let json = JSON.parse(data);
                    json.name = projectName;
                    json.author = answer.author;
                    json.description = answer.description;
                    // 修改package.json
                    _fs2.default.writeFileSync(fileName, JSON.stringify(json, null, '\t'), 'utf-8');
                    console.log(_logSymbols2.default.success, _chalk2.default.green('Project initialization finished!'));
                }
            }, err => {
                console.log(err);
                loading.fail();
            });
        });
    } else {
        console.log(_logSymbols2.default.error, _chalk2.default.red('The project already exists'));
    }
};
// 下载进度显示


module.exports = init;