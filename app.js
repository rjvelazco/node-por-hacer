const { argv } = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log('1');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        console.log('================ Por Hacer ================'.green);
        for (let tarea of listado) {
            if (tarea.completado) {
                console.log(`[x] - ${tarea.descripcion}`);
            } else {
                console.log(`[ ] - ${tarea.descripcion}`);
            }
        }
        console.log('============================================'.green);
        break;
    case 'actualizar':
        console.log()
        let actualizado = porHacer.actualizar(argv.descripcion, argv.descripcion == 'true');
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.eliminar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        break;
}