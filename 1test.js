"use strict";
let data; // it will not assign in whole program.
let a = 10; //value can be change, that's why it's data type is number;
const b = 20; // value can't be change that's why it's data type is b = 20; {check with pointer hover}
// function hello(x: number, y: number) {
//   console.log("hello world");
//   return x + y;
// }
function hello(x, y) {
    //  console.log("hello world");
    if (typeof x === "number" && typeof y === "number")
        return x + y;
    else {
        return new Error("values are not number");
    }
}
console.log(hello(10, 29));
