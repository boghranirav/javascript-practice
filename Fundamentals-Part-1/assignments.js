/*
//Values and Variables

let country = 'India';
let continent = 'Asia';
let population = 130;

console.log(country);
console.log(continent);
console.log(population);

// Data Types

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);

// let, const and var

language = 'Gujarati';
const country = 'India';
const continent = 'Asia';
const isIsland = false;
//isIsland = true;


// Basic Operators
const country = 'India';
const continent = 'Asia';
let language = 'Hindi';
let population = 130;
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

const description = country + ' is in ' + continent + ' and its ' + population + ' million People speaks ' + language;
console.log(description);

//Strings and Template Literals
const newDescription = `${country} is in ${continent} and its ${population} million People speaks ${language}`;
console.log(newDescription);


//Logical Operators
const country = 'India';
const population = '130';
const isIand = false;
const language = 'Hindi';

if (language === 'English' && !isIand && population < 50) {
    console.log(`You should live in ${country}`);
}
else {
    console.log(`${country} does not meet your criteria.`);
}
*/

//The switch Statement

const language = 'english';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}