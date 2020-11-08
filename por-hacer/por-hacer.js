const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const guardarDB = () => {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(listadoPorHacer);
        fs.writeFile('./db/data.json', data, (err) => {
            if (err) reject('No se puedo guardar: ', err);
            else resolve('Tarea guardada con exito.');
        });
    });
};

const obtenerIndex = (descripcion) => index = listadoPorHacer.findIndex((tarea) => tarea.descripcion.toLowerCase() === descripcion.toLowerCase());

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        // descripcion: descripcion
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB()
        .then(resp => console.log(resp))
        .catch(err => console.log(err));
    // console.log(listadoPorHacer)
    return porHacer;
};

const actualizar = (descripcion, completado) => {
    cargarDB();

    /**
     * 
     * let nuevoListado = listadoPorHacer.filter(tarea => {
            return tarea.descripcion!=descripcion;
        });
     * if(listado.length == listado.length){
            return false;
        } else {
            listadoPorHacer = nuevoListado;
            guardarDB();
            return true;
        }
     */
    let index = obtenerIndex(descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const eliminar = (descripcion) => {
    cargarDB();
    let index = obtenerIndex(descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}