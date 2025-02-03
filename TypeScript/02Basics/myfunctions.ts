function addTwo(num: number): number {
    return num + 2;
    // return "hello";
}

console.log(addTwo(5));

function getUpper(val: string) {
    return val.toUpperCase();
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

loginUser("h", "h@h.com");

// function getValue(myVal:number):string{
//     if(myVal<5){
//         return true;
//     }
//     return "200 Ok"
// }

const getHello = (s: string): string => {
    return "";
}

const heros = ["thor", "spiderman", "ironman"];
//  const heros=[1,2,3];

heros.map((hero: string): string => {
    return `hero is ${hero}`;
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export { };