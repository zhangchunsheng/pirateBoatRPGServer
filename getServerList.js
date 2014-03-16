var express = require('express')
	,stylus = require('stylus')
	,nib = require('nib')
	,io = require('socket.io')
	,db = require("./config_").db;

var app = express()
	,server = require('http').createServer(app)
	,io = io.listen(server);
var serverList = [];

server.listen(9000);

io.sockets.on('connection', function (socket) {
	socket.on('getServerList', function (fn) {
		db.collection("btg_serverList").find().toArray(function(err, items) {
			serverList = items;
			fn(serverList);
		});
	});
	socket.on('login', function(userInfo, fn) {
		console.log(userInfo);
		var loginName = userInfo.name;
		var password = userInfo.pwd;
		var serverIndex = userInfo.index;
		var condition = {
			$and: [
				{loginName: loginName},
				{password: password}
			]
		};
		db.collection("uc_user").findOne(condition, function(err, item) {
			console.log(item);
			//if(item) {
				//ec2-23-22-46-229.compute-1.amazonaws.com 7000
				fn("Succeed", "222.126.242.105", 7000);//119.161.210.55:7000
			//} else {
				//fn("NotSucceed", "", 0);
			//}
		});
	});
});