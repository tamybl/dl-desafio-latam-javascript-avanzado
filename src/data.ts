interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
}

interface Sale {
    sale_id: number;
    product_id: number;
    quantity_sold: number;
    sale_date: string; 
    customer_id: number;    
}

interface Customer {
    customer_id: number;
    name: string;
    email: string;
  }
  
// Datos de los productos, ventas y clientes
const products: Product[] = [
    { id: 1, name: "Wireless Earbuds", price: 129990, category: "Electronics", stock: 100 },
    { id: 2, name: "Stainless Steel Water Bottle", price: 35990, category: "Home & Kitchen", stock: 200 },
    { id: 3, name: "Yoga Mat", price: 25000, category: "Sports & Outdoors", stock: 150 },
    { id: 4, name: "Smartphone Stand", price: 12990, category: "Accessories", stock: 180 },
    { id: 5, name: "Laptop Sleeve", price: 29990, category: "Electronics", stock: 130 },
    { id: 6, name: "Bluetooth Speaker", price: 145000, category: "Electronics", stock: 90 },
    { id: 7, name: "Reusable Coffee Cup", price: 18990, category: "Home & Kitchen", stock: 250 },
    { id: 8, name: "Resistance Bands", price: 24000, category: "Sports & Outdoors", stock: 175 },
    { id: 9, name: "Desk Organizer", price: 52500, category: "Office Supplies", stock: 70 },
    { id: 10, name: "Notebook", price: 766500, category: "Office Supplies", stock: 8 }
  ];
  
  const sales: Sale[] = [
    { sale_id: 1, product_id: 1, quantity_sold: 12, sale_date: "2024-11-10", customer_id: 101 },
    { sale_id: 2, product_id: 2, quantity_sold: 1, sale_date: "2024-11-11", customer_id: 102 },
    { sale_id: 3, product_id: 3, quantity_sold: 7, sale_date: "2024-11-12", customer_id: 103 },
    { sale_id: 4, product_id: 4, quantity_sold: 5, sale_date: "2024-11-13", customer_id: 104 },
    { sale_id: 5, product_id: 5, quantity_sold: 1, sale_date: "2024-11-14", customer_id: 105 },
    { sale_id: 6, product_id: 6, quantity_sold: 10, sale_date: "2024-11-15", customer_id: 106 },
    { sale_id: 7, product_id: 7, quantity_sold: 4, sale_date: "2024-11-16", customer_id: 107 },
    { sale_id: 8, product_id: 8, quantity_sold: 3, sale_date: "2024-11-17", customer_id: 108 },
    { sale_id: 9, product_id: 9, quantity_sold: 2, sale_date: "2024-11-18", customer_id: 109 },
    { sale_id: 10, product_id: 10, quantity_sold: 2, sale_date: "2024-11-19", customer_id: 110 },
    { sale_id: 11, product_id: 6, quantity_sold: 8, sale_date: "2024-11-19", customer_id: 101 }
  ];
  
  const customers: Customer[] = [
    { customer_id: 101, name: "John Doe", email: "johndoe@example.com" },
    { customer_id: 102, name: "Jane Smith", email: "janesmith@example.com" },
    { customer_id: 103, name: "Alice Johnson", email: "alicejohnson@example.com" },
    { customer_id: 104, name: "Michael Brown", email: "michaelbrown@example.com" },
    { customer_id: 105, name: "Emma Davis", email: "emmadavis@example.com" },
    { customer_id: 106, name: "William Miller", email: "williammiller@example.com" },
    { customer_id: 107, name: "Sophia Wilson", email: "sophiawilson@example.com" },
    { customer_id: 108, name: "James Anderson", email: "jamesanderson@example.com" },
    { customer_id: 109, name: "Olivia Martinez", email: "oliviamartinez@example.com" },
    { customer_id: 110, name: "Liam Garcia", email: "liamgarcia@example.com" }
  ];
  
  // Exportar los datos para usarlos en index.ts
  export { products, sales, customers, Product, Sale, Customer };  