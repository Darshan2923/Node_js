let greetings: string = "Hello Darshan";

// greetings = 7; // Gives error

greetings = greetings.toLowerCase();
console.log(greetings);

// number

let userId = 234.368;
userId.toPrecision(1);
// userId="World"; //TypeScript is so smart that it would detect that above var is a number and not need specific assignment 

// boolean

let isLoggedIn: boolean = false;

// any
// let hero; //has type any
let hero: string;

function getHero() {
    return "modiji";
}

hero = getHero();

export { };
