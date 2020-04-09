import { Store } from "./store-interface";

export class PhoneStore implements Store {
    itemCount: number;
    name: string;
    location: string;
    available: boolean;
}

export const phoneStores: PhoneStore[] = [
    { name: 'Test Phone Store', location: 'Turkey', itemCount: 100, available: true },
    { name: 'Test Phone Store 2', location: 'Turkey', itemCount: 300, available: false },
    { name: 'Test Phone Store 3', location: 'Turkey', itemCount: 1000, available: true }
];