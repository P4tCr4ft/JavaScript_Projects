function init() {
    let planet = document.getElementById("greenplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute("class", "redtext");
    console.log(planet.innerHTML);
}

window.onload = init;

// We can assign this function above to init. The window will call any function
// assigned to its onload property, but only after the page is fully loaded.
// let planet = document.getElementById("greenplanet");
// planet.innerHTML = "Red Alert: hit by phaser fire!";
// console.log(planet.innerHTML);
