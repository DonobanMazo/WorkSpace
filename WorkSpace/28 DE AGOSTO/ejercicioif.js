function positivo() {
    const numero = document.getElementById("numero");
    const numeroint = parseInt(numero.value);

    if (numeroint >= 0) {
        alert("El numero es positivo");
    } else {
        alert("El numero es negativo");
    }


}

function esPar() {
    const numero = document.getElementById("par");
    const numeroInt = parseInt(numero.value);

    if (numeroInt % 2 == 0) {
        alert("El numero es par");
    } else {
        alert("El numerp es impar");
    }
}