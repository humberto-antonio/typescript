class Padre2{
    protected nombre:string
    apellido:string

    constructor(nombre:string, apellido:string){
        this.nombre = nombre
        this.apellido = apellido
    }

    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }
}

class Hijo2 extends Padre2{
    edad: number

    constructor(nombre:string, apellido:string, edad:number){
        super(nombre, apellido)
        this.edad =edad
    }

    mostrarNombreHijo(){
        console.log(`Nombre completo es: ${this.nombre}`)
    }

}

const hijo2 = new Hijo2("Jonathan Yael", "Antonio", 2);

console.log(hijo2.mostrarNombreHijo());