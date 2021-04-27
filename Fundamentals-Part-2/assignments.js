"use strict";

// Functions

/*  function describeCountry(country, population, capitalCity) {
     return (`${country} has ${population} million people and its capital city is ${capitalCity}`);
 }

 const myCountry = describeCountry('India', '130', 'Delhi');
 console.log(myCountry);
 const myPrevCountry = describeCountry('New Zealand', '5.6', 'Wellington');
 console.log(myPrevCountry); */

//Function Declarations vs. Expressions

/*  function percentageOfWorld1(population) {
     return (population / 7900) * 100;
 }

 console.log('India : ' + percentageOfWorld1(1300));

 const percentageOfWorld2 = function (population) {
     return (population / 7900) * 100;
 }

 console.log(`New Zealand : ${percentageOfWorld2(5.5)}`)
 console.log(`China : ${percentageOfWorld2(1441)}`)
 */
// Arrow Functions

/*const percentageOfWorld3 = population => (population / 7900) * 100;

console.log(`India : ${percentageOfWorld3(1300)}`);
console.log(`Canada : ${percentageOfWorld3(590)}`) */

//Functions Calling Other Functions
/*
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

function describePopulation(country, population) {
    const avgPopulation = percentageOfWorld1(population);
    console.log(`${country} has ${population} million people, which is about ${avgPopulation} % of the world.`);
}

describePopulation('India', '1390');
describePopulation('China', '1290');
describePopulation('New Zealand', '5.56'); */

// Introduction to Arrays

let populations = [1300, 123, 44];

console.log(populations.length >= 4 ? true : false);

const percentageOfWorld3 = population => (population / 7900) * 100;
let percentages = [percentageOfWorld3(populations[0]),
percentageOfWorld3(populations[1]),
percentageOfWorld3(populations[2])];

console.log(percentages);

const neighbours = ['Pakistan', 'Nepal', 'China'];

console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country.');
}

neighbours[neighbours.indexOf('China')] = 'China 1';
console.log(neighbours);
