const {crearArchivo} = require('./logica/multiplicar');
const argv = require('./cofig/yargs'); 

console.clear()


crearArchivo(argv.b, argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));