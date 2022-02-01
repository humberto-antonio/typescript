let nombre = 'Humberto'

function mostrarNombre(dato:number){
    console.log(dato + 1)
}

(() => {
    console.log(nombre)
})()