const data = `30373
25512
65332
33549
35390`;
const convertedData = data
  .split(/\n\s*\n/)
  .flatMap((d) => d.split(/\r?\n/))
  .map((el) => el.split(''));

let count = 0;
let scores = [];
for (let i = 0; i < convertedData.length; i++) {
  for (let j = 0; j < convertedData[i].length; j++) {
    if (
      i === 0 ||
      i === convertedData.length - 1 ||
      j === 0 ||
      j === convertedData[i].length - 1
    ) {
      count++;
    } else {
      const column = getColumn(j);
      const row = convertedData[i];
      const value = +convertedData[i][j];
      const right = row.slice(j + 1);
      const left = row.slice(0, j).reverse();
      const top = column.slice(0, i).reverse();
      const bottom = column.slice(i + 1);

      const visibleFromLeft = Math.max(...left) < value;
      const visibleFromRight = Math.max(...right) < value;
      const visibleFromTop = Math.max(...top) < value;
      const visibleFromBottom = Math.max(...bottom) < value;

      if (
        visibleFromBottom ||
        visibleFromLeft ||
        visibleFromRight ||
        visibleFromTop
      )
        count++;
    }
    function getScore(arr, value) {
      const score = arr.findIndex((el) => +el >= value);

      if (score === -1) {
        return arr.length;
      } else {
        return score + 1;
      }
    }
    function getColumn(n) {
      return convertedData.map((x) => x[n]);
    }
  }
}

console.log(count);
