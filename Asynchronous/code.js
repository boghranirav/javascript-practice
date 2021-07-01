function minimumDistance(area) {
  // Write your code here
  let dist = 0;
  console.log(area);
  for (let i = 0; i < area.count - 1; i++) {
    for (let j = o; j < area[i].count; j++) {
      if (area[i][j] != 1) {
        break;
      }
      if (area[i][j] == 9) {
        return dist;
      } else if (area[i][j] == 1) {
        dist++;
      }
    }
  }
  return dist;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const areaRows = parseInt(readLine().trim(), 10);

  const areaColumns = parseInt(readLine().trim(), 10);

  let area = Array(areaRows);

  for (let i = 0; i < areaRows; i++) {
    area[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((areaTemp) => parseInt(areaTemp, 10));
  }

  const result = minimumDistance(area);
  console.log(area);
  ws.write(result + "\n");

  ws.end();
}

main();
