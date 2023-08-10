import React, { useEffect } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './TicTacToe.css';

const initialBoard = {
  topLeft: 0,
  topMiddle: 0,
  topRight: 0,
  left: 0,
  middle: 0,
  right: 0,
  botLeft: 0,
  botMiddle: 0,
  botRight: 0,
};
function TicTacToe() {
  const [turn, setTurn] = React.useState(1);
  const [board, setBoard] = React.useState(initialBoard);
  const [winner, setWinner] = React.useState('');
  const [redWins, setRedWins] = React.useState(0);
  const [greenWins, setGreenWins] = React.useState(0);

  function onSpotClicked(key) {
    if (winner !== '') return;
    if (board[key] !== 0) return;
    if (turn === 1) {
      setBoard({ ...board, [key]: 1 });
      setTurn(2);
    } else {
      setBoard({ ...board, [key]: 2 });
      setTurn(1);
    }
  }

  useEffect(() => {
    if (
      board['topLeft'] === board['topMiddle'] &&
      board['topMiddle'] === board['topRight'] &&
      board['topLeft'] !== 0
    ) {
      if (board['topLeft'] === 1) {
        setWinner('Green');
        setGreenWins((prevState) => prevState + 1);
      } else {
        setWinner('Red');
        setRedWins((prevState) => prevState + 1);
      }
    }
    if (
      board['left'] === board['middle'] &&
      board['middle'] === board['right'] &&
      board['left'] !== 0
    ) {
      if (board['left'] === 1) {
        setWinner('Green');
        setGreenWins((prevState) => prevState + 1);
      } else {
        setWinner('Red');
        setRedWins((prevState) => prevState + 1);
      }
    }
    if (
      board['botLeft'] === board['botMiddle'] &&
      board['botMiddle'] === board['botRight'] &&
      board['botLeft'] !== 0
    ) {
      if (board['botLeft'] === 1) {
        setWinner('Green');
        setGreenWins((prevState) => prevState + 1);
      } else {
        setWinner('Red');
        setRedWins((prevState) => prevState + 1);
      }
    }
    if (
      board['topLeft'] === board['left'] &&
      board['left'] === board['botLeft'] &&
      board['topLeft'] !== 0
    ) {
      if (board['topLeft'] === 1) {
        setWinner('Green');
        setGreenWins((prevState) => prevState + 1);
      } else {
        setWinner('Red');
        setRedWins((prevState) => prevState + 1);
      }
    }
    if (
      board['topMiddle'] === board['middle'] &&
      board['middle'] === board['botMiddle'] &&
      board['topMiddle'] !== 0
    ) {
      if (board['topMiddle'] === 1) {
        setWinner('Green');
        setGreenWins((prevState) => prevState + 1);
      } else {
        setWinner('Red');
        setRedWins((prevState) => prevState + 1);
      }
    }
    if (
      board['topRight'] === board['right'] &&
      board['right'] === board['botRight'] &&
      board['topRight'] !== 0
    ) {
      if (board['topRight'] === 1) {
        setWinner('Green');
        setGreenWins((prevState) => prevState + 1);
      } else {
        setWinner('Red');
        setRedWins((prevState) => prevState + 1);
      }
    }
    if (
      board['topLeft'] === board['middle'] &&
      board['middle'] === board['botRight'] &&
      board['topLeft'] !== 0
    ) {
      if (board['topLeft'] === 1) {
        setWinner('Green');
        setGreenWins((prevState) => prevState + 1);
      } else {
        setWinner('Red');
        setRedWins((prevState) => prevState + 1);
      }
    }
    if (
      board['topRight'] === board['middle'] &&
      board['middle'] === board['botLeft'] &&
      board['topRight'] !== 0
    ) {
      if (board['topRight'] === 1) {
        setWinner('Green');
        setGreenWins((prevState) => prevState + 1);
      } else {
        setWinner('Red');
        setRedWins((prevState) => prevState + 1);
      }
    }
  }, [board]);
  function clearBoard() {
    setBoard(initialBoard);
    setTurn(1);
    setWinner('');
  }
  return (
    <section className="TicTacToe">
      <div>
        <BurgerMenu />
      </div>
      <div className="text">
        <h1>Christmas Tic-Tac-Toe</h1>
        <p>Green Player goes first, Red Player goes second!</p>
        {winner !== '' && <p>{winner} wins!</p>}
      </div>
      <div className="wins">
        <p>Red Wins: {redWins}</p>
        <p>Green Wins: {greenWins}</p>
      </div>

      <div className="buttons">
        <button className="clear" onClick={clearBoard}>
          Clear
        </button>
      </div>
      <div className="gameBoard">
        <div className="row row1">
          <div
            className={`box box1 ${board['topLeft'] === 1 ? 'green' : ''} ${
              board['topLeft'] === 2 ? 'red' : ''
            }`}
            id="0"
            onClick={() => onSpotClicked('topLeft')}
          ></div>
          <div
            className={`box box2 ${board['topMiddle'] === 1 ? 'green' : ''} ${
              board['topMiddle'] === 2 ? 'red' : ''
            }`}
            id="1"
            onClick={() => onSpotClicked('topMiddle')}
          ></div>
          <div
            className={`box box3 ${board['topRight'] === 1 ? 'green' : ''} ${
              board['topRight'] === 2 ? 'red' : ''
            }`}
            id="2"
            onClick={() => onSpotClicked('topRight')}
          ></div>
        </div>
        <div className="row row2">
          <div
            className={`box box4 ${board['left'] === 1 ? 'green' : ''} ${
              board['left'] === 2 ? 'red' : ''
            }`}
            id="3"
            onClick={() => onSpotClicked('left')}
          ></div>
          <div
            className={`box box5 ${board['middle'] === 1 ? 'green' : ''} ${
              board['middle'] === 2 ? 'red' : ''
            }`}
            id="4"
            onClick={() => onSpotClicked('middle')}
          ></div>
          <div
            className={`box box6 ${board['right'] === 1 ? 'green' : ''} ${
              board['right'] === 2 ? 'red' : ''
            }`}
            id="5"
            onClick={() => onSpotClicked('right')}
          ></div>
        </div>
        <div className="row row2">
          <div
            className={`box box7 ${board['botLeft'] === 1 ? 'green' : ''} ${
              board['botLeft'] === 2 ? 'red' : ''
            }`}
            id="6"
            onClick={() => onSpotClicked('botLeft')}
          ></div>
          <div
            className={`box box8 ${board['botMiddle'] === 1 ? 'green' : ''} ${
              board['botMiddle'] === 2 ? 'red' : ''
            }`}
            id="7"
            onClick={() => onSpotClicked('botMiddle')}
          ></div>
          <div
            className={`box box9 ${board['botRight'] === 1 ? 'green' : ''} ${
              board['botRight'] === 2 ? 'red' : ''
            }`}
            id="8"
            onClick={() => onSpotClicked('botRight')}
          ></div>
        </div>
      </div>
    </section>
  );
}
export default TicTacToe;
