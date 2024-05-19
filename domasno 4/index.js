// Zadaca1

let books = [
  { title: "Book 1", author: "Author A", year: 2000 },
  { title: "Book 2", author: "Author B", year: 2010 },
  { title: "Book 3", author: "Author C", year: 2020 },
];

books.forEach((book) => {
  console.log(book.title, book.author);
});

let FistiBookAfter2000 = books.find((book) => book.year > 2000);
console.log(FistiBookAfter2000);

// Zadaca 2

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    postalCode: "10001",
  },
  hobbies: ["Reading", "Traveling", "Cooking"],
};

// a)
let additionalInfo = {
  email: "info@gmail.com",
  phone: "072 020 020",
  education: {
    degree: "Master of Business",
    major: "Business",
  },
};

let combinatedObjects = { ...person, ...additionalInfo };
console.log(combinatedObjects);

// b)
user = {
  id: 123,
  username: "jsmith",
  fullName: { firstName: "John", lastName: "Smith" },
  contact: { email: "john@example.com", phone: "555-555-5555" },
  addresses: [
    {
      type: "home",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    {
      type: "work",
      street: "456 Market Street",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
  ],
};

console.log(user.username);
console.log(user.fullName.firstName, user.fullName.lastName);
console.log(user.contact.email);
console.log(user.addresses[0]);
console.log(user.addresses[1]);

// Zadaca 3
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

// a)
let countriesWithLand = countries.filter((c) => c.includes("land"));
console.log(countriesWithLand);

// b)
let countriesWithIa = countries.filter((c) => c.includes("ia") && c.length > 7);
console.log(countriesWithIa);

// Zadaca 4

let zooAnimals = [
  {
    id: "0938aa23-f153-4937-9f88-4858b24d6bce",
    name: "lions",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Zena",
        sex: "female",
        age: 12,
      },
      {
        name: "Maxwell",
        sex: "male",
        age: 15,
      },
      {
        name: "Faustino",
        sex: "male",
        age: 7,
      },
      {
        name: "Dee",
        sex: "female",
        age: 14,
      },
    ],
  },
  {
    id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
    name: "tigers",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Shu",
        sex: "female",
        age: 19,
      },
      {
        name: "Esther",
        sex: "female",
        age: 17,
      },
    ],
  },
  {
    id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
    name: "bears",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Hiram",
        sex: "male",
        age: 4,
      },
      {
        name: "Edwardo",
        sex: "male",
        age: 4,
      },
      {
        name: "Milan",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
    name: "penguins",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Joe",
        sex: "male",
        age: 10,
      },
      {
        name: "Tad",
        sex: "male",
        age: 12,
      },
      {
        name: "Keri",
        sex: "female",
        age: 2,
      },
      {
        name: "Nicholas",
        sex: "male",
        age: 2,
      },
    ],
  },
  {
    id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
    name: "otters",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Neville",
        sex: "male",
        age: 9,
      },
      {
        name: "Lloyd",
        sex: "male",
        age: 8,
      },
      {
        name: "Mercedes",
        sex: "female",
        age: 9,
      },
      {
        name: "Margherita",
        sex: "female",
        age: 10,
      },
    ],
  },
  {
    id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
    name: "frogs",
    popularity: 2,
    location: "SW",
    residents: [
      {
        name: "Cathey",
        sex: "female",
        age: 3,
      },
      {
        name: "Annice",
        sex: "female",
        age: 2,
      },
    ],
  },
  {
    id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
    name: "snakes",
    popularity: 3,
    location: "SW",
    residents: [
      {
        name: "Paulette",
        sex: "female",
        age: 5,
      },
      {
        name: "Bill",
        sex: "male",
        age: 6,
      },
    ],
  },
  {
    id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
    name: "elephants",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Ilana",
        sex: "female",
        age: 11,
      },
      {
        name: "Orval",
        sex: "male",
        age: 15,
      },
      {
        name: "Bea",
        sex: "female",
        age: 12,
      },
      {
        name: "Jefferson",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
    name: "giraffes",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Gracia",
        sex: "female",
        age: 11,
      },
      {
        name: "Antone",
        sex: "male",
        age: 9,
      },
      {
        name: "Vicky",
        sex: "female",
        age: 12,
      },
      {
        name: "Clay",
        sex: "male",
        age: 4,
      },
      {
        name: "Arron",
        sex: "male",
        age: 7,
      },
      {
        name: "Bernard",
        sex: "male",
        age: 6,
      },
    ],
  },
];

// a)
let popularAnimals = zooAnimals
  .filter((animal) => animal.popularity > 4)
  .map((animal) => animal.name);
console.log(popularAnimals);

// b)
let elephant = zooAnimals.find((animal) => animal.name === "elephants");
let oldelstElephant = elephant.residents.reduce((acc, curr) =>
  curr.age > acc.age ? curr : acc
);
console.log(oldelstElephant.name);

// v)
let penguin = zooAnimals.find((animal) => animal.name === "penguins");
let youngFemalePenguin = penguin.residents
  .filter((resident) => resident.age < 10 && resident.sex === "female")
  .map((resident) => resident.name);
console.log(youngFemalePenguin);

// g)
let longestName = zooAnimals.reduce((acc, curr) =>
  curr.name.length > acc.name.length ? curr : acc
);
console.log(longestName.name);

let totalAge = longestName.residents.reduce((acc, curr) => acc + curr.age, 0);
console.log(totalAge);

// d)
let minGroup = zooAnimals.reduce((acc, curr) =>
  acc.residents < curr.residents ? acc : curr
);
console.log("Smallest group is:", minGroup.name);
let minGroupNames = minGroup.residents.map((resident) => resident.name);

let maxGroup = zooAnimals.reduce((acc, curr) =>
  acc.residents > curr.residents ? acc : curr
);
console.log("Biggest group is: ", maxGroup.name);
let maxGroupNames = maxGroup.residents.map((resident) => resident.name);

let allNames = minGroupNames.concat(maxGroupNames);
console.log(allNames);

// Zadaca 5

function checkGrade(score) {
  score >= 90 && score <= 100
    ? console.log("A")
    : score >= 80 && score <= 89
    ? console.log("B")
    : score >= 70 && score <= 79
    ? console.log("C")
    : score >= 60 && score <= 69
    ? console.log("D")
    : score >= 0 && score <= 59
    ? console.log("F")
    : console.log(`Invalid score! Please enter a score between 0 and 100`);
}

checkGrade(48);
