// Provide a way to add both annotations and a meta-programming syntax for class declarations and members.
// cross-cutting concerns
// class, method, property, parameter -> types of decorators

// Class Decorators
// Applied to class constructor for observing, modifying or replacing class definition


// Method Decorators
// Applied to method property descriptor for observing, modifying or replacing method definition


// Poperty Decorators
// Can only be leveraged to observe that a property has been declared for a class


// Parameter Decorators
// Applied to method declaration for observing that a parameter has been defined on a method

// Multiple Decorators
//  they are evlauated from top to bottom 
//  result of expressions are called rom bottom to top

// Decorator Approaches
//      Decorator Function -> function withe a specific signature evaluated at runtime
//      Decorator Factory  -> function that returns a decorator function that can optionally receive parameters

// Types of Decorators
//  Action Decorators       -> Perform an action where they are defined
//  Description Decorators  -> Describe an item for future use by the project

class APIServer {

    routes: string[];

    @enumerable(true)
    getRoutes() {
        return this.getRoutes;
    }
}

// method decorator (action decorator)
function enumerable(val: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = val;
        console.log("Decorator Called");

    }
}