// it is basically a function that returns a new class definition
// with the extra methods on the class being passed in
// reusabilty -> split big classes to small pieces

import { Book } from './complex-types';

export class CoreApi {
    constructor(public baseUrl: string) { }
}

export type BaseApiConstructor = new (...args: any[]) => CoreApi;

// mixin
function ImagesAPI<TBase extends BaseApiConstructor>(Base: TBase) {
    return class extends Base {
        getImages(): Promise<{
            src: string;
            dimensions: Size;
        }> {
            return Promise.resolve({
                src: "http://sample-url.com/imageid",
                dimensions: {
                    height: 100,
                    width: 300
                }
            });
        }

        saveImage(src: string): Promise<number> {
            return Promise.resolve(10);
        }
    }
}

function BooksAPI<TBase extends BaseApiConstructor>(Base: TBase) {
    return class extends Base {
        getBooks(): Promise<Book[]> {
            return Promise.resolve([]);
        }

        saveBook(): Promise<string> {
            return Promise.resolve("1");
        }

        deleteBook(): Promise<void> {
            return Promise.resolve();
        }
    }
}

export interface Size {
    width: number;
    height: number;
}

// usage of mixin
class apiclient extends ImagesAPI(CoreApi) { }
// const api = new ApiClient("http://sample-url.com");
// api.getImages
// api.saveImage

// get all functions
class AnotherApiClient extends BooksAPI(ImagesAPI(CoreApi)) { }
// const anotherApi = new AnotherApiClient("http://sample-url.com");
// anotherApi.deleteBook
// anotherApi.getBooks
// anotherApi.getImages
// anotherApi.saveBook