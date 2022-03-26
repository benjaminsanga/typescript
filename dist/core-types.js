"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// }  = {
//     name: 'benjamin',
//     age: 30,
//     hobbies: ['games', 'code'],
//     role: [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN"; /*= 5*/
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR"; /*= 'AUTHOR'*/
})(Role || (Role = {}));
;
const person = {
    name: 'benjamin',
    age: 30,
    hobbies: ['games', 'code'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10
let favoriteActivites; // any[]
favoriteActivites = ['match', 'yawo', 1, true];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
