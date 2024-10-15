let str = '12321';
let char = '';

for (let i = str.length; i >= 0; i--) {

    char = char + str.charAt(i);

}
console.log(char);

if (str == char) {

    console.log('It is a palindrome')

} else {
    console.log('It is not a palindrome')

}

