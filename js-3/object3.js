// Crear variable receta
let receta = {};

// Agregar propiedad nombre
receta.nombre = "Sandwich";

// Agregar propiedad ingredientes con arreglo vacío
receta.ingredientes = [];

// Agregar objeto al arreglo ingredientes
receta.ingredientes.push({nombre: "Pan", cantidad: 2});

// Agregar otro ingrediente al arreglo
receta.ingredientes.push({nombre: "Queso", cantidad: 1});

// Imprimir en la consola el nombre del primer ingrediente
console.log(receta.ingredientes[0].nombre); // Debería imprimir "Pan"

// Sumar todas las cantidades de los ingredientes y mostrar el resultado en consola
let totalCantidad = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
  totalCantidad += receta.ingredientes[i].cantidad;
}
console.log("El total de la cantidad de ingredientes es: " + totalCantidad); 