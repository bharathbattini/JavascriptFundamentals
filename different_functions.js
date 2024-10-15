//1. Function Declaration
function add(a, b) {

    return a + b;

}
const addition = add(4, 5);
console.log(addition);

//2. Function Expression: Anonymous Function

const sub = function (b, c) {

    return b - c;

}
const substitute = sub(6, 2);
console.log(substitute);

//3. Arrow Function Expression: Anonymous Function

const mul = (x, y) => {

    return x * y;
}

const multiply = mul(5, 9);
console.log(multiply);

//4. Constructor Function:

const Addition = new Function('a', 'b', 'return a - b');
const add1 = Addition('30', '1');
console.log(add1);

//5. IIFE(Immediate Invoke Function Expression)
(function () {

    console.log('Bharath is the Best');

})();





