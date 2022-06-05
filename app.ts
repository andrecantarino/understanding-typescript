function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result
}

const combineAges = combine(30, 20);
console.log(combineAges);

const combineNames = combine('Max', 'Anna');
console.log(combineNames);

// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result is: '

// add(number1, number2, printResult, resultPhrase);