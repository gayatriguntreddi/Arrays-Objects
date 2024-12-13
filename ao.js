document.addEventListener("DOMContentLoaded", function() {const products = [
    { name: "Laptop", price: 800, inStock: true },
    { name: "Smartphone", price: 250, inStock: false },
    { name: "Tablet", price: 300, inStock: true },
    { name: "TV", price: 500, inStock: false },
    { name: "Refrigerator",price: 450, inStock: true },
    { name: "AC",price: 350, inStock: true }
  ];
  const display = document.getElementByID("product-details");

  

  display.innerHTML = products.map(product => `
      <p><strong>Name:</strong> ${product.name}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>In Stock:</strong> ${product.inStock}</p>
 
      <hr>
  
  `).join('');
});


function filtered(){
  const filteredProducts = products.filter(product => product.price >= 400);

  const display = document.getElementById("filtered-product-details");
  
  display.innerHTML = filteredProducts.map(product => `
 
      <p><strong>Name:</strong> ${product.name}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>In Stock:</strong> ${product.inStock }</p>
      <hr>
 
  `).join('');
}