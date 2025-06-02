// Clase Producto
class Producto {
  constructor(nombre, cantidadVendida, precioUnitario, inventarioRestante) {
    this.nombre = nombre;
    this.cantidadVendida = cantidadVendida;
    this.precioUnitario = precioUnitario;
    this.inventarioRestante = inventarioRestante;
  }

  totalVentas() {
    return this.cantidadVendida * this.precioUnitario;
  }
}

// Función para generar reporte de productos de una cafetería
function generarReporte(productos) {
  let i = 0;

  console.log("=== Reporte Diario ===");

  while (i < productos.length) {
    const producto = productos[i];
    console.log(`Producto: ${producto.nombre}`);
    console.log(`Cantidad Vendida: ${producto.cantidadVendida}`);
    console.log(`Precio Unitario: $${producto.precioUnitario}`);
    console.log(`Inventario Restante: ${producto.inventarioRestante}`);
    console.log(`Total en Ventas: $${producto.totalVentas()}`);
    console.log('-----------------------------');
    i++;
  }

  // Contar productos disponibles al cierre (inventario > 0)
  let disponibles = 0;
  let j = 0;
  do {
    if (productos[j].inventarioRestante > 0) {
      disponibles++;
    }
    j++;
  } while (j < productos.length);

  console.log(`Productos disponibles al cierre del día: ${disponibles}`);
}

// Ejemplo de uso
const productosCafeteria = [
  new Producto("Café", 30, 1.5, 20),
  new Producto("Empanada", 25, 2.0, 5),
  new Producto("Jugo", 15, 2.5, 0),
  new Producto("Tostada", 10, 1.0, 8)
];

// Llamar a la función con el array de productos
generarReporte(productosCafeteria);
