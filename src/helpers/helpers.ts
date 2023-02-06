export const whoWin = (player: string, house: string) => {
  if (player === "paper") {
    if (house === "paper") {
      return "draw";
    } else if (house === "scissors") {
      return "lose";
    } else {
      return "win";
    }
  }

  if (player === "rock") {
    if (house === "paper") {
      return "lose";
    } else if (house === "scissors") {
      return "win";
    } else {
      return "draw";
    }
  }

  if (player === "scissors") {
    if (house === "paper") {
      return "win";
    } else if (house === "scissors") {
      return "draw";
    } else {
      return "lose";
    }
  }
};
