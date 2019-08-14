// frame-create registry命令
import fs from 'fs';
import chalk from 'chalk';
import { promisify } from 'util';


import { DEFAULTS } from './utils/constants';

const readFile = promisify(fs.readFile);

let registry = async (action, account) => {
    // frame-create registry 查看配置的gitHub账号
    if(!action) console.log('now related account is: '+DEFAULTS.registry);

    // frame-create registry set <GitHubAccount> 设置github账号
    else if(action == 'set') {
        if(account) {
            var defaults = await readFile(__dirname+'/utils/constants.js', 'utf8');
            var newDefaults = defaults.replace(DEFAULTS.registry, account);
            fs.writeFileSync(__dirname+'/utils/constants.js', newDefaults, 'utf-8');
            console.log(chalk.bgGreen('success!'));
        } else {
            console.log(chalk.red('a GitHub account is required'));
        }
    }
}

module.exports = registry;