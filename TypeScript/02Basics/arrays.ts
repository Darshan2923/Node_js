const superHeros = []; //Defines array of type 'never' by default

const superHerosStrings: string[] = [];

// const heroPower:number[]=[]; //below is the same as

const heroPower: Array<number> = [];

type Users = {
    name: string;
    isActive: boolean;
}

const allUsers: Users[] = [];

superHerosStrings.push("spiderman");
heroPower.push(12);
allUsers.push({
    name: "", isActive: false
});

const MLmodels: number[][] = [
    [255, 255, 255],
    []
]

export { }