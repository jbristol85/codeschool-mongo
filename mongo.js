// -----Database Setup
use myGame
// -----Create Collection, insert 2 documents

db.monsters.insert({
	"name": "Tiger",
	"health": 8,
	"lastFought": "January 12, 2017",
	"attacks": ["bite", "claw", "roar"],
	"stats": {
		"attack": 7,
		"defense": 6
	}
})

db.monsters.insert({ 
	"name": "crocodile",
	"health": 9,
	"lastFought": "November 15, 2017",
	"attacks": ["bite", "death roll", "tail whip"],
	"stats": {
		"attack": 8,
		"defense": 4
	} 
})

function monsters(name, health, lastFought, attacks, stats, db){
	db.monsters.insert({
		"name": "Snake",
		"health": "excellent",
		"lastFought": "January 2, 2018",
		"attacks":["bite", "squeeze", "swallow"],
		"stats":{
			"attack": 10,
			"defence"; 7
		}
	})
	
	console.log(db.monsters.find());  // finds all monsters in the db.
	db.monsters.find({"name":"Tiger"})  // returns a monster named Tiger
	db.monsters.find({"attacks":"bite"}, {"multi": True})  // returns all monsters with an attack of bite
	db.monsters.find({"stats.defence": 7})  //  finds all monsters with a defence of 7