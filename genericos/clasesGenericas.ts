class Persona<T>{
    nombre: string
    edad: T

    mostrar<T>(dato:T):T{
        return dato
    }
}

const persona = new Persona();

console.log(persona.mostrar("Humberto"))