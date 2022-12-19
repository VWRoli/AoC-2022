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
// const data = `$ cd /
// $ ls
// dir a
// 14848514 b.txt
// 8504156 c.dat
// dir d
// $ cd a
// $ ls
// dir e
// 29116 f
// 2557 g
// 62596 h.lst
// $ cd e
// $ ls
// 584 i
// $ cd ..
// $ cd ..
// $ cd d
// $ ls
// 4060174 j
// 8033020 d.log
// 5626152 d.ext
// 7214296 k`;
// console.log(data);
// const convertedData = data.split(/\n\s*\n/).flatMap((d) => d.split(/\r?\n/));
// function Node(data) {
//   this.data = data;
//   this.children = [];
// }

// class Tree {
//   constructor() {
//     this.root = null;
//   }

//   add(data, toNodeData) {
//     const node = new Node(data);
//     const parent = toNodeData ? this.findBFS(toNodeData) : null;

//     if (parent) {
//       parent.children.push(node);
//     } else if (!this.root) {
//       this.root = node;
//     } else {
//       return 'Already exists';
//     }
//   }
//   findBFS(data) {
//     const queue = [this.root];
//     let _node = null;

//     this.traverseBFS((node) => {
//       if (node.data === data) _node = node;
//     });
//     return _node;
//   }
//   traverseBFS(cb) {
//     const queue = [this.root];
//     if (cb) {
//       while (queue.length) {
//         const node = queue.shift();
//         cb(node);

//         for (const child of node.children) queue.push(child);
//       }
//     }
//   }
// }

// let tree = new Tree();
// let currentDir = '/';
// while (convertedData.length > 0) {
//   const line = convertedData.shift(0);

//   const pathName = line.split(' ')[2];
//   if (line === '$ cd /') tree.add({ pathName });
//   if (line.startsWith('1')) {
//     console.log('startwith');
//     tree.add(
//       { name: line.split(' ')[1], size: line.split(' ')[0] },
//       currentDir
//     );
//   }
//   // if (line.startsWith('$ cd') && line !== '$ cd ..') {
//   //   //
//   // }
// }
// console.log(currentDir);
// tree.traverseBFS((node) => console.log(node));

//////////////////////////////////////////////////////////////////////////
/////DAY 10/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const data = `addx 1
noop
addx 5
addx -1
addx 5
addx 1
noop
noop
addx 2
addx 5
addx 2
addx 1
noop
addx -21
addx 26
addx -6
addx 8
noop
noop
addx 7
noop
noop
noop
addx -37
addx 13
addx -6
addx -2
addx 5
addx 25
addx 2
addx -24
addx 2
addx 5
addx 5
noop
noop
addx -2
addx 2
addx 5
addx 2
addx 7
addx -2
noop
addx -8
addx 9
addx -36
noop
noop
addx 5
addx 6
noop
addx 25
addx -24
addx 3
addx -2
noop
addx 3
addx 6
noop
addx 9
addx -8
addx 5
addx 2
addx -7
noop
addx 12
addx -10
addx 11
addx -38
addx 22
addx -15
addx -3
noop
addx 32
addx -25
addx -7
addx 11
addx 5
addx 10
addx -9
addx 17
addx -12
addx 2
noop
addx 2
addx -15
addx 22
noop
noop
noop
addx -35
addx 7
addx 21
addx -25
noop
addx 3
addx 2
noop
addx 7
noop
addx 3
noop
addx 2
addx 9
addx -4
addx -2
addx 5
addx 2
addx -2
noop
addx 7
addx 2
addx -39
addx 2
noop
addx 1
noop
addx 5
addx 24
addx -20
addx 1
addx 5
noop
noop
addx 4
noop
addx 1
noop
addx 4
addx 3
noop
addx 2
noop
noop
addx 1
addx 2
noop
addx 3
noop
noop`;
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
