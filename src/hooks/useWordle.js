import { useState } from 'react'

const useWorlde = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState("")
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    // format attempt into an array
    const formatGuess = () => {

    }
    // add new guess to the state of guesses
    // check if the word is correct
    const addNewGuess = () => {

    }
    // handle event (track current guess and add new guess when enter is hit)
    const handleKeyup = ({ key }) => {
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWorlde