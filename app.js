const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
// const opts = {
//     base: {
//         demand: true,
//         alias: b
//     },
//     limite: {
//         alias: 'l',
//         default: 10
//     }
// }

// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
//     .command('crear', 'Crea por consola la tabla de multiplicar', opts)
//     .help()
//     .argv;
// let base = '2';
let argv2 = process.argv;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: `, colors.green(`${archivo}`)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido ');

}

// let parametro = argv[2];
// let base = parametro.split('=')[1];