//ejemplo de Arrow function

mi_funcion = () => 30



una_funcion = () => {
    valor = 50
    console.log("En una funcion arrow valor es: " + valor)  //el console log si esta dentro de la funcion no se debe escribir dos veces
}
console.log(mi_funcion())
una_funcion()


otra_funcion = () => {
    //crea literalmente un objeto
    objeto = {}
    objeto.nombre = "Laura"
    objeto.edad = 23
    return objeto

}

dato = otra_funcion()
console.log(dato)

console.log(mi_funcion())
una_funcion()