// Zadaca1

// a)
let book = {
  title: "First Lie Wins",
  author: {
    firstName: "Ashley",
    lastName: "Elston",
  },
  pages: 348,
  characters: ["Evie Porter", "Mr. Smith", "Ryan Sumner"],
};

console.log(book);

// b)
let car = {
  name: "BMW",
  model: "M5",
  year: 2022,
  specifications: ["Automatic", "Automatic", "8-Speed Automatic Transmission"],
};

console.log(car);

// v)
let student = {
  name: "Sara",
  age: 20,
  course: "JavaScript",
  moduls: ["GNU/Linux", "Git", "JavaScript"],
};

console.log(student);

// Zadaca2

// a)
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// b)
let start = 2;
let end = 7;
let sum = 0;
for (let i = start; i < end; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(sum);

// v)
let person = {
  name: "Sara",
  age: 20,
  city: "Veles",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// g)   !!!!!!!!!!!!!
let colors = ["pink", "blue", "red", "green"];
for (let color of colors) {
  console.log(color.length, color);
}

// Zadaca 3

// a)
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}

// b)
let num = 10;

do {
  console.log(num);
  num--;
  if (num === 4) {
    break;
  }
} while (num >= 1);

// Zadaca 4
let students = [
  {
    name: "Jana",
    surname: "Petkovska",
    age: 20,
    address: {
      city: "Veles",
      street: {
        name: "11 Oktomvri",
        number: 10,
      },
        zipCode: 1400,
    },
  },
  {
    name: "Marko",
    surname: "Stojanovski",
    age: 23,
    address: {
      city: "Veles",
      street: {
        name: "Blagoj Gjorev",
        number: 5,
      },
      zipCode: 1400,
    },
  }
];

console.log(students[0].address.city);
console.log(students[1]["address"]["street"]["name"]);

// Zadaca 5

// a)
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i)
    i += 2;
  }
}

// b)
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// // Zadaca 6

let cities = [
  "Skopje",
  "Veles",
  "Stip",
  "Prilep",
  "Tetovo",
  "Strumica",
  "Kocani",
  "Negotino",
  "Kavadarci",
  "Ohrid",
];

// a)
for (let key in cities) {
  console.log(cities[key]);
}

// b)
for (let city of cities) {
  console.log(city);
}
