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
