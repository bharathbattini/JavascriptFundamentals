var obj = {

    a: 10,
    b: 20

}

var obj1 = {

    c: 30,
    d: 40

}

obj.e = obj1;

console.table(obj);
console.table(obj1);
console.log(obj.e.c);