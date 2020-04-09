function deleteItem<T>(array: Array<T>, index: number): Array<T> {
    return array.splice(index, 1);
}