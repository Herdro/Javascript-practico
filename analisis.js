// Helper
function esPar(numero){
    return (numero % 2 === 0);
}
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};
// calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        return calcularMediaAritmetica([personaMitad1, personaMitad2]);
    } else {
        return lista[mitad];
    }
}

const salariosCol = colombia.map((persona)=>persona.salary);
const salariosColSorted = salariosCol.sort((a, b) => a - b);




const medianaGeneralCol = medianaSalarios(salariosColSorted);

// mediana del top 10%

const spliceStart = (salariosColSorted.length * (100 - 10)) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col
);