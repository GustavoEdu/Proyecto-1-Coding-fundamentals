const TIME = 100;
const filas = parseInt(prompt("Cantidad de Filas: "));
const columnas = parseInt(prompt("Cantidad de Columnas: "));
let num = 1;

const inverted = confirm("¿Desea comenzar la secuencia de números al revéz?: ");
if(inverted) {
    num = filas * columnas;
}
const op = confirm("¿Desea comenzar desde algún número?: ");
if(op) {
    num = parseInt(prompt("Introduzca un Número: "));
}

const gridRows = repeatNTimesSomeValue(filas, "1fr ");
const gridColumns = repeatNTimesSomeValue(columnas, "1fr ");

const targetDiv = document.getElementById("targetDiv");
targetDiv.style.gridTemplateColumns = gridColumns;
targetDiv.style.gridTemplateRows = gridRows;

const renderArr = [];
fillRenderArr(renderArr, targetDiv);

const spiralMatrix = [];
fillArray(spiralMatrix, filas, columnas);
getAndRenderSpiralMatrix(spiralMatrix, inverted, num, TIME);

function fillArray(arr, rows, columns) {
    for(let i = 0; i < rows; i++) {
        arr.push([]);
        for(let j = 0; j < columns; j++) {
            arr[i].push("Template");
        }
    }
}

async function getAndRenderSpiralMatrix(arr, inverted, num, time) {
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
            arr[i][j] = num;
            await sleep(time);
            document.getElementById(`${i}-${j}`).innerText = num;
            j++;
            if(inverted) {
                num--;
            } else {
                num++;
            }
            counter++;
        }
        while(actualState === "down") {
            if(!arr[i] || !(typeof(arr[i][j]) === "string")) {
                actualState = states[++index % 4];
                i--;
                j--;
                continue;
            }
            arr[i][j] = num;
            await sleep(time);
            document.getElementById(`${i}-${j}`).innerText = num;
            i++;
            if(inverted) {
                num--;
            } else {
                num++;
            }
            counter++;
        }
        while(actualState === "right") {
            if(!arr[i][j] || !(typeof(arr[i][j]) === "string")) {
                actualState = states[++index % 4];
                j++;
                i--;
                continue;
            }
            arr[i][j] = num;
            await sleep(time);
            document.getElementById(`${i}-${j}`).innerText = num;
            j--;
            if(inverted) {
                num--;
            } else {
                num++;
            }
            counter++;
        }
        while(actualState === "up") {
            if(!arr[i] || !(typeof(arr[i][j]) === "string")) {
                actualState = states[++index % 4];
                j++;
                i++;
                continue;
            }
            arr[i][j] = num;
            await sleep(time);
            document.getElementById(`${i}-${j}`).innerText = num;
            i--;
            if(inverted) {
                num--;
            } else {
                num++;
            }
            counter++;
        }
    }
    console.log(showArray(spiralMatrix));
}

function repeatNTimesSomeValue(times, value) {
    let result = "";
    for(let i = 0; i < times; i++) {
        result += value;
    }
    return result;
}

function fillRenderArr(renderArr, targetDiv) {
    for(let i = 0; i < filas; i++) {
        renderArr.push([]);
        for(let j = 0; j < columnas; j++) {
            const gridItem = document.createElement("div");
            gridItem.id = `${i}-${j}`;
            gridItem.classList.add("gridItem");
            gridItem.innerText = ".";
            renderArr[i].push(gridItem);
            targetDiv.appendChild(gridItem);
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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