obj1 = {

    a: 10,
    b: 20

}

obj2 = {

    c: 30,
    d: 40

}

obj2.__proto__ = obj1;

console.log(obj1);
console.log(obj2);
console.log('Prototypal Inheritance');
console.log(obj2.a);
console.log(obj2.c);