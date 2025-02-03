type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number
}

let myUser: User = {
    _id: '1234',
    name: 'Harsh',
    email: 'h@h.com',
    isActive: true
}

myUser.email = "f@f.com";
// myUser._id="yoda"; //error

type cardNumber = {
    cardnumber: string;
}

type cardDate = {
    carddate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

export { };