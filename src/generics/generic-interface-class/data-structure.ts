interface DataStructure<T> {
    push(item: T): void;
    pop(): T;
}

class Stack<T> implements DataStructure<T> {

    items: Array<T> = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T {
        return this.items.pop();
    }

    peek(): T {
        return this.items[this.items.length - 1];
    }
}

let numberStack: Stack<number> = new Stack<number>();

numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

console.log(numberStack.pop());
console.log(numberStack.peek());
console.log(numberStack.pop());

// Generic classes are only generic over their instances