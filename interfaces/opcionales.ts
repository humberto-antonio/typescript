interface Persona{
    altura: number
    peso: number
    nombre?: string
}

function mostrarPersona(persona:Persona):string{
    let mediaPeso:number = persona.altura / persona.peso

    if(persona.nombre){
        return `${persona.nombre} tiene una media de ${mediaPeso}`
    }

    return `No se quien eres pero tiene una media de ${mediaPeso}`
}

let persona = {altura: 1.65, peso: 67}
console.log(mostrarPersona(persona))

let personaConocida = {altura: 1.65, peso: 67, nombre:"Humberto"}
console.log(mostrarPersona(personaConocida))