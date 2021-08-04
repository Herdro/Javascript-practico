const lista1 = [
    1,2,3,1,2,3,4,2,2,2,1,
];

const lista1Count = {};

lista1.map(
    function (elemnto) {
        if (lista1Count[elemnto]) {
            lista1Count[elemnto] += 1;
        } else {
        lista1Count[elemnto] = 1;
        }
    }
);

const lista1array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1]
    }
);

const moda = lista1array[lista1array.length - 1];

function calcularModa (lista) {
    // contar repeticiones en la lista
    const listaCount = {};
    lista.map(
        function (elemnto) {
            if (listaCount[elemnto]) {
                listaCount[elemnto] += 1;
            } else {
            listaCount[elemnto] = 1;
            }
        }
    );
    // ordenar lista (array) y extra el valor con mayor repetición (moda)
    const listaArray = Object.entries(listaCount).sort((a,b) => a[1] - b[1]);
    // Retornar array de la moda
    return listaArray[listaArray.length - 1];
};