import { version } from '../../package.json';

// 版本号
const VERSION = version;

// 根目录
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : "HOME"];

// 配置文件目录
const RC =  `${HOME}`+`\\.frame-createrc`;

// 模板下载地址，配合gitHub api
// // https://api.github.com/${type}/${registry}/repos
var DEFAULTS = {
    registry: 'HEYAN123',
    type: 'users'
}

export {
    DEFAULTS,
    VERSION,
    RC
};