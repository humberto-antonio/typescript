// Funciones Básicas
function sumar( a:string, b:string ){
  return a + b;
}

const contar = ( heroes:string[] ) => {
  return heroes.length;
}
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar='Llamando' ) => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = ( ...personas:string[] ) => {
  return personas.join(", ");
}


// Tipo funcion
const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo:string[] ):void=> {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco:(a:number, b:string, c:boolean, d:string[])=>void
noHaceNadaTampoco = noHaceNada
