// 获取模板
import { getAll } from './rc';
// 支持从github,gitlab下载远程仓库到本地
import downloadGit from 'download-git-repo';

export const downloadLocal = async (templateName, projectName) => {
    let config = await getAll();
    // console.log('config',config);
    let api = `${config.registry}/${templateName}`;
    return new Promise((resolve, reject)=> {
        downloadGit(api, projectName, (err)=>{
            if(err) reject(err);
            resolve();
        });
    });
}