import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

export default function Wordle({ solution }) {

    const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution)

    useEffect (() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

    return (
    <>      
    <div>solution: {solution}</div>
    <div>current guess: {currentGuess}</div>
</>
    )
}