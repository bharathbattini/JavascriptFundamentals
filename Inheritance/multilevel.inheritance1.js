obj1 = {

    a: 10,
    b: 20

}

obj2 = {

    c: 30,
    d: 40,

}

obj4 = {

    g: 70,
    h: 80
}

obj2.__proto__ = obj1;
obj4.__proto__ = obj2;

console.log(obj1);
console.log(obj2);
console.log(obj4);

console.log('------Obj2--------');

console.log(obj2.a);
console.log(obj2.b);
console.log(obj2.c);
console.log(obj2.d);

console.log('------Obj4--------');

console.log(obj4.a);
console.log(obj4.b);
console.log(obj4.c);
console.log(obj4.d);
console.log(obj4.g);
console.log(obj4.h);

obj2.a = 40;
delete obj2.a;

console.log(obj2.a);
