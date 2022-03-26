"use strict";
function addUser(user) {
    const id = Math.random().toString(16);
    return Object.assign(Object.assign({}, user), { id });
}
const user = {
    name: 'Benjamin'
};
console.log(addUser(user));
