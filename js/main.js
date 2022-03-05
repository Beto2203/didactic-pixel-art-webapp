
let divGridSize = 16;
const divs = document.querySelectorAll(".content");
const parentGrid =  document.querySelector("#parentGrid");
const clearBtn = document.querySelector("#clear");
const submitSize = document.querySelector("#sub");





clearBtn.addEventListener("click", start)


submitSize.addEventListener("click", () => {
    divGridSize = document.querySelector("#gridSize").value;

    if (divGridSize <= 0 || divGridSize > 100){
        alert("Please enter a valid number");
    }
    else{
        start();
    }

})



function renderGrid(divGridSize){

    for (let i = 0; i < divGridSize**2; i++){
        const divParent = document.querySelector("#parentGrid");
        const divChild = document.createElement("div");
        divChild.style.flexBasis = 100/divGridSize + "%";
        divChild.style.height = 100/divGridSize + "%";
        divChild.classList.add("content");
        divParent.appendChild(divChild);
    }
}

function start(firstTime = false){

    if (!firstTime){
        while (parentGrid.firstChild){
            parentGrid.removeChild(parentGrid.firstChild);
        }
        divGridSize = window.prompt("Please enter a valid number of grids. More than 0 and maximum 100");
    }

    
    

    divs.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.classList.add("alternate");
        })
    })

    

    

    
    
}

start(true);