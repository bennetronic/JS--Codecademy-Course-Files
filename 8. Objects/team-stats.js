// TEAM STATS

const team = {
  _players: [
    {firstName: "Alan", lastName: "Shearer", age: 47},
		{firstName: "Chris", lastName: "Sutton", age: 42},
		{firstName: "David", lastName: "Batty", age: 45},
  ],
  _games: [
    {opponent: "Man Utd", teamPoints: 3, opponentPoints: 0},
    {opponent: "Liverpool", teamPoints: 2, opponentPoints: 1},
    {opponent: "Chelsea", teamPoints: 5, opponentPoints: 1},
  ],

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

	addGame(oppName, myPoints, oppPoints) {
    let game = {
      opponent: oppName,
      points: myPoints,
      opponentPoints: oppPoints
    };

    this.games.push(game);
  }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Arsenal", 5, 0);
team.addGame("Tottenham", 1, 0);
team.addGame("Exeter City", 5, 5);

console.log(team.games)
