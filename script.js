// PRIMERO PRE ENTREGA CODERHOUSE

//CALCULO DE CUOTAS DE UN PRODUCTO


let pregunta = prompt("¡Bienvenido a Interbank!, ¿Deseas simular tus cuotas?")


while (pregunta != "no") {
    if (pregunta == "si") {
        let compra = Number(prompt("¿Cual es el monto de la compra?"))
        let interes = Number(prompt("¿Cuanto es la tasa de interes anual? (TEA)(%)"))
        let meses = Number(prompt("¿En cuantos meses?"))
        let conversionTEA = interes / 100
        let conversionTEM = Math.pow((1 + conversionTEA),(1 / 12)) - 1
        let resultado = (conversionTEM * compra) / (1 - (1 + conversionTEM) ** (- meses))
        alert("En base a tu tasa mensual de " + (conversionTEM * 100).toFixed(2) + "%" + "," + " tu cuota aproximada es: " + resultado.toFixed(2))
    } else{
        alert("ingrese los datos correctamente")
    }

    pregunta = prompt(" Bienvenido!, Quieres saber el capital de tu inversion?")
}
alert("Gracias por tu visita")