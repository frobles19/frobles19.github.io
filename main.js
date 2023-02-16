let textPw = document.querySelector(".pass-valor");
let longPw = document.querySelector(".pass-long-span");
let boton = document.querySelector(".boton");


let mayuscula = document.querySelector('#mayuscula');
let minuscula = document.querySelector('#minuscula');
let simbolo = document.querySelector('#simbolo');
let numero = document.querySelector('#numero');

const mayusCaracter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minusCaracter = 'abcdefghijklmnopqrstuvwxyz';
const numeroCaracter = '0123456789';
const simboloCaracter = '!@"#$%^&()_+=';

let contrasena = '';

function activarBoton() {
    boton.addEventListener('click', generatePw);
}

function generatePw(e) {
    contrasena = '';
    if (mayuscula.checked) {
        contrasena += getMayus();
    }
    if (minuscula.checked) {
        contrasena += getMinus();
    }
    if (numero.checked) {
        contrasena += getNumero();
    }
    if (simbolo.checked) {
        contrasena += getSimbolo();
    }

    if (mayuscula.checked || minuscula.checked || numero.checked || simbolo.checked) {
        completarPw();
    }
}

/*function generatePw() {
    boton.addEventListener('click', function () {
        contrasena = '';
        if (mayuscula.checked) {
            contrasena += getMayus();
        }
        if (minuscula.checked) {
            contrasena += getMinus();
        }
        if (numero.checked) {
            contrasena += getNumero();
        }
        if (simbolo.checked) {
            contrasena += getSimbolo();
        }

        if (mayuscula.checked || minuscula.checked || numero.checked || simbolo.checked) {
            completarPw();
        }
    })
}*/

function completarPw() {
    while (contrasena.length < parseInt(longPw.textContent)) {
        const numberR = randomR();
        if (mayuscula.checked && numberR == 0) {
            contrasena += getMayus();
        }
        if (minuscula.checked && numberR == 1) {
            contrasena += getMinus();
        }
        if (numero.checked && numberR == 2) {
            contrasena += getNumero();
        }
        if (simbolo.checked && numberR == 3) {
            contrasena += getSimbolo();
        }
    }
    textPw.value = contrasena;
}

function randomR() {
    return Math.floor(Math.random() * 4);
}

function randomNum(max) {
    return Math.floor(Math.random() * max);
}

function getMinus() {
    return minusCaracter[randomNum(minusCaracter.length)];
}

function getNumero() {
    return numeroCaracter[randomNum(numeroCaracter.length)];
}

function getSimbolo() {
    return simboloCaracter[randomNum(simboloCaracter.length)];
}

function getMayus() {
    return mayusCaracter[randomNum(mayusCaracter.length)];
}

function showVal(value) {
    longPw.textContent = value;
    generatePw();
}

activarBoton();