'use strict';

//////////////////////////////////////////////////////////////////////////
///DAY 1///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// const elvesData = data.split(/\n\s*\n/).map((d) => d.split(/\r?\n/));
// //console.log(elvesData);
// const sumCalories = elvesData.map((d) => d.reduce((pv, cv) => +pv + +cv, 0));
// const highest = Math.max(...sumCalories);
// const sortSumCalories = sumCalories.sort((a, b) => b - a);
// //console.log(sumCalories);
// const topThree = sortSumCalories.slice(0, 3).reduce((pv, cv) => pv + cv, 0);
// console.log(topThree);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
/////DAY 2/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// const splitData = data.split(/\n\s*\n/).flatMap((d) => d.split(/\r?\n/));
// console.log(splitData);

// const scores = splitData.map((d) => {
//   const shapeScore = getShapeScore(d.slice(-1));
//   const gameScore = calcGameScore(d);
//   return shapeScore + gameScore;
// });
// console.log(scores.reduce((pv, cv) => pv + cv, 0));

// function getShapeScore(shape) {
//   switch (shape) {
//     case 'X': //lose
//       return 0;

//     case 'Y':
//       return 3; //draw

//     case 'Z':
//       return 6; //win

//     default:
//       return;
//   }
// }

// function calcGameScore(game) {
//   switch (game) {
//     case 'A X':
//       return 3;
//     case 'A Y':
//       return 1;
//     case 'A Z':
//       return 2;

//     case 'B X':
//       return 1;
//     case 'B Y':
//       return 2;
//     case 'B Z':
//       return 3;

//     case 'C X':
//       return 2;
//     case 'C Y':
//       return 3;
//     case 'C Z':
//       return 1;

//     default:
//       return;
//   }
// }
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
/////DAY 3/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// const splitData = data.split(/\n\s*\n/).flatMap((d) => d.split(/\r?\n/));
// //console.log(splitData);
// const separateStr = splitData.map((s) => {
//   const strHalf = s.length / 2;
//   const firstHalf = s.substring(0, strHalf);
//   const secondHalf = s.substring(strHalf);
//   return [firstHalf, secondHalf];
// });
// // //console.log(separateStr);
// const commonChar = separateStr.flatMap((arr) => getCommonChars(arr[0], arr[1]));

// // console.log(commonChar);
// function getCommonChars(str1, str2) {
//   const set1 = new Set(str1.split(''));
//   const set2 = new Set(str2.split(''));
//   const result = [];

//   for (let char of set1.values()) {
//     if (set2.has(char)) result.push(char);
//   }

//   return result;
// }
// const letters = (() => {
//   const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
//   return [...caps.map((letter) => letter.toLowerCase()), ...caps];
// })();
// //console.log(letters);

// const res = commonChar.map((c) => {
//   const priority = letters.findIndex((e) => e === c);
//   return priority + 1;
// });

// console.log(res);
// // console.log(res.reduce((pv, cv) => pv + cv, 0));

// const groups = [];
// const size = 3;

// for (let i = 0; i < splitData.length; i += size)
//   groups.push(splitData.slice(i, i + size));
// //console.log(groups);

// const arr = groups.map((el) =>
//   el.map((x) => x.split('')).sort((a, b) => a.length - b.length)
// );
// //console.log(arr);

// const commons = arr.flatMap((el) =>
//   el.shift().reduce((pv, cv) => {
//     if (pv.indexOf(cv) === -1 && el.every((a) => a.indexOf(cv) !== -1))
//       pv.push(cv);
//     return pv;
//   }, [])
// );
// console.log(commons);

// const res2 = commons.map((c) => {
//   const priority = letters.findIndex((e) => e === c);
//   return priority + 1;
// });
// console.log(res2.reduce((pv, cv) => pv + cv, 0));

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
/////DAY 4/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// document.write(`60-60,45-60
//   36-57,7-36
//   2-32,1-55
//   1-30,6-75
//   12-13,13-90
//   48-98,48-98`);
// const splitData = data
//   .split(/\n\s*\n/)
//   .flatMap((d) => d.split(/\r?\n/))
//   .map((el) => el.split(','))
//   .map((el) => el.map((x) => range(+x.split('-')[0], +x.split('-')[1])));

// console.log(splitData);

// function range(start, end) {
//   return Array(end - start + 1)
//     .fill()
//     .map((_, idx) => start + idx);
// }

// const filterData = splitData.map((el) => {
//   return el[0].filter((value) => el[1].includes(value));
// });
// console.log(filterData.filter((el) => el.length).length);
// const filterData = splitData.map((el) => {
//   const sortedArr = el.sort((a, b) => b.length - a.length);
//   const longArr = sortedArr[0];
//   const shortArr = sortedArr[1];
//   const tmp = [...sortedArr[1]];
//   for (let i = 0; i < shortArr.length; i++) {
//     if (longArr.includes(shortArr[i])) {
//       tmp.shift();
//     }
//   }

//   return tmp;
// });
// console.log(filterData.filter((el) => !el.length).length);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
/////DAY 5/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// const splitData = data.split(/\n\s*\n/).flatMap((d) => d.split(/\r?\n/));

// const startObject = {
//   1: ['z', 'p', 'm', 'h', 'r'],
//   2: ['p', 'c', 'j', 'b'],
//   3: ['s', 'n', 'h', 'g', 'l', 'c', 'd'],
//   4: ['f', 't', 'm', 'd', 'q', 's', 'r', 'l'],
//   5: ['f', 's', 'p', 'q', 'b', 't', 'z', 'm'],
//   6: ['t', 'f', 's', 'z', 'b', 'g'],
//   7: ['n', 'r', 'v'],
//   8: ['p', 'g', 'l', 't', 'd', 'v', 'c', 'm'],
//   9: ['w', 'q', 'n', 'j', 'f', 'm', 'l'],
// };

// console.log(splitData);

// function moveCrates(command) {
//   const amount = +command.split(' ')[1];
//   const fromNr = +command.split(' ')[3];
//   const toNr = +command.split(' ')[5];
//   // console.log(amount, fromNr, toNr);
//   // for (let i = 0; i < amount; i++) {
//   //   const crate = startObject[fromNr].pop();
//   //   startObject[toNr].push(crate);
//   // }
//   const crates = startObject[fromNr].splice(
//   // for (let i = 0; i < amount; i++) {
//   //   const crate = startObject[fromNr].pop();
//   //   startObject[toNr].push(crate);
//   // }
//   const crates = startObject[fromNr].splice(
//     startObject[fromNr].length - amount,
//     amount
//   );
//   //console.log(crates);
//   startObject[toNr].push(...crates);
// }
// const res = splitData.forEach((move) => {
//   moveCrates(move);
// });
// console.log(startObject);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
/////DAY 6/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//console.log(data);
//const data = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;
// console.log(data);

// let arr = [];
// for (let i = 0; i < data.length; i++) {
//   arr.push(data[i]);
//   console.log(arr);
//   if (i >= 13) {
//     //const comparison = [data[i - 3], data2[i - 2], data2[i - 1], data2[i]];
//     const set = new Set(arr);

//     //console.log(comparison, i + 1, set.size);
//     if (arr.length === set.size) {
//       console.log(i + 1);
//       break;
//     }
//     arr.shift();
//   }
// }

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
/////DAY 7/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//console.log(data);
// const clearData = data
//   .split(/\n\s*\n/)
//   .flatMap((d) => d.split(/\r?\n/))
//   .filter((line) => !line.startsWith('$ ls') && !line.startsWith('dir'));

// console.log(clearData);
// let dirStructure;
// for (let i = 0; i < clearData.length; i++) {}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
/////DAY 8/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// const convertedData = data
//   .split(/\n\s*\n/)
//   .flatMap((d) => d.split(/\r?\n/))
//   .map((el) => el.split(''));
// console.log(convertedData);
// let count = 0;
// let scores = [];
// for (let i = 0; i < convertedData.length; i++) {
//   // if (i === 0) count += convertedData[i].length;
//   // if (i === convertedData[i].length - 1) count += convertedData[i].length;
//   const tallest = Math.max(...convertedData[i]);
//   //console.log(tallest);
//   for (let j = 0; j < convertedData[i].length; j++) {
//     //console.log(convertedData[i][j], i, j);

//     if (
//       i === 0 ||
//       i === convertedData.length - 1 ||
//       j === 0 ||
//       j === convertedData[i].length - 1
//     ) {
//       count++;
//     } else {
//       const column = getColumn(j);
//       const row = convertedData[i];
//       const value = +convertedData[i][j];
//       const right = row.slice(j + 1);
//       const left = row.slice(0, j).reverse();
//       const top = column.slice(0, i).reverse();
//       const bottom = column.slice(i + 1);

//       const rightScore = getScore(right, value);
//       const leftScore = getScore(left, value);
//       const topScore = getScore(top, value);
//       const bottomScore = getScore(bottom, value);
//       // console.log(value);
//       // console.log(top);
//       // console.log('bottom', bottom);
//       // console.log('top', top);
//       // console.log(
//       //   'bottom index',
//       //   bottom.findIndex((el) => +el >= value)
//       // );
//       const scenicScore = rightScore * leftScore * topScore * bottomScore;
//       //console.log(rightScore, leftScore, topScore, bottomScore);
//       scores.push(scenicScore);
//       //console.log(value, rightScore);
//       // const visibleFromLeft = Math.max(...left) < value;
//       // const visibleFromRight = Math.max(...right) < value;
//       // const visibleFromTop = Math.max(...top) < value;
//       // const visibleFromBottom = Math.max(...bottom) < value;

//       // if (
//       //   visibleFromBottom ||
//       //   visibleFromLeft ||
//       //   visibleFromRight ||
//       //   visibleFromTop
//       // )
//       //   count++;
//     }
//     function getScore(arr, value) {
//       const score = arr.findIndex((el) => +el >= value);
//       // console.log(score);
//       if (score === -1) {
//         return arr.length;
//       } else {
//         return score + 1;
//       }
//     }
//     function getColumn(n) {
//       return convertedData.map((x) => x[n]);
//     }
//   }
// }
// console.log(scores.sort((a, b) => b - a));
// console.log(count);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
/////DAY 9/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const data = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`;

const convertedData = data.split(/\n\s*\n/).flatMap((d) => d.split(/\r?\n/));

//const head = [0, 0];
//let tail = [0, 0];
let tailPositions = [];
let rope = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
];
for (let i = 0; i < convertedData.length; i++) {
  let movements = convertedData[i].split(' ')[1];

  const direction = convertedData[i].charAt(0);
  while (movements > 0) {
    rope[0] = updateHead(rope[0], direction);

    movements--;
    for (let j = 1; j < rope.length; j++) {
      rope[j] = updateTail(rope[j - 1], rope[j]);
      tailPositions.push(`[${updateTail(rope[9 - 1], rope[9])}]`);
    }
    // tail = updateTail(newHead, tail);
  }
}
console.log(rope);

console.log(new Set(tailPositions));
function updateTail(head, tail) {
  // const headStr = `[${head}]`;
  // const tailStr = `[${tail}]`;
  const distance = `[${head[0] - tail[0]},${head[1] - tail[1]}]`;
  //console.log(tail, head, distance);
  const changeForTail = {
    '[0,2]': [0, 1], //2up
    '[1,2]': [1, 1], //1r, 2up
    '[2,1]': [1, 1],
    '[2,0]': [1, 0], //2r
    '[2,-1]': [1, -1], //2r, 1down
    '[1,-2]': [1, -1], //
    '[0,-2]': [0, -1], //2down
    '[-1,-2]': [-1, -1],
    '[-2,-1]': [-1, -1],
    '[-2,0]': [-1, 0], //2left
    '[-2,1]': [-1, 1],
    '[-1,2]': [-1, 1],
    //added for part2
    '[2,2]': [1, 1],
    '[2,-2]': [1, -1],
    '[-2,-2]': [-1, -1],
    '[-2,2]': [-1, 1],
  };
  let newTailPos;
  if (changeForTail[distance]) {
    //calc
    const coords = changeForTail[distance];
    newTailPos = [tail[0] + coords[0], tail[1] + coords[1]];
  } else {
    newTailPos = tail;
  }
  //todo tailPositions.push(`[${newTailPos}]`);
  // console.log(newTailPos);
  return newTailPos;
}
function updateHead(head, dir) {
  switch (dir) {
    case 'R':
      head[0] += 1;
      return head;
    case 'L':
      head[0] -= 1;
      return head;
    case 'U':
      head[1] += 1;
      return head;
    case 'D':
      head[1] -= 1;
      return head;

    default:
      return head;
  }
}
