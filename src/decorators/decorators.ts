import 'reflect-metadata';

function logClass(message: string): ClassDecorator {
    console.log(`${message} evaluated`);
    return function (constructor: Function): void {
        console.log(`${message} called`);
    }
}

function logProperty(message: string): PropertyDecorator {
    console.log(`${message} evaluated`);
    return function (target: Object, propertyKey: string): void {
        console.log(`${message} called`);
    }
}

function logMethod(message: string): MethodDecorator {
    console.log(`${message} evaluated`);
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor): void {
        console.log(`${message} called`);
    }
}

function logParameter(message: string): ParameterDecorator {
    console.log(`${message} evaluated`);
    return function (target: Object, propertyKey: string, parameterIndex: number): void {
        console.log(`${message} called`);
    }
}


// Description Decorator
function id(target: any, propertyKey: string) {
    Reflect.defineMetadata("entity:id", propertyKey, target);
}

@logClass("Class Decorator")
class Person {
    private _directReports: Person[];

    @logProperty("Property Decorator")
    emailAddress: string;

    @id
    id: string;

    constructor(public firstName: string, public lasName: string) {
        this._directReports = [];
    }

    @logMethod("Method Decorator")
    @logMethod("Method Decorator 2")
    public addDirectReport(@logParameter("Parameter Decorator") person: Person) {
        this._directReports.push(person);
    }
}

const person = new Person("Name", "Surname");



