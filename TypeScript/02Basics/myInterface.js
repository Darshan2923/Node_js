"use strict";
// type User={
//     email:string,
//     userId:number
// }
Object.defineProperty(exports, "__esModule", { value: true });
var hitesh = {
    dbId: 22,
    email: "h@h.com",
    userId: 1122,
    githubLink: "github",
    role: 'learner',
    startTrial: function () {
        return "starting trial";
    },
    getCoupon: function (name) {
        return "10% off";
    },
};
// const hitesh: User = {
//     dbId: 22,
//     email: "h@h.com",
//     userId: 1122,
//     githubLink:"github",
//     startTrial: () => {
//         return "starting trial";
//     },
//     getCoupon(name: "Rojan") { //can add or ignore the parentheses values
//         return "10% off";
//     },
// };
hitesh.email = "H@hc.com";
