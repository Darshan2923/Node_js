"use strict";
function anotherGenericFunction(valOne, valTwo) {
    return {
        valOne, valTwo
    };
}
anotherGenericFunction(3.4, { connection: "", username: "", password: "" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
