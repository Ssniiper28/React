import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/square'
import { TURNS } from './constants'
import { checkWinnerFrom } from './logic/board'
import { Winner } from './components/Winner'

function App () {
  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }
  // variables
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) {
      return JSON.parse(boardFromStorage)
    } else {
      return Array(9).fill(null)
    }
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage || TURNS.x
  })
  const [winner, setWinner] = useState(null)

  // funciones
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    const newWinner = checkWinnerFrom(newBoard)
    setBoard(newBoard)
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    setTurn(newTurn)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>
      <Winner winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
