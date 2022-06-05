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
var person = {
    name: "Andre",
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
/** ARRAYS */
/** any[] will define the array of different types */
var anyArray;
anyArray = ['sports', 1];
var favoriteActivities;
favoriteActivities = ['sports'];
/** TUPLES */
// person.role.push('admin');
// person.role[1] = 10;
/** PRINTS */
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('ADMIN');
}
