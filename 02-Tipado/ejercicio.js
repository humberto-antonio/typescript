"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Fuerza;
    (function (Fuerza) {
        Fuerza["RICO"] = "Rico";
        Fuerza["ACUATICO"] = "Acuatico";
        Fuerza["VELOZ"] = "Velocidad";
        Fuerza["EXTRATERRESTRE"] = "Kriptoniano";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.VELOZ;
    const fuerzaSuperman = Fuerza.EXTRATERRESTRE;
    const fuerzaBatman = Fuerza.RICO;
    const fuerzaAcuaman = Fuerza.ACUATICO;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        throw new Error('Auxiio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
