'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = require('./utils/get');

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

let install = async () => {
    let loading = (0, _ora2.default)('fetching template ...');
    loading.start();
    let list = await (0, _get.repoList)();
    loading.succeed();
    list = list.map(({ name }) => name);

    let result = await _inquirer2.default.prompt([{
        type: 'list',
        name: 'project',
        choices: list,
        questions: 'choice your template'
    }]);

    let project = result.project;
    loading = (0, _ora2.default)('fetching tag ...');
    loading.start();
    list = await (0, _get.tagList)(project);
    loading.succeed();
    list = list.map(({name})=> name);

    let answer = await _inquirer2.default.prompt([{
        type: 'list',
        name: 'tag',
        choices: list,
        questions: 'choice tag'
    }]);
    let tag = answer.tag;
    console.log(project, tag);

    loading = (0, _ora2.default)('download project ...');
    loading.start();
    await (0, _get.downloadLocal)(project, tag);
    loading.succeed();
}

exports.default = install;
