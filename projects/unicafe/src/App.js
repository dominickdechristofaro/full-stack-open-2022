import { useState } from 'react'

const H1Header = ({ text }) => {
  return (
    <h1>
      {text}
    </h1>
  )
}

const Button = ({ onClick, text }) => {
  return (
      <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({ text, value}) => {
  if (text === 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td> 
      </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, count}) => {
  if (count === 0) {
    return ( 
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={count} />
        <StatisticLine text="average" value={Math.round((good - bad) / count * 10) / 10} />
        <StatisticLine text="positive" value={Math.round(good / count * 100 * 10) / 10} />
      </tbody>
    </table>
  )
}

const App = () => {
  // Constants
  const feedbackHeader = 'give feedback'
  const statisticsHeader = 'statistics'
  
  // Stateful Variables
  const [count, setCount] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  // Funcations 
  const increaseGood = () => {
    setCount(count + 1)
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    setCount(count + 1)
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    setCount(count + 1)
    setBad(bad + 1)
  }

  // Component Rendering
  return (
    <div>
      <H1Header text={feedbackHeader} />
      <Button onClick={increaseGood} text={'good'} />
      <Button onClick={increaseNeutral} text={'neutral'} />
      <Button onClick={increaseBad} text={'bad'} />
      <H1Header text={statisticsHeader} />
      <Statistics good={good} neutral={neutral} bad={bad} count={count}/>
    </div>
  )
}

export default App