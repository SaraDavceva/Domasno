// Domasna 2

// Zadaca 1

// let globalNum = 10;

// function checkScope() {
//   console.log(globalNum);
//   let localNum = 10;
// }
// checkScope()

// console.log(globalNum === localNum);

if (true) {
  let blockNum = 10;
}

// console.log(typeof blockNum);

// Zadaca 2

// a)
let score = 78;

if (score >= 90 && score <= 100) {
  console.log(`Grade: A`);
} else if (score >= 80 && score <= 89) {
  console.log(`Grade: B`);
} else if (score >= 70 && score <= 79) {
  console.log(`Grade: C`);
} else if (score >= 60 && score <= 69) {
  console.log(`Grade: D`);
} else if (score >= 0 && score <= 59) {
  console.log(`Grade: F`);
} else {
  console.log(`Invalid score! Please enter a score between 0 and 100`);
}

// b)
let dayNumber = 4;

switch (dayNumber) {
  case 1:
    console.log(`The day is Sunday`);
    break;
  case 2:
    console.log(`The day is Monday`);
    break;
  case 3:
    console.log(`The day is Tuesday`);
    break;
  case 4:
    console.log(`The day is Wednesday`);
    break;
  case 5:
    console.log(`The day is Thursday`);
    break;
  case 6:
    console.log(`The day is Friday`);
    break;
  case 7:
    console.log(`The day is Saturday`);
    break;
  default:
    console.log(`Invalid day number. Please enter a number between 1 and 7.`);
}

// Zadaca 3
function Sum(x, y, z) {
  return x + y + z;
}

console.log(Sum(1, 2, 3));

function returnString(name) {
  return name;
}

console.log(returnString(`Sara`));

function equalNum(num1, num2) {
  if (num1 === num2) {
    return `These numbers are equal`;
  } else {
    return`These number are not equal`;
  }
}

console.log(equalNum(5, 5));

// Zadaca 4

// a)
let age = 20;

if (age < 18) {
  console.log(`You can't vote and you can't buy alcohol`);
} else if (age > 18 && age < 21) {
  console.log(`You can vote, but you can't buy alcohol`);
} else {
  console.log(`You can vote and you can buy alcohol`);
}

// b)
function myMonth(month) {
  switch (month) {
    case `January`:
      console.log(`31 days`);
      break;
    case `February`:
      console.log(`28 days`);
      break;
    case `March`:
      console.log(`31 days`);
      break;
    case `April`:
      console.log(`30 days`);
      break;
    case `May`:
      console.log(`31 days`);
      break;
    case `June`:
      console.log(`30 days`);
      break;
    case `July`:
      console.log(`31 days`);
      break;
    case `August`:
      console.log(`31 days`);
      break;
    case `September`:
      console.log(`30 days`);
      break;
    case `October`:
      console.log(`31 days`);
      break;
    case `November`:
      console.log(`30 days`);
      break;
    case `December`:
      console.log(`31 days`);
      break;
    default:
      console.log(`Invalid input`);
  }
}

myMonth(`November`);

// v)
let temperature = 34;

if (temperature < 15) {
  console.log(`The weather is cold`);
} else if (temperature >= 15 && temperature <= 20) {
  console.log(`The weather is normal`);
} else if (temperature > 20) {
  console.log(`The weather is warm`);
} else {
  console.log(`The weather is hot`);
}

// Zadaca 5
function num(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log(`FizzBuzz`);
  } else if (number % 5 === 0) {
    console.log(`Buzz`);
  } else if (number % 3 === 0) {
    console.log(`Fizz`);
  } else {
    console.log(number);
  }
}
num(30);
