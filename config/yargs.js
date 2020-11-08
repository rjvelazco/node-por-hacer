const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea'
}
const argv = require('yargs')
    .command('crear', 'Crear una nueva ', {
        descripcion
    })
    .command('actualizar', 'Actualiza todas las tareas', {
        descripcion,
        completado
    })
    .command('listar', 'Mostrar todas las tareas')
    .command('borrar', 'Borrar un tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}