class Producto {
  constructor(nombre, cantidad, nivelCritico) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.nivelCritico = nivelCritico;
  }

  estaEnRiesgo() {
    return this.cantidad < this.nivelCritico;
  }
} 

function evaluarCafeteria(productos) {
  let enRiesgo = false;

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    if (producto.estaEnRiesgo()) {
      console.log(` Riesgo: ${producto.nombre} por debajo del nivel crítico (${producto.cantidad} < ${producto.nivelCritico})`);
      enRiesgo = true;
    }
  }

  if (enRiesgo) {
    console.log(" Esta cafetería está en RIESGO OPERATIVO. Se requiere apoyo.");
  } else {
    console.log(" Esta cafetería está OPERANDO normalmente.");
  }
}

function ingresarProductos() {
  const productos = [];
  let continuar = true;

  do {
    const nombre = prompt("Ingrese el nombre del producto:");
    const cantidad = parseInt(prompt("Ingrese la cantidad actual del producto:"), 10);
    const nivelCritico = parseInt(prompt("Ingrese el nivel crítico del producto:"), 10);

    const producto = new Producto(nombre, cantidad, nivelCritico);
    productos.push(producto);

    let opcion = prompt("¿Desea ingresar otro producto? (si / no):").toLowerCase();
    if (opcion === "no") {
      continuar = false;
    } else if (opcion !== "si") {
      console.log("Opción no reconocida. Saliendo...");
      continuar = false;
    }

  } while (continuar);

  return productos;
}


const productosIngresados = ingresarProductos();
evaluarCafeteria(productosIngresados);
