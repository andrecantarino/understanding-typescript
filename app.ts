const person: {
  name: string,
  age: number,
  hobbies: string[],
} = {
  name: "Andre",
  age: 30,
  hobbies: ['sports', 'cooking']
}

/** any[] will define the array of different types */
let anyArray: any[];
anyArray = ['sports', 1];

let favoriteActivities: string[];
favoriteActivities = ['sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

