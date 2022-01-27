interface General{
    (nombre:string, apellido:string, edad:number):void
}

let general:General
general = function(nombre:string, apellido:string, edad:number):void{
    console.log(`Nombre: ${nombre}, Apellido: ${apellido}, edad: ${edad}`)
}

general("Humberto", "Antonio", 31);