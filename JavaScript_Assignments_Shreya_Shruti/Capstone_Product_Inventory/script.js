
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 150 }
];

const $ = id => document.getElementById(id);
const category = price =>
  price > 500 ? "Premium" : price <= 50 ? "Budget" : "Standard";

function totalValue(items = products, tax = 0, discount = 0) {
  const subtotal = items.reduce((sum, p) => sum + p.price, 0);
  return subtotal * (1 + tax / 100) * (1 - discount / 100);
}

function render() {
  const filter = $("filter").value;
  let rows = "";

  products.forEach(p => {
    if (filter === "affordable" && p.price >= 200) return;
    if (filter !== "all" && filter !== "affordable" &&
        category(p.price).toLowerCase() !== filter) return;

    rows += `<tr><td>${p.name}</td>
      <td>$${p.price.toFixed(2)}</td>
      <td><span class="tag">${category(p.price)}</span></td></tr>`;
  });

  $("inventory").innerHTML = rows ||
    '<tr><td colspan="3">No matching products.</td></tr>';

  $("count").textContent = products.length;
  $("total").textContent = "$" + totalValue().toFixed(2);
  $("affordable").textContent =
    products.filter(p => p.price < 200).length;
}

$("productForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = $("productName").value.trim();
  const price = Number($("productPrice").value);

  if (!name || !Number.isFinite(price) || price <= 0) {
    $("message").textContent = "Enter a valid name and positive price.";
    return;
  }

  products.push({ name, price });
  $("message").textContent = `${name} added successfully!`;
  e.target.reset();
  render();
});

$("filter").addEventListener("change", render);

$("reportBtn").addEventListener("click", () => {
  let report = "--- INVENTORY REPORT ---\n";

  for (const p of products) {
    if (!p.name) continue;
    report += `${p.name.toUpperCase()} ($${p.price.toFixed(2)}) - ${category(p.price)}\n`;
  }

  const affordable = products.filter(p => p.price < 200);
  const tags = products.map(p =>
    `${p.name.toUpperCase()} costs $${p.price}`
  );

  report += `\nTotal Inventory Value: $${totalValue().toFixed(2)}`;
  report += `\nAffordable Items: ${affordable.map(p => p.name).join(", ")}`;
  report += `\nFormatted Report: ${tags.join(" | ")}`;

  $("report").textContent = report;
});

render();
