import  { products, sales, customers, Product, Sale, Customer } from './data';

// Pregunta 2:
function topBestSellers(products: Product[], sales: Sale[]): void {
    // Crear un mapa de productos y su cantidad total vendida
    const salesByProduct = sales.reduce((acc, sale) => {
      acc[sale.product_id] = sale.quantity_sold;
      return acc;
    }, {} as Record<number, number>);
  
    // Ordenar los productos por cantidad vendida y seleccionar los 3 primeros
    const top3Products = products
      .map(product => ({ ...product, total_sales: salesByProduct[product.id] || 0 }))
      .sort((a, b) => b.total_sales - a.total_sales)
      .slice(0, 3);
    console.log('Top 3 Best Sellers: ', top3Products);
}
//topBestSellers(products, sales);

//Pregunta 3
function totalSalesByCategory(products: Product[], sales: Sale[]):void {
    // Obtener categorias unicas
    const totalCategories = [... new Set(products.map(product => product.category))];

    let salesByCategory: Record<string, number> = {};
    totalCategories.forEach((category) => {
        const productsByCategory = products.filter(product => product.category === category);
        const totalSalesByCategory:number = productsByCategory.reduce((result, current) => {
            let productSelected = sales.find(sale => sale.product_id === current.id);
            if(productSelected) {
                return result + current.price * productSelected.quantity_sold;
            }
            return result;
        }, 0);
        salesByCategory[category] = totalSalesByCategory;
    });
    console.log('Total sales by category: ', salesByCategory);
}

//totalSalesByCategory(products, sales);

// Pregunta 4
function clientsVip(products: Product[], sales: Sale[], customers: Customer[]): void {
    // Crear un mapa de precios solo una vez
    const prices: Record<number, number> = products.reduce((acc:any, product) => {
      acc[product.id] = product.price;
      return acc;
    }, {});
  
    const topCustomers: Array<{ customer: Customer; total_purchase: number }> = [];
  
    customers.forEach(customer => {
      // Filtrar las ventas por cliente
      const salesByCustomer = sales.filter(sale => sale.customer_id === customer.customer_id);
  
      // Calcular el total de ventas del cliente
      const totalSalesByCustomer = salesByCustomer.reduce((acc, sale) => {
        return acc + (sale.quantity_sold * (prices[sale.product_id] || 0));
      }, 0);
  
      // Verificar si el cliente es VIP
      if (totalSalesByCustomer > 1000000) {
        topCustomers.push({
          customer,
          total_purchase: totalSalesByCustomer,
        });
      }
    });
    if(topCustomers.length > 0) {
        console.log("Clients VIP: ", topCustomers);
    }
    else {
        console.log("Clients VIP not found");
    }
  }
  
//clientsVip(products, sales, customers);

// Pregunta 5
// Se define la estructura del inventario
interface InventoryReport {
    name: string;
    category: string;
    stock: number;
    status: string;
}
function reportProducts(products: Product[]): InventoryReport[] {
    return products.map(({name, category, stock}) => {
        const status = stock < 10 ? "Low Stock": "In Stock";
        return { name, category, stock, status };
    });
}

const inventoryReport = reportProducts(products);
console.log("Inventory Report:", inventoryReport);