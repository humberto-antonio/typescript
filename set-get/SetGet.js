"use strict";
class SetGet {
    set setAtributo(atributo) {
        this.atributo = atributo;
    }
    get getAtributo() {
        return this.atributo;
    }
}
const setGet = new SetGet();
setGet.setAtributo = "Este es un atributo";
console.log(`El atributoes ${setGet.getAtributo}`);
