export class Person {
    name: string;               // class members are public by default
    surname: string;
    age?: number                // nullable member
    private _address: string;   // private data encapsulation

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    // class method with string return type
    nameSurname(): string {
        return `${this.name} ${this.surname}`;
    }
}

export class Invoice {
    amount: number;
    address: string;

    constructor(amount: number, address: string) {
        this.amount = amount;
        this.address = address;
    }
}

// or parameters can be defined in constructor

export class AnotherInvoice {
    constructor(private amount: number, private address: string) {
    }
}

export class InvoiceWithStaticMember {
    nonStaticVariable: string;
    static amount: number;
    static address: string;

    static getStaticText(): string {
        return "This is a static method";
    }
}

// to prevent instantiate define a private constructor

export class InvoiceWithPrivateConstructor {
    static amount: number;
    static address: string;

    private constructor() { }

    static getStaticText(): string {
        return "This is a static method";
    }
}