// get the container from the itml
const body = document.querySelector("body");
const gridContainer = document.querySelector("#grid_container");
gridContainer.style.width = "100%";

let sideLength = 16;
const createGrids = function(sideLength) {
    // create 16x16 grids
    for (let i = 0; i < sideLength; i++) {
        const container = document.createElement("div");
        container.classList.add("container");
        container.style.display = "flex";
        container.style.width = "48%";
        container.style.flexDirection = "row";

        for (let g = 0; g < sideLength; g++) {
            // create the grid
            const grid = document.createElement("div");

            // add the classes for gird
            grid.classList.add("grid");

            // add row id for grid
            let rowId = i;
            let gridrow = "row__" + rowId;
            grid.classList.add(gridrow);

            // style for grid
            grid.style.width = "6%";
            grid.style.paddingTop = "6%";
            grid.style.backgroundColor = "skyblue";
            grid.style.border = "solid #ccc";
            grid.style.flexShrink = "0";
            grid.addEventListener("mouseover", function (event) {
                event.target.style.backgroundColor = "orange";
            })

            // append the grid into container
            container.appendChild(grid);
        }
        gridContainer.appendChild(container);
    }
}
createGrids(sideLength);

// create reset button
const resetButton = document.createElement("button");
resetButton.innerText = "Reset Button";
resetButton.addEventListener("click", function () {
    const grids = document.querySelectorAll(".grid");
    grids.forEach(element => {
        element.style.backgroundColor = "skyblue";
    });
})
document.body.insertBefore(resetButton, gridContainer)
