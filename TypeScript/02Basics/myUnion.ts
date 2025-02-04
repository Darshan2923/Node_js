let score: number | string = 33;

score = 44;
score = "55";
// score=true // gives an error as only two types are allowed;

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let darshan: User | Admin = {
    name: "darshan",
    id: 123
};

darshan = { username: 'dp', id: 12 };

function getDbId(id: number | string) {
    // making some API calls
    console.log(`DB id is: ${id}`);
}

getDbId(3);
getDbId("3");

function getDBId(id: number | string) {
    // id.toLowerCase() //gives an error
    if (typeof id === "string") {
        id.toLowerCase();
    }

    console.log(`DB id is: ${id}`);
}

// Arrays
const data1: number[] = [1, 2, 3];

const data2: string[] = ["1", "2", "3"];

// const data3:number[] | string[]=[1,2,"3"]; //Not allowed, only all strings or all numbers

const data3: (string | number)[] = [1, 2, "4"];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment='crew'; //strict

export { }


