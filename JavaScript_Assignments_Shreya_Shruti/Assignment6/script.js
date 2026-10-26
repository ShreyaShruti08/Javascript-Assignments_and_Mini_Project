

const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
];

let output = "-- All Products (forEach) --\n";
products.forEach(p => output += `Item: ${p.name} - Price: $${p.price}\n`);

const filtered = products.filter(p => p.price < 50);
output += "\n-- Filtered Products (Price < $50) --\n";
output += JSON.stringify(filtered) + "\n";

const mapped = products.map(p => `${p.name.toUpperCase()} costs $${p.price}`);
output += "\n-- Mapped Product Tags (map) --\n";
output += JSON.stringify(mapped, null, 2);

document.getElementById("output").textContent = output;
console.log(output);


