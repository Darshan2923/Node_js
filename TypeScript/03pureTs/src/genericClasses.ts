interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherGenericFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne, valTwo
    };
}

anotherGenericFunction(3.4, { connection: "", username: "", password: "" });

// anotherGenericFunction("3", 4);
// anotherGenericFunction(3.4, "4"); // gives error



// class types in generics

interface Quiz {
    name: string,
    type: string,
}

interface Course {
    name: string,
    author: string,
    subject: string,
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T) {
        this.cart.push(product);
    }
}