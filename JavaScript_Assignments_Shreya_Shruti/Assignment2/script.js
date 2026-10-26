

const bill = Number(prompt("Enter bill amount:", 100));
const tipPercent = Number(prompt("Enter tip percentage:", 15));

if (bill >= 0 && tipPercent >= 0) {
  const tip = bill * tipPercent / 100;
  const total = bill + tip;

  const output = `Subtotal: $${bill}
Tip Percentage: ${tipPercent}%
Calculated Tip: $${tip}
Total Amount to Pay: $${total}`;

  console.log(output);
  document.getElementById("output").textContent = output;
} else {
  document.getElementById("output").textContent =
    "Please enter valid non-negative values.";
}
