import { nombre, Carro, mostrar } from './moduloa'
import { Persona } from './moduloa'
import * as paquete from './moduloa'
import PersonaExportDefault from './moduloc'

console.log(nombre)

const persona = new Persona();
persona.nombre = "Humberto"
console.log(persona.nombre)

console.log(mostrar());
console.log(paquete.mostrar());
