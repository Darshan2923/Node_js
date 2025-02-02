"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Darshan";
// greetings = 7; // Gives error
greetings = greetings.toLowerCase();
console.log(greetings);
// number
var userId = 234.368;
userId.toPrecision(1);
// userId="World"; //TypeScript is so smart that it would detect that above var is a number and not need specific assignment 
// boolean
var isLoggedIn = false;
