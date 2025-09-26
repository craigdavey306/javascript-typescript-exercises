// -- Classes --

abstract class Game {
  protected currentPlayer = 0;
  protected numberOfPlayers: number;

  constructor(numberOfPlayers: number) {
    if (numberOfPlayers <= 0) {
      throw new Error(
        'Must have 1 or more players when instantiating an instance of Game.'
      );
    }

    this.numberOfPlayers = numberOfPlayers;
  }

  abstract start(): void;
  abstract haveWinner(): boolean;
  abstract takeTurn(): void;

  run(): void {
    this.start();
    while (!this.haveWinner()) {
      this.takeTurn();
    }
  }
}

class Chess extends Game {
  private maxTurns = 10;
  private turn: number;

  constructor() {
    super(2);
    this.turn = 1;
  }

  start() {
    console.log(`Starting a game of chess with ${this.numberOfPlayers}`);
  }

  haveWinner(): boolean {
    return this.turn > this.maxTurns;
  }

  takeTurn(): void {
    console.log(`Turn ${this.turn} taken by player ${this.currentPlayer}`);
    this.currentPlayer = (this.currentPlayer + 1) % this.numberOfPlayers;
    this.turn++;
  }
}

const chess = new Chess();
chess.start();

while (!chess.haveWinner()) {
  chess.takeTurn();
}
