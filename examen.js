class ReporteDiario {
  constructor(nombreCafeteria) {
    this.nombreCafeteria = nombreCafeteria;
    this.productosVendidos = [];
  }

  agregarProducto(nombre, cantidad, precioUnitario) {
    const producto = {
      nombre,
      cantidad,
      precioUnitario,
      total: cantidad * precioUnitario,
    };
    this.productosVendidos.push(producto);
  }

  calcularTotalDia() {
    return this.productosVendidos.reduce((sum, p) => sum + p.total, 0);
  }

  mostrarReporte() {
    console.log(`\nReporte diario - Cafetería: ${this.nombreCafeteria}`);
    for (const producto of this.productosVendidos) {
      console.log(`Producto: ${producto.nombre}, Cantidad: ${producto.cantidad}, Total: $${producto.total}`);
    }
    console.log(`Total del día: $${this.calcularTotalDia()}`);
  }
}

const cafeterias = ['Contaduría', 'Ingeniería', 'Medicina'];
const reportes = [];

let comida = 0;
while (comida < cafeterias.length) {
  const reporte = new ReporteDiario(cafeterias[comida]);

  let continuar = true;
  do {
    const productoIndex = Math.floor(Math.random() * 3); // 0, 1 o 2
    let nombreProducto;

    switch (productoIndex) {
      case 0:
        nombreProducto = 'café';
        break;
      case 1:
        nombreProducto = 'sándwich';
        break;
      case 2:
        nombreProducto = 'jugo';
        break;
      default:
        nombreProducto = 'desconocido';
    }

    const cantidad = Math.floor(Math.random() * 10) + 1;
    const precio = Math.floor(Math.random() * 5) + 1;
    reporte.agregarProducto(nombreProducto, cantidad, precio);

    continuar = Math.random() < 0.5; // 50% de seguir
  } while (continuar);

  reportes.push(reporte);
  comida++;
}

// Mostrar todos los reportes
for (const reporte of reportes) {
  reporte.mostrarReporte();
  console.log('Finalizó el reporte');
}

