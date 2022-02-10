const filas = parseInt(prompt("Cantidad de Filas: "));
const columnas = parseInt(prompt("Cantidad de Columnas: "));

let spiralMatrix = fillArray(filas, columnas);
getSpiralMatrix(spiralMatrix);
console.log(showArray(spiralMatrix));

function fillArray(rows, columns) {
    arr = [];
    for(let i = 0; i < rows; i++) {
        arr.push([]);
        for(let j = 0; j < columns; j++) {
            arr[i].push("Template");
        }
    }
    return arr;
}

function getSpiralMatrix(arr) {
    const rows = arr.length;
    const columns = arr[0].length;

    const states = ["left", "down", "right", "up"];
    let counter = 1, index = 0, actualState = states[index], i = 0, j = 0;

    while(counter <= (rows * columns)) {
        while(actualState === "left") {
            if(!arr[i][j] || !(typeof(arr[i][j]) === "string")) {
                actualState = states[++index % 4];
                j--;
                i++;
                continue;
            }
            arr[i][j] = counter;
            j++;
            counter++;
        }
        while(actualState === "down") {
            if(!arr[i] || !(typeof(arr[i][j]) === "string")) {
                actualState = states[++index % 4];
                i--;
                j--;
                continue;
            }
            arr[i][j] = counter;
            i++;
            counter++;
        }
        while(actualState === "right") {
            if(!arr[i][j] || !(typeof(arr[i][j]) === "string")) {
                actualState = states[++index % 4];
                j++;
                i--;
                continue;
            }
            arr[i][j] = counter;
            j--;
            counter++;
        }
        while(actualState === "up") {
            if(!arr[i] || !(typeof(arr[i][j]) === "string")) {
                actualState = states[++index % 4];
                j++;
                i++;
                continue;
            }
            arr[i][j] = counter;
            i--;
            counter++;
        }
    }
}

function showArray(arr) {
    let output = "";
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            output += arr[i][j] + "\t";
        }
        output += "\n";
    }
    return output;
}