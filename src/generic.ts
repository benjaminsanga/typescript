function addUser<T>(user: T) {
    const id = Math.random().toString(16);

    return {
        ...user,
        id
    }
}

interface UserInterface {
    name: string;
}

const user: UserInterface = {
    name: 'Benjamin'
}

console.log(addUser<UserInterface>(user))

