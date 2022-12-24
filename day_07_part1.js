const convertedData = data
  .split(/\n\s*\n/)
  .flatMap((d) => d.split(/\r?\n/))
  .filter((el) => el !== '$ ls');

function Node(data) {
  this.name = data.name;
  this.size = data.size;
  this.isDir = data.isDir;
  this.parent = data.parent;
  this.children = [];
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(data, toNodeData) {
    const node = new Node(data);

    if (toNodeData) {
      toNodeData.children.push(node);
    } else if (!this.root) {
      this.root = node;
    } else {
      return 'Already exists';
    }
  }
  findBFS(data) {
    let _node = null;

    this.traverseBFS((node) => {
      if (node.name === data) _node = node;
    });
    return _node;
  }
  traverseBFS(cb) {
    const queue = [this.root];
    if (cb) {
      while (queue.length) {
        const node = queue.shift();
        cb(node);

        for (const child of node.children) queue.push(child);
      }
    }
  }
}

let tree = new Tree();
tree.add({ name: '/', isDir: true, size: 0 });
let currentDir = tree.root;

for (let i = 0; i < convertedData.length; i++) {
  //debugger;
  const line = convertedData[i];
  if (line.startsWith('$ cd')) {
    if (line === '$ cd /') {
      currentDir = tree.root;
    } else if (line === '$ cd ..') {
      currentDir = currentDir.parent;
    } else {
      const dirName = line.split(' ')[2];
      currentDir = currentDir.children.filter(
        (node) => node.name === dirName
      )[0];
    }
  } else if (isFile(line)) {
    addFile(line, currentDir);
  } else if (isDir(line)) {
    addDir(line, currentDir);
  }
}

const totalSize = updateSize(tree.root);
console.log(totalSize);
console.log(filterSmallDirectories(tree.root, 100000, 0));

function filterSmallDirectories(node, threshold, totalSize) {
  if (!node.isDir) {
    return totalSize;
  }
  for (let child of Object.values(node.children)) {
    totalSize = filterSmallDirectories(child, threshold, totalSize);
  }

  if (node.size <= threshold) {
    return node.size + totalSize;
  }
  return totalSize;
}

function updateSize(node) {
  if (!node.isDir) {
    return node.size;
  }

  let size = 0;
  for (const child of Object.values(node.children)) {
    size += updateSize(child);
  }
  node.size = size;
  return size;
}

function isFile(line) {
  const size = +line.split(' ')[0];
  return Number.isInteger(size) ? true : false;
}

function isDir(line) {
  return line.startsWith('dir');
}
function addFile(line, parent) {
  const size = +line.split(' ')[0];
  const name = line.split(' ')[1];

  tree.add({ name, size, parent, isDir: false }, parent);
}

function addDir(line, parent) {
  const name = line.split(' ')[1];

  tree.add({ name, isDir: true, size: 0, parent }, parent);
}
