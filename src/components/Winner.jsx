import { Square } from './square.jsx'

export function Winner ({ winner, resetGame }) {
  if (winner === null) return null
  const winnerText = winner === false ? 'Empate' : 'Gano: '

  return (
    <section className='winner'>
      <div className='text'>
        <h2>
          {winnerText}
        </h2>
        <header className='win'>
          <Square>{winner}</Square>
        </header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
