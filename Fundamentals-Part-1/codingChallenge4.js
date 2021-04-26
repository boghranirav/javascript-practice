const billAmount = 430;
let tipAmount;

tipAmount = billAmount >= 50 && billAmount <= 300 ? (billAmount * 15) / 100 :
    (billAmount * 20) / 100;

console.log(`The bill was ${billAmount}, the tip was ${tipAmount}, and the total value ${billAmount + tipAmount}`);
