// Functions

function describeCountry(country, population, capitalCity) {
    return (`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

const myCountry = describeCountry('India', '130', 'Delhi');
console.log(myCountry);
const myPrevCountry = describeCountry('New Zealand', '5.6', 'Wellington');
console.log(myPrevCountry);
