// get the container from the itml
const gridContainer = document.querySelector("#grid_container");
const buttonContainer = document.querySelector("#button_container");
gridContainer.style.width = "100%";

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

let sideLength = 16;
const createGrids = function(sideLength) { 
    // create 16x16 grids
    for (let i = 0; i < sideLength; i++) {
        const container = document.createElement("div");
        if (i === 0) container.style.borderTop = "solid #ccc";
        if (i === (sideLength - 1)) container.style.borderBottom = "solid #ccc";
        container.classList.add("container");
        container.style.display = "flex";
        container.style.width = "70%";
        container.style.flexDirection = "row";
        container.style.borderLeft = "solid #ccc";
        container.style.borderRight = "solid #ccc";

        for (let g = 0; g < sideLength; g++) {
            // create the grid
            const grid = document.createElement("div");
            const gridWidth = 100/sideLength;
            const gridWidthString = gridWidth.toString() + "%"; 
            console.log(gridWidthString);

            // add the classes for gird
            grid.classList.add("grid");

            // add row id for grid
            let rowId = i;
            let gridrow = "row__" + rowId;
            grid.classList.add(gridrow);

            // style for grid
            grid.style.width = gridWidthString;
            grid.style.paddingTop = gridWidthString;
            grid.style.backgroundColor = "skyblue";
            grid.style.flexShrink = "0";

            // drawing with monotone
            // grid.style.opacity = "0";
            grid.addEventListener("mouseover", function (event) {
                // default setting
                event.target.style.backgroundColor = "orange";

                // drawing with random color
                // event.target.style.backgroundColor = getRandomColor();

                // drawing with monotone
                // let currentOpacity = parseFloat(event.target.style.opacity) || 0; // Start at 0 if unset
                // if (currentOpacity < 1) { // Stop at 1 (fully opaque)
                //     currentOpacity += 0.1; // Increase by 10%
                //     event.target.style.opacity = currentOpacity.toFixed(1); // Set new opacity
                // }
            })

            // append the grid into container
            container.appendChild(grid);
        }
        gridContainer.appendChild(container);
    }
}
createGrids(sideLength);

// create createGrid button
const createGridButton = document.createElement("button");
createGridButton.innerText = "Create a new Grid"
createGridButton.addEventListener("click", function () {
    const input = prompt("Please input the resolution of the drawing pad (1-100)");
    const sideLength = parseInt(input);
    if (sideLength === null || isNaN(sideLength) || sideLength > 100 || sideLength <= 0) {
        alert("plese enter a number between 1-100")
        return;
    }
    const containers = document.querySelectorAll(".container");
    containers.forEach(container => {
        gridContainer.removeChild(container); 
    })
    createGrids(sideLength);
})
buttonContainer.appendChild(createGridButton);

// create reset button
const resetButton = document.createElement("button");
resetButton.innerText = "Reset Button";
resetButton.addEventListener("click", function () {
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid => {
        grid.style.backgroundColor = "skyblue";
    });
})
buttonContainer.appendChild(resetButton);
