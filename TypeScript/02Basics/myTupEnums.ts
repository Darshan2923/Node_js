
// Order doesn't matter
// const user1: (string | number)[] = ["dp", 1]
// const user2: (string | number)[] = [1, "dp"]

let user1: [string, number, boolean];

user1 = ["dp", 131, true];
// user1=[false,"123",123]; //gives error

let rgb: [number, number, number] = [255, 123, 121];

type User = [number, string];

let newUser: User = [112, "eg@google.com"];
newUser[1] = "hc.verma";
// newUser.push(true);  //Biggest flaws in tuples


export { };