const Player = require("../lib/Player.js");
const Potion = require("../lib/__mocks__/Potion.js");
jest.mock("../lib/Potion.js");

console.log(new Potion());

test("player has a name and 3 number properties", () => {
  const player = new Player("Dave");

  expect(player.name).toBe("Dave");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});
