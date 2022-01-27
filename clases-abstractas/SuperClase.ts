abstract class SuperClass{
    abstract metodo1():void
    saludo():void{
        console.log('Hola mundo')
    }
}

class Hijo extends SuperClass{
    
    metodo1():void{
        console.log('Hola metodo')
    }
}

const hijo = new Hijo()

console.log(hijo.saludo())