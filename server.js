var express = require('express')
	,stylus = require('stylus')
	,nib = require('nib')
	,io = require('socket.io')
	,db = require("./config_");

var app = express()
	,server = require('http').createServer(app)
	,io = io.listen(server);

server.listen(7000);

io.sockets.on('connection', function (socket) {
	socket.emit('checkRole', function (loginName) {
		if(loginName) {
			socket.emit("roleLoginSucceed");
			var roleInfo = {};
			roleInfo.__v = 174;
			roleInfo._id = socket.id;
			roleInfo.account = loginName;
			roleInfo.name = "html5";
			roleInfo.copyTable = [];
			roleInfo.starMap = {};
			roleInfo.starMap.baseRise = {};
			roleInfo.starMap.baseRise.lifeRise = 0;
			roleInfo.starMap.baseRise.quickRise = 0;
			roleInfo.starMap.baseRise.witRise = 0;
			roleInfo.starMap.baseRise.powerRise = 0;
			roleInfo.starMap.baseAttr = {};
			roleInfo.starMap.baseAttr.life = 0;
			roleInfo.starMap.baseAttr.quick = 0;
			roleInfo.starMap.baseAttr.wit = 0;
			roleInfo.starMap.baseAttr.power = 0;
			roleInfo.positionAttr = [];
			roleInfo.bar = {};
			roleInfo.bar.heros = [];
			roleInfo.bar.resId = 0;
			roleInfo.bar.index = 0;
			roleInfo.bar.inProgress = false;
			roleInfo.emailTable = {};
			roleInfo.emailTable.savebox = [];
			roleInfo.emailTable.outbox = [];
			roleInfo.emailTable.inbox = [];
			roleInfo.heroStarIndex = 0;
			roleInfo.heroStarPage = 0;
			roleInfo.firstOnline = false;
			roleInfo.acceptableTasks = [];
			roleInfo.tasks = [];
			roleInfo.tasks[0] = {};
			roleInfo.tasks[0]._id = "1";
			roleInfo.tasks[0].done = false;
			roleInfo.tasks[0].progress = 2;
			roleInfo.tasks[0].taskId = 1;
			roleInfo.friendTable = [];
			roleInfo.blackTable = [];
			roleInfo.chapterTable = [];
			roleInfo.chapterTable[0] = [];
			roleInfo.chapterTable[0][0] = {};
			roleInfo.chapterTable[0][0].finish = true;
			roleInfo.chapterTable[0][0].star = 5;
			roleInfo.chapterTable[0][0].fightIndex = 3;
			roleInfo.positions = ["50b8513d29b2a2a81b000192","50b8513f29b2a2a81b000193","50b84b8129b2a2a81b0000b3","50b84e5f29b2a2a81b00013d","50b84e7a29b2a2a81b000140"];
			roleInfo.items = {};
			roleInfo.items.gridMaxCount = 60;
			roleInfo.items.gridCount = 60;
			roleInfo.items.temporaryItems = [];
			roleInfo.items.ornamentItems = [];
			roleInfo.items.treasureItems = [];
			roleInfo.items.stoneItems = [];
			roleInfo.items.materialItems = [];
			roleInfo.items.equipItems = [];
			roleInfo.items.equipItems[0] = {};
			roleInfo.items.equipItems[0]._id = "1";
			roleInfo.items.equipItems[0].attrValue = 50;
			roleInfo.items.equipItems[0].attrName = "strategyAttack";
			roleInfo.items.equipItems[0].type = 1;
			roleInfo.items.equipItems[0].resId = 10012;
			roleInfo.items.equipItems[0].appendAttrs = "1";
			roleInfo.items.equipItems[0].appendAttrs.life = 48;
			roleInfo.items.equipItems[0].appendAttrs.hit = 2;
			roleInfo.items.equipItems[0].stoneTable = [];
			roleInfo.items.equipItems[0].appendValue = 0;
			roleInfo.items.commonItems = [];
			roleInfo.skillTable = [];
			roleInfo.heroTable = [];
			roleInfo.heroTable[0] = {};
			roleInfo.heroTable[0]._id = "1";
			roleInfo.heroTable[0].attackType = 1;
			roleInfo.heroTable[0].name = "html5";
			roleInfo.heroTable[0].position = 1;
			roleInfo.heroTable[0].resId = 0;
			roleInfo.heroTable[0].skillId = 1;
			roleInfo.heroTable[0].talent_0 = 1;
			roleInfo.heroTable[0].vocation = 2;
			roleInfo.heroTable[0].magicTable = [];
			roleInfo.heroTable[0].ornamentTable = [];
			roleInfo.heroTable[0].equipTable = [];
			roleInfo.heroTable[0].equipTable[0] = {};
			roleInfo.heroTable[0].equipTable[0].appendValue = 0;
			roleInfo.heroTable[0].equipTable[0].stoneTable = [];
			roleInfo.heroTable[0].equipTable[0].resId = 10010;
			roleInfo.heroTable[0].equipTable[0].type = 1;
			roleInfo.heroTable[0].equipTable[0].attrName = "strategyAttack";
			roleInfo.heroTable[0].equipTable[0].attrValue = 20;
			roleInfo.heroTable[0].equipTable[0]._id = "1";
			roleInfo.heroTable[0].extraAttr = {};
			roleInfo.heroTable[0].extraAttr.morale = 0;
			roleInfo.heroTable[0].extraAttr.hurt = 0;
			roleInfo.heroTable[0].extraAttr.avoidHurt = 0;
			roleInfo.heroTable[0].extraAttr.speed = 6;
			roleInfo.heroTable[0].extraAttr.sabotage = 0;
			roleInfo.heroTable[0].extraAttr.opposeTyranny = 0;
			roleInfo.heroTable[0].extraAttr.rescue = 0;
			roleInfo.heroTable[0].extraAttr.groupHit = 0;
			roleInfo.heroTable[0].extraAttr.block = 0;
			roleInfo.heroTable[0].extraAttr.blast = 0;
			roleInfo.heroTable[0].extraAttr.miss = 0;
			roleInfo.heroTable[0].extraAttr.hit = 0;
			roleInfo.heroTable[0].extraAttr.strategyDefense = 6;
			roleInfo.heroTable[0].extraAttr.strategyAttack = 20;
			roleInfo.heroTable[0].extraAttr.physicsDefense = 2;
			roleInfo.heroTable[0].extraAttr.physicsAttack = 0;
			roleInfo.heroTable[0].extraAttr.lifeRate = 0;
			roleInfo.heroTable[0].extraAttr.life = 0;
			roleInfo.heroTable[0].extraAttr.quickRate = 0;
			roleInfo.heroTable[0].extraAttr.quick = 0;
			roleInfo.heroTable[0].extraAttr.witRate = 0;
			roleInfo.heroTable[0].extraAttr.wit = 0;
			roleInfo.heroTable[0].extraAttr.powerRate = 0;
			roleInfo.heroTable[0].extraAttr.power = 0;
			roleInfo.heroTable[0].talent_1 = -1;
			roleInfo.heroTable[0].quality = 0;
			roleInfo.heroTable[0].experience = 1038;
			roleInfo.heroTable[0].level = 18;
			roleInfo.reputation = 0;
			roleInfo.orangeSoul = 0;
			roleInfo.goldSoul = 0;
			roleInfo.purpleSoul = 0;
			roleInfo.blueSoul = 1630;
			roleInfo.army = 52;
			roleInfo.gift = 50;
			roleInfo.gold = 0;
			roleInfo.silver = 25779;
			roleInfo.country = 0;
			roleInfo.potential = 5133;
			roleInfo.loginTime = "2012-12-14T10:28:45.156Z";
			
			socket.emit("roleInfo", roleInfo);
			socket.emit("enterMap", 0);
			socket.emit("mapRolesInfo", []);
		} else {
			
		}
	});
	socket.on('enterCustoms', function (chapterIndex, customsIndex) {
		console.log("chapterIndex:" + chapterIndex + " customsIndex:" + customsIndex);
		socket.emit("ChapterSystem::initCustoms", chapterIndex, customsIndex);
		socket.emit("enterMap", customsIndex + 1);
	});
	socket.on('goHome', function () {
		socket.emit("enterMap", 0);
	});
	socket.on('customsFight', function (index) {
		var fightInfo = '';
		if(index == 0) {
			fightInfo = '{"fightReports":{"bouts":[[{"side":0,"index":2,"targets":[{"index":0,"hit":true,"targetBlood":-114}]},{"side":1,"index":1,"targets":[{"index":2,"hit":true,"targetBlood":-2}]},{"side":1,"index":0,"targets":[{"index":2,"hit":true,"targetBlood":-2}]}],[{"side":0,"index":2,"skillFight":true,"effects":[],"actions":[],"targets":[{"index":0,"hit":true,"suckBlood":0,"targetBlood":-171}]},{"side":1,"index":1,"skillFight":true,"effects":[],"actions":[],"targets":[{"index":2,"hit":true,"suckBlood":0,"fallBlood":0,"fallBloodBout":0,"targetBlood":-3}]}],[{"side":0,"index":2,"targets":[{"index":1,"hit":true,"targetBlood":-114}]},{"side":1,"index":1,"targets":[{"index":2,"hit":true,"targetBlood":-2}]}],[{"side":0,"index":2,"targets":[{"index":1,"hit":true,"targetBlood":-114}]}]],"sourceConfig":[{"resId":0,"resIds":[],"skillId":1,"morale":50,"life":347,"index":2}],"targetConfig":[{"resId":0,"skillId":1,"boutMorale":50,"morale":50,"life":120,"index":0},{"resId":1,"skillId":2,"boutMorale":50,"morale":50,"life":120,"index":1}],"result":1,"sourceLiveCount":1,"targetLiveCount":0},"monsterAward":{"exp":4,"properties":{"silver":4},"items":[{"resId":10011,"type":1,"unstackList":[{"appendAttrs":{"opposeTyranny":1.7},"resId":10011,"type":1,"attrName":"strategyAttack","attrValue":35,"_id":"50cc42be8e7baff8110009bf","stoneTable":[],"appendValue":0}],"remainCount":0}]}}';
		} else if(index == 1) {
			fightInfo = '{"fightReports":{"bouts":[[{"side":0,"index":2,"targets":[{"index":0,"hit":true,"targetBlood":-114}]},{"side":1,"index":1,"targets":[{"index":2,"hit":true,"targetBlood":-3}]},{"side":1,"index":0,"targets":[{"index":2}]}],[{"side":0,"index":2,"skillFight":true,"effects":[],"actions":[],"targets":[{"index":0,"hit":true,"suckBlood":0,"targetBlood":-171}]},{"side":1,"index":1,"skillFight":true,"effects":[{"side":1,"indexes":[]}],"actions":[],"targets":[{"index":2,"hit":true,"suckBlood":0,"fallBlood":0,"fallBloodBout":0,"targetBlood":-8}]}],[{"side":0,"index":2,"targets":[{"index":1,"hit":true,"targetBlood":-114}]},{"side":1,"index":1,"targets":[{"index":2,"hit":true,"targetBlood":-3}]}],[{"side":0,"index":2,"targets":[{"index":1,"hit":true,"targetBlood":-114}]}]],"sourceConfig":[{"resId":0,"resIds":[],"skillId":1,"morale":50,"life":347,"index":2}],"targetConfig":[{"resId":0,"skillId":1,"boutMorale":50,"morale":50,"life":120,"index":0},{"resId":2,"skillId":3,"boutMorale":50,"morale":50,"life":140,"index":1}],"result":1,"sourceLiveCount":1,"targetLiveCount":0},"monsterAward":{"exp":18,"properties":{"silver":18},"items":[{"resId":10012,"type":1,"unstackList":[{"appendAttrs":{"block":1.6,"blast":1.7},"resId":10012,"type":1,"attrName":"strategyAttack","attrValue":50,"_id":"50cc44518e7baff8110009c0","stoneTable":[],"appendValue":0}],"remainCount":0}]}}';
		} else if(index == 2) {
			fightInfo = '{"fightReports":{"bouts":[[{"side":0,"index":2,"targets":[{"index":0,"hit":true,"targetBlood":-114}]},{"side":1,"index":1,"targets":[{"index":2,"hit":true,"targetBlood":-4}]},{"side":1,"index":0,"targets":[{"index":2,"hit":true,"targetBlood":-2}]}],[{"side":0,"index":2,"skillFight":true,"effects":[],"actions":[],"targets":[{"index":0,"hit":true,"suckBlood":0,"targetBlood":-171}]},{"side":1,"index":1,"skillFight":true,"effects":[],"actions":[],"targets":[{"index":2,"hit":true,"suckBlood":6,"fallBlood":0,"fallBloodBout":0,"targetBlood":-23}]}],[{"side":0,"index":2,"targets":[{"index":1,"hit":true,"targetBlood":-114}]},{"side":1,"index":1,"targets":[{"index":2,"hit":true,"targetBlood":-3}]}],[{"side":0,"index":2,"targets":[{"index":1,"hit":true,"targetBlood":-114}]}]],"sourceConfig":[{"resId":0,"resIds":[],"skillId":1,"morale":50,"life":347,"index":2}],"targetConfig":[{"resId":0,"skillId":1,"boutMorale":50,"morale":50,"life":120,"index":0},{"resId":3,"skillId":4,"boutMorale":50,"morale":50,"life":160,"index":1}],"result":1,"sourceLiveCount":1,"targetLiveCount":0},"monsterAward":{"exp":36,"properties":{"silver":36},"items":[{"resId":10014,"type":1,"unstackList":[{"appendAttrs":{"wit":49,"opposeTyranny":2.9,"power":41},"resId":10014,"type":1,"attrName":"strategyAttack","attrValue":350,"_id":"50cc447d8e7baff8110009c1","stoneTable":[],"appendValue":0}],"remainCount":0}]},"star":2,"finish":true,"customsAward":{"exp":27,"properties":{"silver":25},"items":[{"itemId":10010,"count":1,"odds":50},{"itemId":10011,"count":1,"odds":50},{"itemId":12000,"count":1,"odds":50},{"itemId":12001,"count":1,"odds":50}]}}';
		}
		fightInfo = JSON.parse(fightInfo);
		socket.emit("customsFightResult", fightInfo);
		if(index == 2) {
			socket.emit("ChapterSystem::setFightFinish", 0, 0);
			socket.emit("ChapterSystem::setFightStar", 0, 0, 2);
		}
	});
});