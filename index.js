// 在终端输入 node index.js 运行文件
// 查看Node.js官网文档(https://nodejs.org/en/docs/)，了解更多信息。 


var http = require('http');
var url = require("url");
var inc = require('./inc')

http.createServer(function(request, response) {

    var queryObj = url.parse(request.url, true).query;

    var r = Math.random().toString(10).substring(2);
    var s = (inc.calcs('/video/urls/v/1/toutiao/mp4/' + queryObj.vid + '?r=' + r + '') >>> 0)

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: application/json。并用charset=UTF-8解决输出中文乱码
    response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

    var data = { vid: queryObj.vid, r, s };

    // 下句是发送响应数据
    response.end(JSON.stringify(data));
}).listen(8848);
