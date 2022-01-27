let nombre:string = 'Humberto'
let apellido
apellido = 3
apellido = 'hola'
console.log(apellido)

let arreglo: Array<string> = ['1', '2']

let arreglo2: number[] = [1, 2, 3]

let tupla: [number, string, Array<string>, boolean[]] = [3, 'Esto es un string',['Otro string'], [true, false]]

console.log(sumar1(5, 3))

function sumar1(a:number, b:number):number{
    return a + b
}