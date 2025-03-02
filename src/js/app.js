import GameSavingLoader from "./GameSavingLoader";

GameSavingLoader.load().then(
  (saving) => {
    return saving;
  },
  () => {
    throw new Error("Error loading game saving");
  },
);
