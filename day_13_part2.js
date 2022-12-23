const convertedData = data
  .split(/\n\s*\n/)
  .map((d) => d.split(/\r?\n/))
  .map((el) => el.map((x) => JSON.parse(x)))
  .flat();
convertedData.push([[2]]);
convertedData.push([[6]]);

const sortedAData = convertedData
  .sort((a, b) => {
    const res = compare(a, b);
    if (res) {
      return -1;
    } else if (!res) {
      return 1;
    } else {
      return null;
    }
  })
  .map((x) => JSON.stringify(x));

const index2 = sortedAData.findIndex((el) => el === '[[2]]') + 1;
const index6 = sortedAData.findIndex((el) => el === '[[6]]') + 1;
console.log(sortedAData.length);
console.log({ sortedAData });
console.log(index2 * index6);

function compare(a, b) {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const left = a[i];
    const right = b[i];
    if (left === undefined) return true;
    if (right === undefined) return false;

    if (Number.isInteger(left) && Number.isInteger(right)) {
      //both numbers
      if (left !== right) {
        return left > right ? false : true;
      }
    } else if (Array.isArray(left) || Array.isArray(right)) {
      //one of them is an array
      const comparison = compare(
        Array.isArray(left) ? left : [left],
        Array.isArray(right) ? right : [right]
      );
      if (comparison !== null) {
        return comparison;
      }
    }
  }
  return null;
}
