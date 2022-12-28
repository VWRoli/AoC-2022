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
// let currentPath = '/';
// while (convertedData.length > 0) {
//   const line = convertedData.shift(0);

//   const pathName = line.split(' ')[2];
//   if (line === '$ cd /') tree.add({ pathName });
//   if (line.startsWith('1')) {
//     console.log('startwith');
//     tree.add(
//       { name: line.split(' ')[1], size: line.split(' ')[0] },
//       currentPath
//     );
//   }
//   // if (line.startsWith('$ cd') && line !== '$ cd ..') {
//   //   //
//   // }
// }
// console.log(currentPath);
// tree.traverseBFS((node) => console.log(node));

//////////////////////////////////////////////////////////////////////////
/////DAY 12/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// const data = `Sabqponm
// abcryxxl
// accszExk
// acctuvwj
// abdefghi`;//////////////////////////////////////////////////////
// const data = `Sabqponm
// abcryxxl
// accszExk
// acctuvwj
// abdefghi`;
// const convertedData = data
//   .split(/\n\s*\n/)
//   .flatMap((d) => d.split(/\r?\n/))
//   .map((x) => x.split(''));
// console.log(convertedData);

// let startPos;
// let endPos;

// for (let i = 0; i < convertedData.length; i++) {
//   for (let j = 0; j < convertedData[i].length; j++) {
//     if (convertedData[i][j] === 'S') {
//       startPos = [i, j];
//       convertedData[i][j] = 'a';
//     }
//     if (convertedData[i][j] === 'E') {
//       endPos = [i, j];
//       convertedData[i][j] = 'z';
//     }
//     convertedData[i][j] = convertedData[i][j].charCodeAt();
//   }
// }
// console.log(startPos, endPos);
// console.log(heuristic(startPos, endPos));
// function heuristic(position0, position1) {
//   let d1 = Math.abs(position1[0] - position0[0]);
//   let d2 = Math.abs(position1[1] - position0[1]);

//   return d1 + d2;
// }

//////////////////////////////////////////////////////////////////////////
/////DAY 13/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
const data = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`;

const convertedData = data
  .split(/\n\s*\n/)
  .flatMap((d) => d.split(/\r?\n/))
  .map((x) => x.split(''));

let startPos;
let endPos;
let openSet = []; //array containing unevaluated grid points
let closedSet = []; //array containing completely evaluated grid points
let path = [];

function GridPoint(x, y, value) {
  this.x = x;
  this.y = y;
  this.value = value;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.neighbors = [];
  this.parent = undefined;

  this.updateNeighbors = function (grid) {
    let i = this.x;
    let j = this.y;

    const cols = grid[0].length;
    const rows = grid.length;
    const currentValue = grid[i][j].value;
    if (i < rows - 1) {
      const neighborValue = grid[i + 1][j].value;
      if (neighborValue <= currentValue + 1) {
        this.neighbors.push(grid[i + 1][j]);
      }
    }
    if (i > 0) {
      const neighborValue = grid[i - 1][j].value;
      if (neighborValue <= currentValue + 1) {
        this.neighbors.push(grid[i - 1][j]);
      }
    }
    if (j < cols - 1) {
      const neighborValue = grid[i][j + 1].value;
      if (neighborValue <= currentValue + 1) {
        this.neighbors.push(grid[i][j + 1]);
      }
    }
    if (j > 0) {
      const neighborValue = grid[i][j - 1].value;
      if (neighborValue <= currentValue + 1) {
        this.neighbors.push(grid[i][j - 1]);
      }
    }
  };
}

function init(grid) {
  const cols = grid[0].length;
  const rows = grid.length;
  let start, end;

  //find start and endpos
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (convertedData[i][j] === 'S') {
        start = [i, j];
        convertedData[i][j] = 'a';
      }
      if (convertedData[i][j] === 'E') {
        end = [i, j];
        convertedData[i][j] = 'z';
      }
    }
  }
  //convert to charcodes
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = grid[i][j].charCodeAt();
    }
  }

  //convert to gridpoint
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j] = new GridPoint(i, j, grid[i][j]);
    }
  }
  console.log(grid.map((el) => el.map((x) => x.value)));
  //update neigbors
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j].updateNeighbors(grid);
    }
  }
  startPos = grid[start[0]][start[1]];
  endPos = grid[end[0]][end[1]];
  openSet.push(startPos);
}

function heuristic(position0, position1) {
  let d1 = Math.abs(position1.x - position0.x);
  let d2 = Math.abs(position1.y - position0.y);

  return d1 + d2;
}

function search() {
  init(convertedData);

  while (openSet.length > 0) {
    let lowestIndex = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[lowestIndex].f) {
        lowestIndex = i;
      }
    }
    let current = openSet[lowestIndex];

    if (current === endPos) {
      let temp = current;
      path.push(temp);
      while (temp.parent) {
        path.push(temp.parent);
        temp = temp.parent;
      }
      console.log('Done');
      return path.reverse();
    }

    openSet.splice(lowestIndex, 1);

    closedSet.push(current);

    let neighbors = current.neighbors;

    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      if (!closedSet.includes(neighbor)) {
        let possibleG = current.g + 1;

        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        } else if (possibleG >= neighbor.g) {
          continue;
        }

        neighbor.g = possibleG;
        neighbor.h = heuristic(neighbor, endPos);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = current;
      }
    }
  }
  return [];
}
console.log(openSet);
console.log(convertedData);

console.log(search());
