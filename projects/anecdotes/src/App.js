import { useState } from 'react'

const H1Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
} 

const PrintAnecdote = ({ anecdote }) => {
  return (
    <>
      {anecdote}
    </>
  )
}

const PrintPoints = ({ points }) => {
  return (
    <>
      has {points} votes
    </>
  )
}

const LineBreak = () => {
  return (
    <br></br>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // Constants
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  // Stateful Variables
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([...Array(7)].map(x => 0))

  // Event Handlers
  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    console.log(copy)
    console.log(Math.max(...copy))
  }

  // Component Rendering
  return (
    <div>
      <H1Header text="Anecdote of the day" />
      <PrintAnecdote anecdote={anecdotes[selected]} />
      <LineBreak />
      <PrintPoints points={points[selected]} />
      <LineBreak />
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleNextAnecdote} text="next anecdote" />
      <H1Header text="Anecdote with most votes" />
      <PrintAnecdote anecdote={anecdotes[points.indexOf(Math.max(...points))]} />
      <LineBreak />
      <PrintPoints points={Math.max(...points)} />
    </div>
  )
}

export default App