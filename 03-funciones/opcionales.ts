function defecto(mensaje?:string):void{
    console.log(`${mensaje || "Hola mundo"}`)
}

defecto()
defecto('Aquí un dato')