var str1 = "Hello World" //DoubleQuote
var str = 'Hello World!' //SingleQuote
var str2 = `Hello World!!` //Backtick

// console.log(str1);
// console.log(str2);
// console.log(str);

//Escaping Special characters

//Doublequote with Escaping through backslash
var str3 = "Bharath Mata Ki \"Jai\"";
//Singlequote with Escaping through backslash
var str4 = 'Bhar"ath';
//Singlequote with Escaping through backslash and Doublequote and Backtick
var str5 = 'Bharath\'Bhar"at`h';
//Backtick with Escaping through backslash and Doublequote and Singlequote
var str6 = `Bharath\`XBh"ar'ath`

console.log(str3)
console.log(str4)
console.log(str5)
console.log(str6)


//Multi line string

var str7 = `Bharath
Raghuramulu
Battini`
console.log(str7)

//String Interpolation

var no1 = 4
var no2 = 5

console.log(`The ${no1} and ${no2} is
equals to ${no1 + no2}`)


// String Elements
var str9 = 'Namaste'
console.log(str9);
console.log(str9[0]);
console.log(str9[3]);
console.log(str9[-3]);
console.log(str9[30]);
console.log(typeof (str9[3]))