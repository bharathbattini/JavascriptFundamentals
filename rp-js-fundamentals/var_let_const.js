function example() {
    var x = 10; // Function-scoped
    let y = 20; // Block-scoped
    const z = 30; // Block-scoped

    // Redeclaring x is allowed with var
    var x = 15;

    // Trying to redeclare y or z would result in an error
    // let y = 25; // Error
    // const z = 35; // Error

    // Reassigning y is allowed
    y = 25;

    // Trying to reassign z would result in an error
    // z = 35; // Error

    return x;
}