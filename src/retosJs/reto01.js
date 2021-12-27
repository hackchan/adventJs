function contarOvejas(ovejas) {
  const cuentaOvejas = ovejas.filter((oveja) => {
    return (
      oveja.color === 'rojo' &&
      oveja.name.toLowerCase().includes('a') &&
      oveja.name.toLowerCase().includes('n')
    )
  })
  return cuentaOvejas
}

export default contarOvejas
