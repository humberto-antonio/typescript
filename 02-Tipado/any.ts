let avenger:any = 5
let villano
let power

avenger = 'Texto'

console.log(avenger.charAt(0))
avenger = 5

console.log((avenger as number).toFixed(1))

avenger = 'Otro texto'
console.log((<string>avenger).charAt(0))