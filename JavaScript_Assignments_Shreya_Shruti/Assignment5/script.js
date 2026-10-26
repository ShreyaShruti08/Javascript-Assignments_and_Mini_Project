
function area(length = 5, width = 4) {
  return length * width;
}

const arrowArea = (length = 5, width = 4) => length * width;

let output = `Standard Function Area (Default 5x4): ${area()}\n`;
output += `Arrow Function Area (Custom 10x3): ${arrowArea(10, 3)}\n`;

{
  let blockVar = 10;
}

try {
  output += blockVar;
} catch (error) {
  output += `Scope Test Error: ${error.name}: blockVar is not defined`;
}

document.getElementById("output").textContent = output;
console.log(output);
