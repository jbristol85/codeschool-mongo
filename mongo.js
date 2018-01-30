// -----Database Setup
use myGame
// -----Create Collection, insert 2 documents

db.monsters.insert({
	"name": "Tiger",
	"health": 8,
	"lastFought": new Date(2016, 9, 1),
	"attacks": ["bite", "claw", "roar"],
	"stats": {
		"attack": 7,
		"defense": 6
	}
})

db.monsters.insert({ 
	"name": "crocodile",
	"health": 9,
	"lastFought": new Date(2015, 2, 24),
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
		"lastFought": new Date(2017, 5, 20),
		"attacks":["bite", "squeeze", "swallow"],
		"stats":{
			"attack": 10,
			"defence": 7
		}
	})
	
	console.log(db.monsters.find());  // finds all monsters in the db.
	db.monsters.find({"name":"Tiger"})  // returns a monster named Tiger
	db.monsters.find({"attacks":"bite"}, {"multi": true})  // returns all monsters with an attack of bite
	db.monsters.find({"stats.defence": 7})  //  finds all monsters with a defence of 7
	
	// ------ Level 3
	
	var mongo = function(db){
		db.monsters.find({"stats.attack":{"$lt":10}},{"multi":true}) //find all monsters with attack less then 10
		db.monsters.find({"levels":{"$gte": 5, "$lte": 10}}, {"multi":true})  // find all monsters with level greater than or equal to 5 and less then or equal to  10
		db.monsters.find({"attacks":{"$ne":"bite"}},{"multi":true}) // find monsters without an attack "bite"
		db.monsters.find({"level":{"lt":6}},{"name": true, "level": true, "health": true, "_id": false}) //find monsters with levels less than 6, returning only name, level, and health
		db.monsters.find({"stats.attack":{"$gt":10, "$lt":20}}, {"health": false, "style":false}, {"multi":true})// find all monsters who attack is between 10 and 20 but do not include the monsters health or style
		db.monsters.find().count() //counts the number of documents in the collection
		db.monsters.find().sort({"level":-1})  // will sort the collection by level highest at the top.
		
	};
	
