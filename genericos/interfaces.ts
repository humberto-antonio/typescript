interface Carro<T>{
    marca: T
}

let objeto: Carro<string> = {marca: "Chevrolet"}

console.log(objeto.marca);