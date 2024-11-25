var a = [30, 10, 20, 60, 50, 60];
let high = a[0];

for (let i = 0; i < a.length; i++) {
    if (high > a[i]) {
        high = a[i];
    }
}
console.log(high)

let highest = a.filter((e) => {

    if (e < a) {
        return e;
    }
    else {
        return a;
    }
}, a[0]);
console.log(highest)