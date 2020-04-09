export class BankAccount {
    name: string;

    constructor(accountNumber: string) { }
}

export class SavingAccount extends BankAccount {
    constructor(accountNumber: string) {
        super(accountNumber);
    }
}