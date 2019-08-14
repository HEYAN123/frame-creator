'use strict';

var _rc = require('./utils/rc');

let config = async (action, key, value) => {
    switch (action) {
        case 'get':
            if (key) {
                let result = await (0, _rc.get)(key);
                console.log(result);
            } else {
                let obj = await (0, _rc.getAll)();
                Object.keys(obj).forEach(key => {
                    console.log(`${key}=${obj[key]}`);
                });
            }
            break;
        case 'set':
            (0, _rc.set)(key, value);
            break;
        case 'remove':
            (0, _rc.remove)(key);
            break;
        default:
            break;
    }
}; // 配置文件，支持使用其他仓库的模板，自由选择模板

module.exports = config;