export interface LibraryCollection<T> {
    _items: T[];
    addItem(item: T): void;
    removeItem(item: T): void
}

const numberCollection: LibraryCollection<number> = {
    _items: [1, 2, 3, 4],
    addItem: item => console.log(`item added ${item}`),
    removeItem: item => console.log(`item removed ${item}`)
};