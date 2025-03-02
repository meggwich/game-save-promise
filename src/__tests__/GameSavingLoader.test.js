import GameSavingLoader from "../js/GameSavingLoader";

test("game save", async () => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual({
    created: 1546300800,
    id: 9,
    userInfo: { id: 1, level: 10, name: "Hitman", points: 2000 },
  });
});
