// Creamos un objeto literal llamado "persona"
let persona = {
    nombre: "Alfonso",
    edad: 29,
    ciudad: "Barranquilla",
    profesion: "Ingeniero de Sistemas"
  };
  
  // Imprimimos en consola el objeto "persona" completo
  console.log(persona);
  
  // Creamos una función llamada "presentacion" que devuelve una cadena de texto con los datos de la persona
  function presentacion(persona) {
    return `Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}.`;
  }
  
  // Llamamos a la función "presentacion" y almacenamos el resultado en una variable llamada "mensaje"
  let mensaje = presentacion(persona);
  
  // Imprimimos en consola el valor de la variable "mensaje"
  console.log(mensaje);
  
  // Agregamos una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos
  persona.hobbies = ["leer", "viajar", "cocinar"];
  
  // Imprimimos en consola la propiedad "hobbies" del objeto "persona"
  console.log(persona.hobbies);
  
  // Utilizamos un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies
  for(let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
  }  