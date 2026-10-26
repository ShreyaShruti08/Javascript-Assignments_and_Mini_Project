
const name = "Alice";
let age = 25;
var isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript"];

const output = [
  `Name: ${name} (Type: ${typeof name})`,
  `Age: ${age} (Type: ${typeof age})`,
  `Is Employed: ${isEmployed} (Type: ${typeof isEmployed})`,
  `Skills: ${JSON.stringify(skills)} (Type: ${typeof skills})`
];

document.getElementById("output").textContent = output.join("\n");
console.log(output.join("\n"));

