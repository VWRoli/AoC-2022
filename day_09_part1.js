const data = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

const convertedData = data.split(/\n\s*\n/).flatMap((d) => d.split(/\r?\n/));

const head = [0, 0];
let tail = [0, 0];
let tailPositions = [];

for (let i = 0; i < convertedData.length; i++) {
  let movements = convertedData[i].split(' ')[1];

  const direction = convertedData[i].charAt(0);
  while (movements > 0) {
    let newHead = updateHead(head, direction);
    movements--;
    tail = updateTail(newHead, tail);
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
  };
  let newTailPos;
  if (changeForTail[distance]) {
    //calc
    const coords = changeForTail[distance];
    newTailPos = [tail[0] + coords[0], tail[1] + coords[1]];
  } else {
    newTailPos = tail;
  }
  tailPositions.push(`[${newTailPos}]`);
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
