/*
 * @Author: kele
 * @Date: 2021-08-27 11:04:27
 * @LastEditors: kele
 * @LastEditTime: 2021-08-29 11:19:00
 * @Description: git模拟脚本
 */
const cmd=require('node-cmd');
// const gitlog=require('./config/gitlog');
const gitlog=require('./config/server');
const  sqltool = require('./postgresql.js')
const sourceDir = 'C:\\Users\\kele\\Desktop\\iot-platform\\iot-platform\\';
const projectDir = 'C:\\Users\\kele\\Desktop\\p\\iot-platform\\';
const diskName = 'C:';
// 执行脚本操作一条记录
startTask = async (params)=>{
    // 这里有个问题，每个cmd.run命令都是独立存在的，所以提前切换路径是不行的
    // 所以后面执行git命令的时候必须多命令执行，先切换至项目目录，再执行git命令
    console.log(params.id+"-----------start")
    // 1、修改时间
    cmd.run(`date ${params.date}`);
    cmd.run(`time ${params.time}`);

    // // // 2、复制文件
    let copyRes = cmd.runSync(`copy ${sourceDir}${params.sourceFile} ${projectDir}${params.targetFile}`);
    if(copyRes.err) console.log(copyRes.err);
    if(copyRes.stderr) console.log(copyRes.stderr);
    // // // 3、git add
    let addRes = await cmd.runSync(`${diskName} && cd ${projectDir} && git add -A`);
    if(addRes.err) console.log(addRes.err);
    if(addRes.stderr) console.log(addRes.stderr);
    // // // // 4、git commit
    let commitRes = await cmd.runSync(`${diskName} && cd ${projectDir} && git commit -m "${params.remark}"`);
    if(commitRes.err) console.log(commitRes.err);
    if(commitRes.stderr) console.log(commitRes.stderr);
    // // // // 5、git push
    let pushRes = await cmd.runSync(`${diskName} && cd ${projectDir} && git push origin master`);
    if(pushRes.err) console.log(pushRes.err);
    if(pushRes.stderr) console.log(pushRes.stderr);

    await new Promise((resolve)=>
        setTimeout(async ()=>{
            // 6、修改数据库对应记录时间
            let sqlStringQuery = `select event_id from push_event_payloads  where commit_title = '${params.remark}' order by event_id desc limit 1`;
            let resQuery = await sqltool.execute(sqlStringQuery);
            // console.log(resQuery)
            if(resQuery.rowCount>0){
                let sqlString = `update events set created_at = '${params.date} ${params.time}', updated_at = '${params.date} ${params.time}' where id = ${resQuery.rows[0].event_id}`;
                let res = await sqltool.execute(sqlString);
                let text = '失败';
                if(res.rowCount != 0) {
                    // 更新记录失败 0
                    text = '成功'
                }
                console.log(`记录${params.id}更新${text}`);
            }else{
                console.log(`记录${params.id}查询失败`);
            }
            resolve();
        }, 1000)
    )
}
// 读取文件循环执行
readLog= async ()=>{
    // console.log(gitlog.length);
    sqltool.init();
    for (let index = 0; index < gitlog.length; index++) {
        await startTask(gitlog[index]);
    }
}
readLog();
// sqltool.init();
// console.log(gitlog.length);
// await startTask(gitlog[67])
