// 入口文件 实现处理命令行
import program from 'commander';
import { VERSION } from './utils/constants';
import apply from './index';
import chalk from 'chalk';

// 命令配置映射
let actionMap = {
    // init 命令
    init: {
        description: 'generate a new project from a template',
        usages: [
            'frame-create init <templateName> <projectName>'
        ]
    },
    // registry命令
    registry: {
        alias: 'reg',
        description: 'configure repositories\' sources (a GitHub account)',
        usages: [
            'frame-create registry',
            'frame-create registry set <GitHubAccount>',
        ]
    }
}

// 根据映射配置命令
Object.keys(actionMap).forEach((action)=> {
    program.command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias)
    .action(() => {
        switch(action) {
            case 'init':
                apply(action, ...process.argv.slice(3));
                break;
            case 'registry':
                apply(action, ...process.argv.slice(3));
            default:
                break;
        }
    });
});

// 配置帮助命令
function help() {
    console.log('\r\nUsage:');
    Object.keys(actionMap).forEach((action) => {
        actionMap[action].usages.forEach(usage => {
            console.log('  - ' + usage);
        })
    });
    console.log('\r');
}

program.usage('<command> [options]');

program.on('-h', help);
program.on('--help', help);

program.version(VERSION, '-v --version').parse(process.argv);

if(!process.argv.slice(2).length) {
    program.outputHelp(make_green);
}

function make_green(txt) {
    return chalk.green(txt);
}