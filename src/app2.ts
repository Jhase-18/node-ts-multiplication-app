const fs = require('fs');
const path = require('path');

// Función para crear la tabla de multiplicar
function createMultiplicationTable(number:number) {
  let result = `Tabla del ${number}\n\n`;
  for (let i = 1; i <= 10; i++) {
    result += `${number} x ${i} = ${number * i}\n`;
  }
  return result;
}

// Crear el contenido de la tabla
const table = createMultiplicationTable(5);

// Imprimir el encabezado y la tabla en la consola
console.log("===========================");
console.log(table);

// Guardar el resultado en un archivo
const outputPath = path.join('output', 'tabla-5.txt');
fs.mkdirSync(path.dirname(outputPath), { recursive: true }); // Crear la carpeta si no existe
fs.writeFileSync(outputPath, table);

console.log(`El resultado se ha guardado en ${outputPath}`);
