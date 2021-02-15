 const team = {
 	_players: [
 	{
  		firstName: 'Pablo',
  		lastName: 'Sanchez',
  		age: 11
	},
	{
		firstName: 'Mario',
  		lastName: 'Gomez',
  		age: 13	
	},
	{
		firstName: 'Dolan',
  		lastName: 'Trumpet',
  		age: 12
	}],
 	_games: [
 	{
 		opponent: 'Broncos',
 		teamPoints: 42,
 		opponentPoints: 27
 	},
 	{
 		opponent: 'Luniki',
 		teamPoints: 39,
 		opponentPoints: 37
 	},
 	{
 		opponent: 'Wisznia',
 		teamPoints: 38,
 		opponentPoints: 45
 	}],
 	get players() {
 		return this._players;
 	},
 	get games() {
 		return this._games;
 	},
 	addPlayer(firstName, lastName, age) {
 		let player = {
 			firstName: firstName,
 			lastName: lastName,
 			age: age
 		};
 		this.players.push(player);
 	},
 	addGame(opponent, teamPoints, opponentPoints) {
 		let game = {
 			opponent: opponent,
 			teamPoints: teamPoints,
 			opponentPoints: opponentPoints
 		};
 		this.games.push(game);
 	}

 };
 team.addPlayer('Stephen', 'Curry', 28);
 team.addPlayer('Lisa', 'Leslie', 44);
 team.addPlayer('Bugs', 'Bunny', 76);

 team.addGame('Titans', 100, 98);
 team.addGame('Bugs', 56, 12);
 team.addGame('Little', 13, 18);


console.log(team.players);
console.log(team.games);
