type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): Partial<User> {
    return { ...initialValues }
}

createOrUpdateUser({
    email: 'user@mail.com',
    password: 'password123'
});
