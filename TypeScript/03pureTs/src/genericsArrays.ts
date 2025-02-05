function identityFive<T>(products: T[]): T[] {
    console.log(products.length);
    return products;
}

const getMoreSearch = <T>(products: T[]): T => {
    console.log(products.length);
    const myIndex = 3;
    return products[myIndex];
}

