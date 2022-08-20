const person: { name: string; age: number; email: string } = {
  name: "pushparaj",
  age: 23,
  email: "pushparaj@gmail.com",
};
const p: object = {
  name: "pushparaj",
  age: 23,
  email: "pushparaj@gmail.com",
};

type t = { name: string; age: number; email: string };
const per: t = {
  name: "pushparaj",
  age: 23,
  email: "pushparaj@gmail.com",
};

console.log(person.name);
console.log(per.name);
