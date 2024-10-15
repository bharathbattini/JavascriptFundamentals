let fahDegree = [43, 12, 53, 64, 322, 32];

let celDegree = fahDegree.map((degree) => {

    return (degree - 32) * (5 / 9);

})
console.log(celDegree);