let str = 'It is Javascript';

let rev = str.split(' ');

let revstr = '';

for (let i = 0; i < rev.length; i++) {

    revstr = revstr + rev[i].split('').reverse().join('') + '';

}

console.log('The original string is: ' + str)
console.log('The reverse string is: ' + rev);



