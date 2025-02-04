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

    protected _courseCnt = 1;

    private readonly city: string = "";
    constructor(public email: string, public name: string) {
        this.email = email;
        this.name = name;
    }

    get appleEmail(): string {
        return `apple${this.email}`
    }

    get courseCnt(): number {
        return this._courseCnt;
    }

    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("Damn");
        }
        this._courseCnt = courseNum;
    }
}

class SubUser extends User {
    isFamily: boolean = true;
    changeCount() {
        this._courseCnt = 4;
    }
}

const hitesh = new User('d@d.com', 'darshu');
// hitesh.city = "Mumbai";