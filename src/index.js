import contarOvejas from './retosJs/reto01'
import listGifts from './retosJs/reto02'
import isValid from './retosJs/reto03'
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

const carta = 'bici   _nintendo coche balon _playstation bici coche peluche'

console.log(listGifts(carta))

const cartaAlterada = '(A)(B)(V)'
console.log('testing reto #03')
console.log('****************')
console.log(isValid(cartaAlterada))
