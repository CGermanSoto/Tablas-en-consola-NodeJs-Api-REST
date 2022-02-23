const { describe } = require('yargs');

const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de tabla'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista la tabla'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default: 10,
        describe:'Número hasta el que se multiplica la base'
    })
    .check((argv, options) => {
        if ( isNaN(argv.b) ){
            throw 'La base tiene que ser un número.'
        }
        return true; 
    })
    .argv;


module.exports = argv;