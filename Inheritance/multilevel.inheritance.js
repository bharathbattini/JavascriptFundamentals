obj1 = {

    a: 10,
    b: 20

}

obj2 = {

    c: 30,
    d: 40,
    __proto__: obj1

}

obj3 = {

    e: 50,
    f: 60
}

obj3.__proto__ = obj1;

console.log('obj1');
console.log(obj1);

console.log('obj2');
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);

console.log('obj3');
console.log(obj3);
console.log(obj3.a);
console.log(obj3.b);
console.log(obj3.e);
console.log(obj3.f);

obj1.a = 99;

console.log('obj1');
console.log(obj1);

console.log('obj2');
console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);

console.log('obj3');
console.log(obj3);
console.log(obj3.a);
console.log(obj3.b);
console.log(obj3.e);
console.log(obj3.f);

console.log('We can not write the property of parent, we can only read')
console.log('If we want to write, then it will expand and will create own property');

obj2.a = 69;
console.log(obj1);
console.log(obj1.a);
console.log(obj2);
console.log(obj2.a);
