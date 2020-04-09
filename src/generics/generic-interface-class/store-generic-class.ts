import { LibraryCollection } from './library-collection';

// interface implementation
export class Store<T> implements LibraryCollection<T> {
    _items: T[];

    addItem(item: T): void {
        throw new Error("Method not implemented.");
    }
    removeItem(item: T): void {
        throw new Error("Method not implemented.");
    }

}