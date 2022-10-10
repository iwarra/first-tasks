// 1. Array task
// 1.1
const fantasyTeam = [
  {name: 'Kevin Durant', age: 34, height: 2.07},
  {name: 'Nikola Jokic', age: 27, height: 2.13},
  {name: 'LeBron James', age: 37, height: 2.01},
  {name: 'Stephen Curry', age: 34, height: 1.91},
  {name: 'Michael Jordan', age: 59, height: 1.96},
  {name: 'Ty Lawson', age: 34, height: 1.8},
  {name: 'Dwyane Wade', age: 40, height: 1.91},
  {name: 'Yuta Tabuse', age: 42, height: 1.75}
];

// 1.2
let reservePlayers = [
  {name: 'Vlade Divac', age: 54, height: 2.17},
  {name: 'Allen Iverson', age: 47, height: 1.83},
  {name: 'Dirk Nowitzki', age: 44, height: 2.13},
  {name: "Shaquille O'Neal", age: 34, height: 2.16},
];

// 1.3
reservePlayers = [...reservePlayers, ...fantasyTeam];
// eller reservePlayers.push(...fantasyTeam); valde först pga immutable data

// 1.4
const tallestPlayers = [];
reservePlayers.filter( player => {
  if (player.height > 2) {
    tallestPlayers.push(player)
  }
})

// 1.5
tallestPlayers.forEach( player => console.log(player) )


// 2. Switch
// 2.1 
const names = ['Nisse', 'Per', 'Johannes', 'Joakim', 'Hans'];
let pickName = Math.floor(Math.random() * 5);

 switch (pickName) {
  case 0: 
    console.log(names[0]);
    break;
  case 1: 
    console.log(names[1]);
    break;
  case 2: 
    console.log(names[2]);
    break;
  case 3: 
    console.log(names[3]);
    break;
  default: 
    console.log(names[4]);
 }

// 2.2
const cities = ['Umeå', 'Stockholm', 'Mora', 'Västerås', 'Göteborg', 'Malmö'];

function pickCity() {
  let output = Math.floor(Math.random() * 21);

  return 0 == output ? "0" :
  [1,2,3,4,5].includes(output) ? "1-5" :
  [6,7,8,9].includes(output) ? "6-9" :
  [10,11,12,13,14].includes(output) ? "10-14" :
  [15,16,17,18,19].includes(output) ? "15-19" :
  "20"
}

switch (pickCity()) {
  case "0": 
    console.log(cities[0]);
    break;
  case "1-5":
    console.log(cities[1]);
    break;
  case "6-9":
    console.log(cities[2]);
    break;
  case "10-14":
    console.log(cities[3]);
    break;
  case "15-19":
    console.log(cities[4]);
    break;
  default:
  console.log(cities[5]);
}

/* switch statement utan funktion 
switch (output) {
  case 0:
    console.log(cities[0]);
    break;
  case 1: 
  case 2: 
  case 3: 
  case 4: 
  case 5:
    console.log(cities[1]);
    break;
  case 6: 
  case 7: 
  case 8: 
  case 9:
    console.log(cities[2]);
    break;
  case 10: 
  case 11: 
  case 12: 
  case 13: 
  case 14:  
    console.log(cities[3]);
    break;
  case 15: 
  case 16: 
  case 17: 
  case 18: 
  case 19:
    console.log(cities[4]);
    break;
  default:
    console.log(cities[5]);
} */

