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

      const rightScore = getScore(right, value);
      const leftScore = getScore(left, value);
      const topScore = getScore(top, value);
      const bottomScore = getScore(bottom, value);

      const scenicScore = rightScore * leftScore * topScore * bottomScore;

      scores.push(scenicScore);
    }
    function getScore(arr, value) {
      const score = arr.findIndex((el) => +el >= value);
      // console.log(score);
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
console.log(scores.sort((a, b) => b - a));
