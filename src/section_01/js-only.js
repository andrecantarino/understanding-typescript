const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const button = document.querySelector("button");

const add = (num1, num2) => {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(num1.value, num2.value));
})