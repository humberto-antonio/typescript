function mostrarUnMensaje():void{
    console.log(regresarMensaje())
}

function regresarMensaje():string{
    return 'Hola mundo desde typescript'
}

mostrarUnMensaje();

const funcionFlecha = ():string =>{
    return 'Mensaje'
}

const regresarVoid = ():void =>{
    console.log('Sin retorno')
}

console.log(funcionFlecha())

regresarVoid()