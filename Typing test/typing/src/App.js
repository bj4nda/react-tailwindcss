import {useState, useEffect, useRef} from "react"
import randomWords from "random-words"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const NUM_OF_WORDS = 200
const SECONDS = 10

function App() {
  const [words, setWords] = useState([])
  const [countdown, setCountdown] = useState(SECONDS)
  const [currentInput, setCurrentInput] = useState([])
  const [currWordIndex, setCurrWordIndex] = useState(0)
  const [currCharIndex, setCurrCharIndex] = useState(-1)
  const [currChar, setCurrChar] = useState("")
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [status, setStatus] = useState("waiting")
  const textInput = useRef(null)

  useEffect(() => {
    setWords(generateWords())
  }, [])

  useEffect(() => {
    if (status === "started") {
      textInput.current.focus()
    }
  }, [status])

  function generateWords() {
    return new Array(NUM_OF_WORDS).fill(null).map(() => randomWords())
  }

  function start() {
    if (status === "finished") {
      setWords(generateWords())
      setCurrWordIndex(0)
      setCorrect(0)
      setIncorrect(0)
      setCurrCharIndex(-1)
      setCurrChar("")
    }
    if (status !== "started") {
      setStatus("started")
      let interval = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown === 0) {
            clearInterval(interval)
            setStatus("finished")
            setCurrentInput("")
            return SECONDS
          } else {
            return prevCountdown - 1
          }
        })
      }, 1000)
    }
  }

  function handleKeyDown({keyCode, key}) {
    if (keyCode === 32) {
      checkMatch()
      setCurrentInput("")
      setCurrWordIndex(currWordIndex + 1)
      setCurrCharIndex(-1)
    } else if (keyCode === 8) {
      setCurrCharIndex(currCharIndex - 1)
      setCurrChar("")
    } else {
      setCurrCharIndex(currCharIndex + 1)
      setCurrChar(key)
    }
  }

  function checkMatch() {
    const wordToCompare = words[currWordIndex]
    const doesItMatch = wordToCompare === currentInput.trim()
    console.log({})
    if (doesItMatch) {
      setCorrect(correct + 1)
    } else {
      setIncorrect(incorrect + 1)
    }
  }

  function getChar(wordIdx, charIdx, char) {
    if (
      wordIdx === currWordIndex &&
      charIdx === currCharIndex &&
      currChar &&
      status !== "finished"
    ) {
      if (char === currChar) {
        return "has-background-success"
      } else {
        return "has-background-danger"
      }
    } else if (
      wordIdx === currWordIndex &&
      currCharIndex >= words[currWordIndex].length
    ) {
      return "has-background-danger"
    } else {
      return ""
    }
  }

  return (
    <div className="App">
      <div className="section is-size-1 has-text-centered has-text-primary">
        <h2>{countdown}</h2>
      </div>
      <div className="control is-expanded section">
        <input
          type="text"
          ref={textInput}
          disabled={status !== "started"}
          className="input"
          onKeyDown={handleKeyDown}
          value={currentInput}
          onChange={ev => setCurrentInput(ev.target.value)}
        />
        <button className="button is-info is-fullwidth" onClick={start}>
          Start
        </button>
      </div>
      {status === "started" && (
        <div className="section">
          <div className="card">
            <div className="card-content">
              <div className="content">
                {words.map((word, idx) => (
                  <>
                    <span key={idx}>
                      {word.split("").map((char, i) => (
                        <span className={getChar(idx, i, char)} key={i}>
                          {char}
                        </span>
                      ))}
                    </span>
                    <span> </span>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {status === "finished" && (
        <div className="section">
          <div className="columns">
            <div className="column has-text-centered">
              <p className="is-size-5">Words per minute:</p>
              <div className="p has-text-primary is-size-1">{correct}</div>
            </div>
            <div className="column has-text-centered">
              <div className="is-size-5">Accuracy: </div>
              <p className="has-text-info is-size-1">
                {Math.round((correct / (correct + incorrect)) * 100)} %
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
