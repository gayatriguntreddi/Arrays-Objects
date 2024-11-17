document.addEventListener("DOMContentLoaded", function() {const products = [
    { name: "Laptop", price: 800, inStock: true },
    { name: "Smartphone", price: 500, inStock: false },
    { name: "Tablet", price: 300, inStock: true },
    { name: "TV", price: 500, inStock: false },
    { name: "Refrigerator",price: 450, inStock: true },
    { name: "AC",price: 350, inStock: true }
  ];
  const display = document.getElementById("product-details");

  display.innerHTML = products.map(product => `
    <div>
      <p><strong>Name:</strong> ${product.name}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>In Stock:</strong> ${product.inStock}</p>
    </div>
    <hr>
  `).join('');
});