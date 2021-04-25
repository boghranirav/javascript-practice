
//let johnHeight = 1.95, johnMass = 92;
//let markHeight = 1.69, markMass = 78;

let johnHeight = 1.76, johnMass = 85;
let markHeight = 1.88, markMass = 95;

let johnBMI = johnMass / (johnHeight * johnHeight);
let markBMI = markMass / (markHeight * markHeight);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
