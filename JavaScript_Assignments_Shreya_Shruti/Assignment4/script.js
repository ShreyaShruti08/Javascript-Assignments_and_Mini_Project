
let output = "-- Multiplication Table of 5 --\n";

for (let i = 1; i <= 5; i++) {
  output += `5 x ${i} = ${5 * i}\n`;
}

output += "\n-- First number > 10 divisible by 6 --\n";

let n = 11;
while (true) {
  if (n % 6 === 0) {
    output += `Found: ${n}\n`;
    break;
  }
  n++;
}

//output += "\n-- do...while with continue --\n";

document.getElementById("output").textContent = output;
console.log(output);
