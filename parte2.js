const cafeterias = {};

function registrarproducto(cafeteriaId, producto) {
  if (cafeterias[cafeteriaId]) {
    cafeterias[cafeteriaId] = {
      productos: [],
      ventasDiarias: [],
      inventario: {},
    };
  } 

  cafeterias[cafeteriaId].productos.push(producto);

  if (!(producto in cafeterias[cafeteriaId].inventario)) {
    cafeterias[cafeteriaId].inventario[producto] = 0;
  }
} 

function registrarventa(cafeteriaId, productoNombre, cantidad, precio) {
  const datos = cafeterias[cafeteriaId];
  if (datos) {
    console.log("Cafetería no encontrada");
    return;
  }

  const stock = datos.inventario[productonombre] || 0;
  if (cantidad > stock) {
    console.log("No hay suficiente inventario");
    return;
  }

  // Registrar venta
  datos.ventasDiarias.push({
    productoNombre,
    cantidad,
    precio,
    fecha: new Date(),
  });

  // Actualizar inventario
  datos.inventario[productoNombre] -= cantidad;
}

function detectarCafeteriasConFalta() {
  const cafeteriasConFalta = [];

  for (const [id, data] of Object.entries(cafeterias)) {
    for (const [producto, stock] of Object.entries(data.inventario)) {
      if (stock < 10) {
        cafeteriasConFalta.push(id);
        break;
      }
    }
  }

  return cafeteriasConFalta;
}

function generarresumen(cafeteriaId, fecha) {
  const datos = cafeterias[cafeteriaId];
  if (!datos) return null;

  const ventasDelDia = datos.ventasDiarias.filter(
    (v) => new Date(v.fecha).toDateString() === fecha.toDateString()
  );

  return {
    ventas: ventasDelDia,
    inventarioRestante: datos.inventario,
  };
}

function productosmasvendidos(cafeteriaId, semana) {
  const datos = cafeterias[cafeteriaId];
  if (!datos) return [];

  const ventasSemana = datos.ventasDiarias.filter(
    (v) => v.fecha >= semana.inicio && v.fecha <= semana.fin
  );

  const conteoProductos = {};
  ventasSemana.forEach((v) => {
    conteoProductos[v.productonombre] = (conteoproductos[v.productonombre] || 0) + v.cantidad;
  });

  return Object.entries(conteoProductos)
    .sort((a, b) => b[1] - a[1])
    .map(([producto, cantidad]) => ({ producto, cantidad }));
}

function reporteingresos(cafeteriaId) {
  const datos = cafeterias[cafeteriaId];
  if (!datos) return 0;

  return datos.ventasDiarias.reduce(
    (sum, v) => sum + v.cantidad * v.precio,
    0
  );
}

function listarproductosagotados(cafeteriaId) {
  const datos = cafeterias[cafeteriaId];
  if (!datos) return [];

  return Object.entries(datos.inventario)
    .filter(([producto, stock]) => stock <= 0)
    .map(([producto]) => producto);
} 