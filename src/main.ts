import { Person, Invoice, AnotherInvoice, InvoiceWithStaticMember, InvoiceWithPrivateConstructor } from "./oop-samples/sample";
import { SavingAccount } from "./oop-samples/inheritance-example";
import { BankAccount, SavingAccount as AbstractSavingAccount } from "./oop-samples/abstract-class-sample";

// create a person instance
const person = new Person();
person.name = "John";
person.surname = "Doe";
person.address = "Address Street";
person.age = 25;

// create an invoice with constructor
const invoiceSample = new Invoice(10000, "test address");
console.log(invoiceSample.amount);


// create an another invoice with different constructor
const anotherSampleInvoice = new AnotherInvoice(2000, "test address");

// class with static member, no need new keyword
InvoiceWithStaticMember.amount = 1000;
InvoiceWithStaticMember.address = "Static Address";
const text = InvoiceWithStaticMember.getStaticText();
console.log(text);

// To get non-static variable, we need to create an instance
const staticClass = new InvoiceWithStaticMember();
staticClass.nonStaticVariable = "This is a non static variable";

// cannot create an instance
// const privateConstClass = new InvoiceWithPrivateConstructor(); // error

// create an instance from inherited class
const savingAccount = new SavingAccount('account number');
savingAccount.name = "";// inherited member from BankAccount class

// abstract classes cannot be instantiated
// const abstractClass = new BankAccount(); error

// create an instance from inherited member of abstract class
const savingAccountFromAbstraction = new AbstractSavingAccount('account number');
savingAccountFromAbstraction.balance = 10000;
savingAccountFromAbstraction.withdrawal(200);

