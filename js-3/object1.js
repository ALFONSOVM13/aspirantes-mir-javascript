// Creamos la variable pedro de tipo objeto 
let pedro = {
    Nombre: "Pedro Perez",
    Edad: 30,
    Activo: true,
    Hobbies: ["Programar", "Squash", "Piano"]
  };
  
  // Imprimimos en consola el valor de la llave edad
  console.log(pedro.Edad);
  
  // Agregamos una propiedad con llave estatura y valor 1.8
  pedro.Estatura = 1.8;
  
  // Eliminamos la propiedad con llave activo
  delete pedro.activo;
  
  // Recorremos todas las propiedades e imprimimos sus llaves y valores en consola
  for(let key in pedro) {
    console.log(key + ": " + pedro[key]);
  }
  
  // Agregamos una función llamada saluda que retorna una frase con el nombre de la persona
  pedro.saluda = function() {
    return "Hola, me llamo " + this.Nombre;
  };
  
  // Llamamos la función saluda y verificamos el resultado
  console.log(pedro.saluda());