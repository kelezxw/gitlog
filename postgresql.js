/*
 * @Author: kele
 * @Date: 2021-08-27 17:19:33
 * @LastEditors: kele
 * @LastEditTime: 2021-08-30 10:55:10
 * @Description: 操作postgresql
 */
const pg = require('pg')
const params = "tcp://user:pwd@ip/database";//tcp://用户名：密码@localhost/数据库名
const client =  new pg.Client(params);


class sqltool {
    static init(){
        //客户端连接
        client.connect(function(error, results){
            if (error) {
                console.log('clientConnection Error:'+error.message);
                client.end();
            }else{
                console.log('clientConnection success');
            }
        })
    }
    // 执行sql
    static execute(sqlString){
        return new Promise((resolve, reject) => {
            client.query(sqlString,
                function(error,results){
                    if (error) {
                        console.log(error);
                        reject(error)
                    } else {
                        // console.log(results);
                        resolve(results)
                    }
                });
            });
    }
    static closeConnect(){
        if(client){
            client.end();
        }
    }
}
module.exports = sqltool;
