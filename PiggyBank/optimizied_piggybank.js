base = {

    deposit: deposit,
    withdraw: withdraw,
    statement: statement
}

pg1 = {
    balance: 12,
    lt: -1,
    __proto__: base
}
pg2 = {
    balance: 1212,
    lt: 121,
    __proto__: base
}

function deposit(v) {

    if (v > 0) {

        this.balance = this.balance + v;
        this.lt = v;

    }
};

function withdraw(v) {
    if (this.balance >= v) {
        this.balance = this.balance - v;
        this.lt = - v;
    }
    else {

        console.log('Insufficient withdrawal amount');

    }
}

function statement() {

    console.log(`Balance: ${this.balance}`);
    console.log(`last transaction: ${this.lt}`);

}

console.log('PG1')
pg1.deposit(1000);
pg1.statement();
pg1.withdraw(102);
pg1.statement();

console.log('PG2')
pg2.deposit(10100);
pg2.statement();
pg2.withdraw(1102);
pg2.statement();