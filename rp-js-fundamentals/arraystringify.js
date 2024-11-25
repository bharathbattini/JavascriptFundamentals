const equalsCheck = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
}

// Declaring arrays
const a = [1, 2, 3];
const b = [1, 2, 3];

// Comparing both the arrays
if (equalsCheck(a, b))
    console.log("The arrays have the same elements.");
else
    console.log("The arrays have different elements.");