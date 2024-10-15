let pg1 = {

    balance: 0,
    lt: 0

}

function deposit(v) {

    if (v > 0) {

        pg1.balance += v;
        pg1.lt = v;
    }

}


function withdraw(v) {

    if (v > 0 && v < pg1.balance) {

        pg1.balance -= v;
        pg1.lt = v;
    }

}

function statement() {
    console.log("Balance: " + pg1.balance);
    console.log("Last Transaction: " + pg1.lt);
}

deposit(5893);
statement();
withdraw(1214);
statement();

let pg2 = {

    balance: 0,
    lt: 0

}

function deposit1(v) {

    if (v > 0) {

        pg2.balance += v;
        pg2.lt = v;
    }

}


function withdraw1(v) {

    if (v > 0 && v < pg1.balance) {

        pg2.balance -= v;
        pg2.lt = v;
    }

}

function statement1() {
    console.log("Balance: " + pg2.balance);
    console.log("Last Transaction: " + pg2.lt);
}

deposit1(3111);
statement1();
withdraw1(214);
statement1();