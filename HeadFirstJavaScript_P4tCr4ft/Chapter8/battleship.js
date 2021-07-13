// Steve Triplett
// HeadFirst JS Programming Ch 10
// July 2021

const init = () => {
  const fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  const guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress;
};

const handleKeyPress = e => {
  const fireButton = document.getElementById("fireButton");
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

const handleFireButton = () => {
  const guessInput = document.getElementById("guessInput");
  const guess = guessInput.value;
  controller.processGuess(guess);
  guessInput.value = "";
};

// Browser runs init when page is fully loaded
window.onload = init;

const model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [
		{ locations: ["06", "16", "26"], hits: ["", "", ""] },
		{ locations: ["24", "34", "44"], hits: ["", "", ""] },
		{ locations: ["10", "11", "12"], hits: ["", "", ""] }
	],

  testFunc: () => {
    console.log(`boardSize is ${model.boardSize}`);
  },

  fire: guess => {
    return model.ships.some(ship => {
      // return ship.locations.includes(guess);
       if (ship.locations.includes(guess)) {
        ship.hits[ship.locations.indexOf(guess)] = "hit";
        console.log(`HIT! with guess ${guess}`);
        view.displayHit(guess);
        view.displayMessage("HIT!");
        console.log(`ship is sunk? ${model.isSunk(ship)}`);
        if (model.isSunk(ship)) {
          view.displayMessage("You sank my battleship!");
          model.shipsSunk++;
        }
        console.log(`About to return true, guess ${guess}`);
        return true;
      } else {
        console.log(`MISS with guess ${guess}`);
        view.displayMiss(guess);
        view.displayMessage("You missed...");
        console.log(`About to return false, guess ${guess}`);
        return false;
      }
    });
  },

  isSunk: ship => {
    // every returns true if all elements (hit) === "hit"
    return ship.hits.every(hit => hit === "hit");
  },

};

const view = {
  // this method takes a string and displays it (fat arrow syntax)
  displayMessage: msg => {
    const messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  // this method takes string and displays a hit
  displayHit: location => {
    const cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  // this method takes string and displays a miss
  displayMiss: location => {
    const cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

const controller = {
  // this method takes a string and displays it
  guesses: 0,

  processGuess: guess => {
    const guessLocation = controller.parseGuess(guess);
    if (guessLocation) {
      controller.guesses++;
      const hit = model.fire(guessLocation);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage("You sank all my battleships, in " + controller.guesses + " guesses.");
      }
    }
  },

  // We're defining validity as is something, and has length 2
  parseGuess: guess => {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    let row;
    let column;
    if (guess === null || guess.length !== 2) {
      alert("Please enter a letter and number combo from the board.");
    } else {
      row = alphabet.indexOf(guess.charAt(0));
      column = guess.charAt(1);

      if (isNaN(row) || isNaN(column)) {
        alert("That guess is not on the board.");
        // Note use of type conversion below checking column, which is a string
      } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
        alert("That guess is off the board.");
      } else {
        return row + column;
      }
    }
    return null;
  }

};


// Below are some fire and other method tests

// console.log(`processGuess with A0 is ${controller.processGuess("A0")}`);

// console.log(`processGuess with A6 is ${controller.processGuess("A6")}`);
// console.log(`processGuess with B6 is ${controller.processGuess("B6")}`);
// console.log(`processGuess with C6 is ${controller.processGuess("C6")}`);

// console.log(`processGuess with C4 is ${controller.processGuess("C4")}`);
// console.log(`processGuess with D4 is ${controller.processGuess("D4")}`);
// console.log(`processGuess with E4 is ${controller.processGuess("E4")}`);

// console.log(`processGuess with B0 is ${controller.processGuess("B0")}`);
// console.log(`processGuess with B1 is ${controller.processGuess("B1")}`);
// console.log(`processGuess with B2 is ${controller.processGuess("B2")}`);



// console.log(`parseGuess with A0 is ${controller.parseGuess("A0")}`);
// console.log(`parseGuess with B6 is ${controller.parseGuess("B6")}`);
// console.log(`parseGuess with G3 is ${controller.parseGuess("G3")}`);
// console.log(`parseGuess with H0 is ${controller.parseGuess("H0")}`);
// console.log(`parseGuess with A7 is ${controller.parseGuess("A7")}`);


// model.fire("34");
// model.fire("53");

// console.log(`fire method with guess 54 returns ${model.fire("54")}`);
// console.log(`fire method with guess 34 returns ${model.fire("34")}`);
// console.log(`fire method with guess 65 returns ${model.fire("65")}`);
// console.log(`fire method with guess 24 returns ${model.fire("24")}`);
// console.log(`fire method with guess 44 returns ${model.fire("44")}`);

// console.log(`fire method with guess 54 returns ${model.fire("61")}`);
// console.log(model.fire("54"));


// Test view methods
// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");




// Below are some test High-Order Functions (ES6)

const square1 = x => x * x;

// console.log(`5 squared is ${square1(5)}`);

// console.log([1, 2, 3].every( el => el !== 1));
// console.log([1, 2, 3].some( el => el !== 1));

const ages = [32, 33, 16, 40];
// const checkAdult = age => age >= 18;
// console.log(ages.every(checkAdult));
// console.log(ages.every(age => age >= 18));


// Below creates a function object, callback type thing, ( the function body is m => m > n; )
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));
// returns true



