function mostrarPersona(persona) {
    var mediaPeso = persona.altura / persona.peso;
    if (persona.nombre) {
        return "".concat(persona.nombre, " tiene una media de ").concat(mediaPeso);
    }
    return "No se quien eres pero tiene una media de ".concat(mediaPeso);
}
var persona = { altura: 1.65, peso: 67 };
console.log(mostrarPersona(persona));
var personaConocida = { altura: 1.65, peso: 67, nombre: "Humberto" };
console.log(mostrarPersona(personaConocida));
