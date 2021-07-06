const square1 = x => x * x;

let model = {
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

let view = {
  // this method takes a string and displays it (fat arrow syntax)
  displayMessage: (msg) => {
    let messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  // this method takes string and displays a hit
  displayHit: (location) => {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  // this method takes string and displays a miss
  displayMiss: (location) => {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};

let controller = {
  // this method takes a string and displays it
  someMethod: function(msg) {

  }
};

// model.fire("34");
// model.fire("53");
console.log(`fire method returns ${model.fire("54")}`);
console.log(`fire method returns ${model.fire("34")}`);
console.log(`fire method returns ${model.fire("65")}`);
console.log(`fire method returns ${model.fire("24")}`);
console.log(`fire method returns ${model.fire("44")}`);
// console.log(`fire method returns ${model.fire("61")}`);
// console.log(model.fire("54"));


// Test view methods
// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");
// view.displayMessage("Anyone home?");

// console.log(`5 squared is ${square1(5)}`);


// view.displayMessage("Hi there");

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



