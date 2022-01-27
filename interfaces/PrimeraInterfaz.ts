interface Persona{
    nombre: string
}

function caminar(persona: Persona):void {
    console.log(`La persona se llama ${persona.nombre}`);
}

let nuevaPersona = {nombre:"Humberto", edad: 31}

caminar(nuevaPersona)