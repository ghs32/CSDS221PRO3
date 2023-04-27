import './App.css';
import {Grid} from './components/Grid'
import { useState } from 'react';
import {Score} from './components/Score'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import React from 'react';


function App() {
  const[isX, setIsX] = useState(true);
  const [gridArray, setGridArray] = useState(Array(9).fill(""));
  const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  let isEmpty = false;
  const [score, setScore] = useState({scoreX: 0, scoreO: 0})
  const[player, setPlayer] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  let count = 1;
  let winBool = false;

  toastr.options.positionClass = 'toast-top-right';
  

  const verifyWin = (gridArray) => {
    if(gridArray[0] === "X" && gridArray[1] === "X" && gridArray[2] === "X"){
      setGameEnd(true);
      winBool = true;
      toastr.success("X won this round! make sure to click reset for round 2!");
      return gridArray[0];
    } if(gridArray[0] === "O" && gridArray[1] === "O" && gridArray[2] === "O"){
      setGameEnd(true);
      winBool = true;
      toastr.success("O won this round! make sure to click reset for round 2!");
      return gridArray[0];
    } if(gridArray[3] === "X" && gridArray[4] === "X" && gridArray[5] === "X"){
      setGameEnd(true);
      winBool = true;
      toastr.success("X won this round! make sure to click reset for round 2!");
      return gridArray[3];
    } if(gridArray[3] === "O" && gridArray[4] === "O" && gridArray[5] === "O"){
      setGameEnd(true);
      winBool = true;
      toastr.success("O won this round! make sure to click reset for round 2!");
      return gridArray[3];
    } if(gridArray[6] === "X" && gridArray[7] === "X" && gridArray[8] === "X"){
      setGameEnd(true);
      winBool = true;
      toastr.success("X won this round! make sure to click reset for round 2!");
      return gridArray[6];
    } if(gridArray[6] === "O" && gridArray[7] === "O" && gridArray[8] === "O"){
      setGameEnd(true);
      winBool = true;
      toastr.success("O won this round! make sure to click reset for round 2!");
      return gridArray[6];
    } if(gridArray[0] === "X" && gridArray[3] === "X" && gridArray[6] === "X"){
      setGameEnd(true);
      winBool = true;
      toastr.success("X won this round! make sure to click reset for round 2!");
      return gridArray[0];
    } if(gridArray[0] === "O" && gridArray[3] === "O" && gridArray[6] === "O"){
      setGameEnd(true);
      winBool = true;
      toastr.success("O won this round! make sure to click reset for round 2!");
      return gridArray[0];
    } if(gridArray[1] === "X" && gridArray[4] === "X" && gridArray[7] === "X"){
      setGameEnd(true);
      winBool = true;
      toastr.success("X won this round! make sure to click reset for round 2!");
      return gridArray[1];
    } if(gridArray[1] === "O" && gridArray[4] === "O" && gridArray[7] === "O"){
      setGameEnd(true);
      winBool = true;
      toastr.success("O won this round! make sure to click reset for round 2!");
      return gridArray[1];
    } if(gridArray[2] === "X" && gridArray[5] === "X" && gridArray[8] === "X"){
      setGameEnd(true);
      winBool = true;
      toastr.success("X won this round! make sure to click reset for round 2!");
      return gridArray[2];
    } if(gridArray[2] === "O" && gridArray[5] === "O" && gridArray[8] === "O"){
      setGameEnd(true);
      winBool = true;
      toastr.success("O won this round! make sure to click reset for round 2!");
      return gridArray[2];
    } if(gridArray[0] === "X" && gridArray[4] === "X" && gridArray[8] === "X"){
      setGameEnd(true);
      winBool = true;
      toastr.success("X won this round! make sure to click reset for round 2!");
      return gridArray[0];
    } if(gridArray[0] === "O" && gridArray[4] === "O" && gridArray[8] === "O"){
      setGameEnd(true);
      winBool = true;
      toastr.success("O won this round! make sure to click reset for round 2!");
      return gridArray[0];
    } if(gridArray[2] === "X" && gridArray[4] === "X" && gridArray[6] === "X"){
      setGameEnd(true);
      winBool = true;
      toastr.success("X won this round! make sure to click reset for round 2!");
      return gridArray[2];
    } if(gridArray[2] === "O" && gridArray[4] === "O" && gridArray[6] === "O"){
      setGameEnd(true);
      winBool = true;
      toastr.success("O won this round! make sure to click reset for round 2!");
      return gridArray[2];
    }
  }

  const click = async (cellLoc) => {
    if(gameEnd == true){
      roundOverToast();
      return;
    }

    if(gridArray[cellLoc] === ""){
      isEmpty = true;
    } 
    if(gridArray[cellLoc] !== ""){
      isEmpty = false;
    } 
    const newGrid = gridArray.map((value, location) =>{
      if(location === cellLoc && isEmpty === true){
        if(isX){
          return "O"
        } else {
          return "X"
        }
      } else {
        return value;
      }
    })
    
    const winVal = verifyWin(newGrid);

    if(winVal === 'X'){
      let {scoreX} = score;
      scoreX++;
      setScore({...score, scoreX})
    } else if(winVal === 'O') {
      let {scoreO} = score;
      scoreO++;

      setScore({...score, scoreO})
    }

    setGridArray(newGrid);
    if(isEmpty === true){
      setIsX(!isX);
    }
    setPlayer(!player);

    for(let i = 0; i < gridArray.length; i++){
      if(gridArray[i] !== ""){
        count++;
      } 
    }

    if(count === gridArray.length && winBool == false){
      setGameEnd(true);
      toastr.success("Grid is full! Because no matches were made neither side gets any points! Reset to try again!");
    }
  }

  const resetGrid = () => {
    setPlayer(false);
    setGameEnd(false);
    setGridArray(Array(9).fill(""))
    isEmpty = false;
    setIsX(true);
    winBool = false;
  }

  const resetScore = () => {
    score.scoreO = 0;
    score.scoreX = 0;
    resetGrid();
  }

  const roundOverToast = () => {
    toastr.success("round is over! reset to play again!");
    return;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
        <Score scoreValX = {[score.scoreX]} scoreValO = {[score.scoreO]} player = {player}/>
        <Grid gridArr={gridArray} onClick={click}/>
      </header>
      <div class="buttons">
        <button onClick={resetGrid}>Reset Grid</button>
      </div>
      <div class="buttons">
        <button onClick={resetScore}>Reset Score & Grid</button>
      </div>
      <div class="description">
        <h1 id="#descTitle">Game Description & Instructions:</h1>
        <p>Welcome to Tic Tac Toe! Simply get ready to play as O against X and click on a box until you've made a connection! Whoever makes a connection first wins! Be sure to get a friend to try it out and play as X while you're at it!</p>
      </div>
    </div>
  );
}

export default App;
