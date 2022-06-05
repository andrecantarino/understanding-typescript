var person = {
    name: "Andre",
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
/** ARRAYS */
/** any[] will define the array of different types */
var anyArray;
anyArray = ['sports', 1];
var favoriteActivities;
favoriteActivities = ['sports'];
/** TUPLES */
person.role.push('admin');
// person.role[1] = 10;
/** PRINTS */
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
