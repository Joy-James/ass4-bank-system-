
class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    getAccountNumber() {
        return this.accountNumber;

    }

    getAccountHolder() {
        return this.accountHolder;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log('Insufficient balance.');
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, interestRate) {
        super(accountNumber, accountHolder, balance);
        this.interestRate = interestRate;
    }

    calculateInterest() {
        const interest = this.balance * (this.interestRate / 100);
        console.log('Interest amount:', interest);
        return interest;
    }
}

class CheckingAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, overdraftLimit) {
        super(accountNumber, accountHolder, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        const totalBalance = this.balance + this.overdraftLimit;
        if (amount <= totalBalance) {
            if (amount <= this.balance) {
                this.balance -= amount;
            } else {
                const overdraftAmount = amount - this.balance;
                this.balance = 0;
                console.log('Overdraft used:', overdraftAmount);
            }
        } else {
            console.log('Withdrawal amount exceeds overdraft limit.');
        }
    }
}

// Create instances of account types
const savingsAccount = new SavingsAccount('h22A', 'Mumbi Njuguna', 1000, 2.5);
const checkingAccount = new CheckingAccount('C990B', 'Nderitu Kanja', 500, 1000);

// Retrieve account information
console.log('Savings Account Information:');
console.log('Account Number:', savingsAccount.getAccountNumber());
console.log('Account Holder:', savingsAccount.getAccountHolder());
console.log('Balance:', savingsAccount.getBalance());

console.log('\nChecking Account Information:');
console.log('Account Number:', checkingAccount.getAccountNumber());
console.log('Account Holder:', checkingAccount.getAccountHolder());
console.log('Balance:', checkingAccount.getBalance());

// Deposit an amount into the accounts
savingsAccount.deposit(500);
checkingAccount.deposit(200);

// Withdraw an amount from the accounts
savingsAccount.withdraw(200);
checkingAccount.withdraw(800);


