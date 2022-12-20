const data = `Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`;

const convertedData = data.split(/\n\s*\n/).map((d) => d.split(/\r?\n/));

const monkeyObjects = convertedData.map((m) => {
  return {
    name: m[0].replace(':', '').toLowerCase(),
    items: convertToNumber(m[1]),
    operation: m[2].split('=')[1].trim(),
    divisibleBy: +m[3].split(' ')[3],
    ifTrue: +m[4].split(' ')[7],
    ifFalse: +m[5].split(' ')[7],
    inspect: 0,
  };
});

for (let index = 0; index < 10000; index++) {
  for (let i = 0; i < monkeyObjects.length; i++) {
    const monkey = monkeyObjects[i];
    const allDivisors = monkeyObjects
      .map((monkey) => monkey.divisibleBy)
      .reduce((a, b) => a * b, 1);
    for (let j = 0; j < monkey.items.length; j++) {
      const item = monkey.items[j];

      monkey.inspect++;
      const newItem = operation(item, monkey.operation) % allDivisors;

      if (newItem % monkey.divisibleBy === 0) {
        monkeyObjects[monkey.ifTrue].items.push(newItem);
      } else {
        monkeyObjects[monkey.ifFalse].items.push(newItem);
      }
    }
    monkey.items = [];
  }
}
console.log(monkeyObjects);
const res = monkeyObjects.map((el) => el.inspect).sort((a, b) => b - a);
console.log(res, res[0] * res[1]);
function convertToNumber(item) {
  return item
    .split(' ')
    .slice(2)
    .map((x) => +x.replace(',', ''));
}

function operation(value, operationStr) {
  const operand = operationStr.split(' ')[1];
  const amount = +operationStr.split(' ')[2];
  if (amount) {
    switch (operand) {
      case '+':
        return (value += amount);
      case '*':
        return (value *= amount);

      default:
        return value;
    }
  } else {
    return value * value;
  }
}
