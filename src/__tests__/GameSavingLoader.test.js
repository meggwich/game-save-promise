import GameSavingLoader from "../js/GameSavingLoader";

describe("GameSavingLoader", () => {
  test("should load game saving data correctly", async () => {
    // Ожидаемый результат
    const expected = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: "Hitman",
        level: 10,
        points: 2000,
      },
    };

    // Вызов метода load и проверка результата
    const result = await GameSavingLoader.load();

    // Проверка, что результат соответствует ожидаемому
    expect(result).toEqual(expected);
  });

  test("should return an instance of GameSaving", async () => {
    const result = await GameSavingLoader.load();

    // Проверка, что результат является объектом GameSaving
    expect(result).toBeInstanceOf(Object);
    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("created");
    expect(result).toHaveProperty("userInfo");
  });
});
