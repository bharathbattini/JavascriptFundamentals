// 1. Addition of random numbers:

for (i = 0; i < 10; i++) {

    const number1 = Math.floor(Math.random() * 10)
    const number2 = Math.floor(Math.random() * 100) + 1;

    const add = (a, b) => a + b;
    console.log(add(number1, number2));

};

