const convertedData = data.split(/\n\s*\n/).flatMap((d) => d.split(/\r?\n/));
console.log(convertedData);
let value = 1;
let signalStrength = [];
let count = 0;
for (let i = 0; i < convertedData.length; i++) {
  const line = convertedData[i];
  if (line !== 'noop') {
    for (let j = 0; j < 2; j++) {
      count++;
      if (
        count === 20 ||
        count === 60 ||
        count === 100 ||
        count === 140 ||
        count === 180 ||
        count === 220
      ) {
        signalStrength.push(value * count);
      }
      if (j > 0) {
        const lineValue = +line.split(' ')[1];

        value += lineValue;
      }
    }
  } else {
    count++;
    if (
      count === 20 ||
      count === 60 ||
      count === 100 ||
      count === 140 ||
      count === 180 ||
      count === 220
    ) {
      signalStrength.push(value * count);
    }
  }
}
console.log(signalStrength.reduce((pv, cv) => pv + cv, 0));
