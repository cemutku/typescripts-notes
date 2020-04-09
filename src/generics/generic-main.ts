import { Store } from "./generic-class";
import { Store as CommonStore } from "./generic-types/store-interface";
import { Book } from "./book";
import { phoneStores, PhoneStore } from "./generic-types/phone-store";
import { BookStore, bookStores } from "./generic-types/book-store";

// reusable code - multiple types
// functions, interfaces, classes
// type-safe code

// Classes
const bookStore: Store<Book> = new Store<Book>();

bookStore.addItem(new Book());
// bookStore.addItem(new Phone());  // error type mismatch


// built-in generic Arrays
let companies: Array<string>;
// companies = ['A', 'B', 'C', 5]; // 5 is not valid for this array

let numbers: Array<number>;
// numbers = [1, 2, 3, 4, 'A'] // 'A' is not valid for this array


// generic types
function getBigStores<T extends CommonStore>(stores: Array<T>, avgItemSize: number): Array<T> {
    let bigStores: Array<T> = [];

    stores.forEach(s => {
        if (s.itemCount > avgItemSize) {
            stores.push(s);
        }
    });

    return bigStores;
}

const bigPhoneStores: Array<PhoneStore> = getBigStores<PhoneStore>(phoneStores, 100);
console.log(bigPhoneStores);

const bigBookStores: Array<BookStore> = getBigStores<BookStore>(bookStores, 100);
console.log(bigBookStores);



// generic function types

let getLargeStores: <T extends CommonStore>(stores: Array<T>, avgItemSize: number) => Array<T>

getLargeStores = getBigStores;
let largeBookStores = getLargeStores(bookStores, 100);
console.log(largeBookStores);
