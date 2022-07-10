"use strict";
/** EMUN */
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
/** OBJECT */
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string] // tuple
// } = {
//   name: "Andre",
//   age: 30,
//   hobbies: ['sports', 'cooking'],
//   role: [2, 'author'],
// }
const person = {
    name: "Andre",
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
};
/** ARRAYS */
/** any[] will define the array of different types */
let anyArray;
anyArray = ['sports', 1];
let favoriteActivities;
favoriteActivities = ['sports'];
/** TUPLES */
// person.role.push('admin');
// person.role[1] = 10;
/** PRINTS */
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('ADMIN');
}
