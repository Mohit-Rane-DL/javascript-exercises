const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
let agesOfPeople = [];
let oldestPerson = {};

const findTheOldest = function (people) {
  for(i = 0; i < people.length; i++){
    if((Object.keys(people[i]).length) < 3) {
      people[i].yearOfDeath = new Date().getFullYear();
    }
  }
  
  // Array of current ages of people
  agesOfPeople = [{name: people[0].name, age: (people[0].yearOfDeath - people[0].yearOfBirth)},
  {name: people[1].name, age: (people[1].yearOfDeath - people[1].yearOfBirth)},
  {name: people[2].name, age: (people[2].yearOfDeath - people[2].yearOfBirth)}];

  if((agesOfPeople[0].age > agesOfPeople[1].age) && (agesOfPeople[0].age > agesOfPeople[2].age)){
    oldestPerson[0] = agesOfPeople[0];
  } else if((agesOfPeople[1].age > agesOfPeople[0].age) && (agesOfPeople[1].age > agesOfPeople[2].age)){
    oldestPerson[0] = agesOfPeople[1];
  } else if((agesOfPeople[2].age > agesOfPeople[0].age) && (agesOfPeople[2].age > agesOfPeople[1].age)){
    oldestPerson[0] = agesOfPeople[2];
  }
  return oldestPerson[0];
}

console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
