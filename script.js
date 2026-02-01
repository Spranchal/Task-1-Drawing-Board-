const svg = document.getElementById("drawingArea");

let isDrawing = false;
let currentPath = null;

function getMousePosition(event) {
    const rect = svg.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

svg.addEventListener("mousedown", (event) => {
    isDrawing = true;
    const { x, y } = getMousePosition(event);

    currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    currentPath.setAttribute("d", `M ${x} ${y}`);
    currentPath.setAttribute("stroke", "black");
    currentPath.setAttribute("stroke-width", "2");
    currentPath.setAttribute("fill", "none");

    svg.appendChild(currentPath);
});

svg.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;

    const { x, y } = getMousePosition(event);
    const d = currentPath.getAttribute("d");
    currentPath.setAttribute("d", `${d} L ${x} ${y}`);
});

svg.addEventListener("mouseup", () => isDrawing = false);
svg.addEventListener("mouseleave", () => isDrawing = false);

document.getElementById("clear").addEventListener("click", function () {
  drawingArea.innerHTML = "";
});