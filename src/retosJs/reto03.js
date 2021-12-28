export default function isValid(letter) {
  return /.*(\([^(){[][\w0ñÑáéíóúÁÉÍÓÚ]+\)|(^\(\w\))).*/gim.test(letter)
}
