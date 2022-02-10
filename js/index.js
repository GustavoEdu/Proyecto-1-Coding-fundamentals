const filas = parseInt(prompt("Cantidad de Filas: "));
const columnas = parseInt(prompt("Cantidad de Columnas: "));

console.log(getNullMatrix(filas, columnas));

function getNullMatrix(rows, columns) {
    arr = [];
    for(let i = 0; i < rows; i++) {
        arr.push([]);
        for(let j = 0; j < columns; j++) {
            arr[i].push(0);
        }
    }
    return arr;
}

/*
function getSpiralMatrix(rows, columns) {
    for(let i = 1; i <= rows * columns; i++) {

    }
}
*/