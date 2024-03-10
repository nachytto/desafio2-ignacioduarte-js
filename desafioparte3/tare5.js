// Obtiene los elementos del DOM
var digito1 = document.getElementById('digito1');
var digito2 = document.getElementById('digito2');
var digito3 = document.getElementById('digito3');
var botonIngresar = document.getElementById('ingresar');
var resultado = document.getElementById('resultado');

var contraseñaCorrecta1 = "911";
var contraseñaCorrecta2 = "714"

botonIngresar.addEventListener('click', () => {
    var valor1 = digito1.value;
    var valor2 = digito2.value;
    var valor3 = digito3.value;

    var contraseñaIngresada = valor1 + valor2 + valor3;

    if (contraseñaIngresada === contraseñaCorrecta1) {
        resultado.textContent = "password 1 es correcta";
    } else if (contraseñaIngresada === contraseñaCorrecta2) {
        resultado.textContent = "password 2  es correcta";
    } else {
        resultado.textContent = "password incorrecta";
    }
});