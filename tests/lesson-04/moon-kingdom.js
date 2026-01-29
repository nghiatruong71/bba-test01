// bai1
function createCharacters() {
    const characters = [
        { name: "nghia", level: 23, health: 534 },
        { name: "nhan", level: 13, health: 44 },
        { name: "kiet", level: 41, health: 10 }
    ];
    const charactersPowerUp = characters.map(c => {
        return {
            name: c.name.toUpperCase(),
            level: c.level * 2,
            health: c.health * 3,
        };
    });
    const possibleWinners = charactersPowerUp.filter(hea => hea.health > 1000);
    console.log(charactersPowerUp);
    console.log(possibleWinners);
}
createCharacters();
// bai 2
const players = [
    { name: "Mario", score: 1000 },
    { name: "Nam", score: 500 },
    { name: "Lucie", score: 850 }
];

function printLeaderboard(players) {
    players.sort((a, b) => b.score - a.score);

    players.forEach((player, index) => {
        let medal = "";

        if (index === 0) medal = "Vang ";
        else if (index === 1) medal = "Bac ";
        else if (index === 2) medal = "Dong ";

        console.log(
            `${medal}${index + 1}. ${player.name} - ${player.score} pts`
        );
    });
}

printLeaderboard(players);


