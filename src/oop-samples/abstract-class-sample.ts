export abstract class BankAccount {
    abstract name: string;
    private _balance = 0;

    constructor(accountNumber: string) { }

    abstract getAccountName(): any;

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        this._balance = value;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdrawal(amount: number): void {
        this.balance -= amount;
    }
}

// if Base class have an abstract member or function , we have to implement them in our inherited class

export class SavingAccount extends BankAccount {
    getAccountName() {
        throw new Error("Method not implemented.");
    }

    name: string;
    expense: number;
    constructor(accountNumber: string) {
        super(accountNumber);
    }

    // override base class behaviour
    withdrawal(amount: number) {
        const currentAmount = this.expense + amount;
        this.balance -= currentAmount;
    }
}