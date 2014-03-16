var express = require('express')
	,stylus = require('stylus')
	,nib = require('nib')
	,io = require('socket.io')
	,db = require("./config_").db
	,mysql = require("./config_").mysql
	,redis = require("./config_").redis;

mysql.connect();
redis.select(15, function() {
	
});
redis.on("error", function (err) {
	console.log("Error " + err);
});

redis.set("foo", "test", redis.print);
redis.get("foo", function (err, reply) {
	console.log(reply);
});

var app = express()
	,server = require('http').createServer(app)
	,io = io.listen(server);

server.listen(9000);

function getServerList() {
	var serverList = [];
	serverList[0] = {};
	serverList[0].name = "server1";
	serverList[0].showName = "华东区";
	serverList[0].ip = "ec2-23-22-46-229.compute-1.amazonaws.com";
	serverList[0].port = 7000;
	serverList[0].connectNumber = 0;
	var date = new Date();
	serverList[0].date = Math.round(date.getTime() / 1000);
	return serverList;
}
function initServerList() {
	db.collection("btg_serverList").remove({}, function(err, reply) {
		console.log(reply);
	});
	var serverList = [];
	mysql.query('SELECT id,name,ip,port,connectNumber,date,showName FROM btg_serverList where bz=1 and updateBz=1', function(err, rows, fields) {
		if(err)
			throw err;

		serverList = rows;
		for(var i = 0 ; i < serverList.length ; i++) {
			db.collection('btg_serverList').insert(serverList[i], function(err, result) {
				if(!err) {
					console.log('db has open');
					console.log(result);
				}
			});
		}
	});
	db.collection("btg_serverList").find().toArray(function(err, items) {
		console.dir(items);
	});
}
function initUcUser() {
	db.collection("uc_user").remove({}, function(err, reply) {
		console.log(reply);
	});
	var uc_users = [];
	mysql.query('SELECT id,loginName,password,nickname,registerType,email,phoneNum,country,province,city,birthdate,registerDate,date,bz,updateBz FROM uc_user where bz=1 and updateBz=1', function(err, rows, fields) {
		if(err)
			throw err;

		uc_users = rows;
		for(var i = 0 ; i < uc_users.length ; i++) {
			db.collection('uc_user').insert(uc_users[i], function(err, result) {
				if(!err) {
					console.log('db has open');
					console.log(result);
				}
			});
		}
	});
	db.collection("uc_user").find().toArray(function(err, items) {
		console.dir(items);
	});
}
function init() {
	//initServerList();
	initUcUser();
}
//collection.findOne({_id, ObjectID.createFromHexString(id)}, ..., callback);
init();
mysql.end();
redis.quit();

function handleDisconnect(connection) {
	connection.on('error', function(err) {
		if (!err.fatal) {
			return;
		}

		if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
			throw err;
		}

		console.log('Re-connecting lost connection: ' + err.stack);

		connection = mysql.createConnection(connection.config);
		handleDisconnect(connection);
		connection.connect();
	});
}