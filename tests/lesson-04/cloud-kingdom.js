//Cach1
const playerName = "Mario";
const currentLives = 3;
let totalCoins = 0;
const coinsLevel = {
    level1: 25,
    level2: 30,
    level3: 45,
};
for (const level in coinsLevel) {
    totalCoins += coinsLevel[level];
}
const averageCoins = totalCoins / 3;
const remainderCoins = totalCoins % 3;

console.log(totalCoins);
console.log(averageCoins);
console.log(remainderCoins);
//Cach2 
const playerName2 = "Mario";
const currentLives2 = 3;

const level1Coins = 25;
const level2Coins = 30;
const level3Coins = 45;

const totalCoins2 = level1Coins + level2Coins + level3Coins;
const averageCoins2 = totalCoins / 3;
const remainderCoins2 = totalCoins % 3;

console.log(totalCoins);
console.log(averageCoins);
console.log(remainderCoins);