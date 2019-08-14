'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.downloadLocal = undefined;

var _rc = require('./rc');

var _downloadGitRepo = require('download-git-repo');

var _downloadGitRepo2 = _interopRequireDefault(_downloadGitRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 获取模板
const downloadLocal = exports.downloadLocal = async (templateName, projectName) => {
    let config = await (0, _rc.getAll)();
    // console.log('config',config);
    let api = `${config.registry}/${templateName}`;
    return new Promise((resolve, reject) => {
        (0, _downloadGitRepo2.default)(api, projectName, err => {
            if (err) reject(err);
            resolve();
        });
    });
};
// 支持从github,gitlab下载远程仓库到本地