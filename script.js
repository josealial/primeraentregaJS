function obtenerPrecioDestino(destino) {
    switch (destino) {
        case "montevideo":
            return "El pasaje a Montevideo cuesta 30 Dolares"
        case "colonia":
            return "El pasaje a Colonia cuesta 50 Dolares"
        case "rocha":
            return "El pasaje a Rocha cuesta 60 Dolares"
        default:
            return "De momento no contamos con ese destino"
    }
}

let respuesta

while (true) {
    respuesta = prompt("Ingrese el destino para saber su precio: \nMontevideo\nColonia\nRocha\nPara cancelar ingrese: salir")

    if (respuesta.toLowerCase() === "salir") {

        break
    }

    alert(obtenerPrecioDestino(respuesta.toLowerCase()))
}
