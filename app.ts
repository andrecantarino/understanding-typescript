const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string] // tuple
} = {
  name: "Andre",
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: [2, 'author'],
}

/** ARRAYS */
/** any[] will define the array of different types */
let anyArray: any[];
anyArray = ['sports', 1];

let favoriteActivities: string[];
favoriteActivities = ['sports'];

/** TUPLES */
person.role.push('admin');
// person.role[1] = 10;

/** PRINTS */
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

