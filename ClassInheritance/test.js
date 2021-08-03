(function() {
    describe("Create Account", function() {
        beforeEach(() => {
            account = new Account(10001);
        });

        describe("Get Account Number", function () {
            it("Get account number", function () {
                    assert.equal(account.getNumber(), 10001);
                });
        });
        describe("Deposit", function () {
            describe("If the given amount valid", function() {
                it("Add account balance by given amount", function () {
                    account.deposit(100)
                    assert.equal(account.getBalance(), 100);
                });
            });            
        });
        describe("Deposit amount is not valid", function() {
            it("throws an RangeError",
            function () {
                assert.throws(() => {account.deposit(-12)}, RangeError, "Deposit amount has to be greater than zero");
            });
        });       


        describe("Withdraw", function () {
            describe("Withdraw amount is more than the balance", function() {
                it("throws Error with Withdraw amount has to be greater than zero", function () {
                    assert.throws(() => {account.withdraw(-1)}, Error, "Withdraw amount has to be greater than zero");
                });
            });

            describe("Valid withdraw amount", function() {
                it("subtract account balance by given amount", function () {
                    account.deposit(120);
                    account.withdraw(100);
                    assert.equal(account.getBalance(), 20);
                });
            });
        });
    });

    describe("Savings Account", function() {
        beforeEach(() => {
            savingsAccount = new SavingsAccount(2.5, 10001);
        });

        describe("Sets Interest", function () {
            it("Sets account interest", function () {
                savingsAccount.setInterest(2.5);
                assert.equal(savingsAccount.getInterest(), 2.5);
            });
        });

        describe("Adds Interest", function () {
            it("deposits balance interest into account", function () {
                savingsAccount.deposit(100);
                savingsAccount.addInterest()
                assert.equal(savingsAccount.getBalance(), 102.5);
            });
        });

        describe("Gets Interest", function () {
            it("returns account interest", function () {
                assert.equal(savingsAccount.getInterest(), 2.5);
            });
        });


        describe("Statment", function () {
            it("print savings account details", function () {
                assert.equal(savingsAccount.toString(), `Savings Account ${savingsAccount.getNumber()}: balance ${savingsAccount.getBalance()}: intreset ${savingsAccount.getInterest()}`);
            });
        });
    });

    describe("CheckingAccount", function() {
        beforeEach(() => {
            checkingAccount = new CheckingAccount(1000, 10001);
        });
        describe("Get Over Draft Limit", function () {
            it("returns account overdraftLimit", function () {
                assert.equal(checkingAccount.getOverdraftLimit(), 1000);
            });
        });
        describe("Set Over Draft Limit", function () {
            it("sets account overdraftLimit", function () {
                checkingAccount.setOverdraftLimit(500);
                assert.equal(checkingAccount.getOverdraftLimit(), 500);
            });
        });
        

        describe("Withdraw", function () {
            describe("Withdraw amount is more than the current balance", function() {
                it("throws Error with Withdraw amount has to be greater than zero", function () {
                    assert.throws(() => {checkingAccount.withdraw(-1)}, Error, "Withdraw amount has to be greater than zero");
                });
            });

           

            describe("if the given amount is valid", function() {
                it("decrement account balance by given amount", function () {
                    checkingAccount.deposit(120);
                    checkingAccount.withdraw(100);
                    assert.equal(checkingAccount.getBalance(), 20);
                });
            });
        });

       

        describe("toString", function () {
            it("print checking account details", function () {
                assert.equal(checkingAccount.toString(), `Checking Account ${checkingAccount.getNumber()}: balance ${checkingAccount.getBalance()}: overdraft limit ${checkingAccount.getOverdraftLimit()}`);
            });
        });
    });

    describe("Bank", function() {
        beforeEach(() => {
            bank = new Bank();
        });

        describe("Add Account", function () {
            it("adds an account, and returns number of total accounts", function () {
                bank.addAccount(12);
                assert.equal(bank.addAccount(124), 2);
            });
        });

        describe("Add Checking Account", function () {
            it("adds a checking account, and returns number of total accounts", function () {
                assert.equal(bank.addCheckingAccount(500, 123), 1);
            });
        });

        describe("Add Savings Account", function () {
            it("adds a savings account, and returns number of accounts", function () {
                assert.equal(bank.addSavingsAccount(0.02, 1243), 1);
            });
        });

        describe("Account Report", function () {
            it("print details of each existing account", function () {
                bank.addCheckingAccount(500, 123);
                bank.addAccount(124);
                bank.addSavingsAccount(0.02, 1243);
                assert.equal(bank.accountReport(), "Checking Account 123: balance 0: overdraft limit 500\nAccount 124: balance 0\nSavings Account 1243: balance 0: intreset 0.02");
            });
        });
    });
})();
