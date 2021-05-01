"use strict";

function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;

    output = "NEW OUTPUT";

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Abc";
      console.log(output);
      const str = `Oh, and you're a Millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(millenial);
    console.log(output);
    //console.log(add(2, 3));
  }
  printAge();
  return age;
}

const firstName = "Nirav";
calcAge(1994);

//printAge();
