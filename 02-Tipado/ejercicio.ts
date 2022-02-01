(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano:[string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:Array<string> = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Fuerza{
      RICO = 'Rico',
      ACUATICO = 'Acuatico',
      VELOZ = 'Velocidad',
      EXTRATERRESTRE = 'Kriptoniano'
    }

    const fuerzaFlash = Fuerza.VELOZ
    const fuerzaSuperman = Fuerza.EXTRATERRESTRE
    const fuerzaBatman = Fuerza.RICO
    const fuerzaAcuaman = Fuerza.ACUATICO
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():never{
      throw new Error('Auxiio!!!')
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  