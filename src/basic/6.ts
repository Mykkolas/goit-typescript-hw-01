interface User {
    name: string,
    age: number,
    email: string,
    address?: {
        city: string,
        country: string
    }
}

const poly: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};

const mango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};


console.log(mango);
console.log(poly);
