class Animal{
    nombre: string

    constructor(nombre: string){
        this.nombre = nombre
    }

    public getNombre(){
        return this.nombre
    }
}

const animal = new Animal("Perro")

console.log(`El animal es un ${animal.getNombre()}`);