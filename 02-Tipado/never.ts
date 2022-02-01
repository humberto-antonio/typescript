function regresarNever(mensaje:string):never{
    throw new Error(mensaje)
}

console.log(regresarNever2('Error'))
regresarNever('Ups!!')

function regresarNever2(mensaje:string): (string | never){
    
    if(false){
        throw new Error(mensaje)
    }

    return 'No hay error'
}
