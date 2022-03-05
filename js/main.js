
let divGridSize = 16;
let backgroundColor = "white";
let divs,
    parentGrid,
    submitSize;

let colorList = [];

let clearBtn = document.querySelector("#clear");


let colors = document.querySelectorAll(".colors")
let globalColor = "black"

colors.forEach(element => {
    element.addEventListener("click", () => {
        globalColor = element.id;
        console.log(globalColor);
    })
})

document.querySelector("body").ondragstart = () => false;

window.mouseDown = false;

document.onmousedown = () => {
    window.mouseDown = true;
}

document.onmouseup = () => {
    window.mouseDown = false;
}



clearBtn.addEventListener("click", () => start(false));


function renderGrid(divGridSize) {


    for (let i = 0; i < divGridSize ** 2; i++) {
        const divParent = document.querySelector("#parentGrid");
        const divChild = document.createElement("div");
        divChild.style.flexBasis = 100 / divGridSize + "%";
        divChild.style.height = 100 / divGridSize + "%";
        divChild.classList.add("content", backgroundColor);
        divParent.appendChild(divChild);
    }
}

function start(firstTime) {

    
    divGridSize = 16;

    if (!firstTime) {
        while (parentGrid.firstChild) {
            parentGrid.removeChild(parentGrid.firstChild);
        }
        while (true) {
            divGridSize = Number(window.prompt("Please enter a valid number of grids. More than 0 and maximum 100"));

            if (divGridSize < 1 || divGridSize > 100) {
                alert("Please enter a valid number");
            }
            else {
                break;
            }
        }

    }

    renderGrid(divGridSize)

    divs = document.querySelectorAll(".content");
    parentGrid = document.querySelector("#parentGrid");
    submitSize = document.querySelector("#sub");




    divs.forEach(element => {
        element.addEventListener("mouseover", () => {
            if (window.mouseDown) {
                for (color of colorList) {
                    element.classList.remove(color);
                }
                element.classList.add((globalColor));
            }

        })
    })

    divs.forEach(element => {
        element.addEventListener("mousedown", () => {
            for (color of colorList) {
                element.classList.remove(color);
            }
            element.classList.add((globalColor));
        })
    })

    document.querySelector("#erase").addEventListener("click", () => globalColor = "white")
}


function changeColors() {

    colorList.push(backgroundColor);
    colors.forEach(color => colorList.push(color.id));
}

document.querySelector("#reset").addEventListener("click", () => {
    divs.forEach(element => {
        element.className = `content ${backgroundColor}`
    })
})

changeColors()
start(true);