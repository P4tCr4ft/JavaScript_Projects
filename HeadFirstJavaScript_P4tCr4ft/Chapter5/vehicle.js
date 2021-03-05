let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,
    start: function() {
        if (this.fuel > 0) {
            this.started = true;
        } else {
            alert("No fuel. Add fuel before starting.");
        }
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + "goes zoom zoom!");
                this.fuel -= 1;
            } else {
                alert("Uh oh, out of fuel");
                this.stop();
            }
        } else {
            alert("You need to start your engine first.");
        }
    },
    addFuel: function(amount) {
        this.fuel += amount;
    }
}

fiat.drive();
fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.stop();

// examples of this
let eightBall = {
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function() {
        this.index += 1;
        if (this.index >= this.advice.length) {
            this.index = 0;
        }
    },
    look: function() {
        return this.advice[this.index];
    }
};

eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());

for (let prop in fiat) {
    console.log(prop + ": "+ fiat[prop]);
}
