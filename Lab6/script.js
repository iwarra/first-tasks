// Funktion 1:
const hello = () => console.log('Hello world');

hello();


//Funktion 2:
// name can be without () as well
const greet = (name) => console.log('Hej ' + name + ' hur mår du?');

greet('John');


//Funktion 3:
const calc = (numberOne, numberTwo) => {
return numberOne + numberTwo
};

console.log(calc(1, 10));

//Funktion 4:
const tip = (sum, percent) => {
let total = sum + sum * percent;
return total;
};

console.log(tip(200, 0.2));

