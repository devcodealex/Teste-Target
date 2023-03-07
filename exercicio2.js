const number = 55

let numberOne = 0;
let numberTwo = 1;

while (numberTwo < number) {
  const number = numberOne + numberTwo;
  numberOne = numberTwo;
  numberTwo = number;
  
  console.log(number)
}

if (numberTwo === number) {
  console.log(`O número ${number} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
}