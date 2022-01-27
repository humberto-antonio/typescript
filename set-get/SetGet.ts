class SetGet{
    private atributo: string

    set setAtributo(atributo: string){
        this.atributo = atributo
    }

    get getAtributo(){
        return this.atributo
    }
}

const setGet = new SetGet();

setGet.setAtributo = "Este es un atributo"
console.log(`El atributoes ${setGet.getAtributo}`)