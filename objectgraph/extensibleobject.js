var obj = {

    a: 10,
    b: 20

}

console.log(obj.a)
console.log(obj.b)
// extensible object
obj.c = 30;

console.log(obj)

// to delete an object property
delete obj;
console.log(obj);

console.log('Object with square bracket notation');

var obj1 = {

    x: 12,
    y: 15

}

console.log(obj1);
console.log(obj1['x'])
console.log(obj1['y'])

obj1.z = 18;

// console.log(obj1);

console.log(obj1.z);
let m = 'z';

console.log(obj1[m]);