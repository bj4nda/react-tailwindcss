import "./App.css"
import React, {useState} from "react"
import data from "./data"
const App = () => {
  const [showFinalResults, setShowFinalResults] = useState(false)
  const [score, setScore] = useState(0)
  const [currQuestion, setCurrQuestion] = useState(data)

  const optionClicked = selected => {
    /*     console.log(selected)
     */ if (selected) {
      setScore(score + 1)
    }
    if (setCurrQuestion + 1 < questions.length) {
      setCurrQuestion(currQuestion + 1)
    } else {
      setShowFinalResults[true]
    }
  }

  const restartGame = () => {
    setScore(0)
    setCurrQuestion(0)
    setShowFinalResults(false)
  }
  return (
    <div className="App">
      {/* Header */}
      <h1>Quiz</h1>

      <h2>Score: {score}</h2>
      {showFinalResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>1 out 0f 7 -(20%)</h2>
          <button onClick={() => restartGame()}>Restart Game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question {currQuestion} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currQuestion].question}</h3>

          <ul>
            {questions[currQuestion].questionoption.map(option => {
              return (
                <li
                  onClick={() => optionClicked(option.optionvalue)}
                  key={option.optionid}
                >
                  {option.optionvalue}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App
