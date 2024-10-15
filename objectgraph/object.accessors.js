let a = 'Bharath';
let obj = {

    a: 'Kumar',
    [a]: 'Battini',
    m1() {

        console.log('m1 of obj1');

    },
    get x() { return 33 },
    set x(a) { console.log(a) }

}

console.log(obj);
console.log(obj.m1());