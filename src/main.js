// 入口文件 实现处理命令行
import program from 'commander';
import { VERSION } from './utils/constants';
import apply from './index';
import chalk from 'chalk';

let actionMap = {
    // init 命令
    init: {
        description: 'generate a new project from a template',
        usages: [
            'frame-create init templateName projectName'
        ]
    },

    // config命令
    config: {
        alias: 'cfg',
        description: 'config .frame-createrc',
        usages: [
            'frame-create config set <key> <value>',
            'frame-create config get <key>',
            'frame-create config remove <key>'
        ]
    }
}