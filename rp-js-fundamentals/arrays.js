let numbers = [1, 2, 6, 4, 5]
let fruits = ['Apple', 'Banana', 'Mango']
let color = ['pink', 'black', 'white', 'yellow']

//1. push = Add an element at a last index
fruits.push('Chikkoo', 'Guava');
console.log(fruits);

//2. pop = Remove an element at the last index
numbers.pop();
console.log(numbers)

//3. Shift = shift will delete the first element of an array
let numbes = [1, 2, 6, 4, 5]
numbes.shift();
console.log('------------' + numbes);

//4. Unshift =  unshift will a new element at the start of an array
let lang = ['Javascript', 'Java', 'Python', 'C#', 'C++', 'Ruby'];
lang.unshift('C');
console.log(lang);

//5.splice

//6. slice
let names = ['Bharath', 'Nikhil', 'Janhavi', 'Ruthvik', 'Lale', 'Onkar'];
let slicedName = names.slice(0, -1);
console.log(slicedName);

//7. Concat
fruitsColor = fruits.concat(color);
console.log('fruits and colors are concatinated:' + fruitsColor);

//8. sort
fruits.sort();
console.log('sorting with ascending format of an array:' + fruits);


//9. reverse
color.reverse();
console.log('reverse of an array:' + color);

//10. forEach
lang.forEach((e) => {
    console.log(e);
})