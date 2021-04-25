
let johnHeight = 1.95, johnMass = 92;
let markHeight = 1.69, markMass = 78;

let johnBMI = johnMass / (johnHeight * johnHeight);
let markBMI = markMass / (markHeight * markHeight);

let markHigherBMI = markBMI > johnBMI;
console.log(johnBMI, markBMI, markHigherBMI);

johnHeight = 1.76, johnMass = 85;
markHeight = 1.88, markMass = 95;

johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * markHeight);

markHigherBMI = markBMI > johnBMI;
console.log(johnBMI, markBMI, markHigherBMI);
