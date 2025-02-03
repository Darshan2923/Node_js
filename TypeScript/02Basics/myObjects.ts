const User = {
    name: 'darshan',
    email: 'darshan@lco.dev',
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }

createUser({ name: "fish", isPaid: false });

function createCourse(): { name: string, price: number } {
    return { name: 'reactjs', price: 399 };
}


export { };