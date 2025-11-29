#!/usr/bin/env node

const degit = require('degit');
const path = require('path');

// process.argv contiene los argumentos de la línea de comandos.
// argv[0] es node, argv[1] es el script, argv[2] es el primer argumento real.
const targetDir = process.argv[2];

if (!targetDir) {
  console.error('❌ Por favor, especifica el nombre del directorio para tu proyecto.');
  console.log('Ejemplo: npx create-frameword-app mi-proyecto');
  process.exit(1);
}

const repo = 'ximosa/frameword-astro';
const emitter = degit(repo, {
  cache: false,
  force: true,
  verbose: true,
});

console.log(`🚀 Creando un nuevo sitio Frameword Astro en ./${targetDir}`);

emitter.clone(path.resolve(process.cwd(), targetDir))
  .then(() => {
    console.log('✅ ¡Proyecto creado exitosamente!');
    console.log('\nAhora, ejecuta los siguientes comandos:');
    console.log(`  cd ${targetDir}`);
    console.log('  npm install');
    console.log('  npm run dev');
  })
  .catch(err => {
    console.error('❌ Hubo un error al crear el proyecto:');
    console.error(err.message);
    process.exit(1);
  });