class Animal2{
    private nombre: string

    constructor(nombre: string){
        this.nombre = nombre
    }

    public getNombre(){
        return this.nombre
    }
}

const animal2 = new Animal2("Perro")

console.log(`El animal es un ${animal2.getNombre()}`);