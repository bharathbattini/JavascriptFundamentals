const car1 = { name: "Audi", model: "A4" }
const car2 = { name: "Volvo", model: "XC90" }
const car3 = { name: "Ford", model: "Fusion" }

console.table([car1, car2, car3], ["name", "model"]);

// This function always returns a random number between min and max (both included):
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRndInteger(10, 0);

console.log(getRndInteger);
