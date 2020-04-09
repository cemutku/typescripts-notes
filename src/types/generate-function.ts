import { Bookshelf, Book } from "./complex-types";
import { TextTypes } from './types-examples';

function bookshelfAction<U extends any[]>(
    name: string,
    func: (...args: U) => any
) {
    return function wrapper(bookshelf: Bookshelf, ...args: U) {
        func(...args);
        bookshelf.lastUpdated = Date.now();
    };
}

function setText(book: Book, text: string) {
    book.text = text;
    return book;
}

const book: Book = {
    id: 1,
    text: "test text",
    type: TextTypes.Narrative,
    color: "test color",
    fontSize: "test font size"
}

const wrappedSetText = bookshelfAction("Test", setText);

const bookshelf: Bookshelf = {
    books: [book]
}

wrappedSetText(bookshelf, book, "Updated Text");
console.log("after set text book", bookshelf);
