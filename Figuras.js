// Código del cuadrado
console.group("cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm.");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado mide: " + areaCuadrado + " cm²");

console.groupEnd();
// Código del triangulo
console.group("Tríangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del cuadrado miden: "
//     + ladoTriangulo1 + " cm, "
//     + ladoTriangulo2 + " cm y "
//     + baseTriangulo + " cm."
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo mide: " + alturaTriangulo + " cm.");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triángulo mide: " + perimetroTriangulo + " cm.");

function areaTraingulo(base, altura) {
    return (base + altura) / 2;
}
// console.log("El área del triángulo mide: " + areaTraingulo + " cm²");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// const radioCirculo = 4;
// console.log("El radio del circulo mide: " + radioCirculo + " cm.");

function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diámetro del circulo mide: " + diametro + " cm.");

const PI = Math.PI;
// console.log("PI es: " + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//console.log("El área del circulo mide: " + areaCirculo + " cm.");

console.groupEnd();

// Interación con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}