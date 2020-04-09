export class Store<T> {
    _items: T[] = []; // T -> generic type, 

    addItem(newItem: T) {
        // add new item to store
    }

    removeItem(oldItem: T) {
        // remove item from store
    }
}

