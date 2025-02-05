const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree(3);
identityThree("darshan");

interface Bottle {
    brand: string;
    type: number;
}

function identityFour<Bottle>(args: Bottle): Bottle {
    return args;
}

console.log(identityFour({ brand: "darshan", type: 12 }));
