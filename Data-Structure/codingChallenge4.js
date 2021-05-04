"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const inputData = document.querySelector("textarea").value.split("\n");

  for (const [i, row] of inputData.entries()) {
    let [firstValue, secondValue] = row.toLowerCase().trim().split("_");
    secondValue =
      secondValue[0].toUpperCase() + secondValue.slice(1).toLowerCase();
    let joinValue = firstValue.toLowerCase() + secondValue;

    console.log(`${joinValue.padEnd(25)} ${"✅".repeat(i + 1)}`);
  }
});
