// Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}
// Código del triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function alturaIsosceles(lado1, base) {
    const lado2 = base / 2;
    return Math.sqrt((lado1 * lado1) + (lado2 * lado2));
}
function areaTrianguloIsosceles(lado1, lado2, base){
    if (lado1 == lado2){
        altura = alturaIsosceles(lado1, base);
        return areaTriangulo(base, altura);}
    else {return alert("No es un triángulo Isósceles");}
}
// Código del círculo
function diametroCirculo(radio) {
    return radio * 2;
}
const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// Interación con HTML
// Cuadrado
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
// Triángulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const input2 = document.getElementById("InputTrianguloLado2");
    const input3 = document.getElementById("InputTrianguloBase");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTrianguloBase");
    const input2 = document.getElementById("InputTrianguloAltura");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    const area = areaTriangulo(value1, value2);
    alert(area);
}
function calcularAreaTrianguloIsosceles() {
    const input1 = document.getElementById("InputTrianguloIsoscelesLado1");
    const input2 = document.getElementById("InputTrianguloIsoscelesLado2");
    const input3 = document.getElementById("InputTrianguloIsoscelesBase");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    const area = areaTrianguloIsosceles(value1, value2, value3);
    alert(area);
}
// Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");

    const value = Number(input.value);

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");

    const value = Number(input.value);

    const area = areaCirculo(value);
    alert(area);
}