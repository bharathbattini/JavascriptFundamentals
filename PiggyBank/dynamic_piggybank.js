pg1 = {

    balance: 0,
    lt: 0,
    deposit: deposit,
    withdraw: withdraw,
    statement: statement

};
pg2 = {

    balance: 0,
    lt: 0,
    withdraw: withdraw,
    deposit: deposit,
    statement: statement

};


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

pg1.deposit(100);
pg1.statement();
pg1.withdraw(101);
pg1.statement();

pg2.deposit(1211);
pg2.statement();
pg2.withdraw(1021);
pg2.statement();