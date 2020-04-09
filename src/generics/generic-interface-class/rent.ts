import { Store } from "../generic-types/store-interface";
import { BookStore, bookStores } from "../generic-types/book-store";

class Rent<T extends Store> {
    companyName: string;
    startDate: Date;
    resource: T;

    rentRequest(requestedResource: T, requester: string) {
        this.resource = requestedResource;
        this.companyName = requester;
        console.log(`${requester} requested to rent ${requestedResource.name}`);
    }
}

let rentedBookStore = new Rent<BookStore>();
rentedBookStore.rentRequest(bookStores[0], 'Sample Company');