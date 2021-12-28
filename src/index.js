import contarOvejas from './retosJs/reto01'
import listGift from './retosJs/reto02'

console.log('testing reto #01')
console.log('****************')

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

console.log(contarOvejas(ovejas))

console.log('testing reto #02')
console.log('****************')

const carta = 'bici coche balón _playstation bici coche peluche'

console.log(listGift(carta))
