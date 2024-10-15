let a = 10;
let b = 20;

obj = {
    c: 30,
    d: 40
}

obj1 = { a, b, ...obj }

console.log(obj1);