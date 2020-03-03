function siguiente(x, done) {
  done(x + 1)
}

function doble(x, done) {
  done(x * 2)
}

function dobledobleDelSiguiente(x, done) {
  done(x * 2)
}

siguiente(2, resultado => { 
  console.log('Siguiente de 8 =>', resultado)
})
