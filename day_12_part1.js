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
