// function Potion(name) {
//     this.types = ["strenght", "agility", "health"];
//     this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

//     if (this.name === "health") {
//       this.value = Math.floor(Math.random() * 10 + 30);
//     } else {
//       this.value = Math.floor(Math.random() * 7 + 5);
//     }
//   }

//   module.exports = Potion;

// const Potion = require("../random.js");

// test("creates a random potion object", () => {
//   const potion = new Potion();

//   expect(potion.name).toEqual(expect.any(String));
//   expect(potion.name.length).toBeGreaterThan(0);
//   expect(potion.value).toEqual(expect.any(Number));
// });
