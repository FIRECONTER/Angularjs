var http = require('http');
var fs = require('fs');
var mydata;
fs.readFile('data.xml',function(err,data){

    if(err){console.log('err get data');return;};
    mydata = data;
    console.log('data is ok');
    

});
http.createServer(function(req,res){
    console.log('connected');
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);//注意这里不能使用 * 
    res.setHeader('Access-Control-Allow-Credentials', true);//告诉客户端可以在HTTP请求中带上Cookie
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');//比较重要没有设置头部不同端口程序也是跨域，无法正常接收数据


    res.writeHead(200,{'Content-Type':'text/xml'});
    res.end(mydata,'utf-8');

}).listen(3000,'127.0.0.1');//create a server to send xml data
console.log('server is on');