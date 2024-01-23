var a = [10, 20, 70, 60, 50, 60];
let high = a[1];

for (let i = 0; i < a.length; i++) {
    if (high > a) {
        high = a;
    }
}
console.log(high)
