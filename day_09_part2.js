const data = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`;

const convertedData = data.split(/\n\s*\n/).flatMap((d) => d.split(/\r?\n/));

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
  }
}

console.log(new Set(tailPositions));
function updateTail(head, tail) {
  const distance = `[${head[0] - tail[0]},${head[1] - tail[1]}]`;

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
