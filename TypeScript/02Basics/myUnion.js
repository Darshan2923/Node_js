"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var darshan = {
    name: "darshan",
    id: 123
};
darshan = { username: 'dp', id: 12 };
function getDbId(id) {
    // making some API calls
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("3");
function getDBId(id) {
    // id.toLowerCase() //gives an error
    if (typeof id === "string") {
        id.toLowerCase();
    }
    console.log("DB id is: ".concat(id));
}
// Arrays
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
// const data3:number[] | string[]=[1,2,"3"]; //Not allowed, only all strings or all numbers
var data3 = [1, 2, "4"];
var seatAllotment;
seatAllotment = "aisle";
