const zero = 0;
const MAX_PRIZE_X2 = 2;
const MAX_ATTEMPTS = 3;
const numFour = 4;
const numEight = 8;
const numHundred = 100;

let priceWin = 0;
let startGame = confirm('Do you want to play a game?');

if (startGame === false) {
  alert('You did not become a millionaire, but can.');
}

while (startGame === true) {
  let attempt = MAX_ATTEMPTS;
  let n = numEight;
  let number = Math.floor(Math.random() * (n + 1));
  let priceMax = numHundred;
  let price = priceMax;

  while (attempt > 0) {
    let UserInterface = prompt(
      `Choose a roulette pocket number from ${zero} to ${n}\n` +
      `Attempts left: ${attempt}\n` +
      `Total prize: ${priceWin} $\n` +
      `Possible prize on current attempt: ${price} $`
    );
    if (
      !isNaN(UserInterface) &&
      parseFloat(UserInterface) === parseInt(UserInterface) &&
      parseInt(UserInterface) === number
    ) {
      priceWin += price;
      alert(`Congratulation! Your prize is: ${price} $`);

      let newGame = confirm('Do you want to continue?');

      if (newGame) {
        number = Math.floor(Math.random() * (n + 1));
        attempt = MAX_ATTEMPTS;
        priceMax *= MAX_PRIZE_X2;
        price = priceMax;
        n += numFour;
      } else {
        alert(`Thank you for a game. Your prize is: ${priceWin} $`);
        startGame;
        n += numFour;
        number = Math.floor(Math.random() * (n + 1));
        priceWin = 0;
      }
    } else {
      attempt--;
      price = Math.floor(price / MAX_PRIZE_X2);
      if (attempt < 1) {
        alert(`Thank you for a game. Your prize is: ${priceWin} &`);
        startGame;
        priceWin = 0;
      }
    }
  }
}