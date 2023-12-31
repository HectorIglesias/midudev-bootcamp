import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

  if (props.all === 0 && props.por_positive === 0 && props.average === 0){
    return(
      <p>No feedback given</p>
    )
  }

  return (
    <p>
      All: {props.all}<br/>
      % positive: {props.por_positive}<br/>
      Average: {props.average}
    </p>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 
  const handleGood = () => {
    setGood (good + 1)
  }

  const handleNeutral = () => {
    setNeutral (neutral + 1)
  }

  const handleBad = () => {
    setBad (bad + 1)
  }
  
  const all = good + neutral + bad 
  const por_positive = (all > 0) ? (good/all) * 100 : 0
  const average = (all > 0) ? (good - bad)/all : 0


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <Statistics all = {all} por_positive = {por_positive} average = {average}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)