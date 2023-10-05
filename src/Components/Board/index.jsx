import './board.css';
import Square from '../Square';
import calcWinner from '../calcWinner';

export default function Board({ squares, xIsNext, onPlay}) {

   function handleClick(i) {
      //se squares já estiver marcado ele não sobrescreve
      if (squares[i] || calcWinner(squares)) {
         return;
      }

      const nextSquares = squares.slice();
      if (xIsNext) {
         nextSquares[i] = "X";
      } else {
         nextSquares[i] = "O";
      }
      onPlay(nextSquares);
   }

   const winner = calcWinner(squares);
   let status;
   if (winner) {
      status = " Winner: " + winner
   } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
   }

   return (
      <>
         <div className='status'>{status}</div>
         <div className='board-row'>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
         </div>
      </>
   )
}