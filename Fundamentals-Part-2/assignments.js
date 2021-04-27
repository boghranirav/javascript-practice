'use strict'

// Functions

// function describeCountry(country, population, capitalCity) {
//     return (`${country} has ${population} million people and its capital city is ${capitalCity}`);
// }

// const myCountry = describeCountry('India', '130', 'Delhi');
// console.log(myCountry);
// const myPrevCountry = describeCountry('New Zealand', '5.6', 'Wellington');
// console.log(myPrevCountry);

//Function Declarations vs. Expressions

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

console.log('India : ' + percentageOfWorld1(1300));

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

console.log(`New Zealand : ${percentageOfWorld2(5.5)}`)
console.log(`China : ${percentageOfWorld2(1441)}`)
