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