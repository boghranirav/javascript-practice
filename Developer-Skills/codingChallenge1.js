/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data2:[12,5,-5,0,4]
*/

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `...${arr[i]}\u2103 in ${i + 1} days`;
  }
  str += '...';
  console.log(str);
};

const temArray1 = [17, 21, 23];
const temArray2 = [12, 5, -5, 0, 4];
console.log('----------Data 1');
printForecast(temArray1);
console.log('----------Data 2');
printForecast(temArray2);
