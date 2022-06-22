'use strict';

const background = 'padding: 0 20px; text-shadow: 0 0 10px red; color: green';
console.log('%c Игра Камень, ножницы, бумага', background);

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const game = (language) => {
    const currentLanguage = language;
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const localization = {
        lang: {
          RU: 'русский',
          EN: 'english',
        },
        figures: {
          RU: ['камень', 'ножницы', 'бумага'],
          EN: ['rock', 'scissors', 'paper'],
        },
        startGame: {
          RU: 'Камень, ножницы или бумага?',
          EN: 'Rock, scissors or paper?',
        },
        exitGame: {
          RU: 'Вы действительно хотите покинуть игру?',
          EN: 'Do you really want to leave the game?',
        },
        gameOver: {
          RU: 'Конец игры!',
          EN: 'End of the game!',
        },
        continueGame: {
          RU: 'Продолжаем игру!',
          EN: 'We continue the game!',
        },
        draw: {
          RU: 'Ничья!',
          EN: 'Draw!',
        },
        win: {
          RU: 'Вы выиграли!',
          EN: 'WIN!',
        },
        loss: {
          RU: 'Вы проиграли!',
          EN: 'LOSS!',
        },
        resultGame: {
          RU: 'Игрок : Компьютер',
          EN: 'Player : PC',
        },
      };

      const computerMove = localization.figures[currentLanguage][getRandomIntInclusive(0, localization.figures[currentLanguage].length - 1)];
      const playerMove = prompt(localization.startGame[currentLanguage]);

      const winGame = () => {
        return ((playerMove[0] === localization.figures[currentLanguage][0][0]) && (computerMove === localization.figures[currentLanguage][1])) ||
        ((playerMove[0] === localization.figures[currentLanguage][1][0]) && (computerMove === localization.figures[currentLanguage][2])) ||
        ((playerMove[0] === localization.figures[currentLanguage][2][0]) && (computerMove === localization.figures[currentLanguage][0]));
      };
      const lossGame = () => {
        return ((computerMove === localization.figures[currentLanguage][0]) && (playerMove[0] === localization.figures[currentLanguage][1][0])) ||
          ((computerMove === localization.figures[currentLanguage][1]) && (playerMove[0] === localization.figures[currentLanguage][2][0])) ||
          ((computerMove === localization.figures[currentLanguage][2]) && (playerMove[0] === localization.figures[currentLanguage][0][0]));
      };

      if (playerMove === null) {
        let exitGame = confirm(localization.exitGame[currentLanguage]);

        if (exitGame) {
          alert(`${localization.gameOver[currentLanguage]}
              ${localization.resultGame[currentLanguage]}
              ${result.player} : ${result.computer}`);
        } else {
          alert(`${localization.continueGame[currentLanguage]}
                ${localization.resultGame[currentLanguage]}
                ${result.player} : ${result.computer}`);
          start();
        }
      } else if (playerMove[0] === computerMove[0]) {
          alert(`${localization.draw[currentLanguage]}
                ${localization.resultGame[currentLanguage]}
                ${result.player} : ${result.computer}`);
        start();
      } else if (winGame()) {
        result.player++;
        alert(`${localization.win[currentLanguage]}
              ${localization.resultGame[currentLanguage]}
              ${result.player} : ${result.computer}`);
        start();
      } else if (lossGame()) {
        result.computer++;
        alert(`${localization.loss[currentLanguage]}
              ${localization.resultGame[currentLanguage]}
              ${result.player} : ${result.computer}`);
        start();
      } else {
        start();
      }
    };
  };

  window.RPS = game;
})();
