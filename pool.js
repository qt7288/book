//链接池模块
const mysql=require('mysql');
var pool=mysql.createPool({
    // host     : process.env.MYSQL_HOST,
    host     : 'http://book688.applinzi.com',
    // port     : process.env.MYSQL_PORT,
    port     : '3307',
    // user     : process.env.ACCESSKEY,
    user     : 'k35kxnzk44',
    // password : process.env.SECRETKEY,
    password : '2mmiwk4l2j2iliw41i51xjy3x3l411jw1kmmy0kx',
    // database : 'app_' + process.env.APPNAME,
    database : 'app_book688',
	connectionLimit:100
	});
module.exports=pool