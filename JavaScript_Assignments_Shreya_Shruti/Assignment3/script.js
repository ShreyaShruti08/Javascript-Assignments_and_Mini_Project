
const score = Number(prompt("Enter test score:", 85));
let gradeCode, grade;

if (score >= 90) gradeCode = 1;
else if (score >= 80) gradeCode = 2;
else if (score >= 70) gradeCode = 3;
else if (score >= 60) gradeCode = 4;
else gradeCode = 5;

switch (gradeCode) {
  case 1: grade = "A"; break;
  case 2: grade = "B"; break;
  case 3: grade = "C"; break;
  case 4: grade = "D"; break;
  default: grade = "F";
}

const status = score >= 40 ? "Passed" : "Failed";
const output = `Score: ${score}\nGrade: ${grade}\nStatus: ${status}`;

document.getElementById("output").textContent = output;
console.log(output);
