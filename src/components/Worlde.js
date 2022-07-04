import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Endgame from './Endgame'

export default function Wordle({ solution }) {

    const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution)
    const [showEndgame, setShowEndgame] = useState(false)

    useEffect (() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
            console.log('YOU WIN! HIT REFRESH')
            setTimeout(() => setShowEndgame(true), 2000)
            window.removeEventListener('keyup', handleKeyup)
        }
        if(turn > 5) {
            console.log('you lose! no more guesses')
            setTimeout(() => setShowEndgame(true), 2000)
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    return (
    <>      
    <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
    <Keypad usedKeys={usedKeys}/>
    {showEndgame && <Endgame  isCorrect={isCorrect} turn={turn} solution={solution}/>}
</>
    )
}