"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("darshan");
function identityFour(args) {
    return args;
}
console.log(identityFour({ brand: "darshan", type: 12 }));
