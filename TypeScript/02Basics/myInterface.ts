// type User={
//     email:string,
//     userId:number
// }

// similar to 

interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial:()=>string,
    startTrial(): string,
    getCoupon(couponName: string, value: number): string,
}

interface User {
    githubLink: string,
}

interface Admin extends User {
    role: "admin" | "learner" | "la";
}

const hitesh: Admin = {
    dbId: 22,
    email: "h@h.com",
    userId: 1122,
    githubLink: "github",
    role: 'learner',
    startTrial: () => {
        return "starting trial";
    },
    getCoupon(name: "Rojan") { //can add or ignore the parentheses values
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
// hitesh.dbId=123 //gives error



export { }