"use strict";
// class User {
//     email: string;
//     name: string;
//     city: string = "";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
// const hitesh = new User('d@d.com', 'darshu');
// hitesh.city = "Mumbai";
// same as
// class User {
//     readonly city: string = "";
//     constructor(
//         public email: string,
//         public name: string
//         // private userId: string
//     ) { }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCnt = 1;
        this.city = "";
        this.email = email;
        this.name = name;
    }
    get appleEmail() {
        return `apple${this.email}`;
    }
    get courseCnt() {
        return this._courseCnt;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Damn");
        }
        this._courseCnt = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCount() {
        this._courseCnt = 4;
    }
}
const hitesh = new User('d@d.com', 'darshu');
// hitesh.city = "Mumbai";
