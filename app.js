var person = {
    name: "Andre",
    age: 30,
    hobbies: ['sports', 'cooking']
};
/** any[] will define the array of different types */
var anyArray;
anyArray = ['sports', 1];
var favoriteActivities;
favoriteActivities = ['sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
