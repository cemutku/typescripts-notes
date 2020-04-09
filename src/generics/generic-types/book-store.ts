import { Store } from "./store-interface";

export class BookStore implements Store {
    itemCount: number;
    name: string;
    location: string;
}

export const bookStores: BookStore[] = [
    { name: 'Science Book Store', location: 'Turkey', itemCount: 1000 },
    { name: 'Classic Book Store', location: 'Turkey', itemCount: 10000 }
];