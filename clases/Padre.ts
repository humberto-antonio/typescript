class Padre{
    nombre:string
    apellido:string

    constructor(nombre:string, apellido:string){
        this.nombre = nombre
        this.apellido = apellido
    }

    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }
}

class Hijo extends Padre{
    edad: number

    constructor(nombre:string, apellido:string, edad:number){
        super(nombre, apellido)
        this.edad =edad
    }

    mostrarNombreHijo(){
        console.log(`Nombre completo es: ${this.getNombreCompleto()}`)
    }

}

const hijo = new Hijo("Jonathan Yael", "Antonio", 2);

console.log(hijo.mostrarNombreHijo());