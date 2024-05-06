import { useState } from 'react'
import Square from './square'

const Board = () => {
  const initialSquares = Array(9).fill(null)
  const [squares, setSquares] = useState(initialSquares)
  const [xIsNext, setXIsNext] = useState(true)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    const newSquares = [...squares]
    newSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />
  }

  const resetGame = () => {
    setSquares(initialSquares)
    setXIsNext(true)
  }

  const winner = calculateWinner(squares)

  // const status = winner
  //   ? `Winner: ${winner}`
  //   : `Next player: ${xIsNext ? 'X' : 'O'}`
  const status = winner ? 'Game Over' : `Next player: ${xIsNext ? 'X' : 'O'}`

  const status2 = winner ? `${winner}` : 'none'

  const buttonStyle = {
    marginTop: '15px',
    marginBottom: '16px',
    width: '80px',
    height: '40px',
    backgroundColor: '#8acaca',
    color: 'white',
    fontSize: '16px',
  }

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }

  const rowStyle = {
    display: 'flex',
  }

  const instructionsStyle = {
    marginTop: '5px',
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '16px',
  }

  return (
    <div className="board" style={containerStyle}>
      <div className="status" style={instructionsStyle}>
        {status}
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{status2}</span>
      </div>
      <button className="btn" style={buttonStyle} onClick={resetGame}>
        Reset
      </button>
      <div className="board-row" style={rowStyle}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row" style={rowStyle}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row" style={rowStyle}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
