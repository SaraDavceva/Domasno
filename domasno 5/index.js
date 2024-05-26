// example 1

function printFunc(seconds) {
  if (typeof seconds !== "number") {
    console.log("Please enter number");
  } else if (seconds < 0 || seconds > 9) {
    console.log("Please enter one digit number");
  } else {
    setTimeout(() => console.log("Coding is not that hard"), seconds * 1000);
  }
}
printFunc(3);
printFunc(35);
printFunc("text");

// example 2
// 1

function numberIsEven(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("The number is even");
    } else {
      reject("The number is not even");
    }
  });
}

async function evenNum() {
  try {
    const result = await numberIsEven();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

evenNum(5);

// 2
function myName(name) {
  return new Promise((resolve, reject) => {
    if (name.length === 4) {
      resolve(`My name is ${name}`);
    } else {
      reject("Error");
    }
  });
}

myName("Sara")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 3
function myMessage(message) {
  return new Promise((resolve, reject) => {
    if (message.length <= 5) {
      setTimeout((resolve) => console.log(message), 2000);
    } else {
      reject("Error");
    }
  });
}

myMessage("Hello")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 4
function person() {
  return new Promise((resolve) => {
    resolve({
      name: "Sara",
      age: 20,
    });
  });
}

async function printName() {
  try {
    const personName = await person();
    console.log(personName.name);
  } catch (error) {
    console.log(error);
  }
}

printName();

// 5
function myColor() {
  let colors = ["pink", "aqua", "grey", "blue"]
  return new Promise((resolve, reject) => {
    if (colors.length === 5) {
      resolve(`Colors: ${colors}`);
    } else {
      reject("Error");
    }
  });
}

myColor()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// example 3
function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("The number is even");
    } else {
      reject("The number is odd");
    }
  });
}

function handleSuccess (message) {
  console.log(message)
}

function handleError (error) {
  console.log(error)
}

checkNumber(12)
  .then((result) => handleSuccess(result))
  .catch((error) => handleError(error));

  checkNumber(77)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// example 4
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        age: 30,
        email: "john@example.com",
      });
    }, 2000);
  });
}

async function displayUserDetails() {
  try {
    const user = await fetchData();
    console.log(user);
  } catch (error) {
    console.log("something wrong", error);
  }
}

displayUserDetails()

// example 5

function countdown(seconds) {
  setInterval(() => {
    console.log(seconds));
  seconds--;

  if (seconds === 0) {
    console.log("Countdown complete");
  }
}

countdown(2000);

function countdown(seconds){
  let timerId = setInterval(() => {
    console.log(seconds)
    seconds--
    if(seconds === 0){
      console.log("Countdown complete")
      clearInterval(timerId)
    }
  }, 1000)
}

countdown(3)
