const convertedData = data
  .split(/\n\s*\n/)
  .map((d) => d.split(/\r?\n/))
  .map((el) => el.map((x) => JSON.parse(x)));

let result = [];

function compare(a, b, index) {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (result[index] !== undefined) return;
    const left = a[i];
    const right = b[i];
    if (left === undefined) return result.push(true);
    if (right === undefined) return result.push(false);

    if (Number.isInteger(left) && Number.isInteger(right)) {
      //both numbers
      if (left !== right) {
        return left > right ? result.push(false) : result.push(true);
      }
    } else if (Array.isArray(left) || Array.isArray(right)) {
      //one of them is an array
      compare(
        Array.isArray(left) ? left : [left],
        Array.isArray(right) ? right : [right],
        index
      );
    }
  }
}

convertedData.forEach((el, index) => compare(el[0], el[1], index));
console.log(result);
console.log(
  result
    .map((el, i) => (el ? (el = i + 1) : false))
    .filter((x) => Number.isInteger(x))
    .reduce((pv, cv) => pv + cv, 0)
);
