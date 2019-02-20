
const descripcion = {
    demand: true,
    alias : 'd',
     desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como compeltado'
};

const argv = require('yargs')
.command('crear','crea un elemento por hacer',{
    descripcion
})
.command('actualizar','actualiza el estado completado de una tarea', {
    descripcion ,
     completado 

    })
.command('borrar','elimina las tareas', {
    descripcion
})
.help()
.argv; 







module.exports ={
    argv
}

