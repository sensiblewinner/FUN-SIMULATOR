function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);

    // Check if the drop zone already has water, and if it's the same color
    if (ev.target.classList.contains("bottle") && ev.target.children.length < 4) {
        if (ev.target.children.length > 0) {
            const topWater = ev.target.children[ev.target.children.length - 1];
            if (topWater.style.backgroundColor !== draggedElement.style.backgroundColor) {
                alert("You can only stack the same color!");
                return;
            }
        }
        ev.target.appendChild(draggedElement);
    }
}

function resetGame() {
    let bottles = document.querySelectorAll(".bottle");
    let waters = document.querySelectorAll(".water");

    // Reset bottles to their initial state
    for (let i = 0; i < bottles.length; i++) {
        while (bottles[i].children.length > 0) {
            bottles[i].removeChild(bottles[i].children[0]);
        }
    }

    // Reset water elements to their initial positions
    document.getElementById("bottle1").appendChild(waters[0]);
    document.getElementById("bottle2").appendChild(waters[1]);
    document.getElementById("bottle3").appendChild(waters[2]);
    document.getElementById("bottle4").appendChild(waters[3]);
}