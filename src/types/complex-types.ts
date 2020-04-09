import { TextInterface, Story, Poem } from "./types-examples";

export interface Book extends TextInterface { }

export interface Bookshelf {
    books: Book[];
    lastUpdated?: number;
}

function setNameProps<T extends Story | Poem>(bookshelf: Bookshelf, id: number, props: Partial<T>) {
    const book = bookshelf.books.find(b => b.id === id) as any;

    if (book) {
        Object.entries(props).forEach(([k, v]) => {
            book[k] = v;
        });
    }
}

const story = new Story();
const poem = new Poem();

const bookshelf: Bookshelf = {
    books: [story, poem]
}

setNameProps<Story>(bookshelf, 1, {
    fontSize: "100"
})
