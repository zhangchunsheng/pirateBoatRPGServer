var mongoskin = require('mongoskin');
exports.db = mongoskin.db('localhost:27017?auto_reconnect=true', {
	database: "rpgGame",
	safe: true
});
var mysql = require('mysql');
exports.mysql = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'html5isgood',
	database: "rpgGame"
});


var redis = require("redis");
exports.redis = redis.createClient();