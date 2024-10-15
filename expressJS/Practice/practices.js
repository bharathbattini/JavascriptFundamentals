console.log('--------------------------- Reverse a string ---------------------------');

let str = 'Bharath';
let rev = '';
for (i = str.length; i >= 0; i--) {

    rev = rev + str.charAt(i);

}

console.log(rev);

console.log('--------------------------- Fibonacci Series ---------------------------');

let a = 1;
let b = 2;

console.log(a);
console.log(b);
function fib(ser) {
    for (let i = 0; i <= ser; i++) {

        let c = a + b;
        console.log(c);
        a = b;
        b = c;
        if (i == ser) {
            break;
        }
    }
}
fib(5);

console.log('---------------------------Max number---------------------------');
let num = [3, 5, 65, 53, 12, 69, 51];
let max = num[0];
let min = num[0];

for (let i = 0; i <= num.length; i++) {

    if (num[i] > max) {

        max = num[i];

    }
    if (num[i] < min) {

        min = num[i];

    }
}
console.log(max);
console.log(min);

console.log('---------------------------Search element in an array---------------------------');


