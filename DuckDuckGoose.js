/**
 * DESCRIPTION:
The objective of Duck, duck, goose is to walk in a circle,
 tapping on each player's head until one is chosen.
 */

function duckDuckGoose(players, goose) {
    let idx = goose;

    while (idx > players.length) {
        idx = idx - players.length;
    }
    return players[idx - 1].name;
}

class Player {
    constructor(name) {
        this.name = name;
    }
}

let ex_names = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'z'];
let players = ex_names.map((n) => new Player(n));

console.log(duckDuckGoose(players, 28));
